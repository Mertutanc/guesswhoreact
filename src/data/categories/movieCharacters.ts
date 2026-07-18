import type { GuessItem } from "../../types/game";

const TURKISH_MOVIE_CHARACTER_IDS = new Set<number>([
  3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055,
  3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3196,
  3197, 3198, 3199, 3200, 3201, 3202, 3203, 3204, 3205, 3206,
  3207, 3208, 3209, 3210, 3211, 3212, 3213, 3214, 3215, 3216,
  3217, 3218, 3219, 3220, 3246, 3247, 3248, 3249, 3250, 3251,
  3252, 3253, 3254, 3255, 3256, 3257, 3258, 3259, 3260, 3261,
  3262, 3263, 3264, 3265, 3266, 3267, 3268, 3269, 3270, 3271,
  3272, 3273, 3274, 3275, 3276, 3277, 3278, 3279, 3280, 3281,
  3282, 3283, 3284, 3285, 3286, 3287, 3288, 3289, 3290, 3291,
  3292, 3293, 3294, 3295, 3296, 3297, 3298, 3299, 3300, 3301,
]);

const getMovieCharacterTags = (id: number): string[] => {
  if (TURKISH_MOVIE_CHARACTER_IDS.has(id)) {
    return ["movie:turkish"];
  }

  return ["movie:foreign"];
};

const createMovieCharacter = (
  id: number,
  name: string,
  answers: string[],
  movie: string[],
  appearance: string[],
  role: string[],
  features: string[]
): GuessItem => {
  return {
    id,
    mode: "movieCharacter",
    modeLabel: "Film Karakteri",
    name,
    answers,
    tags: getMovieCharacterTags(id),
    hintGroups: [
      {
        key: "movie",
        label: "Film",
        hints: movie,
      },
      {
        key: "appearance",
        label: "Görünüm",
        hints: appearance,
      },
      {
        key: "role",
        label: "Rol",
        hints: role,
      },
      {
        key: "features",
        label: "Özellik",
        hints: features,
      },
    ],
  };
};


const m = createMovieCharacter;

export const movieCharacters: GuessItem[] = [
 

m(
    3001,
    "John Wick",
    ["john wick", "wick", "baba yaga"],
    ["Aksiyon - intikam", "Yeraltı suç dünyası", "Modern suikastçı serisi"],
    ["Siyah takım elbise", "Uzun siyah saç", "Kirli sakal", "Yaralı yüz"],
    ["Tetikçi", "Emekli suikastçı", "Köpeğinin intikamını alan adam"],
    ["'Baba Yaga' lakaplı", "Silah ve yakın dövüş ustası", "Continental oteli bağlantılı"]
  ),

  m(
    3002,
    "Thanos",
    ["thanos"],
    ["Süper kahraman evreni", "Çizgi roman uyarlaması", "Devasa sinematik seri"],
    ["Mor ten", "Devasa cüsse", "Altın zırh", "Çizgili çene"],
    ["Antagonist", "Evrenin yarısını yok etmek isteyen lider"],
    ["Sonsuzluk Eldiveni kullanır", "Parmak şıklatmasıyla ünlü", "Gezegenleri dengeler"]
  ),

  m(
    3003,
    "Aragorn",
    ["aragorn", "yolgezer", "strider"],
    ["Fantastik epik seri", "Orta Dünya", "Kitap uyarlaması üçleme"],
    ["Kirli pelerin", "Kılıç", "Uzun dağınık saç", "Kraliyet yüzüğü"],
    ["Yol gösterici", "Savaşçı lider", "Kayıp kral"],
    ["Andúril kılıcını taşır", "Gondor tahtının varisi", "Arwen ile aşk yaşar"]
  ),

  m(
    3004,
    "Legolas",
    ["legolas"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük kardeşliği üyesi"],
    ["Uzun sarı saç", "Sivri kulaklar", "Yeşil-gri kabile kıyafetleri"],
    ["Okçu", "Prens", "Savaşçı yoldaş"],
    ["Asla ıskalamaz", "they re taking the hobbits to isengard gard gard gard gard", "Gimli ile rekabet eder", "Hafif ve hızlı hareket eder"]
  ),

  m(
    3005,
    "Gollum",
    ["gollum", "smeagol", "smagol"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük arayışı hikayesi"],
    ["Çıplak ve zayıf vücut", "Büyük parlayan gözler", "Birkaç tel saç"],
    ["Eski hobbit", "Yüzük bağımlısı yaratık", "Rehber ve hain"],
    ["'Kıymetlimis' (My precious) repliği", "Çift kişilikli", "Mağaralarda yaşar"]
  ),

  m(
    3006,
    "Severus Snape",
    ["snape", "severus snape", "profesör snape"],
    ["Fantastik büyücülük serisi", "Okul atmosferi"],
    ["Siyah cübbe", "Omuz hizasında düz siyah saç", "Soluk ten", "Karga burun"],
    ["Profesör", "İksir hocası", "Bina başkanı", "Çift taraflı ajan"],
    ["'Always' repliğiyle bilinir :(", "Karanlık ve gizemli", "Zihinbazar ustası"]
  ),

  m(
    3007,
    "Lord Voldemort",
    ["voldemort", "lord voldemort", "tom riddle", "karanlık lord"],
    ["Fantastik büyücülük serisi", "Ezeli düşman hikayesi"],
    ["Burnu olmayan yüz", "Yılan benzeri gözler", "Siyah cübbe", "Soluk beyaz ten"],
    ["Karanlık Lord", "Antagonist", "Ölüm yiyenlerin lideri"],
    ["Adı anılmaması gereken kişi", "Hortkuluklar üretmiştir", "Yılanı Nagini ile gezer"]
  ),

  m(
    3008,
    "Katniss Everdeen",
    ["katniss", "katniss everdeen"],
    ["Distopik bilim kurgu", "Genç yetişkin serisi", "Hayatta kalma turnuvası"],
    ["Örgülü saç", "Ok ve yay", "Alaycı Kuş broşu"],
    ["İsyanın sembolü", "Mıntıka temsilcisi", "Abla figürü"],
    ["Alaycı Kuş (Mockingjay) olarak bilinir", "Ateşler İçindeki Kız", "Kız kardeşinin yerine gönüllü olur"]
  ),

  m(
    3009,
    "Thor",
    ["thor", "odinson"],
    ["Süper kahraman evreni", "Mitolojik esintili bilim kurgu"],
    ["Pelerin", "Sarışın uzun saç (bazen kısa)", "Metal zırh", "Göz bandı (bazen)"],
    ["Tanrı", "Yenilmezler üyesi", "Prens"],
    ["Yıldırım tanrısı", "Mjolnir (Çekiç) veya Stormbreaker kullanır", "Asgardlı"]
  ),

  m(
    3010,
    "Captain America",
    ["kaptan amerika", "captain america", "steve rogers", "kaptan"],
    ["Süper kahraman evreni", "Liderlik ve adalet teması"],
    ["Mavi-kırmızı kostüm", "Kask (A harfli)", "Yıldız amblemi"],
    ["Asker", "Yenilmezler lideri", "İlk kahraman"],
    ["Kırılmaz kalkan taşır", "2. Dünya Savaşı'ndan kalma", "Donarak geleceğe uyanmıştır"]
  ),

  m(
    3011,
    "Wolverine",
    ["wolverine", "logan", "wolverin"],
    ["Mutant dünyası", "Çizgi roman uyarlaması aksiyon"],
    ["Kendine has sakal/saç tarzı", "Deri ceket", "Yaralanmayan vücut"],
    ["Savaşçı", "X-Men üyesi", "Gezgin"],
    ["Ellerinden çıkan adamantin pençeler", "Hücre yenilemesi (İyileşme)", "Puro sever"]
  ),

  m(
    3012,
    "Deadpool",
    ["deadpool", "wade wilson", "dedpul"],
    ["Yetişkin süper kahraman filmi", "Komedi - aksiyon", "Dördüncü duvarı yıkan hikaye"],
    ["Kırmızı siyah tam kapalı kostüm", "Çift kılıç (sırtta)", "Yüzü deforme olmuş"],
    ["Paralı asker", "Anti-kahraman"],
    ["Seyirciyle doğrudan konuşur 4.duvar yok eder", "Ölmez/iyileşir", "Geveze ve esprilidir"]
  ),

  m(
    3013,
    "Luke Skywalker",
    ["luke", "luke skywalker"],
    ["Uzay operası", "Bilim kurgu efsanesi", "Seçilmiş kişi arketipi"],
    ["Çiftçi kıyafeti (başta)", "Siyah jedi kıyafeti (sonradan)", "Işın kılıcı"],
    ["Pilot", "Jedi şövalyesi", "Kurtarıcı"],
    ["Yeşil/Mavi ışın kılıcı", "Darth Vader'ın oğlu", "Tatooine gezegeninden çıkmıştır"]
  ),

  m(
    3014,
    "Han Solo",
    ["han solo", "solo"],
    ["Uzay operası", "Bilim kurgu efsanesi", "Uzay korsanlığı"],
    ["Yelek", "Lazer tabancası", "Karizmatik serseri duruşu"],
    ["Kaçakçı", "Kaptan", "Pilot"],
    ["Millennium Falcon gemisinin sahibidir", "Chewbacca'nın ortağı", "Önce parayı düşünür"]
  ),

  m(
    3015,
    "Yoda",
    ["yoda", "usta yoda", "master yoda"],
    ["Uzay operası", "Bilim kurgu efsanesi", "En güçlü mentor karakter"],
    ["Küçük boy", "Yeşil ten", "Uzun kulaklar", "Eski cübbe ve baston"],
    ["Jedi Ustası", "Konsey başkanı", "Öğretmen"],
    ["Kelimelerin yerini değiştirerek konuşur", "Güç (Force) ustası", "800 yıldan fazla yaşamıştır"]
  ),

  m(
    3016,
    "Shrek",
    ["shrek", "şrek"],
    ["Animasyon aile filmi", "Masal parodisi", "Yeşil dev hikayesi"],
    ["Yeşil büyük vücut", "Tombul yanaklar", "Külah şeklinde kulaklar"],
    ["Bataklık sakini", "Zoraki kahraman", "Koca dev"],
    ["Bataklıkta yaşar", "Eşek ile arkadaştır", "Prenses Fiona'yı kurtarır"]
  ),

  m(
    3017,
    "Donkey",
    ["eşek", "donkey", "şrekteki eşek"],
    ["Animasyon aile filmi", "Komedi", "Konuşan hayvan karakteri"],
    ["Gri eşek", "Büyük dişler", "Sürekli gülen yüz"],
    ["Yancı", "En yakın arkadaş", "Komik figür"],
    ["Süper gevezedir", "Bir ejderha ile evlenir ve gerektiğinde ejderhayı kullanmaktan çekinmez", "Şrek'in peşini bırakmaz"]
  ),

  m(
    3018,
    "Hannibal Lecter",
    ["hannibal", "hannibal lecter", "doktor lecter"],
    ["Psikolojik gerilim", "Suç ve dedektiflik", "Ödüllü kült başyapıt"],
    ["Mavi hapishane tulumu", "Yüzü kapatan ikonik dişli maske", "Göz kırpmayan keskin bakışlar"],
    ["Psikiyatrist", "Seri katil", "Danışman"],
    ["İnsan eti yer (Yamyam)", "Aşırı zekidir", "Klasik müzik ve sanat hayranıdır"]
  ),

  m(
    3019,
    "Patrick Bateman",
    ["patrick bateman", "bateman"],
    ["Kara komedi - gerilim", "Yuppie kültürü", "Sosyal hiciv"],
    ["Kusursuz taranmış saç", "Lüks takım elbiseler", "Şeffaf yağmurluk (bazen)", "Balta"],
    ["Yatırım bankacısı", "Seri katil", "Narsist"],
    ["Kartvizitlere aşırı önem verir", "Cilt bakım rutini ünlüdür", "Aynada kendisine hayrandır"]
  ),

  m(
    3020,
    "The Terminator",
    ["terminator", "terminatör", "t-800", "arnold"],
    ["Bilim kurgu aksiyon", "Zaman yolculuğu", "Gelecekten gelen tehdit"],
    ["Siyah deri ceket", "Güneş gözlüğü", "Mekanik kırmızı göz (hasar alınca)"],
    ["Sayborg", "Suikastçı veya koruyucu", "Katil robot"],
    ["'I'll be back' repliği", "Asla durdurulamaz", "hasta la vista, baby", "Gelecekteki yapay zeka tarafından gönderilmiştir"]
  ),

  m(
    3021,
    "James Bond",
    ["james bond", "bond", "007"],
    ["Ajan - casusluk serisi", "Uluslararası operasyonlar", "Dünyanın en uzun soluklu serilerinden"],
    ["Şık smokin", "Lüks saat", "Pürüzsüz tıraşlı yüz"],
    ["Gizli ajan", "Suikastçı", "Hükümet görevlisi"],
    ["'Aston Martin kullanır", "007 kod adına sahiptir", "İçkisini çalkalanmış, karıştırılmamış sever"]
  ),

  m(
    3022,
    "Ethan Hunt",
    ["ethan hunt", "ethan"],
    ["Aksiyon - casusluk", "Tehlikeli görevler ekibi"],
    ["Tırmanma teçhizatları", "Deri ceket", "Yüz maskesi (kılık değiştirme)"],
    ["Saha ajanı", "Takım lideri", "Kaçak"],
    ["İnanılmaz dublörlük hareketleri yapar", "Uçaklara ve gökdelenlere tırmanır", "IMF ajanı"]
  ),

  m(
    3023,
    "Dominic Toretto",
    ["dom", "dominic toretto", "toretto"],
    ["Aksiyon - yarış", "Sokak arabaları ve soygun teması"],
    ["Siyah atlet", "Boynunda haç kolye", "Kel ve aşırı kaslı yapı"],
    ["Sokak yarışçısı", "Çete lideri", "Soyguncu"],
    ["Sürekli 'Aile' (Family) vurgusu yapar", "Amerikan kas arabaları (Muscle) kullanır", "Corona birası içer"]
  ),

  m(
    3024,
    "Pennywise",
    ["pennywise", "o", "it", "palyaço pennywise"],
    ["Korku filmi", "Stephen King uyarlaması", "Çocukluk kabusu"],
    ["Viktorya dönemi palyaço kostümü", "Kırmızı balon", "Kocaman alın ve turuncu saç"],
    ["Kadim yaratık", "Palyaço", "Katil"],
    ["Korkudan beslenir", "Kanalizasyonda yaşar", "Dans eden palyaço olarak bilinir"]
  ),

  m(
    3025,
    "Léon",
    ["leon", "leon the professional"],
    ["Suç draması", "Suikastçı ve çocuk dostluğu"],
    ["Uzun siyah palto", "Siyah bere", "Yuvarlak küçük gözlük"],
    ["Kiralık katil", "Vasi", "Tetikçi"],
    ["Sürekli süt içer", "En sevdiği şey bir saksı bitkisidir", "Mathilda'yı korur"]
  ),

  m(
    3026,
    "Jack Dawson",
    ["jack", "jack dawson"],
    ["Romantik drama", "Tarihi felaket filmi", "Tüm zamanların en çok gişe yapanlarından"],
    ["Fakir kıyafetleri", "Dağınık sarımsı saçlar", "Askılı pantolon"],
    ["Ressam", "Gezgin", "Aşık genç"],
    ["Büyük bir gemide seyahat eder", "Geminin ucunda 'Dünyanın kralıyım' diye bağırır", "Trajik bir şekilde donarak ölür"]
  ),

  m(
    3027,
    "Gimli",
    ["gimli"],
    ["Fantastik epik seri", "Orta Dünya efsanesi"],
    ["Uzun gür kızıl sakal", "Miğfer", "Çift başlı dev balta"],
    ["Savaşçı", "Cüce temsilcisi", "Yoldaş"],
    ["Madenleri sever", "Legolas ile öldürdüğü düşmanları sayar", "Kısa boylu ama çok güçlüdür"]
  ),

  m(
    3028,
    "Sauron",
    ["sauron", "karanlıklar efendisi"],
    ["Fantastik epik seri", "Orta Dünya", "Ana düşman figürü"],
    ["Devasa siyah zırh (başta)", "Alevler saçan tek bir büyük göz (sonradan)"],
    ["Karanlık Lord", "Yaratıcı", "Hükümdar"],
    ["Tek Yüzük'ün asıl sahibidir", "Mordor'da yaşar", "Karanlığın sembolüdür"]
  ),

  m(
    3029,
    "Amélie Poulain",
    ["amelie", "amelie poulain"],
    ["Fransız romantik komedi", "İyilik yapma hikayesi"],
    ["Kısa küt kesim siyah saç", "Kırmızı hırka/elbise", "Melankolik ve tatlı gülümseme"],
    ["Garson", "Gizli iyilik meleği"],
    ["İnsanların hayatını küçük oyunlarla değiştirir", "Paris'te yaşar", "Taş kaydırmayı sever"]
  ),

  m(
    3030,
    "Paul Atreides",
    ["paul", "paul atreides", "muad'dib"],
    ["Bilim kurgu destanı", "Çöl gezegeni hikayesi"],
    ["Çöl kıyafeti (Stillsuit)", "Mavi parlayan gözler (baharat yüzünden)", "Pelerin"],
    ["Dükün oğlu", "Seçilmiş kişi (Mesih)", "Çöl savaşçısı lideri"],
    ["Dev solucanlara biner", "Baharat (Melange) üretilen gezegendedir", "Geleceği görebilir"]
  ),

  m(
    3031,
    "Barbie",
    ["barbie"],
    ["Modern fantastik komedi", "Oyuncak dünyasından sinemaya"],
    ["Tamamen pembe kıyafetler", "Kusursuz sarı saçlar", "Topuklu ayakkabılar"],
    ["İkonik bebek", "Gezgin", "Ana karakter"],
    ["Gerçek dünyayı keşfetmeye çıkar", "Her mesleği yapabilir", "Pembe bir dünyada ('kendiadı'land) yaşar"]
  ),

  m(
    3032,
    "Norman Bates",
    ["norman bates", "norman"],
    ["Klasik psikolojik gerilim", "Kült siyah beyaz film"],
    ["Sıradan temiz yüzlü genç adam", "Bazen kadın kıyafetleri ve peruk giyer", "Bıçak"],
    ["Motel işletmecisi", "Katil"],
    ["Annesinin kişiliğine bürünür", "Duş sahnesi cinayetiyle ünlüdür", "Bates Motel'in sahibidir"]
  ),

  m(
    3033,
    "Travis Bickle",
    ["travis", "travis bickle"],
    ["70'ler suç draması", "Yalnızlık ve delirme hikayesi"],
    ["Mohawk (Mihavk) saç modeli (sonradan)", "Askeri yeşil mont", "Güneş gözlüğü"],
    ["Taksi şoförü", "Savaş gazisi", "Kanun koruyucusu (Vigilante)"],
    ["Aynaya karşı 'You talkin' to me?' repliğini söyler", "Gece New York sokaklarında gezer", "Toplumu temizlemek ister"]
  ),

  m(
    3034,
    "Vincent Vega",
    ["vincent vega", "vincent"],
    ["90'lar kült suç filmi", "Tarantino başyapıtı"],
    ["Siyah takım elbise", "Arkaya taranmış uzunca saç", "Küpe", "Sigara"],
    ["Tetikçi", "Mafya elemanı"],
    ["Patronunun karısıyla dans yarışmasına katılır", "Avrupa'daki hamburger isimlerinden bahseder", "Arkadaşı Jules ile gezer"]
  ),

  m(
    3035,
    "Beatrix Kiddo",
    ["the bride", "gelin", "beatrix kiddo", "kill bill"],
    ["Aksiyon - dövüş sanatları", "İntikam listesi"],
    ["Sarı-siyah motorsiklet tulumu", "Samuray kılıcı (Katana)"],
    ["Eski suikastçı", "Gelin", "İntikamcı anne"],
    ["Kendisini öldürmek isteyen eski ekibini tek tek avlar", "Hattori Hanzo kılıcı kullanır", "Gelin (The Bride) olarak bilinir"]
  ),

  m(
    3036,
    "Miranda Priestly",
    ["miranda", "miranda priestly"],
    ["Moda dünyası draması", "Sert patron figürü"],
    ["Kusursuz platin gri saçlar", "Lüks kürkler ve tasarım kıyafetler", "Gözlük fırlatma"],
    ["Genel yayın yönetmeni", "Acımasız patron"],
    ["Moda dergisini yönetir", "Asistanlarına hayatı dar eder", "Sessizce konuşarak herkesi korkutur"]
  ),

  m(
    3037,
    "Edward Scissorhands",
    ["edward", "edward scissorhands", "makas eller"],
    ["Gotik fantastik romantizm", "Tim Burton filmi"],
    ["Ellerinde parmak yerine uzun makaslar var", "Yüzünde makas kesiği yaraları", "Deri siyah çılgın kıyafet"],
    ["Yapay insan", "Bahçıvan / Kuaför", "Yalnız dışlanmış karakter"],
    ["Buzdan heykeller yapar", "Elleri yüzünden insanlara dokunamaz", "Şatoda tek başına yaratılmıştır"]
  ),

  m(
    3038,
    "Gurney Halleck",
    ["gurney", "gurney halleck"],
    ["Bilim kurgu destanı", "Çöl savaşı"],
    ["Zırh", "Yüzünde savaş yarası izi", "Sert askeri duruş"],
    ["Savaş ustası", "General", "Mentor"],
    ["Ana karakter Paul Atreides'e dövüşmeyi öğretir", "Atreides hanedanına aşırı sadıktır", "Baliset çalmayı sever"]
  ),

  m(
    3039,
    "Katniss'in Kedisi Buttercup",
    ["buttercup", "düğünçiçeği"],
    ["Distopik bilim kurgu", "Savaş atmosferi (Evcil hayvan)"],
    ["Çirkin görünümlü", "Sarı-turuncu tüylü kedi", "Eksik kulak parçası"],
    ["Evcil hayvan", "Yancı kedi"],
    ["Primrose Everdeen'e çok düşkündür", "Ana karakter Katniss'ten nefret eder", "Sığınaklarda hayatta kalır"]
  ),

  m(
    3040,
    "Agent Smith",
    ["ajan smith", "agent smith", "smith"],
    ["Bilim kurgu aksiyon", "Sanal gerçeklik sistemi"],
    ["Takım elbise", "Güneş gözlüğü", "Kulaklık", "Kusursuz taranmış saç"],
    ["Yapay zeka programı", "Sistem koruyucusu / Virüs", "Antagonist"],
    ["Ana karakter Neo'ya sürekli 'Mister Anderson' der", "Kendisini kopyalayabilir", "Matrix'ten kaçmak ister"]
  ),

  m(
    3041,
    "Spider-Man (Peter Parker)",
    ["örümcek adam", "spider-man", "spiderman", "peter parker"],
    ["Süper kahraman", "Çizgi roman uyarlaması"],
    ["Kırmızı mavi kostüm", "Gözleri büyüyüp küçülen maske", "Sırt çantalı lise kıyafetleri (bazen)"],
    ["Lise/Üniversite öğrencisi", "Fotoğrafçı", "Kahraman"],
    ["Ağ atarak binalardan sarkar", "Amcasının ölümüyle kahraman olmuştur", "New York'u korur"]
  ),

  m(
    3042,
    "Gimli'nin Baltası",
    ["gimlinin baltası", "gimli baltası"],
    ["Fantastik epik seri", "Orta Dünya eşyası (Mizahi karakter unsuru)"],
    ["Çift taraflı büyük metal bıçak", "Ahşap kalın sap", "Üzerinde cüce rünleri var"],
    ["Silah", "İkonik eşya"],
    ["'Ve benim baltam!' (And my axe) sahnesiyle internet memesi olmuştur", "Orkları keser", "Cüce yapımıdır"]
  ),

  m(
    3043,
    "Bane",
    ["bane"],
    ["Süper kahraman dünyası", "Karanlık şehir üçlemesi son filmi"],
    ["Yüzünü tamamen kaplayan gaz maskesi benzeri aparat", "Kalın koyun postu ceket", "Devasa kaslı vücut"],
    ["Terörist lider", "Paralı asker", "Suçlu"],
    ["Batman'in belini kırmasıyla bilinir", "Gotham şehrini stadyumu patlatarak ele geçirir", "Çok boğuk bir ses tonu vardır"]
  ),

  m(
    3044,
    "Truman Burbank",
    ["truman", "truman burbank"],
    ["Medya eleştirisi hiciv draması", "Sanal yaşam"],
    ["Her zaman neşeli takım elbiseler", "Güleryüzlü banliyö insanı imajı"],
    ["Haber dışı şov yıldızı", "Sigortacı"],
    ["Doğduğu günden beri tüm hayatı gizlice televizyonda yayınlanmıştır", "Etrafındaki herkesin oyuncu olduğunu fark eder", "'Günaydın, ve olur ya sizi göremezsem; iyi günler, iyi akşamlar ve iyi geceler' repliği ünlüdür"]
  ),

  m(
    3045,
    "Grinch",
    ["grinch", "grinç"],
    ["Fantastik aile komedisi", "Yılbaşı teması"],
    ["Tamamen yeşil tüylerle kaplı vücut", "Alaycı huysuz yüz", "Noel baba kostümü giyer (bazen)"],
    ["Yalnız yaşayan yeşil yaratık", "Yılbaşı hırsızı"],
    ["Yılbaşından nefret eder", "Kasabadaki tüm hediyeleri çalmaya çalışır", "Köpeği Max ile dağda yaşar"]
  ),

  m(
    3046,
    "Gülşah",
    ["gülşah"],
    ["Yeşilçam klasikleri", "Türk aile komedi draması"],
    ["Küçük yaşta kız çocuğu", "İki yandan toplanmış saçlar", "Önlük veya elbiseler"],
    ["Ana karakter çocuk", "Sevimli yancı"],
    ["Hülya Koçyiğit'in kızı canlandırır", "Kemal Sunal (İbo) filmlerinde oynar", "Ağlatırken güldüren eski Türk filmi ikonu"]
  ),

  m(
    3047,
    "İnek Şaban",
    ["şaban", "inek şaban", "kemal sunal"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Okul üniforması", "Sürekli gülen şaşkın yüz ifadesi", "Yandan ayrılmış saçlar"],
    ["Öğrenci", "Sınıfın neşe kaynağı", "Saf kahraman"],
    ["Hababam Sınıfı üyesidir", "Tulum Hayri ve Güdük Necmi ile takılır", "Kel Mahmut'tan sürekli kaçar"]
  ),

  m(
    3048,
    "Güdük Necmi",
    ["güdük necmi", "güdük"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kısa boy", "Okul üniforması", "Kurnazca gülüş"],
    ["Öğrenci", "Şakacı sınıf üyesi"],
    ["İnek Şaban'a sürekli şakalar yapar", "Halit Akçatepe tarafından canlandırılmıştır", "Hababam Sınıfı'nın en kısasıdır"]
  ),

  m(
    3049,
    "Damat Ferit",
    ["damat ferit", "ferit"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi / Romantik"],
    ["Çok yakışıklı jön yüzü", "Okul üniforması veya şık 70'ler kıyafetleri"],
    ["Öğrenci", "Sınıfın kalbini çalan elemanı", "Aşık genç"],
    ["Tarık Akan tarafından canlandırılmıştır", "Kızlar okuluna kaçmasıyla bilinir", "Hababam Sınıfı'nın yakışıklısıdır"]
  ),

  m(
    3050,
    "Kel Mahmut",
    ["kel mahmut", "mahmut hoca"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kel kafa", "Gözlük", "Takım elbise", "Ciddi ama babacan yüz"],
    ["Müdür muavini", "Tarih öğretmeni", "Baba figürü"],
    ["'Okul sadece dört tarafı duvarla çevrili yer değildir' repliği", "Hababam Sınıfı'nı sürekli yakalar", "Münir Özkul tarafından canlandırılmıştır"]
  ),

  m(
    3051,
    "Hafize Ana",
    ["hafize ana", "hafize"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Başörtüsü", "Önlük", "Elindeki büyük okul zili"],
    ["Okul hizmetlisi", "Öğrenci dostu anne"],
    ["Adile Naşit tarafından canlandırılmıştır", "Hababam Sınıfı'na gizlice patates kızartması taşır", "Okul zilini merdivenlerden koşarak çalar"]
  ),

  m(
    3052,
    "Badi Ekrem",
    ["badi ekrem", "ekrem hoca"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kırmızı veya sarı dar eşofman takımı", "Boynunda düdük", "Kel kafaya benzeyen seyrek saçlar"],
    ["Beden eğitimi öğretmeni"],
    ["Şener Şen tarafından canlandırılmıştır", "ben bu yaz nerdeydim?", "Hababam sınıfına şınav çektirmeye çalışırken rezil olur"]
  ),

  m(
    3053,
    "Tosun Paşa",
    ["tosun paşa", "tosun pasa"],
    ["Yeşilçam komedisi", "Osmanlı dönemi Mısır hikayesi"],
    ["Fes", "Paşa kıyafetleri ve apoletler", "Heybetli yürüyüş (sahtesinde şaşkınlık)"],
    ["Paşa (Sahte)", "Yeşil vadiyi ele geçirmeye çalışan figür"],
    ["Yeşil Vadi'yi Tellioğulları adına almak için Şaban paşa kılığına girer", "paşaların paşası", "Şener Şen (Lütfü) ile plan yapar"]
  ),

  m(
    3054,
    "Kibar Feyzo",
    ["kibar feyzo", "feyzo"],
    ["Yeşilçam klasikleri", "Köy ve ağalık sistem eleştirisi komedisi"],
    ["Şapka", "Eski köy kıyafetleri", "Duvara yazı yazma sahneleri"],
    ["Irgat", "Aşık köylü", "Askerden dönen genç"],
    ["Maho Ağa'ya karşı mücadele eder", "sıçmak da yasak mı kurban?", "'Ağam bizimle eğleniyir' repliğiyle bilinir"]
  ),

  m(
    3055,
    "Maho Ağa",
    ["maho ağa", "maho aga", "maho"],
    ["Yeşilçam klasikleri", "Köy ve ağalık sistem eleştirisi komedisi"],
    ["Körük çizme", "Ağa kıyafeti (Yelekli köstekli saat)", "Bıyık"],
    ["Köy Ağası", "Antagonist", "Zalim patron"],
    ["Şener Şen canlandırmıştır", "Köylüleri sürekli sömürür ve şehre sürer", "Feyzo'yu köyden kovar"]
  ),

  m(
    3056,
    "Süpermen Dönüşü Vecihi",
    ["vecihi"],
    ["Yeşilçam komedisi", "Türk sineması klasik aile filmi"],
    ["Deri pilot şapkası", "Büyük pilot gözlüğü", "Sürekli uçak kullanan çılgın aşık imajı"],
    ["Pilot", "Çılgın aşık"],
    ["Şener Şen canlandırmıştır", "Ayşen Gruda'nın (Yaşar) aşkından eve uçakla dalar", "Kız babası Münir Özkul'u çıldırtır"]
  ),

  m(
    3057,
    "Ziya (Yalancı)",
    ["ziya", "jilet riza", "yalanci ziya"],
    ["Yeşilçam komedisi", "Mahalle kültürü filmi"],
    ["Geniş yakalı 70'ler gömleği", "Bıyık", "Sürekli abartan el hareketleri"],
    ["Mahallenin yalancısı", "İşsiz güçsüz arkadaş"],
    ["Şener Şen canlandırmıştır", "Münih'te aslanı nasıl gözünden vurduğunu anlatır", "İngiltere kralı, rahmetli başkan Kennedy, taçsız kral Pele, Beckenbauer, kaleci Maier, Nadia Comaneci, Brigitte Bardot, Fenerbahçeli Cemil hepsi şöhretlerini bu bıçağa borçludurlar."]
  ),

  m(
    3058,
    "Çiçek Abbas",
    ["çiçek abbas", "abbas"],
    ["Yeşilçam klasiği", "Minibüsçüler yarışı"],
    ["Şoför şapkası", "Bıyık", "Kırmızı modifiyeli minibüs"],
    ["Muavin / Şoför", "Aşık genç"],
    ["İlyas Salman canlandırmıştır", "Şakir (Şener Şen) ile atışma sahneleri efsanedir", "'Herkese benden çay, Şakkkir'e yok' repliğiyle bilinir"]
  ),

  m(
    3059,
    "Arif Işık",
    ["arif", "arif isik", "gora arif"],
    ["Türk bilim kurgu komedisi", "Uzay teması"],
    ["Kareli gömlek (başta)", "Uzay tulumu (GORA)", "Deri ceket"],
    ["Halı tüccarı", "UFO fotoğrafçısı", "Gezegen kurtarıcısı"],
    ["Cem Yılmaz canlandırmıştır", "Uzaylılar tarafından kaçırılır evet tarafından", "atmosfer gayet iyi bence"]
  ),

  m(
    3060,
    "Komutan Logar",
    ["logar", "komutan logar"],
    ["Türk bilim kurgu komedisi", "Uzay teması"],
    ["Kel kafa", "Metalik kötü uzaylı kostümü", "Uzun tırnaklar ve pelerin"],
    ["Komutan", "GORA gezegeni yöneticisi", "Antagonist"],
    ["Cem Yılmaz canlandırmıştır", "Dünyalılardan ve özellikle Arif'ten nefret eder", "Büyük büyük dedesi dünyada hakarete uğramıştır"]
  ),

  m(
    3061,
    "216",
    ["216", "robot 216"],
    ["Türk bilim kurgu komedisi", "Uzay ve nostalji teması"],
    ["Tamamen gri metalik vücut", "İnsan gibi taranmış sarı saçlar", "Mekanik ama sevimli hareketler"],
    ["Robot", "En yakın arkadaş", "İnsan olmak isteyen yapay zeka"],
    ["Ozan Güven canlandırmıştır", "Arif ile birlikte takılır", "Türk sanat müziğine ve Yeşilçam'a bayılır"]
  ),

  m(
    3062,
    "Erşan Kuneri",
    ["erşan kuneri", "ersan kuneri"],
    ["Türk sineması komedisi", "Film yapımcılığı parodisi"],
    ["Uzun sarı peruk saç", "Geniş gözlükler", "70'ler deri ceket tarzı"],
    ["Yapımcı", "Yönetmen"],
    ["donla seviştirir pornocu değildir", "tebrik değil tevkiftir o kanundan kaçılmaz", "'mavi donun var mı tophaneli?'"]
  ),

  m(
    3063,
    "Muro",
    ["muro", "murat"],
    ["Türk mafya ve aksiyon serisi sinema filmi", "Politik komedi"],
    ["Gözlük", "Kirli sakal", "Deri ceket", "Sürekli sinirli yüz"],
    ["Örgüt lideri (Eski)", "Mahalle devrimcisi"],
    ["'Nalet olsun içimdeki insan sevgisine' repliği", "Çeto ile birlikte gezer", "Sürekli kapitalizm eleştirisi yapar"]
  ),

  m(
    3064,
    "İskender Büyük",
    ["iskender büyük", "iskender"],
    ["Türk mafya ve aksiyon serisi sinema filmi", "Derin devlet teması"],
    ["Her zaman şık takım elbiseler", "Kırmızı fular", "Geriye taranmış beyaz-siyah saç", "Keçi sakalı"],
    ["Derin devlet ajanı", "Baron", "Antagonist"],
    ["Polat Alemdar'ın en büyük düşmanlarındandır", "Sürekli operasyonlar yönetir", "Devlet adına çalıştığını iddia eder"]
  ),

  m(
    3065,
    "Kaptan Amerika'nın Kalkanı",
    ["kaptan amerikanın kalkanı", "kalkan"],
    ["Süper kahraman evreni", "Marvel eşyası (Mizahi karakter unsuru)"],
    ["Yuvarlak disk şeklinde", "Mavi kırmızı beyaz renkler", "Ortasında büyük beyaz yıldız"],
    ["Silah / Savunma aracı", "Sembol nesne"],
    ["Vibranyum madeninden yapılmıştır", "Fırlatılınca bumerang gibi geri döner", "Fizik kurallarına aykırı seker"]
  ),

  m(
    3066,
    "Sloth (Goonies)",
    ["sloth"],
    ["85 yapımı macera klasiği", "Define avı"],
    ["Deforme olmuş kafa ve göz yapısı", "Süpermen tişörtü", "Devasa cüsse"],
    ["Dışlanmış kardeş", "Kurtarıcı dev"],
    ["'Hey you guys!' diye bağırır", "Çocuklara defineyi bulmada yardım eder", "Çikolatayı çok sever"]
  ),

  m(
    3067,
    "Marty McFly'ın Uçan Kaykayı",
    ["uçan kaykay", "hoverboard"],
    ["Bilim kurgu komedi", "Zaman yolculuğu eşyası"],
    ["Tekerleği olmayan pembe yeşil tasarım kaykay", "Altında mıknatıslı paneller"],
    ["Ulaşım aracı", "Gelecek teknolojisi"],
    ["Gelecekte (2015'te) çocuklardan ödünç alınmıştır", "Su üzerinde çalışmaz (Çekiş gücü biter)", "Serinin ikinci filminde ikoniktir"]
  ),

  m(
    3068,
    "Wilson (Voleybol Topu)",
    ["wilson", "voleybol topu wilson"],
    ["Hayatta kalma draması", "Issız ada teması"],
    ["Beyaz voleybol topu", "Üzerinde kanla çizilmiş insan yüzü figürü", "Ot saçlar"],
    ["Hayali arkadaş", "Cansız yoldaş"],
    ["Tom Hanks adada delirmemek için onunla konuşur", "Markası topun adıdır", "Denizde kaybolduğunda ana karakteri ağlatmıştır"]
  ),

  m(
    3069,
    "Groot",
    ["groot", "bebek groot", "baby groot"],
    ["Uzay bilim kurgu kahramanları", "Marvel evreni"],
    ["Ağaçtan yapılmış vücut", "Dallar ve yapraklar", "Sevimli parlayan gözler"],
    ["Uzay savaşçısı", "Takım üyesi", "Muhafız"],
    ["Sadece 'I am Groot' (Ben Groot) der", "Kendini feda edip bebek olarak yeniden doğmuştur", "Roket Rakun ile kankadır"]
  ),

  m(
    3070,
    "Chucky",
    ["chucky", "çaki", "katil bebek chucky"],
    ["Korku - gerilim", "Katil oyuncak serisi"],
    ["Çizgili kazak", "Askılı kot pantolon", "Yüzünde dikiş izleri ve kızıl saçlar", "Bıçak"],
    ["Oyuncak bebek", "Seri katilin ruhunu taşıyan nesne"],
    ["Bir çocuğun oyuncağına saklanan katildir", "Kült korku ikonudur", "Geceleri canlanır"]
  ),  






 m(
    3071,
    "Ron Weasley",
    ["ron", "ron weasley", "ronald weasley"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Turuncu saç", "Çilli yüz", "Genç büyücü"],
    ["Ana karakterin yakın arkadaşı", "Büyücü öğrenci", "Büyük bir ailenin çocuğu"],
    ["Komik", "Sadık", "Bazen korkak ama cesur davranır"]
  ),

  m(
    3072,
    "Darth Vader",
    ["darth vader", "vader", "anakin", "anakin skywalker"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "1970'lerde başlayan kült seri"],
    ["Siyah zırh", "Siyah kask", "Pelerin", "Mekanik nefes"],
    ["Karanlık taraf savaşçısı", "Eski kahraman", "İmparatorluk figürü"],
    ["İkonik kötü karakter", "Kırmızı ışın kılıcı", "Mekanik nefes sesiyle bilinir"]
  ),

  m(
    3073,
    "Obi-Wan Kenobi",
    ["obi wan", "obiwan", "obi-wan", "obi wan kenobi", "obi-wan kenobi", "kenobi"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "1970'lerde başlayan kült seri"],
    ["Jedi cübbesi", "Sakal", "Işın kılıcı"],
    ["Jedi ustası", "Mentor", "Eski öğrencisiyle çatışır"],
    ["Bilge", "Sakin", "Mavi ışın kılıcıyla hatırlanır"]
  ),

  m(
    3074,
    "Willy Wonka",
    ["willy wonka", "wonka", "wily wonka"],
    ["Fantastik aile filmi", "Kitaptan uyarlama", "Masalsı hikaye"],
    ["Renkli kıyafetler", "Şapka", "Eksantrik görünüm"],
    ["Fabrika sahibi", "Gizemli ev sahibi", "Yaratıcı mucit"],
    ["Çikolata fabrikası", "Altın bilet", "Tuhaf ve eğlenceli"]
  ),

  m(
    3075,
    "Jack Sparrow",
    ["jack sparrow", "captain jack sparrow", "kaptan jack sparrow"],
    ["Macera - fantastik seri", "Korsan temalı evren", "2000'lerde popülerleşen seri"],
    ["Korsan şapkası", "Uzun saç", "Sürmeli gözler"],
    ["Kaptan", "Korsan", "Kaçak ve maceracı"],
    ["Kurnaz", "Komik", "Black Pearl ile bağlantılı"]
  ),

  m(
    3076,
    "Forrest Gump",
    ["forrest", "forrest gump"],
    ["Drama - komedi filmi", "1990'ların Amerikan klasiklerinden", "Hayat hikayesi anlatan film"],
    ["Takım elbise", "Bankta oturmasıyla hatırlanır", "Koşu sahneleri"],
    ["Sıradan görünen ana karakter", "Hayatı tesadüflerle değişen kişi"],
    ["Saf", "İyi kalpli", "Çok koşmasıyla bilinir"]
  ),

  m(
    3077,
    "Indiana Jones",
    ["indiana jones", "indy"],
    ["Macera filmi", "Arkeoloji temalı seri", "Kayıp eserler ve antik gizemler"],
    ["Şapka", "Deri ceket", "Kırbaç"],
    ["Arkeolog", "Kaşif", "Macera kahramanı"],
    ["Kırbacıyla tanınır", "Yılanlardan hoşlanmaz", "Antik eser peşindedir"]
  ),

  m(
    3078,
    "The Joker",
    ["joker", "the joker"],
    ["Süper kahraman evreni", "Suç temalı çizgi roman uyarlamaları", "Karanlık şehir atmosferi"],
    ["Beyaz yüz makyajı", "Yeşil saç", "Mor takım elbise"],
    ["Antagonist", "Kaos figürü", "Suç dehası"],
    ["Kaotik", "Gülümsemesiyle tanınır", "Batman'nin en düşmanı ama en yani"]
  ),

  m(
    3079,
    "Batman",
    ["batman", "bruce wayne"],
    ["Süper kahraman filmi", "Karanlık şehir atmosferi", "Çizgi roman uyarlaması"],
    ["Siyah kostüm", "Pelerin", "Yarasa maskesi"],
    ["Kahraman", "Dedektif", "Milyarder kimliği olan figür"],
    ["Gotham ile bağlantılı", "Yarasa sembolü", "Teknolojik araçlar kullanır"]
  ),

  m(
    3080,
    "Tony Stark",
    ["tony stark", "iron man", "demir adam"],
    ["Süper kahraman filmi", "Teknoloji ve zırh teması", "Paylaşımlı sinema evreni"],
    ["Metal zırh", "Sakal", "Parlayan göğüs reaktörü"],
    ["Mucit", "Milyarder", "Süper kahraman"],
    ["Esprili", "Zeki", "Zırhıyla uçar"]
  ),

  m(
    3081,
    "Captain Jack Torrance",
    ["jack torrance", "captain jack torrance", "jack"],
    ["Psikolojik korku", "Otel temalı hikaye", "Kış atmosferi"],
    ["Kışlık kıyafet", "Dağınık görünüm", "Yoğun bakışlar"],
    ["Baba", "Yazar", "Otel görevlisi"],
    ["Gerilimle hatırlanır", "Kült korku karakteri", "İzole otel ile bağlantılı"]
  ),

  m(
    3082,
    "Neo",
    ["neo", "thomas anderson"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "1990'ların kült filmi"],
    ["Siyah gözlük", "Siyah uzun ceket", "Minimal görünüm"],
    ["Seçilmiş kişi", "Bilgisayar korsanı", "Sistemle mücadele eden karakter"],
    ["Mermilerden kaçma sahnesiyle bilinir", "Matrix evreni", "Kod dünyasıyla bağlantılı"]
  ),

  m(
    3083,
    "Morpheus",
    ["morpheus"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "Kült aksiyon filmi"],
    ["Gözlük", "Deri kıyafet", "Sakin ve karizmatik görünüm"],
    ["Mentor", "Direniş lideri", "Rehber karakter"],
    ["Kırmızı hap / mavi hap seçimiyle bilinir", "Bilge", "Matrix evreni"]
  ),

  m(
    3084,
    "Ellen Ripley",
    ["ripley", "ellen ripley"],
    ["Bilim kurgu - korku", "Uzay gemisi atmosferi", "Yaratık temalı seri"],
    ["Kısa saç", "Uzay gemisi kıyafeti", "Sert ve sade görünüm"],
    ["Hayatta kalan kahraman", "Uzay görevlisi", "Mücadeleci karakter"],
    ["Cesur", "Dirençli", "Uzaylı yaratıklarla bağlantılı"]
  ),

  m(
    3085,
    "Rocky Balboa",
    ["rocky", "rocky balboa"],
    ["Spor filmi", "Boks temalı seri", "Azim hikayesi"],
    ["Boks eldiveni", "Eşofman", "Sade sporcu görünümü"],
    ["Boksör", "Underdog kahraman", "Çalışkan sporcu"],
    ["Merdiven antrenmanıyla bilinir", "Philadelphia ile bağlantılı", "Asla pes etmeyen karakter"]
  ),

  m(
    3086,
    "Vito Corleone",
    ["vito", "vito corleone", "don corleone"],
    ["Suç draması", "Aile ve güç teması", "1970'lerin kült filmi"],
    ["Takım elbise", "Ciddi yüz ifadesi", "Klasik mafya görünümü"],
    ["Aile lideri", "Baba figürü", "Güç sahibi kişi"],
    ["Saygı ve korkuyla anılır", "Corleone ailesi", "Don unvanıyla bilinir"]
  ),

  m(
    3087,
    "Michael Corleone",
    ["michael", "michael corleone"],
    ["Suç draması", "Aile ve güç teması", "Kült üçleme"],
    ["Takım elbise", "Soğukkanlı görünüm", "Ciddi duruş"],
    ["Aile üyesi", "Liderliğe yükselen karakter", "Stratejik figür"],
    ["Soğukkanlı", "Dönüşüm hikayesi", "Corleone ailesi"]
  ),

  m(
    3088,
    "Marty McFly",
    ["marty", "marty mcfly", "mcfly"],
    ["Bilim kurgu - komedi", "Zaman yolculuğu teması", "1980'lerin popüler filmi"],
    ["Kırmızı yelek", "Spor ayakkabı", "Genç görünüm"],
    ["Genç kahraman", "Zaman yolcusu", "Müzikle bağlantılı karakter"],
    ["Kaykay", "Gitarla Johnny Be Good çalar ", "DeLorean ile bağlantılı"]
  ),

  m(
    3089,
    "Doc Brown",
    ["doc brown", "doctor brown", "emmett brown"],
    ["Bilim kurgu - komedi", "Zaman yolculuğu teması", "1980'lerin popüler filmi"],
    ["Dağınık beyaz saç", "Laboratuvar önlüğü", "Çılgın bilim insanı görünümü"],
    ["Mucit", "Bilim insanı", "Mentor"],
    ["DeLorean", "Zaman makinesi mucidi", "Eksantrik ve enerjik"]
  ),

  m(
    3090,
    "Gandalf",
    ["gandalf", "gandalf the grey", "gandalf the white"],
    ["Fantastik seri", "Orta dünya evreni", "Kitaptan uyarlama"],
    ["Uzun sakal", "Asa", "Gri/beyaz cübbe"],
    ["Büyücü", "Mentor", "Yol gösterici"],
    ["Bilge", "Güçlü büyücü", "You shall not pass sahnesiyle bilinir"]
  ),

  m(
    3091,
    "Frodo Baggins",
    ["frodo", "frodo baggins"],
    ["Fantastik seri", "Orta dünya evreni", "Kitaptan uyarlama"],
    ["Kısa boy", "Kıvırcık saç", "Hobbit görünümü"],
    ["Taşıyıcı", "Ana yolculuk kahramanı", "Hobbit"],
    ["Yüzükle bağlantılı", "Shire kökenli", "Zorlu yolculuğa çıkar"]
  ),

  m(
    3092,
    "Hermione Granger",
    ["hermione", "hermione granger"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Kahverengi kabarık saç", "Okul forması", "Büyücü öğrenci görünümü"],
    ["Öğrenci", "Ana üçlüden biri", "Çok zeki karakter"],
    ["Kitap kurdu", "Zeki", "Büyü bilgisiyle öne çıkar"]
  ),

  m(
    3093,
    "Harry Potter",
    ["harry", "harry potter"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Gözlük", "Alnında iz", "Okul forması"],
    ["Ana kahraman", "Büyücü öğrenci", "Seçilmiş kişi"],
    ["Asa kullanır", "Quidditch ile bağlantılı", "Karanlık büyücüyle mücadele eder"]
  ),

  m(
    3094,
    "Tyler Durden",
    ["tyler", "tyler durden"],
    ["Psikolojik drama", "1990'ların kült filmi", "Yeraltı kulübü teması"],
    ["Kırmızı deri ceket", "Dağınık tarz", "Karizmatik görünüm"],
    ["Provokatif figür", "Kulüp kurucusu", "Anlatıyla bağlantılı karakter"],
    ["Kaotik", "Karizmatik", "Tüketim karşıtı tavırla bilinir"]
  ),

  m(
    3095,
    "Maximus Decimus Meridius",
    ["maximus", "maximus decimus meridius"],
    ["Tarihi epik film", "Roma dönemi", "Gladyatör teması"],
    ["Zırh", "Kılıç", "Gladyatör görünümü"],
    ["Komutan", "Gladyatör", "İntikam yolculuğundaki kahraman"],
    ["Onur", "Liderlik", "Roma arenasıyla bağlantılı"]
  ),

m(
    3096,
    "Princess Leia",
    ["princess leia", "leia", "leia organa", "prenses leia"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "İsyan ve imparatorluk çatışması"],
    ["Beyaz elbise", "İkonik topuz saç", "Blaster tabanca"],
    ["Prenses", "İsyan lideri", "Diplomat"],
    ["Güçlü liderlik", "Luke Skywalker ile bağlantılı", "Han Solo ile ilişkisiyle bilinir"]
  ),

  m(
    3097,
    "Chewbacca",
    ["chewbacca", "chewie", "çubakka", "cubakka"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Kaçakçı ve isyan hikayesi"],
    ["Uzun tüylü beden", "Bandolier kemer", "Wookiee görünümü"],
    ["Yardımcı karakter", "Pilot ortağı", "Savaşçı"],
    ["Han Solo'nun yakın dostu", "Millennium Falcon ile bağlantılı", "Kükremesiyle tanınır"]
  ),

  m(
    3098,
    "R2-D2",
    ["r2d2", "r2-d2", "artoo"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Droid karakterlerin öne çıktığı seri"],
    ["Küçük silindirik gövde", "Mavi beyaz metal", "Tekerlekli droid"],
    ["Astromech droid", "Yardımcı", "Görev taşıyıcısı"],
    ["Bip sesleriyle konuşur", "Planları ve mesajları taşır", "C-3PO ile ikili oluşturur"]
  ),

  m(
    3099,
    "C-3PO",
    ["c3po", "c-3po", "threepio"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Droid karakterlerin öne çıktığı seri"],
    ["Altın renkli humanoid robot", "Parlak metal gövde", "Endişeli duruş"],
    ["Protokol droidi", "Çevirmen", "Yardımcı karakter"],
    ["Çok sayıda dili bilir", "Endişeli konuşmalarıyla bilinir", "R2-D2 ile ikili oluşturur"]
  ),

  m(
    3100,
    "Rey",
    ["rey", "rey skywalker", "rey palpatine"],
    ["Uzay operası", "Yeni dönem bilim kurgu - fantastik seri", "Jedi mirası hikayesi"],
    ["Sarımsı kumaş kıyafet", "Topuz saç", "Işın kılıcı"],
    ["Jedi", "Çöp toplayıcısı kökenli kahraman", "Ana kahraman"],
    ["Güç ile bağlantılıdır", "Çöl gezegeninden çıkar", "Kendi kimliğini arar"]
  ),

  m(
    3101,
    "Kylo Ren",
    ["kylo ren", "ben solo", "kylo"],
    ["Uzay operası", "Yeni dönem bilim kurgu - fantastik seri", "Karanlık taraf hikayesi"],
    ["Siyah maske", "Siyah pelerin", "Kırmızı çapraz ışın kılıcı"],
    ["Antagonist", "Karanlık taraf savaşçısı", "Eski Jedi öğrencisi"],
    ["Ben Solo kimliğiyle bağlantılıdır", "Darth Vader'a hayranlık duyar", "İç çatışmasıyla bilinir"]
  ),

  m(
    3102,
    "Mulan",
    ["mulan", "fa mulan"],
    ["Animasyon", "Aile filmi", "Savaş ve kimlik hikayesi"],
    ["Zırh", "Uzun siyah saç", "Kılıç"],
    ["Savaşçı", "Aile üyesi", "Gizli asker"],
    ["Ailesini korumak için orduya katılır", "Cesaretiyle bilinir", "Çin efsanesinden uyarlanmıştır"]
  ),

  m(
    3103,
    "Elsa",
    ["elsa", "queen elsa", "kraliçe elsa", "kralice elsa"],
    ["Animasyon", "Müzikal fantastik film", "Buz ve kardeşlik teması"],
    ["Sarı örgülü saç", "Mavi elbise", "Buz efektleri"],
    ["Kraliçe", "Büyülü güçlere sahip karakter", "Kardeş"],
    ["Buz güçleriyle bilinir", "Let it go sahnesiyle hatırlanır", "Arendelle ile bağlantılıdır"]
  ),

  m(
    3104,
    "Simba",
    ["simba"],
    ["Animasyon", "Aile filmi", "Krallık ve büyüme hikayesi"],
    ["Aslan", "Altın renkli tüyler", "Genç ve yetişkin hali vardır"],
    ["Prens", "Kral", "Ana kahraman"],
    ["Hakuna Matata ile bağlantılıdır", "Babası Mufasa'dır", "Sürgünden krallığa döner"]
  ),

  m(
    3105,
    "Mufasa",
    ["mufasa"],
    ["Animasyon", "Aile filmi", "Krallık ve aile teması"],
    ["Görkemli aslan", "Geniş yele", "Bilge görünüm"],
    ["Kral", "Baba figürü", "Mentor"],
    ["Simba'nın babasıdır", "Bilge lider olarak bilinir", "Aslan Kayası ile bağlantılıdır"]
  ),

  m(
    3106,
    "Scar",
    ["scar", "skar"],
    ["Animasyon", "Aile filmi", "Krallık ve ihanet teması"],
    ["Koyu renkli aslan", "Gözünde yara izi", "Sinsi görünüm"],
    ["Antagonist", "Kardeş", "Tahtı ele geçirmek isteyen figür"],
    ["Mufasa'nın kardeşidir", "İhanetiyle bilinir", "Karanlık ve manipülatif karakter"]
  ),

  m(
    3107,
    "Woody",
    ["woody", "sheriff woody"],
    ["Animasyon", "Oyuncak temalı macera", "Aile dostu seri"],
    ["Kovboy şapkası", "Sarı gömlek", "Yelek", "Oyuncak bebek görünümü"],
    ["Oyuncak", "Şerif", "Lider"],
    ["Andy'nin oyuncağıdır", "Buzz Lightyear ile dosttur", "Sadakat temasıyla öne çıkar"]
  ),

  m(
    3108,
    "Buzz Lightyear",
    ["buzz", "buzz lightyear"],
    ["Animasyon", "Oyuncak temalı macera", "Bilim kurgu parodisi"],
    ["Uzay giysisi", "Mor yeşil beyaz zırh", "Kanatlı oyuncak"],
    ["Oyuncak", "Uzay koruyucusu", "Kahraman"],
    ["Sonsuzluğa ve ötesine sözüyle bilinir", "Başta gerçek uzaylı olduğunu sanır", "Woody ile ikili oluşturur"]
  ),

  m(
    3109,
    "Sulley",
    ["sulley", "james p sullivan", "james sullivan"],
    ["Animasyon", "Canavarlar dünyası", "Aile komedisi"],
    ["Mavi tüylü dev canavar", "Mor benekler", "Boynuzlar"],
    ["Canavar", "Korkutucu", "Koruyucu figür"],
    ["Boo ile bağlantılıdır", "Mike Wazowski'nin dostudur", "Korkutuculuktan sevgiye dönüşür"]
  ),

  m(
    3110,
    "Mike Wazowski",
    ["mike", "mike wazowski", "wazowski"],
    ["Animasyon", "Canavarlar dünyası", "Aile komedisi"],
    ["Tek gözlü yeşil canavar", "Kısa boy", "Yuvarlak beden"],
    ["Canavar", "Yardımcı karakter", "Komik figür"],
    ["Sulley'in en yakın dostudur", "Tek gözüyle tanınır", "Komik panik halleriyle bilinir"]
  ),

  m(
    3111,
    "Nemo",
    ["nemo"],
    ["Animasyon", "Deniz altı macerası", "Aile filmi"],
    ["Turuncu beyaz palyaço balığı", "Bir yüzgeci küçüktür"],
    ["Çocuk karakter", "Kayıp balık", "Ana aranan kişi"],
    ["Babası Marlin tarafından aranır", "Mercan resifiyle bağlantılıdır", "Cesaretiyle öne çıkar"]
  ),

  m(
    3112,
    "Dory",
    ["dory"],
    ["Animasyon", "Deniz altı macerası", "Komedi ve aile filmi"],
    ["Mavi balık", "Sarı kuyruk", "Büyük gözler"],
    ["Yardımcı karakter", "Dost", "Rehber"],
    ["Kısa süreli hafıza sorunu vardır", "Just keep swimming sözüyle bilinir", "Nemo'nun bulunmasına yardım eder"]
  ),

  m(
    3113,
    "Po",
    ["po", "kung fu panda"],
    ["Animasyon", "Dövüş sanatları komedisi", "Aile filmi"],
    ["Büyük panda", "Siyah beyaz tüyler", "Kung fu kıyafeti"],
    ["Savaşçı", "Seçilmiş kişi", "Aşçı kökenli kahraman"],
    ["Ejderha Savaşçısı olarak bilinir", "Mantı yemeyi sever", "Kung fu öğrenir"]
  ),

  m(
    3114,
    "Hiccup",
    ["hiccup", "hiccup horrendous haddock", "hıçkıdık", "hickidik"],
    ["Animasyon", "Ejderha temalı macera", "Viking dünyası"],
    ["Zayıf genç Viking", "Kahverengi saç", "Mekanik ekipmanlar"],
    ["Ejderha eğitmeni", "Mucit", "Lider"],
    ["Toothless ile dosttur", "Ejderhaları anlamaya çalışır", "Viking geleneklerini değiştirir"]
  ),

  m(
    3115,
    "Toothless",
    ["toothless", "dişsiz", "dissiz"],
    ["Animasyon", "Ejderha temalı macera", "Viking dünyası"],
    ["Siyah ejderha", "Büyük yeşil gözler", "Yaralı kuyruk kanadı"],
    ["Ejderha", "Dost", "Uçan savaşçı"],
    ["Night Fury türündendir", "Hiccup ile bağ kurar", "Hızlı ve zeki bir ejderhadır"]
  ),

  m(
    3116,
    "Gru",
    ["gru", "felonius gru"],
    ["Animasyon", "Komedi", "Kötü adamdan aile babasına dönüşüm hikayesi"],
    ["Kel kafa", "Uzun burun", "Siyah gri kıyafet", "Atkı"],
    ["Eski kötü adam", "Baba figürü", "Mucit"],
    ["Minyonlarla bağlantılıdır", "Ayı çalma planıyla bilinir", "Evlat edindiği kızlarla değişir"]
  ),

  m(
    3117,
    "Minion",
    ["minion", "minyon"],
    ["Animasyon", "Komedi", "Yan karakterlerin öne çıktığı seri"],
    ["Sarı küçük beden", "Mavi tulum", "Gözlük"],
    ["Yardımcı karakter", "Komik figür", "Hizmetkar"],
    ["Anlaşılmaz dilleriyle bilinir", "Gru ile bağlantılıdır", "Muz sevgisiyle hatırlanır, banaaaanaaa"]
  ),

  m(
    3118,
    "Optimus Prime",
    ["optimus", "optimus prime"],
    ["Bilim kurgu aksiyon", "Robot savaşı", "Oyuncak uyarlaması seri"],
    ["Kırmızı mavi dev robot", "Kamyon formuna dönüşür", "Metal zırh"],
    ["Lider", "Autobot", "Savaşçı"],
    ["Autobotların lideridir", "Dönüşebilen robottur", "Onurlu liderliğiyle bilinir"]
  ),

  m(
    3119,
    "Bumblebee",
    ["bumblebee", "bumble bee"],
    ["Bilim kurgu aksiyon", "Robot savaşı", "Oyuncak uyarlaması seri"],
    ["Sarı siyah robot", "Araba formu", "Radyo ile konuşur"],
    ["Autobot", "Dost robot", "Koruyucu"],
    ["Sarı arabaya dönüşür", "İnsanlarla dostluk kurar", "Ses sistemiyle iletişim kurmasıyla bilinir"]
  ),

  m(
    3120,
    "E.T.",
    ["et", "e.t.", "e t", "extra terrestrial"],
    ["Bilim kurgu", "Aile filmi", "Uzaylı dostluk hikayesi"],
    ["Küçük kahverengi uzaylı", "Uzun parmak", "Parlayan parmak ucu"],
    ["Uzaylı", "Dost", "Eve dönmeye çalışan karakter"],
    ["Telefonla evi aramak ister", "Bisiklet sahnesiyle bilinir", "Çocuklarla bağ kurar"]
  ),

  m(
    3121,
    "Harry Callahan",
    ["harry callahan", "dirty harry", "kirli harry"],
    ["Polisiye aksiyon", "Suç filmi", "1970'ler Amerikan sineması"],
    ["Takım elbise", "Tabanca", "Sert polis görünümü"],
    ["Dedektif", "Polis", "Anti-kahraman"],
    ["Dirty Harry lakabıyla bilinir", "Sert yöntemleriyle tanınır", "Klasik replikleriyle hatırlanır"]
  ),

  m(
    3122,
    "John Rambo",
    ["rambo", "john rambo"],
    ["Aksiyon filmi", "Savaş sonrası travma teması", "Hayatta kalma hikayesi"],
    ["Bandana", "Kaslı vücut", "Askeri kıyafet", "Yay ve bıçak"],
    ["Eski asker", "Komando", "Yalnız savaşçı"],
    ["Vietnam gazisi olarak bilinir", "Ormanda hayatta kalır", "Tek kişilik ordu gibi savaşır"]
  ),

  m(
    3123,
    "Sarah Connor",
    ["sarah connor", "sarah"],
    ["Bilim kurgu aksiyon", "Robot kıyameti teması", "Zaman yolculuğu hikayesi"],
    ["Kısa saç", "Askeri kıyafet", "Silahlı ve sert görünüm"],
    ["Anne", "Direniş figürü", "Hayatta kalmaya çalışan kahraman"],
    ["John Connor'ın annesidir", "Geleceği değiştirmeye çalışır", "Terminatörlere karşı savaşır"]
  ),

  m(
    3124,
    "T-1000",
    ["t-1000", "t1000"],
    ["Bilim kurgu aksiyon", "Robot kıyameti teması", "Zaman yolculuğu hikayesi"],
    ["Polis üniforması", "Sıvı metal beden", "Soğuk yüz ifadesi"],
    ["Antagonist", "Terminatör", "Takipçi robot"],
    ["Sıvı metalden oluşur", "Şekil değiştirebilir", "Neredeyse durdurulamaz"]
  ),

  m(
    3125,
    "Trinity",
    ["trinity"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "Kült aksiyon filmi"],
    ["Siyah deri kıyafet", "Kısa siyah saç", "Gözlük"],
    ["Direnişçi", "Hacker", "Savaşçı"],
    ["Neo ile bağlantılıdır", "Motosiklet sahneleriyle bilinir", "Matrix sistemine karşı savaşır"]
  ),

  m(
    3126,
    "Jack Skellington",
    ["jack skellington", "jack", "balkabağı kralı", "balkabagi krali"],
    ["Stop-motion animasyon", "Gotik müzikal", "Cadılar Bayramı ve Noel teması"],
    ["İskelet beden", "Çizgili takım elbise", "Uzun ince görünüm"],
    ["Balkabağı Kralı", "Meraklı lider", "Ana karakter"],
    ["Halloween Town ile bağlantılıdır", "Noel'i keşfetmesiyle bilinir", "Gotik tasarımıyla öne çıkar"]
  ),

  m(
    3127,
    "Coraline Jones",
    ["coraline", "coraline jones"],
    ["Stop-motion animasyon", "Karanlık fantastik film", "Alternatif dünya hikayesi"],
    ["Mavi saç", "Sarı yağmurluk", "Meraklı çocuk görünümü"],
    ["Çocuk kahraman", "Kaşif", "Tehlikeli dünyaya giren karakter"],
    ["Düğme gözlü alternatif aileyle karşılaşır", "Cesaretiyle bilinir", "Gizli kapıdan başka dünyaya geçer"]
  ),

  m(
    3128,
    "Matilda Wormwood",
    ["matilda", "matilda wormwood"],
    ["Aile filmi", "Fantastik komedi", "Kitap uyarlaması"],
    ["Kısa saç", "Okul kıyafeti", "Kitaplarla bağlantılı görünüm"],
    ["Çocuk kahraman", "Öğrenci", "Zeki kız"],
    ["Telekinezi güçleri vardır", "Kitap okumayı sever", "Baskıcı ailesine karşı durur"]
  ),

  m(
    3129,
    "Mary Poppins",
    ["mary poppins"],
    ["Müzikal fantastik film", "Aile filmi", "Sihirli bakıcı hikayesi"],
    ["Şapka", "Şemsiye", "Çanta", "Klasik bakıcı kıyafeti"],
    ["Bakıcı", "Sihirli figür", "Rehber"],
    ["Şemsiyeyle uçar", "Sihirli çantası vardır", "Çocuklara hayat dersi verir"]
  ),

  m(
    3130,
    "Dorothy Gale",
    ["dorothy", "dorothy gale"],
    ["Fantastik müzikal", "Klasik aile filmi", "Masalsı yolculuk"],
    ["Mavi beyaz elbise", "Kırmızı ayakkabılar", "Örgülü saç"],
    ["Yolcu", "Çocuk kahraman", "Eve dönmeye çalışan karakter"],
    ["Oz diyarına gider", "Sarı tuğlalı yolla bağlantılıdır", "Toto adlı köpeği vardır"]
  ),

  m(
    3131,
    "Scarlett O'Hara",
    ["scarlett", "scarlett o'hara", "scarlett ohara"],
    ["Tarihi romantik drama", "Amerikan İç Savaşı dönemi", "Klasik sinema"],
    ["Görkemli elbiseler", "Güçlü bakış", "Güneyli aristokrat görünümü"],
    ["Ana karakter", "Aile mirasını korumaya çalışan kadın", "Romantik drama figürü"],
    ["Tara çiftliğiyle bağlantılıdır", "İnatçı ve hırslıdır", "Klasik sinemanın ikonik karakterlerinden"]
  ),

  m(
    3132,
    "Rick Blaine",
    ["rick blaine", "rick"],
    ["Romantik drama", "Savaş dönemi filmi", "Klasik sinema"],
    ["Beyaz takım elbise", "Sigara", "Bar sahibi görünümü"],
    ["Bar sahibi", "Eski aşık", "Ahlaki seçim yapan karakter"],
    ["Casablanca ile bağlantılıdır", "Cynical ama fedakar karakterdir", "Kült repliklerle hatırlanır"]
  ),

  m(
    3133,
    "Ilsa Lund",
    ["ilsa", "ilsa lund"],
    ["Romantik drama", "Savaş dönemi filmi", "Klasik sinema"],
    ["Şık klasik kıyafetler", "Dalgın ve romantik görünüm"],
    ["Eski aşk", "Direniş liderinin eşi", "Dramatik figür"],
    ["Casablanca ile bağlantılıdır", "Rick Blaine ile geçmişi vardır", "Aşk ve görev arasında kalır"]
  ),

  m(
    3134,
    "Tony Montana",
    ["tony montana", "scarface"],
    ["Suç draması", "Mafya ve yükseliş hikayesi", "1980'ler suç sineması"],
    ["Beyaz takım elbise", "Yara izi", "Puro", "Sert bakış"],
    ["Suç patronu", "Göçmen", "Anti-kahraman"],
    ["Scarface lakabıyla bilinir", "Miami suç dünyasıyla bağlantılıdır", "Güç hırsıyla düşüş yaşar"]
  ),

  m(
    3135,
    "Darth Maul",
    ["darth maul", "maul"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Karanlık taraf karakteri"],
    ["Kırmızı siyah yüz dövmeleri", "Boynuzlar", "Çift taraflı kırmızı ışın kılıcı"],
    ["Sith", "Antagonist", "Savaşçı"],
    ["Çift taraflı ışın kılıcıyla bilinir", "Obi-Wan ile düellosu vardır", "Sessiz ve tehditkar görünümüyle öne çıkar"]
  ),

  m(
    3136,
    "Padmé Amidala",
    ["padme", "padmé", "padme amidala", "padmé amidala"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Siyasi ve romantik hikaye"],
    ["Görkemli kraliçe kıyafetleri", "Klasik saç tasarımları", "Diplomatik görünüm"],
    ["Kraliçe", "Senatör", "Siyasi lider"],
    ["Naboo ile bağlantılıdır", "Anakin Skywalker ile ilişkisi vardır", "Leia ve Luke'un annesidir"]
  ),

  m(
    3137,
    "Samwise Gamgee",
    ["sam", "samwise", "samwise gamgee"],
    ["Fantastik epik seri", "Orta Dünya", "Yolculuk ve dostluk hikayesi"],
    ["Kısa boy", "Kıvırcık saç", "Hobbit kıyafetleri"],
    ["Hobbit", "Yol arkadaşı", "Sadık dost"],
    ["Frodo'nun en yakın dostudur", "Sadakatiyle bilinir", "Yolculuğun görünmeyen kahramanıdır"]
  ),

  m(
    3138,
    "Boromir",
    ["boromir"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük kardeşliği hikayesi"],
    ["Zırh", "Kalkan", "Borazan", "Uzun saç"],
    ["Savaşçı", "Gondor insanı", "Trajik kahraman"],
    ["Yüzüğün etkisine kapılır", "Gondor'u korumak ister", "Fedakarlığıyla hatırlanır"]
  ),

  m(
    3139,
    "Dobby",
    ["dobby"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Sadakat temalı hikaye"],
    ["Büyük kulaklar", "Küçük beden", "Eski bez kıyafet"],
    ["Ev cini", "Yardımcı karakter", "Sadık dost"],
    ["Özgürlük için çorapla bağlantılıdır", "free elf :(", "Harry Potter'a yardım eder", "Sadakatiyle bilinir"]
  ),

  m(
    3140,
    "Sirius Black",
    ["sirius", "sirius black", "padfoot"],
    ["Fantastik büyücülük serisi", "Aile ve geçmiş sırları teması"],
    ["Uzun siyah saç", "Sakallı görünüm", "Koyu kıyafetler"],
    ["Vaftiz babası", "Kaçak mahkum", "Animagus"],
    ["Köpeğe dönüşebilir animagus", "Harry Potter'ın vaftiz babasıdır", "Azkaban ile bağlantılıdır"]
  ),

  m(
    3141,
    "Albus Dumbledore",
    ["dumbledore", "albus dumbledore", "albus"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Mentor hikayesi"],
    ["Uzun beyaz sakal", "Cübbe", "Yarım ay gözlük"],
    ["Müdür", "Büyücü", "Mentor"],
    ["Hogwarts müdürüdür", "Bilge karakter olarak bilinir", "Karanlık büyüye karşı önemli figürdür"]
  ),

  m(
    3142,
    "Minerva McGonagall",
    ["mcgonagall", "minerva mcgonagall", "minerva"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Öğretmen hikayesi"],
    ["Sivri şapka", "Cübbe", "Ciddi duruş"],
    ["Profesör", "Bina başkanı", "Animagus"],
    ["Kediye dönüşebilir", "Disiplinli ama adil öğretmendir", "Hogwarts savunmasında öne çıkar"]
  ),

  m(
    3143,
    "Rubeus Hagrid",
    ["hagrid", "rubeus hagrid"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Yaratıklar teması"],
    ["Dev cüsseli", "Gür sakal", "Kaba palto"],
    ["Yarı-dev", "Bekçi", "Yaratık bakıcısı"],
    ["Sihirli yaratıkları sever", "Harry Potter'ı büyü dünyasına götürür", "İyi kalpli ve duygusaldır"]
  ),

  m(
    3144,
    "Harley Quinn",
    ["harley", "harley quinn", "harleen quinzel"],
    ["Süper kahraman evreni", "Anti-kahraman ve suç teması", "Çizgi roman uyarlaması"],
    ["Renkli saçlar", "Çılgın kıyafetler", "Beyzbol sopası"],
    ["Anti-kahraman", "Eski psikiyatrist", "Kaotik figür"],
    ["Joker ile bağlantılıdır", "Özgür ve kaotik tavrıyla bilinir", "Gotham evreninde öne çıkar"]
  ),

  m(
    3145,
    "Black Panther",
    ["black panther", "t'challa", "tchalla", "kara panter"],
    ["Süper kahraman filmi", "Afrika fütürizmi", "Çizgi roman uyarlaması"],
    ["Siyah panter kostümü", "Vibranyum zırh", "Kral görünümü"],
    ["Kral", "Süper kahraman", "Savaşçı"],
    ["Wakanda ile bağlantılıdır", "Vibranyum teknolojisi kullanır", "Hem kral hem kahramandır"]
  ),

  m(
    3146,
    "Ivan Drago",
    ["ivan drago", "drago"],
    ["Spor filmi", "Boks serisi", "Soğuk savaş teması"],
    ["Sarı kısa saç", "Uzun boylu", "Kaslı vücut", "Sovyet şortu"],
    ["Boksör", "Antagonist", "Sibirya eğitimli"],
    ["'Eğer ölürse ölür' repliği", "İnsanüstü gücü var", "Rocky'nin en büyük düşmanlarından"]
  ),

  m(
    3147,
    "Apollo Creed",
    ["apollo", "apollo creed"],
    ["Spor filmi", "Boks serisi", "Efsanevi şampiyon"],
    ["Renkli boks şortları", "Kıvırcık saç", "Karakteristik gülüş"],
    ["Boksör", "Şampiyon", "Rocky'nin arkadaşı"],
    ["'Amerika'nın şampiyonu'", "Rocky'ye mentorluk yapar", "Ringde karizmatik"]
  ),

  m(
    3148,
    "Clubber Lang",
    ["clubber lang"],
    ["Spor filmi", "Boks serisi", "Agresif boksör"],
    ["Mohawk saç", "Halkalı küpe", "Öfkeli bakışlar"],
    ["Boksör", "Antagonist", "Sokak dövüşçüsü"],
    ["Mr. T canlandırmıştır", "Sürekli bağırarak konuşur", "Rocky'yi nakavt etmiştir"]
  ),

  m(
    3149,
    "Anton Chigurh",
    ["anton chigurh", "chigurh"],
    ["Suç gerilim", "Western tarzı modern suç", "Kaotik seri katil"],
    ["Kase saç kesimi", "Sessiz tavırlar", "Havalı tüfek (captor)"],
    ["Seri katil", "Tetikçi", "Kaderin temsilcisi"],
    ["Yazı tura atarak karar verir", "İfadesiz yüzüyle bilinir", "İzini asla bırakmaz"]
  ),

  m(
    3150,
    "Jules Winnfield",
    ["jules", "jules winnfield"],
    ["Suç kült filmi", "Tarantino dünyası"],
    ["Siyah takım elbise", "Kıvırcık afro saç", "Göz alıcı cüzdan"],
    ["Tetikçi", "Mafya elemanı", "Dini aydınlanma yaşayan adam"],
    ["'Ezekiel 25:17' ayetini okur", "Vincent Vega'nın partneri", "Hamburgerden nefret eder"]
  ),

  m(
    3151,
    "Mia Wallace",
    ["mia", "mia wallace"],
    ["Suç kült filmi", "Tarantino dünyası"],
    ["Küt siyah saç", "Beyaz gömlek", "Sigara", "Siyah pantolon"],
    ["Mafya eşi", "Dansçı", "Gizemli kadın"],
    ["Vincent Vega ile dans eder", "Aşırı doz sahnesiyle bilinir", "Marcellus Wallace'ın karısı"]
  ),

  m(
    3152,
    "Butch Coolidge",
    ["butch", "butch coolidge"],
    ["Suç kült filmi", "Tarantino dünyası"],
    ["Deri ceket", "Yaralı yüz", "Boksör fiziği"],
    ["Boksör", "Firari", "Karakter"],
    ["Maçı satmayı reddeder", "Marcellus Wallace'a ihanet eder", "Samuray kılıcı kullanır"]
  ),

  m(
    3153,
    "The Dude",
    ["the dude", "jeffrey lebowski"],
    ["Komedi", "Kült film", "Bowling teması"],
    ["Sabahlık", "Terlik", "Güneş gözlüğü", "Uzun saç"],
    ["Aylak", "Bowling oyuncusu"],
    ["Beyaz Rus (White Russian) içer", "Halı çok önemlidir", "Çok rahattır"]
  ),

  m(
    3154,
    "Walter Sobchak",
    ["walter", "walter sobchak"],
    ["Komedi", "Kült film", "Bowling teması"],
    ["Askeri yelek", "Gözlük", "Sert duruş"],
    ["Vietnam gazisi", "Bowling oyuncusu", "Sinirli adam"],
    ["Kurallara aşırı takıntılı", "Her şeyi Vietnam'a bağlar", "Silah taşır"]
  ),

  m(
    3155,
    "Donny Kerabatsos",
    ["donny"],
    ["Komedi", "Kült film", "Bowling teması"],
    ["Bowling forması", "Şaşkın yüz ifadesi"],
    ["Bowling oyuncusu", "Sessiz eleman"],
    ["Sürekli 'Ne dedin Walter?' diye sorar", "Sürekli susturulur", "Saf kalplidir"]
  ),

  m(
    3156,
    "Gandalf'ın Asası",
    ["gandalfın asası", "asa"],
    ["Fantastik seri", "Orta Dünya eşyası"],
    ["Uzun, kıvrımlı ahşap", "Üstünde kristal/ışık taşır"],
    ["Büyü aracı", "Sembol"],
    ["Balrog ile dövüşürken kullanır", "Işık saçar", "Gandalf'ın ayrılmaz parçasıdır"]
  ),

  m(
    3157,
    "Gollum'un Balığı",
    ["çiğ balık", "balık", "fish"],
    ["Fantastik seri", "Orta Dünya yemeği"],
    ["Çiğ, vıcık vıcık balık"],
    ["Yiyecek", "İkonik Gollum yemeği"],
    ["Gollum'un favorisidir", "'Çok sulu ve lezzetli' der", "Yüzükten daha çok sever"]
  ),

  m(
    3158,
    "Smaug",
    ["smaug"],
    ["Fantastik seri", "Orta Dünya ejderhası"],
    ["Devasa kırmızı pullar", "Altın gözler", "Kanatlar"],
    ["Ejderha", "Antagonist", "Hazine koruyucusu"],
    ["Altınların üzerinde uyur", "Ateş püskürtür", "Çok zeki ve kibirlidir"]
  ),

  m(
    3159,
    "Galadriel",
    ["galadriel"],
    ["Fantastik seri", "Orta Dünya elf kraliçesi"],
    ["Uzun gümüşi saçlar", "Beyaz uzun elbiseler", "Işıltılı görünüm"],
    ["Elf kraliçesi", "Yol gösterici", "Güçlü karakter"],
    ["Yüzüğün cazibesine karşı koyar", "Telepatiye sahiptir", "Lothlorien'in yöneticisidir"]
  ),

  m(
    3160,
    "Elrond",
    ["elrond"],
    ["Fantastik seri", "Orta Dünya elf lideri"],
    ["Uzun koyu saç", "Elf zırhı", "Ciddi yüz ifadesi"],
    ["Elf kralı", "Bilge", "Konsey lideri"],
    ["Ayrıkvadi'nin yöneticisidir", "Arwen'in babasıdır", "Yüzük kardeşliğini kurar"]
  ),

  m(
    3161,
    "Arwen",
    ["arwen"],
    ["Fantastik seri", "Orta Dünya elf prensesi"],
    ["Uzun siyah saç", "Zarif elbiseler", "Kraliyet takıları"],
    ["Elf prensesi", "Aşık", "Koruyucu"],
    ["Aragorn ile aşk yaşar", "Ölümlü olmayı seçer", "Işık saçan güzelliğe sahiptir"]
  ),

  m(
    3162,
    "Éowyn",
    ["eowyn"],
    ["Fantastik seri", "Orta Dünya savaşçısı"],
    ["Savaşçı kıyafeti", "Pelerin", "Kılıç"],
    ["Savaşçı", "Rohan prensesi", "Kalkan kızı"],
    ["Cadı Kral'ı öldürür", "'Ben bir erkek değilim' repliği", "Cesur bir savaşçıdır"]
  ),

  m(
    3163,
    "Theoden",
    ["theoden"],
    ["Fantastik seri", "Orta Dünya kralı"],
    ["Kraliyet zırhı", "Gümüş saçlar", "Sakallı görünüm"],
    ["Kral", "Lider", "Savaşçı"],
    ["Rohan kralıdır", "Zihin kontrolünden kurtulur", "Pelennor çayırlarında ölür"]
  ),

  m(
    3164,
    "Faramir",
    ["faramir"],
    ["Fantastik seri", "Orta Dünya savaşçısı"],
    ["Gondor zırhı", "Pelerin", "Kılıç"],
    ["Komutan", "Gondor prensi", "Boromir'in kardeşi"],
    ["Babası tarafından azarlanır", "Yüzüğü elinin tersiyle iter", "Bilge bir savaşçıdır"]
  ),

  m(
    3165,
    "Saruman",
    ["saruman"],
    ["Fantastik seri", "Orta Dünya büyücüsü"],
    ["Beyaz cübbe", "Uzun beyaz sakal", "Asa"],
    ["Büyücü", "Antagonist", "İhanet eden figür"],
    ["Isengard'da yaşar", "Uruk-hai ordusunu kurar", "Gandalf'ın düşmanıdır"]
  ),

  m(
    3166,
    "Uruk-hai",
    ["uruk-hai"],
    ["Fantastik seri", "Orta Dünya askeri"],
    ["Siyah boyalı yüz", "Demir zırh", "Devasa boy"],
    ["Savaşçı", "Ordu üyesi"],
    ["Saruman'ın askerleridir", "Gündüz de savaşabilirler", "Korkutucudurlar"]
  ),

  m(
    3167,
    "Bilbo Baggins",
    ["bilbo", "bilbo baggins"],
    ["Fantastik seri", "Orta Dünya maceracısı"],
    ["Hobbit kıyafetleri", "Yaşlı yüz", "Yüzük"],
    ["Macera tutkunu", "Hobbit", "Yazar"],
    ["Yüzüğü ilk bulan hobbit", "Ejderha hazinesine gider", "Yaşlı ve bilge"]
  ),

  m(
    3168,
    "Pippin",
    ["pippin", "peregrin took"],
    ["Fantastik seri", "Orta Dünya hobbiti"],
    ["Kıvırcık saç", "Hobbit kıyafetleri", "Meraklı bakışlar"],
    ["Hobbit", "Yoldaş", "Yaramaz"],
    ["Merry'nin yancısıdır", "Gondor'da muhafız olur", "Sürekli başını derde sokar"]
  ),

  m(
    3169,
    "Merry",
    ["merry", "meriadoc brandybuck"],
    ["Fantastik seri", "Orta Dünya hobbiti"],
    ["Kıvırcık saç", "Hobbit kıyafetleri"],
    ["Hobbit", "Yoldaş", "Savaşçı"],
    ["Pippin ile ayrılmaz ikilidir", "Cadı Kral'ın düşüşüne yardım eder", "Braveheart ruhludur"]
  ),

  m(
    3170,
    "Tom Riddle (Genç)",
    ["tom riddle"],
    ["Fantastik büyücülük serisi", "Geçmiş hikayesi"],
    ["Okul üniforması", "Siyah saç", "Zeki bakış"],
    ["Öğrenci", "Karanlık geleceğin lideri"],
    ["Hogwarts öğrencisidir", "Sırlar Odası'nı açar", "Voldemort'un genç halidir"]
  ),

  m(
    3171,
    "Sirius'un Motoru",
    ["siriusun motoru", "motor"],
    ["Fantastik büyücülük serisi", "Hagrid'in aracı"],
    ["Uçan motosiklet", "Yan sepetli"],
    ["Araç", "Eşya"],
    ["Harry'yi bebekken taşır", "Sirius'a aittir", "Büyülü uçuş özelliği vardır"]
  ),

  m(
    3172,
    "Draco Malfoy",
    ["draco", "draco malfoy"],
    ["Fantastik büyücülük serisi", "Okul rekabeti"],
    ["Platin sarı saç", "Okul cübbesi", "Kibirli yüz"],
    ["Öğrenci", "Zengin aile çocuğu", "Düşman"],
    ["Slytherin üyesidir", "Harry ile sürekli rekabet eder", "Babasıyla bağlantılıdır"]
  ),

  m(
    3173,
    "Neville Longbottom",
    ["neville", "neville longbottom"],
    ["Fantastik büyücülük serisi", "Okul öğrencisi"],
    ["Kekeme/utangaç duruş", "Okul forması", "Zamanla değişen tarz"],
    ["Öğrenci", "Kahraman dönüşümü"],
    ["Gryffindor üyesidir", "Gryffindor kılıcını çeker", "Dönüşümüyle ünlüdür"]
  ),

  m(
    3174,
    "Luna Lovegood",
    ["luna", "luna lovegood"],
    ["Fantastik büyücülük serisi", "Okul öğrencisi"],
    ["Eksantrik aksesuarlar", "Renkli görünüm", "Rüya gibi bakış"],
    ["Öğrenci", "Arkadaş", "Dışlanmış"],
    ["Tuhaf yaratıklara inanır", "Ravenclaw üyesidir", "Çok kendine hastır"]
  ),

  m(
    3175,
    "Bellatrix Lestrange",
    ["bellatrix", "bellatrix lestrange"],
    ["Fantastik büyücülük serisi", "Ölüm yiyen"],
    ["Dağınık siyah saç", "Koyu makyaj", "Çılgın bakış"],
    ["Ölüm yiyen", "Antagonist", "Sadık takipçi"],
    ["Voldemort'a aşırı sadıktır", "Çılgın kahkahasıyla bilinir", "Sirius'un katilidir"]
  ),

  m(
    3176,
    "Dobby'nin Çorabı",
    ["çorap"],
    ["Fantastik büyücülük serisi", "Dobby eşyası"],
    ["Eski kirli çorap"],
    ["Sembol", "Özgürlük aracı"],
    ["Dobby'yi özgürleştirir", "Lucius Malfoy'un eline verilir", "Kült bir nesnedir"]
  ),

  m(
    3177,
    "Buckbeak",
    ["buckbeak", "hipogrif"],
    ["Fantastik büyücülük serisi", "Sihirli yaratık"],
    ["Yarı at yarı kartal", "Kanatlar", "Keskin gaga"],
    ["Yaratık", "Binek"],
    ["Harry binmiştir", "Hagrid'in evcil hayvanıdır", "Onuruna çok düşkündür"]
  ),

  m(
    3178,
    "Sorting Hat",
    ["seçmen şapka"],
    ["Fantastik büyücülük serisi", "Hogwarts eşyası"],
    ["Eski yamalı şapka", "Yüz hatları"],
    ["Karar verici", "Nesne"],
    ["Öğrencileri binalara ayırır", "Hogwarts kurucularına aittir", "Konuşabilir"]
  ),

  m(
    3179,
    "Golden Snitch",
    ["altın snitch", "snitch"],
    ["Fantastik büyücülük serisi", "Quidditch oyunu"],
    ["Altın renkli top", "Ufak kanatlar"],
    ["Oyun aracı", "Zor yakalanan nesne"],
    ["Quidditch maçının kaderini belirler", "Çok hızlıdır", "Harry tarafından yutulmuştur (ilk maçta)"]
  ),

  m(
    3180,
    "Firebolt",
    ["firebolt", "ateş oku"],
    ["Fantastik büyücülük serisi", "Süpürge"],
    ["Modern, hızlı görünümlü süpürge"],
    ["Ulaşım aracı", "Spor aracı"],
    ["Harry'nin en iyi süpürgesidir", "Çok pahalıdır", "Quidditch için idealdir"]
  ),

  m(
    3181,
    "Dementor",
    ["ruh emici", "dementor"],
    ["Fantastik büyücülük serisi", "Karanlık yaratık"],
    ["Siyah pelerin", "Yüzsüz", "Soğuk etkisi"],
    ["Yaratık", "Gardiyan", "Mutluluk hırsızı"],
    ["Mutluluğu emer", "Patronus büyüsüyle kovulur", "Azkaban bekçileridir"]
  ),

  m(
    3182,
    "Fawkes",
    ["fawkes", "anka kuşu"],
    ["Fantastik büyücülük serisi", "Sihirli yaratık"],
    ["Kırmızı alevli tüyler", "Parlak renkler"],
    ["Yaratık", "Dumbledore'un yoldaşı"],
    ["Ölüp yeniden doğar", "Gözyaşları iyileştiricidir", "Dumbledore'a sadıktır"]
  ),

  m(
    3183,
    "Borgin and Burkes",
    ["borgin ve burkes"],
    ["Fantastik büyücülük serisi", "Karanlık sanatlar dükkanı"],
    ["Karanlık ve tozlu ortam"],
    ["Mekan", "Ticaret noktası"],
    ["Karanlık objeler satılır", "Draco sık gider", "Hırsızlar uğrak yeridir"]
  ),

  m(
    3184,
    "Diagon Alley",
    ["diagon yolu"],
    ["Fantastik büyücülük serisi", "Büyülü sokak"],
    ["Hareketli dükkanlar", "Büyülü atmosfer"],
    ["Alışveriş alanı", "Pazar"],
    ["Asa buradan alınır", "Hogwarts hazırlığı burada yapılır", "Gizli geçitlerden girilir"]
  ),

  m(
    3185,
    "Privet Drive 4",
    ["privet drive"],
    ["Fantastik büyücülük serisi", "Harry'nin evi"],
    ["Sıradan banliyö evi"],
    ["Mekan", "Düşman evi"],
    ["Dursley'ler yaşar", "Harry burada mutsuzdur", "Kupkuru bir yerdir"]
  ),

  m(
    3186,
    "Hogwarts Express",
    ["hogwarts express"],
    ["Fantastik büyücülük serisi", "Tren"],
    ["Kırmızı buharlı tren"],
    ["Araç", "Okul yolu"],
    ["9 3/4 peronundan kalkar", "Öğrencileri okula taşır", "Sürekli aksiyon yaşanır"]
  ),

  m(
    3187,
    "Sirius'un Köpek Formu",
    ["padfoot", "köpek"],
    ["Fantastik büyücülük serisi", "Animagus"],
    ["Büyük siyah köpek"],
    ["Dönüşüm", "Hayvan formu"],
    ["Sirius'un formudur", "Harry'yi korkutmuştur", "Kaçarken kullanır"]
  ),

  m(
    3188,
    "Marauder's Map",
    ["çapulcu haritası"],
    ["Fantastik büyücülük serisi", "Büyülü harita"],
    ["Eski parşömen", "Hareketli mürekkep izleri"],
    ["Nesne", "Gizli harita"],
    ["'Yemin ederim ki hayırlı bir işim yok' repliği", "Hogwarts'ı gösterir", "James ve arkadaşlarına aittir"]
  ),

  m(
    3189,
    "Polyjuice Potion",
    ["çok özlü iksir"],
    ["Fantastik büyücülük serisi", "İksir"],
    ["Çamurlu renkli sıvı"],
    ["İksir", "Dönüşüm aracı"],
    ["Başkasına dönüşmeye yarar", "Kötü tadı vardır", "Saç teli gerekir"]
  ),

  m(
    3190,
    "Peter Pettigrew",
    ["peter pettigrew", "kılkuyruk"],
    ["Fantastik büyücülük serisi", "Fare formunda hain"],
    ["Fare", "Dökük kıyafetler"],
    ["Hain", "Fare (Animagus)"],
    ["Kılkuyruk olarak bilinir", "Voldemort'a döner", "Ron'un faresiydi"]
  ),

  m(
    3191,
    "Remus Lupin",
    ["remus lupin", "lupin"],
    ["Fantastik büyücülük serisi", "Profesör"],
    ["Eskimiş kıyafetler", "Yorgun yüz"],
    ["Profesör", "Kurtadam"],
    ["Dönüşümlü kurtadamdır", "Harry'ye Patronus öğretir", "Marauder üyesidir"]
  ),

  m(
    3192,
    "Nymphadora Tonks",
    ["tonks"],
    ["Fantastik büyücülük serisi", "Auror"],
    ["Değişen saç renkleri"],
    ["Auror", "Metamorphmagus"],
    ["Görünüşünü değiştirebilir", "Lupin ile evlenir", "Sakar ama yeteneklidir"]
  ),

  m(
    3193,
    "Cedric Diggory",
    ["cedric", "cedric diggory"],
    ["Fantastik büyücülük serisi", "Öğrenci"],
    ["Hufflepuff cübbesi", "Sportif görünüm"],
    ["Öğrenci", "Turnuva yarışmacısı"],
    ["Triwizard turnuvasında yarışır", "Trajik ölümüyle bilinir", "Centilmendir"]
  ),

  m(
    3194,
    "Fleur Delacour",
    ["fleur", "fleur delacour"],
    ["Fantastik büyücülük serisi", "Öğrenci"],
    ["Gümüşi sarı saç", "Beauxbatons forması"],
    ["Öğrenci", "Yarışmacı"],
    ["Veela soyundan gelir", "Bill Weasley ile evlenir", "Zarif ve yeteneklidir"]
  ),

  m(
    3195,
    "Viktor Krum",
    ["viktor krum", "krum"],
    ["Fantastik büyücülük serisi", "Öğrenci"],
    ["Sert yüz ifadesi", "Dursturm cübbesi"],
    ["Öğrenci", "Quidditch oyuncusu"],
    ["Dünya çapında (seeker) arayıcıdır", "Hermione'yi dansa davet eder", "Güçlüdür"]
  ),

  m(
    3196,
    "Recep İvedik",
    ["recep ivedik", "recep"],
    ["Türk komedi serisi", "Absürt mizah", "Mahalle ve yolculuk hikayeleri"],
    ["Eşofman", "Kirli sakal", "Sert bakış", "Rahat tavırlar"],
    ["Ana karakter", "Komik anti-kahraman"],
    ["Patavatsız konuşmalarıyla bilinir", "Sakarlıkları olay yaratır", "Kendi kurallarına göre yaşar"]
  ),

  m(
    3197,
    "Nurullah Çelebi",
    ["nurullah", "nurullah celebi", "recep'in arkadaşı"],
    ["Türk komedi serisi", "Recep İvedik evreni", "Yol arkadaşı teması"],
    ["Saf yüz ifadesi", "Sade kıyafetler", "Çekingen duruş"],
    ["Yardımcı karakter", "Arkadaş", "Komik yancı"],
    ["Ana karakterin yanında sık sık zor durumda kalır", "Saflığıyla öne çıkar", "Komedi temposunu yükseltir"]
  ),

  m(
    3198,
    "Hüseyin Badem",
    ["hüseyin badem", "huseyin badem", "hüseyin", "huseyin"],
    ["Türk komedi filmi", "Ege atmosferi", "Müzik ve aile hikayesi"],
    ["Kıvırcık saç", "Samimi köy/kasaba görünümü", "Klarnetle hatırlanır"],
    ["Müzisyen", "Ana karakter", "Aile bağını arayan genç"],
    ["Klarnet çalar", "Ege şivesiyle konuşur", "Sıcak ve saf tavrıyla bilinir"]
  ),

  m(
    3199,
    "Firuzan",
    ["firuzan"],
    ["Türk komedi filmi", "Müzik ve sahne dünyası", "Ege hikayesi"],
    ["Sahne kıyafetleri", "Güçlü kadın imajı", "Renkli görünüm"],
    ["Şarkıcı", "Anne figürü", "Merkez karakterlerden biri"],
    ["Sahne enerjisiyle öne çıkar", "Hüseyin Badem ile güçlü bağı vardır", "Hikayeye duygusal yön verir"]
  ),

  m(
    3200,
    "Deli Emin",
    ["deli emin", "emin"],
    ["Türk taşra komedisi", "Vizontele atmosferi", "Televizyonun gelişi hikayesi"],
    ["Dağınık saç", "Kasaba insanı görünümü", "Meraklı bakış"],
    ["Kasabalı", "Mucit ruhlu karakter", "Komik figür"],
    ["Teknolojiye meraklıdır","şerefsizim benim aklıma gelmişti" ,"Kasabanın değişimine eşlik eder", "Naifliğiyle hatırlanır"]
  ),

  m(
    3201,
    "Nazmi Doğan",
    ["nazmi", "nazmi doğan", "nazmi dogan"],
    ["Türk taşra komedisi", "Vizontele atmosferi", "Kasaba yönetimi"],
    ["Ciddi yüz", "Resmi kıyafetler", "Kasaba yöneticisi havası"],
    ["Belediye başkanı", "Yerel lider", "Komedi karakteri"],
    ["Kasabasını modernleştirmeye çalışır", "Televizyon meselesinde öne çıkar", "Ciddi tavrı komedi yaratır"]
  ),

  m(
    3202,
    "Asım Noyan",
    ["asım noyan", "asim noyan", "asım", "asim"],
    ["Türk suç komedisi", "İstanbul dolandırıcılık hikayesi", "Organize işler teması"],
    ["Karizmatik duruş", "Şık ama rahat kıyafetler", "Kurnaz bakış"],
    ["Dolandırıcı", "Ekip lideri", "Baba figürü"],
    ["Plan kurmayı sever", "Ekibini yönetir", "Kurnazlığıyla öne çıkar"]
  ),

  m(
    3203,
    "Süpermen Samet",
    ["süpermen samet", "supermen samet", "samet"],
    ["Türk suç komedisi", "Organize işler teması", "Şehir komedisi"],
    ["Süper kahraman kostümü", "Komik duruş", "Sokak performansı havası"],
    ["Yardımcı karakter", "Ekip elemanı", "Komik figür"],
    ["Lakabıyla hatırlanır", "Ekip içindeki renkli karakterlerden biridir", "Saf ve komik enerjisi vardır"]
  ),

  m(
    3204,
    "İskender Tünaydın",
    ["iskender tünaydın", "iskender tunaydin", "iskender"],
    ["Türk dram komedisi", "Sihirbazlık ve baba-oğul hikayesi", "Hokkabaz atmosferi"],
    ["Sahne kostümü", "Yorgun ama inatçı yüz", "Sihirbaz aksesuarları"],
    ["Sihirbaz", "Ana karakter", "Hayalinin peşinden giden adam"],
    ["Sahneye tutunmaya çalışır", "Babasıyla çatışmalı ilişkisi vardır", "Duygusal ve komik tarafı güçlüdür"]
  ),

  m(
    3205,
    "Maradona (Hokkabaz)",
    ["maradona", "hokkabaz maradona"],
    ["Türk dram komedisi", "Sihirbazlık hikayesi", "Yolculuk teması"],
    ["Yardımcı sahne ekibi görünümü", "Sade kıyafetler", "Komik yüz ifadeleri"],
    ["Asistan", "Yol arkadaşı", "Komik yancı"],
    ["İskender'in yanında sahne alır", "Dostluğu ve sadakatiyle öne çıkar", "Sıcak komedi hissi verir"]
  ),

  m(
    3206,
    "Aziz Vefa",
    ["aziz vefa", "aziz"],
    ["Türk western komedisi", "Osmanlı temsilcileri ve Amerika yolculuğu", "Yahşi Batı atmosferi"],
    ["Osmanlı kıyafeti", "Bıyık", "Kovboy dünyasına uyumsuz görünüm"],
    ["Elçi", "Ana karakter", "Macera kahramanı"],
    ["Vahşi Batı'ya uyum sağlamaya çalışır", "Lemi Galip ile ikili oluşturur", "Kültür çatışması komedisi yaratır"]
  ),

  m(
    3207,
    "Lemi Galip",
    ["lemi galip", "lemi"],
    ["Türk western komedisi", "Osmanlı ve Vahşi Batı parodisi", "Macera filmi"],
    ["Osmanlı kıyafeti", "Şaşkın yüz", "Yolculuk görünümü"],
    ["Elçi", "Yardımcı ana karakter", "Komik yol arkadaşı"],
    ["Aziz Vefa ile birlikte göreve çıkar", "Saf ve komik tavırlarıyla öne çıkar", "Batı dünyasına uyumda zorlanır"]
  ),

  m(
    3208,
    "Baran",
    ["baran", "eşkıya baran", "eskiya baran"],
    ["Türk dram filmi", "Eşkıya ve şehir hikayesi", "Dostluk ve geçmiş teması"],
    ["Yorgun yüz", "Koyu kıyafetler", "Eski dünyanın adamı görünümü"],
    ["Eski eşkıya", "Ana karakter", "Geçmişini arayan adam"],
    ["Hapisten çıktıktan sonra İstanbul'a gelir", "Eski dostluk ve ihanetlerle yüzleşir", "Duygusal ağırlığı yüksek karakterdir"]
  ),

  m(
    3209,
    "Cumali",
    ["cumali"],
    ["Türk dram filmi", "Eşkıya ve şehir hikayesi", "Genç sokak karakteri"],
    ["Genç ve asi görünüm", "Sokak tarzı kıyafetler", "Hareketli tavırlar"],
    ["Genç suçlu", "Yol arkadaşı", "Şehir çocuğu"],
    ["Baran ile güçlü bir bağ kurar", "İstanbul'un sert yüzünü temsil eder", "Enerjik ve kırılgan bir karakterdir"]
  ),

  m(
    3210,
    "Sadık",
    ["sadık", "sadik", "babam ve oğlum sadık", "babam ve oglum sadik"],
    ["Türk dram filmi", "Aile ve geçmişle hesaplaşma", "Ege atmosferi"],
    ["Yorgun yüz", "Baba görünümü", "Sade kıyafetler"],
    ["Baba", "Evlat", "Ana karakter"],
    ["Oğluyla birlikte baba evine döner", "Geçmişteki kırgınlıklarla yüzleşir", "Duygusal hikayenin merkezindedir"]
  ),

  m(
    3211,
    "Hüseyin Efendi",
    ["hüseyin efendi", "huseyin efendi", "hüseyin", "huseyin"],
    ["Türk dram filmi", "Aile ve baba-oğul çatışması", "Ege köy atmosferi"],
    ["Yaşlı baba görünümü", "Sert yüz", "Köy kıyafetleri"],
    ["Baba", "Aile reisi", "Sert ama duygusal figür"],
    ["Oğluyla kırgınlığı vardır", "Torunuyla yumuşar", "Duygusal dönüşümüyle öne çıkar"]
  ),

  m(
    3212,
    "Ali Osman",
    ["ali osman", "kabadayı ali osman", "kabadayi ali osman"],
    ["Türk suç draması", "Eski kabadayı dünyası", "Onur ve aile teması"],
    ["Takım elbise", "Sert duruş", "Eski usul kabadayı görünümü"],
    ["Kabadayı", "Koruyucu", "Baba figürü"],
    ["Eski değerleri temsil eder", "Sevdiklerini korumaya çalışır", "Modern suç dünyasıyla çatışır"]
  ),

  m(
    3213,
    "Devran",
    ["devran"],
    ["Türk suç draması", "Modern mafya dünyası", "Kabadayı çatışması"],
    ["Şık takım elbise", "Soğuk yüz", "Tehlikeli lider görünümü"],
    ["Antagonist", "Suç lideri", "Yeni düzen temsilcisi"],
    ["Ali Osman'ın karşısında yer alır", "Acımasız tavrıyla öne çıkar", "Güç ve kontrol peşindedir"]
  ),

  m(
    3214,
    "Süleyman Dilbirliği",
    ["süleyman dilbirliği", "suleyman dilbirligi", "süleyman", "suleyman"],
    ["Türk dram filmi", "Kore Savaşı ve aile bağı", "Gerçek olaylardan esinlenen hikaye"],
    ["Asker üniforması", "Sıcak ve koruyucu yüz", "Duygusal duruş"],
    ["Asker", "Baba figürü", "Koruyucu"],
    ["Küçük bir kızla güçlü bağ kurar", "Savaş ortamında insanlığı temsil eder", "Duygusal hikayesiyle bilinir"]
  ),

  m(
    3215,
    "Ayla",
    ["ayla", "koreli ayla"],
    ["Türk dram filmi", "Savaş ve aile bağı", "Gerçek olaylardan esinlenen hikaye"],
    ["Küçük kız çocuğu", "Sade kıyafetler", "Masum bakış"],
    ["Çocuk karakter", "Duygusal merkez", "Kayıp kız"],
    ["Süleyman ile baba-kız gibi bağ kurar", "Savaşın ortasında umut sembolüdür", "İsmini askerlerden alır"]
  ),

  m(
    3216,
    "Asya",
    ["asya", "selvi boylum asya"],
    ["Türk romantik dram filmi", "Aşk ve emek teması", "Anadolu atmosferi"],
    ["Al yazma", "Sade Anadolu kadını görünümü", "Duygusal bakış"],
    ["Ana kadın karakter", "Anne", "Aşk üçgenindeki figür"],
    ["Aşk ve güven arasında seçim yapar", "İlyas ve Cemşit ile bağlantılıdır", "Türk sinemasının ikonik kadın karakterlerindendir"]
  ),

  m(
    3217,
    "İlyas",
    ["ilyas", "selvi boylum ilyas"],
    ["Türk romantik dram filmi", "Kamyoncu ve aşk hikayesi", "Anadolu yolları"],
    ["Kamyoncu görünümü", "Genç ve karizmatik yüz", "Sade kıyafetler"],
    ["Kamyoncu", "Aşık erkek", "Merkez karakter"],
    ["Asya ile büyük aşk yaşar", "Tutkulu ama dengesiz tarafları vardır", "Kamyonuyla hatırlanır"]
  ),

  m(
    3218,
    "Cemşit",
    ["cemşit", "cemsit"],
    ["Türk romantik dram filmi", "Aile ve emek teması", "Anadolu hikayesi"],
    ["Sade ve güven veren görünüm", "Çalışkan erkek imajı"],
    ["Koruyucu", "Baba figürü", "Aşk üçgenindeki erkek"],
    ["Asya'ya güvenli bir hayat sunar", "Sevginin emek olduğunu temsil eder", "Sessiz ve fedakar tavrıyla bilinir"]
  ),

  m(
    3219,
    "Fikret",
    ["fikret", "aile arasında fikret", "aile arasinda fikret"],
    ["Türk komedi filmi", "Sahte aile ve düğün hikayesi", "Modern aile komedisi"],
    ["Sıradan baba görünümü", "Şaşkın yüz", "Takım elbise"],
    ["Sahte baba", "Ana karakter", "Komik figür"],
    ["Kendisini bir anda sahte aile düzeninin içinde bulur", "Düğün kaosunun merkezindedir", "Çekingen ama iyi niyetlidir"]
  ),

  m(
    3220,
    "Solmaz",
    ["solmaz", "aile arasında solmaz", "aile arasinda solmaz"],
    ["Türk komedi filmi", "Sahte aile ve düğün hikayesi", "Modern aile komedisi"],
    ["Sahne kadını tarzı", "Renkli kıyafetler", "Güçlü ve neşeli görünüm"],
    ["Anne", "Organizatör ruhlu karakter", "Komik lider"],
    ["Kızının düğünü için herkesi organize eder", "Fikret ile sahte aile düzeni kurar", "Enerjisiyle hikayeyi taşır"]
  ),

  m(
    3221,
    "Elizabeth Swann",
    ["elizabeth swann", "elizabeth"],
    ["Fantastik macera", "Korsan temalı seri", "Deniz savaşları ve hazine hikayesi"],
    ["Dönem elbiseleri", "Kılıç", "Zamanla korsan görünümü"],
    ["Valinin kızı", "Korsan lideri", "Macera kahramanı"],
    ["Will Turner ve Jack Sparrow ile bağlantılıdır", "Zamanla güçlü bir lidere dönüşür", "Korsan dünyasında söz sahibi olur"]
  ),

  m(
    3222,
    "Will Turner",
    ["will turner", "will"],
    ["Fantastik macera", "Korsan temalı seri", "Demirci ve deniz yolculuğu hikayesi"],
    ["Genç demirci görünümü", "Kılıç", "Dönem kıyafetleri"],
    ["Demirci", "Kılıç ustası", "Macera kahramanı"],
    ["Elizabeth Swann'a aşıktır", "Jack Sparrow ile zoraki ittifak kurar", "Denizcilik kaderiyle bağlantılıdır"]
  ),

  m(
    3223,
    "Hector Barbossa",
    ["barbossa", "hector barbossa", "captain barbossa"],
    ["Fantastik macera", "Korsan temalı seri", "Lanetli hazine hikayesi"],
    ["Geniş korsan şapkası", "Uzun palto", "Sert korsan yüzü"],
    ["Korsan kaptanı", "Rakip", "Zaman zaman müttefik"],
    ["Black Pearl ile bağlantılıdır", "Kurnaz ve deneyimli bir kaptandır", "Jack Sparrow ile rekabet eder"]
  ),

  m(
    3224,
    "Max Rockatansky",
    ["max", "max rockatansky", "mad max"],
    ["Post-apokaliptik aksiyon", "Çöl ve araç kovalamacaları", "Distopik dünya"],
    ["Deri kıyafet", "Tozlu yüz", "Sert ve sessiz duruş"],
    ["Yalnız savaşçı", "Hayatta kalan", "Eski polis"],
    ["Çöl yollarında hayatta kalır", "Araç kovalamacalarıyla bilinir", "Az konuşan sert karakterdir"]
  ),

  m(
    3225,
    "Furiosa",
    ["furiosa", "imperator furiosa"],
    ["Post-apokaliptik aksiyon", "Çöl ve kaçış hikayesi", "Distopik dünya"],
    ["Kısa saç", "Mekanik kol", "Savaşçı görünüm"],
    ["Sürücü", "Lider", "Direnişçi"],
    ["Özgürlük için tehlikeli bir kaçış başlatır", "Sert ve kararlıdır", "Max ile yol arkadaşı olur"]
  ),

  m(
    3226,
    "William Wallace",
    ["william wallace", "braveheart"],
    ["Tarihi epik film", "Özgürlük mücadelesi", "İskoçya atmosferi"],
    ["Mavi savaş boyası", "Kılıç", "Savaşçı kıyafeti"],
    ["Savaşçı lider", "İsyancı", "Halk kahramanı"],
    ["Özgürlük temasıyla bilinir", "Ordusuna liderlik eder", "Epik savaş sahneleriyle hatırlanır"]
  ),

  m(
    3227,
    "Commodus",
    ["commodus"],
    ["Tarihi epik film", "Roma sarayı", "Gladyatör hikayesi"],
    ["Roma zırhı", "Şık saray kıyafetleri", "Kibirli yüz ifadesi"],
    ["İmparator", "Antagonist", "Güç hırsı olan figür"],
    ["Maximus'un karşısında yer alır", "Tahta ve güce takıntılıdır", "Kıskançlığıyla öne çıkar"]
  ),

  m(
    3228,
    "Andy Dufresne",
    ["andy dufresne", "andy"],
    ["Hapishane draması", "Umut ve dostluk teması", "Kült film"],
    ["Mahkum kıyafeti", "Sakin yüz", "Zeki ve sabırlı görünüm"],
    ["Mahkum", "Bankacı", "Umut figürü"],
    ["Sabırlı planlarıyla bilinir", "Red ile dostluk kurar", "Umut temasının merkezindedir"]
  ),

  m(
    3229,
    "Red Redding",
    ["red", "ellis redding", "red redding"],
    ["Hapishane draması", "Dostluk ve umut teması", "Kült film"],
    ["Mahkum kıyafeti", "Olgun ve sakin görünüm", "Bilge tavırlar"],
    ["Mahkum", "Anlatıcı", "Dost"],
    ["Andy Dufresne'in yakın dostudur", "Hapishanede bağlantılarıyla bilinir", "Sakin anlatımıyla hatırlanır"]
  ),

  m(
    3230,
    "Clarice Starling",
    ["clarice", "clarice starling"],
    ["Psikolojik gerilim", "FBI soruşturması", "Suç filmi"],
    ["Takım elbise", "Genç ajan görünümü", "Ciddi bakış"],
    ["FBI stajyeri", "Araştırmacı", "Ana karakter"],
    ["Hannibal Lecter ile görüşür", "Zekası ve cesaretiyle öne çıkar", "Zor bir soruşturmanın merkezindedir"]
  ),

  m(
    3231,
    "Annie Wilkes",
    ["annie wilkes", "annie"],
    ["Psikolojik gerilim", "Yazar ve hayran hikayesi", "Kapalı mekan atmosferi"],
    ["Hemşire görünümü", "Sakin ama tehditkar bakış", "Eski ev ortamı"],
    ["Hayran", "Bakıcı", "Antagonist"],
    ["Sevdiği yazara takıntılıdır", "Tatlı görünen ama korkutucu bir figürdür", "Gerilim atmosferini taşır"]
  ),

  m(
    3232,
    "Freddy Krueger",
    ["freddy", "freddy krueger"],
    ["Korku filmi", "Rüya ve kabus teması", "80'ler korku ikonu"],
    ["Çizgili kazak", "Fötr şapka", "Bıçaklı eldiven"],
    ["Korku ikonu", "Antagonist", "Kabus figürü"],
    ["Rüyalarda ortaya çıkar", "Alaycı ve tehditkar tavrıyla bilinir", "Kült korku karakteridir"]
  ),

  m(
    3233,
    "Jason Voorhees",
    ["jason", "jason voorhees"],
    ["Korku filmi", "Kamp atmosferi", "80'ler korku ikonu"],
    ["Hokey maskesi", "Büyük cüsse", "Sessiz duruş"],
    ["Korku ikonu", "Antagonist", "Takipçi figür"],
    ["Maskesiyle tanınır", "Göl kampı atmosferiyle bağlantılıdır", "Sessiz ve durdurulamaz görünür"]
  ),

  m(
    3234,
    "Michael Myers",
    ["michael myers", "michael"],
    ["Korku filmi", "Cadılar Bayramı atmosferi", "Kült slasher serisi"],
    ["Beyaz maske", "Koyu tulum", "Sessiz yürüyüş"],
    ["Korku ikonu", "Antagonist", "Takipçi figür"],
    ["Sessizliğiyle gerilim yaratır", "Maskesiyle kolayca tanınır", "Kült korku karakterlerinden biridir"]
  ),

  m(
    3235,
    "Ghostface",
    ["ghostface", "hayalet maske"],
    ["Korku filmi", "Meta slasher serisi", "Telefon ve maske teması"],
    ["Beyaz çığlık maskesi", "Siyah pelerin", "Telefonla bağlantılı imaj"],
    ["Maskeli figür", "Antagonist", "Korku ikonu"],
    ["Farklı kişiler tarafından kimliği üstlenilebilir", "Telefon konuşmalarıyla bilinir", "Korku kurallarını tiye alan evrendedir"]
  ),

  m(
    3236,
    "Dracula",
    ["dracula", "kont dracula", "count dracula"],
    ["Gotik korku", "Vampir efsanesi", "Klasik sinema ve edebiyat uyarlamaları"],
    ["Siyah pelerin", "Soluk yüz", "Asil vampir görünümü"],
    ["Vampir", "Kont", "Antagonist"],
    ["Şatoda yaşamasıyla bilinir", "Gece ve yarasa imajıyla bağlantılıdır", "Klasik korkunun en eski ikonlarındandır"]
  ),

  m(
    3237,
    "Lara Croft",
    ["lara croft", "lara"],
    ["Macera aksiyon filmi", "Hazine ve antik eser arayışı", "Oyun uyarlaması"],
    ["Atletik kıyafet", "İkili tabanca", "Kaşif ekipmanları"],
    ["Arkeolog", "Macera kahramanı", "Hazine avcısı"],
    ["Antik mezarları keşfeder", "Zekası ve çevikliğiyle öne çıkar", "Oyun dünyasından sinemaya geçmiştir"]
  ),

  m(
    3238,
    "Alice (Resident Evil)",
    ["alice", "resident evil alice"],
    ["Bilim kurgu korku aksiyon", "Salgın ve şirket komplosu", "Oyun uyarlaması"],
    ["Kırmızı elbise veya savaş kıyafeti", "Kısa saç", "Silahlı görünüm"],
    ["Savaşçı", "Hayatta kalan", "Ana karakter"],
    ["Umbrella Corporation ile mücadele eder", "Aksiyon sahneleriyle öne çıkar", "Seri boyunca güçlenir"]
  ),

  m(
    3239,
    "Caesar",
    ["caesar", "sezar"],
    ["Bilim kurgu filmi", "Maymunlar ve insanlık çatışması", "Liderlik hikayesi"],
    ["Şempanze görünümü", "Zeki bakış", "Savaş boyası ve mızrak"],
    ["Lider", "Devrimci", "Ana karakter"],
    ["Zeki maymunların lideridir", "İnsanlarla çatışmalı bir dünyada yaşar", "Aile ve özgürlük temalarıyla öne çıkar"]
  ),

  m(
    3240,
    "Godzilla",
    ["godzilla", "gojira"],
    ["Canavar filmi", "Şehir yıkımı ve doğa gücü teması", "Japon sinema ikonu"],
    ["Dev sürüngen beden", "Sırtında dikenler", "Mavi enerji efekti"],
    ["Dev canavar", "Doğa gücü", "Anti-kahraman"],
    ["Dev boyutuyla bilinir", "Nükleer çağ korkularıyla bağlantılıdır", "Bazen tehdit bazen koruyucu gibi görülür"]
  ),

  m(
    3241,
    "King Kong",
    ["king kong", "kong"],
    ["Canavar filmi", "Ada ve şehir hikayesi", "Klasik sinema ikonu"],
    ["Dev goril", "Güçlü beden", "Duygusal bakış"],
    ["Dev yaratık", "Trajik figür", "Koruyucu"],
    ["Gizemli ada ile bağlantılıdır", "Şehirde ikonik sahneleri vardır", "Güçlü ama duygusal bir karakterdir"]
  ),

  m(
    3242,
    "Atticus Finch",
    ["atticus", "atticus finch"],
    ["Mahkeme draması", "Adalet ve vicdan teması", "Klasik sinema"],
    ["Takım elbise", "Gözlük", "Sakin ve güven veren duruş"],
    ["Avukat", "Baba", "Ahlaki rehber"],
    ["Adalet duygusuyla bilinir", "Çocuklarına örnek olur", "Zor bir davada savunma yapar"]
  ),

  m(
    3243,
    "Edward Cullen",
    ["edward cullen", "edward"],
    ["Romantik fantastik film", "Vampir ve lise atmosferi", "Gençlik serisi"],
    ["Soluk ten", "Dağınık saç", "Gizemli bakış"],
    ["Vampir", "Aşık genç", "Koruyucu"],
    ["Bella Swan ile bağlantılıdır", "Güneşte parlamasıyla bilinir", "Gizemli ve mesafeli tavrıyla öne çıkar"]
  ),

  m(
    3244,
    "Bella Swan",
    ["bella", "bella swan"],
    ["Romantik fantastik film", "Vampir ve kurt adam üçgeni", "Gençlik serisi"],
    ["Sade lise öğrencisi görünümü", "Kahverengi saç", "Çekingen duruş"],
    ["Ana karakter", "Öğrenci", "Aşk üçgeninin merkezindeki figür"],
    ["Edward Cullen ile bağlantılıdır", "Forks kasabasında yaşar", "Fantastik dünyanın içine çekilir"]
  ),

  m(
    3245,
    "Katara",
    ["katara"],
    ["Fantastik macera filmi", "Element güçleri ve yolculuk teması", "Animasyon uyarlaması"],
    ["Mavi kıyafetler", "Uzun kahverengi saç", "Su bükme hareketleri"],
    ["Su bükücü", "Yol arkadaşı", "Koruyucu figür"],
    ["Su elementini kullanır", "Kardeşiyle birlikte yolculuğa çıkar", "Merhametli ve güçlü karakterdir"]
  ),


  m(
    3246,
    "Haşmet Kurt",
    ["haşmet", "hasmet", "haşmet kurt", "hasmet kurt"],
    ["Türk komedi filmi", "Aile Arasında", "Kız isteme ve düğün kaosu"],
    ["Ciddi aile büyüğü havası", "Takım elbise", "Sert ama komik yüz ifadesi"],
    ["Aile büyüğü", "Dede/baba karışıklığının merkezindeki karakter", "Komedi figürü"],
    ["Ailelerin karıştığı yanlış anlaşılmalarda kilit isimdir", "Haşmet Bey diye tanıtılmasıyla ortalık karışır", "Otoriter görünümü komediyi büyütür"]
  ),

  m(
    3247,
    "Gülümser",
    ["gülümser", "gulumser"],
    ["Türk komedi filmi", "Aile Arasında", "Düğün hazırlığı hikayesi"],
    ["Sahne ve eğlence dünyasına yakın tarz", "Renkli kıyafetler", "Neşeli duruş"],
    ["Aile üyesi", "Düğün taraflarından biri", "Komedi karakteri"],
    ["Aile Arasında'nın sıcak ve kaotik yan karakterlerindendir", "Düğün düzeninde yanlış anlaşılmaları büyütür", "Enerjik tavrıyla sahneleri hareketlendirir"]
  ),

  m(
    3248,
    "Behiye",
    ["behiye"],
    ["Türk komedi filmi", "Aile Arasında", "İki ailenin karşılaşması"],
    ["Sert ve kontrollü duruş", "Klasik aile büyüğü görünümü", "Dikkatli bakışlar"],
    ["Aile büyüğü", "Anne figürü", "Gerilimi komediye çeviren karakter"],
    ["Kız isteme ve düğün sürecindeki kaosun önemli taraflarından biridir", "Şüpheci tavrıyla sahneleri komikleştirir", "Haşmet Bey meselesinde atmosferi gerer"]
  ),

  m(
    3249,
    "Leyla",
    ["leyla"],
    ["Türk komedi filmi", "Aile Arasında", "Düğün ve aile yalanları"],
    ["saçlar yandan iki yana toplu", "Şaşkın bir sıfat afedersin", "şuursuz"],
    ["Aile tarafı karakteri", "Yanlış anlaşılmaları toparlamaya çalışan komik figür"],
    ["Okey okey benim açımdan bütün parçalar yerine oturdu siz devam edebilirsiniz","pot kırma diyince de sen be" ]
  ),

  m(
    3250,
    "Emirhan",
    ["emirhan"],
    ["Türk komedi filmi", "Aile Arasında", "Düğün hikayesi"],
    ["Genç damat görünümü", "Takım elbise", "Heyecanlı ve baskı altında duruş"],
    ["Damat adayı", "Aile kaosunun ortasındaki genç", "Romantik komedi figürü"],
    ["Zeynep ile evlilik planı hikayenin düğümünü kurar", "İki tarafın aile baskısı arasında kalır", "Düğün komedisinin merkezindeki gençlerden biridir"]
  ),

  m(
    3251,
    "Solmaz",
    ["solmaz"],
    ["Türk komedi filmi", "Aile Arasında", "Aile ve eğlence dünyası"],
    ["Rahat tavırlar", "Komik yüz ifadeleri", "Gündelik kıyafetler"],
    ["Yan karakter", "Komedi desteği", "Kalabalık aile düzeninin parçası"],
    ["ben oros*u değilim ağzını burnunu kırarım senin", "katarsis o annecim bana da olmuştu", "nerdesin fiko nerdesim :("]
  ),

  m(
    3252,
    "Ceku",
    ["ceku"],
    ["Türk bilim kurgu komedisi", "G.O.R.A.", "Uzay ve kaçış hikayesi"],
    ["Uzaylı prenses görünümü", "Fütüristik kıyafetler", "Zarif duruş"],
    ["Prenses", "Romantik merkez", "Arif'in yolculuğundaki kilit karakter"],
    ["Arif Işık ile bağlantılıdır", "G.O.R.A. gezegenindeki iktidar çatışmasının ortasındadır", "balım", "Türk bilim kurgu komedisinin unutulmaz kadın karakterlerinden biridir"]
  ),

  m(
    3253,
    "Garavel Usta",
    ["garavel", "garavel usta"],
    ["Türk bilim kurgu komedisi", "G.O.R.A.", "Usta-çırak ve kahramanlık parodisi"],
    ["Bilge usta görünümü", "Eski savaşçı havası", "Sakin ve öğretici tavır"],
    ["Mentor", "Eğitmen", "Bilge karakter"],
    ["Arif'e kahramanlık yolunda rehberlik eder", "nasıl tak diye buradayım, saniyede.", "Bilge ama komik tavrıyla öne çıkar"]
  ),

  m(
    3254,
    "Bob Marley Faruk",
    ["bob marley faruk", "faruk"],
    ["Türk bilim kurgu komedisi", "G.O.R.A.", "Uzay hapishanesi ve kaçış atmosferi"],
    ["Rasta saçlar", "Renkli kıyafetler", "Rahat ve absürt görünüm"],
    ["Yan karakter", "Mahkum/gezgin figür", "Komedi unsuru"],
    ["Lakabıyla bile akılda kalır", "G.O.R.A.'nın absürt yan karakterlerinden biridir", "Kısa sahnelerde bile komedi enerjisi verir"]
  ),

  m(
    3255,
    "Karga",
    ["karga", "arog karga"],
    ["Türk taş devri komedisi", "A.R.O.G.", "Zaman yolculuğu parodisi"],
    ["İlkel dönem kıyafetleri", "Sert yüz ifadesi", "Kabile atmosferi"],
    ["Kabile üyesi", "Komik yan karakter", "Taş devri figürü"],
    ["A.R.O.G.'un taş devri komedisindeki unutulmaz tiplerdendir", "Arif'in geçmiş çağdaki macerasına eşlik eder", "İlkel dünya ile modern akıl çatışmasını komikleştirir"]
  ),

  m(
    3256,
    "Taşo",
    ["taşo", "taso"],
    ["Türk taş devri komedisi", "A.R.O.G.", "İlkel çağ mizahı"],
    ["Taş devri kıyafeti", "Kaba saba ama komik duruş", "Kabile insanı görünümü"],
    ["Kabile üyesi", "Yan karakter", "Komedi figürü"],
    ["A.R.O.G.'un tarih öncesi mizahını taşıyan karakterlerdendir", "Adı bile taş devri parodisini güçlendirir", "Arif'in kurduğu düzenin parçası olur"]
  ),

  m(
    3257,
    "Kaaya",
    ["kaaya", "kaya"],
    ["Türk taş devri komedisi", "A.R.O.G.", "Kabile ve futbol parodisi"],
    ["İlkel kabile görünümü", "Sade kıyafetler", "Şaşkın yüz ifadeleri"],
    ["Kabile karakteri", "Yan figür", "Komedi destek karakteri"],
    ["Taş devri dünyasında modern fikirlerle karşılaşır", "Kabile düzeninin mizahi tarafını taşır", "A.R.O.G. atmosferinin renkli isimlerinden biridir"]
  ),

  m(
    3258,
    "Susan Van Dyke",
    ["susan", "susan van dyke"],
    ["Türk western komedisi", "Yahşi Batı", "Osmanlı elçileri ve Vahşi Batı"],
    ["Western dönemi elbiseleri", "Şık ve güçlü kadın duruşu", "Amerikan kasabası havası"],
    ["Kadın başrol", "Romantik figür", "Western karakteri"],
    ["Aziz Vefa ve Lemi Galip'in macerasında önemli yer tutar", "bıyıkları en az aziz vefa kadar enterandır, sırtı da aynı hamal hasan", "Vahşi Batı atmosferinin merkezindeki karakterlerdendir"]
  ),

  m(
    3259,
    "Şerif Lloyd",
    ["şerif lloyd", "serif lloyd", "lloyd"],
    ["Türk western komedisi", "Yahşi Batı", "Kasaba ve düello parodisi"],
    ["Şerif yıldızı", "Kovboy şapkası", "Western kanun adamı görünümü"],
    ["Şerif", "Kasaba otoritesi", "Komedi karakteri"],
    ["Yahşi Batı'nın western klişelerini tiye alan karakterlerindendir", "Osmanlı elçileriyle karşılaşınca kültür farkı komedisi doğar", "elması da sattım mıydı daha da burada benim tozunu bulamaz itooluitler"]
  ),

  m(
    3260,
    "Siti Ana",
    ["siti ana", "siti"],
    ["Türk taşra komedisi", "Vizontele", "Televizyonun kasabaya gelişi"],
    ["Anadolu kadını görünümü", "Başörtüsü", "Sert ama sıcak yüz"],
    ["Anne figürü", "Kasabalı", "Duygusal merkez"],
    ["Vizontele'nin kasaba sıcaklığını taşıyan karakterlerindendir", "Deli Emin'in dünyasını tamamlar", "Geleneksel aile atmosferini temsil eder"]
  ),

  m(
    3261,
    "Fikri",
    ["fikri", "vizontele fikri"],
    ["Türk taşra komedisi", "Vizontele", "Kasaba ve belediye hikayesi"],
    ["Kasaba insanı görünümü", "Sade kıyafetler", "Meraklı duruş"],
    ["Kasabalı", "Yan karakter", "Komedi figürü"],
    ["Televizyonun kasabaya gelişindeki merak duygusunu taşır", "Kalabalık kasaba kadrosunun renkli parçalarındandır", "Vizontele'nin yerel mizahını destekler"]
  ),

  m(
    3262,
    "Latif",
    ["latif", "vizontele latif"],
    ["Türk taşra komedisi", "Vizontele", "Kasaba kültürü"],
    ["Anadolu kasabalısı görünümü", "Sade kıyafetler", "Komik tepki yüzleri"],
    ["Kasabalı", "Yan karakter", "Yerel komedi unsuru"],
    ["Kasabanın televizyona verdiği tepkilerde öne çıkar", "Vizontele'nin topluluk komedisini güçlendirir", "Yerel ağız ve tavırlarla hatırlanır"]
  ),

  m(
    3263,
    "Sezai",
    ["sezai", "vizontele sezai"],
    ["Türk taşra komedisi", "Vizontele", "Belediye ve kasaba düzeni"],
    ["Resmi görevli havası", "Ciddi ama komik duruş", "Kasaba kıyafetleri"],
    ["Kasaba görevlisi", "Yan karakter", "Komedi figürü"],
    ["Nazmi Doğan'ın çevresindeki yerel düzeni tamamlar", "Ciddiyetle komedi arasında gidip gelir", "Vizontele'nin belediye mizahına katkı verir"]
  ),

  m(
    3264,
    "Müjgan",
    ["müjgan", "mujgan"],
    ["Türk komedi serisi", "Eyyvah Eyvah", "Ege ve müzik atmosferi"],
    ["Samimi kasaba görünümü", "Renkli ve doğal tarz", "Duygusal bakış"],
    ["Romantik figür", "Kasaba karakteri", "Hüseyin'in hayatındaki önemli isim"],
    ["Hüseyin Badem'in hikayesinde romantik tarafı güçlendirir", "Ege sıcaklığını taşır", "Serinin duygusal komedi dengesine katkı verir"]
  ),

  m(
    3265,
    "Ramiz",
    ["ramiz", "eyvah eyvah ramiz"],
    ["Türk komedi serisi", "Eyyvah Eyvah", "Müzik ve aile hikayesi"],
    ["Kasaba insanı görünümü", "Babacan tavırlar", "Komik ve telaşlı yüz"],
    ["Aile figürü", "Yan karakter", "Komedi destek karakteri"],
    ["Hüseyin Badem'in çevresindeki aile komedisini tamamlar", "Ege şivesi ve sıcaklığıyla öne çıkar", "Serinin kalabalık komedi kadrosunun parçasıdır"]
  ),

  m(
    3266,
    "Geyikli Memo",
    ["geyikli memo", "memo"],
    ["Türk komedi serisi", "Eyyvah Eyvah", "Ege kasabası ve müzik"],
    ["Kasaba esnafı/yerel tip havası", "Komik mimikler", "Sade kıyafetler"],
    ["Yerel karakter", "Komedi figürü", "Kasaba renklerinden biri"],
    ["Lakabıyla akılda kalır", "Serinin yerel mizahını güçlendirir", "Eyyvah Eyvah atmosferinin renkli yan karakterlerindendir"]
  ),

  m(
    3267,
    "Haydar",
    ["haydar", "eyvah eyvah haydar"],
    ["Türk komedi serisi", "Eyyvah Eyvah", "Müzik ve yol hikayesi"],
    ["Sahne/orkestra çevresi görünümü", "Komik yüz ifadeleri", "Rahat kıyafetler"],
    ["Müzisyen çevresi karakteri", "Yan karakter", "Komedi desteği"],
    ["Hüseyin ve Firuzan'ın müzik dünyasını tamamlar", "Sahnelerde sıcak ve yerel mizah yaratır", "Serinin eğlenceli yan kadrosunda yer alır"]
  ),

  m(
    3268,
    "Sezercik",
    ["sezercik", "sezer"],
    ["Yeşilçam melodramı", "Çocuk kahraman hikayesi", "Aile ve gözyaşı teması"],
    ["Küçük çocuk görünümü", "Masum bakış", "Eski Yeşilçam kıyafetleri"],
    ["Çocuk kahraman", "Duygusal merkez", "Melodram figürü"],
    ["Yeşilçam'ın en bilinen çocuk karakterlerinden biridir", "'Vurucam kırbacı' repliğiyle anılır", "Masumiyet ve hüzün temasını taşır"]
  ),

  m(
    3269,
    "Ayşecik",
    ["ayşecik", "aysecik", "ayşe", "ayse"],
    ["Yeşilçam çocuk melodramı", "Aile ve sevgi hikayeleri", "Klasik Türk sineması"],
    ["Küçük kız çocuğu", "Masum yüz", "Örgülü saçlar"],
    ["Çocuk kahraman", "Duygusal figür", "Aile hikayesinin merkezi"],
    ["Yeşilçam'ın sevilen çocuk karakter ikonlarındandır", "Masumiyet ve fedakarlık temalarıyla hatırlanır", "Ağlatan ama sıcak filmlerin sembollerindendir"]
  ),

  m(
    3270,
    "Ömercik",
    ["ömercik", "omercik", "ömer", "omer"],
    ["Yeşilçam çocuk melodramı", "Aile ve ayrılık hikayeleri", "Klasik Türk sineması"],
    ["Küçük erkek çocuk", "Hüzünlü bakış", "Sade eski dönem kıyafetleri"],
    ["Çocuk kahraman", "Duygusal merkez", "Masum karakter"],
    ["Yeşilçam'ın çocuk yıldız dönemini temsil eder", "Aile dramlarında masumiyetin simgesidir", "Duygusal sahneleriyle hatırlanır"]
  ),

  m(
    3271,
    "Turist Ömer",
    ["turist ömer", "turist omer", "ömer", "omer"],
    ["Yeşilçam komedisi", "Macera ve parodi", "Kült Türk sineması"],
    ["Eski püskü kıyafetler", "Şapka", "Sakarlıkla karışık rahat tavır"],
    ["Gezgin", "Komik anti-kahraman", "Parodi figürü"],
    ["Sadri Alışık'ın en ikonik karakterlerindendir", "Rahat ve umursamaz tavrıyla bilinir", "Uzaya giden Yeşilçam karakteri olarak da hatırlanır"]
  ),

  m(
    3272,
    "Malkoçoğlu",
    ["malkoçoğlu", "malkocoglu"],
    ["Yeşilçam tarihi macera", "Osmanlı akıncı hikayeleri", "Kılıçlı kahraman filmleri"],
    ["Zırh", "Kılıç", "At üstünde savaşçı görünüm"],
    ["Akıncı", "Kahraman savaşçı", "Tarihi macera figürü"],
    ["Cüneyt Arkın ile özdeşleşen kahraman tiplerindendir", "Kılıç dövüşleri ve atlı sahnelerle hatırlanır", "Yeşilçam'ın tarihi aksiyon damarını temsil eder"]
  ),

  m(
    3273,
    "Kara Murat",
    ["kara murat"],
    ["Yeşilçam tarihi macera", "Osmanlı ve Bizans çatışmaları", "Kılıçlı aksiyon"],
    ["Siyah kıyafetler", "Kılıç", "Atletik savaşçı duruşu"],
    ["Gizli kahraman", "Savaşçı", "Tarihi aksiyon figürü"],
    ["Cüneyt Arkın'ın kült kahramanlarından biridir", "Kalabalık düşmanlara tek başına karşı koymasıyla bilinir", "Yeşilçam aksiyonunun abartılı enerjisini taşır"]
  ),

  m(
    3274,
    "Battal Gazi",
    ["battal gazi", "battal"],
    ["Yeşilçam tarihi macera", "Destansı kahramanlık", "Anadolu savaşçı hikayeleri"],
    ["Savaşçı kıyafetleri", "Kılıç", "Güçlü ve kararlı duruş"],
    ["Destan kahramanı", "Savaşçı", "Kurtarıcı figür"],
    ["Yeşilçam'ın tarihi kahraman filmlerinde öne çıkar", "Cesaret ve adalet temasıyla hatırlanır", "Cüneyt Arkın enerjisinin sembol karakterlerindendir"]
  ),

  m(
    3275,
    "Tarkan",
    ["tarkan", "tarkan hun"],
    ["Yeşilçam tarihi macera", "Hun savaşçısı hikayeleri", "Kurt ve kılıç teması"],
    ["Uzun saç", "Savaşçı kıyafetleri", "Kılıç ve kurt imajı"],
    ["Hun savaşçısı", "Macera kahramanı", "Kurtarıcı"],
    ["Kurtla birlikte anılan Yeşilçam kahramanlarındandır", "Tarihi macera ve fantastik aksiyon karışımını taşır", "Kılıçlı sahneleriyle bilinir"]
  ),

  m(
    3276,
    "Apti",
    ["apti", "çöpçüler kralı apti", "copculer krali apti"],
    ["Yeşilçam komedisi", "Çöpçüler Kralı", "Mahalle ve sınıf komedisi"],
    ["Çöpçü kıyafeti", "Saf yüz ifadesi", "Mahalle insanı görünümü"],
    ["Çöpçü", "Aşık adam", "Saf komedi kahramanı"],
    ["Kemal Sunal'ın unutulmaz karakterlerindendir", "Mahalle düzeni ve aşk üçgeni içinde komedi yaratır", "Saflığıyla seyircinin yanında durduğu tiptir"]
  ),

  m(
    3277,
    "Hacer",
    ["hacer", "çöpçüler kralı hacer", "copculer krali hacer"],
    ["Yeşilçam komedisi", "Çöpçüler Kralı", "Mahalle hikayesi"],
    ["Mahalle kızı görünümü", "Sade kıyafetler", "Güçlü ve neşeli tavır"],
    ["Mahalleli", "Romantik merkez", "Komedi karakteri"],
    ["Apti ve Şakir arasındaki komedi dengesinin merkezindedir", "Mahalle düzenini temsil eder", "Yeşilçam mahalle komedisinin akılda kalan figürlerindendir"]
  ),

  m(
    3278,
    "Zabıta Şakir",
    ["zabıta şakir", "zabita sakir", "şakir", "sokullu"],
    ["Yeşilçam komedisi", "Çöpçüler Kralı", "Mahalle ve belediye düzeni"],
    ["Zabıta üniforması", "Bıyık", "Kendini beğenmiş duruş"],
    ["Zabıta", "Rakip aşık", "Komedi antagonisti"],
    ["Şener Şen'in unutulmaz Yeşilçam tiplerindendir", "Apti ile rekabeti komedinin merkezindedir", "Otoriteyi komik biçimde temsil eder"]
  ),

  m(
    3279,
    "Salako",
    ["salako"],
    ["Yeşilçam komedisi", "Köy ve ağalık parodisi", "Saf kahraman hikayesi"],
    ["Köylü kıyafeti", "Saf yüz ifadesi", "Sakar ama iyi niyetli duruş"],
    ["Köylü", "Saf kahraman", "Komik figür"],
    ["Kemal Sunal'ın saf ama şanslı karakter tiplerinden biridir", "Köy düzenini ve ağalık sistemini komediye çevirir", "Beklenmedik kahramanlığa yükselir"]
  ),

  m(
    3280,
    "Davaro Memo",
    ["davaro memo", "memo"],
    ["Yeşilçam komedisi", "Davaro", "Köy ve töre parodisi"],
    ["Köylü kıyafetleri", "Saf ve panik yüz", "Komik çaresizlik hali"],
    ["Köylü", "Damat", "Saf komedi kahramanı"],
    ["Töre ve kan davası mizahının merkezindedir", "Kemal Sunal'ın iyi niyetli karakter çizgisini taşır", "Cano ile karşı karşıya gelmesiyle hatırlanır"]
  ),

  m(
    3281,
    "Davaro Cano",
    ["davaro cano", "cano"],
    ["Yeşilçam komedisi", "Davaro", "Köy ve kan davası parodisi"],
    ["Köy ağası/sert adam havası", "Bıyık", "Tehditkar ama komik duruş"],
    ["Rakip", "Köy karakteri", "Komedi antagonisti"],
    ["Memo'nun korktuğu ve karşılaşmak zorunda kaldığı figürdür", "Davaro'nun köy düzeni parodisini güçlendirir", "Sertliği komediye dönüşür"]
  ),

  m(
    3282,
    "Züğürt Ağa",
    ["züğürt ağa", "zugurt aga", "ağa", "aga"],
    ["Türk dram-komedi", "Köyden şehre göç", "Ağalık düzeninin çöküşü"],
    ["Ağa kıyafeti", "Gururlu ama yorgun duruş", "Köyden şehre uyumsuz görünüm"],
    ["Ağa", "Düşüş yaşayan lider", "Dram-komedi figürü"],
    ["Eski düzenin şehirde çözülüşünü temsil eder", "Şener Şen'in en güçlü karakterlerinden biridir", "Gurur ve çaresizlik arasında kalır"]
  ),

  m(
    3283,
    "Kiracı Kerim",
    ["kiracı kerim", "kiraci kerim", "kerim"],
    ["Yeşilçam komedisi", "Kiracı", "Apartman ve geçim sıkıntısı hikayesi"],
    ["Memur/kiracı görünümü", "Sade kıyafetler", "Yorgun ama dirençli yüz"],
    ["Kiracı", "Aile babası", "Sıradan insan kahramanı"],
    ["Ev ve kira derdi üzerinden toplumsal komedi yaratır", "Kemal Sunal'ın şehirli halk karakterlerindendir", "Hakkını arayan sıradan insan tipini taşır"]
  ),

  m(
    3284,
    "Namuslu Ali Rıza",
    ["namuslu ali rıza", "namuslu ali riza", "ali rıza", "ali riza"],
    ["Yeşilçam hiciv komedisi", "Namuslu", "Dürüstlük ve sistem eleştirisi"],
    ["Memur kıyafeti", "Sade görünüm", "Şaşkın ve dürüst yüz"],
    ["Memur", "Dürüst adam", "Toplumsal hiciv karakteri"],
    ["Dürüst kalmaya çalıştıkça sistemle çatışır", "Kemal Sunal'ın toplumsal hiciv karakterlerindendir", "Yanlış anlaşılmalar üzerinden komedi doğurur"]
  ),

  m(
    3285,
    "Banker Bilo",
    ["banker bilo", "bilo"],
    ["Yeşilçam komedisi", "Göç ve dolandırıcılık hikayesi", "Şehir düzeni eleştirisi"],
    ["Köyden gelmiş adam görünümü", "Saf bakış", "Sonradan şehirli havalar"],
    ["Göçmen", "Saf adam", "Komedi kahramanı"],
    ["Köyden kente göç mizahını taşır", "Maho ile bağlantılı hikayesiyle bilinir", "Dolandırılma ve dönüşüm komedisinin merkezindedir"]
  ),

  m(
    3286,
    "Rıza Bey",
    ["rıza bey", "riza bey", "neşeli günler rıza", "neseli gunler riza"],
    ["Yeşilçam aile komedisi", "Neşeli Günler", "Turşucu aile hikayesi"],
    ["Baba figürü", "Sert ama komik yüz", "Esnaf havası"],
    ["Baba", "Turşucu", "Aile reisi"],
    ["Turşu suyu tartışmasıyla hatırlanır", "Aile içi inatlaşmanın merkezindedir", "Münir Özkul'un babacan ama sert karakterlerindendir"]
  ),

  m(
    3287,
    "Kazım Efendi",
    ["kazım efendi", "kazim efendi", "neşeli günler kazım", "neseli gunler kazim"],
    ["Yeşilçam aile komedisi", "Neşeli Günler", "Turşucu aile atmosferi"],
    ["Esnaf görünümü", "Sakin ama inatçı duruş", "Klasik Yeşilçam baba havası"],
    ["Esnaf", "Aile büyüğü", "Komedi figürü"],
    ["Turşu tartışmasının karşı tarafındaki aile düzenini tamamlar", "Eski Yeşilçam aile sıcaklığını taşır", "İnatçı esnaf karakteri olarak hatırlanır"]
  ),

  m(
    3288,
    "Yaşar Usta",
    ["yaşar usta", "yasar usta"],
    ["Yeşilçam aile dramı", "Bizim Aile", "Emek ve aile dayanışması"],
    ["İşçi tulumu", "Babacan yüz", "Sert ama adil duruş"],
    ["Baba", "İşçi", "Aile reisi"],
    ["Sen mi büyüksün? Hayır, ben büyüğüm ben, ben! -tüyler diken diken :(- ", "Kalabalık ailenin vicdanlı merkezidir", "Münir Özkul'un unutulmaz baba karakterlerindendir"]
  ),

  m(
    3289,
    "Hayta İsmail",
    ["hayta ismail", "ismail"],
    ["Yeşilçam okul komedisi", "Hababam Sınıfı", "Öğrenci yaramazlıkları"],
    ["Okul üniforması", "Yaramaz gülüş", "Sınıf öğrencisi görünümü"],
    ["Öğrenci", "Şakacı", "Sınıfın haylazlarından"],
    ["Hababam Sınıfı'nın unutulmaz öğrencilerindendir", "Derslerden kaçma ve şaka düzeninde öne çıkar", "Sınıfın kaotik enerjisini taşır"]
  ),

  m(
    3290,
    "Tulum Hayri",
    ["tulum hayri", "hayri"],
    ["Yeşilçam okul komedisi", "Hababam Sınıfı", "Sınıf yaramazlıkları"],
    ["Okul üniforması", "İri yapılı öğrenci görünümü", "Neşeli yüz"],
    ["Öğrenci", "Yaramaz sınıf üyesi", "Komedi karakteri"],
    ["İnek Şaban ve Güdük Necmi ile aynı sınıf enerjisini paylaşır", "Hababam'ın toplu şaka kültüründe yer alır", "Lakabıyla akılda kalır"]
  ),

  m(
    3291,
    "Domdom Ali",
    ["domdom ali", "ali"],
    ["Yeşilçam okul komedisi", "Hababam Sınıfı", "Sınıf arkadaşlığı"],
    ["Okul üniforması", "Genç öğrenci görünümü", "Yaramaz tavırlar"],
    ["Öğrenci", "Sınıf üyesi", "Komedi karakteri"],
    ["Hababam Sınıfı'nın kalabalık öğrenci kadrosundandır", "Sınıfın kolektif şakalarında yer alır", "Lakabıyla hatırlanan karakterlerdendir"]
  ),

  m(
    3292,
    "Bozum Cahit",
    ["bozum cahit", "cahit"],
    ["Yeşilçam okul komedisi", "Hababam Sınıfı", "Öğrenci grubu"],
    ["Okul üniforması", "Şaşkın/komik öğrenci tavrı", "Sınıf ortamı"],
    ["Öğrenci", "Sınıfın renkli üyelerinden", "Yan komedi karakteri"],
    ["Hababam'ın lakaplı karakter geleneğini sürdürür", "Toplu öğrenci mizahının parçasıdır", "Sınıf atmosferini kalabalıklaştırır"]
  ),

  m(
    3293,
    "Mavi Boncuk Emel",
    ["emel", "mavi boncuk emel"],
    ["Yeşilçam komedisi", "Mavi Boncuk", "Kaçırma ve dayanışma hikayesi"],
    ["Sahne yıldızı görünümü", "Şık kıyafetler", "Zarif duruş"],
    ["Şarkıcı", "Kaçırılan yıldız", "Romantik/komedi merkezi"],
    ["Mahalle grubunun kaçırdığı ünlü şarkıcıdır", "Zamanla sıcak bağ kurar", "Yeşilçam'ın dayanışma ve müzikli komedi havasını taşır"]
  ),

  m(
    3294,
    "Kaymakam Cafer",
    ["kaymakam cafer", "cafer"],
    ["Yeşilçam komedisi", "Süt Kardeşler", "Konak ve yanlış anlaşılma hikayesi"],
    ["Resmi kıyafetler", "Ciddi yüz", "Konağa gelen devlet görevlisi havası"],
    ["Kaymakam", "Yanlış anlaşılma karakteri", "Komedi figürü"],
    ["Süt Kardeşler'deki karışıklıkların önemli parçasıdır", "Ciddiyeti komediye dönüşür", "Konağın absürt düzeninde otorite gibi durur"]
  ),

  m(
    3295,
    "Ramazan",
    ["ramazan", "süt kardeşler ramazan", "sut kardesler ramazan"],
    ["Yeşilçam komedisi", "Süt Kardeşler", "Konak ve aile komedisi"],
    ["Denizci/asker havası", "Saf ve panik yüz", "Eski dönem kıyafetleri"],
    ["Asker/denizci", "Yanlış evlilik karışıklığının figürü", "Komedi kahramanı"],
    ["Şaban ile karışıklıkların içine düşer", "Konağın yanlış anlaşılma zincirini büyütür", "Süt Kardeşler'in klasik Yeşilçam temposunu taşır"]
  ),

  m(
    3296,
    "Şabaniye",
    ["şabaniye", "sabaniye"],
    ["Yeşilçam komedisi", "Kılık değiştirme ve sahne hikayesi", "Müzikli komedi"],
    ["Kadın kılığına girmiş erkek karakter", "Sahne kıyafetleri", "Komik panik halleri"],
    ["Kılık değiştiren kahraman", "Sahne karakteri", "Komedi figürü"],
    ["Kılık değiştirme mizahının merkezindedir", "Kemal Sunal'ın absürt komedi rollerindendir", "Sahne ve kaçış temposuyla hatırlanır"]
  ),

  m(
    3297,
    "Tokatçı Osman",
    ["tokatçı osman", "tokatci osman", "osman"],
    ["Yeşilçam komedisi", "Tokatçı", "Dolandırıcılık ve saf karakter hikayesi"],
    ["Köyden gelmiş saf adam görünümü", "Sade kıyafetler", "Şaşkın yüz"],
    ["Saf adam", "Dolandırılan/dolandırmaya çalışan figür", "Komedi kahramanı"],
    ["Şehir ve köy düzeni arasındaki farkı komediye çevirir", "Kemal Sunal'ın halktan karakter çizgisini taşır", "Saflığıyla olayların içine düşer"]
  ),

  m(
    3298,
    "Postacı Adem",
    ["postacı adem", "postaci adem", "adem"],
    ["Yeşilçam komedisi", "Postacı", "Mahalle ve aşk hikayesi"],
    ["Postacı üniforması", "Çanta", "Saf ve iyi niyetli yüz"],
    ["Postacı", "Aşık adam", "Komedi kahramanı"],
    ["Mektup ve yanlış anlaşılma düzenini taşır", "Kemal Sunal'ın iyi niyetli şehir karakterlerindendir", "Mahalle komedisiyle hatırlanır"]
  ),

  m(
    3299,
    "Sakar Şakir",
    ["sakar şakir", "sakar sakir", "şakir", "sakar"],
    ["Yeşilçam komedisi", "Sakar Şakir", "Miras ve şehir karmaşası"],
    ["Sakarlığı belli eden mimikler", "Sade kıyafetler", "Panikli yüz"],
    ["Sakar kahraman", "İyi niyetli adam", "Komedi figürü"],
    ["Kemal Sunal'ın fiziksel komedi tarafını temsil eder", "Sakarlıklarıyla olayları büyütür", "Miras ve çıkar ilişkileri içinde saf kalır"]
  ),

  m(
    3300,
    "Keloğlan",
    ["keloğlan", "keloglan"],
    ["Türk masal filmi", "Fantastik Yeşilçam", "Masal kahramanı"],
    ["Kel baş", "Sade köylü kıyafetleri", "Kurnaz ama iyi niyetli görünüm"],
    ["Masal kahramanı", "Kurnaz köylü", "Fantastik figür"],
    ["Türk masal geleneğinin sinemadaki en tanınan karakterlerindendir", "Zekasıyla güçlüleri alt eder", "Saflık ve kurnazlığı birlikte taşır"]
  ),

  m(
    3301,
    "Niyazi Gül",
    ["niyazi gül", "niyazi"],
    ["Türk komedi filmi", "Modern komedi", "Akademisyen ve macera hikayesi"],
    ["Profesör görünümü", "Gözlük", "Sakar ama bilgili tavır"],
    ["Veteriner profesör", "Ana karakter", "Komedi kahramanı"],
    ["Ata Demirer'in modern komedi karakterlerinden biridir", "Bilimsel ciddiyetle absürt olaylar arasında kalır", "Saf ve iyi niyetli tavrıyla öne çıkar"]
  ),

];