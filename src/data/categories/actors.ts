import type { GuessItem } from "../../types/game";
type ActorTag = "actor:hollywood" | "actor:turkish" | "actor:legend";
const createActor = (
  id: number,
  name: string,
  answers: string[],
  works: string[],
  origin: string[],
  roleStyle: string[],
  features: string[],
  tags: ActorTag[]
): GuessItem => {
  return {
    id,
    mode: "actor",
    modeLabel: "Aktör / Aktris",
    name,
    answers,
    tags,
    hintGroups: [
      { key: "works", label: "Yapımlar", hints: works },
      { key: "origin", label: "Ülke / Dönem", hints: origin },
      { key: "roleStyle", label: "Rol Tarzı", hints: roleStyle },
      { key: "features", label: "Özellik", hints: features },
    ],
  };
};

const a = createActor;

export const actors: GuessItem[] = [
  a(
    7001,
    "Tom Hanks",
    ["tom hanks", "hanks"],
    ["Forrest Gump", "Cast Away", "Saving Private Ryan"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dramatik roller"],
    ["Sıcak ve güven veren karakterlerle tanınır", "Hem dram hem komedide güçlüdür", "Uzun soluklu Hollywood kariyerine sahiptir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7002,
    "Leonardo DiCaprio",
    ["leonardo dicaprio", "dicaprio", "leo dicaprio"],
    ["Titanic", "Inception", "The Revenant"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dramatik başroller"],
    ["Yoğun karakter dönüşümleriyle bilinir", "Büyük yönetmenlerle sık çalışmıştır", "Genç yıldızlıktan prestij oyunculuğuna geçmiştir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7003,
    "Brad Pitt",
    ["brad pitt", "pitt"],
    ["Fight Club", "Seven", "Once Upon a Time in Hollywood"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Karizmatik başroller"],
    ["Kült filmlerle özdeşleşir", "Hem yıldız hem karakter oyuncusu olarak güçlüdür", "Yapımcı kimliği de vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7004,
    "Johnny Depp",
    ["johnny depp", "depp"],
    ["Pirates of the Caribbean", "Edward Scissorhands", "Charlie and the Chocolate Factory"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Eksantrik roller"],
    ["Sıra dışı karakter makyajlarıyla bilinir", "Fantastik ve gotik rollerde öne çıkar", "Korsan karakteri pop kültür ikonu olmuştur"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7005,
    "Robert De Niro",
    ["robert de niro", "de niro", "deniro"],
    ["Taxi Driver", "Raging Bull", "The Godfather Part II"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Suç draması ve karakter rolleri"],
    ["Metot oyunculuğuyla bilinir", "New York suç filmleriyle özdeşleşir", "Sinema tarihinin büyük oyuncularındandır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7006,
    "Al Pacino",
    ["al pacino", "pacino"],
    ["The Godfather", "Scarface", "Scent of a Woman"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Yoğun dramatik roller"],
    ["Patlayıcı tiratlarıyla tanınır", "Mafya ve suç rolleriyle ikonikleşmiştir", "Sahne kökenli güçlü bir oyuncudur"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7007,
    "Marlon Brando",
    ["marlon brando", "brando"],
    ["The Godfather", "A Streetcar Named Desire", "On the Waterfront"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Klasik dram"],
    ["Modern oyunculuk anlayışını etkilemiştir", "Doğal ve içten oyunculuğuyla bilinir", "Sinema tarihinin en büyük figürlerindendir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7008,
    "Jack Nicholson",
    ["jack nicholson", "nicholson"],
    ["The Shining", "One Flew Over the Cuckoo's Nest", "Batman"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Karizmatik ve tekinsiz roller"],
    ["Ayırt edici gülüşüyle bilinir", "Delilik sınırındaki karakterlerde çok etkilidir", "Uzun ve ödüllü bir kariyere sahiptir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7009,
    "Denzel Washington",
    ["denzel washington", "denzel"],
    ["Training Day", "Malcolm X", "The Equalizer"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Güçlü dramatik başroller"],
    ["Otoriter ve karizmatik duruşuyla bilinir", "Aksiyon ve dramı birleştirir", "Sahne ve sinemada güçlü performansları vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7010,
    "Morgan Freeman",
    ["morgan freeman", "freeman"],
    ["The Shawshank Redemption", "Se7en", "Million Dollar Baby"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Bilge mentor rolleri"],
    ["Derin ve sakin sesiyle tanınır", "Anlatıcı rolleriyle özdeşleşmiştir", "Güven veren karakterlerde sık görülür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7011,
    "Keanu Reeves",
    ["keanu reeves", "keanu"],
    ["The Matrix", "John Wick", "Speed"],
    ["Kanada / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve bilim kurgu"],
    ["Sakin ve mütevazı imajıyla bilinir", "Neo ve John Wick rolleriyle ikonlaşmıştır", "Fiziksel aksiyon sahnelerinde güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7012,
    "Will Smith",
    ["will smith", "smith"],
    ["Men in Black", "The Pursuit of Happyness", "I Am Legend"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon-komedi ve dram"],
    ["Rap kökenli yıldız oyunculardandır", "Komedi enerjisiyle öne çıkar", "Dramatik rollerde de geniş kitleye ulaşmıştır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7013,
    "Harrison Ford",
    ["harrison ford", "ford"],
    ["Indiana Jones", "Star Wars", "Blade Runner"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Macera ve bilim kurgu"],
    ["İki büyük sinema ikonunu canlandırmıştır", "Sert ama esprili kahraman tipleriyle bilinir", "Klasik macera sinemasının yüzlerindendir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7014,
    "Samuel L. Jackson",
    ["samuel l jackson", "samuel jackson", "sam jackson", "samuel l. jackson"],
    ["Pulp Fiction", "Avengers", "Django Unchained"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Karakter rolleri ve aksiyon"],
    ["Çok ayırt edici ses tonu vardır", "Keskin diyaloglarıyla bilinir", "Çok üretken bir filmografiye sahiptir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7015,
    "Christian Bale",
    ["christian bale", "bale"],
    ["The Dark Knight", "American Psycho", "The Machinist"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Yoğun fiziksel dönüşüm"],
    ["Rolleri için ciddi kilo değişimleri yapmasıyla bilinir", "Batman performansıyla geniş kitleye ulaştı", "Karanlık karakterlerde etkilidir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7016,
    "Robert Downey Jr.",
    ["robert downey jr", "rdj", "robert downey", "robert downey jr."],
    ["Iron Man", "Sherlock Holmes", "Oppenheimer"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Karizmatik ve hızlı konuşan roller"],
    ["Tony Stark karakteriyle pop kültürde çok güçlüdür", "Esprili ve zeki karakterleriyle bilinir", "Kariyerinde büyük bir geri dönüş yapmıştır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7017,
    "Chris Evans",
    ["chris evans", "evans"],
    ["Captain America", "Knives Out", "Snowpiercer"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Kahraman ve aksiyon rolleri"],
    ["Kaptan Amerika rolüyle tanınır", "Temiz ve idealist kahraman imajı vardır", "Aksiyon ve dram arasında geçiş yapar"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7018,
    "Chris Hemsworth",
    ["chris hemsworth", "hemsworth"],
    ["Thor", "Extraction", "Rush"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve fantastik roller"],
    ["Thor karakteriyle global tanınırlık kazandı", "Fiziksel gücü ve komedi zamanlamasıyla bilinir", "Aksiyon sahnelerinde öne çıkar"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7019,
    "Tom Cruise",
    ["tom cruise", "cruise"],
    ["Mission: Impossible", "Top Gun", "Jerry Maguire"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon yıldızı"],
    ["Tehlikeli sahneleri kendisi yapmasıyla bilinir", "Uzun soluklu blockbuster kariyeri vardır", "Koşu sahneleriyle memeleşmiştir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7020,
    "Matt Damon",
    ["matt damon", "damon"],
    ["Good Will Hunting", "Jason Bourne", "The Martian"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Zeki ve dayanıklı karakterler"],
    ["Bourne serisiyle aksiyon yüzü olmuştur", "Senaryo yazarlığıyla da bilinir", "Bilim kurgu ve dramda güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7021,
    "Ben Affleck",
    ["ben affleck", "affleck"],
    ["Gone Girl", "Argo", "Batman v Superman"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram ve gerilim"],
    ["Oyunculuğun yanında yönetmenliğiyle de bilinir", "Karanlık ve problemli karakterlerde görülür", "Batman rolünü de üstlenmiştir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7022,
    "Ryan Gosling",
    ["ryan gosling", "gosling"],
    ["La La Land", "Drive", "Barbie"],
    ["Kanada / Hollywood", "Hollywood / global sinema"],
    ["Sessiz karizma ve romantik dram"],
    ["Minimal oyunculuk tarzıyla bilinir", "Müzikal ve aksiyon rolleri arasında geçiş yapar", "Kült internet imajı vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7023,
    "Ryan Reynolds",
    ["ryan reynolds", "reynolds"],
    ["Deadpool", "Free Guy", "The Proposal"],
    ["Kanada / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve aksiyon"],
    ["Hızlı espri ve alaycı karakterlerle tanınır", "Deadpool rolüyle özdeşleşmiştir", "Sosyal medyada güçlü bir persona sahibidir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7024,
    "Hugh Jackman",
    ["hugh jackman", "jackman"],
    ["X-Men", "Logan", "Les Misérables"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve müzikal"],
    ["Wolverine rolüyle ikonlaşmıştır", "Müzikal sahne geçmişi vardır", "Fiziksel dönüşümlerde güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7025,
    "Joaquin Phoenix",
    ["joaquin phoenix", "phoenix"],
    ["Joker", "Gladiator", "Her"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Yoğun karakter oyunculuğu"],
    ["Rahatsız edici ve içe dönük karakterlerde çok etkilidir", "Duygusal kırılganlık yaratır", "Karanlık performanslarla bilinir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7026,
    "Heath Ledger",
    ["heath ledger", "ledger"],
    ["The Dark Knight", "Brokeback Mountain", "A Knight's Tale"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Dramatik ve ikonik roller"],
    ["Joker performansı sinema tarihine geçmiştir", "Kısa kariyerine rağmen çok güçlü iz bırakmıştır", "Cesur rol seçimleriyle bilinir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7027,
    "Jake Gyllenhaal",
    ["jake gyllenhaal", "gyllenhaal"],
    ["Nightcrawler", "Donnie Darko", "Prisoners"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Yoğun psikolojik roller"],
    ["Gergin ve takıntılı karakterlerde güçlüdür", "Bağımsız ve ana akım filmler arasında gezer", "Bakışlarıyla gerilim yaratır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7028,
    "Daniel Day-Lewis",
    ["daniel day lewis", "day lewis", "daniel day-lewis"],
    ["There Will Be Blood", "Lincoln", "Gangs of New York"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Metot oyunculuğu"],
    ["Rollere tamamen gömülmesiyle bilinir", "Seçici ve az film yapan bir oyuncudur", "Dönem dramlarında çok etkilidir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7029,
    "Anthony Hopkins",
    ["anthony hopkins", "hopkins"],
    ["The Silence of the Lambs", "The Father", "Thor"],
    ["Galler / Hollywood", "Hollywood / global sinema"],
    ["Klasik dram ve gerilim"],
    ["Hannibal Lecter rolüyle unutulmazdır", "Sakin ama tehditkâr oyunculuğu vardır", "Tiyatro kökenli güçlü bir aktördür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7030,
    "Gary Oldman",
    ["gary oldman", "oldman"],
    ["Darkest Hour", "Harry Potter", "The Dark Knight"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Kılık değiştiren karakter oyunculuğu"],
    ["Tanıması zor dönüşümler yapar", "Hem kötü adam hem mentor rollerinde güçlüdür", "Ses ve mimik kontrolüyle bilinir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7031,
    "Clint Eastwood",
    ["clint eastwood", "eastwood"],
    ["The Good, the Bad and the Ugly", "Dirty Harry", "Unforgiven"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Western ve sert adam rolleri"],
    ["Sessiz ve sert karakterleriyle bilinir", "Yönetmen kimliği de çok güçlüdür", "Western sinemasının ikonlarındandır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7032,
    "Arnold Schwarzenegger",
    ["arnold schwarzenegger", "schwarzenegger", "arnold"],
    ["Terminator", "Predator", "Total Recall"],
    ["Avusturya / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon yıldızı"],
    ["Vücut geliştirme geçmişiyle tanınır", "Robot ve kaslı kahraman rolleriyle ikonlaşmıştır", "Kısa ve güçlü replikleriyle bilinir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7033,
    "Sylvester Stallone",
    ["sylvester stallone", "stallone"],
    ["Rocky", "Rambo", "Creed"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve spor dramı"],
    ["Rocky ve Rambo karakterleriyle özdeşleşir", "Azimli kaybeden hikâyelerinde güçlüdür", "Senaryo yazarlığı da yapmıştır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7034,
    "Bruce Willis",
    ["bruce willis", "willis"],
    ["Die Hard", "The Sixth Sense", "Pulp Fiction"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve gerilim"],
    ["Alaycı aksiyon kahramanı imajıyla bilinir", "John McClane rolüyle ikonlaşmıştır", "Beklenmedik dramatik rollerde de güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7035,
    "Jim Carrey",
    ["jim carrey", "carrey"],
    ["The Mask", "Ace Ventura", "The Truman Show"],
    ["Kanada / Hollywood", "Hollywood / global sinema"],
    ["Fiziksel komedi ve dram"],
    ["Abartılı mimikleriyle tanınır", "Komedi enerjisi çok yüksektir", "Dramatik rollerde de şaşırtıcı performanslar verir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7036,
    "Adam Sandler",
    ["adam sandler", "sandler"],
    ["Happy Gilmore", "Uncut Gems", "50 First Dates"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve dram"],
    ["Rahat komedi tarzıyla bilinir", "Arkadaş ekibiyle sık film yapar", "Dramatik rollerde karanlık tarafını gösterir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7037,
    "Eddie Murphy",
    ["eddie murphy", "murphy"],
    ["Beverly Hills Cop", "Coming to America", "Shrek"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve seslendirme"],
    ["Çok hızlı komedi enerjisi vardır", "Birden fazla karakter oynama becerisiyle bilinir", "Animasyon seslendirmesinde de ikoniktir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7038,
    "Robin Williams",
    ["robin williams", "williams"],
    ["Good Will Hunting", "Dead Poets Society", "Mrs. Doubtfire"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve içli dram"],
    ["Doğaçlama komedi dehası olarak bilinir", "Sıcak öğretmen ve mentor rollerinde unutulmazdır", "Hem güldürüp hem hüzünlendirebilir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7039,
    "Jamie Foxx",
    ["jamie foxx", "foxx"],
    ["Ray", "Django Unchained", "Collateral"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram, müzik ve aksiyon"],
    ["Şarkıcılık ve oyunculuğu birlikte yürütür", "Ray Charles performansıyla öne çıkar", "Komedi kökeninden güçlü dramaya geçmiştir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7040,
    "Idris Elba",
    ["idris elba", "elba"],
    ["Luther", "The Wire", "Mandela"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Karizmatik dram ve aksiyon"],
    ["Derin sesi ve sert duruşuyla bilinir", "Polisiye rollerle güçlü tanınırlık kazanmıştır", "DJ kimliği de vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7041,
    "Benedict Cumberbatch",
    ["benedict cumberbatch", "cumberbatch"],
    ["Sherlock", "Doctor Strange", "The Imitation Game"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Zeki ve keskin karakterler"],
    ["Hızlı konuşan zeki karakterlerle bilinir", "Sherlock performansı çok tanınmıştır", "Sahne ve ses oyunculuğu da güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7042,
    "Henry Cavill",
    ["henry cavill", "cavill"],
    ["Man of Steel", "The Witcher", "Mission: Impossible"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve fantastik roller"],
    ["Superman rolüyle geniş kitleye ulaştı", "Fantastik kahraman imajıyla bilinir", "Fiziksel rol hazırlıklarıyla öne çıkar"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7043,
    "Jason Momoa",
    ["jason momoa", "momoa"],
    ["Aquaman", "Game of Thrones", "Dune"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Fiziksel ve fantastik roller"],
    ["Uzun saçlı savaşçı imajıyla tanınır", "Su ve kabile estetiğiyle özdeşleşmiştir", "Sert ama neşeli persona sahibidir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7044,
    "Dwayne Johnson",
    ["dwayne johnson", "the rock", "rock"],
    ["Jumanji", "Fast & Furious", "Black Adam"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon-komedi"],
    ["The Rock lakabıyla bilinir", "Güreş geçmişinden sinemaya geçmiştir", "Kaslı ve pozitif kahraman imajı vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7045,
    "Mark Ruffalo",
    ["mark ruffalo", "ruffalo"],
    ["Avengers", "Spotlight", "Zodiac"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram ve karakter rolleri"],
    ["Hulk karakteriyle geniş kitleye ulaşmıştır", "Sakin ve doğal oyunculuğuyla bilinir", "Toplumsal temalı filmlerde de yer alır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7046,
    "Jeremy Renner",
    ["jeremy renner", "renner"],
    ["The Hurt Locker", "Avengers", "Mission: Impossible"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve dram"],
    ["Keskin nişancı ve saha ajanı rollerinde görünür", "Marvel evreninde okçu karakteriyle bilinir", "Sert ve pratik karakterleri oynar"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7047,
    "Paul Rudd",
    ["paul rudd", "rudd"],
    ["Ant-Man", "Clueless", "I Love You, Man"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve süper kahraman"],
    ["Yaşlanmıyor gibi görünen imajıyla bilinir", "Sıcak ve ironik komedi tarzı vardır", "Ant-Man rolüyle popülerleşmiştir"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7048,
    "George Clooney",
    ["george clooney", "clooney"],
    ["Ocean's Eleven", "ER", "Michael Clayton"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Şık ve karizmatik roller"],
    ["Centilmen yıldız imajıyla bilinir", "Yönetmenlik ve yapımcılık da yapar", "Heist filmleriyle güçlü tanınırlığı vardır"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7049,
    "Matthew McConaughey",
    ["matthew mcconaughey", "mcconaughey"],
    ["Interstellar", "Dallas Buyers Club", "True Detective"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram ve karakter dönüşümü"],
    ["Rahat konuşma tarzıyla bilinir", "Romantik komediden ağır dramaya geçişiyle öne çıkar", "Felsefi ve karizmatik karakterler oynar"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7050,
    "Javier Bardem",
    ["javier bardem", "bardem"],
    ["No Country for Old Men", "Skyfall", "Biutiful"],
    ["İspanya / Hollywood", "Hollywood / global sinema"],
    ["Yoğun kötü adam ve dram"],
    ["Tehditkâr sakinliğiyle bilinir", "İspanyol sinemasından Hollywood'a uzanmıştır", "Karanlık karakterlerde çok güçlüdür"],
    ["actor:hollywood", "actor:legend"]
  ),
  a(
    7051,
    "Antonio Banderas",
    ["antonio banderas", "banderas"],
    ["The Mask of Zorro", "Desperado", "Pain and Glory"],
    ["İspanya / Hollywood", "Hollywood / global sinema"],
    ["Romantik ve aksiyon rolleri"],
    ["Zorro imajıyla tanınır", "Latin karizmasıyla öne çıkar", "Pedro Almodovar filmleriyle de bilinir"],
    ["actor:hollywood"]
  ),
  a(
    7052,
    "Pedro Pascal",
    ["pedro pascal", "pascal"],
    ["The Mandalorian", "The Last of Us", "Game of Thrones"],
    ["Şili / ABD", "Hollywood / global sinema"],
    ["Dizi ve aksiyon dram"],
    ["Koruyucu baba figürleriyle memeleşmiştir", "Maskeli kahraman rolüyle bilinir", "Global dizi yıldızıdır"],
    ["actor:hollywood"]
  ),
  a(
    7053,
    "Oscar Isaac",
    ["oscar isaac", "isaac"],
    ["Ex Machina", "Dune", "Star Wars"],
    ["Guatemala / ABD", "Hollywood / global sinema"],
    ["Bilim kurgu ve dram"],
    ["Yoğun bakışlı karakterleriyle bilinir", "Bağımsız sinema ve blockbuster arasında gezer", "Müzisyen geçmişi de vardır"],
    ["actor:hollywood"]
  ),
  a(
    7054,
    "Daniel Craig",
    ["daniel craig", "craig"],
    ["James Bond", "Knives Out", "Layer Cake"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve casusluk"],
    ["Modern James Bond yüzü olarak bilinir", "Sert ve fiziksel oyunculuğu vardır", "Dedektif komedisinde de başarılıdır"],
    ["actor:hollywood"]
  ),
  a(
    7055,
    "Cillian Murphy",
    ["cillian murphy", "murphy"],
    ["Peaky Blinders", "Oppenheimer", "Inception"],
    ["İrlanda / Hollywood", "Hollywood / global sinema"],
    ["Yoğun dram ve gerilim"],
    ["Keskin bakışlarıyla tanınır", "Soğuk ve içe dönük karakterlerde güçlüdür", "Dizi ve sinema arasında etkili kariyeri vardır"],
    ["actor:hollywood"]
  ),
  a(
    7056,
    "Willem Dafoe",
    ["willem dafoe", "dafoe"],
    ["Spider-Man", "The Lighthouse", "Platoon"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Eksantrik karakter rolleri"],
    ["Keskin yüz hatlarıyla tanınır", "Kötü adam ve sıra dışı karakterlerde çok etkilidir", "Bağımsız sinemada da güçlüdür"],
    ["actor:hollywood"]
  ),
  a(
    7057,
    "Christoph Waltz",
    ["christoph waltz", "waltz"],
    ["Inglourious Basterds", "Django Unchained", "Spectre"],
    ["Avusturya / Hollywood", "Hollywood / global sinema"],
    ["Zeki ve tehditkâr karakterler"],
    ["Çok dilli performanslarıyla bilinir", "Nazik görünüşlü tehdit yaratır", "Tarantino filmleriyle global çıkış yapmıştır"],
    ["actor:hollywood"]
  ),
  a(
    7058,
    "Mads Mikkelsen",
    ["mads mikkelsen", "mikkelsen"],
    ["Hannibal", "Another Round", "Casino Royale"],
    ["Danimarka / Hollywood", "Hollywood / global sinema"],
    ["Soğuk ve karizmatik roller"],
    ["Kuzey Avrupa sakinliğiyle tanınır", "Kötü adam rolleriyle de güçlüdür", "Minimal oyunculuğu dikkat çeker"],
    ["actor:hollywood"]
  ),
  a(
    7059,
    "Ralph Fiennes",
    ["ralph fiennes", "fiennes"],
    ["Harry Potter", "Schindler's List", "The Grand Budapest Hotel"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Klasik dram ve kötü adam"],
    ["Voldemort rolüyle pop kültüre geçmiştir", "Sahne kökenli güçlü bir aktördür", "Zarif ama tehditkâr karakterler oynar"],
    ["actor:hollywood"]
  ),
  a(
    7060,
    "Margot Robbie",
    ["margot robbie", "robbie"],
    ["Barbie", "I, Tonya", "The Wolf of Wall Street"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Enerjik dram ve komedi"],
    ["Barbie performansıyla global pop kültüre damga vurdu", "Hem yapımcı hem oyuncudur", "Parlak ama sert karakterlerde etkilidir"],
    ["actor:hollywood"]
  ),
  a(
    7061,
    "Meryl Streep",
    ["meryl streep", "streep"],
    ["The Devil Wears Prada", "Sophie's Choice", "Mamma Mia!"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dramatik karakter oyunculuğu"],
    ["Aksan ve karakter dönüşümlerinde çok güçlüdür", "Sinema tarihinin en saygın aktrislerindendir", "Çok ödüllü bir kariyere sahiptir"],
    ["actor:hollywood"]
  ),
  a(
    7062,
    "Cate Blanchett",
    ["cate blanchett", "blanchett"],
    ["Tár", "The Lord of the Rings", "Blue Jasmine"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Sofistike dram"],
    ["Zarif ve güçlü ekran varlığıyla bilinir", "Kraliçe ve sanatçı rollerinde etkilidir", "Hem bağımsız hem büyük yapımlarda yer alır"],
    ["actor:hollywood"]
  ),
  a(
    7063,
    "Natalie Portman",
    ["natalie portman", "portman"],
    ["Black Swan", "Star Wars", "V for Vendetta"],
    ["İsrail / ABD", "Hollywood / global sinema"],
    ["Dram ve bilim kurgu"],
    ["Çocuk oyunculuktan yetişkin yıldızlığa geçmiştir", "Zorlu fiziksel hazırlık rolleriyle bilinir", "Akademik imajı da vardır"],
    ["actor:hollywood"]
  ),
  a(
    7064,
    "Scarlett Johansson",
    ["scarlett johansson", "johansson"],
    ["Lost in Translation", "Avengers", "Marriage Story"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve dram"],
    ["Black Widow rolüyle geniş kitleye ulaştı", "Ayırt edici sesiyle tanınır", "Dramatik rollerde de güçlüdür"],
    ["actor:hollywood"]
  ),
  a(
    7065,
    "Angelina Jolie",
    ["angelina jolie", "jolie"],
    ["Tomb Raider", "Maleficent", "Girl, Interrupted"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve karizmatik roller"],
    ["Lara Croft rolüyle ikonlaşmıştır", "Güçlü ve gizemli kadın karakterlerde bilinir", "Yönetmenlik ve insani çalışmalar da yapar"],
    ["actor:hollywood"]
  ),
  a(
    7066,
    "Jennifer Lawrence",
    ["jennifer lawrence", "lawrence"],
    ["The Hunger Games", "Silver Linings Playbook", "Winter's Bone"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Genç kahraman ve dram"],
    ["Katniss rolüyle global tanınırlık kazandı", "Doğal ve enerjik oyunculuğuyla bilinir", "Ödüllü dramatik performansları vardır"],
    ["actor:hollywood"]
  ),
  a(
    7067,
    "Emma Stone",
    ["emma stone", "stone"],
    ["La La Land", "Poor Things", "Easy A"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi ve müzikal dram"],
    ["Kendine özgü sesiyle tanınır", "Komedi zamanlaması güçlüdür", "Cesur ve değişken roller seçer"],
    ["actor:hollywood"]
  ),
  a(
    7068,
    "Anne Hathaway",
    ["anne hathaway", "hathaway"],
    ["The Devil Wears Prada", "Les Misérables", "The Princess Diaries"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Romantik komedi ve dram"],
    ["Prenses imajından ağır dramaya geçmiştir", "Müzikal performanslarıyla da bilinir", "Zarif ama enerjik oyunculuğu vardır"],
    ["actor:hollywood"]
  ),
  a(
    7069,
    "Julia Roberts",
    ["julia roberts", "roberts"],
    ["Pretty Woman", "Erin Brockovich", "Notting Hill"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Romantik komedi ve dram"],
    ["Geniş gülümsemesiyle tanınır", "90'lar Hollywood yıldızlığının simgelerindendir", "Dramatik güç de taşır"],
    ["actor:hollywood"]
  ),
  a(
    7070,
    "Sandra Bullock",
    ["sandra bullock", "bullock"],
    ["Speed", "Gravity", "The Blind Side"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Komedi, aksiyon ve dram"],
    ["Sıcak ve komik karakterlerde tanınır", "Gerilim ve bilim kurguya da geçmiştir", "Geniş kitle yıldızıdır"],
    ["actor:hollywood"]
  ),
  a(
    7071,
    "Nicole Kidman",
    ["nicole kidman", "kidman"],
    ["Moulin Rouge!", "The Hours", "Big Little Lies"],
    ["Avustralya / Hollywood", "Hollywood / global sinema"],
    ["Dram ve prestij dizileri"],
    ["Zarif ve kontrollü oyunculuğuyla bilinir", "Dönem ve psikolojik dramalarda güçlüdür", "Sinema ve dizide aktif kariyeri vardır"],
    ["actor:hollywood"]
  ),
  a(
    7072,
    "Charlize Theron",
    ["charlize theron", "theron"],
    ["Mad Max: Fury Road", "Monster", "Atomic Blonde"],
    ["Güney Afrika / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve dönüşüm rolleri"],
    ["Fiziksel aksiyonda çok güçlüdür", "Rolleri için ciddi değişim geçirir", "Furiosa karakteriyle ikonlaşmıştır"],
    ["actor:hollywood"]
  ),
  a(
    7073,
    "Kate Winslet",
    ["kate winslet", "winslet"],
    ["Titanic", "The Reader", "Mare of Easttown"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Dramatik roller"],
    ["Duygusal yoğunluğu yüksek performanslarıyla bilinir", "Titanic ile global ün kazanmıştır", "Dizi ve sinemada prestijli işler yapar"],
    ["actor:hollywood"]
  ),
  a(
    7074,
    "Uma Thurman",
    ["uma thurman", "thurman"],
    ["Kill Bill", "Pulp Fiction", "Gattaca"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Kült aksiyon ve dram"],
    ["Tarantino filmleriyle güçlü tanınırlık kazandı", "Sarı tulumlu intikamcı imajıyla bilinir", "Soğuk ve gizemli ekran enerjisi vardır"],
    ["actor:hollywood"]
  ),
  a(
    7075,
    "Sigourney Weaver",
    ["sigourney weaver", "weaver"],
    ["Alien", "Avatar", "Ghostbusters"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Bilim kurgu ve aksiyon"],
    ["Ellen Ripley rolüyle sinema tarihine geçmiştir", "Güçlü kadın aksiyon kahramanı imajı vardır", "Bilim kurgu sinemasının önemli yüzlerindendir"],
    ["actor:hollywood"]
  ),
  a(
    7076,
    "Jodie Foster",
    ["jodie foster", "foster"],
    ["The Silence of the Lambs", "Taxi Driver", "Contact"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Psikolojik dram ve gerilim"],
    ["Çocuk oyunculuktan prestijli kariyere geçmiştir", "Zeki ve kontrollü karakterlerde güçlüdür", "Yönetmenlik de yapar"],
    ["actor:hollywood"]
  ),
  a(
    7077,
    "Helen Mirren",
    ["helen mirren", "mirren"],
    ["The Queen", "Gosford Park", "Red"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Klasik dram ve kraliyet rolleri"],
    ["Kraliçe rolleriyle tanınır", "Sahne kökenli güçlü bir aktristir", "Otoriter ve zarif karakterlerde etkilidir"],
    ["actor:hollywood"]
  ),
  a(
    7078,
    "Viola Davis",
    ["viola davis", "davis"],
    ["Fences", "The Help", "How to Get Away with Murder"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Yoğun dramatik oyunculuk"],
    ["Duygusal patlama gücü yüksek performansları vardır", "Sahne ve ekranda çok güçlüdür", "Otoriter ve kırılgan karakterleri birleştirir"],
    ["actor:hollywood"]
  ),
  a(
    7079,
    "Halle Berry",
    ["halle berry", "berry"],
    ["Monster's Ball", "X-Men", "Catwoman"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram ve aksiyon"],
    ["Hem dramatik hem süper kahraman rolleriyle bilinir", "Hollywood'da önemli temsil figürlerindendir", "Fiziksel rollerde de yer alır"],
    ["actor:hollywood"]
  ),
  a(
    7080,
    "Zendaya",
    ["zendaya"],
    ["Euphoria", "Dune", "Spider-Man"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Genç dram ve bilim kurgu"],
    ["Moda ve oyunculukta güçlü pop kültür etkisi vardır", "Genç kuşağın en bilinen isimlerindendir", "Dizi ve blockbuster arasında geçiş yapar"],
    ["actor:hollywood"]
  ),
  a(
    7081,
    "Florence Pugh",
    ["florence pugh", "pugh"],
    ["Midsommar", "Little Women", "Oppenheimer"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Dram ve bağımsız sinema"],
    ["Yoğun duygusal sahnelerde çok güçlüdür", "Bağımsız korku ve dönem dramlarında öne çıkar", "Modern kuşağın yükselen aktrislerindendir"],
    ["actor:hollywood"]
  ),
  a(
    7082,
    "Anya Taylor-Joy",
    ["anya taylor joy", "anya taylor-joy", "anya"],
    ["The Queen's Gambit", "The Witch", "Furiosa"],
    ["ABD / Birleşik Krallık", "Hollywood / global sinema"],
    ["Gizemli ve stilize roller"],
    ["Büyük gözleri ve sıra dışı ekran varlığıyla tanınır", "Satranç dizisiyle global çıkış yapmıştır", "Korku ve fantastik rollerde güçlüdür"],
    ["actor:hollywood"]
  ),
  a(
    7083,
    "Saoirse Ronan",
    ["saoirse ronan", "ronan"],
    ["Lady Bird", "Brooklyn", "Little Women"],
    ["İrlanda / Hollywood", "Hollywood / global sinema"],
    ["Dram ve dönem rolleri"],
    ["Genç yaşta prestijli rollerde öne çıktı", "Duygusal incelikli oyunculuğu vardır", "Bağımsız sinemada güçlüdür"],
    ["actor:hollywood"]
  ),
  a(
    7084,
    "Emma Watson",
    ["emma watson", "watson"],
    ["Harry Potter", "Beauty and the Beast", "The Perks of Being a Wallflower"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Fantastik ve gençlik rolleri"],
    ["Hermione rolüyle büyüyen bir yıldızdır", "Eğitim ve aktivizmle de anılır", "Klasik karakter uyarlamalarında yer alır"],
    ["actor:hollywood"]
  ),
  a(
    7085,
    "Keira Knightley",
    ["keira knightley", "knightley"],
    ["Pirates of the Caribbean", "Pride & Prejudice", "Atonement"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Dönem dramı"],
    ["Kostümlü dönem filmleriyle tanınır", "Zarif ve keskin oyunculuğu vardır", "Macera serilerinde de global tanınırlık kazandı"],
    ["actor:hollywood"]
  ),
  a(
    7086,
    "Gal Gadot",
    ["gal gadot", "gadot"],
    ["Wonder Woman", "Fast & Furious", "Red Notice"],
    ["İsrail / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve süper kahraman"],
    ["Wonder Woman rolüyle geniş kitleye ulaştı", "Fiziksel aksiyon rollerinde öne çıkar", "Model geçmişi de vardır"],
    ["actor:hollywood"]
  ),
  a(
    7087,
    "Eva Green",
    ["eva green", "green"],
    ["Casino Royale", "Penny Dreadful", "300: Rise of an Empire"],
    ["Fransa / Hollywood", "Hollywood / global sinema"],
    ["Gotik ve gizemli roller"],
    ["Koyu ve teatral ekran enerjisiyle bilinir", "Femme fatale rollerde güçlüdür", "Fantastik ve korku atmosferine yakışır"],
    ["actor:hollywood"]
  ),
  a(
    7088,
    "Tilda Swinton",
    ["tilda swinton", "swinton"],
    ["Doctor Strange", "Orlando", "Snowpiercer"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Avangart karakter oyunculuğu"],
    ["Androjen ve sıra dışı imajıyla bilinir", "Deneysel sinemada çok güçlüdür", "Kılık değiştiren rollerde etkilidir"],
    ["actor:hollywood"]
  ),
  a(
    7089,
    "Julianne Moore",
    ["julianne moore", "moore"],
    ["Still Alice", "Boogie Nights", "Far from Heaven"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dramatik karakter rolleri"],
    ["Duygusal kırılganlığı yüksek karakterler oynar", "Bağımsız ve ana akım filmlerde güçlüdür", "Kızıl saçlı imajıyla tanınır"],
    ["actor:hollywood"]
  ),
  a(
    7090,
    "Penélope Cruz",
    ["penelope cruz", "penélope cruz", "cruz"],
    ["Volver", "Vicky Cristina Barcelona", "Pirates of the Caribbean"],
    ["İspanya / Hollywood", "Hollywood / global sinema"],
    ["Dram ve romantik roller"],
    ["İspanyol sinemasından Hollywood'a uzanmıştır", "Almodovar filmleriyle çok bilinir", "Yoğun ve tutkulu oyunculuğu vardır"],
    ["actor:hollywood"]
  ),
  a(
    7091,
    "Salma Hayek",
    ["salma hayek", "hayek"],
    ["Frida", "Desperado", "From Dusk Till Dawn"],
    ["Meksika / Hollywood", "Hollywood / global sinema"],
    ["Karizmatik dram ve aksiyon"],
    ["Frida Kahlo performansıyla çok tanınır", "Latin yıldız imajıyla öne çıkar", "Yapımcı kimliği de vardır"],
    ["actor:hollywood"]
  ),
  a(
    7092,
    "Michelle Yeoh",
    ["michelle yeoh", "yeoh"],
    ["Crouching Tiger, Hidden Dragon", "Everything Everywhere All at Once", "Tomorrow Never Dies"],
    ["Malezya / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve dram"],
    ["Dövüş koreografilerinde çok güçlüdür", "Asya sinemasından global başarıya uzanmıştır", "Zarif ama sert karakterleriyle bilinir"],
    ["actor:hollywood"]
  ),
  a(
    7093,
    "Lucy Liu",
    ["lucy liu", "liu"],
    ["Charlie's Angels", "Kill Bill", "Elementary"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Aksiyon ve stilize roller"],
    ["Keskin ve soğukkanlı karakterlerle tanınır", "Dövüş sahnelerinde güçlüdür", "Hem komedi hem aksiyonda yer alır"],
    ["actor:hollywood"]
  ),
  a(
    7094,
    "Winona Ryder",
    ["winona ryder", "ryder"],
    ["Stranger Things", "Edward Scissorhands", "Beetlejuice"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Gotik ve dramatik roller"],
    ["90'lar alternatif yıldız imajıyla bilinir", "Tim Burton filmleriyle özdeşleşir", "Diziyle yeni kuşağa ulaşmıştır"],
    ["actor:hollywood"]
  ),
  a(
    7095,
    "Elizabeth Olsen",
    ["elizabeth olsen", "olsen"],
    ["WandaVision", "Avengers", "Martha Marcy May Marlene"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Dram ve süper kahraman"],
    ["Wanda karakteriyle geniş kitleye ulaştı", "Duygusal kırılma sahnelerinde güçlüdür", "Bağımsız sinema çıkışlıdır"],
    ["actor:hollywood"]
  ),
  a(
    7096,
    "Millie Bobby Brown",
    ["millie bobby brown", "millie"],
    ["Stranger Things", "Enola Holmes", "Godzilla"],
    ["Birleşik Krallık / Hollywood", "Hollywood / global sinema"],
    ["Gençlik ve fantastik roller"],
    ["Eleven rolüyle çok genç yaşta ünlendi", "Gizem ve macera hikâyelerinde öne çıkar", "Genç kuşağın popüler isimlerindendir"],
    ["actor:hollywood"]
  ),
  a(
    7097,
    "Jenna Ortega",
    ["jenna ortega", "ortega"],
    ["Wednesday", "Scream", "X"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Korku ve gençlik rolleri"],
    ["Gotik genç karakter imajıyla tanınır", "Modern korku projelerinde sık görülür", "Wednesday dansıyla pop kültüre girmiştir"],
    ["actor:hollywood"]
  ),
  a(
    7098,
    "Timothée Chalamet",
    ["timothee chalamet", "timothée chalamet", "chalamet"],
    ["Dune", "Call Me by Your Name", "Wonka"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Genç dram ve fantastik roller"],
    ["İnce ve kırılgan ekran enerjisiyle bilinir", "Dönem ve bilim kurgu filmlerinde öne çıkar", "Genç kuşağın yıldız aktörlerindendir"],
    ["actor:hollywood"]
  ),
  a(
    7099,
    "Austin Butler",
    ["austin butler", "butler"],
    ["Elvis", "Dune: Part Two", "Once Upon a Time in Hollywood"],
    ["ABD / Hollywood", "Hollywood / global sinema"],
    ["Biyografi ve genç dram"],
    ["Elvis performansıyla büyük çıkış yaptı", "Ses ve beden taklidiyle öne çıkar", "Yeni dönem Hollywood yıldızlarındandır"],
    ["actor:hollywood"]
  ),
  a(
    7100,
    "Ana de Armas",
    ["ana de armas", "de armas"],
    ["Knives Out", "Blade Runner 2049", "No Time to Die"],
    ["Küba / Hollywood", "Hollywood / global sinema"],
    ["Dram ve casusluk"],
    ["Sıcak ama gizemli karakterlerde etkilidir", "Hollywood'a uluslararası geçiş yapmıştır", "Dedektif ve aksiyon filmlerinde görünür"],
    ["actor:hollywood"]
  ),
  a(
    7101,
    "Kemal Sunal",
    ["kemal sunal", "sunal", "şaban", "saban"],
    ["Hababam Sınıfı", "Kapıcılar Kralı", "Kibar Feyzo"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve toplumsal taşlama"],
    ["Saf ama zeki halk kahramanlarıyla bilinir", "Türk komedisinin en sevilen yüzlerindendir", "Şaban tiplemesiyle ikonlaşmıştır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7102,
    "Şener Şen",
    ["şener şen", "sener sen", "şener", "sener"],
    ["Tosun Paşa", "Kibar Feyzo", "Eşkıya"],
    ["Türkiye / Yeşilçam ve modern sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Hem kötü adam hem komedi rollerinde efsanedir", "Mimik ve ses tonuyla karakter yaratır", "Türk sinemasının en saygın aktörlerindendir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7103,
    "Tarık Akan",
    ["tarık akan", "tarik akan"],
    ["Hababam Sınıfı", "Maden", "Yol"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Jön ve dram"],
    ["Yakışıklı jön imajından politik dramalara geçmiştir", "Damat Ferit tiplemesiyle tanınır", "Toplumsal filmlerde de güçlüdür"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7104,
    "Münir Özkul",
    ["münir özkul", "munir ozkul", "mahmut hoca"],
    ["Hababam Sınıfı", "Bizim Aile", "Neşeli Günler"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Babacan karakter rolleri"],
    ["Mahmut Hoca rolüyle unutulmazdır", "Aile filmlerinin sıcak baba figürlerindendir", "Tiyatro kökenli büyük oyuncudur"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7105,
    "Adile Naşit",
    ["adile naşit", "adile nasit", "hafize ana"],
    ["Hababam Sınıfı", "Neşeli Günler", "Süt Kardeşler"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve aile rolleri"],
    ["Hafize Ana rolüyle hatırlanır", "Sıcak kahkahasıyla tanınır", "Çocuk programlarıyla da kuşaklara ulaşmıştır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7106,
    "Halit Akçatepe",
    ["halit akçatepe", "halit akcatepe", "güdük necmi", "guduk necmi"],
    ["Hababam Sınıfı", "Süt Kardeşler", "Canım Kardeşim"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve gençlik rolleri"],
    ["Güdük Necmi tiplemesiyle ikonlaşmıştır", "Hababam kadrosunun en sevilen isimlerindendir", "Doğal komedi zamanlaması vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7107,
    "Kartal Tibet",
    ["kartal tibet"],
    ["Tarkan", "Karaoğlan", "Tosun Paşa"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Macera ve jön rolleri"],
    ["Tarkan karakteriyle tanınır", "Yönetmenlik kariyeri de güçlüdür", "Yeşilçam macera sinemasının yüzlerindendir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7108,
    "Kadir İnanır",
    ["kadir inanır", "kadir inanir", "kadir i̇nanır"],
    ["Selvi Boylum Al Yazmalım", "Tatar Ramazan", "Yılanların Öcü"],
    ["Türkiye / Yeşilçam ve dram", "Türkiye / Türk sineması ve dizileri"],
    ["Sert romantik dram"],
    ["Güçlü bakışları ve sert duruşuyla bilinir", "Romantik dramların büyük jönlerindendir", "Toplumsal filmlerde de yer almıştır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7109,
    "Cüneyt Arkın",
    ["cüneyt arkın", "cuneyt arkin", "malkoçoğlu", "malkocoglu"],
    ["Malkoçoğlu", "Battal Gazi", "Dünyayı Kurtaran Adam"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Aksiyon ve tarihi kahraman"],
    ["Atlı ve kılıçlı sahneleriyle ikonlaşmıştır", "Türk aksiyon sinemasının en büyük yüzlerindendir", "Doktorluk geçmişi de vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7110,
    "Ayhan Işık",
    ["ayhan ışık", "ayhan isik", "ayhan işık"],
    ["Küçük Hanımefendi", "Kanun Namına", "Acı Hayat"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Klasik jön"],
    ["Taçsız Kral olarak bilinir", "Yeşilçam'ın erken dönem yıldızlarındandır", "Romantik ve dramatik rollerde öne çıkar"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7111,
    "Ediz Hun",
    ["ediz hun"],
    ["Genç Kızlar", "Güllü", "Ankara Ekspresi"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Jön ve romantik roller"],
    ["Zarif jön imajıyla tanınır", "Yeşilçam romantik filmlerinin önemli yüzüdür", "Siyaset ve çevre alanında da bilinir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7112,
    "Sadri Alışık",
    ["sadri alışık", "sadri alisik", "turist ömer", "turist omer"],
    ["Turist Ömer", "Ah Güzel İstanbul", "Afacan Küçük Serseri"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve hüzünlü karakterler"],
    ["Turist Ömer tiplemesiyle ikonlaşmıştır", "Hem güldüren hem hüzünlendiren rollerde etkilidir", "Kendine has konuşma tarzı vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7113,
    "İlyas Salman",
    ["ilyas salman", "i̇lyas salman"],
    ["Çiçek Abbas", "Banker Bilo", "Kibar Feyzo"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Köylü ve halk komedisi"],
    ["Ezilmiş ama dirençli karakterleriyle bilinir", "Toplumsal taşlamalarda sık görülür", "Kendine özgü mimikleri vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7114,
    "Zeki Alasya",
    ["zeki alasya"],
    ["Köyden İndim Şehire", "Salak Milyoner", "Nereden Çıktı Bu Velet"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi"],
    ["Metin Akpınar ile efsane ikili oluşturmuştur", "Tiyatro kökenli güçlü bir komedyendir", "Yönetmenlik de yapmıştır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7115,
    "Metin Akpınar",
    ["metin akpınar", "metin akpinar"],
    ["Köyden İndim Şehire", "Salak Milyoner", "Güler misin Ağlar mısın"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve politik taşlama"],
    ["Zeki Alasya ile uzun yıllar ikili olmuştur", "Keskin mizah diliyle bilinir", "Sahne kökenli bir oyuncudur"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7116,
    "Müjde Ar",
    ["müjde ar", "mujde ar"],
    ["Fahriye Abla", "Ah Belinda", "Arabesk"],
    ["Türkiye / 1980ler sineması", "Türkiye / Türk sineması ve dizileri"],
    ["Cesur dram ve komedi"],
    ["Kadın karakterleri merkeze alan filmlerle bilinir", "Yeşilçam sonrası dönüşümün simgelerindendir", "Güçlü ve bağımsız kadın rolleri oynar"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7117,
    "Türkan Şoray",
    ["türkan şoray", "turkan soray", "sultan"],
    ["Selvi Boylum Al Yazmalım", "Vesikalı Yarim", "Dila Hanım"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Sultan lakabıyla bilinir", "Yeşilçam'ın en büyük kadın yıldızlarındandır", "Bakışları ve duygusal oyunculuğuyla tanınır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7118,
    "Filiz Akın",
    ["filiz akın", "filiz akin"],
    ["Ankara Ekspresi", "Kolejli Kız", "Tatlı Dillim"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Zarif jön kadın rolleri"],
    ["Avrupai ve zarif imajıyla tanınır", "Yeşilçam'ın dört yapraklı yoncasındandır", "Romantik filmlerde sık görülür"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7119,
    "Fatma Girik",
    ["fatma girik"],
    ["Ezo Gelin", "Boş Beşik", "Postacı"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve güçlü kadın rolleri"],
    ["Güçlü ve halktan kadın karakterlerle bilinir", "Duygusal dramalarda çok etkilidir", "Siyaset geçmişi de vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7120,
    "Hülya Koçyiğit",
    ["hülya koçyiğit", "hulya kocyigit"],
    ["Susuz Yaz", "Gelin", "Derman"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Dramatik kadın rolleri"],
    ["Yeşilçam'ın dört yapraklı yoncasındandır", "Toplumsal dramalarda güçlüdür", "Susuz Yaz filmiyle uluslararası başarıya uzanan kariyeri vardır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7121,
    "Gülşen Bubikoğlu",
    ["gülşen bubikoğlu", "gulsen bubikoglu"],
    ["Ah Nerede", "Gırgıriye", "Yaban"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi ve dram"],
    ["Güleryüzlü ve zarif ekran enerjisiyle tanınır", "70'ler Türk sinemasının popüler yüzlerindendir", "Romantik komedilerde çok sevilir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7122,
    "Itır Esen",
    ["ıtır esen", "itir esen", "itır esen"],
    ["Aile Şerefi", "Hababam Sınıfı Uyanıyor", "Cennetin Çocukları"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Gençlik ve aile rolleri"],
    ["Yeşilçam'ın zarif genç kadın karakterleriyle bilinir", "Aile filmlerinde sıcak bir imajı vardır", "Döneminin tanınan yüzlerindendir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7123,
    "Necla Nazır",
    ["necla nazır", "necla nazir"],
    ["Dila Hanım", "Kınalı Yapıncak", "Minik Cadı"],
    ["Türkiye / Yeşilçam", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Masum ve duygusal karakterlerle tanınır", "Yeşilçam melodramlarında yer almıştır", "Sıcak ekran yüzüyle bilinir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7124,
    "Perihan Savaş",
    ["perihan savaş", "perihan savas"],
    ["Bedrana", "Keriz", "Zübük"],
    ["Türkiye / Yeşilçam ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dramatik kadın rolleri"],
    ["Çocuk yaşta sinemaya başlamıştır", "Duygusal ve güçlü kadın karakterlerde etkilidir", "Dizi kariyeri de uzundur"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7125,
    "Şevket Altuğ",
    ["şevket altuğ", "sevket altug"],
    ["Süper Baba", "Perihan Abla", "Hababam Sınıfı"],
    ["Türkiye / TV ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Babacan komedi-dram"],
    ["Süper Baba rolüyle çok sevilir", "Sakin ve sıcak oyunculuğuyla bilinir", "Türk televizyonunun unutulmaz yüzlerindendir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7126,
    "Haluk Bilginer",
    ["haluk bilginer", "bilginer"],
    ["Masumiyet", "Şahsiyet", "Kış Uykusu"],
    ["Türkiye / Uluslararası kariyer", "Türkiye / Türk sineması ve dizileri"],
    ["Yoğun karakter oyunculuğu"],
    ["Sahne kökenli çok güçlü bir oyuncudur", "Derin ve karizmatik karakterlerde etkilidir", "Uluslararası ödüllerle de anılır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7127,
    "Şerif Sezer",
    ["şerif sezer", "serif sezer"],
    ["Yol", "Her Şeye Rağmen", "Masumiyet"],
    ["Türkiye / Dram sineması", "Türkiye / Türk sineması ve dizileri"],
    ["Anne ve güçlü kadın rolleri"],
    ["Yoğun dramatik ifadeleriyle bilinir", "Anadolu hikâyelerinde çok güçlüdür", "Sinema ve dizide uzun kariyere sahiptir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7128,
    "Uğur Yücel",
    ["uğur yücel", "ugur yucel"],
    ["Eşkıya", "İkinci Bahar", "Yazı Tura"],
    ["Türkiye / Sinema ve TV", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi-dram ve karakter rolleri"],
    ["Doğal oyunculuğu ve kendine has sesiyle bilinir", "Yönetmenlik de yapmıştır", "Hem komedi hem ağır dramda güçlüdür"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7129,
    "Yılmaz Erdoğan",
    ["yılmaz erdoğan", "yilmaz erdogan"],
    ["Vizontele", "Organize İşler", "Kelebeğin Rüyası"],
    ["Türkiye / Modern sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi, dram ve yazarlık"],
    ["Oyunculuğun yanında senarist ve yönetmendir", "Anadolu mizahını sinemaya taşır", "BKM ekolünün kurucu figürlerindendir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7130,
    "Cem Yılmaz",
    ["cem yılmaz", "cem yilmaz"],
    ["G.O.R.A.", "A.R.O.G.", "Arif V 216"],
    ["Türkiye / Komedi sineması", "Türkiye / Türk sineması ve dizileri"],
    ["Stand-up ve bilim kurgu komedisi"],
    ["Türkiye'nin en bilinen stand-up komedyenlerindendir", "Arif karakteriyle sinemada ikonlaşmıştır", "Popüler kültür referanslarını çok kullanır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7131,
    "Ata Demirer",
    ["ata demirer"],
    ["Eyyvah Eyvah", "Berlin Kaplanı", "Bursa Bülbülü"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Müzikli komedi ve sıcak karakterler"],
    ["Taklit ve müzik yeteneğiyle bilinir", "Ege ve Trakya mizahını sık kullanır", "Sıcakkanlı komedi karakterleri oynar"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7132,
    "Demet Akbağ",
    ["demet akbağ", "demet akbag"],
    ["Vizontele", "Bir Demet Tiyatro", "Organize İşler"],
    ["Türkiye / Komedi ve dram", "Türkiye / Türk sineması ve dizileri"],
    ["Keskin komedi ve karakter oyunculuğu"],
    ["BKM ekolünün en güçlü isimlerindendir", "Abartı ile doğallığı dengeler", "Dramatik performansları da güçlüdür"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7133,
    "Zafer Algöz",
    ["zafer algöz", "zafer algoz"],
    ["A.R.O.G.", "Yahşi Batı", "Ali Baba ve 7 Cüceler"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Yan karakter ve komedi"],
    ["Cem Yılmaz filmlerinin tanıdık yüzlerindendir", "Tiyatro kökenli güçlü bir oyuncudur", "Karakter komedisinde etkilidir"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7134,
    "Binnur Kaya",
    ["binnur kaya"],
    ["Avrupa Yakası", "Vavien", "Kırmızı Oda"],
    ["Türkiye / TV ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Çok farklı karakterlere dönüşebilir", "Komedide doğal zamanlaması güçlüdür", "Dramatik rollerde de derinlik yaratır"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7135,
    "Gupse Özay",
    ["gupse özay", "gupse ozay"],
    ["Deliha", "Görümce", "Eltilerin Savaşı"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Yazarlık ve karakter komedisi"],
    ["Kendi yazdığı karakterlerle tanınır", "Fiziksel komedi ve abartılı tiplemeler yapar", "Kadın odaklı komedilerde öne çıkar"],
    ["actor:turkish", "actor:legend"]
  ),
  a(
    7136,
    "Ezgi Mola",
    ["ezgi mola"],
    ["Masumlar Apartmanı", "Celal ile Ceren", "Kocan Kadar Konuş"],
    ["Türkiye / TV ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve psikolojik dram"],
    ["Enerjik komedi tarzıyla bilinir", "Ağır dramatik dizilerde de güçlü çıkış yapmıştır", "Doğal ekran enerjisi vardır"],
    ["actor:turkish"]
  ),
  a(
    7137,
    "Engin Günaydın",
    ["engin günaydın", "engin gunaydin"],
    ["Avrupa Yakası", "Yeraltı", "Vavien"],
    ["Türkiye / Komedi-dram", "Türkiye / Türk sineması ve dizileri"],
    ["Absürt ve içe dönük roller"],
    ["Burhan Altıntop tiplemesiyle ikonlaşmıştır", "Garip ve rahatsız karakterleri çok iyi oynar", "Minimal komedi tarzı vardır"],
    ["actor:turkish"]
  ),
  a(
    7138,
    "Tolga Çevik",
    ["tolga çevik", "tolga cevik"],
    ["Komedi Dükkanı", "Arkadaşım Hoşgeldin", "Organize İşler"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Doğaçlama ve fiziksel komedi"],
    ["Sahne doğaçlamasıyla tanınır", "Arkadaşım karakteriyle geniş kitleye ulaşmıştır", "Enerjik performans tarzı vardır"],
    ["actor:turkish"]
  ),
  a(
    7139,
    "Ahmet Kural",
    ["ahmet kural"],
    ["İşler Güçler", "Düğün Dernek", "Ailecek Şaşkınız"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Hızlı ve yerel komedi"],
    ["Murat Cemcir ile ikili olarak çok bilinir", "Yerel ağız ve absürt durum komedisinde güçlüdür", "Enerjik karakterleri oynar"],
    ["actor:turkish"]
  ),
  a(
    7140,
    "Murat Cemcir",
    ["murat cemcir"],
    ["İşler Güçler", "Düğün Dernek", "Çalgı Çengi"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Absürt ve halk komedisi"],
    ["Ahmet Kural ile komedi ikilisi oluşturmuştur", "Doğal ve yerel tiplemelerle bilinir", "Sıcak ve sert karakterleri birlikte taşır"],
    ["actor:turkish"]
  ),
  a(
    7141,
    "Kıvanç Tatlıtuğ",
    ["kıvanç tatlıtuğ", "kivanc tatlitug"],
    ["Aşk-ı Memnu", "Kuzey Güney", "Kelebeğin Rüyası"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Jön ve dramatik roller"],
    ["Modern Türk dizilerinin en büyük yıldızlarındandır", "Romantik dram ve sert karakterlerde etkilidir", "Model geçmişi vardır"],
    ["actor:turkish"]
  ),
  a(
    7142,
    "Kenan İmirzalıoğlu",
    ["kenan imirzalıoğlu", "kenan imirzalioglu", "kenan i̇mirzalıoğlu"],
    ["Ezel", "Karadayı", "Deli Yürek"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Karizmatik dram ve aksiyon"],
    ["Ezel rolüyle çok güçlü tanınır", "Sert ve adalet arayan karakterleri oynar", "Uzun boylu karizmatik jön imajı vardır"],
    ["actor:turkish"]
  ),
  a(
    7143,
    "Çağatay Ulusoy",
    ["çağatay ulusoy", "cagatay ulusoy"],
    ["Medcezir", "İçerde", "Hakan: Muhafız"],
    ["Türkiye / Dizi ve dijital platform", "Türkiye / Türk sineması ve dizileri"],
    ["Genç dram ve aksiyon"],
    ["Genç kuşağın popüler erkek oyuncularındandır", "Aksiyon ve dram arasında geçiş yapar", "Dijital platform işlerinde de öne çıkmıştır"],
    ["actor:turkish"]
  ),
  a(
    7144,
    "Aras Bulut İynemli",
    ["aras bulut iynemli", "aras bulut", "aras bulut i̇ynemli"],
    ["Çukur", "7. Koğuştaki Mucize", "Öyle Bir Geçer Zaman ki"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Yoğun dramatik roller"],
    ["Duygusal sahnelerde çok güçlüdür", "Çukur dizisiyle geniş kitleye ulaştı", "Farklı yaş ve psikoloji karakterleri oynayabilir"],
    ["actor:turkish"]
  ),
  a(
    7145,
    "Burak Özçivit",
    ["burak özçivit", "burak ozcivit"],
    ["Kara Sevda", "Kuruluş Osman", "Çalıkuşu"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik ve tarihi jön"],
    ["Tarihi kahraman rolleriyle bilinir", "Global Türk dizi izleyicisinde güçlü tanınırlığı vardır", "Model kökenli oyunculardandır"],
    ["actor:turkish"]
  ),
  a(
    7146,
    "Engin Akyürek",
    ["engin akyürek", "engin akyurek"],
    ["Fatmagül'ün Suçu Ne?", "Kara Para Aşk", "Sefirin Kızı"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Yoğun ve içe dönük dram performanslarıyla bilinir", "Global Türk dizi kitlesinde tanınır", "Duygusal karakterlerde güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7147,
    "Halit Ergenç",
    ["halit ergenç", "halit ergenc"],
    ["Muhteşem Yüzyıl", "Binbir Gece", "Vatanım Sensin"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Tarihi ve dramatik başroller"],
    ["Kanuni Sultan Süleyman rolüyle global tanınır", "Sahne kökenli oyunculuğu vardır", "Ağır ve karizmatik karakterler oynar"],
    ["actor:turkish"]
  ),
  a(
    7148,
    "Nejat İşler",
    ["nejat işler", "nejat isler", "nejat i̇şler"],
    ["Behzat Ç.", "Kaybedenler Kulübü", "Barda"],
    ["Türkiye / Alternatif sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Karanlık ve asi karakterler"],
    ["Sert ve melankolik ekran enerjisiyle bilinir", "Kült filmlerde sık görülür", "Anti-kahraman rollerinde güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7149,
    "Ozan Güven",
    ["ozan güven", "ozan guven"],
    ["G.O.R.A.", "Fi", "Muhteşem Yüzyıl"],
    ["Türkiye / Dizi ve komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Cem Yılmaz filmleriyle geniş kitleye ulaştı", "Tarihi ve modern dizilerde yer almıştır", "Keskin karakterleri oynar"],
    ["actor:turkish"]
  ),
  a(
    7150,
    "Mert Fırat",
    ["mert fırat", "mert firat"],
    ["Başka Dilde Aşk", "Ufak Tefek Cinayetler", "Aşk ve Gurur"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Sahne ve sinema arasında aktif bir kariyeri vardır", "Şehirli ve duygusal karakterlerde görülür", "Tiyatro üretimleriyle de bilinir"],
    ["actor:turkish"]
  ),
  a(
    7151,
    "Timuçin Esen",
    ["timuçin esen", "timucin esen"],
    ["Müslüm", "Hırsız Polis", "Gülperi"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Yoğun dramatik roller"],
    ["Müslüm Gürses performansıyla geniş yankı uyandırdı", "Ses ve beden dönüşümüyle öne çıkar", "Sert ve kırılgan karakterleri birleştirir"],
    ["actor:turkish"]
  ),
  a(
    7152,
    "Tuba Büyüküstün",
    ["tuba büyüküstün", "tuba buyukustun"],
    ["Asi", "Kara Para Aşk", "20 Dakika"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Global Türk dizi izleyicisinde güçlü tanınırlığı vardır", "Sakin ve zarif ekran enerjisiyle bilinir", "Duygusal rollerde öne çıkar"],
    ["actor:turkish"]
  ),
  a(
    7153,
    "Beren Saat",
    ["beren saat"],
    ["Aşk-ı Memnu", "Fatmagül'ün Suçu Ne?", "Atiye"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dramatik kadın başrolleri"],
    ["Bihter karakteriyle ikonlaşmıştır", "Toplumsal dramalarda güçlü performansları vardır", "Dijital platform işlerinde de yer alır"],
    ["actor:turkish"]
  ),
  a(
    7154,
    "Bergüzar Korel",
    ["bergüzar korel", "berguzar korel"],
    ["Binbir Gece", "Karadayı", "Vatanım Sensin"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve dönem rolleri"],
    ["Güçlü kadın karakterleriyle tanınır", "Dönem ve aile dramalarında yer almıştır", "Sakin ama kararlı ekran duruşu vardır"],
    ["actor:turkish"]
  ),
  a(
    7155,
    "Farah Zeynep Abdullah",
    ["farah zeynep abdullah", "farah"],
    ["Masumlar Apartmanı", "Bergen", "Kelebeğin Rüyası"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve biyografi"],
    ["Biyografik performanslarıyla öne çıkar", "Duygusal ve doğal oyunculuğu vardır", "Genç kuşağın güçlü aktrislerindendir"],
    ["actor:turkish"]
  ),
  a(
    7156,
    "Serenay Sarıkaya",
    ["serenay sarıkaya", "serenay sarikaya"],
    ["Medcezir", "Fi", "Aile"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik ve modern dram"],
    ["Moda ve pop kültür etkisi güçlüdür", "Modern şehirli karakterlerde öne çıkar", "Sahne müzikallerinde de yer almıştır"],
    ["actor:turkish"]
  ),
  a(
    7157,
    "Hazal Kaya",
    ["hazal kaya"],
    ["Aşk-ı Memnu", "Adını Feriha Koydum", "Bizim Hikaye"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Gençlik ve aile dramı"],
    ["Feriha karakteriyle geniş kitleye ulaştı", "Doğal ve samimi oyunculuğuyla bilinir", "Dijital projelerde de yer alır"],
    ["actor:turkish"]
  ),
  a(
    7158,
    "Hande Erçel",
    ["hande erçel", "hande ercel"],
    ["Sen Çal Kapımı", "Aşk Laftan Anlamaz", "Bambaşka Biri"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi ve dram"],
    ["Global sosyal medya tanınırlığı çok yüksektir", "Romantik komedi dizileriyle bilinir", "Genç kitlelerde popülerdir"],
    ["actor:turkish"]
  ),
  a(
    7159,
    "Demet Özdemir",
    ["demet özdemir", "demet ozdemir"],
    ["Erkenci Kuş", "Doğduğun Ev Kaderindir", "Adım Farah"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi ve dram"],
    ["Dans geçmişi vardır", "Romantik komedi enerjisiyle tanınır", "Dramatik rollerde de yer almıştır"],
    ["actor:turkish"]
  ),
  a(
    7160,
    "Ebru Şahin",
    ["ebru şahin", "ebru sahin"],
    ["Hercai", "Destan", "İstanbullu Gelin"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik ve tarihi dram"],
    ["Hercai dizisiyle geniş kitleye ulaştı", "Duygusal ve sert kadın karakterlerde görülür", "Tarihi/fantastik yapımlarda da yer aldı"],
    ["actor:turkish"]
  ),
  a(
    7161,
    "Afra Saraçoğlu",
    ["afra saraçoğlu", "afra saracoglu"],
    ["Yalı Çapkını", "Öğretmen", "Kardeş Çocukları"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Genç dram"],
    ["Yalı Çapkını ile geniş kitleye ulaştı", "Genç kuşağın dikkat çeken aktrislerindendir", "Duygusal sahnelerde öne çıkar"],
    ["actor:turkish"]
  ),
  a(
    7162,
    "Merve Dizdar",
    ["merve dizdar"],
    ["Masumlar Apartmanı", "Kuru Otlar Üstüne", "Eltilerin Savaşı"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve ağır dram"],
    ["Hem komedi hem dramatik rollerde çok güçlüdür", "Uluslararası festival başarısıyla anılır", "Doğal ve keskin oyunculuğu vardır"],
    ["actor:turkish"]
  ),
  a(
    7163,
    "Melis Sezen",
    ["melis sezen"],
    ["Sadakatsiz", "Leke", "Gülcemal"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dramatik genç kadın rolleri"],
    ["Sadakatsiz dizisiyle geniş kitleye ulaştı", "Gerilimli ilişki dramalarında öne çıkar", "Modern Türk dizi yüzlerindendir"],
    ["actor:turkish"]
  ),
  a(
    7164,
    "Pınar Deniz",
    ["pınar deniz", "pinar deniz"],
    ["Yargı", "Aşk 101", "Vatanım Sensin"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve hukuk temalı roller"],
    ["Yargı dizisiyle çok güçlü tanındı", "Enerjik ve keskin karakterleri oynar", "Duygusal ve gerilimli sahnelerde etkilidir"],
    ["actor:turkish"]
  ),
  a(
    7165,
    "Neslihan Atagül",
    ["neslihan atagül", "neslihan atagul"],
    ["Kara Sevda", "Sefirin Kızı", "Fatih Harbiye"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Global Türk dizi izleyicisinde bilinir", "Yoğun aşk ve dram hikâyelerinde öne çıkar", "Duygusal karakterlerde güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7166,
    "Özge Özpirinçci",
    ["özge özpirinçci", "ozge ozpirincci"],
    ["Kadın", "Aşk Yeniden", "İlk ve Son"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Kadın dizisindeki dramatik performansıyla bilinir", "Samimi ve doğal ekran enerjisi vardır", "Romantik komedide de güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7167,
    "Aslı Enver",
    ["aslı enver", "asli enver"],
    ["İstanbullu Gelin", "Kavak Yelleri", "Suskunlar"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["İstanbullu Gelin ile geniş kitleye ulaştı", "Duygusal ve zarif karakterlerde öne çıkar", "Gençlik dizisi geçmişi de vardır"],
    ["actor:turkish"]
  ),
  a(
    7168,
    "Fahriye Evcen",
    ["fahriye evcen"],
    ["Yaprak Dökümü", "Çalıkuşu", "Aşk Sana Benzer"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Klasik roman uyarlamalarıyla bilinir", "Duygusal kadın başrollerinde yer alır", "Model imajı da güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7169,
    "Elçin Sangu",
    ["elçin sangu", "elcin sangu"],
    ["Kiralık Aşk", "Çarpışma", "Mutluluk Zamanı"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi"],
    ["Kiralık Aşk ile büyük popülerlik kazandı", "Kızıl saçlı imajıyla tanınır", "Enerjik ve romantik karakterlerde öne çıkar"],
    ["actor:turkish"]
  ),
  a(
    7170,
    "Gökçe Bahadır",
    ["gökçe bahadır", "gokce bahadir"],
    ["Yaprak Dökümü", "Ufak Tefek Cinayetler", "Kulüp"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve müzikal dönem rolleri"],
    ["Duygusal derinliği olan karakterlerde etkilidir", "Dizi müzikallerinde de öne çıkmıştır", "Modern ve dönem işlerinde yer alır"],
    ["actor:turkish"]
  ),
  a(
    7171,
    "Nurgül Yeşilçay",
    ["nurgül yeşilçay", "nurgul yesilcay"],
    ["İkinci Bahar", "Asmalı Konak", "Eğreti Gelin"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve romantik roller"],
    ["Asmalı Konak ile çok geniş kitleye ulaştı", "Güçlü mimikleriyle bilinir", "Sinema ve dizide uzun kariyeri vardır"],
    ["actor:turkish"]
  ),
  a(
    7172,
    "Songül Öden",
    ["songül öden", "songul oden"],
    ["Gümüş", "Umutsuz Ev Kadınları", "Oğlum"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik dram"],
    ["Gümüş dizisiyle uluslararası Türk dizi etkisinde yer aldı", "Duygusal karakterlerde bilinir", "Sahne ve ekranda aktif kariyeri vardır"],
    ["actor:turkish"]
  ),
  a(
    7173,
    "Vahide Perçin",
    ["vahide perçin", "vahide percin"],
    ["Anne", "Adını Feriha Koydum", "Muhteşem Yüzyıl"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Anne ve güçlü kadın rolleri"],
    ["Yoğun dramatik anne figürleriyle bilinir", "Sahne kökenli güçlü bir aktristir", "Otoriter ve duygusal rollerde etkilidir"],
    ["actor:turkish"]
  ),
  a(
    7174,
    "Meral Çetinkaya",
    ["meral çetinkaya", "meral cetinkaya"],
    ["Bizimkiler", "Öyle Bir Geçer Zaman ki", "Binbir Gece"],
    ["Türkiye / TV ve tiyatro", "Türkiye / Türk sineması ve dizileri"],
    ["Karakter oyunculuğu"],
    ["Uzun soluklu dizilerde unutulmaz karakterler yaratmıştır", "Sahne kökenli güçlü bir oyuncudur", "Otoriter ve sıcak rolleri taşıyabilir"],
    ["actor:turkish"]
  ),
  a(
    7175,
    "Sumru Yavrucuk",
    ["sumru yavrucuk"],
    ["Yabancı Damat", "Fatmagül'ün Suçu Ne?", "Şahane Hayatım"],
    ["Türkiye / TV ve tiyatro", "Türkiye / Türk sineması ve dizileri"],
    ["Karakter oyunculuğu"],
    ["Keskin ve doğal oyunculuğuyla bilinir", "Tiyatroda çok güçlüdür", "Farklı sosyal sınıflardan karakterleri iyi taşır"],
    ["actor:turkish"]
  ),
  a(
    7176,
    "Çetin Tekindor",
    ["çetin tekindor", "cetin tekindor"],
    ["Babam ve Oğlum", "İçerde", "Karadayı"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Baba figürü ve ağır dram"],
    ["Derin sesi ve ağır oyunculuğuyla bilinir", "Babam ve Oğlum performansıyla çok sevilir", "Sert ama duygusal karakterleri oynar"],
    ["actor:turkish"]
  ),
  a(
    7177,
    "Erdal Beşikçioğlu",
    ["erdal beşikçioğlu", "erdal besikcioglu", "behzat"],
    ["Behzat Ç.", "Vali", "Bergen"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Sert polis ve dram"],
    ["Behzat Ç. karakteriyle ikonlaşmıştır", "Sert ve kırılgan karakterleri birleştirir", "Tiyatro kökenli güçlü bir aktördür"],
    ["actor:turkish"]
  ),
  a(
    7178,
    "Fikret Kuşkan",
    ["fikret kuşkan", "fikret kuskan"],
    ["Babam ve Oğlum", "Mustafa Hakkında Her Şey", "Hanımın Çiftliği"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Duygusal dram"],
    ["İçe dönük ve kırılgan karakterlerde güçlüdür", "Babam ve Oğlum ile geniş kitleye ulaştı", "Sessiz ama yoğun oyunculuk yapar"],
    ["actor:turkish"]
  ),
  a(
    7179,
    "Mehmet Günsür",
    ["mehmet günsür", "mehmet gunsur"],
    ["Hamam", "Muhteşem Yüzyıl", "Atiye"],
    ["Türkiye / Uluslararası kariyer", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik ve tarihi roller"],
    ["İtalya bağlantılı kariyeri de vardır", "Tarihi dizilerde geniş kitleye ulaştı", "Sakin ve karizmatik ekran enerjisi vardır"],
    ["actor:turkish"]
  ),
  a(
    7180,
    "Oktay Kaynarca",
    ["oktay kaynarca"],
    ["Kurtlar Vadisi", "Eşkıya Dünyaya Hükümdar Olmaz", "Adanalı"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Mafya ve aksiyon dram"],
    ["Sert adam rolleriyle tanınır", "Kurtlar Vadisi evreninde unutulmazdır", "Aksiyon ve suç dizilerinde güçlüdür"],
    ["actor:turkish"]
  ),
  a(
    7181,
    "Tuncel Kurtiz",
    ["tuncel kurtiz", "ramiz dayı", "ramiz dayi"],
    ["Ezel", "Sürü", "Duvar"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Bilge ve karizmatik karakterler"],
    ["Ramiz Dayı rolüyle yeni kuşağa ulaşmıştır", "Derin sesiyle bilinir", "Şiirsel ve ağır oyunculuğu vardır"],
    ["actor:turkish"]
  ),
  a(
    7182,
    "Ercan Kesal",
    ["ercan kesal"],
    ["Bir Zamanlar Anadolu'da", "Çukur", "Nasipse Adayız"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Gerçekçi karakter oyunculuğu"],
    ["Doktorluk geçmişi vardır", "Doğal ve sade performanslarıyla bilinir", "Yazar ve yönetmen kimliği de vardır"],
    ["actor:turkish"]
  ),
  a(
    7183,
    "Taner Birsel",
    ["taner birsel"],
    ["Bir Zamanlar Anadolu'da", "Kış Uykusu", "Masumiyet"],
    ["Türkiye / Sanat sineması", "Türkiye / Türk sineması ve dizileri"],
    ["Minimal dram"],
    ["Nuri Bilge Ceylan filmleriyle bilinir", "Sakin ve içe dönük karakterlerde etkilidir", "Sahne kökenli bir oyuncudur"],
    ["actor:turkish"]
  ),
  a(
    7184,
    "Alican Yücesoy",
    ["alican yücesoy", "alican yucesoy"],
    ["İntikam", "Şahsiyet", "Küçük Şeyler"],
    ["Türkiye / Dizi ve sinema", "Türkiye / Türk sineması ve dizileri"],
    ["Modern karakter rolleri"],
    ["Sahne kökenli oyunculuğu vardır", "Duygusal ve şehirli karakterlerde görünür", "Dizi ve bağımsız sinema arasında geçiş yapar"],
    ["actor:turkish"]
  ),
  a(
    7185,
    "Boran Kuzum",
    ["boran kuzum"],
    ["Vatanım Sensin", "Saygı", "Bihter"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Genç dönem dramı"],
    ["Vatanım Sensin ile tanındı", "Genç kuşağın dikkat çeken aktörlerindendir", "Tarihi ve modern dramalarda yer alır"],
    ["actor:turkish"]
  ),
  a(
    7186,
    "Salih Bademci",
    ["salih bademci"],
    ["Kulüp", "İstanbullu Gelin", "Dilek Taşı"],
    ["Türkiye / Dizi ve tiyatro", "Türkiye / Türk sineması ve dizileri"],
    ["Karakter ve dram"],
    ["Çok yönlü karakter oyunculuğuyla bilinir", "Tiyatro kökeni güçlüdür", "Hem komedi hem dramda etkilidir"],
    ["actor:turkish"]
  ),
  a(
    7187,
    "Barış Arduç",
    ["barış arduç", "baris arduç", "baris arduc"],
    ["Kiralık Aşk", "Alparslan: Büyük Selçuklu", "Mutluluk Zamanı"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik ve tarihi jön"],
    ["Kiralık Aşk ile geniş kitleye ulaştı", "Tarihi dizilerde de başrol oynadı", "Sakin ve karizmatik karakterlerde görünür"],
    ["actor:turkish"]
  ),
  a(
    7188,
    "Kerem Bürsin",
    ["kerem bürsin", "kerem bursin"],
    ["Sen Çal Kapımı", "Güneşi Beklerken", "Bu Şehir Arkandan Gelecek"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi ve dram"],
    ["Global Türk dizi kitlesinde tanınır", "Yabancı dil ve sosyal medya görünürlüğü yüksektir", "Romantik komedi enerjisiyle bilinir"],
    ["actor:turkish"]
  ),
  a(
    7189,
    "Onur Saylak",
    ["onur saylak"],
    ["Şahsiyet", "Daha", "Sonbahar"],
    ["Türkiye / Sinema ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Dram ve yönetmenlik"],
    ["Oyunculuğun yanında yönetmenlik yapar", "Karanlık ve gerçekçi karakterlerde güçlüdür", "Sanat sinemasında da öne çıkar"],
    ["actor:turkish"]
  ),
  a(
    7190,
    "Can Yaman",
    ["can yaman"],
    ["Erkenci Kuş", "Dolunay", "Bay Yanlış"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Romantik komedi"],
    ["Yurt dışında geniş hayran kitlesi vardır", "Romantik komedi dizileriyle tanınır", "Fiziksel görünümüyle pop kültürde öne çıkar"],
    ["actor:turkish"]
  ),
  a(
    7191,
    "İbrahim Çelikkol",
    ["ibrahim çelikkol", "ibrahim celikkol", "i̇brahim çelikkol"],
    ["Siyah Beyaz Aşk", "Bir Zamanlar Çukurova", "Doğduğun Ev Kaderindir"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Sert romantik dram"],
    ["Karizmatik ve sert erkek karakterleriyle bilinir", "Dramatik dizilerde sık başrol oynar", "Model geçmişi vardır"],
    ["actor:turkish"]
  ),
  a(
    7192,
    "Engin Altan Düzyatan",
    ["engin altan düzyatan", "engin altan duzyatan"],
    ["Diriliş Ertuğrul", "Bir Bulut Olsam", "Kurşun"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Tarihi ve dramatik roller"],
    ["Ertuğrul Gazi rolüyle global tanınırlık kazandı", "Tarihi kahraman karakterleriyle bilinir", "Sunuculuk da yapmıştır"],
    ["actor:turkish"]
  ),
  a(
    7193,
    "İlker Kaleli",
    ["ilker kaleli", "i̇lker kaleli"],
    ["Poyraz Karayel", "Dip", "Öğretmen"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Aksiyon ve dram"],
    ["Poyraz Karayel karakteriyle çok sevilir", "Alaycı ve kırılgan karakterleri oynar", "Sert romantik dram havası vardır"],
    ["actor:turkish"]
  ),
  a(
    7194,
    "Mert Yazıcıoğlu",
    ["mert yazıcıoğlu", "mert yazicioglu"],
    ["Aşk 101", "Kızıl Goncalar", "Bir Litre Gözyaşı"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Genç dram"],
    ["Genç kuşağın dikkat çeken aktörlerindendir", "Okul/gençlik ve aile dramalarında yer alır", "Doğal oyunculuğuyla bilinir"],
    ["actor:turkish"]
  ),
  a(
    7195,
    "Kubilay Aka",
    ["kubilay aka"],
    ["Çukur", "Vatanım Sensin", "Aşk 101"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Genç dram ve aksiyon"],
    ["Çukur dizisiyle popülerleşti", "Genç ve asi karakterlerde öne çıkar", "Dizi projelerinde aktif bir kariyeri vardır"],
    ["actor:turkish"]
  ),
  a(
    7196,
    "Uraz Kaygılaroğlu",
    ["uraz kaygılaroğlu", "uraz kaygilaroglu"],
    ["Sefirin Kızı", "Üç Kuruş", "Aynen Aynen"],
    ["Türkiye / Dizi ve komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Renkli ve enerjik karakterleriyle bilinir", "Fiziksel dönüşümüyle de gündem olmuştur", "Komedi ve dramı birlikte taşır"],
    ["actor:turkish"]
  ),
  a(
    7197,
    "Şükrü Özyıldız",
    ["şükrü özyıldız", "sukru ozyildiz"],
    ["Akıncı", "Ruhun Duymaz", "Kış Güneşi"],
    ["Türkiye / Dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Aksiyon ve romantik roller"],
    ["Fiziksel aksiyon rollerine yakışır", "Romantik komedi ve dram arasında geçiş yapar", "Genç kuşağın tanınan aktörlerindendir"],
    ["actor:turkish"]
  ),
  a(
    7198,
    "İrem Sak",
    ["irem sak", "i̇rem sak"],
    ["Güldür Güldür Show", "Bir Aile Hikayesi", "Düğüm Salonu"],
    ["Türkiye / Komedi ve dizi", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve karakter rolleri"],
    ["Güldür Güldür sahnesiyle geniş kitleye ulaştı", "Abartılı komedi tiplemelerinde başarılıdır", "Dramatik rollerde de yer alır"],
    ["actor:turkish"]
  ),
  a(
    7199,
    "Gonca Vuslateri",
    ["gonca vuslateri"],
    ["Yalan Dünya", "Anne", "Küçük Sırlar"],
    ["Türkiye / Dizi ve tiyatro", "Türkiye / Türk sineması ve dizileri"],
    ["Komedi ve dram"],
    ["Vasfiye Teyze tiplemesiyle çok sevilir", "Karakter komedisinde çok güçlüdür", "Sahne kökenli oyunculuğu vardır"],
    ["actor:turkish"]
  ),
  a(
    7200,
    "Derya Karadaş",
    ["derya karadaş", "derya karadas"],
    ["Yalan Dünya", "Güldür Güldür Show", "Aile Arasında"],
    ["Türkiye / Komedi", "Türkiye / Türk sineması ve dizileri"],
    ["Sahne komedisi ve karakter oyunculuğu"],
    ["Zerrin karakteriyle tanınır", "Tiyatro kökenli güçlü komedi oyuncusudur", "Absürt ve hızlı karakterlerde etkilidir"],
    ["actor:turkish"]
  ),
];
