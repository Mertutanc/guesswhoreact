import type { GuessItem } from "../../types/game";

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
  )
];
