import type { GuessItem } from "../../types/game";

const createNbaStar = (
  id: number,
  name: string,
  answers: string[],
  teams: string[],
  nationality: string[],
  positions: string[],
  skills: string[]
): GuessItem => {
  return {
    id,
    mode: "nbaStar",
    modeLabel: "NBA Yıldızı",
    name,
    answers,
    hintGroups: [
      {
        key: "teams",
        label: "Takımlar",
        hints: teams,
      },
      {
        key: "nationality",
        label: "Uyruk",
        hints: nationality,
      },
      {
        key: "positions",
        label: "Mevki",
        hints: positions,
      },
      {
        key: "skills",
        label: "Özellik",
        hints: skills,
      },
    ],
  };
};

export const nbaStars: GuessItem[] = [
  createNbaStar(
    4001,
    "Vince Carter",
    ["vince carter", "carter", "vinsanity", "air canada"],
    [
      "Toronto Raptors",
      "New Jersey Nets",
      "Orlando Magic",
      "Phoenix Suns",
      "Dallas Mavericks",
      "Memphis Grizzlies",
      "Sacramento Kings",
      "Atlanta Hawks",
    ],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    [
      "Efsane smaççı",
      "All-Star Smaç Yarışması şampiyonu",
      "Olimpiyat şampiyonu",
      "Vinsanity lakabı",
      "Air Canada lakabı",
    ]
  ),

  createNbaStar(
    4002,
    "Ray Allen",
    ["ray allen", "allen", "ray"],
    ["Milwaukee Bucks", "Seattle SuperSonics", "Boston Celtics", "Miami Heat"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Efsane üçlükçü",
      "All-Star 3'lük yarışması şampiyonu",
      "NBA şampiyonu",
      "Olimpiyat şampiyonu",
      "Kritik şutlarıyla tanınır",
    ]
  ),

  createNbaStar(
    4003,
    "Tracy McGrady",
    ["tracy mcgrady", "mcgrady", "t-mac", "tmac"],
    [
      "Toronto Raptors",
      "Orlando Magic",
      "Houston Rockets",
      "New York Knicks",
      "Detroit Pistons",
      "Atlanta Hawks",
      "San Antonio Spurs",
    ],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    [
      "Skorer yıldız",
      "T-Mac lakabı",
      "All-Star",
      "13 sayıyı 35 saniyede atmasıyla bilinir",
      "Vince Carter ile akrabadır",
    ]
  ),

  createNbaStar(
    4004,
    "Michael Jordan",
    ["michael jordan", "jordan", "mj", "air jordan"],
    ["Chicago Bulls", "Washington Wizards"],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    [
      "Air Jordan lakabı",
      "6 NBA şampiyonluğu",
      "Efsane skorer",
      "Savunmasıyla da öne çıkar",
      "Chicago Bulls ikonu",
    ]
  ),

  createNbaStar(
    4005,
    "Kobe Bryant",
    ["kobe", "kobe bryant", "black mamba", "mamba"],
    ["Los Angeles Lakers"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Black Mamba lakabı",
      "Tek takım efsanesi",
      "5 NBA şampiyonluğu",
      "81 sayılık maç",
      "Fadeaway şutlarıyla bilinir",
    ]
  ),

  createNbaStar(
    4006,
    "LeBron James",
    ["lebron", "lebron james", "king james"],
    ["Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Small Forward", "Power Forward", "Point Forward"],
    [
      "King James lakabı",
      "Çok yönlü oyun",
      "NBA şampiyonu",
      "Olimpiyat şampiyonu",
      "Skor ve asist katkısıyla öne çıkar",
    ]
  ),

  createNbaStar(
    4007,
    "Magic Johnson",
    ["magic", "magic johnson", "earvin johnson"],
    ["Los Angeles Lakers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Showtime Lakers lideri",
      "Efsane pasör",
      "Uzun boylu oyun kurucu",
      "5 NBA şampiyonluğu",
      "No-look paslarıyla bilinir",
    ]
  ),

  createNbaStar(
    4008,
    "Larry Bird",
    ["larry bird", "bird"],
    ["Boston Celtics"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    [
      "Boston Celtics efsanesi",
      "Efsane şutör",
      "All-Star 3'lük yarışması şampiyonu",
      "Rekabetçi karakter",
      "Magic Johnson rekabetiyle bilinir",
    ]
  ),

  createNbaStar(
    4009,
    "Shaquille O'Neal",
    ["shaq", "shaquille o'neal", "shaquille oneal", "o'neal", "oneal"],
    [
      "Orlando Magic",
      "Los Angeles Lakers",
      "Miami Heat",
      "Phoenix Suns",
      "Cleveland Cavaliers",
      "Boston Celtics",
    ],
    ["ABD'li"],
    ["Center"],
    [
      "Fiziksel dominasyon",
      "Pota altı gücü",
      "4 NBA şampiyonluğu",
      "Lakers dönemiyle hatırlanır",
      "Shaq lakabı",
    ]
  ),

  createNbaStar(
    4010,
    "Tim Duncan",
    ["tim duncan", "duncan", "big fundamental"],
    ["San Antonio Spurs"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    [
      "Big Fundamental lakabı",
      "Tek takım efsanesi",
      "5 NBA şampiyonluğu",
      "Bank shot ile bilinir",
      "Sakin liderlik",
    ]
  ),

  createNbaStar(
    4011,
    "Hakeem Olajuwon",
    ["hakeem", "hakeem olajuwon", "olajuwon", "the dream"],
    ["Houston Rockets", "Toronto Raptors"],
    ["Nijeryalı", "ABD'li"],
    ["Center"],
    [
      "The Dream lakabı",
      "Dream Shake hareketi",
      "Blok ve savunma ustası",
      "NBA şampiyonu",
      "Houston Rockets efsanesi",
    ]
  ),

  createNbaStar(
    4012,
    "Dirk Nowitzki",
    ["dirk", "dirk nowitzki", "nowitzki"],
    ["Dallas Mavericks"],
    ["Alman"],
    ["Power Forward"],
    [
      "Tek ayak fadeaway",
      "Dallas Mavericks efsanesi",
      "NBA şampiyonu",
      "Avrupalı efsane",
      "Uzun forvet şutör",
    ]
  ),

  createNbaStar(
    4013,
    "Allen Iverson",
    ["allen iverson", "iverson", "ai", "the answer"],
    [
      "Philadelphia 76ers",
      "Denver Nuggets",
      "Detroit Pistons",
      "Memphis Grizzlies",
    ],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    [
      "The Answer lakabı",
      "Crossover hareketi",
      "Kısa boyuna rağmen efsane skorer",
      "MVP",
      "Kült basketbol figürü",
    ]
  ),

  createNbaStar(
    4014,
    "Stephen Curry",
    ["stephen curry", "steph curry", "curry", "steph", "chef curry"],
    ["Golden State Warriors"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Efsane üçlükçü",
      "Şut menziliyle oyunu değiştirdi",
      "NBA şampiyonu",
      "Golden State Warriors ikonu",
      "MVP",
    ]
  ),

  createNbaStar(
    4015,
    "Kevin Durant",
    ["kevin durant", "durant", "kd", "slim reaper"],
    [
      "Seattle SuperSonics",
      "Oklahoma City Thunder",
      "Golden State Warriors",
      "Brooklyn Nets",
      "Phoenix Suns",
    ],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    [
      "KD lakabı",
      "Uzun boylu skorer",
      "Efsane şut yeteneği",
      "NBA şampiyonu",
      "Olimpiyat şampiyonu",
    ]
  ),

  createNbaStar(
    4016,
    "Dwyane Wade",
    ["dwyane wade", "dwade", "d-wade", "wade", "flash"],
    ["Miami Heat", "Chicago Bulls", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Miami Heat efsanesi",
      "Hızlı penetre",
      "NBA şampiyonu",
      "Flash lakabı",
      "Blok yapan guard olarak bilinir",
    ]
  ),

  createNbaStar(
    4017,
    "Kevin Garnett",
    ["kevin garnett", "garnett", "kg", "the big ticket"],
    ["Minnesota Timberwolves", "Boston Celtics", "Brooklyn Nets"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    [
      "KG lakabı",
      "The Big Ticket lakabı",
      "Savunma enerjisi",
      "NBA şampiyonu",
      "Yoğun rekabetçi karakter",
    ]
  ),

  createNbaStar(
    4018,
    "Charles Barkley",
    ["charles barkley", "barkley", "sir charles", "chuck"],
    ["Philadelphia 76ers", "Phoenix Suns", "Houston Rockets"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "Sir Charles lakabı",
      "Kısa boylu güçlü forvet",
      "Ribaund gücü",
      "MVP",
      "Phoenix Suns dönemiyle hatırlanır",
    ]
  ),

  createNbaStar(
    4019,
    "Karl Malone",
    ["karl malone", "malone", "the mailman"],
    ["Utah Jazz", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "The Mailman lakabı",
      "Utah Jazz efsanesi",
      "Pick and roll",
      "Fiziksel güç",
      "John Stockton ile ikili oluşturdu",
    ]
  ),

  createNbaStar(
    4020,
    "John Stockton",
    ["john stockton", "stockton"],
    ["Utah Jazz"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Asist efsanesi",
      "Top çalma rekorlarıyla bilinir",
      "Utah Jazz efsanesi",
      "Pick and roll ustası",
      "Karl Malone ile ikili oluşturdu",
    ]
  ),

  createNbaStar(
    4021,
    "Steve Nash",
    ["steve nash", "nash"],
    ["Phoenix Suns", "Dallas Mavericks", "Los Angeles Lakers"],
    ["Kanadalı"],
    ["Point Guard"],
    [
      "Efsane pasör",
      "MVP",
      "Phoenix Suns dönemi",
      "Yüksek basketbol zekası",
      "Şutör oyun kurucu",
    ]
  ),

  createNbaStar(
    4022,
    "Jason Kidd",
    ["jason kidd", "kidd", "j-kidd"],
    [
      "Dallas Mavericks",
      "Phoenix Suns",
      "New Jersey Nets",
      "New York Knicks",
    ],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Triple-double tehdidi",
      "Efsane pasör",
      "NBA şampiyonu",
      "Savunmacı oyun kurucu",
      "New Jersey Nets dönemiyle hatırlanır",
    ]
  ),

  createNbaStar(
    4023,
    "Reggie Miller",
    ["reggie miller", "miller"],
    ["Indiana Pacers"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Efsane üçlükçü",
      "Indiana Pacers efsanesi",
      "Trash talk ile bilinir",
      "Kritik şutlar",
      "Madison Square Garden performanslarıyla hatırlanır",
    ]
  ),

  createNbaStar(
    4024,
    "Scottie Pippen",
    ["scottie pippen", "pippen", "scottie"],
    ["Chicago Bulls", "Houston Rockets", "Portland Trail Blazers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Chicago Bulls efsanesi",
      "Çok yönlü savunmacı",
      "6 NBA şampiyonluğu",
      "Michael Jordan ile ikili oluşturdu",
      "Point forward rolü",
    ]
  ),

  createNbaStar(
    4025,
    "David Robinson",
    ["david robinson", "robinson", "the admiral"],
    ["San Antonio Spurs"],
    ["ABD'li"],
    ["Center"],
    [
      "The Admiral lakabı",
      "San Antonio Spurs efsanesi",
      "NBA şampiyonu",
      "Blok ve savunma",
      "Atletik uzun",
    ]
  ),

  createNbaStar(
    4026,
    "Kareem Abdul-Jabbar",
    ["kareem", "kareem abdul jabbar", "kareem abdul-jabbar", "abdul jabbar"],
    ["Milwaukee Bucks", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Center"],
    [
      "Skyhook şutuyla bilinir",
      "Lakers efsanesi",
      "NBA şampiyonu",
      "Uzun kariyer",
      "Tüm zamanların en büyük uzunlarından",
    ]
  ),

  createNbaStar(
    4027,
    "Wilt Chamberlain",
    ["wilt", "wilt chamberlain", "chamberlain"],
    [
      "Philadelphia Warriors",
      "San Francisco Warriors",
      "Philadelphia 76ers",
      "Los Angeles Lakers",
    ],
    ["ABD'li"],
    ["Center"],
    [
      "100 sayılık maç",
      "Dominant uzun",
      "Ribaund efsanesi",
      "NBA şampiyonu",
      "Fiziksel üstünlük",
    ]
  ),

  createNbaStar(
    4028,
    "Bill Russell",
    ["bill russell", "russell"],
    ["Boston Celtics"],
    ["ABD'li"],
    ["Center"],
    [
      "Boston Celtics efsanesi",
      "11 NBA şampiyonluğu",
      "Savunma ve ribaund",
      "Liderlik",
      "Tüm zamanların en kazanan oyuncularından",
    ]
  ),

  createNbaStar(
    4029,
    "Julius Erving",
    ["julius erving", "erving", "dr j", "doctor j"],
    ["Virginia Squires", "New York Nets", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Dr. J lakabı",
      "Smaç estetiği",
      "Havada süzülmesiyle bilinir",
      "NBA şampiyonu",
      "ABA ve NBA efsanesi",
    ]
  ),

  createNbaStar(
    4030,
    "Dominique Wilkins",
    ["dominique wilkins", "wilkins", "human highlight film"],
    ["Atlanta Hawks", "Los Angeles Clippers", "Boston Celtics", "San Antonio Spurs", "Orlando Magic"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Human Highlight Film lakabı",
      "Efsane smaççı",
      "All-Star Smaç Yarışması şampiyonu",
      "Atlanta Hawks efsanesi",
      "Skorer forvet",
    ]
  ),

  createNbaStar(
    4031,
    "Giannis Antetokounmpo",
    ["giannis", "antetokounmpo", "giannis antetokounmpo", "greek freak"],
    ["Milwaukee Bucks"],
    ["Yunan", "Nijeryalı"],
    ["Power Forward"],
    [
      "Greek Freak lakabı",
      "Fiziksel dominasyon",
      "MVP",
      "NBA şampiyonu",
      "Uzun adımlarla (Eurostep) potaya gitmesiyle bilinir",
    ]
  ),

  createNbaStar(
    4032,
    "Luka Doncic",
    ["luka", "doncic", "luka doncic", "luka magic"],
    ["Dallas Mavericks", "Real Madrid"],
    ["Sloven"],
    ["Point Guard"],
    [
      "Luka Magic lakabı",
      "Step-back üçlük",
      "Avrupalı süper yıldız",
      "Oyun görüşü ve yavaş ritmiyle bilinir",
      "Çok genç yaşta Real Madrid efsanesi oldu",
    ]
  ),

  createNbaStar(
    4033,
    "Nikola Jokic",
    ["jokic", "nikola jokic", "joker"],
    ["Denver Nuggets"],
    ["Sırp"],
    ["Center"],
    [
      "Joker lakabı",
      "Tarihin en iyi pasör uzunlarından biri",
      "MVP",
      "NBA şampiyonu",
      "Sombor Shuffle atışıyla bilinir",
    ]
  ),

  createNbaStar(
    4034,
    "Joel Embiid",
    ["embiid", "joel embiid", "the process"],
    ["Philadelphia 76ers"],
    ["Kamerunlu", "Fransız", "ABD'li"],
    ["Center"],
    [
      "Trust The Process sloganıyla bilinir",
      "MVP",
      "Pota altı ve orta mesafe ustası",
      "Sosyal medyada çok aktiftir",
      "Sakatlıklarla boğuşan kariyer",
    ]
  ),

  createNbaStar(
    4035,
    "James Harden",
    ["harden", "james harden", "the beard"],
    ["Oklahoma City Thunder", "Houston Rockets", "Brooklyn Nets", "Philadelphia 76ers", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Shooting Guard", "Point Guard"],
    [
      "The Beard (Sakal) lakabı",
      "Step-back üçlük ustası",
      "MVP",
      "Efsanevi skorer",
      "Foul alma yeteneğiyle bilinir",
    ]
  ),

  createNbaStar(
    4036,
    "Russell Westbrook",
    ["westbrook", "russell westbrook", "russ", "brodie"],
    ["Oklahoma City Thunder", "Houston Rockets", "Washington Wizards", "Los Angeles Lakers", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Mr. Triple Double",
      "Patlayıcı atletizm",
      "MVP",
      "Agresif oyun tarzı",
      "Thunder tarihinin efsanesi",
    ]
  ),

  createNbaStar(
    4037,
    "Kawhi Leonard",
    ["kawhi", "kawhi leonard", "the claw", "klaw"],
    ["San Antonio Spurs", "Toronto Raptors", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "The Klaw (Pençe) lakabı",
      "El boyutu devasadır",
      "Efsanevi dış alan savunmacısı",
      "İki farklı takımla Finaller MVP'si",
      "Gülüşüyle internet memesi olmuştur",
    ]
  ),

  createNbaStar(
    4038,
    "Anthony Davis",
    ["anthony davis", "ad", "davis"],
    ["New Orleans Pelicans", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    [
      "AD lakabı",
      "Bitmeyen kaş (Unibrow) stiliyle bilinir",
      "Efsane çember koruyucu",
      "NBA şampiyonu",
      "Kentucky çıkışlı uzun",
    ]
  ),

  createNbaStar(
    4039,
    "Damian Lillard",
    ["lillard", "damian lillard", "dame", "dame time"],
    ["Portland Trail Blazers", "Milwaukee Bucks"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Dame Time lakabı",
      "Logo üçlükleri",
      "Kritik anlarda attığı şutlarla efsaneleşti",
      "Portland efsanesi",
      "Rap müzik yapar (Dame D.O.L.L.A.)",
    ]
  ),

  createNbaStar(
    4040,
    "Chris Paul",
    ["chris paul", "cp3", "point god"],
    ["New Orleans Hornets", "Los Angeles Clippers", "Houston Rockets", "Oklahoma City Thunder", "Phoenix Suns", "Golden State Warriors"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "CP3 lakabı",
      "Point God lakabı",
      "Geleneksel oyun kurucu efsanesi",
      "Pick and roll ustası",
      "Lob City döneminin lideri",
    ]
  ),

  createNbaStar(
    4041,
    "Kyrie Irving",
    ["kyrie", "kyrie irving", "uncle drew"],
    ["Cleveland Cavaliers", "Boston Celtics", "Brooklyn Nets", "Dallas Mavericks"],
    ["ABD'li", "Avustralyalı"],
    ["Point Guard"],
    [
      "Uncle Drew lakabı",
      "Tarihin en iyi top hakimiyetine (handle) sahip oyuncularından",
      "Finallerde attığı kritik şut (2016)",
      "NBA şampiyonu",
      "Dünya Düz tartışmalarıyla gündeme geldi",
    ]
  ),

  createNbaStar(
    4042,
    "Klay Thompson",
    ["klay", "klay thompson", "game 6 klay"],
    ["Golden State Warriors"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Splash Brothers üyesi",
      "Topu yere vurmadan 60 sayı atmasıyla bilinir",
      "Bir çeyrekte 37 sayı rekoru",
      "Game 6 Klay lakabı",
      " elit şutör ve savunmacı",
    ]
  ),

  createNbaStar(
    4043,
    "Draymond Green",
    ["draymond", "draymond green", "day day"],
    ["Golden State Warriors"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "Sistemin kalbi ve pasör uzun",
      "Efsanevi savunmacı",
      "Sık sık teknik faul almasıyla bilinir",
      "Trash talk ustası",
      "NBA şampiyonu",
    ]
  ),

  createNbaStar(
    4044,
    "Carmelo Anthony",
    ["carmelo", "carmelo anthony", "melo"],
    ["Denver Nuggets", "New York Knicks", "Oklahoma City Thunder", "Houston Rockets", "Portland Trail Blazers", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    [
      "Melo lakabı",
      "Efsanevi skorer",
      "Olimpiyatlarda efsanevi performanslar",
      "Üç parmak kafaya vurma sevinci",
      "Syracuse ile NCAA şampiyonu",
    ]
  ),

  createNbaStar(
    4045,
    "Dwight Howard",
    ["dwight", "dwight howard", "superman"],
    ["Orlando Magic", "Los Angeles Lakers", "Houston Rockets", "Atlanta Hawks", "Charlotte Hornets", "Washington Wizards", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Center"],
    [
      "Superman lakabı",
      "Yılın Savunmacısı ödülü dominasyonu",
      "Fiziksel güç ve atletizm",
      "Smaç yarışması efsanesi",
      "NBA şampiyonu (Lakers ile)",
    ]
  ),

  createNbaStar(
    4046,
    "Derrick Rose",
    ["rose", "derrick rose", "d-rose"],
    ["Chicago Bulls", "New York Knicks", "Cleveland Cavaliers", "Minnesota Timberwolves", "Detroit Pistons", "Memphis Grizzlies"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "En genç MVP",
      "Patlayıcı atletizm",
      "D-Rose lakabı",
      "Trajik sakatlık geçmişi",
      "Chicago doğumlu Bulls efsanesi",
    ]
  ),

  createNbaStar(
    4047,
    "Paul George",
    ["paul george", "pg13", "pg"],
    ["Indiana Pacers", "Oklahoma City Thunder", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "PG13 lakabı",
      "Pürüzsüz oyun stili",
      "İki yönlü (Two-way) oyuncu",
      "Ağır bir bacak sakatlığından döndü",
      "Elit kanat savunmacısı",
    ]
  ),

  createNbaStar(
    4048,
    "Jimmy Butler",
    ["jimmy", "jimmy butler", "jimmy buckets"],
    ["Chicago Bulls", "Minnesota Timberwolves", "Philadelphia 76ers", "Miami Heat"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Jimmy Buckets lakabı",
      "Playofflarda seviye atlamasıyla bilinir",
      "Azim ve çalışma ahlakı",
      "Heat Culture figürü",
      "Kahve markası kurdu (Big Face Coffee)",
    ]
  ),

  createNbaStar(
    4049,
    "Jayson Tatum",
    ["tatum", "jayson tatum"],
    ["Boston Celtics"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    [
      "Kobe Bryant'a duyduğu hayranlıkla bilinir",
      "Çok yönlü elit skorer",
      "Boston Celtics'in günümüzdeki lideri",
      "Draft edildiğinde çok gençti meme'i (He's only 19)",
      "Olimpiyat şampiyonu",
    ]
  ),

  createNbaStar(
    4050,
    "Devin Booker",
    ["booker", "devin booker", "d-book"],
    ["Phoenix Suns"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Çok genç yaşta 70 sayı atmasıyla bilinir",
      "Kobe Bryant stili orta mesafe oyunu",
      "Phoenix Suns efsanesi olma yolunda",
      "Kentucky çıkışlı elit şutör",
    ]
  ),

  createNbaStar(
    4051,
    "Tony Parker",
    ["tony parker", "parker"],
    ["San Antonio Spurs", "Charlotte Hornets"],
    ["Fransız"],
    ["Point Guard"],
    [
      "Gözyaşı damlası (Tear drop) şutuyla efsaneleşti",
      "4 NBA şampiyonluğu",
      "Finaller MVP'si (İlk Avrupalı)",
      "Spurs Büyük Üçlüsü'nün parçası",
    ]
  ),

  createNbaStar(
    4052,
    "Manu Ginobili",
    ["manu", "ginobili", "manu ginobili"],
    ["San Antonio Spurs"],
    ["Arjantinli"],
    ["Shooting Guard"],
    [
      "Eurostep hareketini NBA'e getiren isim",
      "Solak efsane",
      "Olimpiyatlarda ABD'yi yenip altın madalya kazandı",
      "Spurs Büyük Üçlüsü'nün parçası",
      "Efsanevi Altıncı Adam",
    ]
  ),

  createNbaStar(
    4053,
    "Pau Gasol",
    ["pau", "gasol", "pau gasol"],
    ["Memphis Grizzlies", "Los Angeles Lakers", "Chicago Bulls", "San Antonio Spurs"],
    ["İspanyol"],
    ["Power Forward", "Center"],
    [
      "Kobe Bryant ile kazandığı yüzüklerle hatırlanır",
      "Basketbol zekası ve pas yeteneği çok yüksektir",
      "İspanya milli takımı efsanesi",
      "NBA'de Yılın Çaylağı ödülünü alan ilk Avrupalı",
    ]
  ),

  createNbaStar(
    4054,
    "Marc Gasol",
    ["marc gasol", "marc"],
    ["Memphis Grizzlies", "Toronto Raptors", "Los Angeles Lakers"],
    ["İspanyol"],
    ["Center"],
    [
      "Yılın Savunmacısı ödülü",
      "Pau'nun kardeşi",
      "Toronto ile NBA şampiyonu",
      "Grit and Grind dönemi Memphis efsanesi",
      "Kusursuz pasör uzun",
    ]
  ),

  createNbaStar(
    4055,
    "Yao Ming",
    ["yao", "yao ming", "ming"],
    ["Houston Rockets"],
    ["Çinli"],
    ["Center"],
    [
      "2.29 metre boy",
      "Asya pazarını NBA ile tanıştırdı",
      "Dev boyuna rağmen yumuşak şut bileği",
      "Sakatlıklar kariyerini erken bitirdi",
      "Basketbol elçisi",
    ]
  ),

  createNbaStar(
    4056,
    "Dikembe Mutombo",
    ["mutombo", "dikembe mutombo", "dikembe"],
    ["Denver Nuggets", "Atlanta Hawks", "Philadelphia 76ers", "New Jersey Nets", "New York Knicks", "Houston Rockets"],
    ["Kongolu"],
    ["Center"],
    [
      "Blok yaptıktan sonra parmak sallama hareketi (No no no)",
      "4 kez Yılın Savunmacısı",
      "Efsanevi çember koruyucu",
      "Yardımseverliği ile tanınır",
      "Dağ (Mount) lakabı",
    ]
  ),

  createNbaStar(
    4057,
    "Alonzo Mourning",
    ["alonzo mourning", "zo", "mourning"],
    ["Charlotte Hornets", "Miami Heat", "New Jersey Nets"],
    ["ABD'li"],
    ["Center"],
    [
      "Zo lakabı",
      "Miami Heat efsanesi",
      "Böbrek nakli olduktan sonra şampiyonluk kazandı",
      "Korkutucu blokçu ve savunmacı",
      "Agresif ve hırslı oyun tarzı",
    ]
  ),

  createNbaStar(
    4058,
    "Gary Payton",
    ["gary payton", "payton", "the glove"],
    ["Seattle SuperSonics", "Milwaukee Bucks", "Los Angeles Lakers", "Boston Celtics", "Miami Heat"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "The Glove (Eldiven) lakabı",
      "Efsanevi dış savunmacı",
      "Trash talk ustası",
      "Shawn Kemp ile efsanevi ikili",
      "Miami ile kariyer sonu şampiyonluğu",
    ]
  ),

  createNbaStar(
    4059,
    "Shawn Kemp",
    ["shawn kemp", "kemp", "reign man"],
    ["Seattle SuperSonics", "Cleveland Cavaliers", "Portland Trail Blazers", "Orlando Magic"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "Reign Man lakabı",
      "Tarihin en vahşi smaçörlerinden",
      "Gary Payton'ın takım arkadaşı",
      "90'ların unutulmaz atletlerinden",
      "Smaç vurduktan sonra yaptığı sevinçlerle bilinir",
    ]
  ),

  createNbaStar(
    4060,
    "Jason Williams",
    ["jason williams", "white chocolate"],
    ["Sacramento Kings", "Memphis Grizzlies", "Miami Heat", "Orlando Magic"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "White Chocolate (Beyaz Çikolata) lakabı",
      "Sokak basketbolu stilini NBA'e taşıdı",
      "Elbow pass",
      "Sokak stili top hakimiyeti",
      "Miami ile şampiyon oldu",
    ]
  ),
createNbaStar(
    4061,
    "Dennis Rodman",
    ["dennis rodman", "rodman", "the worm"],
    ["Detroit Pistons", "San Antonio Spurs", "Chicago Bulls", "Los Angeles Lakers", "Dallas Mavericks"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "The Worm (Solucan) lakabı",
      "Efsanevi ribaund kralı",
      "Sürekli değişen saç renkleri",
      "Bad Boys Pistons ve Bulls 3-peat kadrosu",
      "Savunma ve hırs",
    ]
  ),

  createNbaStar(
    4062,
    "Patrick Ewing",
    ["patrick ewing", "ewing"],
    ["New York Knicks", "Seattle SuperSonics", "Orlando Magic"],
    ["ABD'li", "Jamaikalı"],
    ["Center"],
    [
      "New York Knicks efsanesi",
      "90'ların en büyük pivotlarından",
      "Aşırı terlemesiyle bilinir",
      "Dream Team (1992) üyesi",
      "Şampiyonluk yüzüğü olmayan efsanelerden",
    ]
  ),

  createNbaStar(
    4063,
    "Clyde Drexler",
    ["clyde drexler", "drexler", "clyde the glide"],
    ["Portland Trail Blazers", "Houston Rockets"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Clyde the Glide lakabı",
      "Havada süzülen oyun stili",
      "Michael Jordan'ın en büyük rakiplerinden biriydi",
      "Houston ile şampiyonluk kazandı",
      "Phi Slama Jama üyesi",
    ]
  ),

  createNbaStar(
    4064,
    "Isiah Thomas",
    ["isiah thomas", "isiah", "zeke"],
    ["Detroit Pistons"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Zeke lakabı",
      "Bad Boys Pistons takımının lideri",
      "Kısa boyuna rağmen devasa yürek",
      "Michael Jordan ile aralarındaki husumet ünlüdür",
      "Sakat bacakla finallerde rekor kırdı (1988)",
    ]
  ),

  createNbaStar(
    4065,
    "Penny Hardaway",
    ["penny", "penny hardaway", "anfernee hardaway"],
    ["Orlando Magic", "Phoenix Suns", "New York Knicks", "Miami Heat"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    [
      "Shaq ile efsanevi ikili oldular",
      "Uzun boylu oyun kurucu",
      "Sakatlıklar kariyerini etkiledi",
      "Lil Penny adlı kukla reklamlarıyla ünlendi",
      "90'ların en popüler oyuncularından",
    ]
  ),

  createNbaStar(
    4066,
    "Grant Hill",
    ["grant hill", "hill"],
    ["Detroit Pistons", "Orlando Magic", "Phoenix Suns", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Michael Jordan'ın varisi olarak gösteriliyordu",
      "NCAA'de Duke efsanesi",
      "Point Forward teriminin öncülerinden",
      "Bilek sakatlıkları kariyerini mahvetti",
      "Kariyerinin sonlarında elit bir rol oyuncusu oldu",
    ]
  ),

  createNbaStar(
    4067,
    "Chris Webber",
    ["chris webber", "webber", "c-webb"],
    ["Golden State Warriors", "Washington Bullets", "Sacramento Kings", "Philadelphia 76ers", "Detroit Pistons"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "C-Webb lakabı",
      "Fab Five (Michigan) üyesi",
      "NCAA finalindeki mola hatasıyla hafızalara kazındı",
      "2000'lerin başındaki efsanevi Kings takımının yıldızı",
      "Pasör uzun profilinin en iyilerinden",
    ]
  ),

  createNbaStar(
    4068,
    "Paul Pierce",
    ["paul pierce", "pierce", "the truth"],
    ["Boston Celtics", "Brooklyn Nets", "Washington Wizards", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "The Truth (Gerçek) lakabı",
      "Boston Celtics efsanesi",
      "2008 Finalleri MVP'si",
      "Bıçaklanma olayından sonra sezonun tüm maçlarında oynadı",
      "Kritik anlardaki soğukkanlı şutları",
    ]
  ),

  createNbaStar(
    4069,
    "Amar'e Stoudemire",
    ["amare", "amare stoudemire", "stat"],
    ["Phoenix Suns", "New York Knicks", "Dallas Mavericks", "Miami Heat"],
    ["ABD'li", "İsrailli"],
    ["Power Forward", "Center"],
    [
      "STAT lakabı",
      "Steve Nash ile efsanevi Pick & Roll ikilisi",
      "Vahşi smaçları ve atletizmi",
      "Gözlük (Goggles) takmasıyla bilinir",
      "Suns'ın 7 saniye ve altı hücum sisteminin bitiricisi",
    ]
  ),

  createNbaStar(
    4070,
    "Deron Williams",
    ["deron williams", "d-will"],
    ["Utah Jazz", "New Jersey Nets", "Dallas Mavericks", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "D-Will lakabı",
      "Chris Paul ile kim daha iyi tartışmalarının öznesiydi",
      "Crossover ustası",
      "Jerry Sloan ile yaşadığı krizle bilinir",
      "Güçlü fiziksel oyun kurucu",
    ]
  ),

  createNbaStar(
    4071,
    "Victor Wembanyama",
    ["wemby", "victor wembanyama", "wembanyama", "alien"],
    ["San Antonio Spurs"],
    ["Fransız"],
    ["Center"],
    [
      "Wemby lakabı",
      "LeBron'un kendisine 'Uzaylı' (Alien) demesi",
      "2.24m boy ve oyun kurucu yetenekleri",
      "Tarihin en çok beklenen draft seçimlerinden",
      "Çaylak yılında blok kralı",
    ]
  ),

  createNbaStar(
    4072,
    "Anthony Edwards",
    ["anthony edwards", "ant", "ant-man"],
    ["Minnesota Timberwolves"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Ant-Man lakabı",
      "Patlayıcı atletizm ve vahşi smaçlar",
      "Michael Jordan'a benzetilen oyun stili ve tavrı",
      "Eğlenceli ve kendinden emin röportajları",
      "Georgia çıkışlı",
    ]
  ),

  createNbaStar(
    4073,
    "Shai Gilgeous-Alexander",
    ["shai", "sga", "shai gilgeous-alexander"],
    ["Los Angeles Clippers", "Oklahoma City Thunder"],
    ["Kanadalı"],
    ["Point Guard", "Shooting Guard"],
    [
      "SGA lakabı",
      "Kendi ritminde oynayan, pürüzsüz delici",
      "Midrange ve serbest atış ustası",
      "OKC'nin yeniden yapılanmasının lideri",
      "Modaya olan ilgisiyle bilinir",
    ]
  ),

  createNbaStar(
    4074,
    "Ja Morant",
    ["ja", "ja morant", "morant"],
    ["Memphis Grizzlies"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Yerçekimine meydan okuyan smaçlar ve bloklar",
      "Hızlı hücum ustası",
      "Murray State çıkışlı",
      "Saha dışı silah tartışmalarıyla ceza aldı",
      "Griddy dansını NBA'de popüler yaptı",
    ]
  ),

  createNbaStar(
    4075,
    "Zion Williamson",
    ["zion", "zion williamson"],
    ["New Orleans Pelicans"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "İnanılmaz fiziksel kütle ve sıçrama yeteneği (Hulk gibi)",
      "NCAA'de Duke fırtınası",
      "Ayakkabısının patlaması olayı (NCAA)",
      "Sakatlık sorunlarıyla boğuşuyor",
      "Pota altı bitiriciliğinde durdurulamaz",
    ]
  ),

  createNbaStar(
    4076,
    "Trae Young",
    ["trae young", "ice trae", "trae"],
    ["Atlanta Hawks"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Ice Trae lakabı",
      "Logo üçlükleri",
      "Bacak arası paslar ve floater atışları",
      "New York Knicks taraftarının baş düşmanı",
      "Luka Doncic ile takas edilmesi",
    ]
  ),

  createNbaStar(
    4077,
    "Donovan Mitchell",
    ["donovan mitchell", "mitchell", "spida"],
    ["Utah Jazz", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Spida lakabı",
      "Bir maçta 71 sayı atma rekoru",
      "Çaylak yılında smaç yarışmasını kazandı",
      "Skorer ve patlayıcı",
      "Utah'ın Gobert ile olan döneminin skoreri",
    ]
  ),

  createNbaStar(
    4078,
    "Rudy Gobert",
    ["gobert", "rudy gobert", "stifle tower"],
    ["Utah Jazz", "Minnesota Timberwolves"],
    ["Fransız"],
    ["Center"],
    [
      "The Stifle Tower lakabı",
      "4 kez Yılın Savunmacısı (DPOY)",
      "Elit çember koruyucu",
      "COVID-19 basın toplantısındaki mikrofon dokunma olayı",
      "Hücum ribaundu ve blok makinesi",
    ]
  ),

  createNbaStar(
    4079,
    "Karl-Anthony Towns",
    ["towns", "kat", "karl-anthony towns"],
    ["Minnesota Timberwolves"],
    ["ABD'li", "Dominikli"],
    ["Center", "Power Forward"],
    [
      "KAT lakabı",
      "Tarihin en iyi şut atan uzunlarından biri",
      "Bir maçta 62 sayı attı",
      "3'lük yarışmasını kazanan pivot",
      "Kentucky çıkışlı 1 numara draft",
    ]
  ),

  createNbaStar(
    4080,
    "Jamal Murray",
    ["jamal murray", "murray", "blue arrow"],
    ["Denver Nuggets"],
    ["Kanadalı"],
    ["Point Guard"],
    [
      "Blue Arrow lakabı",
      "Jokic ile oynadığı kusursuz ikili oyun",
      "NBA Bubble (Fanus) dönemindeki efsanevi performansı",
      "Büyük maçların oyuncusu (Playoff Murray)",
      "Ağır çapraz bağ sakatlığından dönüp şampiyon oldu",
    ]
  ),

  createNbaStar(
    4081,
    "Jaylen Brown",
    ["jaylen brown", "jb"],
    ["Boston Celtics"],
    ["ABD'li"],
    ["Small Forward", "Shooting Guard"],
    [
      "2024 NBA Finalleri MVP'si",
      "Tarihin en büyük kontratlarından birine imza attı",
      "Jayson Tatum ile oluşturdukları 'Jays' ikilisi",
      "Fiziksel kanat oyuncusu ve elit savunmacı",
      "Saha dışında entelektüel kişiliğiyle bilinir",
    ]
  ),

  createNbaStar(
    4082,
    "De'Aaron Fox",
    ["fox", "deaaron fox", "swipa"],
    ["Sacramento Kings"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Swipa lakabı",
      "NBA'in topla en hızlı oyuncularından biri",
      "Yılın En Kritik An (Clutch) Oyuncusu ödülünün ilk sahibi",
      "Kings'in 16 yıllık playoff hasretini bitirdi",
      "Kentucky çıkışlı solak guard",
    ]
  ),

  createNbaStar(
    4083,
    "Domantas Sabonis",
    ["sabonis", "domantas sabonis"],
    ["Oklahoma City Thunder", "Indiana Pacers", "Sacramento Kings"],
    ["Litvanyalı"],
    ["Center", "Power Forward"],
    [
      "Efsanevi Avrupalı uzunun (Arvydas) oğlu",
      "Triple-double ve ribaund canavarı",
      "Takımın hücum merkezi, pasör uzun",
      "De'Aaron Fox ile efsanevi uyum",
      "Fiziksel temaslı oyun stili",
    ]
  ),

  createNbaStar(
    4084,
    "Tyrese Haliburton",
    ["haliburton", "tyrese haliburton", "hali"],
    ["Sacramento Kings", "Indiana Pacers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Elit pasör ve asist kralı",
      "Garip ama aşırı isabetli şut stili",
      "Hızlı tempo (Run&Gun) hücumunun beyni",
      "Draftta 12. sıraya düşmesi eleştirildi",
      "Kings'ten takas edilmesi şok etkisi yaratmıştı",
    ]
  ),

  createNbaStar(
    4085,
    "LaMelo Ball",
    ["lamelo", "melo", "lamelo ball"],
    ["Charlotte Hornets"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Gösterişli paslar ve saha vizyonu",
      "Chino Hills lisesindeki efsanevi kardeş üçlüsünün en küçüğü",
      "Babasının (Lavar) medyatik açıklamalarıyla büyüdü",
      "Draft edilmeden önce Avustralya liginde oynadı",
      "Yılın Çaylağı",
    ]
  ),

  createNbaStar(
    4086,
    "Jalen Brunson",
    ["brunson", "jalen brunson"],
    ["Dallas Mavericks", "New York Knicks"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Kusursuz ayak oyunları (footwork)",
      "New York Knicks'in yeni kahramanı",
      "Villanova ile NCAA şampiyonlukları",
      "Kısa boyuna rağmen boyalı alanda inanılmaz etkili",
      "Dallas'ın elinden kaçırdığı yıldız",
    ]
  ),

  createNbaStar(
    4087,
    "Pascal Siakam",
    ["siakam", "pascal siakam", "spicy p"],
    ["Toronto Raptors", "Indiana Pacers"],
    ["Kamerunlu"],
    ["Power Forward"],
    [
      "Spicy P lakabı",
      "Spin (Dönerek) hareketleriyle bilinir",
      "Basketbola çok geç başlamıştır (Eski rahip adayı)",
      "En Çok Gelişme Gösteren Oyuncu (MIP) ve Şampiyonluk",
      "Bitmek bilmeyen enerjisi",
    ]
  ),

  createNbaStar(
    4088,
    "Khris Middleton",
    ["middleton", "khris middleton"],
    ["Detroit Pistons", "Milwaukee Bucks"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Giannis'in en güvendiği ikinci adam",
      "Özellikle Celtics'e karşı efsanevi performanslar sergiler",
      "Kritik anlardaki orta mesafe şutları",
      "G-League'den All-Star seviyesine çıkmış bir hikaye",
      "2021 NBA Şampiyonu",
    ]
  ),

  createNbaStar(
    4089,
    "Jrue Holiday",
    ["jrue", "jrue holiday"],
    ["Philadelphia 76ers", "New Orleans Pelicans", "Milwaukee Bucks", "Boston Celtics"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    [
      "Ligin en iyi dış alan savunmacılarından biri",
      "Oyuncuların en çok saygı duyduğu isimlerden",
      "İki farklı takımla şampiyonluk kazandı (Bucks, Celtics)",
      "Eşi Lauren (Futbolcu) hastalandığında kariyerine ara verdi",
      "Finallerdeki kritik top çalması (Devin Booker'dan)",
    ]
  ),

  createNbaStar(
    4090,
    "CJ McCollum",
    ["cj mccollum", "cj"],
    ["Portland Trail Blazers", "New Orleans Pelicans"],
    ["ABD'li"],
    ["Shooting Guard", "Point Guard"],
    [
      "Damian Lillard ile oluşturdukları efsanevi arka alan ikilisi",
      "Pürüzsüz orta mesafe ve şut stili",
      "Oyuncular Birliği Başkanı (Eski)",
      "Lehigh çıkışlı (NCAA'de Duke'u eledikleri maçla tanındı)",
      "Gazetecilik bölümü mezunu ve podcastçi",
    ]
  ),

  createNbaStar(
    4091,
    "Kristaps Porzingis",
    ["porzingis", "kristaps porzingis", "unicorn"],
    ["New York Knicks", "Dallas Mavericks", "Washington Wizards", "Boston Celtics"],
    ["Letonyalı"],
    ["Center"],
    [
      "The Unicorn lakabı (Kevin Durant taktı)",
      "2.21m boyunda olup uzaklardan üçlük atabilmesi",
      "Blok tehdidi",
      "Knicks tarafından draft edildiğinde yuhalanmıştı",
      "Sakatlık problemleri",
    ]
  ),

  createNbaStar(
    4092,
    "Al Horford",
    ["horford", "al horford", "big al"],
    ["Atlanta Hawks", "Boston Celtics", "Philadelphia 76ers", "Oklahoma City Thunder"],
    ["Dominikli"],
    ["Center", "Power Forward"],
    [
      "Veteran liderlik",
      "Kusursuz savunma pozisyonu alma ve zeka",
      "Florida Gators ile arka arkaya 2 NCAA şampiyonluğu",
      "Kariyerinin ilerleyen yıllarında efsanevi bir üçlükçüye dönüştü",
      "Embiid'i savunmadaki başarısıyla bilinir",
    ]
  ),

  createNbaStar(
    4093,
    "Andre Iguodala",
    ["iguodala", "andre iguodala", "iggy"],
    ["Philadelphia 76ers", "Denver Nuggets", "Golden State Warriors", "Miami Heat"],
    ["ABD'li"],
    ["Small Forward"],
    [
      "Iggy lakabı",
      "2015 NBA Finalleri MVP'si",
      "Warriors'ın 'Ölüm Kadrosu' (Death Lineup) kilit parçası",
      "Elit savunmacı ve yüksek basketbol zekası",
      "Max Kellerman'ın 'Dünyanın kaderi bağlıysa şutu Iguodala atsın' sözü",
    ]
  ),

  createNbaStar(
    4094,
    "Zach LaVine",
    ["lavine", "zach lavine"],
    ["Minnesota Timberwolves", "Chicago Bulls"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "2 kez üst üste Smaç Yarışması şampiyonu",
      "Aaron Gordon ile efsanevi smaç düellosu (2016)",
      "Estetik zıplama ve şut formu",
      "Skorer kanat oyuncusu",
      "UCLA çıkışlı",
    ]
  ),

  createNbaStar(
    4095,
    "DeMar DeRozan",
    ["derozan", "demar derozan", "deebo"],
    ["Toronto Raptors", "San Antonio Spurs", "Chicago Bulls"],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    [
      "Midrange (Orta mesafe) ustası",
      "Kusursuz ayak oyunları (Kobe Bryant stili)",
      "Kyle Lowry ile olan yakın dostluğu (Raptors dönemi)",
      "Mental sağlık konularında farkındalık yaratan konuşmaları",
      "4. çeyrekteki kritik sayıları (King of the Fourth)",
    ]
  ),

  createNbaStar(
    4096,
    "Kyle Lowry",
    ["lowry", "kyle lowry"],
    ["Memphis Grizzlies", "Houston Rockets", "Toronto Raptors", "Miami Heat", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Hücum faul (Charge) alma ustası",
      "Bulldog gibi savaşçı oyun tarzı",
      "Toronto Raptors'ın en büyük efsanesi",
      "NBA Şampiyonu",
      "Kısa boyuna rağmen inanılmaz fiziksel direnç",
    ]
  ),

  createNbaStar(
    4097,
    "John Wall",
    ["wall", "john wall"],
    ["Washington Wizards", "Houston Rockets", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Prime döneminde ligin en hızlı oyuncusuydu",
      "Kentucky çıkışlı 1 numara draft",
      "Dougie dansı (Çaylak yılındaki sunumu)",
      "Bradley Beal ile Washington ikilisi",
      "Aşil tendonu sakatlığı kariyerini kesti",
    ]
  ),

  createNbaStar(
    4098,
    "Bradley Beal",
    ["beal", "bradley beal"],
    ["Washington Wizards", "Phoenix Suns"],
    ["ABD'li"],
    ["Shooting Guard"],
    [
      "Pürüzsüz şut mekaniği",
      "Birkaç sezon üst üste 30 sayı ortalamaları yakaladı",
      "Kariyerinin büyük bölümünü Wizards'ta sadık kalarak geçirdi",
      "Florida çıkışlı",
      "Suns Büyük Üçlüsü'nün parçası oldu",
    ]
  ),

  createNbaStar(
    4099,
    "Blake Griffin",
    ["blake griffin", "blake"],
    ["Los Angeles Clippers", "Detroit Pistons", "Brooklyn Nets", "Boston Celtics"],
    ["ABD'li"],
    ["Power Forward"],
    [
      "Lob City döneminin yüzü",
      "Kia arabanın üzerinden uçarak bastığı smaç (Smaç Yarışması)",
      "İnanılmaz güç ve atletizm",
      "Kariyerinin sonlarında elit bir pasör ve üçlükçüye dönüştü",
      "Stand-up ve komedi ile ilgilenir",
    ]
  ),

  createNbaStar(
    4100,
    "DeAndre Jordan",
    ["deandre jordan", "dj"],
    ["Los Angeles Clippers", "Dallas Mavericks", "Brooklyn Nets", "Los Angeles Lakers", "Denver Nuggets"],
    ["ABD'li"],
    ["Center"],
    [
      "Lob City'nin duvarı ve alley-oop bitiricisi",
      "Brandon Knight'ın üzerinden vurduğu cinayet gibi smaç",
      "Ribaund krallıkları",
      "Zayıf serbest atış yüzdesi (Hack-a-Jordan kurbanı)",
      "Nuggets ile yedek uzun olarak şampiyon oldu",
    ]
  ),

  createNbaStar(
    4101,
    "Rajon Rondo",
    ["rondo", "rajon rondo"],
    ["Boston Celtics", "Dallas Mavericks", "Sacramento Kings", "Chicago Bulls", "New Orleans Pelicans", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Point Guard"],
    [
      "Sırt arkası sahte pas (fake) ustası",
      "Ulusal TV maçlarında (Playoff Rondo) efsaneleşmesi",
      "Hem Celtics hem Lakers ile şampiyonluk yaşadı",
      "Çok yüksek basketbol IQ'su (Connect Four oyununda yenilmez)",
      "Şut eksiğini zekasıyla kapatan guard",
    ]
  ),

  createNbaStar(
    4102,
    "Peja Stojakovic",
    ["peja", "peja stojakovic"],
    ["Sacramento Kings", "Indiana Pacers", "New Orleans Hornets", "Dallas Mavericks"],
    ["Sırp"],
    ["Small Forward"],
    [
      "Tarihin en saf şutörlerinden biri",
      "2000'ler Sacramento Kings hücumunun kalbi",
      "İki kez arka arkaya 3 Sayı Yarışması şampiyonu",
      "Kariyerinin sonunda Dallas ile şampiyonluk yaşadı",
      "Yüksek bombeli üçlükleri",
    ]
  ),

  createNbaStar(
    4103,
    "Vlade Divac",
    ["divac", "vlade divac"],
    ["Los Angeles Lakers", "Charlotte Hornets", "Sacramento Kings"],
    ["Sırp"],
    ["Center"],
    [
      "Efsanevi Avrupalı pasör pivot",
      "Kobe Bryant'ın Lakers'a gelmesi için takas edilen oyuncu",
      "Kritik anlarda bilerek kendini yere atmasıyla (Flop) bilinir",
      "Kings döneminde Shaq/Lakers'ın en büyük rakibiydi",
      "Basketbolun Avrupa'da yayılmasındaki öncülerden",
    ]
  ),

  createNbaStar(
    4104,
    "Arvydas Sabonis",
    ["arvydas sabonis", "arvydas"],
    ["Portland Trail Blazers"],
    ["Litvanyalı"],
    ["Center"],
    [
      "Birçok uzmana göre tarihin en iyi pasör uzunu",
      "Domantas Sabonis'in babası",
      "NBA'e 31 yaşında ve ağır sakatlıklar (iki aşil kopması) sonrasında geldi",
      "Sırtı dönük efsanevi asistler",
      "Sovyetler Birliği milli takım efsanesi",
    ]
  ),

  createNbaStar(
    4105,
    "Drazen Petrovic",
    ["petrovic", "drazen petrovic", "drazen"],
    ["Portland Trail Blazers", "New Jersey Nets"],
    ["Hırvat"],
    ["Shooting Guard"],
    [
      "Avrupa'nın Mozart'ı",
      "İnanılmaz hızlı şut mekaniği ve elit skorer",
      "Kariyerinin zirvesindeyken trajik bir trafik kazasında hayatını kaybetti",
      "Avrupalı oyuncuların NBA'de skorer olabileceğini kanıtladı",
      "Reggie Miller'ın 'Karşısında oynamaktan en nefret ettiğim oyuncu' dediği isim",
    ]
  ),

  createNbaStar(
    4106,
    "Toni Kukoc",
    ["kukoc", "toni kukoc"],
    ["Chicago Bulls", "Philadelphia 76ers", "Atlanta Hawks", "Milwaukee Bucks"],
    ["Hırvat"],
    ["Small Forward", "Power Forward"],
    [
      "The Waiterlakabı",
      "Michael Jordan'lı Chicago Bulls 3-peat kadrosunun 6. adamı",
      "Çok yönlü Avrupa forvet prototipi",
      "Solak şutör ve pasör",
      "1992 Olimpiyatlarında Pippen ve Jordan tarafından 'hoş geldin' baskısına uğradı",
    ]
  ),

  createNbaStar(
    4107,
    "Ricky Rubio",
    ["rubio", "ricky rubio"],
    ["Minnesota Timberwolves", "Utah Jazz", "Phoenix Suns", "Cleveland Cavaliers"],
    ["İspanyol"],
    ["Point Guard"],
    [
      "Çok genç yaşta (harika çocuk) İspanya'da profesyonel oldu",
      "Sihirbaz gibi saha görüşü ve estetik paslar",
      "Şut eksiği kariyerini sınırladı",
      "Fiba Dünya Kupası MVP'si (2019)",
      "Bacak arası asisti (Nutmeg) ile ünlüdür",
    ]
  ),

  createNbaStar(
    4108,
    "Joakim Noah",
    ["noah", "joakim noah"],
    ["Chicago Bulls", "New York Knicks", "Memphis Grizzlies", "Los Angeles Clippers"],
    ["Fransız", "ABD'li"],
    ["Center"],
    [
      "Derrick Rose dönemi Bulls takımının savunma ve ruh kalbi",
      "2014 Yılın Savunmacısı",
      "Garipliğiyle ünlü çift elli göğüs şutu (Tornado)",
      "LeBron James ve Miami şehrinden açıkça nefret etmesiyle bilinir",
      "Florida ile 2 NCAA şampiyonluğu",
    ]
  ),

  createNbaStar(
    4109,
    "Luol Deng",
    ["deng", "luol deng"],
    ["Chicago Bulls", "Cleveland Cavaliers", "Miami Heat", "Los Angeles Lakers", "Minnesota Timberwolves"],
    ["Güney Sudanlı", "İngiliz"],
    ["Small Forward"],
    [
      "Tom Thibodeau'nun en güvendiği Two-way kanat",
      "Afrika basketbolunun gelişiminde dev figür",
      "Lakers'tan aldığı devasa kontrat ve yıllarca oynamadan maaş alması (Meme)",
      "Sessiz ve çalışkan profesyonel",
      "Uzun kolları ve köşeden hücum ribaundları",
    ]
  ),

  createNbaStar(
    4110,
    "Ben Wallace",
    ["ben wallace", "big ben", "wallace"],
    ["Washington Bullets", "Orlando Magic", "Detroit Pistons", "Chicago Bulls", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Center"],
    [
      "Big Ben lakabı ve Afro saç modeli",
      "Draft edilmeyip (Undrafted) efsane olan en büyük oyuncu",
      "4 kez Yılın Savunmacısı (DPOY)",
      "Boyalı alanın mutlak hakimi (Boyu pivot için kısa olmasına rağmen)",
      "2004 Pistons şampiyonluğunda Shaq'ı savunan isim",
    ]
  )
  
];