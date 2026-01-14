/**
 * Friendflix - 好友資料檔案
 * 週六聚會人物圖鑑
 */

export interface Friend {
  id: string;
  name: string;
  nickname: string;
  showTitle: string;
  matchPercentage: string;
  tags: string[];
  description: string;
  tips: string;
  avatarUrl?: string;
}

export const friends: Friend[] = [
  {
    id: "zhuang-zi-xian",
    name: "莊子賢",
    nickname: "小龐",
    showTitle: "猩猩大冒險",
    matchPercentage: "99.99%",
    tags: ["很會煮", "很會吃", "很變態"],
    description: "冰淇淋三星級大廚兼斜槓健身教練x營養師",
    tips: "跟他聊黑絲襪就對了",
    avatarUrl: "/avatars/莊子賢.jpg"
  },
  {
    id: "huang-zhong-xuan",
    name: "黃仲宣",
    nickname: "大家的爸爸",
    showTitle: "財富金手指",
    matchPercentage: "87.78%",
    tags: ["嗜甜如命", "以前很瘦現在很胖", "也很變態"],
    description: "多情的胖王子，現在眼裡只有狗兒子",
    tips: "跟他聊很宅，或色色的話題",
    avatarUrl: "/avatars/黃仲宣.jpg"
  },
  {
    id: "lin-yi-jun",
    name: "林怡均",
    nickname: "Apple",
    showTitle: "大不出來的痛",
    matchPercentage: "77.87%",
    tags: ["不醉不歸", "鋼琴仙女", "笑點低", "英文高手"],
    description: "不說話的台大電機碩士，一說話變傻子",
    tips: "可以諮詢各種排便順暢的秘方",
    avatarUrl: "/avatars/林怡均.jpg"
  },
  {
    id: "huang-wen-yu",
    name: "黃玟瑜",
    nickname: "早餐魔人",
    showTitle: "魔獸世界裡的烏薩奇",
    matchPercentage: "88.87%",
    tags: ["放蕩不羈", "合唱指揮", "AZ扛壩子", "宅宅"],
    description: "世界上沒有比我更醉的新娘",
    tips: "動漫、遊戲、醫學研究",
    avatarUrl: "/avatars/黃玟瑜.png"
  },
  {
    id: "pan-yu-xin",
    name: "潘堉炘",
    nickname: "博美",
    showTitle: "讓團部變乾淨的魔法",
    matchPercentage: "98.87%",
    tags: ["笑到吐", "賢慧", "發薪水的人"],
    description: "不知道為什麼，但大家都不敢惹她",
    tips: "勞資糾紛大師",
    avatarUrl: "/avatars/潘堉炘.png"
  },
  {
    id: "guo-cheng-han",
    name: "郭承翰",
    nickname: "蟾蜍",
    showTitle: "快樂長大就好",
    matchPercentage: "0.87%",
    tags: ["裝可愛", "貼心", "好姐妹"],
    description: "會彈琴會健身但深藏不露的男人",
    tips: "造橋鋪路停電找他就對了",
    avatarUrl: "/avatars/郭承翰.png"
  },
  {
    id: "xie-qi-rui",
    name: "謝其叡",
    nickname: "猥褻",
    showTitle: "能幹就是好老婆",
    matchPercentage: "69.69%",
    tags: ["髒髒", "很會流汗", "肌肉棒子"],
    description: "恭喜交大電機碩士口試完畢",
    tips: "據說在家裡很會做家事",
    avatarUrl: "/avatars/謝其叡.png"
  },
  {
    id: "chen-ru-yi",
    name: "陳如意",
    nickname: "韓妞",
    showTitle: "兇貓的崛起",
    matchPercentage: "66.66%",
    tags: ["古典美", "社交舞", "語速不快", "藝術"],
    description: "辛苦的台銀UIUX設計師",
    tips: "聊設計、聊美術、聊韓國購物",
    avatarUrl: "/avatars/陳如意.png"
  },
  {
    id: "zhang-yang-hao",
    name: "張仰浩",
    nickname: "長髮美男",
    showTitle: "軟體工程百科全書",
    matchPercentage: "FF.FF%",
    tags: ["工程師", "會煮飯", "低音"],
    description: "腳是全身上下最脆弱的器官",
    tips: "聊軟體、聊煮菜、聊拐杖去哪買",
    avatarUrl: "/avatars/張仰浩.png"
  },
  {
    id: "wu-jia-qian",
    name: "吳佳蒨",
    nickname: "生命鬥士",
    showTitle: "學霸中的學霸",
    matchPercentage: "77.77%",
    tags: ["資優班", "罕病", "團長"],
    description: "能歌善舞的新娘子",
    tips: "秘密",
    avatarUrl: "/avatars/吳佳蒨.png"
  },
  {
    id: "lin-kan-xuan",
    name: "林侃璇",
    nickname: "侃V",
    showTitle: "主治醫生的辛酸血淚",
    matchPercentage: "77.77%",
    tags: ["小兒科", "免疫次專", "喜歡小孩"],
    description: "彰基黃金單身女郎",
    tips: "聊音樂劇、聊醫院八卦",
    avatarUrl: "/avatars/林侃璇.png"
  },
  {
    id: "li-yi-qing",
    name: "李奕慶",
    nickname: "老鼠",
    showTitle: "差點被學業埋沒的PA專家",
    matchPercentage: "87.65%",
    tags: ["麵包師傅", "鬍渣暖男", "愛情長跑"],
    description: "書華的直屬學弟",
    tips: "講幹話、音響專家",
    avatarUrl: "/avatars/李奕慶.png"
  },
  {
    id: "chen-ruo-qing",
    name: "陳若晴",
    nickname: "肉晴",
    showTitle: "內蒙古的白雪公主",
    matchPercentage: "88.88%",
    tags: ["曬不黑", "不喝水", "女高音", "小兒科"],
    description: "Apple最愛的學妹",
    tips: "值班發生的各種慘狀",
    avatarUrl: "/avatars/陳若晴.png"
  },
  {
    id: "wang-sheng-bin",
    name: "王勝斌",
    nickname: "阿貓",
    showTitle: "不可能是大學教授",
    matchPercentage: "85.33%",
    tags: ["山羊鬍", "樂團主唱", "體力魔人"],
    description: "一直請朋友去演講的耍廢教授",
    tips: "人資、企管、聲音的奧秘",
    avatarUrl: "/avatars/王勝斌.png"
  },
  {
    id: "guan-da-han",
    name: "官大涵",
    nickname: "CTO",
    showTitle: "賣過公司的男人",
    matchPercentage: "89.77%",
    tags: ["創業家", "幽默", "中大獎"],
    description: "辣個男人太狠了",
    tips: "創業、技術管理",
    avatarUrl: "/avatars/官大涵.png"
  },
  {
    id: "xie-jia-zhen",
    name: "謝佳蓁",
    nickname: "瑰寶媽",
    showTitle: "八卦小天后",
    matchPercentage: "83.77%",
    tags: ["話很多", "美妝博主", "法國"],
    description: "第一次聽過這麼扯的愛情故事",
    tips: "媒體公關",
    avatarUrl: "/avatars/謝佳蓁.png"
  },
  {
    id: "wang-hong-yong",
    name: "王泓詠",
    nickname: "學妹",
    showTitle: "做自己最美",
    matchPercentage: "81.43%",
    tags: ["跨性別", "政大碩士", "潑辣"],
    description: "認真負責的團長小學弟",
    tips: "如何保養頭髮",
    avatarUrl: "/avatars/王泓詠.png"
  }
];

/**
 * 根據匹配度分組的輔助函數
 */
export const getMatchValue = (percentage: string): number => {
  const numStr = percentage.replace('%', '');
  // 處理特殊值如 "FF.FF"
  if (numStr.includes('FF')) {
    return 100; // 視為最高匹配度
  }
  return parseFloat(numStr) || 0;
};

export const groupFriendsByMatch = () => {
  const superFriends = friends.filter(f => getMatchValue(f.matchPercentage) >= 85);
  const todaysPicks = friends.filter(f => {
    const match = getMatchValue(f.matchPercentage);
    return match >= 75 && match < 85;
  });
  const surpriseGuests = friends.filter(f => {
    const match = getMatchValue(f.matchPercentage);
    return match < 75 || f.matchPercentage.includes('FF');
  });

  return {
    superFriends,
    todaysPicks,
    surpriseGuests
  };
};

/**
 * 根據名字生成漸層背景色
 */
export const generateAvatarGradient = (name: string): string => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
  ];
  
  const index = name.charCodeAt(0) % gradients.length;
  return gradients[index];
};

/**
 * 取得名字首字
 */
export const getInitial = (name: string): string => {
  return name.charAt(0);
};
