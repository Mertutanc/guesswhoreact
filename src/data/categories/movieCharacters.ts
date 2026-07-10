import type { GuessItem } from "../../types/game";

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

export const movieCharacters: GuessItem[] = [
 

createMovieCharacter(
    3001,
    "John Wick",
    ["john wick", "wick", "baba yaga"],
    ["Aksiyon - intikam", "Yeraltı suç dünyası", "Modern suikastçı serisi"],
    ["Siyah takım elbise", "Uzun siyah saç", "Kirli sakal", "Yaralı yüz"],
    ["Tetikçi", "Emekli suikastçı", "Köpeğinin intikamını alan adam"],
    ["'Baba Yaga' lakaplı", "Silah ve yakın dövüş ustası", "Continental oteli bağlantılı"]
  ),

  createMovieCharacter(
    3002,
    "Thanos",
    ["thanos"],
    ["Süper kahraman evreni", "Çizgi roman uyarlaması", "Devasa sinematik seri"],
    ["Mor ten", "Devasa cüsse", "Altın zırh", "Çizgili çene"],
    ["Antagonist", "Evrenin yarısını yok etmek isteyen lider"],
    ["Sonsuzluk Eldiveni kullanır", "Parmak şıklatmasıyla ünlü", "Gezegenleri dengeler"]
  ),

  createMovieCharacter(
    3003,
    "Aragorn",
    ["aragorn", "yolgezer", "strider"],
    ["Fantastik epik seri", "Orta Dünya", "Kitap uyarlaması üçleme"],
    ["Kirli pelerin", "Kılıç", "Uzun dağınık saç", "Kraliyet yüzüğü"],
    ["Yol gösterici", "Savaşçı lider", "Kayıp kral"],
    ["Andúril kılıcını taşır", "Gondor tahtının varisi", "Arwen ile aşk yaşar"]
  ),

  createMovieCharacter(
    3004,
    "Legolas",
    ["legolas"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük kardeşliği üyesi"],
    ["Uzun sarı saç", "Sivri kulaklar", "Yeşil-gri kabile kıyafetleri"],
    ["Okçu", "Prens", "Savaşçı yoldaş"],
    ["Asla ıskalamaz", "Gimli ile rekabet eder", "Hafif ve hızlı hareket eder"]
  ),

  createMovieCharacter(
    3005,
    "Gollum",
    ["gollum", "smeagol", "smagol"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük arayışı hikayesi"],
    ["Çıplak ve zayıf vücut", "Büyük parlayan gözler", "Birkaç tel saç"],
    ["Eski hobbit", "Yüzük bağımlısı yaratık", "Rehber ve hain"],
    ["'Kıymetlimis' (Precious) repliği", "Çift kişilikli", "Mağaralarda yaşar"]
  ),

  createMovieCharacter(
    3006,
    "Severus Snape",
    ["snape", "severus snape", "profesör snape"],
    ["Fantastik büyücülük serisi", "Okul atmosferi"],
    ["Siyah cübbe", "Omuz hizasında düz siyah saç", "Soluk ten", "Karga burun"],
    ["Profesör", "İksir hocası", "Bina başkanı", "Çift taraflı ajan"],
    ["'Always' repliğiyle bilinir", "Karanlık ve gizemli", "Zihinbazar ustası"]
  ),

  createMovieCharacter(
    3007,
    "Lord Voldemort",
    ["voldemort", "lord voldemort", "tom riddle", "karanlık lord"],
    ["Fantastik büyücülük serisi", "Ezeli düşman hikayesi"],
    ["Burnu olmayan yüz", "Yılan benzeri gözler", "Siyah cübbe", "Soluk beyaz ten"],
    ["Karanlık Lord", "Antagonist", "Ölüm yiyenlerin lideri"],
    ["Adı anılmaması gereken kişi", "Hortkuluklar üretmiştir", "Yılanı Nagini ile gezer"]
  ),

  createMovieCharacter(
    3008,
    "Katniss Everdeen",
    ["katniss", "katniss everdeen"],
    ["Distopik bilim kurgu", "Genç yetişkin serisi", "Hayatta kalma turnuvası"],
    ["Örgülü saç", "Ok ve yay", "Alaycı Kuş broşu"],
    ["İsyanın sembolü", "Mıntıka temsilcisi", "Abla figürü"],
    ["Alaycı Kuş (Mockingjay) olarak bilinir", "Ateşler İçindeki Kız", "Kız kardeşinin yerine gönüllü olur"]
  ),

  createMovieCharacter(
    3009,
    "Thor",
    ["thor", "odinson"],
    ["Süper kahraman evreni", "Mitolojik esintili bilim kurgu"],
    ["Pelerin", "Sarışın uzun saç (bazen kısa)", "Metal zırh", "Göz bandı (bazen)"],
    ["Tanrı", "Yenilmezler üyesi", "Prens"],
    ["Yıldırım tanrısı", "Mjolnir (Çekiç) veya Stormbreaker kullanır", "Asgardlı"]
  ),

  createMovieCharacter(
    3010,
    "Captain America",
    ["kaptan amerika", "captain america", "steve rogers", "kaptan"],
    ["Süper kahraman evreni", "Liderlik ve adalet teması"],
    ["Mavi-kırmızı kostüm", "Kask (A harfli)", "Yıldız amblemi"],
    ["Asker", "Yenilmezler lideri", "İlk kahraman"],
    ["Kırılmaz kalkan taşır", "2. Dünya Savaşı'ndan kalma", "Donarak geleceğe uyanmıştır"]
  ),

  createMovieCharacter(
    3011,
    "Wolverine",
    ["wolverine", "logan", "wolverin"],
    ["Mutant dünyası", "Çizgi roman uyarlaması aksiyon"],
    ["Kendine has sakal/saç tarzı", "Deri ceket", "Yaralanmayan vücut"],
    ["Savaşçı", "X-Men üyesi", "Gezgin"],
    ["Ellerinden çıkan adamantin pençeler", "Hücre yenilemesi (İyileşme)", "Puro sever"]
  ),

  createMovieCharacter(
    3012,
    "Deadpool",
    ["deadpool", "wade wilson", "dedpul"],
    ["Yetişkin süper kahraman filmi", "Komedi - aksiyon", "Dördüncü duvarı yıkan hikaye"],
    ["Kırmızı siyah tam kapalı kostüm", "Çift kılıç (sırtta)", "Yüzü deforme olmuş"],
    ["Paralı asker", "Anti-kahraman"],
    ["Seyirciyle doğrudan konuşur", "Ölmez/iyileşir", "Geveze ve esprilidir"]
  ),

  createMovieCharacter(
    3013,
    "Luke Skywalker",
    ["luke", "luke skywalker"],
    ["Uzay operası", "Bilim kurgu efsanesi", "Seçilmiş kişi arketipi"],
    ["Çiftçi kıyafeti (başta)", "Siyah jedi kıyafeti (sonradan)", "Işın kılıcı"],
    ["Pilot", "Jedi şövalyesi", "Kurtarıcı"],
    ["Yeşil/Mavi ışın kılıcı", "Darth Vader'ın oğlu", "Tatooine gezegeninden çıkmıştır"]
  ),

  createMovieCharacter(
    3014,
    "Han Solo",
    ["han solo", "solo"],
    ["Uzay operası", "Bilim kurgu efsanesi", "Uzay korsanlığı"],
    ["Yelek", "Lazer tabancası", "Karizmatik serseri duruşu"],
    ["Kaçakçı", "Kaptan", "Pilot"],
    ["Millennium Falcon gemisinin sahibidir", "Chewbacca'nın ortağı", "Önce parayı düşünür"]
  ),

  createMovieCharacter(
    3015,
    "Yoda",
    ["yoda", "usta yoda", "master yoda"],
    ["Uzay operası", "Bilim kurgu efsanesi", "En güçlü mentor karakter"],
    ["Küçük boy", "Yeşil ten", "Uzun kulaklar", "Eski cübbe ve baston"],
    ["Jedi Ustası", "Konsey başkanı", "Öğretmen"],
    ["Kelimelerin yerini değiştirerek konuşur", "Güç (Force) ustası", "800 yıldan fazla yaşamıştır"]
  ),

  createMovieCharacter(
    3016,
    "Shrek",
    ["shrek", "şrek"],
    ["Animasyon aile filmi", "Masal parodisi", "Yeşil dev hikayesi"],
    ["Yeşil büyük vücut", "Tombul yanaklar", "Külah şeklinde kulaklar"],
    ["Bataklık sakini", "Zoraki kahraman", "Koca dev"],
    ["Bataklıkta yaşar", "Eşek ile arkadaştır", "Prenses Fiona'yı kurtarır"]
  ),

  createMovieCharacter(
    3017,
    "Donkey",
    ["eşek", "donkey", "şrekteki eşek"],
    ["Animasyon aile filmi", "Komedi", "Konuşan hayvan karakteri"],
    ["Gri eşek", "Büyük dişler", "Sürekli gülen yüz"],
    ["Yancı", "En yakın arkadaş", "Komik figür"],
    ["Süper gevezedir", "Bir ejderha ile evlenir", "Şrek'in peşini bırakmaz"]
  ),

  createMovieCharacter(
    3018,
    "Hannibal Lecter",
    ["hannibal", "hannibal lecter", "doktor lecter"],
    ["Psikolojik gerilim", "Suç ve dedektiflik", "Ödüllü kült başyapıt"],
    ["Mavi hapishane tulumu", "Yüzü kapatan ikonik dişli maske", "Göz kırpmayan keskin bakışlar"],
    ["Psikiyatrist", "Seri katil", "Danışman"],
    ["İnsan eti yer (Yamyam)", "Aşırı zekidir", "Klasik müzik ve sanat hayranıdır"]
  ),

  createMovieCharacter(
    3019,
    "Patrick Bateman",
    ["patrick bateman", "bateman"],
    ["Kara komedi - gerilim", "Yuppie kültürü", "Sosyal hiciv"],
    ["Kusursuz taranmış saç", "Lüks takım elbiseler", "Şeffaf yağmurluk (bazen)", "Balta"],
    ["Yatırım bankacısı", "Seri katil", "Narsist"],
    ["Kartvizitlere aşırı önem verir", "Cilt bakım rutini ünlüdür", "Aynada kendisine hayrandır"]
  ),

  createMovieCharacter(
    3020,
    "The Terminator",
    ["terminator", "terminatör", "t-800", "arnold"],
    ["Bilim kurgu aksiyon", "Zaman yolculuğu", "Gelecekten gelen tehdit"],
    ["Siyah deri ceket", "Güneş gözlüğü", "Mekanik kırmızı göz (hasar alınca)"],
    ["Sayborg", "Suikastçı veya koruyucu", "Katil robot"],
    ["'I'll be back' repliği", "Asla durdurulamaz", "Gelecekteki yapay zeka tarafından gönderilmiştir"]
  ),

  createMovieCharacter(
    3021,
    "James Bond",
    ["james bond", "bond", "007"],
    ["Ajan - casusluk serisi", "Uluslararası operasyonlar", "Dünyanın en uzun soluklu serilerinden"],
    ["Şık smokin", "Lüks saat", "Pürüzsüz tıraşlı yüz"],
    ["Gizli ajan", "Suikastçı", "Hükümet görevlisi"],
    ["'Bond, James Bond' repliği", "007 kod adına sahiptir", "İçkisini çalkalanmış, karıştırılmamış sever"]
  ),

  createMovieCharacter(
    3022,
    "Ethan Hunt",
    ["ethan hunt", "ethan"],
    ["Aksiyon - casusluk", "Tehlikeli görevler ekibi"],
    ["Tırmanma teçhizatları", "Deri ceket", "Yüz maskesi (kılık değiştirme)"],
    ["Saha ajanı", "Takım lideri", "Kaçak"],
    ["İnanılmaz dublörlük hareketleri yapar", "Uçaklara ve gökdelenlere tırmanır", "IMF ajanı"]
  ),

  createMovieCharacter(
    3023,
    "Dominic Toretto",
    ["dom", "dominic toretto", "toretto"],
    ["Aksiyon - yarış", "Sokak arabaları ve soygun teması"],
    ["Siyah atlet", "Boynunda haç kolye", "Kel ve aşırı kaslı yapı"],
    ["Sokak yarışçısı", "Çete lideri", "Soyguncu"],
    ["Sürekli 'Aile' (Family) vurgusu yapar", "Amerikan kas arabaları (Muscle) kullanır", "Corona birası içer"]
  ),

  createMovieCharacter(
    3024,
    "Pennywise",
    ["pennywise", "o", "it", "palyaço pennywise"],
    ["Korku filmi", "Stephen King uyarlaması", "Çocukluk kabusu"],
    ["Viktorya dönemi palyaço kostümü", "Kırmızı balon", "Kocaman alın ve turuncu saç"],
    ["Kadim yaratık", "Palyaço", "Katil"],
    ["Korkudan beslenir", "Kanalizasyonda yaşar", "Dans eden palyaço olarak bilinir"]
  ),

  createMovieCharacter(
    3025,
    "Léon",
    ["leon", "leon the professional"],
    ["Suç draması", "Suikastçı ve çocuk dostluğu"],
    ["Uzun siyah palto", "Siyah bere", "Yuvarlak küçük gözlük"],
    ["Kiralık katil", "Vasi", "Tetikçi"],
    ["Sürekli süt içer", "En sevdiği şey bir saksı bitkisidir", "Mathilda'yı korur"]
  ),

  createMovieCharacter(
    3026,
    "Jack Dawson",
    ["jack", "jack dawson"],
    ["Romantik drama", "Tarihi felaket filmi", "Tüm zamanların en çok gişe yapanlarından"],
    ["Fakir kıyafetleri", "Dağınık sarımsı saçlar", "Askılı pantolon"],
    ["Ressam", "Gezgin", "Aşık genç"],
    ["Büyük bir gemide seyahat eder", "Geminin ucunda 'Dünyanın kralıyım' diye bağırır", "Trajik bir şekilde donarak ölür"]
  ),

  createMovieCharacter(
    3027,
    "Gimli",
    ["gimli"],
    ["Fantastik epik seri", "Orta Dünya efsanesi"],
    ["Uzun gür kızıl sakal", "Miğfer", "Çift başlı dev balta"],
    ["Savaşçı", "Cüce temsilcisi", "Yoldaş"],
    ["Madenleri sever", "Legolas ile öldürdüğü düşmanları sayar", "Kısa boylu ama çok güçlüdür"]
  ),

  createMovieCharacter(
    3028,
    "Sauron",
    ["sauron", "karanlıklar efendisi"],
    ["Fantastik epik seri", "Orta Dünya", "Ana düşman figürü"],
    ["Devasa siyah zırh (başta)", "Alevler saçan tek bir büyük göz (sonradan)"],
    ["Karanlık Lord", "Yaratıcı", "Hükümdar"],
    ["Tek Yüzük'ün asıl sahibidir", "Mordor'da yaşar", "Karanlığın sembolüdür"]
  ),

  createMovieCharacter(
    3029,
    "Amélie Poulain",
    ["amelie", "amelie poulain"],
    ["Fransız romantik komedi", "İyilik yapma hikayesi"],
    ["Kısa küt kesim siyah saç", "Kırmızı hırka/elbise", "Melankolik ve tatlı gülümseme"],
    ["Garson", "Gizli iyilik meleği"],
    ["İnsanların hayatını küçük oyunlarla değiştirir", "Paris'te yaşar", "Taş kaydırmayı sever"]
  ),

  createMovieCharacter(
    3030,
    "Paul Atreides",
    ["paul", "paul atreides", "muad'dib"],
    ["Bilim kurgu destanı", "Çöl gezegeni hikayesi"],
    ["Çöl kıyafeti (Stillsuit)", "Mavi parlayan gözler (baharat yüzünden)", "Pelerin"],
    ["Dükün oğlu", "Seçilmiş kişi (Mesih)", "Çöl savaşçısı lideri"],
    ["Dev solucanlara biner", "Baharat (Melange) üretilen gezegendedir", "Geleceği görebilir"]
  ),

  createMovieCharacter(
    3031,
    "Barbie",
    ["barbie"],
    ["Modern fantastik komedi", "Oyuncak dünyasından sinemaya"],
    ["Tamamen pembe kıyafetler", "Kusursuz sarı saçlar", "Topuklu ayakkabılar"],
    ["İkonik bebek", "Gezgin", "Ana karakter"],
    ["Gerçek dünyayı keşfetmeye çıkar", "Her mesleği yapabilir", "Pembe bir dünyada (Barbieland) yaşar"]
  ),

  createMovieCharacter(
    3032,
    "Norman Bates",
    ["norman bates", "norman"],
    ["Klasik psikolojik gerilim", "Kült siyah beyaz film"],
    ["Sıradan temiz yüzlü genç adam", "Bazen kadın kıyafetleri ve peruk giyer", "Bıçak"],
    ["Motel işletmecisi", "Katil"],
    ["Annesinin kişiliğine bürünür", "Duş sahnesi cinayetiyle ünlüdür", "Bates Motel'in sahibidir"]
  ),

  createMovieCharacter(
    3033,
    "Travis Bickle",
    ["travis", "travis bickle"],
    ["70'ler suç draması", "Yalnızlık ve delirme hikayesi"],
    ["Mohawk (Mihavk) saç modeli (sonradan)", "Askeri yeşil mont", "Güneş gözlüğü"],
    ["Taksi şoförü", "Savaş gazisi", "Kanun koruyucusu (Vigilante)"],
    ["Aynaya karşı 'You talkin' to me?' repliğini söyler", "Gece New York sokaklarında gezer", "Toplumu temizlemek ister"]
  ),

  createMovieCharacter(
    3034,
    "Vincent Vega",
    ["vincent vega", "vincent"],
    ["90'lar kült suç filmi", "Tarantino başyapıtı"],
    ["Siyah takım elbise", "Arkaya taranmış uzunca saç", "Küpe", "Sigara"],
    ["Tetikçi", "Mafya elemanı"],
    ["Patronunun karısıyla dans yarışmasına katılır", "Avrupa'daki hamburger isimlerinden bahseder", "Arkadaşı Jules ile gezer"]
  ),

  createMovieCharacter(
    3035,
    "Beatrix Kiddo",
    ["the bride", "gelin", "beatrix kiddo", "kill bill"],
    ["Aksiyon - dövüş sanatları", "İntikam listesi"],
    ["Sarı-siyah motorsiklet tulumu", "Samuray kılıcı (Katana)"],
    ["Eski suikastçı", "Gelin", "İntikamcı anne"],
    ["Kendisini öldürmek isteyen eski ekibini tek tek avlar", "Hattori Hanzo kılıcı kullanır", "Gelin (The Bride) olarak bilinir"]
  ),

  createMovieCharacter(
    3036,
    "Miranda Priestly",
    ["miranda", "miranda priestly"],
    ["Moda dünyası draması", "Sert patron figürü"],
    ["Kusursuz platin gri saçlar", "Lüks kürkler ve tasarım kıyafetler", "Gözlük fırlatma"],
    ["Genel yayın yönetmeni", "Acımasız patron"],
    ["Moda dergisini yönetir", "Asistanlarına hayatı dar eder", "Sessizce konuşarak herkesi korkutur"]
  ),

  createMovieCharacter(
    3037,
    "Edward Scissorhands",
    ["edward", "edward scissorhands", "makas eller"],
    ["Gotik fantastik romantizm", "Tim Burton filmi"],
    ["Ellerinde parmak yerine uzun makaslar var", "Yüzünde makas kesiği yaraları", "Deri siyah çılgın kıyafet"],
    ["Yapay insan", "Bahçıvan / Kuaför", "Yalnız dışlanmış karakter"],
    ["Buzdan heykeller yapar", "Elleri yüzünden insanlara dokunamaz", "Şatoda tek başına yaratılmıştır"]
  ),

  createMovieCharacter(
    3038,
    "Gurney Halleck",
    ["gurney", "gurney halleck"],
    ["Bilim kurgu destanı", "Çöl savaşı"],
    ["Zırh", "Yüzünde savaş yarası izi", "Sert askeri duruş"],
    ["Savaş ustası", "General", "Mentor"],
    ["Ana karakter Paul Atreides'e dövüşmeyi öğretir", "Atreides hanedanına aşırı sadıktır", "Baliset çalmayı sever"]
  ),

  createMovieCharacter(
    3039,
    "Katniss'in Kedisi Buttercup",
    ["buttercup", "düğünçiçeği"],
    ["Distopik bilim kurgu", "Savaş atmosferi (Evcil hayvan)"],
    ["Çirkin görünümlü", "Sarı-turuncu tüylü kedi", "Eksik kulak parçası"],
    ["Evcil hayvan", "Yancı kedi"],
    ["Primrose Everdeen'e çok düşkündür", "Ana karakter Katniss'ten nefret eder", "Sığınaklarda hayatta kalır"]
  ),

  createMovieCharacter(
    3040,
    "Agent Smith",
    ["ajan smith", "agent smith", "smith"],
    ["Bilim kurgu aksiyon", "Sanal gerçeklik sistemi"],
    ["Takım elbise", "Güneş gözlüğü", "Kulaklık", "Kusursuz taranmış saç"],
    ["Yapay zeka programı", "Sistem koruyucusu / Virüs", "Antagonist"],
    ["Ana karakter Neo'ya sürekli 'Mister Anderson' der", "Kendisini kopyalayabilir", "Matrix'ten kaçmak ister"]
  ),

  createMovieCharacter(
    3041,
    "Spider-Man (Peter Parker)",
    ["örümcek adam", "spider-man", "spiderman", "peter parker"],
    ["Süper kahraman", "Çizgi roman uyarlaması"],
    ["Kırmızı mavi kostüm", "Gözleri büyüyüp küçülen maske", "Sırt çantalı lise kıyafetleri (bazen)"],
    ["Lise/Üniversite öğrencisi", "Fotoğrafçı", "Kahraman"],
    ["Ağ atarak binalardan sarkar", "Amcasının ölümüyle kahraman olmuştur", "New York'u korur"]
  ),

  createMovieCharacter(
    3042,
    "Gimli'nin Baltası",
    ["gimlinin baltası", "gimli baltası"],
    ["Fantastik epik seri", "Orta Dünya eşyası (Mizahi karakter unsuru)"],
    ["Çift taraflı büyük metal bıçak", "Ahşap kalın sap", "Üzerinde cüce rünleri var"],
    ["Silah", "İkonik eşya"],
    ["'Ve benim baltam!' (And my axe) sahnesiyle internet memesi olmuştur", "Orkları keser", "Cüce yapımıdır"]
  ),

  createMovieCharacter(
    3043,
    "Bane",
    ["bane"],
    ["Süper kahraman dünyası", "Karanlık şehir üçlemesi son filmi"],
    ["Yüzünü tamamen kaplayan gaz maskesi benzeri aparat", "Kalın koyun postu ceket", "Devasa kaslı vücut"],
    ["Terörist lider", "Paralı asker", "Suçlu"],
    ["Batman'in belini kırmasıyla bilinir", "Gotham şehrini stadyumu patlatarak ele geçirir", "Çok boğuk bir ses tonu vardır"]
  ),

  createMovieCharacter(
    3044,
    "Truman Burbank",
    ["truman", "truman burbank"],
    ["Medya eleştirisi hiciv draması", "Sanal yaşam"],
    ["Her zaman neşeli takım elbiseler", "Güleryüzlü banliyö insanı imajı"],
    ["Haber dışı şov yıldızı", "Sigortacı"],
    ["Doğduğu günden beri tüm hayatı gizlice televizyonda yayınlanmıştır", "Etrafındaki herkesin oyuncu olduğunu fark eder", "'Günaydın, ve olur ya sizi göremezsem; iyi günler, iyi akşamlar ve iyi geceler' repliği ünlüdür"]
  ),

  createMovieCharacter(
    3045,
    "Grinch",
    ["grinch", "grinç"],
    ["Fantastik aile komedisi", "Yılbaşı teması"],
    ["Tamamen yeşil tüylerle kaplı vücut", "Alaycı huysuz yüz", "Noel baba kostümü giyer (bazen)"],
    ["Yalnız yaşayan yeşil yaratık", "Yılbaşı hırsızı"],
    ["Yılbaşından nefret eder", "Kasabadaki tüm hediyeleri çalmaya çalışır", "Köpeği Max ile dağda yaşar"]
  ),

  createMovieCharacter(
    3046,
    "Gülşah",
    ["gülşah"],
    ["Yeşilçam klasikleri", "Türk aile komedi draması"],
    ["Küçük yaşta kız çocuğu", "İki yandan toplanmış saçlar", "Önlük veya elbiseler"],
    ["Ana karakter çocuk", "Sevimli yancı"],
    ["Hülya Koçyiğit'in kızı canlandırır", "Kemal Sunal (İbo) filmlerinde oynar", "Ağlatırken güldüren eski Türk filmi ikonu"]
  ),

  createMovieCharacter(
    3047,
    "İnek Şaban",
    ["şaban", "inek şaban", "kemal sunal"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Okul üniforması", "Sürekli gülen şaşkın yüz ifadesi", "Yandan ayrılmış saçlar"],
    ["Öğrenci", "Sınıfın neşe kaynağı", "Saf kahraman"],
    ["Hababam Sınıfı üyesidir", "Tulum Hayri ve Güdük Necmi ile takılır", "Kel Mahmut'tan sürekli kaçar"]
  ),

  createMovieCharacter(
    3048,
    "Güdük Necmi",
    ["güdük necmi", "güdük"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kısa boy", "Okul üniforması", "Kurnazca gülüş"],
    ["Öğrenci", "Şakacı sınıf üyesi"],
    ["İnek Şaban'a sürekli şakalar yapar", "Halit Akçatepe tarafından canlandırılmıştır", "Hababam Sınıfı'nın en kısasıdır"]
  ),

  createMovieCharacter(
    3049,
    "Damat Ferit",
    ["damat ferit", "ferit"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi / Romantik"],
    ["Çok yakışıklı jön yüzü", "Okul üniforması veya şık 70'ler kıyafetleri"],
    ["Öğrenci", "Sınıfın kalbini çalan elemanı", "Aşık genç"],
    ["Tarık Akan tarafından canlandırılmıştır", "Kızlar okuluna kaçmasıyla bilinir", "Hababam Sınıfı'nın yakışıklısıdır"]
  ),

  createMovieCharacter(
    3050,
    "Kel Mahmut",
    ["kel mahmut", "mahmut hoca"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kel kafa", "Gözlük", "Takım elbise", "Ciddi ama babacan yüz"],
    ["Müdür muavini", "Tarih öğretmeni", "Baba figürü"],
    ["'Okul sadece dört tarafı duvarla çevrili yer değildir' repliği", "Hababam Sınıfı'nı sürekli yakalar", "Münir Özkul tarafından canlandırılmıştır"]
  ),

  createMovieCharacter(
    3051,
    "Hafize Ana",
    ["hafize ana", "hafize"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Başörtüsü", "Önlük", "Elindeki büyük okul zili"],
    ["Okul hizmetlisi", "Öğrenci dostu anne"],
    ["Adile Naşit tarafından canlandırılmıştır", "Hababam Sınıfı'na gizlice patates kızartması taşır", "Okul zilini merdivenlerden koşarak çalar"]
  ),

  createMovieCharacter(
    3052,
    "Badi Ekrem",
    ["badi ekrem", "ekrem hoca"],
    ["Yeşilçam efsanesi", "Türk sineması okul komedisi"],
    ["Kırmızı veya sarı dar eşofman takımı", "Boynunda düdük", "Kel kafaya benzeyen seyrek saçlar"],
    ["Beden eğitimi öğretmeni"],
    ["Şener Şen tarafından canlandırılmıştır", "Sürekli 'Ben klas bir sporcuyum' der", "Hababam sınıfına şınav çektirmeye çalışırken rezil olur"]
  ),

  createMovieCharacter(
    3053,
    "Tosun Paşa",
    ["tosun paşa", "tosun pasa"],
    ["Yeşilçam komedisi", "Osmanlı dönemi Mısır hikayesi"],
    ["Fes", "Paşa kıyafetleri ve apoletler", "Heybetli yürüyüş (sahtesinde şaşkınlık)"],
    ["Paşa (Sahte)", "Yeşil vadiyi ele geçirmeye çalışan figür"],
    ["Yeşil Vadi'yi Tellioğulları adına almak için Şaban paşa kılığına girer", "Hakiki Tosun Paşa sonradan gelir", "Şener Şen (Lütfü) ile plan yapar"]
  ),

  createMovieCharacter(
    3054,
    "Kibar Feyzo",
    ["kibar feyzo", "feyzo"],
    ["Yeşilçam klasikleri", "Köy ve ağalık sistem eleştirisi komedisi"],
    ["Şapka", "Eski köy kıyafetleri", "Duvara yazı yazma sahneleri"],
    ["Irgat", "Aşık köylü", "Askerden dönen genç"],
    ["Maho Ağa'ya karşı mücadele eder", "Köyde tuvalet yapmasıyla olay olur", "'Ağam bizimle eğleniyir' repliğiyle bilinir"]
  ),

  createMovieCharacter(
    3055,
    "Maho Ağa",
    ["maho ağa", "maho aga", "maho"],
    ["Yeşilçam klasikleri", "Köy ve ağalık sistem eleştirisi komedisi"],
    ["Körük çizme", "Ağa kıyafeti (Yelekli köstekli saat)", "Bıyık"],
    ["Köy Ağası", "Antagonist", "Zalim patron"],
    ["Şener Şen canlandırmıştır", "Köylüleri sürekli sömürür ve şehre sürer", "Feyzo'yu köyden kovar"]
  ),

  createMovieCharacter(
    3056,
    "Süpermen Dönüşü Vecihi",
    ["vecihi"],
    ["Yeşilçam komedisi", "Türk sineması klasik aile filmi"],
    ["Deri pilot şapkası", "Büyük pilot gözlüğü", "Sürekli uçak kullanan çılgın aşık imajı"],
    ["Pilot", "Çılgın aşık"],
    ["Şener Şen canlandırmıştır", "Ayşen Gruda'nın (Yaşar) aşkından eve uçakla dalar", "Kız babası Münir Özkul'u çıldırtır"]
  ),

  createMovieCharacter(
    3057,
    "Ziya (Yalancı)",
    ["ziya", "jilet riza", "yalanci ziya"],
    ["Yeşilçam komedisi", "Mahalle kültürü filmi"],
    ["Geniş yakalı 70'ler gömleği", "Bıyık", "Sürekli abartan el hareketleri"],
    ["Mahallenin yalancısı", "İşsiz güçsüz arkadaş"],
    ["Şener Şen canlandırmıştır", "Münih'te aslanı nasıl gözünden vurduğunu anlatır", "Meltem rüzgarı repliği ünlüdür (Jilet Rıza ile kapışır)"]
  ),

  createMovieCharacter(
    3058,
    "Çiçek Abbas",
    ["çiçek abbas", "abbas"],
    ["Yeşilçam klasiği", "Minibüsçüler yarışı"],
    ["Şoför şapkası", "Bıyık", "Kırmızı modifiyeli minibüs"],
    ["Muavin / Şoför", "Aşık genç"],
    ["İlyas Salman canlandırmıştır", "Şakir (Şener Şen) ile atışma sahneleri efsanedir", "'Herkese benden çay, Şakir'e yok' repliğiyle bilinir"]
  ),

  createMovieCharacter(
    3059,
    "Arif Işık",
    ["arif", "arif isik", "gora arif"],
    ["Türk bilim kurgu komedisi", "Uzay teması"],
    ["Kareli gömlek (başta)", "Uzay tulumu (GORA)", "Deri ceket"],
    ["Halı tüccarı", "UFO fotoğrafçısı", "Gezegen kurtarıcısı"],
    ["Cem Yılmaz canlandırmıştır", "Uzaylılar tarafından kaçırılır", "Logar'a karşı mücadele eder, komutan Logar bir cisim yaklaşıyor sahneleri"]
  ),

  createMovieCharacter(
    3060,
    "Komutan Logar",
    ["logar", "komutan logar"],
    ["Türk bilim kurgu komedisi", "Uzay teması"],
    ["Kel kafa", "Metalik kötü uzaylı kostümü", "Uzun tırnaklar ve pelerin"],
    ["Komutan", "GORA gezegeni yöneticisi", "Antagonist"],
    ["Cem Yılmaz canlandırmıştır", "Dünyalılardan ve özellikle Arif'ten nefret eder", "Büyük büyük dedesi dünyada hakarete uğramıştır"]
  ),

  createMovieCharacter(
    3061,
    "216",
    ["216", "robot 216"],
    ["Türk bilim kurgu komedisi", "Uzay ve nostalji teması"],
    ["Tamamen gri metalik vücut", "İnsan gibi taranmış sarı saçlar", "Mekanik ama sevimli hareketler"],
    ["Robot", "En yakın arkadaş", "İnsan olmak isteyen yapay zeka"],
    ["Ozan Güven canlandırmıştır", "Arif ile birlikte takılır", "Türk sanat müziğine ve Yeşilçam'a bayılır"]
  ),

  createMovieCharacter(
    3062,
    "Gözcü (GORA Erşan Kuneri)",
    ["erşan kuneri", "ersan kuneri"],
    ["Türk sineması komedisi", "Film yapımcılığı parodisi"],
    ["Uzun sarı peruk saç", "Geniş gözlükler", "70'ler deri ceket tarzı"],
    ["Yapımcı", "Yönetmen"],
    ["Cem Yılmaz'ın ikonik karakteridir", "GORA filminde porno film yapımcısı olarak ilk kez görünmüştür", "Sonradan kendi dizisi çekilmiştir"]
  ),

  createMovieCharacter(
    3063,
    "Muro",
    ["muro", "murat"],
    ["Türk mafya ve aksiyon serisi sinema filmi", "Politik komedi"],
    ["Gözlük", "Kirli sakal", "Deri ceket", "Sürekli sinirli yüz"],
    ["Örgüt lideri (Eski)", "Mahalle devrimcisi"],
    ["'Nalet olsun içimdeki insan sevgisine' repliği", "Çeto ile birlikte gezer", "Sürekli kapitalizm eleştirisi yapar"]
  ),

  createMovieCharacter(
    3064,
    "İskender Büyük",
    ["iskender büyük", "iskender"],
    ["Türk mafya ve aksiyon serisi sinema filmi", "Derin devlet teması"],
    ["Her zaman şık takım elbiseler", "Kırmızı fular", "Geriye taranmış beyaz-siyah saç", "Keçi sakalı"],
    ["Derin devlet ajanı", "Baron", "Antagonist"],
    ["Polat Alemdar'ın en büyük düşmanlarındandır", "Sürekli operasyonlar yönetir", "Devlet adına çalıştığını iddia eder"]
  ),

  createMovieCharacter(
    3065,
    "Kaptan Amerika'nın Kalkanı",
    ["kaptan amerikanın kalkanı", "kalkan"],
    ["Süper kahraman evreni", "Marvel eşyası (Mizahi karakter unsuru)"],
    ["Yuvarlak disk şeklinde", "Mavi kırmızı beyaz renkler", "Ortasında büyük beyaz yıldız"],
    ["Silah / Savunma aracı", "Sembol nesne"],
    ["Vibranyum madeninden yapılmıştır", "Fırlatılınca bumerang gibi geri döner", "Fizik kurallarına aykırı seker"]
  ),

  createMovieCharacter(
    3066,
    "Sloth (Goonies)",
    ["sloth"],
    ["85 yapımı macera klasiği", "Define avı"],
    ["Deforme olmuş kafa ve göz yapısı", "Süpermen tişörtü", "Devasa cüsse"],
    ["Dışlanmış kardeş", "Kurtarıcı dev"],
    ["'Hey you guys!' diye bağırır", "Çocuklara defineyi bulmada yardım eder", "Çikolatayı çok sever"]
  ),

  createMovieCharacter(
    3067,
    "Marty McFly'ın Uçan Kaykayı",
    ["uçan kaykay", "hoverboard"],
    ["Bilim kurgu komedi", "Zaman yolculuğu eşyası"],
    ["Tekerleği olmayan pembe yeşil tasarım kaykay", "Altında mıknatıslı paneller"],
    ["Ulaşım aracı", "Gelecek teknolojisi"],
    ["Gelecekte (2015'te) çocuklardan ödünç alınmıştır", "Su üzerinde çalışmaz (Çekiş gücü biter)", "Serinin ikinci filminde ikoniktir"]
  ),

  createMovieCharacter(
    3068,
    "Wilson (Voleybol Topu)",
    ["wilson", "voleybol topu wilson"],
    ["Hayatta kalma draması", "Issız ada teması"],
    ["Beyaz voleybol topu", "Üzerinde kanla çizilmiş insan yüzü figürü", "Ot saçlar"],
    ["Hayali arkadaş", "Cansız yoldaş"],
    ["Tom Hanks adada delirmemek için onunla konuşur", "Markası topun adıdır", "Denizde kaybolduğunda ana karakteri ağlatmıştır"]
  ),

  createMovieCharacter(
    3069,
    "Groot",
    ["groot", "bebek groot", "baby groot"],
    ["Uzay bilim kurgu kahramanları", "Marvel evreni"],
    ["Ağaçtan yapılmış vücut", "Dallar ve yapraklar", "Sevimli parlayan gözler"],
    ["Uzay savaşçısı", "Takım üyesi", "Muhafız"],
    ["Sadece 'I am Groot' (Ben Groot) der", "Kendini feda edip bebek olarak yeniden doğmuştur", "Roket Rakun ile kankadır"]
  ),

  createMovieCharacter(
    3070,
    "Chucky",
    ["chucky", "çaki", "katil bebek chucky"],
    ["Korku - gerilim", "Katil oyuncak serisi"],
    ["Çizgili kazak", "Askılı kot pantolon", "Yüzünde dikiş izleri ve kızıl saçlar", "Bıçak"],
    ["Oyuncak bebek", "Seri katilin ruhunu taşıyan nesne"],
    ["Bir çocuğun oyuncağına saklanan katildir", "Kült korku ikonudur", "Geceleri canlanır"]
  ),  






 createMovieCharacter(
    3071,
    "Ron Weasley",
    ["ron", "ron weasley", "ronald weasley"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Turuncu saç", "Çilli yüz", "Genç büyücü"],
    ["Ana karakterin yakın arkadaşı", "Büyücü öğrenci", "Büyük bir ailenin çocuğu"],
    ["Komik", "Sadık", "Bazen korkak ama cesur davranır"]
  ),

  createMovieCharacter(
    3072,
    "Darth Vader",
    ["darth vader", "vader", "anakin", "anakin skywalker"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "1970'lerde başlayan kült seri"],
    ["Siyah zırh", "Siyah kask", "Pelerin", "Mekanik nefes"],
    ["Karanlık taraf savaşçısı", "Eski kahraman", "İmparatorluk figürü"],
    ["İkonik kötü karakter", "Kırmızı ışın kılıcı", "Mekanik nefes sesiyle bilinir"]
  ),

  createMovieCharacter(
    3073,
    "Obi-Wan Kenobi",
    ["obi wan", "obiwan", "obi-wan", "obi wan kenobi", "obi-wan kenobi", "kenobi"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "1970'lerde başlayan kült seri"],
    ["Jedi cübbesi", "Sakal", "Işın kılıcı"],
    ["Jedi ustası", "Mentor", "Eski öğrencisiyle çatışır"],
    ["Bilge", "Sakin", "Mavi ışın kılıcıyla hatırlanır"]
  ),

  createMovieCharacter(
    3074,
    "Willy Wonka",
    ["willy wonka", "wonka", "wily wonka"],
    ["Fantastik aile filmi", "Kitaptan uyarlama", "Masalsı hikaye"],
    ["Renkli kıyafetler", "Şapka", "Eksantrik görünüm"],
    ["Fabrika sahibi", "Gizemli ev sahibi", "Yaratıcı mucit"],
    ["Çikolata fabrikası", "Altın bilet", "Tuhaf ve eğlenceli"]
  ),

  createMovieCharacter(
    3075,
    "Jack Sparrow",
    ["jack sparrow", "captain jack sparrow", "kaptan jack sparrow"],
    ["Macera - fantastik seri", "Korsan temalı evren", "2000'lerde popülerleşen seri"],
    ["Korsan şapkası", "Uzun saç", "Sürmeli gözler"],
    ["Kaptan", "Korsan", "Kaçak ve maceracı"],
    ["Kurnaz", "Komik", "Black Pearl ile bağlantılı"]
  ),

  createMovieCharacter(
    3076,
    "Forrest Gump",
    ["forrest", "forrest gump"],
    ["Drama - komedi filmi", "1990'ların Amerikan klasiklerinden", "Hayat hikayesi anlatan film"],
    ["Takım elbise", "Bankta oturmasıyla hatırlanır", "Koşu sahneleri"],
    ["Sıradan görünen ana karakter", "Hayatı tesadüflerle değişen kişi"],
    ["Saf", "İyi kalpli", "Çok koşmasıyla bilinir"]
  ),

  createMovieCharacter(
    3077,
    "Indiana Jones",
    ["indiana jones", "indy"],
    ["Macera filmi", "Arkeoloji temalı seri", "Kayıp eserler ve antik gizemler"],
    ["Şapka", "Deri ceket", "Kırbaç"],
    ["Arkeolog", "Kaşif", "Macera kahramanı"],
    ["Kırbacıyla tanınır", "Yılanlardan hoşlanmaz", "Antik eser peşindedir"]
  ),

  createMovieCharacter(
    3078,
    "The Joker",
    ["joker", "the joker"],
    ["Süper kahraman evreni", "Suç temalı çizgi roman uyarlamaları", "Karanlık şehir atmosferi"],
    ["Beyaz yüz makyajı", "Yeşil saç", "Mor takım elbise"],
    ["Antagonist", "Kaos figürü", "Suç dehası"],
    ["Kaotik", "Gülümsemesiyle tanınır", "Batman ile bağlantılı"]
  ),

  createMovieCharacter(
    3079,
    "Batman",
    ["batman", "bruce wayne"],
    ["Süper kahraman filmi", "Karanlık şehir atmosferi", "Çizgi roman uyarlaması"],
    ["Siyah kostüm", "Pelerin", "Yarasa maskesi"],
    ["Kahraman", "Dedektif", "Milyarder kimliği olan figür"],
    ["Gotham ile bağlantılı", "Yarasa sembolü", "Teknolojik araçlar kullanır"]
  ),

  createMovieCharacter(
    3080,
    "Tony Stark",
    ["tony stark", "iron man", "demir adam"],
    ["Süper kahraman filmi", "Teknoloji ve zırh teması", "Paylaşımlı sinema evreni"],
    ["Metal zırh", "Sakal", "Parlayan göğüs reaktörü"],
    ["Mucit", "Milyarder", "Süper kahraman"],
    ["Esprili", "Zeki", "Zırhıyla uçar"]
  ),

  createMovieCharacter(
    3081,
    "Captain Jack Torrance",
    ["jack torrance", "captain jack torrance", "jack"],
    ["Psikolojik korku", "Otel temalı hikaye", "Kış atmosferi"],
    ["Kışlık kıyafet", "Dağınık görünüm", "Yoğun bakışlar"],
    ["Baba", "Yazar", "Otel görevlisi"],
    ["Gerilimle hatırlanır", "Kült korku karakteri", "İzole otel ile bağlantılı"]
  ),

  createMovieCharacter(
    3082,
    "Neo",
    ["neo", "thomas anderson"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "1990'ların kült filmi"],
    ["Siyah gözlük", "Siyah uzun ceket", "Minimal görünüm"],
    ["Seçilmiş kişi", "Bilgisayar korsanı", "Sistemle mücadele eden karakter"],
    ["Mermilerden kaçma sahnesiyle bilinir", "Matrix evreni", "Kod dünyasıyla bağlantılı"]
  ),

  createMovieCharacter(
    3083,
    "Morpheus",
    ["morpheus"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "Kült aksiyon filmi"],
    ["Gözlük", "Deri kıyafet", "Sakin ve karizmatik görünüm"],
    ["Mentor", "Direniş lideri", "Rehber karakter"],
    ["Kırmızı hap / mavi hap seçimiyle bilinir", "Bilge", "Matrix evreni"]
  ),

  createMovieCharacter(
    3084,
    "Ellen Ripley",
    ["ripley", "ellen ripley"],
    ["Bilim kurgu - korku", "Uzay gemisi atmosferi", "Yaratık temalı seri"],
    ["Kısa saç", "Uzay gemisi kıyafeti", "Sert ve sade görünüm"],
    ["Hayatta kalan kahraman", "Uzay görevlisi", "Mücadeleci karakter"],
    ["Cesur", "Dirençli", "Uzaylı yaratıklarla bağlantılı"]
  ),

  createMovieCharacter(
    3085,
    "Rocky Balboa",
    ["rocky", "rocky balboa"],
    ["Spor filmi", "Boks temalı seri", "Azim hikayesi"],
    ["Boks eldiveni", "Eşofman", "Sade sporcu görünümü"],
    ["Boksör", "Underdog kahraman", "Çalışkan sporcu"],
    ["Merdiven antrenmanıyla bilinir", "Philadelphia ile bağlantılı", "Asla pes etmeyen karakter"]
  ),

  createMovieCharacter(
    3086,
    "Vito Corleone",
    ["vito", "vito corleone", "don corleone"],
    ["Suç draması", "Aile ve güç teması", "1970'lerin kült filmi"],
    ["Takım elbise", "Ciddi yüz ifadesi", "Klasik mafya görünümü"],
    ["Aile lideri", "Baba figürü", "Güç sahibi kişi"],
    ["Saygı ve korkuyla anılır", "Corleone ailesi", "Don unvanıyla bilinir"]
  ),

  createMovieCharacter(
    3087,
    "Michael Corleone",
    ["michael", "michael corleone"],
    ["Suç draması", "Aile ve güç teması", "Kült üçleme"],
    ["Takım elbise", "Soğukkanlı görünüm", "Ciddi duruş"],
    ["Aile üyesi", "Liderliğe yükselen karakter", "Stratejik figür"],
    ["Soğukkanlı", "Dönüşüm hikayesi", "Corleone ailesi"]
  ),

  createMovieCharacter(
    3088,
    "Marty McFly",
    ["marty", "marty mcfly", "mcfly"],
    ["Bilim kurgu - komedi", "Zaman yolculuğu teması", "1980'lerin popüler filmi"],
    ["Kırmızı yelek", "Spor ayakkabı", "Genç görünüm"],
    ["Genç kahraman", "Zaman yolcusu", "Müzikle bağlantılı karakter"],
    ["Kaykay", "Gitar", "DeLorean ile bağlantılı"]
  ),

  createMovieCharacter(
    3089,
    "Doc Brown",
    ["doc brown", "doctor brown", "emmett brown"],
    ["Bilim kurgu - komedi", "Zaman yolculuğu teması", "1980'lerin popüler filmi"],
    ["Dağınık beyaz saç", "Laboratuvar önlüğü", "Çılgın bilim insanı görünümü"],
    ["Mucit", "Bilim insanı", "Mentor"],
    ["DeLorean", "Zaman makinesi", "Eksantrik ve enerjik"]
  ),

  createMovieCharacter(
    3090,
    "Gandalf",
    ["gandalf", "gandalf the grey", "gandalf the white"],
    ["Fantastik seri", "Orta dünya evreni", "Kitaptan uyarlama"],
    ["Uzun sakal", "Asa", "Gri/beyaz cübbe"],
    ["Büyücü", "Mentor", "Yol gösterici"],
    ["Bilge", "Güçlü büyücü", "You shall not pass sahnesiyle bilinir"]
  ),

  createMovieCharacter(
    3091,
    "Frodo Baggins",
    ["frodo", "frodo baggins"],
    ["Fantastik seri", "Orta dünya evreni", "Kitaptan uyarlama"],
    ["Kısa boy", "Kıvırcık saç", "Hobbit görünümü"],
    ["Taşıyıcı", "Ana yolculuk kahramanı", "Hobbit"],
    ["Yüzükle bağlantılı", "Shire kökenli", "Zorlu yolculuğa çıkar"]
  ),

  createMovieCharacter(
    3092,
    "Hermione Granger",
    ["hermione", "hermione granger"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Kahverengi kabarık saç", "Okul forması", "Büyücü öğrenci görünümü"],
    ["Öğrenci", "Ana üçlüden biri", "Çok zeki karakter"],
    ["Kitap kurdu", "Zeki", "Büyü bilgisiyle öne çıkar"]
  ),

  createMovieCharacter(
    3093,
    "Harry Potter",
    ["harry", "harry potter"],
    ["Fantastik seri", "Büyücülük temalı evren", "2000'lerin popüler film serilerinden"],
    ["Gözlük", "Alnında iz", "Okul forması"],
    ["Ana kahraman", "Büyücü öğrenci", "Seçilmiş kişi"],
    ["Asa kullanır", "Quidditch ile bağlantılı", "Karanlık büyücüyle mücadele eder"]
  ),

  createMovieCharacter(
    3094,
    "Tyler Durden",
    ["tyler", "tyler durden"],
    ["Psikolojik drama", "1990'ların kült filmi", "Yeraltı kulübü teması"],
    ["Kırmızı deri ceket", "Dağınık tarz", "Karizmatik görünüm"],
    ["Provokatif figür", "Kulüp kurucusu", "Anlatıyla bağlantılı karakter"],
    ["Kaotik", "Karizmatik", "Tüketim karşıtı tavırla bilinir"]
  ),

  createMovieCharacter(
    3095,
    "Maximus Decimus Meridius",
    ["maximus", "maximus decimus meridius"],
    ["Tarihi epik film", "Roma dönemi", "Gladyatör teması"],
    ["Zırh", "Kılıç", "Gladyatör görünümü"],
    ["Komutan", "Gladyatör", "İntikam yolculuğundaki kahraman"],
    ["Onur", "Liderlik", "Roma arenasıyla bağlantılı"]
  ),

createMovieCharacter(
    3096,
    "Princess Leia",
    ["princess leia", "leia", "leia organa", "prenses leia"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "İsyan ve imparatorluk çatışması"],
    ["Beyaz elbise", "İkonik topuz saç", "Blaster tabanca"],
    ["Prenses", "İsyan lideri", "Diplomat"],
    ["Güçlü liderlik", "Luke Skywalker ile bağlantılı", "Han Solo ile ilişkisiyle bilinir"]
  ),

  createMovieCharacter(
    3097,
    "Chewbacca",
    ["chewbacca", "chewie", "çubakka", "cubakka"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Kaçakçı ve isyan hikayesi"],
    ["Uzun tüylü beden", "Bandolier kemer", "Wookiee görünümü"],
    ["Yardımcı karakter", "Pilot ortağı", "Savaşçı"],
    ["Han Solo'nun yakın dostu", "Millennium Falcon ile bağlantılı", "Kükremesiyle tanınır"]
  ),

  createMovieCharacter(
    3098,
    "R2-D2",
    ["r2d2", "r2-d2", "artoo"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Droid karakterlerin öne çıktığı seri"],
    ["Küçük silindirik gövde", "Mavi beyaz metal", "Tekerlekli droid"],
    ["Astromech droid", "Yardımcı", "Görev taşıyıcısı"],
    ["Bip sesleriyle konuşur", "Planları ve mesajları taşır", "C-3PO ile ikili oluşturur"]
  ),

  createMovieCharacter(
    3099,
    "C-3PO",
    ["c3po", "c-3po", "threepio"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Droid karakterlerin öne çıktığı seri"],
    ["Altın renkli humanoid robot", "Parlak metal gövde", "Endişeli duruş"],
    ["Protokol droidi", "Çevirmen", "Yardımcı karakter"],
    ["Çok sayıda dili bilir", "Endişeli konuşmalarıyla bilinir", "R2-D2 ile ikili oluşturur"]
  ),

  createMovieCharacter(
    3100,
    "Rey",
    ["rey", "rey skywalker", "rey palpatine"],
    ["Uzay operası", "Yeni dönem bilim kurgu - fantastik seri", "Jedi mirası hikayesi"],
    ["Sarımsı kumaş kıyafet", "Topuz saç", "Işın kılıcı"],
    ["Jedi", "Çöp toplayıcısı kökenli kahraman", "Ana kahraman"],
    ["Güç ile bağlantılıdır", "Çöl gezegeninden çıkar", "Kendi kimliğini arar"]
  ),

  createMovieCharacter(
    3101,
    "Kylo Ren",
    ["kylo ren", "ben solo", "kylo"],
    ["Uzay operası", "Yeni dönem bilim kurgu - fantastik seri", "Karanlık taraf hikayesi"],
    ["Siyah maske", "Siyah pelerin", "Kırmızı çapraz ışın kılıcı"],
    ["Antagonist", "Karanlık taraf savaşçısı", "Eski Jedi öğrencisi"],
    ["Ben Solo kimliğiyle bağlantılıdır", "Darth Vader'a hayranlık duyar", "İç çatışmasıyla bilinir"]
  ),

  createMovieCharacter(
    3102,
    "Mulan",
    ["mulan", "fa mulan"],
    ["Animasyon", "Aile filmi", "Savaş ve kimlik hikayesi"],
    ["Zırh", "Uzun siyah saç", "Kılıç"],
    ["Savaşçı", "Aile üyesi", "Gizli asker"],
    ["Ailesini korumak için orduya katılır", "Cesaretiyle bilinir", "Çin efsanesinden uyarlanmıştır"]
  ),

  createMovieCharacter(
    3103,
    "Elsa",
    ["elsa", "queen elsa", "kraliçe elsa", "kralice elsa"],
    ["Animasyon", "Müzikal fantastik film", "Buz ve kardeşlik teması"],
    ["Sarı örgülü saç", "Mavi elbise", "Buz efektleri"],
    ["Kraliçe", "Büyülü güçlere sahip karakter", "Kardeş"],
    ["Buz güçleriyle bilinir", "Let it go sahnesiyle hatırlanır", "Arendelle ile bağlantılıdır"]
  ),

  createMovieCharacter(
    3104,
    "Simba",
    ["simba"],
    ["Animasyon", "Aile filmi", "Krallık ve büyüme hikayesi"],
    ["Aslan", "Altın renkli tüyler", "Genç ve yetişkin hali vardır"],
    ["Prens", "Kral", "Ana kahraman"],
    ["Hakuna Matata ile bağlantılıdır", "Babası Mufasa'dır", "Sürgünden krallığa döner"]
  ),

  createMovieCharacter(
    3105,
    "Mufasa",
    ["mufasa"],
    ["Animasyon", "Aile filmi", "Krallık ve aile teması"],
    ["Görkemli aslan", "Geniş yele", "Bilge görünüm"],
    ["Kral", "Baba figürü", "Mentor"],
    ["Simba'nın babasıdır", "Bilge lider olarak bilinir", "Aslan Kayası ile bağlantılıdır"]
  ),

  createMovieCharacter(
    3106,
    "Scar",
    ["scar", "skar"],
    ["Animasyon", "Aile filmi", "Krallık ve ihanet teması"],
    ["Koyu renkli aslan", "Gözünde yara izi", "Sinsi görünüm"],
    ["Antagonist", "Kardeş", "Tahtı ele geçirmek isteyen figür"],
    ["Mufasa'nın kardeşidir", "İhanetiyle bilinir", "Karanlık ve manipülatif karakter"]
  ),

  createMovieCharacter(
    3107,
    "Woody",
    ["woody", "sheriff woody"],
    ["Animasyon", "Oyuncak temalı macera", "Aile dostu seri"],
    ["Kovboy şapkası", "Sarı gömlek", "Yelek", "Oyuncak bebek görünümü"],
    ["Oyuncak", "Şerif", "Lider"],
    ["Andy'nin oyuncağıdır", "Buzz Lightyear ile dosttur", "Sadakat temasıyla öne çıkar"]
  ),

  createMovieCharacter(
    3108,
    "Buzz Lightyear",
    ["buzz", "buzz lightyear"],
    ["Animasyon", "Oyuncak temalı macera", "Bilim kurgu parodisi"],
    ["Uzay giysisi", "Mor yeşil beyaz zırh", "Kanatlı oyuncak"],
    ["Oyuncak", "Uzay koruyucusu", "Kahraman"],
    ["Sonsuzluğa ve ötesine sözüyle bilinir", "Başta gerçek uzaylı olduğunu sanır", "Woody ile ikili oluşturur"]
  ),

  createMovieCharacter(
    3109,
    "Sulley",
    ["sulley", "james p sullivan", "james sullivan"],
    ["Animasyon", "Canavarlar dünyası", "Aile komedisi"],
    ["Mavi tüylü dev canavar", "Mor benekler", "Boynuzlar"],
    ["Canavar", "Korkutucu", "Koruyucu figür"],
    ["Boo ile bağlantılıdır", "Mike Wazowski'nin dostudur", "Korkutuculuktan sevgiye dönüşür"]
  ),

  createMovieCharacter(
    3110,
    "Mike Wazowski",
    ["mike", "mike wazowski", "wazowski"],
    ["Animasyon", "Canavarlar dünyası", "Aile komedisi"],
    ["Tek gözlü yeşil canavar", "Kısa boy", "Yuvarlak beden"],
    ["Canavar", "Yardımcı karakter", "Komik figür"],
    ["Sulley'in en yakın dostudur", "Tek gözüyle tanınır", "Komik panik halleriyle bilinir"]
  ),

  createMovieCharacter(
    3111,
    "Nemo",
    ["nemo"],
    ["Animasyon", "Deniz altı macerası", "Aile filmi"],
    ["Turuncu beyaz palyaço balığı", "Bir yüzgeci küçüktür"],
    ["Çocuk karakter", "Kayıp balık", "Ana aranan kişi"],
    ["Babası Marlin tarafından aranır", "Mercan resifiyle bağlantılıdır", "Cesaretiyle öne çıkar"]
  ),

  createMovieCharacter(
    3112,
    "Dory",
    ["dory"],
    ["Animasyon", "Deniz altı macerası", "Komedi ve aile filmi"],
    ["Mavi balık", "Sarı kuyruk", "Büyük gözler"],
    ["Yardımcı karakter", "Dost", "Rehber"],
    ["Kısa süreli hafıza sorunu vardır", "Just keep swimming sözüyle bilinir", "Nemo'nun bulunmasına yardım eder"]
  ),

  createMovieCharacter(
    3113,
    "Po",
    ["po", "kung fu panda"],
    ["Animasyon", "Dövüş sanatları komedisi", "Aile filmi"],
    ["Büyük panda", "Siyah beyaz tüyler", "Kung fu kıyafeti"],
    ["Savaşçı", "Seçilmiş kişi", "Aşçı kökenli kahraman"],
    ["Ejderha Savaşçısı olarak bilinir", "Mantı yemeyi sever", "Kung fu öğrenir"]
  ),

  createMovieCharacter(
    3114,
    "Hiccup",
    ["hiccup", "hiccup horrendous haddock", "hıçkıdık", "hickidik"],
    ["Animasyon", "Ejderha temalı macera", "Viking dünyası"],
    ["Zayıf genç Viking", "Kahverengi saç", "Mekanik ekipmanlar"],
    ["Ejderha eğitmeni", "Mucit", "Lider"],
    ["Toothless ile dosttur", "Ejderhaları anlamaya çalışır", "Viking geleneklerini değiştirir"]
  ),

  createMovieCharacter(
    3115,
    "Toothless",
    ["toothless", "dişsiz", "dissiz"],
    ["Animasyon", "Ejderha temalı macera", "Viking dünyası"],
    ["Siyah ejderha", "Büyük yeşil gözler", "Yaralı kuyruk kanadı"],
    ["Ejderha", "Dost", "Uçan savaşçı"],
    ["Night Fury türündendir", "Hiccup ile bağ kurar", "Hızlı ve zeki bir ejderhadır"]
  ),

  createMovieCharacter(
    3116,
    "Gru",
    ["gru", "felonius gru"],
    ["Animasyon", "Komedi", "Kötü adamdan aile babasına dönüşüm hikayesi"],
    ["Kel kafa", "Uzun burun", "Siyah gri kıyafet", "Atkı"],
    ["Eski kötü adam", "Baba figürü", "Mucit"],
    ["Minyonlarla bağlantılıdır", "Ayı çalma planıyla bilinir", "Evlat edindiği kızlarla değişir"]
  ),

  createMovieCharacter(
    3117,
    "Minion",
    ["minion", "minyon"],
    ["Animasyon", "Komedi", "Yan karakterlerin öne çıktığı seri"],
    ["Sarı küçük beden", "Mavi tulum", "Gözlük"],
    ["Yardımcı karakter", "Komik figür", "Hizmetkar"],
    ["Anlaşılmaz dilleriyle bilinir", "Gru ile bağlantılıdır", "Muz sevgisiyle hatırlanır"]
  ),

  createMovieCharacter(
    3118,
    "Optimus Prime",
    ["optimus", "optimus prime"],
    ["Bilim kurgu aksiyon", "Robot savaşı", "Oyuncak uyarlaması seri"],
    ["Kırmızı mavi dev robot", "Kamyon formuna dönüşür", "Metal zırh"],
    ["Lider", "Autobot", "Savaşçı"],
    ["Autobotların lideridir", "Dönüşebilen robottur", "Onurlu liderliğiyle bilinir"]
  ),

  createMovieCharacter(
    3119,
    "Bumblebee",
    ["bumblebee", "bumble bee"],
    ["Bilim kurgu aksiyon", "Robot savaşı", "Oyuncak uyarlaması seri"],
    ["Sarı siyah robot", "Araba formu", "Radyo ile konuşur"],
    ["Autobot", "Dost robot", "Koruyucu"],
    ["Sarı arabaya dönüşür", "İnsanlarla dostluk kurar", "Ses sistemiyle iletişim kurmasıyla bilinir"]
  ),

  createMovieCharacter(
    3120,
    "E.T.",
    ["et", "e.t.", "e t", "extra terrestrial"],
    ["Bilim kurgu", "Aile filmi", "Uzaylı dostluk hikayesi"],
    ["Küçük kahverengi uzaylı", "Uzun parmak", "Parlayan parmak ucu"],
    ["Uzaylı", "Dost", "Eve dönmeye çalışan karakter"],
    ["Telefonla evi aramak ister", "Bisiklet sahnesiyle bilinir", "Çocuklarla bağ kurar"]
  ),

  createMovieCharacter(
    3121,
    "Harry Callahan",
    ["harry callahan", "dirty harry", "kirli harry"],
    ["Polisiye aksiyon", "Suç filmi", "1970'ler Amerikan sineması"],
    ["Takım elbise", "Tabanca", "Sert polis görünümü"],
    ["Dedektif", "Polis", "Anti-kahraman"],
    ["Dirty Harry lakabıyla bilinir", "Sert yöntemleriyle tanınır", "Klasik replikleriyle hatırlanır"]
  ),

  createMovieCharacter(
    3122,
    "John Rambo",
    ["rambo", "john rambo"],
    ["Aksiyon filmi", "Savaş sonrası travma teması", "Hayatta kalma hikayesi"],
    ["Bandana", "Kaslı vücut", "Askeri kıyafet", "Yay ve bıçak"],
    ["Eski asker", "Komando", "Yalnız savaşçı"],
    ["Vietnam gazisi olarak bilinir", "Ormanda hayatta kalır", "Tek kişilik ordu gibi savaşır"]
  ),

  createMovieCharacter(
    3123,
    "Sarah Connor",
    ["sarah connor", "sarah"],
    ["Bilim kurgu aksiyon", "Robot kıyameti teması", "Zaman yolculuğu hikayesi"],
    ["Kısa saç", "Askeri kıyafet", "Silahlı ve sert görünüm"],
    ["Anne", "Direniş figürü", "Hayatta kalmaya çalışan kahraman"],
    ["John Connor'ın annesidir", "Geleceği değiştirmeye çalışır", "Terminatörlere karşı savaşır"]
  ),

  createMovieCharacter(
    3124,
    "T-1000",
    ["t-1000", "t1000"],
    ["Bilim kurgu aksiyon", "Robot kıyameti teması", "Zaman yolculuğu hikayesi"],
    ["Polis üniforması", "Sıvı metal beden", "Soğuk yüz ifadesi"],
    ["Antagonist", "Terminatör", "Takipçi robot"],
    ["Sıvı metalden oluşur", "Şekil değiştirebilir", "Neredeyse durdurulamaz"]
  ),

  createMovieCharacter(
    3125,
    "Trinity",
    ["trinity"],
    ["Bilim kurgu", "Sanal gerçeklik teması", "Kült aksiyon filmi"],
    ["Siyah deri kıyafet", "Kısa siyah saç", "Gözlük"],
    ["Direnişçi", "Hacker", "Savaşçı"],
    ["Neo ile bağlantılıdır", "Motosiklet sahneleriyle bilinir", "Matrix sistemine karşı savaşır"]
  ),

  createMovieCharacter(
    3126,
    "Jack Skellington",
    ["jack skellington", "jack", "balkabağı kralı", "balkabagi krali"],
    ["Stop-motion animasyon", "Gotik müzikal", "Cadılar Bayramı ve Noel teması"],
    ["İskelet beden", "Çizgili takım elbise", "Uzun ince görünüm"],
    ["Balkabağı Kralı", "Meraklı lider", "Ana karakter"],
    ["Halloween Town ile bağlantılıdır", "Noel'i keşfetmesiyle bilinir", "Gotik tasarımıyla öne çıkar"]
  ),

  createMovieCharacter(
    3127,
    "Coraline Jones",
    ["coraline", "coraline jones"],
    ["Stop-motion animasyon", "Karanlık fantastik film", "Alternatif dünya hikayesi"],
    ["Mavi saç", "Sarı yağmurluk", "Meraklı çocuk görünümü"],
    ["Çocuk kahraman", "Kaşif", "Tehlikeli dünyaya giren karakter"],
    ["Düğme gözlü alternatif aileyle karşılaşır", "Cesaretiyle bilinir", "Gizli kapıdan başka dünyaya geçer"]
  ),

  createMovieCharacter(
    3128,
    "Matilda Wormwood",
    ["matilda", "matilda wormwood"],
    ["Aile filmi", "Fantastik komedi", "Kitap uyarlaması"],
    ["Kısa saç", "Okul kıyafeti", "Kitaplarla bağlantılı görünüm"],
    ["Çocuk kahraman", "Öğrenci", "Zeki kız"],
    ["Telekinezi güçleri vardır", "Kitap okumayı sever", "Baskıcı ailesine karşı durur"]
  ),

  createMovieCharacter(
    3129,
    "Mary Poppins",
    ["mary poppins"],
    ["Müzikal fantastik film", "Aile filmi", "Sihirli bakıcı hikayesi"],
    ["Şapka", "Şemsiye", "Çanta", "Klasik bakıcı kıyafeti"],
    ["Bakıcı", "Sihirli figür", "Rehber"],
    ["Şemsiyeyle uçar", "Sihirli çantası vardır", "Çocuklara hayat dersi verir"]
  ),

  createMovieCharacter(
    3130,
    "Dorothy Gale",
    ["dorothy", "dorothy gale"],
    ["Fantastik müzikal", "Klasik aile filmi", "Masalsı yolculuk"],
    ["Mavi beyaz elbise", "Kırmızı ayakkabılar", "Örgülü saç"],
    ["Yolcu", "Çocuk kahraman", "Eve dönmeye çalışan karakter"],
    ["Oz diyarına gider", "Sarı tuğlalı yolla bağlantılıdır", "Toto adlı köpeği vardır"]
  ),

  createMovieCharacter(
    3131,
    "Scarlett O'Hara",
    ["scarlett", "scarlett o'hara", "scarlett ohara"],
    ["Tarihi romantik drama", "Amerikan İç Savaşı dönemi", "Klasik sinema"],
    ["Görkemli elbiseler", "Güçlü bakış", "Güneyli aristokrat görünümü"],
    ["Ana karakter", "Aile mirasını korumaya çalışan kadın", "Romantik drama figürü"],
    ["Tara çiftliğiyle bağlantılıdır", "İnatçı ve hırslıdır", "Klasik sinemanın ikonik karakterlerinden"]
  ),

  createMovieCharacter(
    3132,
    "Rick Blaine",
    ["rick blaine", "rick"],
    ["Romantik drama", "Savaş dönemi filmi", "Klasik sinema"],
    ["Beyaz takım elbise", "Sigara", "Bar sahibi görünümü"],
    ["Bar sahibi", "Eski aşık", "Ahlaki seçim yapan karakter"],
    ["Casablanca ile bağlantılıdır", "Cynical ama fedakar karakterdir", "Kült repliklerle hatırlanır"]
  ),

  createMovieCharacter(
    3133,
    "Ilsa Lund",
    ["ilsa", "ilsa lund"],
    ["Romantik drama", "Savaş dönemi filmi", "Klasik sinema"],
    ["Şık klasik kıyafetler", "Dalgın ve romantik görünüm"],
    ["Eski aşk", "Direniş liderinin eşi", "Dramatik figür"],
    ["Casablanca ile bağlantılıdır", "Rick Blaine ile geçmişi vardır", "Aşk ve görev arasında kalır"]
  ),

  createMovieCharacter(
    3134,
    "Tony Montana",
    ["tony montana", "scarface"],
    ["Suç draması", "Mafya ve yükseliş hikayesi", "1980'ler suç sineması"],
    ["Beyaz takım elbise", "Yara izi", "Puro", "Sert bakış"],
    ["Suç patronu", "Göçmen", "Anti-kahraman"],
    ["Scarface lakabıyla bilinir", "Miami suç dünyasıyla bağlantılıdır", "Güç hırsıyla düşüş yaşar"]
  ),

  createMovieCharacter(
    3135,
    "Darth Maul",
    ["darth maul", "maul"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Karanlık taraf karakteri"],
    ["Kırmızı siyah yüz dövmeleri", "Boynuzlar", "Çift taraflı kırmızı ışın kılıcı"],
    ["Sith", "Antagonist", "Savaşçı"],
    ["Çift taraflı ışın kılıcıyla bilinir", "Obi-Wan ile düellosu vardır", "Sessiz ve tehditkar görünümüyle öne çıkar"]
  ),

  createMovieCharacter(
    3136,
    "Padmé Amidala",
    ["padme", "padmé", "padme amidala", "padmé amidala"],
    ["Uzay operası", "Bilim kurgu - fantastik evren", "Siyasi ve romantik hikaye"],
    ["Görkemli kraliçe kıyafetleri", "Klasik saç tasarımları", "Diplomatik görünüm"],
    ["Kraliçe", "Senatör", "Siyasi lider"],
    ["Naboo ile bağlantılıdır", "Anakin Skywalker ile ilişkisi vardır", "Leia ve Luke'un annesidir"]
  ),

  createMovieCharacter(
    3137,
    "Samwise Gamgee",
    ["sam", "samwise", "samwise gamgee"],
    ["Fantastik epik seri", "Orta Dünya", "Yolculuk ve dostluk hikayesi"],
    ["Kısa boy", "Kıvırcık saç", "Hobbit kıyafetleri"],
    ["Hobbit", "Yol arkadaşı", "Sadık dost"],
    ["Frodo'nun en yakın dostudur", "Sadakatiyle bilinir", "Yolculuğun görünmeyen kahramanıdır"]
  ),

  createMovieCharacter(
    3138,
    "Boromir",
    ["boromir"],
    ["Fantastik epik seri", "Orta Dünya", "Yüzük kardeşliği hikayesi"],
    ["Zırh", "Kalkan", "Borazan", "Uzun saç"],
    ["Savaşçı", "Gondor insanı", "Trajik kahraman"],
    ["Yüzüğün etkisine kapılır", "Gondor'u korumak ister", "Fedakarlığıyla hatırlanır"]
  ),

  createMovieCharacter(
    3139,
    "Dobby",
    ["dobby"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Sadakat temalı hikaye"],
    ["Büyük kulaklar", "Küçük beden", "Eski bez kıyafet"],
    ["Ev cini", "Yardımcı karakter", "Sadık dost"],
    ["Özgürlük için çorapla bağlantılıdır", "Harry Potter'a yardım eder", "Sadakatiyle bilinir"]
  ),

  createMovieCharacter(
    3140,
    "Sirius Black",
    ["sirius", "sirius black", "padfoot"],
    ["Fantastik büyücülük serisi", "Aile ve geçmiş sırları teması"],
    ["Uzun siyah saç", "Sakallı görünüm", "Koyu kıyafetler"],
    ["Vaftiz babası", "Kaçak mahkum", "Animagus"],
    ["Köpeğe dönüşebilir", "Harry Potter'ın vaftiz babasıdır", "Azkaban ile bağlantılıdır"]
  ),

  createMovieCharacter(
    3141,
    "Albus Dumbledore",
    ["dumbledore", "albus dumbledore", "albus"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Mentor hikayesi"],
    ["Uzun beyaz sakal", "Cübbe", "Yarım ay gözlük"],
    ["Müdür", "Büyücü", "Mentor"],
    ["Hogwarts müdürüdür", "Bilge karakter olarak bilinir", "Karanlık büyüye karşı önemli figürdür"]
  ),

  createMovieCharacter(
    3142,
    "Minerva McGonagall",
    ["mcgonagall", "minerva mcgonagall", "minerva"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Öğretmen hikayesi"],
    ["Sivri şapka", "Cübbe", "Ciddi duruş"],
    ["Profesör", "Bina başkanı", "Animagus"],
    ["Kediye dönüşebilir", "Disiplinli ama adil öğretmendir", "Hogwarts savunmasında öne çıkar"]
  ),

  createMovieCharacter(
    3143,
    "Rubeus Hagrid",
    ["hagrid", "rubeus hagrid"],
    ["Fantastik büyücülük serisi", "Okul ve büyü dünyası", "Yaratıklar teması"],
    ["Dev cüsseli", "Gür sakal", "Kaba palto"],
    ["Yarı-dev", "Bekçi", "Yaratık bakıcısı"],
    ["Sihirli yaratıkları sever", "Harry Potter'ı büyü dünyasına götürür", "İyi kalpli ve duygusaldır"]
  ),

  createMovieCharacter(
    3144,
    "Harley Quinn",
    ["harley", "harley quinn", "harleen quinzel"],
    ["Süper kahraman evreni", "Anti-kahraman ve suç teması", "Çizgi roman uyarlaması"],
    ["Renkli saçlar", "Çılgın kıyafetler", "Beyzbol sopası"],
    ["Anti-kahraman", "Eski psikiyatrist", "Kaotik figür"],
    ["Joker ile bağlantılıdır", "Özgür ve kaotik tavrıyla bilinir", "Gotham evreninde öne çıkar"]
  ),

  createMovieCharacter(
    3145,
    "Black Panther",
    ["black panther", "t'challa", "tchalla", "kara panter"],
    ["Süper kahraman filmi", "Afrika fütürizmi", "Çizgi roman uyarlaması"],
    ["Siyah panter kostümü", "Vibranyum zırh", "Kral görünümü"],
    ["Kral", "Süper kahraman", "Savaşçı"],
    ["Wakanda ile bağlantılıdır", "Vibranyum teknolojisi kullanır", "Hem kral hem kahramandır"]
  )
];
