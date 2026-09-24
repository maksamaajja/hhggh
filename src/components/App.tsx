"use client";

import { useMemo, useState } from "react";
import {
  ActivityIcon,
  BellIcon,
  CheckIcon,
  ChevronRightIcon,
  FilterIcon,
  GiftIcon,
  GlobeIcon,
  HeartIcon,
  LinesIcon,
  MarketIcon,
  ProfileIcon,
  CardIcon,
  WalletIcon,
  SearchIcon,
  SparklesIcon,
  StarIcon,
  XIcon,
} from "./icons";

type Tab = "catalog" | "gifts" | "profile" | "settings";
type Language = "Русский" | "English" | "Español" | "Deutsch" | "中文" | "한국어";
type Currency = "Stars" | "GRAM" | "BTC" | "USDT" | "RUB" | "UAH" | "KZT" | "BYN" | "AZN" | "GEL";
const currencies: { id: Currency; label: string; rate: number }[] = [
  { id: "Stars", label: "Telegram Stars", rate: 0.0199 },
  { id: "GRAM", label: "GRAM", rate: 0.0018 }, { id: "BTC", label: "Bitcoin", rate: 104000 },
  { id: "USDT", label: "USDT", rate: 1 }, { id: "RUB", label: "Российский рубль", rate: 0.011 },
  { id: "UAH", label: "Украинская гривна", rate: 0.024 }, { id: "KZT", label: "Казахстанский тенге", rate: 0.0021 },
  { id: "BYN", label: "Белорусский рубль", rate: 0.31 }, { id: "AZN", label: "Азербайджанский манат", rate: 0.588 },
  { id: "GEL", label: "Грузинский лари", rate: 0.37 },
];
type Gift = {
  id: number;
  name: string;
  collection: string;
  price: string;
  gradient: string;
  glow: string;
  owned?: boolean;
  liked?: boolean;
  link?: string;
  imageUrl?: string;
  priceCurrency?: Currency;
};

const nft = (id: number, name: string, price: string, link: string): Gift => ({
  id, name, collection: "Telegram NFT", price, priceCurrency: "Stars",
  link, imageUrl: `/api/nft-image?url=${encodeURIComponent(link)}`,
  gradient: "linear-gradient(135deg,#8f7bff,#3f317b 55%,#17152c)", glow: "#9b87ff",
});

const gifts: Gift[] = [
  nft(101, "Mood Pack #27268", "450", "https://t.me/nft/MoodPack-27268"),
  nft(102, "Mood Pack #56622", "520", "https://t.me/nft/MoodPack-56622"),
  nft(103, "Lunar Snake #58548", "680", "https://t.me/nft/LunarSnake-58548"),
  nft(104, "Happy Brownie #122274", "590", "https://t.me/nft/HappyBrownie-122274"),
  nft(201, "Valentine Box #737", "1100", "https://t.me/nft/ValentineBox-737"),
  nft(202, "Valentine Box #25557", "1250", "https://t.me/nft/ValentineBox-25557"),
  nft(203, "Sky Stilettos #50286", "1400", "https://t.me/nft/SkyStilettos-50286"),
  nft(204, "Sky Stilettos #43686", "1180", "https://t.me/nft/SkyStilettos-43686"),
  nft(205, "Top Hat #16771", "1550", "https://t.me/nft/TopHat-16771"),
  nft(206, "Trapped Heart #5385", "1320", "https://t.me/nft/TrappedHeart-5385"),
  nft(207, "Crystal Ball #13648", "1740", "https://t.me/nft/CrystalBall-13648"),
  nft(208, "Ionic Dryer #11886", "1080", "https://t.me/nft/IonicDryer-11886"),
  nft(209, "Ionic Dryer #20387", "1460", "https://t.me/nft/IonicDryer-20387"),
  nft(210, "Skull Flower #16619", "1870", "https://t.me/nft/SkullFlower-16619"),
  nft(211, "Record Player #17146", "1620", "https://t.me/nft/RecordPlayer-17146"),
  nft(212, "Record Player #10447", "1140", "https://t.me/nft/RecordPlayer-10447"),
  nft(213, "Mad Pumpkin #6291", "1290", "https://t.me/nft/MadPumpkin-6291"),
  nft(214, "Jingle Bells #39403", "1990", "https://t.me/nft/JingleBells-39403"),
  nft(215, "Love Potion #9949", "1030", "https://t.me/nft/LovePotion-9949"),
  nft(216, "Love Potion #12039", "1510", "https://t.me/nft/LovePotion-12039"),
  nft(217, "Eternal Candle #7412", "1780", "https://t.me/nft/EternalCandle-7412"),
  nft(218, "Eternal Candle #36867", "1190", "https://t.me/nft/EternalCandle-36867"),
  nft(219, "Eternal Candle #17220", "1680", "https://t.me/nft/EternalCandle-17220"),
  nft(220, "Mood Pack #27301", "1085", "https://t.me/nft/MoodPack-27301"),
  nft(221, "Valentine Box #25580", "1160", "https://t.me/nft/ValentineBox-25580"),
  nft(222, "Sky Stilettos #50310", "1280", "https://t.me/nft/SkyStilettos-50310"),
  nft(223, "Top Hat #16804", "1375", "https://t.me/nft/TopHat-16804"),
  nft(224, "Love Potion #12104", "1490", "https://t.me/nft/LovePotion-12104"),
  nft(225, "Eternal Candle #17301", "1760", "https://t.me/nft/EternalCandle-17301"),
  nft(226, "Record Player #17202", "1940", "https://t.me/nft/RecordPlayer-17202"),
];

const generatedNftBases = [
  ["Mood Pack", "MoodPack"],
  ["Valentine Box", "ValentineBox"],
  ["Sky Stilettos", "SkyStilettos"],
  ["Top Hat", "TopHat"],
  ["Trapped Heart", "TrappedHeart"],
  ["Crystal Ball", "CrystalBall"],
  ["Ionic Dryer", "IonicDryer"],
  ["Skull Flower", "SkullFlower"],
  ["Record Player", "RecordPlayer"],
  ["Mad Pumpkin", "MadPumpkin"],
  ["Jingle Bells", "JingleBells"],
  ["Love Potion", "LovePotion"],
  ["Eternal Candle", "EternalCandle"],
] as const;

const additionalGifts = Array.from({ length: 100 }, (_, index) => {
  const [name, slug] = generatedNftBases[index % generatedNftBases.length];
  const nftNumber = 1000 + index * 73 + (index % 7) * 11;
  const price = 1000 + (index * 83) % 1001;
  return nft(300 + index, `${name} #${nftNumber}`, String(price), `https://t.me/nft/${slug}-${nftNumber}`);
});

gifts.push(...additionalGifts);

const moreGifts = Array.from({ length: 200 }, (_, index) => {
  const [name, slug] = generatedNftBases[(index + 5) % generatedNftBases.length];
  const nftNumber = 8500 + index * 7;
  const price = 1000 + (index * 47) % 1001;
  return nft(500 + index, `${name} #${nftNumber}`, String(price), `https://t.me/nft/${slug}-${nftNumber}`);
});

gifts.push(...moreGifts);

const navItems: { id: Tab; label: string; hint: string; Icon: typeof MarketIcon }[] = [
  { id: "catalog", label: "Каталог", hint: "Открытия", Icon: MarketIcon },
  { id: "gifts", label: "Мои подарки", hint: "Коллекция", Icon: GiftIcon },
  { id: "profile", label: "Профиль", hint: "Аккаунт", Icon: ProfileIcon },
  { id: "settings", label: "Настройки", hint: "Параметры", Icon: LinesIcon },
];

const translations: Record<Language, { catalog: string; gifts: string; profile: string; settings: string; openCatalog: string; findGift: string; myCollection: string; profileText: string; settingsText: string; language: string; search: string; items: string; currency: string; profileDescription: string; settingsDescription: string; empty: string; emptyDescription: string; browse: string }> = {
  Русский: { catalog: "Каталог", gifts: "Мои подарки", profile: "Профиль", settings: "Настройки", openCatalog: "Открыть каталог", findGift: "Найди свой подарок", myCollection: "Мои подарки", profileText: "Профиль", settingsText: "Настройки", language: "Язык интерфейса", search: "Поиск по названию или коллекции", items: "предметов", currency: "Валюта отображения", profileDescription: "Управляйте коллекцией и отслеживайте свою активность.", settingsDescription: "Настройте NotCoin под себя.", empty: "Коллекция только начинается", emptyDescription: "Здесь появятся ваши цифровые подарки после первой покупки на NotCoin.", browse: "Перейти в каталог" },
  English: { catalog: "Catalog", gifts: "My gifts", profile: "Profile", settings: "Settings", openCatalog: "Open catalog", findGift: "Find your gift", myCollection: "My gifts", profileText: "Profile", settingsText: "Settings", language: "Interface language", search: "Search by name or collection", items: "items", currency: "Display currency", profileDescription: "Manage your collection and track your activity.", settingsDescription: "Customize NotCoin to your preference.", empty: "Your collection starts here", emptyDescription: "Your digital gifts will appear here after your first NotCoin purchase.", browse: "Browse catalog" },
  Español: { catalog: "Catálogo", gifts: "Mis regalos", profile: "Perfil", settings: "Ajustes", openCatalog: "Abrir catálogo", findGift: "Encuentra tu regalo", myCollection: "Mis regalos", profileText: "Perfil", settingsText: "Ajustes", language: "Idioma de interfaz", search: "Buscar por nombre o colección", items: "artículos", currency: "Moneda de visualización", profileDescription: "Administra tu colección y sigue tu actividad.", settingsDescription: "Personaliza NotCoin a tu medida.", empty: "Tu colección comienza aquí", emptyDescription: "Tus regalos digitales aparecerán después de tu primera compra.", browse: "Ver catálogo" },
  Deutsch: { catalog: "Katalog", gifts: "Meine Geschenke", profile: "Profil", settings: "Einstellungen", openCatalog: "Katalog öffnen", findGift: "Finde dein Geschenk", myCollection: "Meine Geschenke", profileText: "Profil", settingsText: "Einstellungen", language: "Oberflächensprache", search: "Nach Name oder Sammlung suchen", items: "Objekte", currency: "Anzeigewährung", profileDescription: "Verwalte deine Sammlung und Aktivitäten.", settingsDescription: "Passe NotCoin an dich an.", empty: "Deine Sammlung beginnt hier", emptyDescription: "Deine digitalen Geschenke erscheinen nach dem ersten Kauf.", browse: "Katalog öffnen" },
  中文: { catalog: "目录", gifts: "我的礼物", profile: "个人资料", settings: "设置", openCatalog: "打开目录", findGift: "找到你的礼物", myCollection: "我的礼物", profileText: "个人资料", settingsText: "设置", language: "界面语言", search: "按名称或收藏搜索", items: "件藏品", currency: "显示货币", profileDescription: "管理你的收藏并查看活动。", settingsDescription: "自定义 NotCoin。", empty: "你的收藏从这里开始", emptyDescription: "购买第一件礼物后，它会出现在这里。", browse: "浏览目录" },
  한국어: { catalog: "카탈로그", gifts: "내 선물", profile: "프로필", settings: "설정", openCatalog: "카탈로그 열기", findGift: "나만의 선물 찾기", myCollection: "내 선물", profileText: "프로필", settingsText: "설정", language: "인터페이스 언어", search: "이름 또는 컬렉션 검색", items: "개 항목", currency: "표시 통화", profileDescription: "컬렉션과 활동을 관리하세요.", settingsDescription: "NotCoin을 나에게 맞게 설정하세요.", empty: "컬렉션을 시작해 보세요", emptyDescription: "첫 구매 후 디지털 선물이 여기에 표시됩니다.", browse: "카탈로그 보기" },
};

const logoUrl = "https://i.ibb.co/ymWd0kxm/1bedfd66-2607-436f-b593-f1f4c02600ff.png";

const interfaceLabels: Record<Language, Record<string, string>> = {
  Русский: { listed: "Выставленные", inventory: "Инвентарь", start: "Начать!", transfer: "Передайте подарок на аккаунт", manager: "менеджера", next: "Далее", back: "Назад", done: "Готово", linkTitle: "Ссылка на подарок", linkHint: "Вставьте ссылку на переданный подарок", priceTitle: "Цена подарка", priceHint: "Укажите цену продажи", list: "Выставить", changePrice: "Изменить цену", keepPrice: "Оставить цену", listedSuccess: "Подарок выставлен в каталог", addMore: "Добавить ещё подарок" },
  English: { listed: "Listed", inventory: "Inventory", start: "Start!", transfer: "Transfer the gift to the", manager: "manager", next: "Next", back: "Back", done: "Done", linkTitle: "Gift link", linkHint: "Paste the link to the transferred gift", priceTitle: "Gift price", priceHint: "Set the selling price", list: "List for sale", changePrice: "Change price", keepPrice: "Keep price", listedSuccess: "Gift listed in catalog", addMore: "Add another gift" },
  Español: { listed: "Publicados", inventory: "Inventario", start: "Empezar", transfer: "Transfiere el regalo al", manager: "manager", next: "Siguiente", back: "Atrás", done: "Listo", linkTitle: "Enlace del regalo", linkHint: "Pega el enlace del regalo transferido", priceTitle: "Precio del regalo", priceHint: "Indica el precio de venta", list: "Publicar", changePrice: "Cambiar precio", keepPrice: "Mantener precio", listedSuccess: "Regalo publicado en el catálogo", addMore: "Añadir otro regalo" },
  Deutsch: { listed: "Angeboten", inventory: "Inventar", start: "Starten", transfer: "Übertrage das Geschenk an den", manager: "Manager", next: "Weiter", back: "Zurück", done: "Fertig", linkTitle: "Geschenk-Link", linkHint: "Link des übertragenen Geschenks einfügen", priceTitle: "Geschenkpreis", priceHint: "Verkaufspreis festlegen", list: "Anbieten", changePrice: "Preis ändern", keepPrice: "Preis behalten", listedSuccess: "Geschenk im Katalog angeboten", addMore: "Weiteres Geschenk hinzufügen" },
  中文: { listed: "已上架", inventory: "库存", start: "开始", transfer: "将礼物转给", manager: "管理员", next: "下一步", back: "返回", done: "完成", linkTitle: "礼物链接", linkHint: "粘贴已转移礼物的链接", priceTitle: "礼物价格", priceHint: "设置出售价格", list: "上架", changePrice: "修改价格", keepPrice: "保留价格", listedSuccess: "礼物已上架", addMore: "添加另一件礼物" },
  한국어: { listed: "등록됨", inventory: "인벤토리", start: "시작!", transfer: "선물을", manager: "관리자에게 전송하세요", next: "다음", back: "뒤로", done: "완료", linkTitle: "선물 링크", linkHint: "전송한 선물 링크를 붙여넣으세요", priceTitle: "선물 가격", priceHint: "판매 가격을 입력하세요", list: "등록하기", changePrice: "가격 변경", keepPrice: "현재 가격 유지", listedSuccess: "카탈로그에 등록되었습니다", addMore: "선물 더 추가" },
};

function label(language: Language, key: string) {
  return interfaceLabels[language][key] ?? interfaceLabels.Русский[key] ?? key;
}

function GiftVisual({ gift, large = false, onImageError }: { gift: Gift; large?: boolean; onImageError?: () => void }) {
  return (
    <div className={`gift-visual ${large ? "gift-visual-large" : ""}`} style={{ background: gift.gradient, "--gift-glow": gift.glow } as React.CSSProperties}>
      {gift.imageUrl && <img className="gift-image" src={gift.imageUrl} alt={gift.name} onError={onImageError} />}
      <div className="gift-orbit gift-orbit-one" />
      <div className="gift-orbit gift-orbit-two" />
      <div className="gift-spark spark-one" />
      <div className="gift-spark spark-two" />
      <div className="gift-cube"><GiftIcon className={large ? "h-16 w-16" : "h-11 w-11"} /></div>
      <span className="gift-number">#{String(gift.id).padStart(3, "0")}</span>
    </div>
  );
}

function IconButton({ children, label, onClick }: { children: React.ReactNode; label: string; onClick?: () => void }) {
  return <button type="button" aria-label={label} onClick={onClick} className="icon-button">{children}</button>;
}

function Catalog({ onOpen, onBuy, onFavorite, favoriteIds, copy, currency, extraGifts }: { onOpen: (gift: Gift) => void; onBuy: (gift: Gift) => void; onFavorite: (gift: Gift) => void; favoriteIds: number[]; copy: (typeof translations)[Language]; currency: Currency; extraGifts: Gift[] }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("Популярные");
  const [failedImages, setFailedImages] = useState<number[]>([]);
  const allGifts = useMemo(() => [...gifts, ...extraGifts], [extraGifts]);
  const catalogGifts = allGifts;
  const filtered = useMemo(() => catalogGifts.filter((gift) => {
    const matchesQuery = `${gift.name} ${gift.collection}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && !failedImages.includes(gift.id);
  }), [catalogGifts, query, failedImages]);
  const sorted = useMemo(() => {
    if (sort === "Сначала дешевле") return [...filtered].sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === "Сначала дороже") return [...filtered].sort((a, b) => Number(b.price) - Number(a.price));
    return filtered;
  }, [filtered, sort]);

  const currencyData = currencies.find((item) => item.id === currency) ?? currencies[0];
  const price = (gift: Gift) => {
    const sourceRate = currencies.find((item) => item.id === (gift.priceCurrency ?? (gift.collection === "Telegram NFT" ? "Stars" : "GRAM")))?.rate ?? 1;
    const converted = Number(gift.price) * sourceRate / currencyData.rate;
    return `${converted.toLocaleString("en-US", { maximumFractionDigits: currency === "BTC" ? 8 : 2 })} ${currency}`;
  };
  return (
    <div className="content-wrap">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow"><span className="live-dot" /> NOTCOIN MARKETPLACE</span>
          <h1>Подарки, которые<br /><span>остаются с вами.</span></h1>
          <p>Коллекционируйте редкие цифровые подарки в экосистеме Telegram. Ваш стиль — ваш актив.</p>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => document.getElementById("catalog-grid")?.scrollIntoView({ behavior: "smooth" })}>{copy.openCatalog} <ChevronRightIcon className="h-4 w-4" /></button>
            <div className="hero-stat"><strong>12.8K</strong><span>подарков<br />в каталоге</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-ring ring-a" /><div className="hero-ring ring-b" />
          <div className="hero-gift"><GiftIcon className="h-28 w-28" /></div>
          <div className="floating-chip chip-a">RARE</div><div className="floating-chip chip-b">0.4%</div>
        </div>
      </section>

      <div className="section-heading">
        <div><span className="eyebrow muted">EXPLORE COLLECTION</span><h2>{copy.findGift}</h2></div>
      </div>
      <div className="toolbar">
        <label className="search-box"><SearchIcon className="h-4 w-4" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={copy.search} /><kbd>⌘ K</kbd></label>
        <label className="sort-box"><FilterIcon className="h-4 w-4" /><select value={sort} onChange={(e) => setSort(e.target.value)}><option>Популярные</option><option>Сначала дешевле</option><option>Сначала дороже</option></select></label>
      </div>
      <div id="catalog-grid" className="gift-grid">
        {sorted.map((gift, index) => <article key={gift.id} className="gift-card" style={{ animationDelay: `${index * 55}ms` }} onClick={() => onOpen(gift)}>
          <div className="card-image-wrap"><GiftVisual gift={gift} onImageError={() => setFailedImages((ids) => ids.includes(gift.id) ? ids : [...ids, gift.id])} /><button type="button" aria-label="Добавить в избранное" className={favoriteIds.includes(gift.id) ? "favorite active" : "favorite"} onClick={(e) => { e.stopPropagation(); onFavorite(gift); }}><HeartIcon className="h-4 w-4" filled={favoriteIds.includes(gift.id)} /></button></div>
          <div className="gift-card-info"><div><h3>{gift.name}</h3><p>{gift.collection}</p></div><div className="price"><span>от</span><strong>{price(gift)}</strong></div></div>
          <button type="button" className="buy-button" onClick={(e) => { e.stopPropagation(); onBuy(gift); }}>Купить</button>
        </article>)}
      </div>
    </div>
  );
}

function GiftWizard({ language, currency, onCurrencyChange, onComplete, onClose }: { language: Language; currency: Currency; onCurrencyChange: (currency: Currency) => void; onComplete: (gift: Gift) => void; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [linkError, setLinkError] = useState("");
  const [preview, setPreview] = useState<{ name: string; imageUrl?: string } | null>(null);
  const nftPattern = /^https:\/\/t\.me\/nft\/([A-Za-z0-9][A-Za-z0-9_-]*)-(\d+)\/?$/;
  const inspectLink = async (value: string) => {
    const match = value.trim().match(nftPattern);
    if (!match) {
      setPreview(null);
      setLinkError("Введите ссылку с числовым ID, например https://t.me/nft/ChillFlame-2565");
      return false;
    }
    const slug = match[1];
    const fallbackName = slug.replace(/-\d+$/, "").replace(/[-_]+/g, " ");
    let metadata: { name?: string; imageUrl?: string } = {};
    try {
      const response = await fetch(`/api/nft-metadata?url=${encodeURIComponent(value.trim())}`);
      if (response.ok) metadata = await response.json();
    } catch {
      // Telegram may block browser access; the link and derived name remain usable.
    }
    setPreview({ name: metadata.name || fallbackName, imageUrl: metadata.imageUrl });
    setLinkError("");
    return true;
  };
  const complete = () => {
    if (!preview) return;
    onComplete({ ...gifts[0], id: Date.now(), price: price || "24.8", priceCurrency: currency, name: preview.name, collection: "Telegram NFT", link: link.trim(), imageUrl: preview.imageUrl });
  };
  return <div className="modal-backdrop"><div className="wizard-card">
    <div className="wizard-progress"><span className={step >= 0 ? "active" : ""} /><span className={step >= 1 ? "active" : ""} /><span className={step >= 2 ? "active" : ""} /></div>
    {step === 0 && <><div className="wizard-icon"><GiftIcon className="h-8 w-8" /></div><h2>{label(language, "start")}</h2><p>{label(language, "transfer")} <a className="manager-link" href="https://t.me/portallbot1" target="_blank" rel="noreferrer">{label(language, "manager")}</a>. После передачи нажмите «{label(language, "next")}».</p></>}
    {step === 1 && <><span className="eyebrow muted">STEP 02</span><h2>{label(language, "linkTitle")}</h2><p>{label(language, "linkHint")}</p><input className={`wizard-input ${linkError ? "input-error" : ""}`} value={link} onChange={(event) => { setLink(event.target.value); setLinkError(""); setPreview(null); }} onBlur={() => { if (link.trim()) void inspectLink(link); }} placeholder="https://t.me/nft/ChillFlame-256535" autoFocus />{linkError && <small className="field-error">{linkError}</small>}{preview && <div className="nft-preview">{preview.imageUrl ? <img src={preview.imageUrl} alt="" /> : <div className="nft-preview-placeholder"><GiftIcon className="h-5 w-5" /></div>}<div><strong>{preview.name}</strong><small>{link}</small></div></div>}</>}
    {step === 2 && <><span className="eyebrow muted">STEP 03</span><h2>{label(language, "priceTitle")}</h2><p>{label(language, "priceHint")}</p><div className="price-input"><input className="wizard-input" value={price} onChange={(event) => setPrice(event.target.value.replace(/[^\d.,]/g, ""))} placeholder="24.8" inputMode="decimal" /><select className="wizard-currency" value={currency} onChange={(event) => onCurrencyChange(event.target.value as Currency)}>{currencies.map((item) => <option key={item.id} value={item.id}>{item.id}</option>)}</select></div></>}
    <div className="wizard-actions"><button type="button" className="ghost-button" onClick={step === 0 ? onClose : () => setStep(step - 1)}>{label(language, "back")}</button>{step < 2 ? <button type="button" className="primary-button" onClick={async () => { if (step === 1 && !(await inspectLink(link))) return; setStep(step + 1); }} disabled={step === 1 && !link.trim()}>{label(language, "next")} <ChevronRightIcon className="h-4 w-4" /></button> : <button type="button" className="primary-button" onClick={complete} disabled={!price.trim() || Number(price.replace(",", ".")) <= 0 || !preview}>{label(language, "done")} <CheckIcon className="h-4 w-4" /></button>}</div>
  </div></div>;
}

function GiftsSection({ language, currency, purchasedGifts, favoriteGifts, onCurrencyChange, onListed, onAdded, onBuy }: { language: Language; currency: Currency; purchasedGifts: Gift[]; favoriteGifts: Gift[]; onCurrencyChange: (currency: Currency) => void; onListed: (gift: Gift) => void; onAdded: (message: string) => void; onBuy: (gift: Gift) => void }) {
  const [subtab, setSubtab] = useState<"inventory" | "listed" | "favorites">("inventory");
  const [wizard, setWizard] = useState(false);
  const [inventory, setInventory] = useState<Gift[]>(purchasedGifts);
  const [listed, setListed] = useState<Gift[]>([]);
  const [confirmGift, setConfirmGift] = useState<Gift | null>(null);
  const [editedPrice, setEditedPrice] = useState("");
  const copy = translations[language];
  const currencyData = currencies.find((item) => item.id === currency) ?? currencies[0];
  const formatPrice = (gift: Gift) => {
    const sourceRate = currencies.find((item) => item.id === (gift.priceCurrency ?? (gift.collection === "Telegram NFT" ? "Stars" : "GRAM")))?.rate ?? 1;
    const converted = Number(gift.price) * sourceRate / currencyData.rate;
    return `${converted.toLocaleString("en-US", { maximumFractionDigits: currency === "BTC" ? 8 : 2 })} ${currency}`;
  };
  const completeWizard = (gift: Gift) => { setInventory((items) => [...items, gift]); setWizard(false); onAdded("Подарок добавлен в инвентарь"); };
  const listGift = (gift: Gift) => { setInventory((items) => items.filter((item) => item.id !== gift.id)); setListed((items) => [...items, gift]); onListed(gift); setSubtab("listed"); onAdded(label(language, "listedSuccess")); };
  return <div className="content-wrap"><div className="page-title"><span className="eyebrow muted">YOUR COLLECTION</span><h1>{copy.myCollection}</h1><p>{label(language, "inventory")} · {label(language, "listed")}</p></div>
    <div className="gift-subtabs"><button type="button" className={subtab === "inventory" ? "active" : ""} onClick={() => setSubtab("inventory")}>{label(language, "inventory")} <span>{inventory.length}</span></button><button type="button" className={subtab === "listed" ? "active" : ""} onClick={() => setSubtab("listed")}>{label(language, "listed")} <span>{listed.length}</span></button><button type="button" className={subtab === "favorites" ? "active" : ""} onClick={() => setSubtab("favorites")}>Избранное <span>{favoriteGifts.length}</span></button></div>
    {subtab === "inventory" && inventory.length === 0 && <div className="empty-panel"><div className="empty-icon"><GiftIcon className="h-10 w-10" /></div><h2>{label(language, "start")}</h2><p>{label(language, "transfer")} <a className="manager-link" href="https://t.me/portallbot1" target="_blank" rel="noreferrer">{label(language, "manager")}</a></p><button type="button" className="primary-button" onClick={() => setWizard(true)}>{label(language, "start")} <ChevronRightIcon className="h-4 w-4" /></button></div>}
    {subtab === "inventory" && inventory.length > 0 && <><button type="button" className="secondary-add-button" onClick={() => setWizard(true)}><GiftIcon className="h-4 w-4" />{label(language, "addMore")}</button><div className="owned-grid">{inventory.map((gift) => <article className="owned-card" key={gift.id}><GiftVisual gift={gift} /><div className="owned-card-footer"><div><strong>{gift.name}</strong><small>{formatPrice(gift)}</small>{gift.link && <a className="gift-link" href={gift.link} target="_blank" rel="noreferrer">Открыть NFT</a>}</div><button type="button" className="primary-button" onClick={() => { setConfirmGift(gift); setEditedPrice(gift.price); }}>{label(language, "list")}</button></div></article>)}</div></>}
    {subtab === "listed" && <div className="owned-grid">{listed.length === 0 ? <div className="activity-empty">—</div> : listed.map((gift) => <article className="owned-card" key={gift.id}><GiftVisual gift={gift} /><div className="owned-card-footer"><div><strong>{gift.name}</strong><small>{formatPrice(gift)} · {label(language, "listed")}</small>{gift.link && <a className="gift-link" href={gift.link} target="_blank" rel="noreferrer">Открыть NFT</a>}</div></div></article>)}</div>}
    {subtab === "favorites" && <div className="owned-grid">{favoriteGifts.length === 0 ? <div className="activity-empty">Добавьте подарки в избранное из каталога</div> : favoriteGifts.map((gift) => <article className="owned-card" key={gift.id}><GiftVisual gift={gift} /><div className="owned-card-footer"><div><strong>{gift.name}</strong><small>{formatPrice(gift)}</small></div><button type="button" className="primary-button" onClick={() => onBuy(gift)}>Купить</button></div></article>)}</div>}
    {wizard && <GiftWizard language={language} currency={currency} onCurrencyChange={onCurrencyChange} onClose={() => setWizard(false)} onComplete={completeWizard} />}
    {confirmGift && <div className="modal-backdrop" onClick={() => setConfirmGift(null)}><div className="confirm-card" onClick={(event) => event.stopPropagation()}><span className="eyebrow muted">PUBLISH GIFT</span><h2>{label(language, "list")}</h2><p>{confirmGift.name}</p><label className="confirm-label">{label(language, "priceTitle")}<input className="wizard-input" value={editedPrice} onChange={(event) => setEditedPrice(event.target.value.replace(/[^\d.,]/g, ""))} placeholder={confirmGift.price} inputMode="decimal" /></label><div className="confirm-actions"><button type="button" className="ghost-button" onClick={() => setConfirmGift(null)}>{label(language, "back")}</button><button type="button" className="primary-button" onClick={() => { if (!editedPrice.trim()) return; listGift({ ...confirmGift, price: editedPrice.replace(",", "."), priceCurrency: currency }); setConfirmGift(null); setEditedPrice(""); }}>{label(language, "done")}</button></div></div></div>}
  </div>;
}

function Profile({ copy, balanceStars, onWithdraw }: { copy: (typeof translations)[Language]; balanceStars: number; onWithdraw: (amount: number, method: string, destination: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("notcoin collector");
  const [username, setUsername] = useState("notcoin_user");
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [method, setMethod] = useState<"telegram" | "card" | "crypto">("telegram");
  const [amount, setAmount] = useState("");
  const [destination, setDestination] = useState("@notcoin_user");
  const submitWithdraw = () => {
    const numericAmount = Number(amount.replace(",", "."));
    if (!numericAmount || numericAmount <= 0 || numericAmount > balanceStars) return;
    onWithdraw(numericAmount, method, destination.trim());
    setWithdrawOpen(false);
    setAmount("");
  };
  return <div className="content-wrap narrow-content"><div className="page-title"><span className="eyebrow muted">YOUR SPACE</span><h1>{copy.profileText}</h1><p>{copy.profileDescription}</p></div>
    <section className="balance-card">
      <div><span className="eyebrow muted">BALANCE</span><strong>{balanceStars.toLocaleString("en-US")} Stars</strong><small>Средства от продаж зачисляются сюда</small></div>
      <button type="button" className="primary-button" disabled={balanceStars <= 0} onClick={() => setWithdrawOpen(true)}>Вывести средства</button>
    </section>
    <section className="profile-card"><div className="profile-head"><div className="avatar">N<span /></div><div><h2>{name}</h2><p>@{username} <span className="verified"><CheckIcon className="h-3 w-3" /></span></p></div><button type="button" className="ghost-button" onClick={() => setEditing((value) => !value)}>{editing ? "Сохранить" : "Изменить профиль"}</button></div>{editing && <div className="profile-edit"><label>Отображаемое имя<input value={name} onChange={(event) => setName(event.target.value)} /></label><label>Имя пользователя<input value={username} onChange={(event) => setUsername(event.target.value.replace(/\s/g, "_"))} /></label></div>}<div className="profile-stats"><div><strong>0</strong><span>Подарков</span></div><div><strong>0 TON</strong><span>Объём торгов</span></div><div><strong># —</strong><span>Место в рейтинге</span></div></div></section>
    <section className="activity-card"><div className="section-heading compact"><div><span className="eyebrow muted">ACTIVITY</span><h2>Последняя активность</h2></div><ActivityIcon className="h-5 w-5 muted-icon" /></div><div className="activity-empty">Активность появится после первой сделки</div></section>
    {withdrawOpen && <div className="modal-backdrop" onClick={() => setWithdrawOpen(false)}><div className="confirm-card withdrawal-card" onClick={(event) => event.stopPropagation()}><span className="eyebrow muted">WITHDRAWAL</span><h2>Вывод средств</h2><p>Доступно: {balanceStars} Stars</p><div className="withdraw-methods"><button type="button" className={method === "telegram" ? "active" : ""} onClick={() => { setMethod("telegram"); setDestination("@notcoin_user"); }}><StarIcon className="h-4 w-4" /> Telegram Stars</button><button type="button" className={method === "card" ? "active" : ""} onClick={() => { setMethod("card"); setDestination(""); }}><CardIcon className="h-4 w-4" /> Банковская карта</button><button type="button" className={method === "crypto" ? "active" : ""} onClick={() => { setMethod("crypto"); setDestination(""); }}><WalletIcon className="h-4 w-4" /> Криптокошелёк</button></div><label className="confirm-label">Сумма в Stars<input className="wizard-input" value={amount} onChange={(event) => setAmount(event.target.value.replace(/[^\d.,]/g, ""))} inputMode="decimal" placeholder="100" /></label><label className="confirm-label">{method === "telegram" ? "Telegram username" : method === "card" ? "Номер карты" : "Адрес кошелька"}<input className="wizard-input" value={destination} onChange={(event) => setDestination(event.target.value)} placeholder={method === "telegram" ? "@username" : method === "card" ? "0000 0000 0000 0000" : "0x..."} /></label><div className="confirm-actions"><button type="button" className="ghost-button" onClick={() => setWithdrawOpen(false)}>Отмена</button><button type="button" className="primary-button" disabled={!amount || !destination.trim() || Number(amount.replace(",", ".")) > balanceStars} onClick={submitWithdraw}>Подтвердить</button></div></div></div>}
  </div>;
}

function Settings({ language, onLanguageChange, currency, onCurrencyChange, copy }: { language: Language; onLanguageChange: (language: Language) => void; currency: Currency; onCurrencyChange: (currency: Currency) => void; copy: (typeof translations)[Language] }) {
  const [notifications, setNotifications] = useState(true);
  return <div className="content-wrap narrow-content"><div className="page-title"><span className="eyebrow muted">PREFERENCES</span><h1>{copy.settingsText}</h1><p>{copy.settingsDescription}</p></div><section className="settings-list">
    <div className="settings-group"><h3>Основные</h3><div className="settings-row"><span className="setting-icon purple"><GlobeIcon className="h-4 w-4" /></span><span><strong>{copy.language}</strong><small>Выберите язык интерфейса</small></span><select className="setting-select" value={language} onChange={(event) => onLanguageChange(event.target.value as Language)} aria-label={copy.language}>{(Object.keys(translations) as Language[]).map((item) => <option key={item} value={item}>{item}</option>)}</select></div></div>
    <div className="settings-group"><h3>{copy.currency}</h3><div className="settings-row"><span className="setting-icon cyan"><GlobeIcon className="h-4 w-4" /></span><span><strong>{copy.currency}</strong><small>Цены и баланс в выбранной валюте</small></span><select className="setting-select" value={currency} onChange={(event) => onCurrencyChange(event.target.value as Currency)} aria-label={copy.currency}>{currencies.map((item) => <option key={item.id} value={item.id}>{item.id} · {item.label}</option>)}</select></div></div><div className="settings-group"><h3>Уведомления</h3><div className="settings-row"><span className="setting-icon orange"><SparklesIcon className="h-4 w-4" /></span><span><strong>Новости коллекций</strong><small>Новые релизы и лимитированные дропы</small></span><button type="button" className={notifications ? "toggle on" : "toggle"} onClick={() => setNotifications(!notifications)}><span /></button></div><div className="settings-row"><span className="setting-icon green"><ActivityIcon className="h-4 w-4" /></span><span><strong>Активность аккаунта</strong><small>Сделки и изменения баланса</small></span><button type="button" className="toggle on"><span /></button></div></div>
  </section></div>;
}

export default function App() {
  const [tab, setTab] = useState<Tab>("catalog");
  const [language, setLanguage] = useState<Language>("Русский");
  const [currency, setCurrency] = useState<Currency>("Stars");
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [listedGifts, setListedGifts] = useState<Gift[]>([]);
  const [purchasedGifts, setPurchasedGifts] = useState<Gift[]>([]);
  const [favoriteGifts, setFavoriteGifts] = useState<Gift[]>([]);
  const [balanceStars, setBalanceStars] = useState(0);
  const [toast, setToast] = useState<{ message: string; kind: "success" | "error" } | null>(null);
  const showToast = (message: string, kind: "success" | "error" = "success") => { setToast({ message, kind }); window.setTimeout(() => setToast(null), 2400); };
  const buyGift = (gift: Gift) => {
    if (Number(gift.price) > balanceStars) {
      showToast(`Недостаточно средств. Баланс: ${balanceStars} Stars`, "error");
      return;
    }
    setPurchasedGifts((items) => [...items, gift]);
    if (listedGifts.some((item) => item.id === gift.id)) {
      setBalanceStars((balance) => balance + Number(gift.price));
      setListedGifts((items) => items.filter((item) => item.id !== gift.id));
      showToast("Подарок продан. Баланс пополнен");
      return;
    }
    showToast("Подарок добавлен в инвентарь");
  };
  const selectedPrice = selectedGift ? (() => {
    const sourceRate = currencies.find((item) => item.id === (selectedGift.priceCurrency ?? (selectedGift.collection === "Telegram NFT" ? "Stars" : "GRAM")))?.rate ?? 1;
    return `${(Number(selectedGift.price) * sourceRate / (currencies.find((item) => item.id === currency)?.rate ?? 1)).toLocaleString("en-US", { maximumFractionDigits: currency === "BTC" ? 8 : 2 })} ${currency}`;
  })() : "";

  return <div className="app-shell">
    <aside className="sidebar"><div className="sidebar-bottom"><div className="wallet-mini"><span className="ton-mark">T</span><div><small>Баланс кошелька</small><strong>{balanceStars} Stars</strong></div><button type="button" aria-label="Открыть кошелек" onClick={() => showToast("Подключение кошелька доступно в Telegram")}><ChevronRightIcon className="h-4 w-4" /></button></div></div></aside>
    <main className="main-area"><header className="topbar"><div className="brand"><div className="brand-mark"><span className="brand-logo-image" role="img" aria-label="NotCoin" style={{ backgroundImage: `url(${logoUrl})` }} /></div><div><strong>NotCoin</strong><small>digital gifts</small></div></div><div className="topbar-actions"><button type="button" className="network-status" onClick={() => showToast("Сеть TON работает стабильно")}><span className="live-dot" /> TON network</button><IconButton label="Уведомления" onClick={() => showToast("Новых уведомлений нет")}><span className="notification-dot" /><BellIcon className="h-[18px] w-[18px]" /></IconButton><button type="button" className="top-avatar" onClick={() => setTab("profile")}>N</button></div></header>
      <div className="page-scroll"><div key={tab} className="page-view">{tab === "catalog" && <Catalog onOpen={setSelectedGift} onBuy={buyGift} onFavorite={(gift) => setFavoriteGifts((items) => items.some((item) => item.id === gift.id) ? items.filter((item) => item.id !== gift.id) : [...items, gift])} favoriteIds={favoriteGifts.map((gift) => gift.id)} copy={translations[language]} currency={currency} extraGifts={listedGifts} />}{tab === "gifts" && <GiftsSection language={language} currency={currency} purchasedGifts={purchasedGifts} favoriteGifts={favoriteGifts} onCurrencyChange={setCurrency} onListed={(gift) => setListedGifts((items) => [...items.filter((item) => item.id !== gift.id), gift])} onAdded={(message) => showToast(message)} onBuy={buyGift} />}{tab === "profile" && <Profile copy={translations[language]} balanceStars={balanceStars} onWithdraw={(amount, method, destination) => { setBalanceStars((balance) => balance - amount); showToast(`Заявка на вывод ${amount} Stars отправлена: ${destination}`); }} />}{tab === "settings" && <Settings language={language} onLanguageChange={setLanguage} currency={currency} onCurrencyChange={setCurrency} copy={translations[language]} />}</div></div>
    </main>
    <nav className="bottom-nav" aria-label="Разделы NotCoin">{navItems.map(({ id, Icon }) => <button type="button" key={id} className={tab === id ? "bottom-nav-item active" : "bottom-nav-item"} onClick={() => setTab(id)}><Icon className="h-4 w-4" /><span>{translations[language][id]}</span></button>)}</nav>
    {selectedGift && <div className="modal-backdrop" onClick={() => setSelectedGift(null)}><div className="gift-modal" onClick={(e) => e.stopPropagation()}><button type="button" aria-label="Закрыть" className="modal-close" onClick={() => setSelectedGift(null)}><XIcon className="h-4 w-4" /></button><GiftVisual gift={selectedGift} large /><div className="modal-content"><span className="eyebrow muted">#{String(selectedGift.id).padStart(3, "0")}</span><h2>{selectedGift.name}</h2><p>{selectedGift.collection}</p><div className="modal-price"><div><small>Текущая цена</small><strong>{selectedPrice}</strong></div><div className="modal-actions"><button type="button" className="secondary-button" onClick={() => { setFavoriteGifts((items) => items.some((item) => item.id === selectedGift.id) ? items.filter((item) => item.id !== selectedGift.id) : [...items, selectedGift]); showToast("Избранное обновлено"); }}><StarIcon className="h-4 w-4" /> В избранное</button><button type="button" className="primary-button" onClick={() => { buyGift(selectedGift); if (balanceStars >= Number(selectedGift.price)) setSelectedGift(null); }}>Купить</button></div></div></div></div></div>}
    {toast && <div className={`toast ${toast.kind === "error" ? "toast-error" : ""}`}>{toast.kind === "error" ? <XIcon className="h-4 w-4" /> : <CheckIcon className="h-4 w-4" />}{toast.message}</div>}
  </div>;
}
