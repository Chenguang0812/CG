/**
 * 作品清單 —— 新增作品只要改這個檔案
 *
 * 新作品請加在「最上面」，網站會依照這裡的順序排列。
 *
 *   title     作品名稱（必填）
 *   category  分類（必填）。寫一個新分類，篩選按鈕就會自動出現
 *   link      YouTube 網址（必填）。縮圖會自動抓，不用另外準備
 *   featured  設成 true 會出現在首頁「精選作品」（選填）
 *
 * 範例：
 *   { title: "新作品", category: "綜藝", link: "https://youtu.be/xxxxxxxxxxx", featured: true },
 */
export const works = [
  { title: "反骨男孩", category: "綜藝", link: "https://youtu.be/v4eZ1pXI35k" },
  { title: "嗨！營業中", category: "綜藝", link: "https://www.youtube.com/watch?v=TUEXM6F4sjY&t=106s" },
  { title: "Joan找好店", category: "Vlog", link: "https://youtu.be/jwlRuBu4yJg" },
  { title: "傑克開吃", category: "美食", link: "https://www.youtube.com/watch?v=XVlzWB1zJzk&list=PLd6uy9rEz5Xg3qXMt5dHFhxecletEqpRM&index=5" },
  { title: "麻姑師太 - 阿民", category: "綜藝", link: "https://youtu.be/oIXsSxx9E68" },
  { title: "KI笑人生", category: "綜藝", link: "https://youtu.be/UK-a1Nb8Riw" },
  { title: "雨廷的霆仔", category: "綜藝", link: "https://www.youtube.com/watch?v=Qe72umeMG68&t=224s" },
  { title: "黃小米Mii", category: "Vlog", link: "https://www.youtube.com/watch?v=GMeTXaiYNws" },
  { title: "陳又榕波波蓁", category: "Vlog", link: "https://www.youtube.com/watch?v=o1N-YhAyyZY&t=83s" },
  { title: "大鈞", category: "Vlog", link: "https://youtu.be/u6FMHWCImLA" },
  { title: "尼克星", category: "遊戲影片", link: "https://youtu.be/7lpH9F_e5iw" },
  { title: "盧志遠", category: "Vlog", link: "https://youtu.be/eqXs_hMQbBY" },
  { title: "晨光(老闆本闆)", category: "遊戲影片", link: "https://youtu.be/6OkP8vTQ4_E" },
  { title: "傑克開吃", category: "美食", link: "https://youtu.be/Gc_81YVAawQ" },
  { title: "禾園全屋訂制", category: "商業影片", link: "https://youtu.be/pVxR97fy0Gc" },
  { title: "天母無聊怪", category: "商業影片", link: "https://youtu.be/8DDHqIsPkYA" },
  { title: "Dinner Lin", category: "Vlog", link: "https://youtu.be/sbAlLB9Z_68" },
  { title: "日本不動產 R-GROUP", category: "商業影片", link: "https://www.youtube.com/watch?v=HhifZqczyxs" },
  { title: "日本不動產 R-GROUP", category: "商業影片", link: "https://youtu.be/CjfDUxh95ZI" },
  { title: "VC Talk", category: "商業影片", link: "https://youtu.be/Cwau6xEsspE" },
  { title: "晞晞嘻嘻", category: "遊戲影片", link: "https://youtu.be/KApfns-Ffgw" },
  { title: "陳又榕波波蓁", category: "Vlog", link: "https://www.youtube.com/watch?v=syUnXsZMN3w&t=136s" },
  { title: "嗨！營業中", category: "綜藝", link: "https://www.youtube.com/watch?v=iHWfAl-utSw&t=21s" },
  { title: "嗨！營業中", category: "綜藝", link: "https://www.youtube.com/watch?v=q-gSvrWvomQ&t=337s" },
  { title: "嗨！營業中", category: "綜藝", link: "https://www.youtube.com/watch?v=2hkgKjq6rBI&t=79s" },
  { title: "達達Car后", category: "綜藝", link: "https://youtu.be/rudywJXb3EU" },
  { title: "嗨！營業中", category: "綜藝", link: "https://youtu.be/6N9PNBW5t3E" },
  { title: "尼克星", category: "遊戲影片", link: "https://www.youtube.com/watch?v=qo9CONwZAac&t=163s" },
  { title: "WuWei無為", category: "遊戲影片", link: "https://youtu.be/0iDJ7agNpsc" },
  { title: "ROALX", category: "遊戲影片", link: "https://www.youtube.com/watch?v=Kg-DR-O_rP8&t=147s" },
];

/** 首頁精選顯示幾支 */
export const HOME_FEATURED_COUNT = 6;
