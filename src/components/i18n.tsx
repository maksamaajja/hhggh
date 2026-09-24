"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "EN" | "RU" | "KO" | "ZH" | "UA" | "FA";

export type Currency = "GRAM" | "STARS" | "TON" | "RUB" | "USD" | "EUR" | "UAH" | "TRY" | "KZT" | "CNY" | "AED";

export const CRYPTO_CURRENCIES: Currency[] = ["GRAM", "STARS", "TON"];

export const FIAT_CURRENCIES: Currency[] = ["RUB", "USD", "EUR", "UAH", "TRY", "KZT", "CNY", "AED"];

export const FIAT_FLAGS: Record<string, string> = {
  RUB: "🇷🇺",
  USD: "🇺🇸",
  EUR: "🇪🇺",
  UAH: "🇺🇦",
  TRY: "🇹🇷",
  KZT: "🇰🇿",
  CNY: "🇨🇳",
  AED: "🇦🇪",
};

type Dict = Record<string, Partial<Record<Lang, string>>>;

const strings: Dict = {
  "nav.games": { RU: "Игры", EN: "Games", KO: "게임", ZH: "游戏", UA: "Ігри", FA: "بازی‌ها" },
  "nav.market": { RU: "Маркет", EN: "Market", KO: "마켓", ZH: "市场", UA: "Маркет", FA: "بازار" },
  "nav.gifts": { RU: "Мои подарки", EN: "My gifts", KO: "내 선물", ZH: "我的礼物", UA: "Мої подарунки", FA: "هدایای من" },
  "nav.staking": { RU: "Стейкинг", EN: "Staking", KO: "스테이킹", ZH: "质押", UA: "Стейкінг", FA: "استیکینگ" },
  "nav.profile": { RU: "Профиль", EN: "Profile", KO: "프로필", ZH: "个人资料", UA: "Профіль", FA: "پروفایل" },

  "menu.title": { RU: "Меню", EN: "Menu", KO: "메뉴", ZH: "菜单", UA: "Меню", FA: "منو" },
  "menu.lang": { RU: "Язык", EN: "Language", KO: "언어", ZH: "语言", UA: "Мова", FA: "زبان" },
  "menu.notif": { RU: "Уведомления", EN: "Notifications", KO: "알림", ZH: "通知", UA: "Сповіщення", FA: "اعلان‌ها" },
  "menu.notifRow": { RU: "Push-уведомления", EN: "Push notifications", KO: "푸시 알림", ZH: "推送通知", UA: "Push-сповіщення", FA: "اعلان‌های فوری" },
  "menu.notifOn": { RU: "Уведомления включены", EN: "Notifications on", KO: "알림 켜짐", ZH: "通知已开启", UA: "Сповіщення увімкнено", FA: "اعلان‌ها روشن شد" },
  "menu.notifOff": { RU: "Уведомления выключены", EN: "Notifications off", KO: "알림 꺼짐", ZH: "通知已关闭", UA: "Сповіщення вимкнено", FA: "اعلان‌ها خاموش شد" },
  "menu.vib": { RU: "Вибрации", EN: "Haptics", KO: "진동", ZH: "震动", UA: "Вібрації", FA: "لرزش" },
  "menu.vibRow": { RU: "Тактильный отклик", EN: "Haptic feedback", KO: "햅틱 피드백", ZH: "触感反馈", UA: "Тактильний відгук", FA: "بازخورد لمسی" },
  "menu.vibOn": { RU: "Вибрация включена", EN: "Haptics on", KO: "진동 켜짐", ZH: "震动已开启", UA: "Вібрацію увімкнено", FA: "لرزش روشن شد" },
  "menu.vibOff": { RU: "Вибрация выключена", EN: "Haptics off", KO: "진동 꺼짐", ZH: "震动已关闭", UA: "Вібрацію вимкнено", FA: "لرزش خاموش شد" },
  "menu.anim": { RU: "Анимации", EN: "Animations", KO: "애니메이션", ZH: "动画", UA: "Анімації", FA: "انیمیشن‌ها" },
  "menu.animRow": { RU: "Анимации интерфейса", EN: "Interface animations", KO: "인터페이스 애니메이션", ZH: "界面动画", UA: "Анімації інтерфейсу", FA: "انیمیشن‌های رابط" },
  "menu.animOn": { RU: "Анимации включены", EN: "Animations on", KO: "애니메이션 켜짐", ZH: "动画已开启", UA: "Анімації увімкнено", FA: "انیمیشن‌ها روشن شد" },
  "menu.animOff": { RU: "Анимации выключены", EN: "Animations off", KO: "애니메이션 꺼짐", ZH: "动画已关闭", UA: "Анімації вимкнено", FA: "انیمیشن‌ها خاموش شد" },
  "menu.deals": { RU: "Показывать только предложения ≥50% от минимальной стоимости", EN: "Show only offers ≥50% of min price", KO: "최소 가격의 50% 이상 제안만 보기", ZH: "仅显示≥最低价50%的优惠", UA: "Показувати лише пропозиції ≥50% від мінімальної вартості", FA: "فقط پیشنهادات ≥۵۰٪ حداقل قیمت" },
  "menu.langChanged": { RU: "Язык интерфейса", EN: "Interface language", KO: "인터페이스 언어", ZH: "界面语言", UA: "Мова інтерфейсу", FA: "زبان رابط" },
  "menu.portalsToast": { RU: "Portals Web откроется в браузере", EN: "Portals Web will open in browser", KO: "Portals Web가 브라우저에서 열립니다", ZH: "Portals Web 将在浏览器中打开", UA: "Portals Web відкриється в браузері", FA: "Portals Web در مرورگر باز می‌شود" },
  "menu.giftAccountToast": { RU: "Gift Account — привязка профиля", EN: "Gift Account — link profile", KO: "Gift Account — 프로필 연결", ZH: "Gift Account — 绑定资料", UA: "Gift Account — прив'язка профілю", FA: "Gift Account — اتصال پروفایل" },
  "menu.currency": { RU: "Валюта", EN: "Currency", KO: "통화", ZH: "货币", UA: "Валюта", FA: "ارز" },
  "menu.crypto": { RU: "Криптовалюты", EN: "Cryptocurrencies", KO: "암호화폐", ZH: "加密货币", UA: "Криптовалюти", FA: "ارزهای دیجیتال" },
  "menu.fiat": { RU: "Валюты стран", EN: "Country currencies", KO: "국가 통화", ZH: "各国货币", UA: "Валюти країн", FA: "ارزهای کشورها" },
  "menu.currencyChanged": { RU: "Валюта", EN: "Currency", KO: "통화", ZH: "货币", UA: "Валюта", FA: "ارز" },

  "market.all": { RU: "Все подарки", EN: "All gifts", KO: "모든 선물", ZH: "全部礼物", UA: "Усі подарунки", FA: "همه هدایا" },
  "market.collections": { RU: "Коллекции", EN: "Collections", KO: "컬렉션", ZH: "系列", UA: "Колекції", FA: "مجموعه‌ها" },
  "market.stars": { RU: "Звезды", EN: "Stars", KO: "별", ZH: "星星", UA: "Зірки", FA: "ستاره‌ها" },
  "search.quick": { RU: "Быстрый поиск", EN: "Quick search", KO: "빠른 검색", ZH: "快速搜索", UA: "Швидкий пошук", FA: "جستجوی سریع" },

  "gifts.tab": { RU: "Гифты", EN: "Gifts", KO: "선물", ZH: "礼物", UA: "Гіфти", FA: "Gifts" },
  "offers.tab": { RU: "Офферы", EN: "Offers", KO: "오퍼", ZH: "报价", UA: "Офери", FA: "پیشنهادات" },
  "history.tab": { RU: "История", EN: "History", KO: "기록", ZH: "历史", UA: "Історія", FA: "تاریخچه" },

  "games.title": { RU: "Игры", EN: "Games", KO: "게임", ZH: "游戏", UA: "Ігри", FA: "بازی‌ها" },
  "games.taps": { RU: "Тапов", EN: "Taps", KO: "탭", ZH: "点击", UA: "Тапів", FA: "تاپ" },
  "games.desc": {
    RU: "Мини-игры с наградами в GRAM появятся совсем скоро. Пока — потренируйтесь тапать :)",
    EN: "Mini-games with GRAM rewards are coming soon. For now — practice tapping :)",
    KO: "GRAM 보상 미니게임이 곧 출시됩니다. 지금은 탭 연습을 :)",
    ZH: "GRAM 奖励小游戏即将上线。先练习点击吧 :)",
    UA: "Міні-ігри з нагородами в GRAM з'являться зовсім скоро. Поки — потренуйтесь тапати :)",
    FA: "بازی‌های کوچک با پاداش GRAM به‌زودی می‌آیند. فعلاً تپ کردن تمرین کنید :)",
  },
  "games.daily": { RU: "Ежедневный бокс", EN: "Daily box", KO: "일일 박스", ZH: "每日宝箱", UA: "Щоденний бокс", FA: "جعبه روزانه" },
  "games.soon": { RU: "Скоро", EN: "Soon", KO: "곧", ZH: "即将", UA: "Скоро", FA: "به‌زودی" },
  "games.rating": { RU: "Рейтинг сезона", EN: "Season rating", KO: "시즌 랭킹", ZH: "赛季排行", UA: "Рейтинг сезону", FA: "رتبه فصل" },
  "games.tapToast": { RU: "+10 очков опыта! Всего {n}", EN: "+10 XP! Total {n}", KO: "+10 경험치! 총 {n}", ZH: "+10 经验！共 {n}", UA: "+10 досвіду! Всього {n}", FA: "+10 تجربه! مجموع {n}" },
  "games.dailyToast": { RU: "Дейлик-бокс откроется в сезоне #2", EN: "Daily box opens in season #2", KO: "일일 박스는 시즌 #2에 열립니다", ZH: "每日宝箱将在第2赛季开启", UA: "Дейлік-бокс відкриється в сезоні #2", FA: "جعبه روزانه در فصل ۲ باز می‌شود" },
  "games.ratingToast": { RU: "Рейтинг: вы #{n} сезоне", EN: "Rating: you're #{n} this season", KO: "랭킹: 이번 시즌 #{n}위", ZH: "排行：本赛季第 #{n}", UA: "Рейтинг: ви #{n} сезону", FA: "رتبه: شما #{n} در فصل" },

  "profile.inv": { RU: "Инвентарь", EN: "Inventory", KO: "인벤토리", ZH: "库存", UA: "Інвентар", FA: "موجودی" },
  "profile.inv0": { RU: "Инвентарь 0", EN: "Inventory 0", KO: "인벤토리 0", ZH: "库存 0", UA: "Інвентар 0", FA: "موجودی ۰" },
  "profile.cashback": { RU: "Кэшбэк", EN: "Cashback", KO: "캐시백", ZH: "返现", UA: "Кешбек", FA: "کش‌بک" },
  "profile.season": { RU: "СЕЗОН #2", EN: "SEASON #2", KO: "시즌 #2", ZH: "第2赛季", UA: "СЕЗОН #2", FA: "فصل ۲" },
  "profile.invite": { RU: "Пригласить друзей", EN: "Invite friends", KO: "친구 초대", ZH: "邀请好友", UA: "Запросити друзів", FA: "دعوت دوستان" },
  "profile.inviteH": { RU: "Приглашайте друзей и зарабатывайте GRAM", EN: "Invite friends and earn GRAM", KO: "친구를 초대하고 GRAM을 버세요", ZH: "邀请好友赚取 GRAM", UA: "Запрошуйте друзів і заробляйте GRAM", FA: "دوستان را دعوت کنید و GRAM کسب کنید" },
  "profile.statsValue": { RU: "Стоимость инвентаря", EN: "Inventory value", KO: "인벤토리 가치", ZH: "库存价值", UA: "Вартість інвентарю", FA: "ارزش موجودی" },
  "profile.boughtSold": { RU: "Куплено/Продано", EN: "Bought/Sold", KO: "구매/판매", ZH: "买入/卖出", UA: "Куплено/Продано", FA: "خرید/فروش" },
  "profile.totalVol": { RU: "Общий объем", EN: "Total volume", KO: "총 거래량", ZH: "总交易量", UA: "Загальний обсяг", FA: "حجم کل" },
  "profile.refPaused": { RU: "Реферальная программа на паузе", EN: "Referral program on pause", KO: "추천 프로그램 일시정지", ZH: "推荐计划已暂停", UA: "Реферальна програма на паузі", FA: "برنامه ارجاع متوقف است" },
  "profile.refDesc": { RU: "Получайте 10% сезонных очков с покупок приглашённых друзей", EN: "Earn 10% of seasonal points from friends' purchases", KO: "친구 구매의 10% 시즌 포인트 획득", ZH: "从好友购买中获得10%赛季积分", UA: "Отримуйте 10% сезонних очок із покупок запрошених друзів", FA: "۱۰٪ امتیاز فصل از خرید دوستان دریافت کنید" },
  "profile.invEmpty": { RU: "Инвентарь пуст", EN: "Inventory is empty", KO: "인벤토리가 비어 있습니다", ZH: "库存为空", UA: "Інвентар порожній", FA: "موجودی خالی است" },
  "profile.invEmptySub": { RU: "Добавьте подарки из Telegram — они появятся здесь", EN: "Add gifts from Telegram — they will appear here", KO: "텔레그램에서 선물을 추가하면 여기에 표시됩니다", ZH: "从 Telegram 添加礼物，将显示在此处", UA: "Додайте подарки з Telegram — вони з'являться тут", FA: "هدایای تلگرام را اضافه کنید — اینجا نمایش داده می‌شوند" },
  "profile.howToAdd": { RU: "Как добавить", EN: "How to add", KO: "추가 방법", ZH: "如何添加", UA: "Як додати", FA: "چگونه اضافه کنیم" },
  "profile.cashbackPaused": { RU: "Кэшбэк на паузе", EN: "Cashback on pause", KO: "캐시백 일시정지", ZH: "返现已暂停", UA: "Кешбек на паузі", FA: "کش‌بک متوقف است" },
  "profile.cashbackSub": { RU: "Следите за обновлениями — вернём процент с каждой покупки в GRAM", EN: "Stay tuned — we'll return a percent of every purchase in GRAM", KO: "업데이트를 지켜보세요 — 구매액의 일정 비율을 GRAM으로 돌려드립니다", ZH: "敬请期待 — 每笔消费将返还部分 GRAM", UA: "Стежте за оновленнями — повернемо відсоток із кожної покупки в GRAM", FA: "منتظر بمانید — درصدی از هر خرید را به GRAM برمی‌گردانیم" },
  "profile.seasonSheet": { RU: "Сезон #2", EN: "Season #2", KO: "시즌 #2", ZH: "第2赛季", UA: "Сезон #2", FA: "فصل ۲" },
  "profile.yourProgress": { RU: "Ваш прогресс", EN: "Your progress", KO: "내 진행률", ZH: "您的进度", UA: "Ваш прогрес", FA: "پیشرفت شما" },
  "profile.toReward": { RU: "До награды 1 уровня: 100 ★", EN: "To level 1 reward: 100 ★", KO: "레벨 1 보상까지: 100 ★", ZH: "距1级奖励：100 ★", UA: "До нагороди 1 рівня: 100 ★", FA: "تا پاداش مرحله ۱: ۱۰۰ ★" },
  "profile.copied": { RU: "Реферальная ссылка скопирована", EN: "Referral link copied", KO: "추천 링크 복사됨", ZH: "推荐链接已复制", UA: "Реферальне посилання скопійовано", FA: "لینک ارجاع کپی شد" },
  "profile.inviteToast": { RU: "Перейдите в «Мои подарки» → Добавить", EN: "Go to “My gifts” → Add", KO: "'내 선물' → 추가로 이동", ZH: "前往“我的礼物”→ 添加", UA: "Перейдіть у «Мої подарунки» → Додати", FA: "به «هدایای من» → افزودن بروید" },
  "profile.statsCost": { RU: "Стоимость инвентаря: 0 GRAM", EN: "Inventory value: 0 GRAM", KO: "인벤토리 가치: 0 GRAM", ZH: "库存价值：0 GRAM", UA: "Вартість інвентаря: 0 GRAM", FA: "ارزش موجودی: ۰ GRAM" },
  "profile.statsBought": { RU: "Куплено 0 · Продано 0", EN: "Bought 0 · Sold 0", KO: "구매 0 · 판매 0", ZH: "买入 0 · 卖出 0", UA: "Куплено 0 · Продано 0", FA: "خرید ۰ · فروش ۰" },
  "profile.statsVol": { RU: "Общий объём: 0 GRAM", EN: "Total volume: 0 GRAM", KO: "총 거래량: 0 GRAM", ZH: "总交易量：0 GRAM", UA: "Загальний об'єм: 0 GRAM", FA: "حجم کل: ۰ GRAM" },
  "profile.paused": { RU: "На паузе", EN: "On pause", KO: "일시정지", ZH: "已暂停", UA: "На паузі", FA: "متوقف" },
  "profile.level": { RU: "Уровень {n}", EN: "Level {n}", KO: "레벨 {n}", ZH: "{n} 级", UA: "Рівень {n}", FA: "مرحله {n}" },

  "staking.gifts": { RU: "Gifts", EN: "Gifts", KO: "선물", ZH: "礼物", UA: "Gifts", FA: "Gifts" },
  "staking.gram": { RU: "GRAM", EN: "GRAM", KO: "GRAM", ZH: "GRAM", UA: "GRAM", FA: "GRAM" },
  "staking.title": { RU: "Стейкинг подарков", EN: "Gift staking", KO: "선물 스테이킹", ZH: "礼物质押", UA: "Стейкінг подарунків", FA: "استیکینگ هدایا" },
  "staking.deposit": { RU: "Внести подарки", EN: "Deposit gifts", KO: "선물 입금", ZH: "存入礼物", UA: "Внести подарунки", FA: "واریز هدایا" },
  "staking.fill": { RU: "Пополнить стейк", EN: "Top up stake", KO: "스테이크 충전", ZH: "增加质押", UA: "Поповнити стейк", FA: "افزایش استیک" },
  "staking.progress": { RU: "Прогресс лимита", EN: "Limit progress", KO: "한도 진행률", ZH: "额度进度", UA: "Прогрес ліміту", FA: "پیشرفت سقف" },
  "staking.yourStake": { RU: "Ваш стейк", EN: "Your stake", KO: "내 스테이크", ZH: "您的质押", UA: "Ваш стейк", FA: "استیک شما" },
  "staking.stakeLimit": { RU: "Лимит стейка", EN: "Stake limit", KO: "스테이크 한도", ZH: "质押上限", UA: "Ліміт стейку", FA: "سقف استیک" },
  "staking.giftsHint": {
    RU: "Переключитесь на GRAM, чтобы посмотреть статистику и внести награды",
    EN: "Switch to GRAM to view stats and deposit rewards",
    KO: "GRAM으로 전환하여 통계를 보고 보상을 입금하세요",
    ZH: "切换到 GRAM 查看统计并存入奖励",
    UA: "Переключіться на GRAM, щоб переглянути статистику та внести нагороди",
    FA: "برای دیدن آمار و واریز پاداش به GRAM بروید",
  },
  "staking.openGram": { RU: "Открыть GRAM", EN: "Open GRAM", KO: "GRAM 열기", ZH: "打开 GRAM", UA: "Відкрити GRAM", FA: "باز کردن GRAM" },
  "staking.aprInfo": { RU: "Держите подарки в инвентаре и получайте пассивные GRAM-награды", EN: "Keep gifts in inventory and earn passive GRAM rewards",     KO: "선물을 인벤토리에 보관하고 GRAM 보상을 받으세요", ZH: "将礼物放在库存中，赚取被动 GRAM 奖励", UA: "Тримайте подарки в інвентарі та отримуйте пасивні GRAM-нагороди", FA: "هدایا را در موجودی نگه دارید و پاداش GRAM منفعل بگیرید" },
  "staking.tipTitle": { RU: "Добавьте подарки чтобы начать зарабатывать", EN: "Add gifts to start earning", KO: "선물을 추가해 수익을 시작하세요", ZH: "添加礼物开始赚取", UA: "Додайте подарки, щоб почати заробляти", FA: "برای شروع درآمد هدیه اضافه کنید" },
  "staking.tipRemaining": { RU: "Внесите ещё {n} GRAM в подарках, чтобы активировать стейкинг", EN: "Deposit {n} more GRAM in gifts to activate staking", KO: "스테이킹 활성화를 위해 {n} GRAM 더 입금하세요", ZH: "再存入 {n} GRAM 礼物即可激活质押", UA: "Внесіть ще {n} GRAM у подарках, щоб активувати стейкінг", FA: "{n} GRAM دیگر واریز کنید تا استیکینگ فعال شود" },
  "staking.tipActive": { RU: "Стейкинг активен — награды капают каждый час", EN: "Staking active — rewards drop every hour", KO: "스테이킹 활성 — 매시간 보상 지급", ZH: "质押已激活 — 每小时发放奖励", UA: "Стейкінг активний — нагороди капають щогодини", FA: "استیکینگ فعال است — پاداش هر ساعت" },
  "staking.depositSheet": { RU: "Внести в стейк", EN: "Deposit to stake", KO: "스테이크에 입금", ZH: "存入质押", UA: "Внести в стейк", FA: "واریز به استیک" },
  "staking.depositBtn": { RU: "Внести {n} GRAM", EN: "Deposit {n} GRAM", KO: "{n} GRAM 입금", ZH: "存入 {n} GRAM", UA: "Внести {n} GRAM", FA: "واریز {n} GRAM" },
  "staking.available": { RU: "Доступно к лимиту", EN: "Available to limit", KO: "한도까지 가능", ZH: "额度内可用", UA: "Доступно до ліміту", FA: "در دسترس تا سقف" },
  "staking.rewardYear": { RU: "Награда в год", EN: "Reward per year", KO: "연간 보상", ZH: "年奖励", UA: "Нагорода на рік", FA: "پاداش سالانه" },
  "staking.aprWhat": { RU: "Что такое APR?", EN: "What is APR?", KO: "APR이란?", ZH: "什么是 APR؟", UA: "Що таке APR?", FA: "APR چیست؟" },
  "staking.aprP1": { RU: "годовая ставка вознаграждения без учёта сложного процента.", EN: "annual reward rate without compounding.", KO: "복리 미포함 연간 보상율.", ZH: "不计复利的年化回报率。", UA: "річна ставка винагороди без урахування складних відсотків.", FA: "نرخ پاداش سالانه بدون بهره مرکب." },
  "staking.aprP2": { RU: "Чем больше подарков и GRAM в стейке, тем выше ваша доля от общего пула наград сезона.", EN: "The more gifts and GRAM in stake, the bigger your share of the season reward pool.", KO: "스테이크의 선물과 GRAM이 많을수록 시즌 보상 풀 몫이 커집니다.", ZH: "质押中的礼物和 GRAM 越多，您在赛季奖励池中的份额越大。", UA: "Чим більше подарунків і GRAM у стейку, тим вища ваша частка від загального пулу нагород сезону.", FA: "هرچه هدیه و GRAM بیشتر باشد، سهم شما از استخر پاداش فصل بیشتر است." },
  "staking.aprExample": { RU: "Пример: стейк 50 GRAM ≈ +9.5 GRAM за год при текущих 19% APR.", EN: "Example: 50 GRAM stake ≈ +9.5 GRAM per year at current 19% APR.", KO: "예: 50 GRAM 스테이크 ≈ 현재 19% APR로 연간 +9.5 GRAM.", ZH: "示例：按当前 19% APR，质押 50 GRAM ≈ 每年 +9.5 GRAM。", UA: "Приклад: стейк 50 GRAM ≈ +9.5 GRAM за рік при поточних 19% APR.", FA: "مثال: استیک 50 GRAM ≈ با APR فعلی 19٪ حدود +9.5 GRAM در سال." },
  "staking.aprDisclaimer": { RU: "Ставка может меняться управлением проекта. Не является финансовой рекомендацией.", EN: "Rate may change by project management. Not financial advice.", KO: "요율은 프로젝트 관리에 따라 변경될 수 있습니다. 투자 조언이 아닙니다.", ZH: "利率可能由项目方调整。不构成投资建议。", UA: "Ставка може змінюватися управлінням проєкту. Не є фінансовою рекомендацією.", FA: "نرخ ممکن است توسط مدیریت پروژه تغییر کند. توصیه مالی نیست." },
  "staking.limitHit": { RU: "Достигнут лимит стейка", EN: "Stake limit reached", KO: "스테이크 한도 도달", ZH: "已达质押上限", UA: "Досягнуто ліміт стейку", FA: "سقف استیک رسید" },
  "staking.deposited": { RU: "Внесено {n} GRAM", EN: "Deposited {n} GRAM", KO: "{n} GRAM 입금됨", ZH: "已存入 {n} GRAM", UA: "Внесено {n} GRAM", FA: "{n} GRAM واریز شد" },

  "common.found": { RU: "Найдено", EN: "Found", KO: "찾음", ZH: "找到", UA: "Знайдено", FA: "یافت شد" },
  "common.loading": { RU: "Загрузка…", EN: "Loading…", KO: "로딩…", ZH: "加载中…", UA: "Завантаження…", FA: "در حال بارگذاری…" },
  "common.cheap": { RU: "Сначала дешевле", EN: "Price: low to high", KO: "낮은 가격순", ZH: "价格从低到高", UA: "Спочатку дешевше", FA: "ارزان‌تر اول" },
  "common.expensive": { RU: "Сначала дороже", EN: "Price: high to low", KO: "높은 가격순", ZH: "价格从高到低", UA: "Спочатку дороже", FA: "گران‌تر اول" },
  "common.reset": { RU: "Сбросить фильтры", EN: "Reset filters", KO: "필터 초기화", ZH: "重置筛选", UA: "Скинути фільтри", FA: "بازنشانی فیلترها" },
  "common.empty": { RU: "Ничего не найдено", EN: "Nothing found", KO: "결과 없음", ZH: "未找到内容", UA: "Нічого не знайдено", FA: "چیزی یافت نشد" },
  "common.filters": { RU: "Фильтры", EN: "Filters", KO: "필터", ZH: "筛选", UA: "Фільтри", FA: "فیلترها" },
  "common.apply": { RU: "Показать результаты", EN: "Show results", KO: "결과 보기", ZH: "显示结果", UA: "Показати результати", FA: "نمایش نتایج" },
  "common.resetBtn": { RU: "Сбросить", EN: "Reset", KO: "초기화", ZH: "重置", UA: "Скинути", FA: "بازنشانی" },
  "common.collection": { RU: "Коллекция", EN: "Collection", KO: "컬렉션", ZH: "系列", UA: "Колекція", FA: "مجموعه" },
  "common.inStock": { RU: "В наличии", EN: "In stock", KO: "재고 있음", ZH: "有货", UA: "В наявності", FA: "موجود" },
  "common.price": { RU: "Цена", EN: "Price", KO: "가격", ZH: "价格", UA: "Ціна", FA: "قیمت" },
  "common.owners": { RU: "Держателей", EN: "Owners", KO: "보유자", ZH: "持有者", UA: "Власників", FA: "دارندگان" },
  "common.buy": { RU: "Купить", EN: "Buy", KO: "구매", ZH: "购买", UA: "Купити", FA: "خرید" },
  "common.offer": { RU: "Предложение", EN: "Offer", KO: "오퍼", ZH: "报价", UA: "Пропозиція", FA: "پیشنهاد" },

  "howto.title": { RU: "Как добавить подарки", EN: "How to add gifts", KO: "선물 추가 방법", ZH: "如何添加礼物", UA: "Як додати подарунки", FA: "نحوه افزودن هدایا" },
  "howto.open": { RU: "Открыть @PortallBot1", EN: "Open @PortallBot1", KO: "@PortallBot1 열기", ZH: "打开 @PortallBot1", UA: "Відкрити @PortallBot1", FA: "باز کردن @PortallBot1" },
  "howto.how": { RU: "Как добавить подарки?", EN: "How to add gifts?", KO: "선물은 어떻게 추가하나요?", ZH: "如何添加礼物？", UA: "Як додати подарунки?", FA: "چگونه هدایا اضافه کنم؟" },
  "howto.s1t": { RU: "Напишите менеджеру", EN: "Message the manager", KO: "매니저에게 메시지", ZH: "联系管理员", UA: "Напишіть менеджеру", FA: "به مدیر پیام دهید" },
  "howto.s1d": { RU: "Откройте @PortallBot1 в Telegram и отправьте любое слово — чтобы активировать диалог.", EN: "Open @PortallBot1 in Telegram and send any word to start the dialogue.", KO: "Telegram에서 @PortallBot1을 열고 아무 단어나 보내 대화를 시작하세요.", ZH: "在 Telegram 中打开 @PortallBot1 并发送任意消息以开始对话。", UA: "Відкрийте @PortallBot1 у Telegram і надішліть будь-яке слово — щоб активувати діалог.", FA: "@PortallBot1 را در تلگرام باز کنید و هر کلمه‌ای بفرستید تا گفتگو فعال شود." },
  "howto.s2t": { RU: "Отправьте подарок менеджеру", EN: "Send the gift to the manager", KO: "매니저에게 선물 전송", ZH: "把礼物发给管理员", UA: "Надішліть подарунок менеджеру", FA: "هدیه را برای مدیر بفرستید" },
  "howto.s2d": { RU: "Перешлите выбранный подарок на аккаунт @PortallBot1 — он примет его на хранение.", EN: "Forward your chosen gift to @PortallBot1 — it will be held in escrow.", KO: "선택한 선물을 @PortallBot1으로 전송하면 에스크로로 보관됩니다.", ZH: "将选定的礼物转发给 @PortallBot1，将由其代为保管。", UA: "Перешліть обраний подарунок на акаунт @PortallBot1 — він прийме його на зберігання.", FA: "هدیه انتخابی را به @PortallBot1 بفرستید — نزد او نگهداری می‌شود." },
  "howto.s3t": { RU: "Вставьте ссылку и цену", EN: "Paste the link and price", KO: "링크와 가격 입력", ZH: "粘贴链接和价格", UA: "Вставте посилання та ціну", FA: "لینک و قیمت را وارد کنید" },
  "howto.s3d": { RU: "Вставьте ссылку на подарок, укажите цену и подтвердите добавление.", EN: "Paste the gift link, set the price and confirm.", KO: "선물 링크를 붙여넣고 가격을 입력한 뒤 확인하세요.", ZH: "粘贴礼物链接，输入价格并确认。", UA: "Вставте посилання на подарунок, вкажіть ціну та підтвердіть додавання.", FA: "لینک هدیه را بچسبانید، قیمت را مشخص کنید و تأیید کنید." },
  "howto.s4t": { RU: "Подарок в разделе «Гифты»", EN: "Gift appears in “Gifts”", KO: "'선물' 탭에 표시", ZH: "礼物出现在“礼物”页", UA: "Подарок у розділі «Гіфти»", FA: "هدیه در بخش «Gifts»" },
  "howto.s4d": { RU: "После подтверждения подарок появится в разделе «Гифты» — можно продавать, отправлять и стейкить.", EN: "After confirmation the gift shows up in Gifts — ready to sell, send or stake.", KO: "확인 후 선물 탭에 나타나며 판매·전송·스테이킹이 가능합니다.", ZH: "确认后礼物将出现在“礼物”页，可出售、发送或质押。", UA: "Після підтвердження подарунок з'явиться в розділі «Гіфти» — можна продавати, надсилати та стейкити.", FA: "پس از تأیید، هدیه در بخش «Gifts» نمایش داده می‌شود — آماده فروش، ارسال یا استیک." },
  "howto.openToast": { RU: "Открываем @PortallBot1", EN: "Opening @PortallBot1", KO: "@PortallBot1 열기", ZH: "正在打开 @PortallBot1", UA: "Відкриваємо @PortallBot1", FA: "در حال باز کردن @PortallBot1" },

  "wiz.title": { RU: "Добавление подарка", EN: "Add gift", KO: "선물 추가", ZH: "添加礼物", UA: "Додавання подарунка", FA: "افزودن هدیه" },
  "wiz.step": { RU: "Шаг {n} из {m}", EN: "Step {n} of {m}", KO: "{m}단계 중 {n}단계", ZH: "第 {n} 步，共 {m} 步", UA: "Крок {n} з {m}", FA: "مرحله {n} از {m}" },
  "wiz.s1t": { RU: "Отправьте подарок менеджеру", EN: "Send the gift to the manager", KO: "매니저에게 선물 전송", ZH: "把礼物发给管理员", UA: "Надішліть подарунок менеджеру", FA: "هدیه را برای مدیر بفرستید" },
  "wiz.s1d": { RU: "Откройте @PortallBot1 в Telegram и отправьте выбранный подарок на аккаунт менеджера. Когда отправите — нажмите «Далее».", EN: "Open @PortallBot1 in Telegram and send your chosen gift to the manager account. Then press “Next”.", KO: "Telegram에서 @PortallBot1을 열고 선물을 매니저에게 보낸 뒤 «다음»을 누르세요.", ZH: "在 Telegram 中打开 @PortallBot1，把礼物发送给管理员账号，然后点击「下一步」。", UA: "Відкрийте @PortallBot1 у Telegram і надішліть обраний подарунок на акаунт менеджера. Коли надішлете — натисніть «Далі».", FA: "@PortallBot1 را در تلگرام باز کنید و هدیه را برای حساب مدیر بفرستید. سپس «بعدی» را بزنید." },
  "wiz.s2t": { RU: "Вставьте ссылку на подарок", EN: "Paste the gift link", KO: "선물 링크 붙여넣기", ZH: "粘贴礼物链接", UA: "Вставте посилання на подарунок", FA: "لینک هدیه را بچسبانید" },
  "wiz.s2d": { RU: "Вставьте ссылку на подарок, который отправили менеджеру.", EN: "Paste the link to the gift you sent to the manager.", KO: "매니저에게 보낸 선물의 링크를 붙여넣으세요.", ZH: "粘贴您发送给管理员的礼物链接。", UA: "Вставте посилання на подарунок, який надіслали менеджеру.", FA: "لینک هدیه‌ای که برای مدیر فرستادید را بچسبانید." },
  "wiz.s3t": { RU: "Укажите цену", EN: "Set the price", KO: "가격 입력", ZH: "输入价格", UA: "Вкажіть ціну", FA: "قیمت را مشخص کنید" },
  "wiz.s3d": { RU: "Введите цену продажи подарка в GRAM.", EN: "Enter the gift price in GRAM.", KO: "GRAM으로 선물 가격을 입력하세요.", ZH: "以 GRAM 输入礼物售价。", UA: "Введіть ціну продажу подарунка в GRAM.", FA: "قیمت فروش هدیه را به GRAM وارد کنید." },
  "wiz.next": { RU: "Далее", EN: "Next", KO: "다음", ZH: "下一步", UA: "Далі", FA: "بعدی" },
  "wiz.back": { RU: "Назад", EN: "Back", KO: "뒤로", ZH: "上一步", UA: "Назад", FA: "بازگشت" },
  "wiz.save": { RU: "Сохранить", EN: "Save", KO: "저장", ZH: "保存", UA: "Зберегти", FA: "ذخیره" },
  "wiz.urlPh": { RU: "Ссылка на подарок", EN: "Gift link", KO: "선물 링크", ZH: "礼物链接", UA: "Посилання на подарунок", FA: "لینک هدیه" },
  "wiz.pricePh": { RU: "Цена в GRAM", EN: "Price in GRAM", KO: "GRAM 가격", ZH: "GRAM 价格", UA: "Ціна в GRAM", FA: "قیمت به GRAM" },
  "wiz.urlErr": { RU: "Сначала вставьте ссылку на подарок", EN: "Paste the gift link first", KO: "먼저 선물 링크를 붙여넣으세요", ZH: "请先粘贴礼物链接", UA: "Спочатку вставте посилання на подарунок", FA: "ابتدا لینک هدیه را بچسبانید" },
  "wiz.priceErr": { RU: "Сначала введите цену", EN: "Enter the price first", KO: "먼저 가격을 입력하세요", ZH: "请先输入价格", UA: "Спочатку введіть ціну", FA: "ابتدا قیمت را وارد کنید" },
  "wiz.doneToast": { RU: "Подарок добавлен в раздел «Гифты»", EN: "Gift added to Gifts", KO: "선물이 선물 탭에 추가됨", ZH: "礼物已添加到“礼物”页", UA: "Подарок додано в розділ «Гіфти»", FA: "هدیه به بخش «Gifts» اضافه شد" },
  "wiz.openManager": { RU: "Открыть менеджера @PortallBot1", EN: "Open manager @PortallBot1", KO: "매니저 @PortallBot1 열기", ZH: "打开管理员 @PortallBot1", UA: "Відкрити менеджера @PortallBot1", FA: "باز کردن مدیر @PortallBot1" },

  "wiz.instrBtn": { RU: "Инструкция", EN: "Guide", KO: "안내", ZH: "说明", UA: "Інструкція", FA: "راهنما" },

  "wiz.instrTitle": { RU: "Инструкция — шаг {n}", EN: "Guide — step {n}", KO: "안내 — {n}단계", ZH: "说明 — 第 {n} 步", UA: "Інструкція — крок {n}", FA: "راهنما — مرحله {n}" },

  "wiz.i1": {
    RU: "1. Нажмите «Открыть менеджера» — откроется Telegram.\n2. Отправьте подарок менеджеру @PortallBot1.\n3. Вернитесь на сайт и нажмите «Далее» внизу.",
    EN: "1. Tap “Open manager” — Telegram will open.\n2. Send the gift to the manager @PortallBot1.\n3. Come back to the site and tap “Next” at the bottom.",
    KO: "1. «매니저 열기»를 누르면 Telegram이 열립니다.\n2. 선물을 매니저 @PortallBot1에게 보냅니다.\n3. 사이트로 돌아와 아래의 «다음»을 누르세요.",
    ZH: "1. 点击「打开管理员」— 会打开 Telegram。\n2. 把礼物发送给管理员 @PortallBot1。\n3. 回到网站，点击底部的「下一步」。",
    UA: "1. Натисніть «Відкрити менеджера» — відкриється Telegram.\n2. Надішліть подарунок менеджеру @PortallBot1.\n3. Поверніться на сайт і натисніть «Далі» внизу.",
    FA: "1. «باز کردن مدیر» را بزنید — تلگرام باز می‌شود.\n2. هدیه را برای مدیر @PortallBot1 بفرستید.\n3. به سایت برگردید و «بعدی» را بزنید.",
  },

  "wiz.i2": {
    RU: "1. Вставьте ссылку на подарок, который отправили менеджеру.\n2. Нажмите «Далее» внизу.",
    EN: "1. Paste the link to the gift you sent to the manager.\n2. Tap “Next” at the bottom.",
    KO: "1. 매니저에게 보낸 선물의 링크를 붙여넣으세요.\n2. 아래의 «다음»을 누르세요.",
    ZH: "1. 粘贴你发给管理员的礼物链接。\n2. 点击底部的「下一步」。",
    UA: "1. Вставте посилання на подарунок, який надіслали менеджеру.\n2. Натисніть «Далі» внизу.",
    FA: "1. لینک هدیه‌ای که برای مدیر فرستادید را بچسبانید.\n2. «بعدی» را بزنید.",
  },

  "wiz.i3": {
    RU: "1. Введите цену продажи в GRAM.\n2. Нажмите «Сохранить» внизу — подарок появится в разделе «Гифты».",
    EN: "1. Enter the sale price in GRAM.\n2. Tap “Save” at the bottom — the gift will appear in Gifts.",
    KO: "1. 판매 가격을 GRAM으로 입력하세요.\n2. 아래의 «저장»을 누르세요 — 선물이 «선물» 탭에 표시됩니다.",
    ZH: "1. 输入 GRAM 售价。\n2. 点击底部的「保存」— 礼物将出现在「礼物」页。",
    UA: "1. Введіть ціну продажу в GRAM.\n2. Натисніть «Зберегти» внизу — подарунок з'явиться в розділі «Гіфти».",
    FA: "1. قیمت فروش را به GRAM وارد کنید.\n2. «ذخیره» را بزنید — هدیه در بخش «Gifts» نمایش داده می‌شود.",
  },

  "wiz.linkLabel": { RU: "Ссылка", EN: "Link", KO: "링크", ZH: "链接", UA: "Посилання", FA: "لینک" },
  "wiz.priceLabel": { RU: "Цена", EN: "Price", KO: "가격", ZH: "价格", UA: "Ціна", FA: "قیمت" },
  "gifts.emptyTitle": { RU: "Есть подарки в Telegram?", EN: "Got gifts on Telegram?", KO: "텔레그램 선물이 있나요?", ZH: "Telegram上有礼物？", UA: "Є подарунки в Telegram?", FA: "هدیه در تلگرام دارید؟" },
  "gifts.emptySub": { RU: "Добавьте их через нашего бота", EN: "Add them via our bot", KO: "우리 봇을 통해 추가하세요", ZH: "通过我们的机器人添加", UA: "Додайте їх через нашого бота", FA: "از طریق ربات ما اضافه کنید" },
  "gifts.unlisted": { RU: "Не выставл.", EN: "Unlisted", KO: "미등록", ZH: "未上架", UA: "Не виставл.", FA: "فهرست‌نشده" },
  "gifts.listed": { RU: "Выставл.", EN: "Listed", KO: "등록됨", ZH: "已上架", UA: "Виставл.", FA: "فهرست‌شده" },

  "action.add": { RU: "Добавить", EN: "Add", KO: "추가", ZH: "添加", UA: "Додати", FA: "افزودن" },
  "action.withdraw": { RU: "Вывод", EN: "Withdraw", KO: "출금", ZH: "提现", UA: "Вивід", FA: "برداشت" },
  "action.send": { RU: "Отправить", EN: "Send", KO: "보내기", ZH: "发送", UA: "Надіслати", FA: "ارسال" },
  "action.sell": { RU: "Продать", EN: "Sell", KO: "판매", ZH: "出售", UA: "Продати", FA: "فروش" },
  "action.cancel": { RU: "Отменить объявление", EN: "Cancel listing", KO: "리스팅 취소", ZH: "取消上架", UA: "Скасувати оголошення", FA: "لغو آگهی" },
  "action.edit": { RU: "Изменить цену", EN: "Edit price", KO: "가격 수정", ZH: "修改价格", UA: "Змінити ціну", FA: "ویرایش قیمت" },
  "gifts.withdrawToast": { RU: "Вывод средств — через профиль", EN: "Withdrawals — via profile", KO: "출금 — 프로필에서", ZH: "提现 — 通过个人资料", UA: "Вивід коштів — через профіль", FA: "برداشت — از طریق پروفایل" },
  "gifts.sendToast": { RU: "Выберите подарок для отправки", EN: "Choose a gift to send", KO: "보낼 선물을 선택하세요", ZH: "选择要发送的礼物", UA: "Виберіть подарунок для надсилання", FA: "هدیه‌ای برای ارسال انتخاب کنید" },
  "gifts.sellToast": { RU: "Откройте витрину продажи", EN: "Open the sale showcase", KO: "판매 진열을 여세요", ZH: "打开售卖橱窗", UA: "Відкрийте вітрину продажу", FA: "ویترین فروش را باز کنید" },
  "gifts.cancelToast": { RU: "Объявление снято с продажи", EN: "Listing removed from sale", KO: "리스팅이 판매에서 제거됨", ZH: "已下架", UA: "Оголошення знято з продажу", FA: "آگهی از فروش حذف شد" },
  "gifts.editToast": { RU: "Редактор цены открыт", EN: "Price editor opened", KO: "가격 편집기 열림", ZH: "价格编辑器已打开", UA: "Редактор ціни відкрито", FA: "ویرایشگر قیمت باز شد" },
  "gifts.listedEmpty": { RU: "Пока пусто", EN: "Nothing here yet", KO: "아직 비어 있음", ZH: "暂无内容", UA: "Поки порожньо", FA: "هنوز خالی است" },
  "offers.received": { RU: "Нет полученных офферов", EN: "No received offers", KO: "받은 오퍼 없음", ZH: "暂无收到的报价", UA: "Немає отриманих офферів", FA: "پیشنهاد دریافتی وجود ندارد" },
  "offers.placed": { RU: "Нет размещенных офферов", EN: "No placed offers", KO: "보낸 오퍼 없음", ZH: "暂无发出的报价", UA: "Немає розміщених офферів", FA: "پیشنهاد ارسالی وجود ندارد" },
  "offers.collections": { RU: "Нет сохраненных коллекций", EN: "No saved collections", KO: "저장된 컬렉션 없음", ZH: "暂无收藏的系列", UA: "Немає збережених колекцیй", FA: "مجموعه ذخیره‌شده‌ای وجود ندارد" },
  "offers.tabReceived": { RU: "Получено {n}", EN: "Received {n}", KO: "받음 {n}", ZH: "收到 {n}", UA: "Отримано {n}", FA: "دریافت {n}" },
  "offers.tabPlaced": { RU: "Размещено {n}", EN: "Placed {n}", KO: "보냄 {n}", ZH: "发出 {n}", UA: "Розміщено {n}", FA: "ارسال {n}" },
  "offers.tabCollections": { RU: "Коллекции {n}", EN: "Collections {n}", KO: "컬렉션 {n}", ZH: "系列 {n}", UA: "Колекції {n}", FA: "مجموعه‌ها {n}" },
  "goMarket": { RU: "Перейти в магазин", EN: "Go to market", KO: "마켓으로 이동", ZH: "前往商店", UA: "Перейти в магазин", FA: "رفتن به بازار" },
  "history.empty": { RU: "История активности пуста", EN: "Activity history is empty", KO: "활동 기록이 비어 있습니다", ZH: "活动历史为空", UA: "Історія активності порожня", FA: "تاریخچه فعالیت خالی است" },
  "history.goMarket": { RU: "Перейти в маркет", EN: "Go to market", KO: "마켓으로", ZH: "前往市场", UA: "Перейти в маркет", FA: "رفتن به بازار" },
  "history.filtersToast": { RU: "История: фильтры обновлены", EN: "History: filters updated", KO: "기록: 필터 업데이트됨", ZH: "历史：筛选已更新", UA: "Історія: фільтри оновлено", FA: "تاریخچه: فیلترها به‌روز شدند" },
  "filters.on": { RU: "Фильтры включены", EN: "Filters on", KO: "필터 켜짐", ZH: "筛选已开启", UA: "Фільтри увімкнено", FA: "فیلترها روشن شدند" },
  "filters.off": { RU: "Фильтры выключены", EN: "Filters off", KO: "필터 꺼짐", ZH: "筛选已关闭", UA: "Фільтри вимкнено", FA: "فیلترها خاموش شدند" },
  "more": { RU: "Ещё", EN: "More", KO: "더보기", ZH: "更多", UA: "Ще", FA: "بیشتر" },
  "howto.copyToast": { RU: "Ссылка на бота скопирована", EN: "Bot link copied", KO: "봇 링크 복사됨", ZH: "机器人链接已复制", UA: "Посилання на бота скопійовано", FA: "لینک ربات کپی شد" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  currency: Currency;
  setCurrency: (c: Currency) => void;
};

const LangContext = createContext<Ctx>({
  lang: "RU",
  setLang: () => {},
  t: (key) => key,
  currency: "RUB",
  setCurrency: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("RU");
  const [currency, setCurrencyState] = useState<Currency>(() => {
    try {
      const saved = window.localStorage.getItem("gram-currency");
      if (
        saved &&
        (CRYPTO_CURRENCIES.includes(saved as Currency) ||
          FIAT_CURRENCIES.includes(saved as Currency))
      ) {
        return saved as Currency;
      }
    } catch {
      // ignore
    }
    return "RUB";
  });

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    try {
      window.localStorage.setItem("gram-currency", next);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string) => strings[key]?.[lang] || strings[key]?.RU || key,
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, currency, setCurrency }),
    [lang, setLang, t, currency, setCurrency],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
