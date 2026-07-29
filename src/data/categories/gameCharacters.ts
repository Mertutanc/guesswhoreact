import type { GuessItem } from "../../types/game";

type GameCharacterTag =
  | "game:rpgSoulslike"
  | "game:nintendoPlatform"
  | "game:horror"
  | "game:fpsAction"
  | "game:openWorld"
  | "game:indie"
  | "game:fighting"
  | "game:strategyMoba"
  | "game:adventureStory";

const uniqueTags = (tags: GameCharacterTag[]) => Array.from(new Set(tags));

const includesAny = (text: string, keywords: string[]) => {
  const normalizedText = text.toLocaleLowerCase("tr-TR");

  return keywords.some((keyword) =>
    normalizedText.includes(keyword.toLocaleLowerCase("tr-TR"))
  );
};

const createGameCharacterTags = (
  game: string[],
  appearance: string[],
  world: string[],
  features: string[]
): GameCharacterTag[] => {
  const combinedText = [...game, ...appearance, ...world, ...features].join(" ");
  const tags: GameCharacterTag[] = [];

  if (
    includesAny(combinedText, [
      "rpg",
      "rol yapma",
      "crpg",
      "jrpg",
      "soulslike",
      "dungeons",
      "baldur",
      "elden",
      "skyrim",
      "witcher",
      "final fantasy",
      "persona",
      "hades",
    ])
  ) {
    tags.push("game:rpgSoulslike");
  }

  if (
    includesAny(combinedText, [
      "nintendo",
      "platform",
      "mario",
      "zelda",
      "hyrule",
      "mantar krallığı",
      "metroid",
      "kirby",
      "pokemon",
      "pokémon",
      "donkey kong",
      "sonic",
      "crash",
      "spyro",
    ])
  ) {
    tags.push("game:nintendoPlatform");
  }

  if (
    includesAny(combinedText, [
      "korku",
      "hayatta kalma",
      "zombi",
      "silent hill",
      "resident evil",
      "dead space",
      "psikolojik",
      "kabus",
      "vampir",
      "fnaf",
      "five nights",
    ])
  ) {
    tags.push("game:horror");
  }

  if (
    includesAny(combinedText, [
      "fps",
      "shooter",
      "birinci şahıs",
      "askeri",
      "savaş",
      "silah",
      "taktiksel",
      "casusluk",
      "doom",
      "halo",
      "half-life",
      "call of duty",
      "far cry",
    ])
  ) {
    tags.push("game:fpsAction");
  }

  if (
    includesAny(combinedText, [
      "açık dünya",
      "open world",
      "vahşi batı",
      "san andreas",
      "los santos",
      "vice city",
      "liberty city",
      "night city",
      "gotham",
      "skyrim",
      "çorak arazi",
      "wasteland",
    ])
  ) {
    tags.push("game:openWorld");
  }

  if (
    includesAny(combinedText, [
      "bağımsız",
      "indie",
      "roguelike",
      "metroidvania",
      "pixel",
      "stardew",
      "hollow knight",
      "celeste",
      "cuphead",
      "undertale",
      "hades",
      "disco elysium",
    ])
  ) {
    tags.push("game:indie");
  }

  if (
    includesAny(combinedText, [
      "dövüş",
      "fighting",
      "tekken",
      "street fighter",
      "mortal kombat",
      "king of fighters",
      "guilty gear",
      "arena",
    ])
  ) {
    tags.push("game:fighting");
  }

  if (
    includesAny(combinedText, [
      "moba",
      "strateji",
      "rts",
      "league of legends",
      "dota",
      "starcraft",
      "warcraft",
      "overwatch",
      "valorant",
    ])
  ) {
    tags.push("game:strategyMoba");
  }

  if (
    includesAny(combinedText, [
      "macera",
      "hikaye",
      "seçimlere dayalı",
      "interaktif",
      "dedektif",
      "bulmaca",
      "point and click",
      "sinema",
    ])
  ) {
    tags.push("game:adventureStory");
  }

  return uniqueTags(tags);
};

const createGameCharacter = (
  id: number,
  name: string,
  answers: string[],
  game: string[],
  appearance: string[],
  world: string[],
  features: string[]
): GuessItem => {
  return {
    id,
    mode: "gameCharacter",
    modeLabel: "Oyun Karakteri",
    name,
    answers,
    tags: createGameCharacterTags(game, appearance, world, features),
    hintGroups: [
      {
        key: "game",
        label: "Oyun",
        hints: game,
      },
      {
        key: "appearance",
        label: "Görünüm",
        hints: appearance,
      },
      {
        key: "world",
        label: "Evren",
        hints: world,
      },
      {
        key: "features",
        label: "Özellik",
        hints: features,
      },
    ],
  };
};

export const gameCharacters: GuessItem[] = [

  createGameCharacter(
    1001,
    "Luigi",
    ["luigi", "super luigi"],
    ["Platform oyunu", "Korku/Macera (Mansion serisi)", "Nintendo"],
    ["Yeşil şapka", "Mavi tulum", "Uzun boy", "Bıyık"],
    ["Mantar Krallığı", "Perili evler", "Hayaletler"],
    ["Korkak ama cesur", "Hayalet avcısı", "Ana karakterin kardeşi"]
  ),

  createGameCharacter(
    1002,
    "Princess Zelda",
    ["zelda", "prenses zelda", "princess zelda"],
    ["Macera - RPG", "Nintendo", "Seriye adını veren karakter"],
    ["Kraliyet elbiseleri", "Sivri kulaklar", "Sarışın"],
    ["Hyrule Krallığı", "Triforce (Güç Üçgeni)"],
    ["Bilgelik taşıyıcısı", "Sık sık kurtarılması gerekir", "Büyü güçleri"]
  ),

  createGameCharacter(
    1003,
    "Bowser",
    ["bowser", "kral koopa", "king koopa"],
    ["Platform oyunu", "Aile dostu seri", "Klasik kötü karakter"],
    ["Dikenli kabuk", "Ejderha/Kaplumbağa benzeri", "Kızıl saç/boynuz"],
    ["Mantar Krallığı", "Lavlı şatolar", "Koopa ordusu"],
    ["Prenses kaçıran", "Ateş püskürtür", "Zorlu bölüm sonu canavarı"]
  ),

  createGameCharacter(
    1004,
    "Donkey Kong",
    ["donkey kong", "dk"],
    ["Platform", "Arcade klasiği", "Nintendo"],
    ["Kırmızı kravat", "Dev goril", "Kaslı yapı"],
    ["Orman adası", "Muz depoları", "Timsah düşmanlar (Kremlings)"],
    ["Muzları sever", "Varil fırlatır", "Kendi adını taşıyan oyunu var"]
  ),

  createGameCharacter(
    1005,
    "Carl Johnson",
    ["cj", "carl johnson"],
    ["Açık dünya", "Suç temalı", "Tarihin en efsanevi oyunlarından biri"],
    ["Beyaz atlet (varsayılan)", "Yeşil çete renkleri", "Sokak tarzı"],
    ["San Andreas", "Los Santos", "Grove Street", "90'lar çete savaşları"],
    ["'Ah shit, here we go again' repliği", "Çete lideri", "Sadık kardeş"]
  ),

  createGameCharacter(
    1006,
    "Tommy Vercetti",
    ["tommy", "tommy vercetti", "vercetti"],
    ["Açık dünya", "Suç ve mafya", "80'ler teması"],
    ["Mavi hawaii gömleği", "Kot pantolon", "Kirli sakal"],
    ["Vice City", "Neon ışıklı sokaklar", "Uyuşturucu kartelleri"],
    ["Yüzme bilmez", "Hapisten yeni çıkmış", "Kendi mafya imparatorluğunu kurar"]
  ),

  createGameCharacter(
    1007,
    "Niko Bellic",
    ["niko", "niko bellic", "nico bellic"],
    ["Açık dünya", "Karanlık ve gerçekçi suç hikayesi", "Fizik motoruyla ünlü"],
    ["Eşofman altı", "Kirli sakal", "Kısa saç", "Doğu Avrupalı görünümü"],
    ["Liberty City", "Amerikan rüyası", "Mafya ve suç dünyası"],
    ["Eski asker", "Kuzeni Roman ile bowlinge gider", "İntikam peşinde"]
  ),

  createGameCharacter(
    1008,
    "Trevor Philips",
    ["trevor", "trevor philips", "trevor phillips"],
    ["Açık dünya", "Modern suç teması", "Üç ana karakterden biri"],
    ["Kirli beyaz tişört", "Seyrek saç", "Dövmeler", "Psikopat görünüm"],
    ["Los Santos", "Sandy Shores çölü", "Uyuşturucu üretimi"],
    ["Öfke nöbetleri", "Pilot", "Son derece sadık ama dengesiz"]
  ),

  createGameCharacter(
    1009,
    "John Marston",
    ["john", "john marston", "marston"],
    ["Açık dünya", "Vahşi Batı", "Aksiyon-Macera"],
    ["Yüzünde derin yara izleri", "Kovboy şapkası", "Tozlu ceket"],
    ["Eski Batı", "Van der Linde çetesi", "Kanun kaçakları ve ajanlar"],
    ["Ailesini kurtarmaya çalışır", "Ölü Göz (Dead Eye)", "Eski çete üyesi"]
  ),

  createGameCharacter(
    1010,
    "Dutch van der Linde",
    ["dutch", "dutch van der linde"],
    ["Açık dünya", "Vahşi Batı", "Çete lideri karakter"],
    ["Şık yelek", "Cep saati", "Bıyık", "Kovboy şapkası"],
    ["Kanunsuzlar dönemi", "Tahiti hayalleri", "Amerika'nın değişimi"],
    ["'Bir planım var' lafıyla bilinir", "Karizmatik lider", "Manipülatif"]
  ),

  createGameCharacter(
    1011,
    "Micah Bell",
    ["micah", "micah bell"],
    ["Açık dünya", "Vahşi Batı", "Oyun dünyasının en nefret edilen karakterlerinden"],
    ["Sarı bıyık ve saç", "Derin yırtmaçlı ceket", "Çift tabanca"],
    ["Van der Linde çetesi (sonradan katılan)"],
    ["Hain", "Irkçı ve bencil", "Sadakatsiz tetikçi"]
  ),

  createGameCharacter(
    1012,
    "Captain Price",
    ["price", "captain price", "kaptan price", "john price"],
    ["Askeri FPS", "Modern savaş", "Tarihin en iyi savaş serilerinden"],
    ["Pala bıyık", "Boonie şapka", "Taktiksel askeri teçhizat"],
    ["Küresel çatışmalar", "Task Force 141", "SAS birlikleri"],
    ["'Bravo Six, going dark'", "Lider", "Puro içer"]
  ),

  createGameCharacter(
    1013,
    "Simon Riley",
    ["ghost", "simon riley", "simon ghost riley"],
    ["Askeri FPS", "Modern savaş", "İkonik maskeli asker"],
    ["Kafatası desenli kar maskesi", "Güneş gözlüğü", "Askeri kulaklık"],
    ["Task Force 141", "Uluslararası terörizmle mücadele"],
    ["Gizemli", "Sessiz ve profesyonel", "Trajik ihanete uğrar"]
  ),

  createGameCharacter(
    1014,
    "Frank Woods",
    ["woods", "frank woods"],
    ["Askeri FPS", "Soğuk Savaş dönemi", "Gizli operasyonlar"],
    ["Bandana", "Dövmeli kollar", "Kirli sakal"],
    ["Vietnam savaşı", "CIA gizli görevleri", "Siyah operasyonlar (Black Ops)"],
    ["'Beni öldüremezsin!' repliği", "Asi asker", "Sadık dost"]
  ),

  createGameCharacter(
    1015,
    "Raiden",
    ["raiden", "jack the ripper"],
    ["Gizlilik aksiyon / Hack and Slash", "Kojima oyunları", "Sayborg ninja"],
    ["Gümüş saç", "Mekanik sibernetik vücut", "Yüksek frekanslı kılıç"],
    ["Metal Gear evreni", "Özel askeri şirketler", "Politik komplolar"],
    ["Mermileri kılıçla keser", "Karanlık alter-ego (Karındeşen)", "Eski çocuk asker"]
  ),

  createGameCharacter(
    1016,
    "Revolver Ocelot",
    ["ocelot", "revolver ocelot", "shalashaska"],
    ["Gizlilik aksiyon", "Taktiksel casusluk", "Çift taraflı ajan"],
    ["Kovboy çizmeleri", "Duster ceket", "Çift Altıpatlar silah", "Gümüş saç"],
    ["Soğuk savaş dönemi", "Outer Heaven", "Klon asker projeleri"],
    ["Silah çevirme ustası", "İşkence uzmanı", "Sürekli taraf değiştiren casus"]
  ),

  createGameCharacter(
    1017,
    "Tifa Lockhart",
    ["tifa", "tifa lockhart"],
    ["JRPG", "Kült rol yapma oyunu", "Eko-terörizm hikayesi"],
    ["Uzun siyah saç", "Kırmızı boks eldivenleri", "Beyaz tişört ve askılar"],
    ["Midgar", "Avalanche ekibi", "Distopik siberpunk şehir"],
    ["Yakın dövüş (Dövüş sanatları) uzmanı", "Bar işletmecisi", "Ana karakterin çocukluk arkadaşı"]
  ),

  createGameCharacter(
    1018,
    "Aerith Gainsborough",
    ["aerith", "aeris", "aerith gainsborough"],
    ["JRPG", "Kült rol yapma oyunu", "Fantastik dünya"],
    ["Pembe elbise", "Kırmızı kurdele", "Örgülü kahverengi saç", "Asa taşır"],
    ["Midgar gecekondu bölgesi", "Yaşam Akımı (Lifestream)", "Kadim Cetra ırkı"],
    ["Çiçekçi kız", "İyileştirici büyü", "Oyun tarihinin en trajik sahnesiyle bilinir"]
  ),

  createGameCharacter(
    1019,
    "Sora",
    ["sora"],
    ["Aksiyon RPG", "Disney ve Final Fantasy karışımı evren"],
    ["Büyük sarı ayakkabılar", "Dikenli saç", "Anahtar şeklinde kılıç"],
    ["Disney dünyaları", "Karanlık ve Işık savaşı", "Heartless (Kalpsizler)"],
    ["Keyblade ustası", "Donald ve Goofy ile seyahat eder", "Arkadaşlığın gücü"]
  ),

  createGameCharacter(
    1020,
    "2B",
    ["2b", "yorha no 2 type b"],
    ["Aksiyon RPG", "Hack and slash", "Felsefi ve depresif hikaye"],
    ["Göz bağı (Visor)", "Siyah gotik elbise", "Gümüş kısa saç", "Uçan kılıçlar"],
    ["Kıyamet sonrası Dünya", "Makineler ve Androidler", "YoRHa uzay istasyonu"],
    ["Savaş androidi", "Duygularını gizler", "Pod ile gezer"]
  ),

  createGameCharacter(
    1021,
    "Sekiro",
    ["sekiro", "wolf", "kurt"],
    ["Aksiyon-Macera", "Soulslike", "Ritim tabanlı kılıç dövüşü"],
    ["Shinobi kıyafeti", "Protez sol kol", "Katana", "Sol gözünde yara izi"],
    ["Sengoku dönemi Japonyası", "Ölümsüzlük efsaneleri", "Ashina klanı"],
    ["Tek Kollu Kurt", "Ölümden geri döner", "Kancasıyla çatıdan çatıya atlar"]
  ),

  createGameCharacter(
    1022,
    "The Hunter",
    ["hunter", "the hunter", "avcı"],
    ["Aksiyon RPG", "Soulslike", "Gotik korku/Lovecraft teması"],
    ["Tricorne şapka", "Uzun deri palto", "Dönüşen testere kılıç (Trick Weapon)"],
    ["Yharnam şehri", "Kabuslar ve Yüce Eskiler (Great Ones)", "Veba hastaları"],
    ["Kan şifası kullanır", "Canavar avlar", "Rüyaya hapsolmuş"]
  ),

  createGameCharacter(
    1023,
    "Malenia",
    ["malenia", "blade of miquella"],
    ["Aksiyon RPG", "Açık dünya Soulslike", "Oyun dünyasının en zorlu bosslarından"],
    ["Kanatlı altın miğfer", "Protez altın kol ve bacak", "Uzun katana"],
    ["Aradaki Diyarlar (Lands Between)", "Kızıl Çürüme (Scarlet Rot)"],
    ["'I am Malenia, Blade of Miquella'", "Hiç yenilmemiş savaşçı", "Su Dansı (Waterfowl Dance) saldırısı"]
  ),

  createGameCharacter(
    1024,
    "V",
    ["v", "valerie", "vincent"],
    ["Aksiyon RPG", "Fütüristik açık dünya", "Birinci şahıs siberpunk"],
    ["Samurai ceket", "Mantis bıçakları", "Siber implantlar"],
    ["Night City", "Mega şirketler", "Uçan arabalar ve neon ışıklar"],
    ["Paralı asker (Merc)", "Kafasında bir rock yıldızının çipi var", "Ölümcül hastalıkla mücadele"]
  ),

  createGameCharacter(
    1025,
    "Johnny Silverhand",
    ["johnny", "johnny silverhand"],
    ["Aksiyon RPG", "Fütüristik distopya", "Keanu Reeves tarafından canlandırıldı"],
    ["Gümüş mekanik sol kol", "Güneş gözlüğü", "Uzun saç", "Gitar"],
    ["Night City", "Samurai müzik grubu", "Arasaka şirketi"],
    ["Anarşist", "Rockerboy", "Zihinsel bir hologram olarak yaşar"]
  ),

  createGameCharacter(
    1026,
    "Peter Parker",
    ["peter", "peter parker", "spider-man", "spiderman", "örümcek adam"],
    ["Süper kahraman", "Açık dünya aksiyon", "PlayStation klasiği"],
    ["Kırmızı ve mavi ağ desenli kostüm", "Beyaz büyük örümcek logosu", "Ağ atıcılar"],
    ["New York (Manhattan)", "Günlük Bugle", "Marvel Evreni"],
    ["Ağ atarak binalar arası gezer", "Esprili", "Bilim insanı"]
  ),

  createGameCharacter(
    1027,
    "Miles Morales",
    ["miles", "miles morales", "spider-man", "spiderman"],
    ["Süper kahraman", "Açık dünya aksiyon"],
    ["Siyah ve kırmızı örümcek kostümü", "Kapüşonlu ceket (bazen)"],
    ["New York (Harlem)", "Marvel Evreni"],
    ["Biyoelektrik (Venom) güçleri", "Görünmezlik", "Peter'ın öğrencisi/ortağı"]
  ),

  createGameCharacter(
    1028,
    "Batman",
    ["batman", "bruce wayne"],
    ["Süper kahraman", "Gizlilik ve kombo dövüş", "Çizgi roman uyarlaması seri"],
    ["Siyah yarasa kostümü", "Pelerin", "Sivri kulaklı maske", "Fayda kemeri"],
    ["Gotham Şehri", "Arkham Tımarhanesi", "Karanlık ve yağmurlu sokaklar"],
    ["Dedektif yetenekleri", "Silah kullanmaz", "Batarang fırlatır"]
  ),

  createGameCharacter(
    1029,
    "Joker",
    ["joker"],
    ["Süper kahraman evreni (Kötü adam)", "Aksiyon-Macera serisi"],
    ["Mor takım elbise", "Yeşil saç", "Soluk beyaz ten", "Geniş gülümseme"],
    ["Gotham Şehri", "Arkham Tımarhanesi"],
    ["Kaos elçisi", "Batman'in ezeli düşmanı", "Ölümcül oyuncaklar ve gazlar kullanır"]
  ),

  createGameCharacter(
    1030,
    "Lee Everett",
    ["lee", "lee everett"],
    ["Macera", "Epizodik hikaye", "Seçimlere dayalı oyun"],
    ["Kısa saç", "Açık mavi gömlek", "Öğretmen görünümlü yetişkin", "Balta veya tabanca"],
    ["Zombi istilası", "Georgia, ABD", "Hayatta kalanlar grubu"],
    ["Tarih öğretmeni", "Küçük bir kızı (Clementine) korur", "Geçmişinde cinayet var"]
  ),

  createGameCharacter(
    1031,
    "Max Caulfield",
    ["max", "max caulfield"],
    ["Macera", "Epizodik gençlik draması", "Kelebek etkisi temalı"],
    ["Polaroid fotoğraf makinesi", "Günlük kıyafetler (tişört/kapüşonlu)", "Kısa kahverengi saç"],
    ["Arcadia Bay", "Blackwell Akademisi", "Lise hayatı"],
    ["Zamanı geri alabilir", "Fotoğrafçılık öğrencisi", "İçe dönük"]
  ),

  createGameCharacter(
    1032,
    "Connor",
    ["connor"],
    ["İnteraktif sinema", "Seçimlere dayalı", "Bilim kurgu hikayesi"],
    ["Gri android ceketi (RK800)", "Mavi LED şakak", "Bozuk para çevirir"],
    ["Detroit 2038", "CyberLife", "İnsan ve Makine çatışması"],
    ["Polis müfettişi android", "Teğmen Hank'in ortağı", "Yazılım sapkınlarını avlar"]
  ),

  createGameCharacter(
    1033,
    "Ethan Winters",
    ["ethan", "ethan winters"],
    ["Hayatta kalma korku", "Birinci şahıs kamera açısı", "Korku serisi yenilemesi"],
    ["Yüzü genelde gösterilmez", "Kolları sürekli yaralanır", "Sıradan kıyafetler"],
    ["Louisiana bataklığı", "Romanya köyü ve şatolar", "Biyolojik mutasyonlar"],
    ["Sıradan bir vatandaş", "Karısını ve kızını arar", "İnanılmaz bir iyileşme faktörü var"]
  ),

  createGameCharacter(
    1034,
    "Chris Redfield",
    ["chris", "chris redfield"],
    ["Hayatta kalma korku", "Aksiyon-Korku", "Klasik zombi oyunu serisi"],
    ["Aşırı kaslı kollar", "Askeri teçhizat / S.T.A.R.S. üniforması"],
    ["Spencer Malikanesi", "Afrika (Bioterörizm)", "BSAA ajansı"],
    ["Yumrukla kaya parçalar", "Bioterörizmle savaşır", "Wesker'ın düşmanı"]
  ),

  createGameCharacter(
    1035,
    "Albert Wesker",
    ["wesker", "albert wesker"],
    ["Hayatta kalma korku", "Aksiyon", "Oyun tarihinin ikonik kötü adamlarından"],
    ["Gece bile takılan güneş gözlüğü", "Siyah deri pardösü", "Sarı kedi gözleri", "Sarışın"],
    ["Umbrella Corporation", "Laboratuvarlar", "Biyolojik virüsler"],
    ["İnsanüstü hız", "Eski polis şefi", "Seven minutes is all I can spare"]
  ),

  createGameCharacter(
    1036,
    "Ada Wong",
    ["ada", "ada wong"],
    ["Hayatta kalma korku", "Casusluk", "Gizemli yan karakter"],
    ["Kırmızı elbise", "Kısa siyah saç", "Kanca tabancası (Grapple Gun)"],
    ["Raccoon City", "Gizli örgütler", "İspanya köyleri"],
    ["Gizli ajan", "Leon ile karmaşık bir ilişkisi var", "Kendi ajandasıyla hareket eder"]
  ),

  createGameCharacter(
    1037,
    "Lady Dimitrescu",
    ["dimitrescu", "lady dimitrescu", "alcina dimitrescu"],
    ["Hayatta kalma korku", "Modern dönemin en çok konuşulan kötü karakteri"],
    ["2.9 metre boy", "Geniş beyaz şapka", "Beyaz uzun elbise", "Uzatılabilen pençeler"],
    ["Avrupa'da bir şato", "Vampir benzeri kızları var", "Kurt adam ve mutant köyü"],
    ["Vampir kontes", "Şatonun sahibi", "Şarap sever (insan kanından)"]
  ),

  createGameCharacter(
    1038,
    "Pyramid Head",
    ["pyramid head", "piramit kafa", "red pyramid thing"],
    ["Psikolojik korku", "Kült klasik", "Bilinçaltı kabusu"],
    ["Kafasında devasa metal piramit", "Kanlı kasap önlüğü", "Devasa ağır kılıç (Great Knife)"],
    ["Sisli kasaba", "Paslı, karanlık Otherworld (Öteki Dünya)"],
    ["Suçluluk duygusunun sembolü", "Acımasız cellat", "Sessiz ve yavaş"]
  ),

  createGameCharacter(
    1039,
    "James Sunderland",
    ["james", "james sunderland"],
    ["Psikolojik korku", "Derin ve rahatsız edici hikaye"],
    ["Yeşil askeri mont", "El feneri", "Radyo", "Bitkin yüz ifadesi"],
    ["Sisli kasaba", "Toluca Gölü", "Korkunç yaratıklar"],
    ["Ölü karısından mektup alır", "Büyük bir sır saklar", "Gerçeği arayan dul"]
  ),

  createGameCharacter(
    1040,
    "G-Man",
    ["g-man", "g man", "gman"],
    ["FPS", "Bilim Kurgu klasiği", "Gizemli izleyici"],
    ["Mavi takım elbise", "El çantası (Evrak çantası)", "Pürüzsüz saç", "Soluk ten"],
    ["Boyutlar arası mekanlar", "Black Mesa", "Zaman ve mekan dışı"],
    ["'Rise and shine, Mr. Freeman'", "Gerçek amacı bilinmiyor", "Zamanı dondurabilir"]
  ),

  createGameCharacter(
    1041,
    "Aiden Pearce",
    ["aiden", "aiden pearce"],
    ["Açık Dünya", "Siber Güvenlik / Hacking aksiyonu"],
    ["Kahverengi deri trençkot", "Yüzünü kapatan maske (fular)", "Beyzbol şapkası", "Akıllı telefon"],
    ["Chicago", "ctOS gözetim sistemi", "Yeraltı hacker ağları"],
    ["İntikamcı", "Her şeyi hackleyebilir (Trafik Işıkları, Kameralar)", "The Fox lakaplı"]
  ),

  createGameCharacter(
    1042,
    "Vault Boy",
    ["vault boy", "pip boy", "pip-boy"],
    ["RPG", "Kıyamet Sonrası", "Maskot karakter"],
    ["Sarı saç (kıvrımlı perçem)", "Mavi-Sarı tulum", "Geniş gülümseme", "Baş parmağını kaldırarak (Thumbs up) onay verme"],
    ["Nükleer çorak araziler", "Yeraltı sığınakları (Vault)", "Retro-Fütüristik Amerika"],
    ["Oyunun istatistik ekranlarında görünür", "Eğitim videolarında oynar", "Vault-Tec maskotu"]
  ),

  createGameCharacter(
    1043,
    "Sylvanas Windrunner",
    ["sylvanas", "sylvanas windrunner", "banshee queen"],
    ["MMORPG", "Strateji", "Devasa çevrimiçi fantezi evreni"],
    ["Mor/Gri ten", "Kırmızı gözler", "Kapüşon ve zırh", "Kara yay"],
    ["Azeroth", "Horde fraksiyonu", "Undercity", "Ölüm diyarı"],
    ["Banshee Kraliçesi", "Ölümsüzlerin (Forsaken) lideri", "Düşmüş elf koruyucusu"]
  ),

  createGameCharacter(
    1044,
    "Illidan Stormrage",
    ["illidan", "illidan stormrage"],
    ["MMORPG", "Strateji", "Devasa çevrimiçi fantezi evreni"],
    ["Dev yarasa kanatları", "Göz bağı", "Yeşil parlayan dövmeler", "Çift hilal bıçağı (Warglaive)"],
    ["Azeroth", "Outland", "Yanan Lejyon (Burning Legion) tehdidi"],
    ["'You are not prepared!'", "Şeytan Avcısı (Demon Hunter)", "Sürgün edilmiş elf"]
  ),

  createGameCharacter(
    1045,
    "Astarion",
    ["astarion", "astarion ancunin"],
    ["CRPG", "Dungeons & Dragons kurallı efsanevi oyun", "Yılın oyunu ödüllü"],
    ["Beyaz dalgalı saç", "Soluk ten", "Kırmızı gözler", "Fırfırlı gömlek"],
    ["Faerun", "Kafatasında mind flayer paraziti", "Baldur's Gate"],
    ["Vampir spawn", "Düzenbaz (Rogue)", "Alaycı ve kurnaz yoldaş"]
  ),

  createGameCharacter(
    1046,
    "Shadowheart",
    ["shadowheart"],
    ["CRPG", "Zar atma mekanikli popüler rol yapma oyunu"],
    ["Siyah saç (at kuyruğu/örgülü)", "Alnında metalik taç/süs", "Zincir zırh", "Kalkan ve gürz"],
    ["Faerun evreni", "Shar tarikatı", "Kayıp hafıza"],
    ["Ruhban (Cleric)", "Gizemli bir eser (Artifact) taşır", "Karanlık tanrıçaya tapar"]
  ),

  createGameCharacter(
    1047,
    "Garrus Vakarian",
    ["garrus", "garrus vakarian"],
    ["Bilim Kurgu RPG", "Uzay Operası", "En sevilen yoldaşlardan biri"],
    ["Mavi/Gri uzaylı teni", "Kuş/Dinozor benzeri yüz (Turian)", "Vizör", "Keskin nişancı tüfeği"],
    ["Citadel uzay istasyonu", "Normandy gemisi", "Galaktik çatışmalar"],
    ["Eski C-Sec polisi", "Keskin nişancı", "Silah kalibre etmeyi sever"]
  ),

  createGameCharacter(
    1048,
    "Tali'Zorah",
    ["tali", "talizorah", "tali zorah"],
    ["Bilim Kurgu RPG", "Uzay Operası", "Mühendis yoldaş"],
    ["Tam kapalı çevre giysisi (çizgili desenli)", "Parlayan beyaz gözlü maske", "Robotik yapıya sahip alt beden"],
    ["Göçmen Filo", "Quarian ırkı", "Yapay zeka savaşı (Geth)"],
    ["Makine mühendisi", "Bağışıklık sistemi çok zayıf", "Hacker (Tech yetenekleri)"]
  ),

  createGameCharacter(
    1049,
    "Aloy",
    ["aloy"],
    ["Aksiyon RPG", "Açık Dünya", "PlayStation klasiği"],
    ["Kızıl örgülü saç", "Kabile kıyafetleri", "Yay ve mızrak", "Kulağında teknolojik cihaz (Focus)"],
    ["Kıyamet sonrası teknolojik doğa", "Mekanik dinozorlar", "Anaerkil kabileler"],
    ["Klon", "Makine avcısı", "Geçmişin sırlarını çözer"]
  ),

  createGameCharacter(
    1050,
    "Kefka",
    ["kefka", "kefka palazzo"],
    ["JRPG", "16-bit dönemi başyapıtı", "Tarihin en iyi kötü adamlarından"],
    ["Palyaço makyajı", "Rengarenk saray kıyafetleri", "Sarı saç", "Püsküllü süsler"],
    ["Büyü ve buharlı makineler dünyası (Steampunk)", "İmparatorluk ordusu", "Esperler"],
    ["Psikopat kahkahasıyla meşhur", "Büyü gücü ile çıldırmış general", "Dünyanın sonunu gerçekten getirmesiyle bilinir"]
  ),

  createGameCharacter(
    1051,
    "Zagreus",
    ["zagreus", "zag"],
    ["Roguelike", "İzometrik aksiyon", "Ödüllü bağımsız oyun (Indie)"],
    ["Alev yanan ayaklar", "Kırmızı-siyah togalı kıyafet", "Bir kırmızı, bir yeşil göz (Heterokromi)", "Defne yaprağı tacı"],
    ["Yeraltı Dünyası (Underworld)", "Yunan Mitolojisi", "Tartarus, Asphodel, Elysium"],
    ["Ölüm tanrısının oğlu", "Evden kaçmaya çalışır", "Olimpos tanrılarından lütuf alır"]
  ),

  createGameCharacter(
    1052,
    "Hollow Knight",
    ["the knight", "knight", "hollow knight", "vessel"],
    ["Metroidvania", "Bağımsız yapım (Indie)", "2D platform ve zorlu dövüş"],
    ["Küçük boy", "Boynuzlu beyaz maske (Kafatası benzeri)", "Mavi/Gri pelerin", "Çivi (Nail) silahı"],
    ["Hallownest böcek krallığı", "Karanlık ve melankolik harabeler", "Enfeksiyon"],
    ["Sessiz gezgin", "Ruh (Soul) kullanır", "Çivi ustası"]
  ),

  createGameCharacter(
    1053,
    "Madeline",
    ["madeline"],
    ["Platform oyunu", "Zorlu Indie yapımı", "Mental sağlık temalı"],
    ["Kızıl saç (dash atınca mavi olur)", "Mavi mont", "Sırt çantası"],
    ["Büyülü bir dağ", "Karlar ve engeller", "Rüya/Kabus sekansları"],
    ["Dağa tırmanmaya çalışır", "Panik ataklarla mücadele eder", "Havada atılma (Dash) yeteneği var"]
  ),

  createGameCharacter(
    1054,
    "Cuphead",
    ["cuphead", "cup head"],
    ["Run and Gun / Boss Rush", "Indie yapımı", "Aşırı zorluğuyla ünlü"],
    ["Kafası fincan", "Kırmızı kısa pantolon", "Kırmızı beyaz pipet", "Beyaz eldivenler"],
    ["1930'lar çizgi film evreni", "Inkwell Adası", "Şeytanın kumarhanesi"],
    ["Şeytanla bahse girer", "Parmaklarından ateş eder", "Kardeşi Mugman ile gezer"]
  ),

  createGameCharacter(
    1055,
    "Isaac",
    ["isaac", "the binding of isaac"],
    ["Roguelike", "Yukarıdan bakışlı zindan temizleme", "Kara mizah ve din eleştirisi"],
    ["Çıplak küçük çocuk", "Kel", "Ağlayan yüz ifadesi"],
    ["Bodrum katı (Basement)", "Canavarlar ve tuhaf yaratıklar", "Dini sembolizm"],
    ["Gözyaşlarını mermi olarak kullanır", "Annesinden kaçar", "Kutulara saklanır"]
  ),

  createGameCharacter(
    1056,
    "Ori",
    ["ori"],
    ["Metroidvania / Platform", "Görsel ve müzik şöleni", "Duygusal hikaye"],
    ["Küçük beyaz parlayan yaratık", "Tavşan/Kedi benzeri görünüm", "Büyük siyah gözler"],
    ["Nibel ve Niwen ormanları", "Devasa baykuşlar", "Büyülü ruhlar"],
    ["Ruh ağacının çocuğu", "Işık saçar", "Havada zıplama ve süzülme ustası"]
  ),

  createGameCharacter(
    1057,
    "Handsome Jack",
    ["handsome jack", "jack"],
    ["Looter Shooter (FPS)", "Hücre gölgelendirme (Cel-shaded) grafikleri", "Komik ve psikopat kötü adam"],
    ["Yüzünde kendi yüzünün maskesi var", "Sarı/Kahverengi ceket", "Farklı renkte gözler", "Cep saati"],
    ["Pandora gezegeni", "Hyperion şirketi", "Vault (Kasa) avcılığı"],
    ["Kendisini kahraman sanır", "Şirket CEO'su", "Elmastan yapılmış bir atı var (Butt Stallion)"]
  ),

  createGameCharacter(
    1058,
    "Claptrap",
    ["claptrap", "cl4p-tp"],
    ["Looter Shooter (FPS)", "Komedi odaklı", "Serinin maskotu"],
    ["Tek tekerlek üzerinde durur", "Sarı boyalı kare metal gövde", "Tek büyük mavi göz (Lens)"],
    ["Pandora gezegeni", "Çöplükler", "Hyperion teknolojisi"],
    ["Sinir bozucu derecede konuşkan", "Merdiven çıkamaz", "Kendi partisinin tek katılımcısı"]
  ),

  createGameCharacter(
    1059,
    "Heihachi Mishima",
    ["heihachi", "heihachi mishima"],
    ["Dövüş Oyunu", "3D Arena", "Aksiyon klasiği"],
    ["Yanlara doğru dikilmiş beyaz/gri saç", "Kaslı yaşlı adam", "Kaplan desenli karate pantolonu (Gi)"],
    ["Mishima Zaibatsu şirketi", "Iron Fist (Demir Yumruk) Turnuvası"],
    ["Oğlunu volkana atmasıyla bilinir", "Mishima stil karate ustası", "Acımasız şirket CEO'su"]
  ),

  createGameCharacter(
    1060,
    "Morrigan",
    ["morrigan", "morrigan aensland"],
    ["Dövüş Oyunu", "2D Arcade", "Korku temalı dövüşçüler"],
    ["Yeşil saç", "Yarasa kanatları (kafada ve sırtta)", "Siyah açık leotard kostüm", "Desenli tayt"],
    ["Makai diyarı", "Vampirler ve Kurtadamlar evreni", "Darkstalkers"],
    ["Succubus (İblis)", "Ruh çeker", "Eğlence ve heyecan peşinde koşar"]
  ),

  createGameCharacter(
    1061,
    "Mario",
    ["mario", "super mario"],
    ["Platform oyunu", "Nintendo", "Aile dostu seri"],
    ["Kırmızı şapka", "Bıyık", "Mavi tulum"],
    ["Mantar Krallığı", "Prenses Peach", "Bowser"],
    ["Tesisatçı", "Zıplamasıyla ünlü", "Oyun tarihinin maskotlarından"]
  ),

  createGameCharacter(
    1062,
    "Link",
    ["link"],
    ["Macera oyunu", "Nintendo", "Fantastik keşif"],
    ["Yeşil tunik", "Kılıç ve kalkan", "Sivri kulak"],
    ["Hyrule", "Zelda", "Ganon"],
    ["Sessiz kahraman", "Cesaret sembolü", "Master Sword ile bilinir"]
  ),

  createGameCharacter(
    1063,
    "Samus Aran",
    ["samus", "samus aran"],
    ["Aksiyon-macera", "Bilim kurgu", "Nintendo"],
    ["Güç zırhı", "Kol topu", "Kask"],
    ["Uzaylı gezegenler", "Metroid yaratıkları", "Galaktik avcılık"],
    ["Ödül avcısı", "Power Suit kullanır", "Bilim kurgu ikonu"]
  ),

  createGameCharacter(
    1064,
    "Master Chief",
    ["master chief", "john 117", "john-117"],
    ["FPS", "Xbox klasiği", "Bilim kurgu savaşı"],
    ["Yeşil zırh", "Kask", "Yüzü görünmez"],
    ["Halo evreni", "Spartan programı", "Cortana"],
    ["Süper asker", "Sessiz ve ciddi", "İkonik zırh"]
  ),

  createGameCharacter(
    1065,
    "Doom Slayer",
    ["doom slayer", "doomguy", "doom guy"],
    ["FPS", "Hızlı aksiyon", "Demon avı"],
    ["Yeşil zırh", "Kask", "Ağır silahlar"],
    ["Mars üsleri", "Cehennem boyutu", "Bilim kurgu korku"],
    ["Sessiz kahraman", "Demon avcısı", "Aşırı güçlü"]
  ),

  createGameCharacter(
    1066,
    "Lara Croft",
    ["lara", "lara croft", "tomb raider"],
    ["Aksiyon-macera", "Bulmaca", "Keşif"],
    ["Macera kıyafetleri", "Çift tabanca", "Kahverengi saç"],
    ["Antik mezarlar", "Kayıp şehirler", "Arkeoloji"],
    ["Arkeolog", "Kaşif", "Tuzak çözer"]
  ),

  createGameCharacter(
    1067,
    "Nathan Drake",
    ["nathan drake", "drake", "nate"],
    ["Aksiyon-macera", "Hazine avı", "Sinematik hikaye"],
    ["Gömlek", "Kemerli macera kıyafeti", "Yaralı gezgin görünümü"],
    ["Kayıp hazineler", "Antik şehirler", "Tırmanış"],
    ["Hazine avcısı", "Esprili", "Tırmanış ustası"]
  ),

  createGameCharacter(
    1068,
    "Kratos",
    ["kratos"],
    ["Aksiyon-macera", "Mitoloji temalı", "PlayStation klasiği"],
    ["Soluk ten", "Kırmızı dövme", "Sakal"],
    ["Yunan mitolojisi", "İskandinav mitolojisi", "Tanrılar"],
    ["Savaşçı", "Baba figürü", "Blades of Chaos"]
  ),

  createGameCharacter(
    1069,
    "Atreus",
    ["atreus", "loki"],
    ["Aksiyon-macera", "Mitoloji temalı", "Yan karakter"],
    ["Genç okçu", "Kürk kıyafet", "Yay"],
    ["İskandinav mitolojisi", "Midgard", "Devler"],
    ["Kratos'un oğlu", "Ok kullanır", "Loki kimliğiyle bağlantılı"]
  ),

  createGameCharacter(
    1070,
    "Geralt of Rivia",
    ["geralt", "geralt of rivia", "rivialı geralt", "rivyali geralt"],
    ["Aksiyon RPG", "Açık dünya", "Fantastik evren"],
    ["Beyaz saç", "Sarı göz", "İki kılıç"],
    ["Kıta", "Canavarlar", "Büyü ve krallıklar"],
    ["Witcher", "Canavar avcısı", "İksir kullanır"]
  ),

  createGameCharacter(
    1071,
    "Ciri",
    ["ciri", "cirilla"],
    ["Aksiyon RPG", "Fantastik evren", "Ana hikaye figürü"],
    ["Beyaz saç", "Yüzünde yara", "Kılıç"],
    ["Kıta", "Kadim Kan", "Zaman ve boyut yolculuğu"],
    ["Hızlı kılıç ustası", "Özel güçleri var", "Geralt ile bağlantılı"]
  ),

  createGameCharacter(
    1072,
    "Yennefer",
    ["yennefer", "yennefer of vengerberg"],
    ["Aksiyon RPG", "Fantastik evren", "Büyücü karakter"],
    ["Siyah saç", "Mor göz", "Şık kıyafet"],
    ["Vengerberg", "Büyücüler konseyi", "Saray entrikaları"],
    ["Güçlü büyücü", "Geralt ile bağlantılı", "Zeki ve sert"]
  ),

  createGameCharacter(
    1073,
    "Triss Merigold",
    ["triss", "triss merigold"],
    ["Aksiyon RPG", "Fantastik evren", "Büyücü karakter"],
    ["Kızıl saç", "Yeşil kıyafet", "Büyücü tarzı"],
    ["Temeria", "Büyücüler", "Siyasi entrikalar"],
    ["Ateş büyüleri", "Nazik karakter", "Geralt ile bağlantılı"]
  ),

  createGameCharacter(
    1074,
    "Solid Snake",
    ["solid snake", "snake"],
    ["Gizlilik oyunu", "Taktik casusluk", "Kojima oyunu"],
    ["Bandana", "Gizli operasyon kıyafeti", "Ciddi görünüm"],
    ["Askeri üsler", "Metal Gear projeleri", "Casusluk"],
    ["Gizlilik ustası", "Karton kutuyla bilinir", "Taktiksel asker"]
  ),

  createGameCharacter(
    1075,
    "Big Boss",
    ["big boss", "naked snake"],
    ["Gizlilik oyunu", "Taktik casusluk", "Soğuk savaş teması"],
    ["Bandana", "Göz bandı", "Askeri kıyafet"],
    ["Outer Heaven", "Soğuk Savaş", "Askeri projeler"],
    ["Efsane asker", "Snake karakterlerinin kökeni", "Karizmatik lider"]
  ),

  createGameCharacter(
    1076,
    "Cloud Strife",
    ["cloud", "cloud strife"],
    ["JRPG", "Fantastik bilim kurgu", "Kült seri"],
    ["Sarı dikenli saç", "Dev kılıç", "Siyah kıyafet"],
    ["Midgar", "Shinra", "Lifestream"],
    ["Buster Sword", "Eski asker", "Sessiz karakter"]
  ),

  createGameCharacter(
    1077,
    "Sephiroth",
    ["sephiroth"],
    ["JRPG", "Kült antagonist", "Fantastik bilim kurgu"],
    ["Uzun gümüş saç", "Uzun kılıç", "Siyah kıyafet"],
    ["Midgar evreni", "Jenova", "Shinra"],
    ["İkonik kötü karakter", "Masamune kılıcı", "Soğuk ve tehditkar"]
  ),

  createGameCharacter(
    1078,
    "Jill Valentine",
    ["jill", "jill valentine"],
    ["Hayatta kalma korku", "Zombi temalı", "Klasik seri"],
    ["Kısa saç", "Taktik kıyafet", "Polis görünümü"],
    ["Raccoon City", "S.T.A.R.S.", "Umbrella"],
    ["Cesur", "Hayatta kalma ustası", "Kilit açma becerisi"]
  ),

  createGameCharacter(
    1079,
    "Leon S. Kennedy",
    ["leon", "leon kennedy", "leon s kennedy"],
    ["Hayatta kalma korku", "Aksiyon-korku", "Zombi temalı"],
    ["Sarı saç", "Deri ceket", "Ajan görünümü"],
    ["Raccoon City", "İspanya köyü", "Bioterörizm"],
    ["Ajan", "Soğukkanlı", "Kurtarma görevleriyle bilinir"]
  ),

  createGameCharacter(
    1080,
    "Claire Redfield",
    ["claire", "claire redfield"],
    ["Hayatta kalma korku", "Zombi temalı", "Klasik seri"],
    ["Kırmızı ceket", "Kahverengi saç", "Motorcu tarzı"],
    ["Raccoon City", "Umbrella", "Aile arayışı"],
    ["Chris'in kardeşi", "Cesur", "Hayatta kalma mücadelesi"]
  ),

  createGameCharacter(
    1081,
    "Nemesis",
    ["nemesis"],
    ["Hayatta kalma korku", "Zombi temalı", "İkonik yaratık"],
    ["Dev vücut", "Deforme yüz", "Roketatar"],
    ["Raccoon City", "Umbrella deneyi", "S.T.A.R.S. avı"],
    ["STARS diye bağırmasıyla bilinir", "Takipçi düşman", "Mutasyon ürünü"]
  ),

  createGameCharacter(
    1082,
    "Ezio Auditore",
    ["ezio", "ezio auditore"],
    ["Aksiyon-macera", "Tarihi açık dünya", "Gizlilik"],
    ["Beyaz kapüşon", "Gizli bıçak", "Rönesans kıyafeti"],
    ["İtalya", "Rönesans", "Suikastçılar"],
    ["Karizmatik suikastçı", "Parkur", "Gizli bıçak"]
  ),

  createGameCharacter(
    1083,
    "Altair Ibn-La'Ahad",
    ["altair", "altaïr", "altair ibn la ahad"],
    ["Aksiyon-macera", "Tarihi kurgu", "Gizlilik"],
    ["Beyaz kapüşon", "Gizli bıçak", "Sade kıyafet"],
    ["Kutsal Topraklar", "Haçlı Seferleri", "Suikastçılar"],
    ["İlk büyük suikastçı figürlerden", "Sessiz ve disiplinli", "Gizli bıçak"]
  ),

  createGameCharacter(
    1084,
    "Bayek",
    ["bayek", "bayek of siwa"],
    ["Aksiyon RPG", "Tarihi açık dünya", "Antik Mısır"],
    ["Mısır kıyafeti", "Yay", "Medjay görünümü"],
    ["Siwa", "Antik Mısır", "Kardeşlik kökeni"],
    ["Medjay", "Suikastçıların kökeni", "Ailesi için mücadele eder"]
  ),

  createGameCharacter(
    1085,
    "Kassandra",
    ["kassandra"],
    ["Aksiyon RPG", "Tarihi açık dünya", "Antik Yunan"],
    ["Spartalı zırh", "Mızrak", "Savaşçı görünüm"],
    ["Antik Yunan", "Sparta", "Ege dünyası"],
    ["Misthios", "Spartalı savaşçı", "Diyalog seçimleriyle gelişir"]
  ),

  createGameCharacter(
    1086,
    "Agent 47",
    ["agent 47", "47", "hitman"],
    ["Gizlilik oyunu", "Suikast simülasyonu", "Taktik planlama"],
    ["Kel kafa", "Barkod dövmesi", "Siyah takım elbise"],
    ["Dünya çapında görevler", "ICA", "Gizli suikastlar"],
    ["Kılık değiştirir", "Soğukkanlı", "Planlı suikastçı"]
  ),

  createGameCharacter(
    1087,
    "Sam Fisher",
    ["sam fisher", "fisher"],
    ["Gizlilik oyunu", "Taktik casusluk", "Modern operasyon"],
    ["Üç yeşil lensli gözlük", "Siyah taktik kıyafet", "Sessiz ekipman"],
    ["Third Echelon", "Gizli görevler", "Casusluk"],
    ["Sessiz ilerler", "Gece görüşüyle bilinir", "Profesyonel ajan"]
  ),

  createGameCharacter(
    1088,
    "Ryu",
    ["ryu"],
    ["Dövüş oyunu", "Arcade klasiği", "2D dövüş"],
    ["Beyaz karate gi", "Kırmızı kafa bandı", "Çıplak ayak"],
    ["Dünya savaşçıları", "Turnuvalar", "Hadou enerjisi"],
    ["Hadouken", "Disiplinli dövüşçü", "Karate ustası"]
  ),

  createGameCharacter(
    1089,
    "Chun-Li",
    ["chun li", "chun-li"],
    ["Dövüş oyunu", "Arcade klasiği", "2D dövüş"],
    ["Mavi qipao", "Topuz saç", "Dikenli bileklik"],
    ["Interpol", "Dünya savaşçıları", "Turnuvalar"],
    ["Hızlı tekmeler", "İkonik kadın dövüşçü", "Adalet arar"]
  ),

  createGameCharacter(
    1090,
    "Ken Masters",
    ["ken", "ken masters"],
    ["Dövüş oyunu", "Arcade klasiği", "2D dövüş"],
    ["Kırmızı karate gi", "Sarı saç", "Eldiven"],
    ["Dünya savaşçıları", "Turnuvalar", "Ryu ile rekabet"],
    ["Shoryuken", "Ateşli dövüş stili", "Ryu'nun dostu/rakibi"]
  ),

  createGameCharacter(
    1091,
    "Akuma",
    ["akuma", "gouki"],
    ["Dövüş oyunu", "Arcade klasiği", "Güçlü antagonist"],
    ["Kırmızı saç", "Tespih kolye", "Karanlık gi"],
    ["Satsui no Hado", "Dövüş turnuvaları", "Karanlık güç"],
    ["Raging Demon", "Aşırı güçlü dövüşçü", "Karanlık enerji"]
  ),

  createGameCharacter(
    1092,
    "Scorpion",
    ["scorpion", "hanzo hasashi"],
    ["Dövüş oyunu", "Klasik arcade seri", "Fatality sistemi"],
    ["Sarı ninja kıyafeti", "Maske", "Zincirli mızrak"],
    ["Turnuva evreni", "Ninja klanları", "Doğaüstü güçler"],
    ["Get over here sözü", "Ateş güçleri", "İntikam teması"]
  ),

  createGameCharacter(
    1093,
    "Sub-Zero",
    ["sub zero", "sub-zero", "kuai liang", "bi-han", "bihan"],
    ["Dövüş oyunu", "Klasik arcade seri", "Turnuva teması"],
    ["Mavi ninja kıyafeti", "Maske", "Buz efektleri"],
    ["Ninja klanları", "Doğaüstü turnuva", "Lin Kuei"],
    ["Buz güçleri", "Rakibi dondurur", "İkonik dövüşçü"]
  ),

  createGameCharacter(
    1094,
    "Liu Kang",
    ["liu kang"],
    ["Dövüş oyunu", "Turnuva temalı seri", "Kahraman karakter"],
    ["Kırmızı/siyah dövüş kıyafeti", "Kafa bandı", "Atletik yapı"],
    ["Earthrealm", "Shaolin", "Turnuva evreni"],
    ["Bisiklet tekmesi", "Ateş güçleri", "Ana kahramanlardan"]
  ),

  createGameCharacter(
    1095,
    "Sonya Blade",
    ["sonya", "sonya blade"],
    ["Dövüş oyunu", "Turnuva temalı seri", "Askeri karakter"],
    ["Askeri kıyafet", "Sarışın saç", "Yeşil enerji bileklikleri"],
    ["Special Forces", "Earthrealm", "Turnuva evreni"],
    ["Askeri dövüşçü", "Enerji halkaları", "Disiplinli lider"]
  ),

  createGameCharacter(
    1096,
    "Jin Kazama",
    ["jin", "jin kazama"],
    ["Dövüş oyunu", "3D arena", "Aile dramı"],
    ["Siyah saç", "Alev desenli pantolon", "Dövüş eldiveni"],
    ["Mishima ailesi", "Iron Fist turnuvası", "Devil Gene"],
    ["Devil Gene taşır", "Karate tarzı", "Aile çatışması"]
  ),

  createGameCharacter(
    1097,
    "Kazuya Mishima",
    ["kazuya", "kazuya mishima"],
    ["Dövüş oyunu", "3D arena", "İkonik anti-kahraman"],
    ["Siyah saç", "Kaslı vücut", "Yara izi"],
    ["Mishima Zaibatsu", "Iron Fist turnuvası", "Devil Gene"],
    ["Devil formu", "Electric Wind God Fist", "Acımasız"]
  ),

  createGameCharacter(
    1098,
    "Kazuma Kiryu",
    ["kiryu", "kazuma kiryu", "dragon of dojima"],
    ["Aksiyon-macera", "Suç draması", "Japon yeraltı dünyası"],
    ["Beyaz takım elbise", "Ejderha dövmesi", "Ciddi ifade"],
    ["Kamurocho", "Yakuza dünyası", "Dojima ailesi"],
    ["Dragon of Dojima", "Yetimhaneyle bağlantılı", "Onurlu dövüşçü"]
  ),

  createGameCharacter(
    1099,
    "Goro Majima",
    ["majima", "goro majima", "mad dog of shimano"],
    ["Aksiyon-macera", "Suç draması", "Japon yeraltı dünyası"],
    ["Göz bandı", "Yılan derisi ceket", "Çılgın gülüş"],
    ["Kamurocho", "Yakuza dünyası", "Cabaret kulüpleri"],
    ["Mad Dog lakabı", "Bıçak kullanır", "Beklenmedik davranışlar"]
  ),

  createGameCharacter(
    1100,
    "Ichiban Kasuga",
    ["ichiban", "ichiban kasuga"],
    ["JRPG", "Suç draması", "Sıra tabanlı dövüş"],
    ["Kıvırcık afro saç", "Kırmızı takım elbise", "Beysbol sopası"],
    ["Yokohama", "Yakuza dünyası", "Evsizlikten yükseliş"],
    ["İyimser kahraman", "Dragon Quest hayranı", "Arkadaşlık teması"]
  ),

  createGameCharacter(
    1101,
    "Dante",
    ["dante"],
    ["Hack and slash", "Aksiyon oyunu", "Şeytan avı"],
    ["Beyaz saç", "Kırmızı deri ceket", "Kılıç ve tabancalar"],
    ["Şeytanlar dünyası", "Sparda mirası", "Gotik şehirler"],
    ["Devil hunter", "Esprili", "Rebellion kılıcı"]
  ),

  createGameCharacter(
    1102,
    "Vergil",
    ["vergil"],
    ["Hack and slash", "Aksiyon oyunu", "İkonik rakip"],
    ["Beyaz saç", "Mavi palto", "Katana"],
    ["Sparda mirası", "Şeytani güçler", "Kardeş rekabeti"],
    ["Yamato kılıcı", "Motivasyon sözüyle bilinir", "Dante'nin kardeşi"]
  ),

  createGameCharacter(
    1103,
    "Nero",
    ["nero"],
    ["Hack and slash", "Aksiyon oyunu", "Genç kahraman"],
    ["Beyaz saç", "Mavi/kırmızı kıyafet", "Mekanik kol"],
    ["Şeytan avı", "Fortuna", "Sparda mirası"],
    ["Devil Breaker kolu", "Asi karakter", "Kılıç ve tabanca kullanır"]
  ),

  createGameCharacter(
    1104,
    "Bayonetta",
    ["bayonetta", "cereza"],
    ["Hack and slash", "Aksiyon oyunu", "Stil odaklı dövüş"],
    ["Siyah saç", "Gözlük", "Siyah kıyafet"],
    ["Cadılar ve melekler", "Umbra Witches", "Doğaüstü savaş"],
    ["Cadı güçleri", "Saçını silah gibi kullanır", "Stil sahibi"]
  ),

  createGameCharacter(
    1105,
    "Gordon Freeman",
    ["gordon", "gordon freeman"],
    ["FPS", "Bilim kurgu klasiği", "Sessiz kahraman"],
    ["HEV suit", "Gözlük", "Levye"],
    ["Black Mesa", "Xen", "Combine tehdidi"],
    ["Teorik fizikçi", "Levye ile bilinir", "Sessiz protagonist"]
  ),

  createGameCharacter(
    1106,
    "Alyx Vance",
    ["alyx", "alyx vance"],
    ["FPS", "Bilim kurgu", "Direniş hikayesi"],
    ["Kahverengi saç", "Ceket", "Elektronik eldiven"],
    ["City 17", "Combine işgali", "Direniş"],
    ["Zeki hacker", "Gordon'un müttefiki", "Cesur direnişçi"]
  ),

  createGameCharacter(
    1107,
    "Duke Nukem",
    ["duke nukem", "duke"],
    ["FPS", "Aksiyon parodisi", "90'lar ikonu"],
    ["Sarı saç", "Güneş gözlüğü", "Kaslı yapı"],
    ["Uzaylı istilası", "Şehirler", "Aksiyon filmi atmosferi"],
    ["Kaba espriler", "Aksiyon kahramanı parodisi", "İkonik replikler"]
  ),

  createGameCharacter(
    1108,
    "Marcus Fenix",
    ["marcus fenix", "marcus"],
    ["TPS", "Bilim kurgu savaş", "Takım tabanlı aksiyon"],
    ["Ağır zırh", "Bandana", "Kaslı yapı"],
    ["Sera gezegeni", "Locust savaşı", "COG ordusu"],
    ["Lancer kullanır", "Sert asker", "Takım lideri"]
  ),

  createGameCharacter(
    1109,
    "Dominic Santiago",
    ["dom", "dominic santiago"],
    ["TPS", "Bilim kurgu savaş", "Takım tabanlı aksiyon"],
    ["Ağır zırh", "Sakal", "Askeri görünüm"],
    ["Sera gezegeni", "Locust savaşı", "Delta Squad"],
    ["Marcus'un dostu", "Ailesini arar", "Duygusal hikaye"]
  ),

  createGameCharacter(
    1110,
    "Faith Connors",
    ["faith", "faith connors"],
    ["Parkur oyunu", "Birinci şahıs platform", "Distopik şehir"],
    ["Kısa siyah saç", "Göz dövmesi", "Beyaz kıyafet"],
    ["Cam şehir", "Runner ağı", "Gözetim toplumu"],
    ["Parkur ustası", "Çatılarda koşar", "Teslimatçı"]
  ),

  createGameCharacter(
    1111,
    "Elizabeth",
    ["elizabeth", "elizabeth comstock"],
    ["FPS", "Hikayeli aksiyon", "Alternatif tarih"],
    ["Mavi elbise", "Kısa saç", "Kolyeli görünüm"],
    ["Columbia şehri", "Boyut yarıkları", "Alternatif evrenler"],
    ["Tear açabilir", "Booker ile gezer", "Özgürlük arar"]
  ),

  createGameCharacter(
    1112,
    "Booker DeWitt",
    ["booker", "booker dewitt"],
    ["FPS", "Hikayeli aksiyon", "Alternatif tarih"],
    ["Kısa saç", "Yelek", "Eski dedektif tarzı"],
    ["Columbia", "Borç ve kefaret", "Alternatif evrenler"],
    ["Elizabeth'i arar", "Eski Pinkerton ajanı", "Karanlık geçmiş"]
  ),

  createGameCharacter(
    1113,
    "Big Daddy",
    ["big daddy", "bouncer"],
    ["FPS", "Korku ve bilim kurgu", "Atmosferik oyun"],
    ["Dalgıç kıyafeti", "Matkap kol", "Yuvarlak kask"],
    ["Rapture", "Deniz altı şehir", "Little Sister'lar"],
    ["Koruyucu figür", "Ağır zırhlı", "Matkapla saldırır"]
  ),

  createGameCharacter(
    1114,
    "Clementine",
    ["clementine", "clem"],
    ["Macera", "Epizodik hikaye", "Zombi dünyası"],
    ["Beyzbol şapkası", "Genç kız", "Sırt çantası"],
    ["Zombi istilası", "Hayatta kalan gruplar", "Yolculuk"],
    ["Lee'nin koruduğu çocuk", "Büyüyerek liderleşir", "Seçimlerle şekillenir"]
  ),

  createGameCharacter(
    1115,
    "Joel Miller",
    ["joel", "joel miller"],
    ["Aksiyon-macera", "Kıyamet sonrası", "Duygusal hikaye"],
    ["Sakal", "Sırt çantası", "Oduncu gömleği"],
    ["Enfekte dünya", "Boston", "Yolculuk"],
    ["Koruyucu baba figürü", "Gitar çalar", "Sert hayatta kalan"]
  ),

  createGameCharacter(
    1116,
    "Ellie Williams",
    ["ellie", "ellie williams"],
    ["Aksiyon-macera", "Kıyamet sonrası", "Duygusal hikaye"],
    ["Kızıl kahverengi saç", "Sırt çantası", "Bıçak"],
    ["Enfekte dünya", "Fireflies", "Yolculuk"],
    ["Bağışıklığı vardır", "Gitar çalar", "Cesur ve alaycı"]
  ),

  createGameCharacter(
    1117,
    "Abby Anderson",
    ["abby", "abby anderson"],
    ["Aksiyon-macera", "Kıyamet sonrası", "Tartışmalı karakter"],
    ["Kaslı yapı", "Örgülü saç", "Askeri kıyafet"],
    ["WLF", "Seattle", "Enfekte dünya"],
    ["Güçlü savaşçı", "Karmaşık motivasyonlar", "Yakın dövüşte güçlü"]
  ),

  createGameCharacter(
    1118,
    "Pac-Man",
    ["pac-man", "pacman"],
    ["Arcade klasiği", "Labirent oyunu", "Retro ikon"],
    ["Sarı yuvarlak karakter", "Ağız biçimi", "Basit tasarım"],
    ["Labirent", "Hayaletler", "Power pellet"],
    ["Noktaları yer", "Hayaletlerden kaçar", "Oyun tarihinin maskotlarından"]
  ),

  createGameCharacter(
    1119,
    "Sonic",
    ["sonic", "sonic the hedgehog"],
    ["Platform oyunu", "Hız temalı", "Sega maskotu"],
    ["Mavi kirpi", "Kırmızı ayakkabılar", "Dikenli saç"],
    ["Green Hill Zone", "Kaos zümrütleri", "Dr. Eggman"],
    ["Çok hızlı koşar", "Spin dash", "Sega ikonu"]
  ),

  createGameCharacter(
    1120,
    "Tails",
    ["tails", "miles tails prower"],
    ["Platform oyunu", "Yardımcı karakter", "Sega"],
    ["İki kuyruklu tilki", "Turuncu renk", "Pilot gözlüğü bazen"],
    ["Sonic evreni", "Uçan makineler", "Green Hill"],
    ["İki kuyruğuyla uçar", "Mucit", "Sonic'in dostu"]
  ),

  createGameCharacter(
    1121,
    "Knuckles",
    ["knuckles", "knuckles the echidna"],
    ["Platform oyunu", "Sega", "Yan karakter"],
    ["Kırmızı echidna", "Dikenli eldiven", "Güçlü görünüm"],
    ["Angel Island", "Master Emerald", "Sonic evreni"],
    ["Güçlü yumruklar", "Tırmanır", "Master Emerald koruyucusu"]
  ),

  createGameCharacter(
    1122,
    "Crash Bandicoot",
    ["crash", "crash bandicoot"],
    ["Platform oyunu", "PlayStation klasiği", "Komik aksiyon"],
    ["Turuncu bandicoot", "Kot pantolon", "Spor ayakkabı"],
    ["Wumpa Adaları", "Dr. Cortex", "Tropik bölümler"],
    ["Spin saldırısı", "Wumpa meyvesi toplar", "Sessiz komik kahraman"]
  ),

  createGameCharacter(
    1123,
    "Spyro",
    ["spyro", "spyro the dragon"],
    ["Platform oyunu", "3D macera", "Renkli evren"],
    ["Mor ejderha", "Sarı boynuz", "Küçük kanatlar"],
    ["Ejderha krallıkları", "Fantastik dünyalar", "Portallar"],
    ["Ateş püskürtür", "Uçar ve süzülür", "Ejderha kahraman"]
  ),

  createGameCharacter(
    1124,
    "Rayman",
    ["rayman"],
    ["Platform oyunu", "Renkli macera", "Ubisoft karakteri"],
    ["Kolları ve bacakları ayrık görünür", "Mor kıyafet", "Sarı saç"],
    ["Fantastik ormanlar", "Renkli dünyalar", "Rabbids bağlantısı"],
    ["Yumruk fırlatır", "Platform ustası", "Sessiz/komik kahraman"]
  ),

  createGameCharacter(
    1125,
    "Mega Man",
    ["mega man", "megaman", "rockman"],
    ["Aksiyon platform", "Retro klasik", "Robot savaşları"],
    ["Mavi zırh", "Kol topu", "Kask"],
    ["Robot Masters", "Dr. Wily", "Fütüristik dünya"],
    ["Düşman gücünü alır", "Mega Buster kullanır", "Capcom ikonu"]
  ),

  createGameCharacter(
    1126,
    "Zero",
    ["zero", "mega man zero"],
    ["Aksiyon platform", "Robot savaşları", "Yan seri"],
    ["Kırmızı zırh", "Uzun sarı saç", "Enerji kılıcı"],
    ["Fütüristik dünya", "Reploidler", "Maverick savaşları"],
    ["Z-Saber kullanır", "Hızlı savaşçı", "Mega Man evreni"]
  ),

  createGameCharacter(
    1127,
    "Fox McCloud",
    ["fox", "fox mccloud"],
    ["Uzay savaşı", "Rail shooter", "Nintendo"],
    ["Tilki pilot", "Yeşil kıyafet", "Kulaklık"],
    ["Lylat Sistemi", "Arwing", "Star Fox ekibi"],
    ["Arwing pilotu", "Do a barrel roll sözüyle bağlantılı", "Takım lideri"]
  ),

  createGameCharacter(
    1128,
    "Kirby",
    ["kirby"],
    ["Platform oyunu", "Nintendo", "Sevimli macera"],
    ["Pembe yuvarlak karakter", "Küçük kollar", "Kırmızı ayaklar"],
    ["Dream Land", "Popstar gezegeni", "Sevimli düşmanlar"],
    ["Düşmanları içine çeker", "Güçlerini kopyalar", "Sevimli ama güçlü"]
  ),

  createGameCharacter(
    1129,
    "Wario",
    ["wario"],
    ["Platform/parti oyunu", "Nintendo", "Anti-kahraman"],
    ["Sarı şapka", "Mor tulum", "Büyük bıyık"],
    ["Mantar Krallığı çevresi", "Mini oyun dünyaları"],
    ["Para sever", "Mario'nun zıttı gibi tasarlanır", "Gürültülü karakter"]
  ),

  createGameCharacter(
    1130,
    "Yoshi",
    ["yoshi"],
    ["Platform oyunu", "Nintendo", "Sevimli yardımcı"],
    ["Yeşil dinozor", "Kırmızı semer", "Uzun dil"],
    ["Yoshi Adası", "Mantar Krallığı"],
    ["Yumurta fırlatır", "Uzun diliyle yer", "Mario'yu taşır"]
  ),

  createGameCharacter(
    1131,
    "Pikachu",
    ["pikachu"],
    ["JRPG", "Canavar toplama", "Nintendo"],
    ["Sarı fare benzeri yaratık", "Kırmızı yanaklar", "Yıldırım kuyruğu"],
    ["Pokémon dünyası", "Elektrik tipi", "Antrenörler"],
    ["Elektrik saldırıları", "Maskot karakter", "Pika sesiyle bilinir"]
  ),

  createGameCharacter(
    1132,
    "Mewtwo",
    ["mewtwo"],
    ["JRPG", "Canavar toplama", "Efsanevi yaratık"],
    ["Mor/beyaz beden", "Uzun kuyruk", "İnsan benzeri duruş"],
    ["Pokémon laboratuvarları", "Efsanevi Pokémonlar"],
    ["Psişik güçler", "Klonlanmış varlık", "Güçlü efsanevi Pokémon"]
  ),

  createGameCharacter(
    1133,
    "Jigglypuff",
    ["jigglypuff"],
    ["JRPG", "Canavar toplama", "Nintendo"],
    ["Pembe yuvarlak beden", "Büyük gözler", "Mikrofon bazen"],
    ["Pokémon dünyası", "Sahne ve şarkı teması"],
    ["Şarkısıyla uyutur", "Sevimli görünür", "Popüler Pokémon"]
  ),

  createGameCharacter(
    1134,
    "Ryu Hayabusa",
    ["ryu hayabusa", "hayabusa"],
    ["Aksiyon", "Hack and slash", "Ninja oyunu"],
    ["Siyah ninja kıyafeti", "Ejderha kılıcı", "Maske"],
    ["Ninja klanı", "Şeytani tehditler", "Modern ve fantastik dünya"],
    ["Hızlı ninja", "Dragon Sword kullanır", "Zor oyunlarla anılır"]
  ),

  createGameCharacter(
    1135,
    "Captain Falcon",
    ["captain falcon", "falcon"],
    ["Yarış oyunu", "Dövüş oyunu bağlantısı", "Nintendo"],
    ["Kask", "Renkli pilot kıyafeti", "Kaslı yapı"],
    ["F-Zero evreni", "Yüksek hızlı yarışlar"],
    ["Falcon Punch ile bilinir", "Yarış pilotu", "Enerjik figür"]
  ),

  createGameCharacter(
    1136,
    "Ness",
    ["ness"],
    ["JRPG", "Kült Nintendo oyunu", "Psikokinetik güçler"],
    ["Kırmızı şapka", "Çizgili tişört", "Beyzbol sopası"],
    ["Eagleland", "Garip kasabalar", "Uzaylı tehdidi"],
    ["PSI güçleri", "Beyzbol sopası kullanır", "Çocuk kahraman"]
  ),

  createGameCharacter(
    1137,
    "Shovel Knight",
    ["shovel knight"],
    ["Platform oyunu", "Indie klasik", "Retro estetik"],
    ["Mavi zırh", "Boynuzlu miğfer", "Kürek"],
    ["Order of No Quarter", "Fantastik krallık", "Retro bölümler"],
    ["Kürekle savaşır", "Zıplayarak saldırır", "Bağımsız oyun ikonu"]
  ),

  createGameCharacter(
    1138,
    "Banjo-Kazooie",
    ["banjo", "kazooie", "banjo kazooie"],
    ["Platform oyunu", "3D koleksiyon macerası", "Rare klasiği"],
    ["Ayı ve kuş ikilisi", "Sarı şort", "Sırt çantası"],
    ["Spiral Mountain", "Gruntilda'nın ini", "Renkli dünyalar"],
    ["İkili karakter", "Kuş sırt çantasından çıkar", "Müzikal notalar toplar"]
  ),

  createGameCharacter(
    1139,
    "Conker",
    ["conker", "conker the squirrel"],
    ["Platform oyunu", "Kara mizah", "Yetişkin tonlu parodi"],
    ["Kırmızı sincap", "Mavi kapüşonlu", "Bira teması"],
    ["Tuhaf krallık", "Parodi dünyaları"],
    ["Alaycı mizah", "Sincap kahraman", "Beklenmedik sert ton"]
  ),

  createGameCharacter(
    1140,
    "Ratchet",
    ["ratchet"],
    ["Aksiyon-platform", "Bilim kurgu", "PlayStation serisi"],
    ["Lombax görünümü", "Koca kulaklar", "Mekanik anahtar"],
    ["Gezegenler arası yolculuk", "Galaktik tehditler"],
    ["Silah çeşitliliği", "Clank ile gezer", "Mekanik ustası"]
  ),

  createGameCharacter(
    1141,
    "Clank",
    ["clank"],
    ["Aksiyon-platform", "Bilim kurgu", "Yardımcı karakter"],
    ["Küçük gri robot", "Yeşil gözler", "Sırt çantası gibi taşınır"],
    ["Galaktik macera", "Robot fabrikaları", "Uzay yolculuğu"],
    ["Zeki robot", "Ratchet'ın dostu", "Bulmaca çözer"]
  ),

  createGameCharacter(
    1142,
    "Sackboy",
    ["sackboy"],
    ["Platform oyunu", "Yaratıcılık temalı", "PlayStation maskotu"],
    ["Örgü bebek görünümü", "Fermuar", "Sevimli yüz"],
    ["Craftworld", "Kullanıcı yapımı bölümler"],
    ["Kostüm giyer", "Yaratıcılıkla bağlantılı", "Sevimli platform kahramanı"]
  ),

  createGameCharacter(
    1143,
    "Commander Shepard",
    ["shepard", "commander shepard"],
    ["Bilim kurgu RPG", "Takım tabanlı hikaye", "Uzay operası"],
    ["N7 zırhı", "Komutan görünümü", "Askeri tarz"],
    ["Normandy", "Citadel", "Reaper tehdidi"],
    ["Komutan", "Seçimlerle şekillenir", "Takım lideri"]
  ),

  createGameCharacter(
    1144,
    "Liara T'Soni",
    ["liara", "liara tsoni"],
    ["Bilim kurgu RPG", "Uzay operası", "Yoldaş karakter"],
    ["Mavi ten", "Asari görünümü", "Bilim insanı kıyafeti"],
    ["Asari kültürü", "Prothean araştırmaları", "Galaksi"],
    ["Arkeolog", "Biyotik güçler", "Shadow Broker ile bağlantılı"]
  ),

  createGameCharacter(
    1145,
    "Mordin Solus",
    ["mordin", "mordin solus"],
    ["Bilim kurgu RPG", "Uzay operası", "Yoldaş karakter"],
    ["Salarian görünümü", "Laboratuvar kıyafeti", "İnce yapı"],
    ["Genophage", "Bilimsel projeler", "Normandy"],
    ["Hızlı konuşur", "Bilim insanı", "Moral seçimlerle anılır"]
  ),

  createGameCharacter(
    1146,
    "Deckard Cain",
    ["deckard cain", "cain"],
    ["Aksiyon RPG", "Karanlık fantezi", "Klasik seri"],
    ["Yaşlı bilgin", "Asa", "Cübbe"],
    ["Sanctuary", "Tristram", "Horadrim"],
    ["Stay awhile and listen sözü", "Bilge rehber", "Lore anlatıcısı"]
  ),

  createGameCharacter(
    1147,
    "Diablo",
    ["diablo"],
    ["Aksiyon RPG", "Karanlık fantezi", "İkonik boss"],
    ["Kırmızı iblis", "Boynuzlar", "Dev pençeler"],
    ["Sanctuary", "Cehennem", "Prime Evil"],
    ["Terror Lord", "Final boss olarak bilinir", "Korku teması"]
  ),

  createGameCharacter(
    1148,
    "Kerrigan",
    ["kerrigan", "sarah kerrigan", "queen of blades"],
    ["Strateji oyunu", "Bilim kurgu", "Kült karakter"],
    ["Zerg dönüşümü", "Kanat benzeri uzantılar", "Mor/organik zırh"],
    ["Koprulu sektörü", "Zerg sürüsü", "Terranlar"],
    ["Queen of Blades", "Psionik güçler", "Trajik dönüşüm"]
  ),

  createGameCharacter(
    1149,
    "Jim Raynor",
    ["jim raynor", "raynor"],
    ["Strateji oyunu", "Bilim kurgu", "Terran kahramanı"],
    ["Uzay kovboyu tarzı", "Zırh", "Sakal"],
    ["Koprulu sektörü", "Terran isyanı", "Zerg tehdidi"],
    ["Eski mareşal", "Kerrigan ile bağlantılı", "İsyancı lider"]
  ),

  createGameCharacter(
    1150,
    "Arthas Menethil",
    ["arthas", "arthas menethil", "lich king"],
    ["Strateji/MMORPG", "Fantastik evren", "Trajik kötüye dönüş"],
    ["Sarı saç", "Runeblade", "Buzlu zırh"],
    ["Lordaeron", "Northrend", "Azeroth"],
    ["Lich King olur", "Frostmourne taşır", "Trajik prens"]
  ),

  createGameCharacter(
    1151,
    "Thrall",
    ["thrall", "go'el", "goel"],
    ["Strateji/MMORPG", "Fantastik evren", "Ork lider"],
    ["Yeşil ten", "Zırh", "Dev çekiç"],
    ["Azeroth", "Horde", "Durotar"],
    ["Horde lideri", "Şaman güçleri", "Orklerin özgürlüğüyle bağlantılı"]
  ),

  createGameCharacter(
    1152,
    "Jaina Proudmoore",
    ["jaina", "jaina proudmoore"],
    ["Strateji/MMORPG", "Fantastik evren", "Büyücü lider"],
    ["Sarışın saç", "Mavi/beyaz cübbe", "Asa"],
    ["Azeroth", "Kirin Tor", "Kul Tiras"],
    ["Güçlü büyücü", "Buz büyüleri", "Liderlik"]
  ),

  createGameCharacter(
    1153,
    "Tracer",
    ["tracer", "lena oxton"],
    ["Takım tabanlı FPS", "Hero shooter", "Renkli evren"],
    ["Turuncu tayt", "Pilot gözlüğü", "Chronal accelerator"],
    ["Overwatch evreni", "Londra", "Zaman teknolojisi"],
    ["Blink yeteneği", "Zamanı geri sarar", "Cheers love repliğiyle bilinir"]
  ),

  createGameCharacter(
    1154,
    "D.Va",
    ["dva", "d.va", "hana song"],
    ["Takım tabanlı FPS", "Hero shooter", "Mech pilotu"],
    ["Pembe mech", "Kulaklıklı genç pilot", "Sponsor logoları"],
    ["Kore", "MEKA ekibi", "Omnic tehdidi"],
    ["Profesyonel oyuncu", "Mech kullanır", "Self-destruct yeteneği"]
  ),

  createGameCharacter(
    1155,
    "Mercy",
    ["mercy", "angela ziegler"],
    ["Takım tabanlı FPS", "Hero shooter", "Destek karakteri"],
    ["Beyaz melek zırhı", "Kanatlar", "Asa"],
    ["Overwatch evreni", "İsviçreli doktor", "Savaş alanı"],
    ["İyileştirir", "Diriltme yeteneğiyle bilinir", "Doktor"]
  ),

  createGameCharacter(
    1156,
    "Genji",
    ["genji", "genji shimada"],
    ["Takım tabanlı FPS", "Hero shooter", "Siber ninja"],
    ["Yeşil ışıklı zırh", "Katana", "Sibernetik vücut"],
    ["Shimada klanı", "Overwatch", "Ninja mirası"],
    ["Shuriken atar", "Dragonblade kullanır", "Siber ninja"]
  ),

  createGameCharacter(
    1157,
    "Widowmaker",
    ["widowmaker", "amelie lacroix"],
    ["Takım tabanlı FPS", "Hero shooter", "Keskin nişancı"],
    ["Mor ten", "Vizör", "Keskin nişancı tüfeği"],
    ["Talon", "Fransa", "Overwatch evreni"],
    ["Soğukkanlı keskin nişancı", "Kanca kullanır", "Duygusuzlaştırılmış suikastçı"]
  ),

  createGameCharacter(
    1158,
    "Sans",
    ["sans"],
    ["RPG", "Indie kült oyun", "Metin ve seçim teması"],
    ["Kısa iskelet", "Mavi kapüşonlu", "Terlik"],
    ["Yeraltı dünyası", "Canavarlar", "Mizahi ortam"],
    ["Şakalar yapar", "Zor boss savaşıyla bilinir", "Gaster Blaster kullanır"]
  ),

  createGameCharacter(
    1159,
    "Papyrus",
    ["papyrus"],
    ["RPG", "Indie kült oyun", "Komik karakter"],
    ["Uzun iskelet", "Kırmızı atkı", "Zırh benzeri kıyafet"],
    ["Yeraltı dünyası", "Snowdin", "Canavar toplumu"],
    ["Spagetti yapmayı sever", "Neşeli ve saf", "Sans'ın kardeşi"]
  ),

  createGameCharacter(
    1160,
    "Freddy Fazbear",
    ["freddy", "freddy fazbear"],
    ["Korku oyunu", "Animatronik temalı", "Jump scare"],
    ["Ayı animatronik", "Silindir şapka", "Mikrofon"],
    ["Pizzacı restoranı", "Gece vardiyası", "Güvenlik kameraları"],
    ["Animatronik maskot", "Gece hareket eder", "Korku ikonu"]
  ),


  createGameCharacter(
    1161,
    "Princess Peach",
    ["peach", "princess peach", "prenses peach"],
    ["Platform oyunu", "Nintendo", "Aile dostu seri"],
    ["Pembe elbise", "Taç", "Sarışın saç", "Kraliyet görünümü"],
    ["Mantar Krallığı", "Mario evreni", "Bowser'ın şatoları"],
    ["Kraliyet figürü", "Sık sık kaçırılmasıyla bilinir", "Tenis ve kart yarışlarında da görünür"]
  ),

  createGameCharacter(
    1162,
    "Ganondorf",
    ["ganondorf", "ganon"],
    ["Macera oyunu", "Nintendo", "Fantastik aksiyon"],
    ["Koyu zırh", "Kızıl saç", "Devasa ve tehditkar duruş"],
    ["Hyrule", "Triforce", "Karanlık krallıklar"],
    ["Güç üçgeniyle bağlantılıdır", "Link'in ezeli düşmanıdır", "Karanlık büyü kullanır"]
  ),

  createGameCharacter(
    1163,
    "Dr. Eggman",
    ["dr eggman", "eggman", "doctor eggman", "dr robotnik", "robotnik"],
    ["Platform oyunu", "Sega", "Hız temalı seri"],
    ["Kocaman bıyık", "Kırmızı siyah kıyafet", "Yuvarlak gözlük"],
    ["Sonic evreni", "Robot orduları", "Teknolojik üsler"],
    ["Sonic'in ezeli rakibidir", "Dev robotlar tasarlar", "Kaos zümrütlerinin peşindedir"]
  ),

  createGameCharacter(
    1164,
    "Shadow the Hedgehog",
    ["shadow", "shadow the hedgehog"],
    ["Platform oyunu", "Sega", "Anti-kahraman hikayesi"],
    ["Siyah kırmızı kirpi", "Paten benzeri ayakkabılar", "Kırmızı gözler"],
    ["Sonic evreni", "GUN organizasyonu", "Uzay kolonisi ARK"],
    ["Ultimate Lifeform olarak bilinir", "Chaos Control kullanır", "Sonic'e benzer ama daha karanlık tondadır"]
  ),

  createGameCharacter(
    1165,
    "Amy Rose",
    ["amy", "amy rose"],
    ["Platform oyunu", "Sega", "Renkli macera"],
    ["Pembe kirpi", "Kırmızı elbise", "Büyük çekiç"],
    ["Sonic evreni", "Green Hill çevresi", "Arkadaş ekibi"],
    ["Piko Piko çekiç kullanır", "Enerjik ve neşelidir", "Sonic'e hayrandır"]
  ),

  createGameCharacter(
    1166,
    "Steve",
    ["steve", "minecraft steve"],
    ["Sandbox oyunu", "Hayatta kalma", "Yaratıcılık temalı"],
    ["Kare bloklu vücut", "Mavi tişört", "Mor pantolon"],
    ["Bloklardan oluşan dünya", "Madenler", "Nether ve End boyutları"],
    ["Kazma kullanır", "Blok kırıp inşa eder", "Oyuncunun klasik avatarıdır"]
  ),

  createGameCharacter(
    1167,
    "Alex",
    ["alex", "minecraft alex"],
    ["Sandbox oyunu", "Hayatta kalma", "Yaratıcılık temalı"],
    ["Turuncu saç", "Yeşil tişört", "Bloklu karakter modeli"],
    ["Bloklardan oluşan dünya", "Madenler", "Köyler ve biyomlar"],
    ["Oyuncu avatarıdır", "İnşa ve keşif yapar", "Steve ile birlikte temel karakterlerden biridir"]
  ),

  createGameCharacter(
    1168,
    "Creeper",
    ["creeper", "kriper"],
    ["Sandbox oyunu", "Hayatta kalma", "İkonik düşman"],
    ["Yeşil pikselli gövde", "Dört ayak", "Sessizce yaklaşan yüz ifadesi"],
    ["Bloklardan oluşan dünya", "Gece vakti", "Maden çevreleri"],
    ["Sessizce yaklaşır", "Oyuncuları şaşırtmasıyla bilinir", "Oyunun en tanınan yaratıklarından biridir"]
  ),

  createGameCharacter(
    1169,
    "Ender Dragon",
    ["ender dragon", "ender ejderhası", "end ejderhası"],
    ["Sandbox oyunu", "Hayatta kalma", "Final boss"],
    ["Siyah dev ejderha", "Mor gözler", "Kanatlar"],
    ["The End boyutu", "Obsidyen kuleler", "Endermanler"],
    ["Oyunun büyük final düşmanıdır", "End kristalleriyle bağlantılıdır", "Uçarak savaşır"]
  ),

  createGameCharacter(
    1170,
    "Toad",
    ["toad"],
    ["Platform oyunu", "Nintendo", "Aile dostu seri"],
    ["Mantar şapkalı küçük karakter", "Mavi yelek", "Sevimli görünüm"],
    ["Mantar Krallığı", "Prenses Peach'in sarayı", "Mario evreni"],
    ["Yardımcı figürdür", "Mantar halkından biridir", "Parti ve yarış oyunlarında sık görünür"]
  ),

  createGameCharacter(
    1171,
    "Waluigi",
    ["waluigi"],
    ["Parti oyunu", "Spor oyunları", "Nintendo yan karakteri"],
    ["Mor şapka", "Uzun ince vücut", "Kıvrık bıyık"],
    ["Mario evreni", "Kart yarışları", "Tenis kortları"],
    ["Luigi'nin zıt karakteri gibidir", "Abartılı hareketleriyle bilinir", "Wario ile ikili oluşturur"]
  ),

  createGameCharacter(
    1172,
    "Princess Daisy",
    ["daisy", "princess daisy", "prenses daisy"],
    ["Parti oyunu", "Spor oyunları", "Nintendo"],
    ["Turuncu sarı elbise", "Taç", "Kısa kahverengi saç"],
    ["Sarasaland", "Mario evreni", "Spor turnuvaları"],
    ["Enerjik prensestir", "Peach'in yakın arkadaşı olarak görülür", "Mario Kart ve spor oyunlarında sık yer alır"]
  ),

  createGameCharacter(
    1173,
    "Tom Nook",
    ["tom nook", "nook"],
    ["Yaşam simülasyonu", "Nintendo", "Ada ve kasaba yönetimi"],
    ["Rakuna benzer görünüm", "Gömlek veya iş kıyafeti", "Sakin yüz ifadesi"],
    ["Animal Crossing kasabaları", "Ada yerleşimi", "Nook Inc."],
    ["Ev kredileriyle bilinir", "Dükkan ve ada işlerini yönetir", "Oyuncuya başlangıçta rehberlik eder"]
  ),

  createGameCharacter(
    1174,
    "Isabelle",
    ["isabelle", "shizue"],
    ["Yaşam simülasyonu", "Nintendo", "Sevimli kasaba yönetimi"],
    ["Sarı köpek karakter", "Topuz saç", "Ofis kıyafeti"],
    ["Animal Crossing kasabası", "Belediye binası", "Ada yönetimi"],
    ["Oyuncuya yardımcı olur", "Güler yüzlü asistan figürüdür", "Duyurularla bilinir"]
  ),

  createGameCharacter(
    1175,
    "Villager",
    ["villager", "animal crossing villager"],
    ["Yaşam simülasyonu", "Nintendo", "Kasaba kurma"],
    ["Basit sevimli avatar", "Değişebilir kıyafetler", "Yuvarlak yüz"],
    ["Animal Crossing kasabası", "Ada yaşamı", "Komşular"],
    ["Balık tutar", "Böcek toplar", "Eşya ve ev düzenler"]
  ),

  createGameCharacter(
    1176,
    "Inkling",
    ["inkling", "splatoon inkling"],
    ["Takım tabanlı nişancı", "Nintendo", "Renkli rekabet"],
    ["Mürekkep saçları", "Spor kıyafetler", "Su tabancası benzeri silahlar"],
    ["Inkopolis", "Mürekkep savaşları", "Renkli arenalar"],
    ["Mürekkebe dönüşebilir", "Alan boyayarak puan toplar", "Kalamar formuna geçer"]
  ),

  createGameCharacter(
    1177,
    "Jin Sakai",
    ["jin", "jin sakai", "ghost of tsushima"],
    ["Aksiyon-macera", "Açık dünya", "Samuray temalı"],
    ["Samuray zırhı", "Katana", "Maske ve pelerin"],
    ["Tsushima Adası", "Moğol istilası", "Japonya"],
    ["Samuray kuralları ile hayalet taktikleri arasında kalır", "Rüzgarı takip eder", "Onur ve hayatta kalma temalarıyla bilinir"]
  ),

  createGameCharacter(
    1178,
    "Sly Cooper",
    ["sly", "sly cooper"],
    ["Platform oyunu", "Gizlilik", "PlayStation klasiği"],
    ["Rakun görünümü", "Mavi şapka", "Kanca uçlu baston"],
    ["Soyguncu aile mirası", "Renkli şehirler", "Cooper çetesi"],
    ["Kibar hırsızdır", "Çatılarda sessizce gezer", "Bastonuyla tırmanır"]
  ),

  createGameCharacter(
    1179,
    "Jak",
    ["jak"],
    ["Aksiyon-platform", "PlayStation klasiği", "Bilim kurgu ve fantastik karışımı"],
    ["Sivri kulaklar", "Yeşil sarı kıyafetler", "Genç maceracı görünüm"],
    ["Eco enerjisi", "Haven City", "Precursor mirası"],
    ["Daxter ile gezer", "Eco güçleriyle bağlantılıdır", "Sessiz kahramandan asi karaktere dönüşür"]
  ),

  createGameCharacter(
    1180,
    "Daxter",
    ["daxter"],
    ["Aksiyon-platform", "PlayStation klasiği", "Komedi yancısı"],
    ["Turuncu küçük yaratık", "Uzun kulaklar", "Gelincik benzeri görünüm"],
    ["Precursor dünyası", "Haven City", "Jak'in maceraları"],
    ["Konuşkan yancıdır", "Jak'in en yakın dostudur", "Küçük boyuna rağmen cesaret gösterir"]
  ),

  createGameCharacter(
    1181,
    "Cole MacGrath",
    ["cole", "cole macgrath"],
    ["Açık dünya aksiyon", "Süper güç temalı", "PlayStation serisi"],
    ["Tıraşlı kafa", "Kurier çantası", "Elektrik efektleri"],
    ["Empire City", "New Marais", "Süper güç salgını"],
    ["Elektrik güçleri kullanır", "Şehirde çatılardan gezer", "İyi veya kötü seçimlerle şekillenir"]
  ),

  createGameCharacter(
    1182,
    "Sweet Tooth",
    ["sweet tooth", "needles kane"],
    ["Araç savaşı", "PlayStation klasiği", "Karanlık turnuva"],
    ["Palyaço maskesi", "Alevli kafa", "Dondurma kamyonu"],
    ["Twisted Metal turnuvası", "Kaotik arenalar", "Araç savaşları"],
    ["Dondurma kamyonuyla bilinir", "Korkutucu palyaço teması vardır", "Serinin maskot kötü figürüdür"]
  ),

  createGameCharacter(
    1183,
    "Amaterasu",
    ["amaterasu", "okami"],
    ["Aksiyon-macera", "Mitolojik sanat tarzı", "Kült klasik"],
    ["Beyaz kurt", "Kırmızı desenler", "Sırtında ilahi ayna"],
    ["Japon mitolojisi", "Fırça darbeleriyle değişen dünya", "Doğa ruhları"],
    ["Tanrıça formudur", "Göksel fırça kullanır", "Dünyaya renk ve yaşam getirir"]
  ),

  createGameCharacter(
    1184,
    "Phoenix Wright",
    ["phoenix", "phoenix wright", "ace attorney"],
    ["Görsel roman", "Mahkeme simülasyonu", "Dedektiflik"],
    ["Mavi takım elbise", "Dikenli saç", "Parmakla itiraz pozu"],
    ["Mahkeme salonu", "Dedektiflik sahneleri", "Tanık sorguları"],
    ["Avukattır", "İtirazlarıyla bilinir", "Çelişkileri kanıtlarla yakalar"]
  ),

  createGameCharacter(
    1185,
    "Miles Edgeworth",
    ["edgeworth", "miles edgeworth"],
    ["Görsel roman", "Mahkeme simülasyonu", "Rakip savcı"],
    ["Bordo takım elbise", "Beyaz fular", "Ciddi duruş"],
    ["Mahkeme salonu", "Savcılık ofisi", "Dedektiflik olayları"],
    ["Savcıdır", "Phoenix Wright'ın rakibidir", "Mantıklı ve soğukkanlı tavrıyla bilinir"]
  ),

  createGameCharacter(
    1186,
    "Professor Layton",
    ["professor layton", "layton", "hershel layton"],
    ["Bulmaca oyunu", "Macera", "Dedektiflik atmosferi"],
    ["Silindir şapka", "Kahverengi palto", "Beyefendi görünüm"],
    ["Gizemli kasabalar", "Bulmaca dolu olaylar", "Avrupa esintili mekanlar"],
    ["Bulmaca çözme ustasıdır", "Centilmen tavrıyla bilinir", "Luke ile yolculuk eder"]
  ),

  createGameCharacter(
    1187,
    "Monokuma",
    ["monokuma"],
    ["Görsel roman", "Psikolojik gizem", "Sınıf yargılamaları"],
    ["Yarı beyaz yarı siyah ayı", "Kırmızı göz", "Tuhaf gülümseme"],
    ["Hope's Peak Academy", "Sınıf davaları", "Gizemli oyun düzeni"],
    ["Maskot ve yönetici figürdür", "Kural koyar", "Alaycı tavrıyla bilinir"]
  ),

  createGameCharacter(
    1188,
    "Morgana",
    ["morgana", "persona morgana"],
    ["JRPG", "Sosyal simülasyon", "Şehir ve bilinçaltı dünyası"],
    ["Siyah beyaz kedi görünümü", "Sarı fular", "Büyük mavi gözler"],
    ["Tokyo", "Metaverse", "Phantom Thieves"],
    ["Konuşan kedi gibidir", "Takımın rehberidir", "Otobüse dönüşmesiyle bilinir"]
  ),

  createGameCharacter(
    1189,
    "Ahri",
    ["ahri"],
    ["MOBA", "Takım tabanlı rekabet", "Fantastik şampiyon evreni"],
    ["Tilki kulakları", "Dokuz kuyruk", "Büyülü küre"],
    ["Runeterra", "Ionia", "Sihirli ormanlar"],
    ["Dokuz kuyruklu büyücüdür", "Hızlı hareket eder", "Cazibe ve ruh enerjisiyle bilinir"]
  ),

  createGameCharacter(
    1190,
    "Yasuo",
    ["yasuo"],
    ["MOBA", "Takım tabanlı rekabet", "Samuray esintili şampiyon"],
    ["Rüzgarlı pelerin", "Katana", "Dağınık siyah saç"],
    ["Runeterra", "Ionia", "Sürgün yolculuğu"],
    ["Rüzgar gücü kullanır", "Sürgün edilmiş kılıç ustasıdır", "Hızlı ve riskli oyun tarzıyla bilinir"]
  ),

  createGameCharacter(
    1191,
    "Jinx",
    ["jinx"],
    ["MOBA", "Takım tabanlı rekabet", "Kaotik nişancı"],
    ["Mavi uzun saç", "Renkli punk kıyafet", "Büyük silahlar"],
    ["Piltover", "Zaun", "Runeterra"],
    ["Kaotik enerjisiyle bilinir", "Roket ve makineli silah kullanır", "Kardeşiyle karmaşık ilişkisi vardır"]
  ),

  createGameCharacter(
    1192,
    "Lux",
    ["lux", "luxanna crownguard"],
    ["MOBA", "Takım tabanlı rekabet", "Işık büyücüsü"],
    ["Sarışın saç", "Parlak zırh", "Asa"],
    ["Demacia", "Runeterra", "Büyünün yasaklandığı krallık"],
    ["Işık büyüsü kullanır", "Demacia soylusudur", "Pozitif ve idealist karakterdir"]
  ),

  createGameCharacter(
    1193,
    "Teemo",
    ["teemo"],
    ["MOBA", "Takım tabanlı rekabet", "Maskot şampiyon"],
    ["Küçük yordle", "Şapka ve gözlük", "Üfleme borusu"],
    ["Bandle City", "Runeterra", "Orman yolları"],
    ["Mantar tuzaklarıyla bilinir", "Sevimli ama sinir bozucu görülebilir", "Keşifçi karakterdir"]
  ),

  createGameCharacter(
    1194,
    "Ezreal",
    ["ezreal"],
    ["MOBA", "Takım tabanlı rekabet", "Maceracı şampiyon"],
    ["Sarı saç", "Büyülü eldiven", "Kaşif kıyafeti"],
    ["Runeterra", "Shurima harabeleri", "Piltover bağlantısı"],
    ["Kaşif ve hazine avcısıdır", "Büyülü atışlar yapar", "Kendine güveni yüksektir"]
  ),

  createGameCharacter(
    1195,
    "Geralt'ın Roach'ı",
    ["roach", "roach atı", "geraltın atı"],
    ["Aksiyon RPG", "Açık dünya", "Fantastik evren"],
    ["Kahverengi at", "Eyer ve çantalar", "Yoldaş hayvan görünümü"],
    ["Kıta", "Canavar avı yolları", "Köyler ve ormanlar"],
    ["Geralt'ın atıdır", "Bazen tuhaf yerlere çıkmasıyla mizah konusu olur", "Uzun yolculuklarda kullanılır"]
  ),

  createGameCharacter(
    1196,
    "Paarthurnax",
    ["paarthurnax"],
    ["Aksiyon RPG", "Açık dünya", "Ejderha temalı fantastik oyun"],
    ["Yaşlı ejderha", "Büyük kanatlar", "Dağ zirvesinde duran heybetli görünüm"],
    ["Skyrim", "High Hrothgar", "Ejderha dili"],
    ["Bilge ejderhadır", "Ana karaktere rehberlik eder", "Geçmişiyle yüzleşen bir figürdür"]
  ),

  createGameCharacter(
    1197,
    "Dragonborn",
    ["dragonborn", "dovahkiin", "dovakin"],
    ["Aksiyon RPG", "Açık dünya", "Fantastik keşif"],
    ["Değişebilir karakter görünümü", "Nord zırhı", "Miğfer ve kılıç"],
    ["Skyrim", "Ejderhalar", "Tamriel"],
    ["Ejderha ruhu emer", "Thu'um yani bağırış gücü kullanır", "Oyuncunun ana karakteridir"]
  ),

  createGameCharacter(
    1198,
    "Vault Dweller",
    ["vault dweller", "sığınak sakini", "vault survivor"],
    ["RPG", "Kıyamet sonrası", "Retro-fütüristik dünya"],
    ["Mavi sarı Vault tulumu", "Pip-Boy", "Sığınak ekipmanı"],
    ["Nükleer çorak arazi", "Vault sistemleri", "Retro Amerika"],
    ["Sığınaktan dış dünyaya çıkar", "Pip-Boy kullanır", "Seçimlerle hikayesi şekillenir"]
  ),

  createGameCharacter(
    1199,
    "Arthur Morgan'ın Atı",
    ["arthurun atı", "arthur morganın atı", "horse"],
    ["Açık dünya", "Vahşi Batı", "Yolculuk ve kamp hayatı"],
    ["Eyerli at", "Tozlu yol görünümü", "Kovboy ekipmanları"],
    ["Amerikan batısı", "Van der Linde kampı", "Uzun yolculuklar"],
    ["Oyuncuyla bağ kurar", "Taşıma ve kaçışlarda önemlidir", "Vahşi Batı atmosferinin parçasıdır"]
  ),

  createGameCharacter(
    1200,
    "Cortana",
    ["cortana"],
    ["FPS", "Xbox klasiği", "Bilim kurgu hikayesi"],
    ["Mavi hologram görünümü", "Kısa saç", "Dijital form"],
    ["Halo evreni", "UNSC", "Yapay zeka sistemleri"],
    ["Master Chief'in yapay zeka yoldaşıdır", "Stratejik rehberlik yapar", "Serinin hikayesinde merkezi rol oynar"]
  ),

  createGameCharacter(
    1201,
    "Arthur Morgan",
    ["arthur", "arthur morgan"],
    ["Açık dünya", "Vahşi Batı", "Hikaye odaklı aksiyon-macera"],
    ["Kovboy şapkası", "Sakallı yüz", "Tozlu uzun ceket", "Belinde tabanca"],
    ["Van der Linde çetesi", "Amerikan batısı", "Kamp hayatı"],
    ["Sadık ama sorgulayan bir kanun kaçağı", "Günlük tutar", "Red Dead Redemption 2'nin ana karakteridir"]
  ),

  createGameCharacter(
    1202,
    "Sadie Adler",
    ["sadie", "sadie adler"],
    ["Açık dünya", "Vahşi Batı", "Aksiyon-macera"],
    ["Kovboy kıyafetleri", "Şapka", "Silah kuşanmış sert duruş"],
    ["Amerikan batısı", "Van der Linde çetesi", "Ödül avcılığı"],
    ["Güçlü ve intikamcı karakter", "Çete içinde giderek öne çıkar", "Kendi ayakları üzerinde duran bir savaşçıdır"]
  ),

  createGameCharacter(
    1203,
    "Max Payne",
    ["max payne", "max"],
    ["Noir aksiyon", "Üçüncü şahıs shooter", "Karanlık dedektif hikayesi"],
    ["Deri ceket", "Yorgun yüz", "Tabancalar", "Noir atmosfer"],
    ["New York", "Suç dünyası", "Yavaş çekim çatışmalar"],
    ["Bullet time mekaniğiyle bilinir", "İç monologları çok yoğundur", "Trajik geçmişi vardır"]
  ),

  createGameCharacter(
    1204,
    "Mona Sax",
    ["mona sax", "mona"],
    ["Noir aksiyon", "Üçüncü şahıs shooter", "Dedektif hikayesi"],
    ["Siyah kıyafet", "Keskin bakış", "Silahlı suikastçı görünümü"],
    ["New York", "Yeraltı suç dünyası"],
    ["Gizemli ve tehlikeli bir karakterdir", "Max Payne ile bağlantılıdır", "Keskin nişancılık ve soğukkanlılıkla bilinir"]
  ),

  createGameCharacter(
    1205,
    "Chell",
    ["chell"],
    ["Bulmaca", "Birinci şahıs", "Bilim kurgu mizahı"],
    ["Turuncu test kıyafeti", "Uzun botlar", "Portal silahı"],
    ["Aperture Science", "Test odaları", "Yapay zeka laboratuvarı"],
    ["Sessiz ana karakterdir", "Portal açarak bulmacaları çözer", "GLaDOS'a karşı hayatta kalmaya çalışır"]
  ),

  createGameCharacter(
    1206,
    "GLaDOS",
    ["glados", "gla dos"],
    ["Bulmaca", "Bilim kurgu", "Kara mizah"],
    ["Devasa robotik sistem", "Sarı tek göz/lens", "Tavandan sarkan yapay zeka"],
    ["Aperture Science", "Test odaları", "Laboratuvar"],
    ["Alaycı yapay zekadır", "Test yapmayı takıntı haline getirir", "Kek vaadiyle hatırlanır"]
  ),

  createGameCharacter(
    1207,
    "Wheatley",
    ["wheatley"],
    ["Bulmaca", "Bilim kurgu", "Komedi"],
    ["Küçük mavi gözlü robot çekirdeği", "Yuvarlak metal gövde"],
    ["Aperture Science", "Test sistemi"],
    ["Çok konuşkan ve panikleyen bir yapay zekadır", "Yanlış kararlarıyla komik durumlar yaratır", "Portal 2'nin önemli karakterlerindendir"]
  ),

  createGameCharacter(
    1208,
    "Heavy",
    ["heavy", "heavy weapons guy"],
    ["Takım tabanlı FPS", "Komedi aksiyon", "Sınıf tabanlı shooter"],
    ["Dev cüsse", "Mühimmat kemeri", "Kocaman minigun"],
    ["Team Fortress evreni", "RED ve BLU takımları"],
    ["Minigun'una Sasha der", "Yavaş ama çok güçlüdür", "Kalın aksanlı konuşmasıyla bilinir"]
  ),

  createGameCharacter(
    1209,
    "Scout",
    ["scout"],
    ["Takım tabanlı FPS", "Komedi aksiyon", "Sınıf tabanlı shooter"],
    ["Beyzbol şapkası", "Kulaklıklı genç görünüm", "Sopa taşır"],
    ["Team Fortress evreni", "RED ve BLU takımları"],
    ["Çok hızlı koşar", "Geveze ve kendine güvenlidir", "Yakın mesafe agresif oyun tarzıyla bilinir"]
  ),

  createGameCharacter(
    1210,
    "Spy",
    ["spy", "the spy"],
    ["Takım tabanlı FPS", "Casusluk", "Komedi aksiyon"],
    ["Takım elbise", "Yüz maskesi", "Bıçak ve sigara"],
    ["Team Fortress evreni", "Gizli operasyonlar"],
    ["Kılık değiştirebilir", "Görünmez olabilir", "Sırtından bıçaklamasıyla bilinir"]
  ),

  createGameCharacter(
    1211,
    "Soap MacTavish",
    ["soap", "soap mactavish", "john mactavish"],
    ["Askeri FPS", "Modern savaş", "Taktiksel aksiyon"],
    ["Askeri teçhizat", "Mohawk saç", "Telsiz ve silah"],
    ["Task Force 141", "Küresel operasyonlar"],
    ["Captain Price'ın yakın ekip arkadaşıdır", "Cesaretiyle bilinir", "Modern Warfare serisinin sevilen karakteridir"]
  ),

  createGameCharacter(
    1212,
    "Gaz",
    ["gaz", "kyle garrick"],
    ["Askeri FPS", "Modern savaş", "Taktiksel aksiyon"],
    ["Askeri ekipman", "Kulaklık", "Taktik yelek"],
    ["Task Force 141", "Terörle mücadele operasyonları"],
    ["Disiplinli ve sakin bir askerdir", "Price'ın ekibinde yer alır", "Modern Warfare hikayesinde önemli roldedir"]
  ),

  createGameCharacter(
    1213,
    "Vladimir Makarov",
    ["makarov", "vladimir makarov"],
    ["Askeri FPS", "Modern savaş", "Aksiyon"],
    ["Takım elbise veya askeri kıyafet", "Soğuk bakış", "Silahlı lider görünümü"],
    ["Küresel krizler", "Gizli örgütler", "Modern Warfare evreni"],
    ["Serinin en bilinen antagonistlerinden biridir", "Manipülatif ve stratejik davranır", "Büyük kaos planlarıyla tanınır"]
  ),

  createGameCharacter(
    1214,
    "Alex Mason",
    ["alex mason", "mason"],
    ["Askeri FPS", "Soğuk Savaş", "Gizli operasyonlar"],
    ["Askeri kıyafet", "Kısa saç", "Sert yüz ifadesi"],
    ["CIA operasyonları", "Soğuk Savaş", "Black Ops evreni"],
    ["Sorgu sahneleriyle hatırlanır", "Numbers/numaralar temasıyla bilinir", "Travmatik görevler yaşamıştır"]
  ),

  createGameCharacter(
    1215,
    "Vaas Montenegro",
    ["vaas", "vaas montenegro"],
    ["Açık dünya", "FPS", "Tropik ada aksiyonu"],
    ["Kırmızı atlet", "Mohawk saç", "Delici bakış"],
    ["Rook Islands", "Korsan kampı", "Tropik ada"],
    ["Deliliğin tanımını anlatan monoloğuyla bilinir", "Karizmatik antagonisttir", "Dengesiz ve tehditkardır"]
  ),

  createGameCharacter(
    1216,
    "Pagan Min",
    ["pagan min", "pagan"],
    ["Açık dünya", "FPS", "Aksiyon-macera"],
    ["Pembe takım elbise", "Sarı saç", "Şık ama tehlikeli görünüm"],
    ["Kyrat", "Dağlık ülke", "İç savaş atmosferi"],
    ["Eksantrik bir diktatör figürüdür", "Sakin konuşup tehlikeli davranır", "Far Cry serisinin akılda kalan kötülerindendir"]
  ),

  createGameCharacter(
    1217,
    "Joseph Seed",
    ["joseph seed", "the father", "father"],
    ["Açık dünya", "FPS", "Kült temalı aksiyon"],
    ["Sarı gözlük", "Sakallı yüz", "Dini lider görünümü"],
    ["Hope County", "Kült yerleşimleri", "Kırsal Amerika"],
    ["The Father lakabıyla bilinir", "Kitleleri etkileyen bir liderdir", "Fanatik inanç temasıyla öne çıkar"]
  ),

  createGameCharacter(
    1218,
    "Isaac Clarke",
    ["isaac clarke", "isaac"],
    ["Hayatta kalma korku", "Bilim kurgu", "Üçüncü şahıs aksiyon"],
    ["Mühendis zırhı", "Kaskında yatay ışık çizgileri", "Plazma kesici"],
    ["Uzay gemisi", "Ishimura", "Karanlık koridorlar"],
    ["Mühendis kökenlidir", "Uzayda kabus gibi olaylarla yüzleşir", "Plasma Cutter ile hatırlanır"]
  ),

  createGameCharacter(
    1219,
    "Heather Mason",
    ["heather mason", "heather"],
    ["Psikolojik korku", "Hayatta kalma korku", "Kült seri"],
    ["Turuncu kolsuz üst", "Kısa sarı saç", "Beyaz yelek"],
    ["Silent Hill", "Otherworld", "Kasvetli kasaba"],
    ["Gizemli geçmişini keşfeder", "Korku atmosferinin merkezindedir", "Silent Hill serisinin güçlü ana karakterlerindendir"]
  ),

  createGameCharacter(
    1220,
    "Maria",
    ["maria"],
    ["Psikolojik korku", "Hayatta kalma korku", "Kült seri"],
    ["Sarı saç", "Kırmızımsı kıyafet", "Gizemli ve tanıdık görünüm"],
    ["Silent Hill", "Sisli kasaba", "James Sunderland'ın hikayesi"],
    ["Ana karakterin geçmişiyle bağlantılıdır", "Gizemli varlığıyla kafa karıştırır", "Silent Hill 2'nin sembolik karakterlerindendir"]
  ),

  createGameCharacter(
    1221,
    "Rebecca Chambers",
    ["rebecca chambers", "rebecca"],
    ["Hayatta kalma korku", "Zombi salgını", "Klasik korku serisi"],
    ["S.T.A.R.S. üniforması", "Kısa saç", "Tıbbi ekipman"],
    ["Raccoon City", "Spencer Malikanesi", "Umbrella deneyleri"],
    ["Genç sağlık uzmanıdır", "Destekleyici ve zeki karakterdir", "Resident Evil evreninde erken dönem figürlerdendir"]
  ),

  createGameCharacter(
    1222,
    "HUNK",
    ["hunk", "mr death"],
    ["Hayatta kalma korku", "Aksiyon", "Gizli operasyon"],
    ["Gaz maskesi", "Siyah taktik kıyafet", "Kapalı yüz"],
    ["Umbrella Corporation", "Raccoon City", "Biyolojik krizler"],
    ["Mr. Death lakabıyla bilinir", "Hayatta kalma oranı çok yüksektir", "Gizemli ve profesyonel bir askerdir"]
  ),

  createGameCharacter(
    1223,
    "Alma Wade",
    ["alma", "alma wade"],
    ["Korku FPS", "Psikolojik gerilim", "Doğaüstü aksiyon"],
    ["Uzun siyah saç", "Soluk görünüm", "Kırmızı elbise"],
    ["F.E.A.R. evreni", "Laboratuvarlar", "Doğaüstü deneyler"],
    ["Rahatsız edici hayalet figürüdür", "Zihinsel güçlerle bağlantılıdır", "Oyunun korku atmosferini taşır"]
  ),

  createGameCharacter(
    1224,
    "Slender Man",
    ["slender man", "slenderman"],
    ["Bağımsız korku", "Hayatta kalma", "İnternet efsanesi uyarlaması"],
    ["Uzun siyah takım elbise", "Yüzsüz baş", "Aşırı uzun kollar"],
    ["Karanlık orman", "Sayfa toplama oyunu", "Sessiz takip atmosferi"],
    ["Oyuncuyu sessizce takip eder", "Yaklaşınca ekran bozulur", "Minimal korku ikonlarından biridir"]
  ),

  createGameCharacter(
    1225,
    "Bendy",
    ["bendy"],
    ["Bağımsız korku", "Çizgi film estetiği", "Bulmaca-macera"],
    ["Siyah-beyaz çizgi film görünümü", "Boynuzlu kafa", "Geniş sırıtış"],
    ["Mürekkep stüdyosu", "Eski animasyon atölyesi"],
    ["Mürekkep temalı korku figürüdür", "Retro çizgi film atmosferi taşır", "Bendy and the Ink Machine ile bilinir"]
  ),

  createGameCharacter(
    1226,
    "Karlach",
    ["karlach"],
    ["CRPG", "Dungeons & Dragons", "Fantastik rol yapma"],
    ["Kırmızı ten", "Boynuzlar", "Alevli enerji", "Büyük savaş baltası"],
    ["Faerun", "Avernus geçmişi", "Baldur's Gate"],
    ["Çok enerjik ve sıcak kanlıdır", "İçindeki cehennem motoruyla yaşar", "Güçlü barbar karakterdir"]
  ),

  createGameCharacter(
    1227,
    "Lae'zel",
    ["laezel", "lae'zel", "lae zel"],
    ["CRPG", "Dungeons & Dragons", "Fantastik rol yapma"],
    ["Yeşilimsi ten", "Githyanki zırhı", "Keskin yüz hatları"],
    ["Faerun", "Githyanki kültürü", "Mind flayer tehdidi"],
    ["Sert ve disiplinli bir savaşçıdır", "Kendi halkının kurallarına çok bağlıdır", "Baldur's Gate 3 yoldaşlarındandır"]
  ),

  createGameCharacter(
    1228,
    "Gale",
    ["gale", "gale of waterdeep"],
    ["CRPG", "Dungeons & Dragons", "Fantastik rol yapma"],
    ["Büyücü cübbesi", "Sakallı yüz", "Kitap ve asa havası"],
    ["Waterdeep", "Faerun", "Baldur's Gate"],
    ["Bilgili ve konuşkan büyücüdür", "Göğsünde tehlikeli büyülü sır taşır", "Esprili anlatımıyla bilinir"]
  ),

  createGameCharacter(
    1229,
    "Wyll",
    ["wyll", "wyll ravengard", "blade of frontiers"],
    ["CRPG", "Dungeons & Dragons", "Fantastik rol yapma"],
    ["Kılıç", "Boynuzlu görünüm", "Asil savaşçı havası"],
    ["Faerun", "Baldur's Gate", "Frontiers efsanesi"],
    ["Blade of Frontiers olarak bilinir", "Kahraman olmak ister", "Bir anlaşmanın sonuçlarıyla yaşar"]
  ),

  createGameCharacter(
    1230,
    "Solas",
    ["solas"],
    ["Fantastik RPG", "Hikaye odaklı rol yapma", "Parti tabanlı macera"],
    ["Kel kafa", "Elf görünümü", "Sade kıyafetler"],
    ["Thedas", "Fade", "Elf tarihi"],
    ["Rüya ve ruhlar alemiyle bağlantılıdır", "Bilgili ve gizemli bir elfdir", "Dragon Age evreninde büyük sır taşır"]
  ),

  createGameCharacter(
    1231,
    "Varric Tethras",
    ["varric", "varric tethras"],
    ["Fantastik RPG", "Parti tabanlı macera", "Hikaye odaklı"],
    ["Cüce", "Arbalet", "Şık yelek"],
    ["Thedas", "Kirkwall", "Inquisition ekibi"],
    ["Bianca adlı arbaletiyle bilinir", "Hikaye anlatıcısıdır", "Esprili ve güvenilir yoldaştır"]
  ),

  createGameCharacter(
    1232,
    "Alistair",
    ["alistair"],
    ["Fantastik RPG", "Parti tabanlı rol yapma", "Karanlık fantezi"],
    ["Zırh", "Kalkan", "Genç savaşçı görünümü"],
    ["Ferelden", "Grey Wardens", "Darkspawn tehdidi"],
    ["İyi niyetli ve esprili bir yoldaştır", "Grey Warden geçmişi vardır", "Tahtla bağlantılı önemli bir sır taşır"]
  ),

  createGameCharacter(
    1233,
    "Wrex",
    ["wrex", "urdnot wrex"],
    ["Bilim kurgu RPG", "Uzay operası", "Parti tabanlı hikaye"],
    ["Büyük zırhlı Krogan", "Sert yüz", "Ağır silahlar"],
    ["Mass Effect evreni", "Tuchanka", "Normandy ekibi"],
    ["Krogan savaşçısıdır", "Kaba ama sadık bir yoldaştır", "Türünün geleceğiyle ilgili önemli rol oynar"]
  ),

  createGameCharacter(
    1234,
    "Miranda Lawson",
    ["miranda", "miranda lawson"],
    ["Bilim kurgu RPG", "Uzay operası", "Takım tabanlı görevler"],
    ["Siyah-beyaz görev kıyafeti", "Düzenli saç", "Profesyonel görünüm"],
    ["Cerberus", "Normandy", "Galaktik operasyonlar"],
    ["Genetik olarak tasarlanmış üstün ajan olarak tanıtılır", "Zeki ve kontrollüdür", "Mass Effect 2'nin önemli ekip üyelerindendir"]
  ),

  createGameCharacter(
    1235,
    "Mordin Solus'un Klinik Defteri",
    ["klinik defteri", "mordinin defteri"],
    ["Bilim kurgu RPG", "Uzay operası", "Mizahi eşya/hatıra"],
    ["Notlarla dolu dijital kayıt", "Bilimsel veri havası"],
    ["Normandy", "Laboratuvar", "Mass Effect evreni"],
    ["Mordin'in bilimsel takıntısını temsil eder", "Mizahi ve bilgi dolu notları çağrıştırır", "Karakter odaklı fan servisi hissi verir"]
  ),

  createGameCharacter(
    1236,
    "Panam Palmer",
    ["panam", "panam palmer"],
    ["Açık dünya RPG", "Siberpunk", "Hikaye odaklı aksiyon"],
    ["Göçebe kıyafeti", "Siyah saç", "Araç ve silah ekipmanları"],
    ["Night City çevresi", "Badlands", "Aldecaldos klanı"],
    ["Göçebe savaşçıdır", "Sadık ve sert bir karakterdir", "Araçlı görevlerle öne çıkar"]
  ),

  createGameCharacter(
    1237,
    "Judy Alvarez",
    ["judy", "judy alvarez"],
    ["Açık dünya RPG", "Siberpunk", "Hikaye odaklı aksiyon"],
    ["Dövmeler", "Renkli saç", "Teknik ekipman"],
    ["Night City", "Braindance stüdyoları", "Yeraltı hayatı"],
    ["Braindance uzmanıdır", "Empatik ve idealisttir", "V'nin yakın müttefiklerinden biridir"]
  ),

  createGameCharacter(
    1238,
    "Jackie Welles",
    ["jackie", "jackie welles"],
    ["Açık dünya RPG", "Siberpunk", "Suç hikayesi"],
    ["Kaslı yapı", "Deri ceket", "Motorcu havası"],
    ["Night City", "Heywood", "Paralı askerlik"],
    ["V'nin en yakın dostudur", "Büyük hayaller kurar", "Samimi ve korumacı karakterdir"]
  ),

  createGameCharacter(
    1239,
    "Adam Smasher",
    ["adam smasher", "smasher"],
    ["Açık dünya RPG", "Siberpunk", "Aksiyon"],
    ["Dev sibernetik beden", "Metal zırh", "İnsanüstü mekanik görünüm"],
    ["Night City", "Arasaka", "Siber savaş alanı"],
    ["Neredeyse tamamen makineleşmiş bir savaşçıdır", "Çok korkulan bir antagonisttir", "Sert ve acımasız tavrıyla bilinir"]
  ),

  createGameCharacter(
    1240,
    "Freya",
    ["freya"],
    ["Aksiyon-macera", "Mitolojik hikaye", "Hack and slash"],
    ["Kuzey mitolojisi kıyafetleri", "Büyücü görünümü", "Savaşçı duruş"],
    ["Midgard", "İskandinav mitolojisi", "Dokuz diyar"],
    ["Büyü ve savaş yetenekleri vardır", "Anne figürü olarak önemli rol oynar", "Kratos ile karmaşık ilişkiye sahiptir"]
  ),

  createGameCharacter(
    1241,
    "Mimir",
    ["mimir"],
    ["Aksiyon-macera", "Mitolojik hikaye", "Yoldaş karakter"],
    ["Kesik ama canlı kafa", "Sakallı yüz", "Kemerden sarkan görünüm"],
    ["Dokuz diyar", "İskandinav mitolojisi"],
    ["Bilgelik dolu hikayeler anlatır", "Oyuncuya sürekli bilgi verir", "Kratos ve Atreus'un yol arkadaşıdır"]
  ),

  createGameCharacter(
    1242,
    "Midna",
    ["midna"],
    ["Macera", "Nintendo", "Fantastik bulmaca"],
    ["Küçük imp formu", "Büyük başlık/maske", "Turuncu saç"],
    ["Hyrule", "Twilight Realm", "Zelda evreni"],
    ["Alaycı ama sadık yoldaştır", "Karanlık dünya ile bağlantılıdır", "Link'e rehberlik eder"]
  ),

  createGameCharacter(
    1243,
    "Sheik",
    ["sheik"],
    ["Macera", "Nintendo", "Fantastik aksiyon"],
    ["Ninja benzeri kıyafet", "Yüzü kapalı", "Mavi-gri zırh"],
    ["Hyrule", "Zaman yolculuğu", "Zelda evreni"],
    ["Gizemli rehber figürüdür", "Şarkılar öğretir", "Kimliğiyle sürpriz yaratır"]
  ),

  createGameCharacter(
    1244,
    "Rosalina",
    ["rosalina", "rosalina and luma"],
    ["Platform", "Nintendo", "Uzay temalı macera"],
    ["Turkuaz elbise", "Sarı saç", "Yıldız yoldaşlar"],
    ["Mario evreni", "Uzay gözlemevi", "Luma yıldızları"],
    ["Luma'ların koruyucusudur", "Sakin ve gizemli bir prenses figürüdür", "Galaksi temasıyla özdeşleşir"]
  ),

  createGameCharacter(
    1245,
    "Bowser Jr.",
    ["bowser jr", "bowser junior"],
    ["Platform", "Nintendo", "Aile dostu aksiyon"],
    ["Küçük kaplumbağa-ejderha görünümü", "Önlük/bandana", "Fırça veya küçük araçlar"],
    ["Mario evreni", "Koopa ordusu", "Mantar Krallığı"],
    ["Bowser'ın oğludur", "Yaramaz ve inatçıdır", "Küçük boss savaşlarıyla bilinir"]
  ),

  createGameCharacter(
    1246,
    "Meta Knight",
    ["meta knight"],
    ["Platform", "Nintendo", "Aksiyon-macera"],
    ["Maskeli yuvarlak savaşçı", "Pelerin", "Kılıç"],
    ["Dream Land", "Kirby evreni"],
    ["Gizemli ve onurlu bir savaşçıdır", "Kirby ile hem rakip hem müttefik olabilir", "Hızlı kılıç saldırılarıyla bilinir"]
  ),

  createGameCharacter(
    1247,
    "King Dedede",
    ["king dedede", "dedede"],
    ["Platform", "Nintendo", "Komedi aksiyon"],
    ["Büyük penguen benzeri kral", "Kırmızı cübbe", "Dev çekiç"],
    ["Dream Land", "Kirby evreni"],
    ["Kendini kral ilan etmiş bir figürdür", "Dev çekiciyle savaşır", "Bazen kötü bazen komik yancı olur"]
  ),

  createGameCharacter(
    1248,
    "Ridley",
    ["ridley"],
    ["Aksiyon-macera", "Nintendo", "Bilim kurgu"],
    ["Mor ejderha benzeri yaratık", "Kanatlar", "Keskin pençeler"],
    ["Metroid evreni", "Uzay korsanları", "Tehlikeli gezegenler"],
    ["Samus Aran'ın ezeli düşmanlarındandır", "Uçan ve saldırgan bir boss figürüdür", "Serinin en ikonik yaratıklarındandır"]
  ),

  createGameCharacter(
    1249,
    "Charizard",
    ["charizard", "çharizard"],
    ["RPG", "Nintendo", "Canavar toplama oyunu"],
    ["Turuncu ejderha görünümü", "Kanatlar", "Kuyruğunda alev"],
    ["Pokémon dünyası", "Arenalar", "Evrim sistemi"],
    ["Ateş tipi ikonik Pokémon'dur", "Uçarak savaşabilir", "Fanların en sevdiği yaratıklardan biridir"]
  ),

  createGameCharacter(
    1250,
    "Eevee",
    ["eevee", "ivi"],
    ["RPG", "Nintendo", "Canavar toplama oyunu"],
    ["Kahverengi tüylü küçük canlı", "Büyük kulaklar", "Kabarcık yaka tüyleri"],
    ["Pokémon dünyası", "Evrim sistemi"],
    ["Birçok farklı evrime sahip olmasıyla bilinir", "Sevimli ve esnek bir Pokémon'dur", "Maskot karakterlerden biridir"]
  ),

  createGameCharacter(
    1251,
    "Snorlax",
    ["snorlax", "horlama pokemonu"],
    ["RPG", "Nintendo", "Canavar toplama oyunu"],
    ["Dev mavi-beyaz gövde", "Uyuyan yüz", "Kocaman karın"],
    ["Pokémon dünyası", "Yolları kapatan karşılaşmalar"],
    ["Sürekli uyumasıyla bilinir", "Yolu kapatan büyük Pokémon olarak hatırlanır", "Dayanıklı ve güçlüdür"]
  ),

  createGameCharacter(
    1252,
    "Noctis Lucis Caelum",
    ["noctis", "noctis lucis caelum"],
    ["JRPG", "Aksiyon RPG", "Fantastik yol hikayesi"],
    ["Siyah kıyafet", "Dağınık siyah saç", "Kraliyet silahları"],
    ["Lucis", "Final Fantasy evreni", "Yolculuk ve krallık savaşı"],
    ["Silahları anlık çağırabilir", "Kraliyet varisidir", "Arkadaşlarıyla yolculuğu merkezdedir"]
  ),

  createGameCharacter(
    1253,
    "Lightning",
    ["lightning", "claire farron"],
    ["JRPG", "Aksiyon RPG", "Final Fantasy"],
    ["Pembe saç", "Kılıç tabanca", "Askeri-fantastik kıyafet"],
    ["Cocoon", "Pulse", "Final Fantasy XIII evreni"],
    ["Soğukkanlı ve güçlü bir savaşçıdır", "Kardeşini koruma motivasyonu vardır", "Serinin modern ikonlarındandır"]
  ),

  createGameCharacter(
    1254,
    "Tidus",
    ["tidus"],
    ["JRPG", "Final Fantasy", "Spor ve fantastik yolculuk"],
    ["Sarı saç", "Renkli spor kıyafeti", "Kılıç"],
    ["Spira", "Blitzball", "Sin tehdidi"],
    ["Blitzball yıldızıdır", "Yeni bir dünyaya düşmüş gibi davranır", "Yuna ile hikayesiyle bilinir"]
  ),

  createGameCharacter(
    1255,
    "Yuna",
    ["yuna"],
    ["JRPG", "Final Fantasy", "Fantastik yolculuk"],
    ["Mavi-beyaz kıyafet", "Asa", "Farklı renkli gözler"],
    ["Spira", "Tapınaklar", "Çağırıcı geleneği"],
    ["Summoner/çağırıcıdır", "Fedakarlık temasıyla öne çıkar", "Yolculuğu oyunun merkezindedir"]
  ),

  createGameCharacter(
    1256,
    "Squall Leonhart",
    ["squall", "squall leonhart"],
    ["JRPG", "Final Fantasy", "Okul ve savaş teması"],
    ["Siyah deri ceket", "Yüzünde yara izi", "Gunblade"],
    ["Balamb Garden", "SeeD", "Final Fantasy VIII"],
    ["Gunblade kullanır", "İçe kapanık bir liderdir", "Rinoa ile hikayesiyle bilinir"]
  ),

  createGameCharacter(
    1257,
    "Vivi Ornitier",
    ["vivi", "vivi ornitier"],
    ["JRPG", "Final Fantasy", "Fantastik macera"],
    ["Büyük sarı şapka", "Siyah yüz", "Parlayan gözler"],
    ["Gaia", "Kara büyücü köyü", "Final Fantasy IX"],
    ["Kara büyücüdür", "Varoluşunu sorgular", "Sevimli ama hüzünlü bir karakterdir"]
  ),

  createGameCharacter(
    1258,
    "Terra Branford",
    ["terra", "terra branford"],
    ["JRPG", "Final Fantasy", "16-bit klasik"],
    ["Yeşil saç", "Kırmızı kıyafet", "Büyülü aura"],
    ["Esperler", "İmparatorluk", "Final Fantasy VI"],
    ["Doğuştan büyü gücüne sahiptir", "Kimliğini arayan ana figürdür", "Klasik JRPG kahramanlarındandır"]
  ),

  createGameCharacter(
    1259,
    "Clive Rosfield",
    ["clive", "clive rosfield"],
    ["Aksiyon RPG", "Final Fantasy", "Karanlık fantezi"],
    ["Siyah zırh", "Kılıç", "Alev temalı güçler"],
    ["Valisthea", "Eikonlar", "Krallık çatışmaları"],
    ["Ifrit ile bağlantılıdır", "Ağır ve dramatik bir hikayesi vardır", "Modern Final Fantasy ana karakteridir"]
  ),

  createGameCharacter(
    1260,
    "Ren Amamiya",
    ["ren amamiya", "joker persona", "phantom thief joker"],
    ["JRPG", "Persona", "Sosyal simülasyon"],
    ["Siyah maske", "Uzun siyah palto", "Dağınık saç"],
    ["Tokyo", "Metaverse", "Phantom Thieves"],
    ["Phantom Thieves lideridir", "Gündüz öğrenci gece maskeli hırsızdır", "Persona 5'in ana karakteridir"]
  ),

  createGameCharacter(
    1261,
    "Makoto Niijima",
    ["makoto", "makoto niijima", "queen persona"],
    ["JRPG", "Persona", "Sosyal simülasyon"],
    ["Kısa koyu saç", "Deri savaş kıyafeti", "Motosiklet personası"],
    ["Tokyo", "Shujin Akademisi", "Phantom Thieves"],
    ["Queen kod adıyla bilinir", "Disiplinli ve zeki bir karakterdir", "Yakın dövüş ve nükleer temalı güçler kullanır"]
  ),

  createGameCharacter(
    1262,
    "Aigis",
    ["aigis"],
    ["JRPG", "Persona", "Sosyal simülasyon"],
    ["Sarı saç", "Robotik eklemler", "Okul üniforması"],
    ["Persona 3", "SEES ekibi", "Tartarus"],
    ["Android savaşçıdır", "İnsan olmayı anlamaya çalışır", "Persona 3'ün en duygusal figürlerindendir"]
  ),

  createGameCharacter(
    1263,
    "Yu Narukami",
    ["yu narukami", "yu", "souji seta"],
    ["JRPG", "Persona", "Dedektiflik ve sosyal simülasyon"],
    ["Gri saç", "Gözlük", "Okul üniforması"],
    ["Inaba", "TV dünyası", "Persona 4"],
    ["Sessiz ana karakterdir", "Cinayet gizemini çözmeye çalışır", "Arkadaşlık bağlarıyla güçlenir"]
  ),

  createGameCharacter(
    1264,
    "Teddie",
    ["teddie", "kuma"],
    ["JRPG", "Persona", "Komedi ve gizem"],
    ["Ayı kostümü gibi görünüm", "Mavi-beyaz yuvarlak gövde", "Sevimli yüz"],
    ["TV dünyası", "Inaba", "Persona 4"],
    ["Komik ve geveze yoldaştır", "İçinde farklı bir kimlik saklar", "Ayı esprileriyle bilinir"]
  ),

  createGameCharacter(
    1265,
    "Hornet",
    ["hornet"],
    ["Metroidvania", "Bağımsız yapım", "Zorlu aksiyon"],
    ["Kırmızı pelerin", "Beyaz maske", "İğne silahı"],
    ["Hallownest", "Böcek krallığı", "Silksong beklentisi"],
    ["Hızlı ve zarif savaşır", "Ana karaktere hem rakip hem rehber olur", "İğne ve ip temasıyla bilinir"]
  ),

  createGameCharacter(
    1266,
    "The Penitent One",
    ["penitent one", "the penitent one", "tövbekar"],
    ["Metroidvania", "Bağımsız yapım", "Gotik aksiyon"],
    ["Uzun sivri metal miğfer", "Zırh", "Kılıç"],
    ["Cvstodia", "Dini semboller", "Karanlık gotik dünya"],
    ["Sessiz ve ağırbaşlı savaşçıdır", "Tövbe ve kader temasıyla ilerler", "Blasphemous'un ana figürüdür"]
  ),

  createGameCharacter(
    1267,
    "Frisk",
    ["frisk"],
    ["Bağımsız RPG", "Bullet hell", "Seçimlere dayalı hikaye"],
    ["Çizgili kazak", "Kısa saç", "Sade çocuk görünümü"],
    ["Yeraltı dünyası", "Canavarlar", "Undertale"],
    ["Savaşmadan ilerleme seçeneği vardır", "Oyuncunun seçimlerini temsil eder", "Sessiz ana karakterdir"]
  ),

  createGameCharacter(
    1268,
    "Flowey",
    ["flowey", "flowey the flower"],
    ["Bağımsız RPG", "Kara mizah", "Seçimlere dayalı hikaye"],
    ["Sarı çiçek", "Geniş gülümseme", "Değişen yüz ifadeleri"],
    ["Yeraltı dünyası", "Undertale"],
    ["İlk başta sevimli görünür", "Oyuncunun kararlarını sınar", "Beklenmedik derecede tehditkar olabilir"]
  ),

  createGameCharacter(
    1269,
    "Hades",
    ["hades"],
    ["Roguelike", "Bağımsız yapım", "Yunan mitolojisi"],
    ["Uzun beyaz saç", "Karanlık tanrı kıyafeti", "Sert yüz ifadesi"],
    ["Yeraltı Dünyası", "Yunan mitolojisi", "Hades oyunu"],
    ["Zagreus'un babasıdır", "Yeraltı dünyasının yöneticisidir", "Sert ama karizmatik bir figürdür"]
  ),

  createGameCharacter(
    1270,
    "Megaera",
    ["megaera", "meg"],
    ["Roguelike", "Bağımsız yapım", "Yunan mitolojisi"],
    ["Mor-kırmızı kıyafet", "Kanatlar", "Kırbaç"],
    ["Tartarus", "Yeraltı Dünyası", "Hades oyunu"],
    ["İlk büyük bosslardan biridir", "Zagreus ile geçmişi vardır", "Ciddi ve disiplinli bir karakterdir"]
  ),

  createGameCharacter(
    1271,
    "Thanatos",
    ["thanatos"],
    ["Roguelike", "Bağımsız yapım", "Yunan mitolojisi"],
    ["Siyah pelerin", "Tırpan", "Soluk ve sakin görünüm"],
    ["Yeraltı Dünyası", "Yunan mitolojisi", "Hades oyunu"],
    ["Ölümün kişileştirilmiş halidir", "Sakin ve mesafeli davranır", "Zagreus ile rekabetli bir bağı vardır"]
  ),

  createGameCharacter(
    1272,
    "Harrier Du Bois",
    ["harrier du bois", "harry du bois", "tequila sunset"],
    ["Bağımsız RPG", "Dedektiflik", "Diyalog odaklı hikaye"],
    ["Dağınık dedektif görünümü", "Yorgun yüz", "Uzun palto"],
    ["Revachol", "Cinayet soruşturması", "Disco Elysium"],
    ["Hafızasını kaybetmiş dedektiftir", "İç sesleriyle konuşur", "Çok farklı kişilik yollarına gidebilir"]
  ),

  createGameCharacter(
    1273,
    "Kim Kitsuragi",
    ["kim kitsuragi", "kim"],
    ["Bağımsız RPG", "Dedektiflik", "Diyalog odaklı hikaye"],
    ["Gözlük", "Turuncu pilot ceketi", "Sakin duruş"],
    ["Revachol", "Cinayet soruşturması", "Disco Elysium"],
    ["Profesyonel ve sabırlı bir dedektiftir", "Oyuncuya denge sağlar", "Güvenilir yoldaş figürüdür"]
  ),

  createGameCharacter(
    1274,
    "Stardew Valley Çiftçisi",
    ["farmer", "çiftçi", "stardew farmer"],
    ["Bağımsız yaşam simülasyonu", "RPG", "Çiftlik oyunu"],
    ["Hasır şapka", "Çiftlik kıyafetleri", "Aletler"],
    ["Pelican Town", "Çiftlik", "Stardew Valley"],
    ["Dededen kalan çiftliği devralır", "Ekin eker ve kasabalılarla ilişki kurar", "Rahatlatıcı oyun döngüsünün merkezindedir"]
  ),

  createGameCharacter(
    1275,
    "Krobus",
    ["krobus"],
    ["Bağımsız yaşam simülasyonu", "RPG", "Sevimli karanlık karakter"],
    ["Siyah küçük yaratık", "Parlak gözler", "Kanalizasyon sakini"],
    ["Stardew Valley", "Kanalizasyon", "Pelican Town"],
    ["Sessiz ve tatlı bir gölge varlıktır", "Oyuncuya eşya satar", "Ev arkadaşı olabilir"]
  ),

  createGameCharacter(
    1276,
    "Shane",
    ["shane"],
    ["Bağımsız yaşam simülasyonu", "RPG", "Kasaba ilişkileri"],
    ["Joja çalışanı kıyafeti", "Dağınık görünüm", "Mavi ceket"],
    ["Pelican Town", "Stardew Valley", "JojaMart"],
    ["Başta soğuk davranır", "Tavukları sever", "Daha derin bir kişisel hikayesi vardır"]
  ),

  createGameCharacter(
    1277,
    "Terry Bogard",
    ["terry", "terry bogard"],
    ["Dövüş oyunu", "Arcade klasiği", "King of Fighters"],
    ["Kırmızı şapka", "Kolsuz yelek", "Sarı at kuyruğu"],
    ["South Town", "Fatal Fury", "KOF turnuvaları"],
    ["Power Wave hareketiyle bilinir", "'Are you okay?' repliğiyle meşhurdur", "SNK'nın en tanınan yüzlerindendir"]
  ),

  createGameCharacter(
    1278,
    "Mai Shiranui",
    ["mai", "mai shiranui"],
    ["Dövüş oyunu", "Arcade klasiği", "King of Fighters"],
    ["Kırmızı ninja kıyafeti", "Yelpazeler", "Uzun kahverengi saç"],
    ["Fatal Fury", "KOF turnuvaları"],
    ["Yelpaze ve ateş temalı hareketler kullanır", "Çevik ninja savaşçısıdır", "SNK'nın ikonik karakterlerindendir"]
  ),

  createGameCharacter(
    1279,
    "Kyo Kusanagi",
    ["kyo", "kyo kusanagi"],
    ["Dövüş oyunu", "Arcade klasiği", "King of Fighters"],
    ["Okul ceketi", "Alev efektleri", "Kendine güvenli duruş"],
    ["KOF turnuvaları", "Kusanagi klanı"],
    ["Alev gücü kullanır", "Iori ile rekabetiyle bilinir", "KOF serisinin ana yüzlerindendir"]
  ),

  createGameCharacter(
    1280,
    "Iori Yagami",
    ["iori", "iori yagami"],
    ["Dövüş oyunu", "Arcade klasiği", "King of Fighters"],
    ["Kırmızı saç", "Siyah-kırmızı kıyafet", "Pençe gibi eller"],
    ["KOF turnuvaları", "Yagami klanı"],
    ["Mor alevleriyle bilinir", "Kyo'nun ezeli rakibidir", "Agresif ve karizmatik dövüş tarzı vardır"]
  ),

  createGameCharacter(
    1281,
    "Sol Badguy",
    ["sol badguy", "sol"],
    ["Dövüş oyunu", "Anime estetiği", "Guilty Gear"],
    ["Kırmızı-siyah kıyafet", "Büyük kılıç", "Kafa bandı"],
    ["Guilty Gear evreni", "Gear savaşları"],
    ["Ateş temalı saldırılar kullanır", "Sert ve umursamaz tavrı vardır", "Serinin ana karakterlerinden biridir"]
  ),

  createGameCharacter(
    1282,
    "Bridget",
    ["bridget"],
    ["Dövüş oyunu", "Anime estetiği", "Guilty Gear"],
    ["Mavi-beyaz kıyafet", "Yo-yo silahı", "Kapüşonlu görünüm"],
    ["Guilty Gear evreni", "Ödül avcılığı"],
    ["Yo-yo ile savaşır", "Çevik ve sevimli tarzıyla bilinir", "Modern dönemde çok popülerleşmiştir"]
  ),

  createGameCharacter(
    1283,
    "Johnny Cage",
    ["johnny cage", "cage"],
    ["Dövüş oyunu", "Mortal Kombat", "Aksiyon yıldızı parodisi"],
    ["Güneş gözlüğü", "Film yıldızı duruşu", "Eldivenler"],
    ["Mortal Kombat turnuvası", "Hollywood", "Earthrealm"],
    ["Kendini beğenmiş film yıldızıdır", "Yeşil enerji kullanır", "Esprili replikleriyle bilinir"]
  ),

  createGameCharacter(
    1284,
    "Kitana",
    ["kitana"],
    ["Dövüş oyunu", "Mortal Kombat", "Fantastik turnuva"],
    ["Mavi kıyafet", "Yelpaze silahları", "Maske"],
    ["Edenia", "Outworld", "Mortal Kombat evreni"],
    ["Keskin yelpazelerle savaşır", "Prenses figürüdür", "Outworld hikayesinde önemli rol oynar"]
  ),

  createGameCharacter(
    1285,
    "Mileena",
    ["mileena"],
    ["Dövüş oyunu", "Mortal Kombat", "Fantastik turnuva"],
    ["Pembe-mor kıyafet", "Maske", "Sai bıçakları"],
    ["Outworld", "Mortal Kombat evreni"],
    ["Kitana'ya benzeyen karanlık karakterdir", "Sai kullanır", "Vahşi ve öngörülemez dövüş tarzı vardır"]
  ),

  createGameCharacter(
    1286,
    "Shao Kahn",
    ["shao kahn"],
    ["Dövüş oyunu", "Mortal Kombat", "Boss karakter"],
    ["Boynuzlu miğfer", "Dev çekiç", "Zırhlı büyük beden"],
    ["Outworld", "Mortal Kombat turnuvaları"],
    ["Acımasız imparator figürüdür", "Dev çekiciyle savaşır", "Serinin en bilinen boss karakterlerindendir"]
  ),

  createGameCharacter(
    1287,
    "Garen",
    ["garen"],
    ["MOBA", "League of Legends", "Strateji aksiyon"],
    ["Ağır zırh", "Büyük kılıç", "Mavi-altın renkler"],
    ["Demacia", "Runeterra", "Sihirdar Vadisi"],
    ["Demacia savaşçısıdır", "Döner saldırısıyla bilinir", "Basit ama güçlü oynanışı vardır"]
  ),

  createGameCharacter(
    1288,
    "Darius",
    ["darius"],
    ["MOBA", "League of Legends", "Strateji aksiyon"],
    ["Dev balta", "Ağır zırh", "Sert komutan görünümü"],
    ["Noxus", "Runeterra", "Sihirdar Vadisi"],
    ["Noxus'un güçlü savaşçısıdır", "Balta ve kanama mekaniğiyle bilinir", "Rakipleri cezalandıran oyun tarzı vardır"]
  ),

  createGameCharacter(
    1289,
    "Katarina",
    ["katarina"],
    ["MOBA", "League of Legends", "Strateji aksiyon"],
    ["Kızıl saç", "Çift hançer", "Yüzünde yara izi"],
    ["Noxus", "Runeterra", "Sihirdar Vadisi"],
    ["Çevik suikastçıdır", "Takım savaşında sıçrayarak skor alır", "Reset mekaniğiyle bilinir"]
  ),

  createGameCharacter(
    1290,
    "Zed",
    ["zed"],
    ["MOBA", "League of Legends", "Ninja suikastçı"],
    ["Metal maske", "Karanlık zırh", "Gölge efektleri"],
    ["Ionia", "Gölgeler tarikatı", "Runeterra"],
    ["Gölge klonları kullanır", "Yüksek mekanik isteyen suikastçıdır", "Shen ile geçmişi vardır"]
  ),

  createGameCharacter(
    1291,
    "Ashe",
    ["ashe"],
    ["MOBA", "League of Legends", "Okçu nişancı"],
    ["Buz mavisi pelerin", "Yay", "Beyaz saç"],
    ["Freljord", "Runeterra", "Sihirdar Vadisi"],
    ["Buz okları kullanır", "Uzaktan sersemleten oku ile bilinir", "Freljord liderlerinden biridir"]
  ),

  createGameCharacter(
    1292,
    "Ekko",
    ["ekko"],
    ["MOBA", "League of Legends", "Zaman temalı aksiyon"],
    ["Beyaz saç", "Saat benzeri cihaz", "Sokak kıyafetleri"],
    ["Zaun", "Runeterra", "Zaman manipülasyonu"],
    ["Zamanı geri sarabilir", "Zaun'lu genç mucittir", "Hızlı ve çevik suikastçı tarzı vardır"]
  ),

  createGameCharacter(
    1293,
    "Pudge",
    ["pudge"],
    ["MOBA", "Dota", "Strateji aksiyon"],
    ["Dev iri beden", "Kanca", "Kasap görünümü"],
    ["Dota evreni", "Savaş alanı", "Karanlık arena"],
    ["Kanca atmasıyla bilinir", "Rakibi kendine çekerek başlatır", "Dota'nın en ikonik kahramanlarındandır"]
  ),

  createGameCharacter(
    1294,
    "Invoker",
    ["invoker", "kael"],
    ["MOBA", "Dota", "Büyü kombinasyonu"],
    ["Uzun saç", "Büyücü kıyafeti", "Küreler"],
    ["Dota evreni", "Büyü sistemi", "Savaş alanı"],
    ["Çok sayıda büyü kombinasyonu vardır", "Yüksek mekanik isteyen kahramandır", "Ego dolu büyücü kişiliğiyle bilinir"]
  ),

  createGameCharacter(
    1295,
    "Crystal Maiden",
    ["crystal maiden", "rylai"],
    ["MOBA", "Dota", "Buz büyüsü"],
    ["Mavi-beyaz kıyafet", "Asa", "Buz efektleri"],
    ["Dota evreni", "Savaş alanı", "Büyü dünyası"],
    ["Buz büyüleri kullanır", "Takıma mana desteği sağlar", "Destek rolünün klasik isimlerindendir"]
  ),

  createGameCharacter(
    1296,
    "Jett",
    ["jett"],
    ["Taktiksel FPS", "Valorant", "Karakter tabanlı shooter"],
    ["Beyaz saç", "Mavi kıyafet", "Bıçaklar"],
    ["Valorant protokolü", "Taktiksel haritalar"],
    ["Hızlı dash yeteneğiyle bilinir", "Agresif düellocu rolündedir", "Bıçak ultisiyle öne çıkar"]
  ),

  createGameCharacter(
    1297,
    "Phoenix",
    ["phoenix"],
    ["Taktiksel FPS", "Valorant", "Karakter tabanlı shooter"],
    ["Alev temalı ceket", "Siyah saç", "Parlak enerji efektleri"],
    ["Valorant protokolü", "Taktiksel haritalar"],
    ["Ateş yetenekleri kullanır", "Kendini iyileştirebilir", "Özgüvenli ve havalı tavrıyla bilinir"]
  ),

  createGameCharacter(
    1298,
    "Sage",
    ["sage"],
    ["Taktiksel FPS", "Valorant", "Destek karakteri"],
    ["Beyaz-yeşil kıyafet", "Küreler", "Topuz saç"],
    ["Valorant protokolü", "Taktiksel haritalar"],
    ["Takım arkadaşlarını iyileştirir", "Duvar örebilir", "Diriltme yeteneğiyle bilinir"]
  ),

  createGameCharacter(
    1299,
    "Reyna",
    ["reyna"],
    ["Taktiksel FPS", "Valorant", "Düellocu"],
    ["Mor-siyah kıyafet", "Uzun koyu saç", "Parlayan gözler"],
    ["Valorant protokolü", "Taktiksel haritalar"],
    ["Skor aldıkça güçlenir", "Agresif düellocu tarzı vardır", "Mor enerji efektleriyle bilinir"]
  ),

  createGameCharacter(
    1300,
    "Raze",
    ["raze"],
    ["Taktiksel FPS", "Valorant", "Patlayıcı aksiyon"],
    ["Turuncu şapka", "Renkli kıyafet", "Patlayıcı ekipman"],
    ["Valorant protokolü", "Taktiksel haritalar"],
    ["Patlayıcı ve roket kullanır", "Enerjik Brezilyalı ajandır", "Haritaları hareketli hale getirir"]
  )
];
