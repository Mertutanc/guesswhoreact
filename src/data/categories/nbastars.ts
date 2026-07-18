import type { GuessItem } from "../../types/game";

const createNbaStar = (
  id: number,
  name: string,
  answers: string[],
  teams: string[],
  nationality: string[],
  positions: string[],
  skills: string[],
  tags: string[] = []
): GuessItem => {
  return {
    id,
    mode: "nbaStar",
    modeLabel: "NBA Yıldızı",
    name,
    answers,
    tags,
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

const n = createNbaStar;

export const nbaStars: GuessItem[] = [
  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
      "Şutör ve savunmacı",
    ]
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),
n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:active"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
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
  ,
    ["nba:legend"]
  ),

  n(
    4111,
    "Bill Walton",
    ["bill walton", "walton"],
    ["Portland Trail Blazers", "San Diego Clippers", "Boston Celtics"],
    ["ABD'li"],
    ["Center"],
    ["1977'de Portland'ı ilk şampiyonluğuna taşıyan pivot", "Sakatlıklarla bölünen ama zirvesi çok yüksek kariyer", "Pasör uzun rolünün erken dönem örneklerinden", "Boston'da altıncı adam olarak ikinci yüzüğünü aldı", "Renkli yorumculuğu ve Grateful Dead sevgisiyle de bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4112,
    "George Gervin",
    ["george gervin", "gervin", "iceman"],
    ["San Antonio Spurs", "Chicago Bulls"],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    ["Iceman lakabını soğukkanlı skor üretiminden aldı", "Finger roll bitirişiyle NBA tarihine geçti", "ABA'den NBA'e taşınan San Antonio efsanesi", "Birden fazla kez sayı kralı oldu", "Pürüzsüz ve sakin hücum stiliyle hatırlanır"]
  ,
    ["nba:legend"]
  ),

  n(
    4113,
    "Rick Barry",
    ["rick barry", "barry"],
    ["San Francisco Warriors", "Oakland Oaks", "Washington Caps", "New York Nets", "Golden State Warriors", "Houston Rockets"],
    ["ABD'li"],
    ["Small Forward"],
    ["Alttan serbest atış tekniğiyle meşhurdur", "1975'te Warriors'ı şampiyonluğa taşıdı", "ABA ve NBA'de elit skorer olarak öne çıktı", "Keskin paslarıyla forvet pozisyonunda oyun kurardı", "Sert ve dobra karakteriyle tanınır"]
  ,
    ["nba:legend"]
  ),

  n(
    4114,
    "Moses Malone",
    ["moses malone", "moses"],
    ["Buffalo Braves", "Houston Rockets", "Philadelphia 76ers", "Washington Bullets", "Atlanta Hawks", "Milwaukee Bucks", "San Antonio Spurs"],
    ["ABD'li"],
    ["Center"],
    ["Fo-fo-fo sözüyle anılan 1983 Sixers şampiyonluğunun lideri", "Hücum ribaundunda tarihin en büyüklerinden", "Liseden direkt profesyonel lige geçen öncülerden", "Üç kez normal sezon MVP'si oldu", "Pota altında ikinci şans sayılarını silaha çevirdi"]
  ,
    ["nba:legend"]
  ),

  n(
    4115,
    "Robert Parish",
    ["robert parish", "parish", "the chief"],
    ["Golden State Warriors", "Boston Celtics", "Charlotte Hornets", "Chicago Bulls"],
    ["ABD'li"],
    ["Center"],
    ["The Chief lakabıyla bilinen Celtics uzunu", "NBA tarihinin en uzun soluklu kariyerlerinden birine sahip", "Bird ve McHale ile Celtics ön alanını tamamladı", "Yüksek çıkışlı orta mesafe şutuyla hatırlanır", "Sessiz ama istikrarlı liderlik profili vardı"]
  ,
    ["nba:legend"]
  ),

  n(
    4116,
    "James Worthy",
    ["james worthy", "worthy", "big game james"],
    ["Los Angeles Lakers"],
    ["ABD'li"],
    ["Small Forward"],
    ["Big Game James lakabını finallerdeki performanslarından aldı", "Showtime Lakers hızlı hücumlarının bitiricisiydi", "1988 Finalleri 7. maçındaki triple-double ile hatırlanır", "Spin move sonrası bitirişleri meşhurdur", "Magic Johnson'ın açık alandaki en güvenilir hedeflerindendi"]
  ,
    ["nba:legend"]
  ),

  n(
    4117,
    "Dennis Johnson",
    ["dennis johnson", "dj"],
    ["Seattle SuperSonics", "Phoenix Suns", "Boston Celtics"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    ["Seattle'a şampiyonluk getiren finaller MVP'si", "Boston'da Larry Bird'ün en güvendiği guardlardan oldu", "Elit dış savunmasıyla oyun yönünü değiştirirdi", "Kritik anlarda sakin karar veren bir oyun kurucuydu", "Magic Johnson'a karşı fiziksel savunmasıyla bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4118,
    "Adrian Dantley",
    ["adrian dantley", "dantley"],
    ["Buffalo Braves", "Indiana Pacers", "Los Angeles Lakers", "Utah Jazz", "Detroit Pistons", "Dallas Mavericks", "Milwaukee Bucks"],
    ["ABD'li"],
    ["Small Forward", "Shooting Guard"],
    ["Düşük postta kısa mesafeden skor üretme ustasıydı", "Faul çizgisine gitmeyi sistematik silaha çevirdi", "Utah Jazz tarihinde uzun süre ana skor opsiyonuydu", "Gösterişsiz ama aşırı verimli hücum profili vardı", "Ayak oyunlarıyla savunmacıyı sürekli dengesiz yakalardı"]
  ,
    ["nba:legend"]
  ),

  n(
    4119,
    "Bernard King",
    ["bernard king", "king"],
    ["New Jersey Nets", "Utah Jazz", "Golden State Warriors", "New York Knicks", "Washington Bullets"],
    ["ABD'li"],
    ["Small Forward"],
    ["Noel günü 60 sayı performansıyla hatırlanır", "Prime döneminde New York'un durdurulamaz skoreriydi", "Diz sakatlığından dönüp yeniden All-Star seviyesine çıktı", "Hızlı turnaround şutu ana silahıydı", "Kısa sürede alev alan seri skorer profiline sahipti"]
  ,
    ["nba:legend"]
  ),

  n(
    4120,
    "Alex English",
    ["alex english", "english"],
    ["Milwaukee Bucks", "Indiana Pacers", "Denver Nuggets", "Dallas Mavericks"],
    ["ABD'li"],
    ["Small Forward"],
    ["1980'lerin en üretken skor makinelerinden biriydi", "Denver Nuggets'ın hızlı tempo hücumunun yüzü oldu", "Yumuşak orta mesafe şutu ve zarif bitirişleriyle tanınır", "Gösterişsiz ama sürekli 25+ sayı tehdidi taşırdı", "Nuggets tarihinde en büyük isimlerden biri kabul edilir"]
  ,
    ["nba:legend"]
  ),

  n(
    4121,
    "Wes Unseld",
    ["wes unseld", "unseld"],
    ["Baltimore Bullets", "Capital Bullets", "Washington Bullets"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["Çaylak yılında hem MVP hem Yılın Çaylağı oldu", "Outlet paslarıyla hızlı hücum başlatma ustasıydı", "Fiziksel perdeleme ve ribaundla oyunu kontrol ederdi", "Washington Bullets'ın şampiyonluk döneminin lideriydi", "Kısa boylu pivot olmasına rağmen pota altında ezilmezdi"]
  ,
    ["nba:legend"]
  ),

  n(
    4122,
    "Walt Frazier",
    ["walt frazier", "frazier", "clyde"],
    ["New York Knicks", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Point Guard"],
    ["Clyde lakabıyla stil ve savunmayı birleştirdi", "Knicks'in iki şampiyonluğunda ana oyun kurucuydu", "1970 Finalleri 7. maç performansı efsane kabul edilir", "Top çalma ve baskılı savunmada döneminin zirvesindeydi", "Şık kıyafetleriyle saha dışı ikon haline geldi"]
  ,
    ["nba:legend"]
  ),

  n(
    4123,
    "Dave Cowens",
    ["dave cowens", "cowens"],
    ["Boston Celtics", "Milwaukee Bucks"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["Boyuna göre inanılmaz enerjiyle ribaund kovalar", "1970'ler Celtics şampiyonluklarının motoruydu", "MVP ödülü kazanmış mücadeleci uzunlardan biridir", "Tam saha pres ve agresif savunmayla fark yaratırdı", "Kendinden büyük pivotlara karşı temposuyla üstünlük kurardı"]
  ,
    ["nba:legend"]
  ),

  n(
    4124,
    "Pete Maravich",
    ["pete maravich", "pistol pete", "maravich"],
    ["Atlanta Hawks", "New Orleans Jazz", "Utah Jazz", "Boston Celtics"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    ["Pistol Pete lakabıyla sihirli pasların sembolüdür", "Üniversite sayı rekorları hâlâ efsane seviyededir", "Top hakimiyeti ve yaratıcı pasları döneminin çok ötesindeydi", "Geriye düşerek ve dengesiz pozisyonlardan skor üretirdi", "Modern gösterişli guard oyununa ilham verdi"]
  ,
    ["nba:legend"]
  ),

  n(
    4125,
    "Elvin Hayes",
    ["elvin hayes", "hayes", "the big e"],
    ["San Diego Rockets", "Houston Rockets", "Baltimore Bullets", "Capital Bullets", "Washington Bullets"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["The Big E lakabıyla fiziksel skor tehdidiydi", "Washington Bullets'ın şampiyonluk kadrosunun ana uzunuydu", "Turnaround jumper'ı güvenilir ana silahıydı", "Ribaund ve sayı üretiminde uzun yıllar istikrar sağladı", "Houston üniversitesindeki Alcindor düellosuyla da hatırlanır"]
  ,
    ["nba:legend"]
  ),

  n(
    4126,
    "Bob McAdoo",
    ["bob mcadoo", "mcadoo"],
    ["Buffalo Braves", "New York Knicks", "Boston Celtics", "Detroit Pistons", "New Jersey Nets", "Los Angeles Lakers", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["Şut menzili olan uzun profilinin erken örneklerinden", "Buffalo Braves döneminde sayı krallıkları yaşadı", "MVP seviyesinde hücumcu bir uzun olarak parladı", "Lakers'ta bench skoreri rolüyle yüzük kazandı", "Yüzü dönük hücumda döneminin çok özel uzunuydu"]
  ,
    ["nba:legend"]
  ),

  n(
    4127,
    "Billy Cunningham",
    ["billy cunningham", "cunningham", "kangaroo kid"],
    ["Philadelphia 76ers"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    ["Kangaroo Kid lakabını sıçrama yeteneğinden aldı", "Philadelphia 76ers şampiyonluk kültürünün önemli parçasıydı", "Ribaund alan atletik forvet profiliyle öne çıktı", "ABA ve NBA kariyerinde yüksek tempo oynadı", "Sonrasında koç olarak da Sixers'ı şampiyon yaptı"]
  ,
    ["nba:legend"]
  ),

  n(
    4128,
    "Hal Greer",
    ["hal greer", "greer"],
    ["Syracuse Nationals", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["Philadelphia 76ers tarihinin en istikrarlı guardlarından", "Serbest atışları zıplayarak kullanmasıyla bilinir", "Wilt Chamberlain'li şampiyon kadronun güvenilir skoreriydi", "Orta mesafe şutuyla düzenli sayı üretirdi", "Uzun yıllar All-Star seviyesini korudu"]
  ,
    ["nba:legend"]
  ),

  n(
    4129,
    "Willis Reed",
    ["willis reed", "reed"],
    ["New York Knicks"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["1970 Finalleri'nde sakat sakat sahaya çıkışı efsanedir", "Knicks'in iki şampiyonluğunda lider figürdü", "Fiziksel savunma ve orta mesafe şutunu birleştirirdi", "Kaptanlığıyla takımın psikolojik gücüydü", "Madison Square Garden tarihinin en ikonik anlarından birine sahip"]
  ,
    ["nba:legend"]
  ),

  n(
    4130,
    "Nate Thurmond",
    ["nate thurmond", "thurmond"],
    ["San Francisco Warriors", "Golden State Warriors", "Chicago Bulls", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Center"],
    ["Wilt ve Kareem gibi devlere karşı savunmasıyla saygı gördü", "NBA tarihindeki ilk resmi quadruple-double'lardan birini yaptı", "Pota altında sert temas ve ribaundla öne çıktı", "Blok tehdidiyle boyalı alanı kapatırdı", "Warriors tarihinde unutulmaz savunmacı uzunlardan biridir"]
  ,
    ["nba:legend"]
  ),

  n(
    4131,
    "Bob Pettit",
    ["bob pettit", "pettit"],
    ["Milwaukee Hawks", "St. Louis Hawks"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["NBA'in ilk büyük güç forvet süperstarlarından", "St. Louis Hawks'ı şampiyonluğa taşıdı", "Finallerde Celtics hanedanına karşı tarihi performans verdi", "Ribaund ve skor üretimini aynı anda taşıdı", "İki kez MVP seçilen erken dönem efsanelerinden"]
  ,
    ["nba:legend"]
  ),

  n(
    4132,
    "Bob Cousy",
    ["bob cousy", "cousy", "houdini of the hardwood"],
    ["Boston Celtics", "Cincinnati Royals"],
    ["ABD'li"],
    ["Point Guard"],
    ["Houdini of the Hardwood lakabıyla yaratıcı paslarıyla bilinir", "Celtics hanedanının ilk oyun kurucu beyni oldu", "Dripling ve hızlı hücumu şova dönüştüren öncülerdendir", "Birden fazla asist krallığı yaşadı", "No-look ve arkadan paslarla oyunun estetiğini değiştirdi"]
  ,
    ["nba:legend"]
  ),

  n(
    4133,
    "George Mikan",
    ["george mikan", "mikan"],
    ["Chicago American Gears", "Minneapolis Lakers"],
    ["ABD'li"],
    ["Center"],
    ["NBA'in ilk gerçek süperstar pivotu kabul edilir", "Minneapolis Lakers hanedanının temel taşıydı", "Pota altı dominasyonu nedeniyle kural değişikliklerine yol açtı", "Mikan Drill antrenmanına adını verdi", "Gözlüklü uzun görüntüsüyle erken dönem ikonlarından biridir"]
  ,
    ["nba:legend"]
  ),

  n(
    4134,
    "Sam Jones",
    ["sam jones", "jones"],
    ["Boston Celtics"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["Kritik maçlarda soğukkanlı şutlarıyla bilinir", "Celtics hanedanında Bill Russell sonrası en çok yüzük alanlardan", "Bank shot kullanımı çok güvenilirdi", "Playofflarda seviye atlayan skorer profiline sahipti", "Final anlarında topun gittiği isimlerden biriydi"]
  ,
    ["nba:legend"]
  ),

  n(
    4135,
    "Dolph Schayes",
    ["dolph schayes", "schayes"],
    ["Syracuse Nationals", "Philadelphia 76ers"],
    ["ABD'li"],
    ["Power Forward"],
    ["Syracuse Nationals döneminin franchise yüzüydü", "Dış şut tehdidi olan erken dönem uzunlarındandı", "Serbest atış çizgisinden çok yüksek yüzdeyle oynadı", "Uzun kariyeri boyunca istikrarlı sayı ve ribaund üretti", "Sert faullerden sonra bile sahada kalmasıyla tanınır"]
  ,
    ["nba:legend"]
  ),

  n(
    4136,
    "Bill Sharman",
    ["bill sharman", "sharman"],
    ["Washington Capitols", "Boston Celtics"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["Boston Celtics'in erken hanedan döneminde elit şutördü", "Serbest atış yüzdesinde döneminin standartlarını yükseltti", "Hızlı hücumda Cousy'nin bitirici partneriydi", "Disiplinli şut mekaniğiyle antrenman kültürüne örnek oldu", "Koç olarak da şampiyonluk kazanan nadir isimlerden"]
  ,
    ["nba:legend"]
  ),

  n(
    4137,
    "Lenny Wilkens",
    ["lenny wilkens", "wilkens"],
    ["St. Louis Hawks", "Seattle SuperSonics", "Cleveland Cavaliers", "Portland Trail Blazers"],
    ["ABD'li"],
    ["Point Guard"],
    ["Oyuncu ve koç olarak Hall of Fame'e giren nadir isimlerden", "Solak oyun kurucu olarak tempoyu sakin yönetirdi", "Seattle basketbol kültürünün önemli figürlerindendir", "Takım arkadaşlarını doğru yerde bulmasıyla bilinir", "Kariyer sonrası koçluk rekorlarıyla da öne çıktı"]
  ,
    ["nba:legend"]
  ),

  n(
    4138,
    "Jerry Lucas",
    ["jerry lucas", "lucas"],
    ["Cincinnati Royals", "San Francisco Warriors", "New York Knicks"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["Olağanüstü ribaund sezgisiyle bilinir", "New York Knicks'in 1973 şampiyonluğunda önemli rol aldı", "Dış şut tehdidi olan zeki bir uzun profili çizdi", "Hafızası ve akademik zekasıyla da meşhurdur", "Oscar Robertson ile Royals döneminde güçlü ikili kurdu"]
  ,
    ["nba:legend"]
  ),

  n(
    4139,
    "Chris Mullin",
    ["chris mullin", "mullin"],
    ["Golden State Warriors", "Indiana Pacers"],
    ["ABD'li"],
    ["Small Forward"],
    ["Run TMC döneminin solak skorer kanadıydı", "Saf şut mekaniği ve oyun zekasıyla öne çıktı", "Dream Team kadrosunda yer aldı", "Golden State Warriors kültürünün önemli efsanelerinden", "Temposu düşük görünse de doğru açıları bulurdu"]
  ,
    ["nba:legend"]
  ),

  n(
    4140,
    "Mitch Richmond",
    ["mitch richmond", "richmond"],
    ["Golden State Warriors", "Sacramento Kings", "Washington Wizards", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["Run TMC üçlüsünün güçlü skorer guardıydı", "Sacramento Kings'in 90'lardaki franchise yüzü oldu", "Fiziksel temasla skor üretebilen elit şutördü", "Michael Jordan'ın saygı duyduğu savunması zor guardlardan", "Kariyer sonunda Lakers ile yüzük aldı"]
  ,
    ["nba:legend"]
  ),

  n(
    4141,
    "Kevin Love",
    ["kevin love", "love"],
    ["Minnesota Timberwolves", "Cleveland Cavaliers", "Miami Heat"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["Minnesota döneminde 30 sayı 30 ribaund maçıyla hatırlanır", "LeBron'lu Cavaliers şampiyonluğunda kilit üçüncü yıldızdı", "Outlet pasları ve ribaund sezgisi çok güçlüdür", "Modern stretch four profilinin önemli isimlerinden", "2016 Finalleri son pozisyondaki Curry savunmasıyla hatırlanır"]
  ,
    ["nba:active"]
  ),

  n(
    4142,
    "LaMarcus Aldridge",
    ["lamarcus aldridge", "aldridge"],
    ["Portland Trail Blazers", "San Antonio Spurs", "Brooklyn Nets"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["Sol bloktan turnaround orta mesafe şutuyla tanındı", "Portland'da Brandon Roy sonrası takımın yüzü oldu", "Spurs'te Duncan sonrası ön alan yükünü taşıdı", "Sakin ve ritimli post oyunu vardı", "Uzun yıllar All-Star seviyesinde istikrarlı skor üretti"]
  ,
    ["nba:legend"]
  ),

  n(
    4143,
    "Detlef Schrempf",
    ["detlef schrempf", "schrempf"],
    ["Dallas Mavericks", "Indiana Pacers", "Seattle SuperSonics", "Portland Trail Blazers"],
    ["Alman"],
    ["Small Forward", "Power Forward"],
    ["NBA'de Avrupa çıkışlı çok yönlü forvetlerin öncülerinden", "Seattle'ın 90'lar final kadrosunda ana parçalardan biri oldu", "Pas, şut ve ribaundu aynı pakette sunardı", "İki kez Yılın Altıncı Adamı seçildi", "Alman basketbolunun NBA'deki erken temsilcilerindendir"]
  ,
    ["nba:legend"]
  ),

  n(
    4144,
    "Andrei Kirilenko",
    ["andrei kirilenko", "kirilenko", "ak47"],
    ["Utah Jazz", "Minnesota Timberwolves", "Brooklyn Nets"],
    ["Rus"],
    ["Small Forward", "Power Forward"],
    ["AK-47 lakabıyla blok, top çalma ve yardım savunmasında meşhurdur", "Beş istatistik kategorisinde aynı anda etkili olurdu", "Utah Jazz savunmasının joker parçasıydı", "Zayıf forvetten uzun savunmasına kadar eşleşme alırdı", "Bir maçta 5x5 istatistik yapabilen nadir oyunculardandır"]
  ,
    ["nba:legend"]
  ),

  n(
    4145,
    "Mehmet Okur",
    ["mehmet okur", "memo", "okur"],
    ["Detroit Pistons", "Utah Jazz", "New Jersey Nets"],
    ["Türk"],
    ["Center", "Power Forward"],
    ["Memo lakabıyla clutch üçlükleriyle hatırlanır", "NBA All-Star seçilen ilk Türk oyuncudur", "Utah Jazz'da Deron Williams ve Carlos Boozer'la güçlü çekirdek kurdu", "Detroit Pistons ile şampiyonluk yüzüğü aldı", "Uzun pozisyonunda dış şut tehdidiyle alan açardı"]
  ,
    ["nba:legend"]
  ),

  n(
    4146,
    "Hidayet Türkoğlu",
    ["hidayet türkoğlu", "hidayet turkoglu", "hedo", "turkoglu"],
    ["Sacramento Kings", "San Antonio Spurs", "Orlando Magic", "Toronto Raptors", "Phoenix Suns", "Los Angeles Clippers"],
    ["Türk"],
    ["Small Forward", "Point Forward"],
    ["Hedo lakabıyla Orlando'nun 2009 final yürüyüşünde oyun kurdu", "Uzun boylu point forward rolünü çok iyi oynadı", "Kritik anlarda topu eline alan yaratıcı forvetti", "En Çok Gelişme Gösteren Oyuncu ödülünü kazandı", "Dwight Howard'lı Magic'in hücum aklından biriydi"]
  ,
    ["nba:legend"]
  ),

  n(
    4147,
    "Goran Dragić",
    ["goran dragic", "dragic", "the dragon"],
    ["Phoenix Suns", "Houston Rockets", "Miami Heat", "Toronto Raptors", "Brooklyn Nets", "Chicago Bulls", "Milwaukee Bucks"],
    ["Sloven"],
    ["Point Guard"],
    ["The Dragon lakabıyla tempolu penetreleriyle bilinir", "2017 EuroBasket'te Slovenya'yı şampiyonluğa taşıdı", "Miami Heat'in 2020 final yolculuğunda ana skorerlerden biriydi", "Solak bitirişleri ve geçiş hücumuyla fark yaratırdı", "Steve Nash sonrası Phoenix'te parlayan guardlardan oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4148,
    "Bojan Bogdanović",
    ["bojan bogdanovic", "bojan"],
    ["Brooklyn Nets", "Washington Wizards", "Indiana Pacers", "Utah Jazz", "Detroit Pistons", "New York Knicks"],
    ["Hırvat"],
    ["Small Forward", "Power Forward"],
    ["Hırvat milli takımının uzun yıllar ana skor opsiyonuydu", "Set hücumunda perdeden çıkıp hızlı şut kaldırmasıyla bilinir", "Utah Jazz döneminde spacing sağlayan güvenilir forvetti", "Güçlü vücuduyla mismatch üzerinden skor bulurdu", "NBA'e Avrupa tecrübesiyle hazır gelen keskin skorerlerden"]
  ,
    ["nba:active"]
  ),

  n(
    4149,
    "Bogdan Bogdanović",
    ["bogdan bogdanovic", "bogdan"],
    ["Sacramento Kings", "Atlanta Hawks"],
    ["Sırp"],
    ["Shooting Guard", "Small Forward"],
    ["Sırbistan milli takımının kritik an skoreri olarak bilinir", "Perde çıkışı üçlük ve ikili oyun kararlarında etkilidir", "Atlanta'da bench ve ilk beş arasında skor akışı sağladı", "EuroLeague tecrübesini NBA'e taşıyan yaratıcı guardlardan", "Bogdan-Bojan karışıklığına rağmen ayrı bir Sırp skoreridir"]
  ,
    ["nba:active"]
  ),

  n(
    4150,
    "Nikola Vučević",
    ["nikola vucevic", "vucevic", "vuc"],
    ["Philadelphia 76ers", "Orlando Magic", "Chicago Bulls"],
    ["Karadağlı"],
    ["Center"],
    ["Orlando Magic döneminde All-Star seviyesine çıktı", "Post oyunu, ribaund ve üçlük tehdidini birleştirir", "Karadağ basketbolunun NBA'deki en bilinen ismidir", "Pick-and-pop üzerinden uzun savunmaları dışarı çeker", "Sessiz ama düzenli double-double üretimiyle tanınır"]
  ,
    ["nba:active"]
  ),

  n(
    4151,
    "Danilo Gallinari",
    ["danilo gallinari", "gallinari", "gallo"],
    ["New York Knicks", "Denver Nuggets", "Los Angeles Clippers", "Oklahoma City Thunder", "Atlanta Hawks", "Washington Wizards", "Detroit Pistons", "Milwaukee Bucks"],
    ["İtalyan"],
    ["Small Forward", "Power Forward"],
    ["Gallo lakabıyla uzun boylu skorer forvet profilinde öne çıktı", "Sakatlıklarına rağmen yıllarca elit dış şut tehdidi sundu", "Denver ve Clippers dönemlerinde spacing sağlayan ana parçalardandı", "Faul çizgisine gitmeyi bilen akıllı bir hücumcuydu", "İtalya basketbolunun NBA'deki en üretken isimlerinden"]
  ,
    ["nba:active"]
  ),

  n(
    4152,
    "Andrea Bargnani",
    ["andrea bargnani", "bargnani", "il mago"],
    ["Toronto Raptors", "New York Knicks", "Brooklyn Nets"],
    ["İtalyan"],
    ["Center", "Power Forward"],
    ["İlk sıradan draft edilen ilk Avrupalı oyunculardan biridir", "Il Mago lakabıyla dış şut atan uzun olarak tanındı", "Toronto'da Dirk tarzı uzun skorer beklentisi yarattı", "Yüzü dönük hücumda üçlük ve orta mesafe tehdidi vardı", "Savunma ve ribaund eksikleri kariyerinin ana tartışması oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4153,
    "Marco Belinelli",
    ["marco belinelli", "belinelli"],
    ["Golden State Warriors", "Toronto Raptors", "New Orleans Hornets", "Chicago Bulls", "San Antonio Spurs", "Sacramento Kings", "Charlotte Hornets", "Atlanta Hawks", "Philadelphia 76ers"],
    ["İtalyan"],
    ["Shooting Guard"],
    ["San Antonio Spurs ile NBA şampiyonluğu kazandı", "Hareket halinde denge bozularak attığı şutlarla bilinir", "Üç Sayı Yarışması kazanan ilk İtalyan oyuncudur", "Perde çıkışı ve köşe üçlüklerinde güvenilir rol oyuncusuydu", "İtalya milli takımının uzun yıllar skorerlerinden oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4154,
    "Rudy Fernández",
    ["rudy fernandez", "fernandez"],
    ["Portland Trail Blazers", "Denver Nuggets"],
    ["İspanyol"],
    ["Shooting Guard", "Small Forward"],
    ["İspanya'nın altın jenerasyonunda enerjik kanat rolü oynadı", "Portland'da spektaküler alley-oop ve hızlı üçlüklerle öne çıktı", "Real Madrid kariyeriyle Avrupa basketbolunun büyük ikonlarından oldu", "Savunma sertliği ve sahne enerjisiyle tanındı", "NBA kariyeri kısa ama akılda kalıcı bir Avrupa yıldızıydı"]
  ,
    ["nba:legend"]
  ),

  n(
    4155,
    "José Calderón",
    ["jose calderon", "calderon", "josé calderón"],
    ["Toronto Raptors", "Detroit Pistons", "Dallas Mavericks", "New York Knicks", "Los Angeles Lakers", "Atlanta Hawks", "Cleveland Cavaliers"],
    ["İspanyol"],
    ["Point Guard"],
    ["Toronto Raptors tarihinde en güvenilir oyun kuruculardan oldu", "Bir sezon serbest atışta neredeyse kusursuz yüzde yakaladı", "Top kaybı az, karar kalitesi yüksek bir guarddı", "İspanya milli takımının oyun aklını taşıyan isimlerdendi", "NBA'de uzun yıllar sakin tempo yönetimiyle değer gördü"]
  ,
    ["nba:legend"]
  ),

  n(
    4156,
    "Nicolas Batum",
    ["nicolas batum", "batum"],
    ["Portland Trail Blazers", "Charlotte Hornets", "Los Angeles Clippers", "Philadelphia 76ers"],
    ["Fransız"],
    ["Small Forward", "Power Forward"],
    ["Uzun kollu savunmacı ve pasör kanat profiliyle bilinir", "Fransa milli takımında yıllarca kilit rol oynadı", "Clippers döneminde düşük kullanımda yüksek etki yarattı", "Birden fazla pozisyonu savunan akıllı rol oyuncusudur", "Blokla bitirdiği kritik milli maç pozisyonlarıyla hatırlanır"]
  ,
    ["nba:active"]
  ),

  n(
    4157,
    "Boris Diaw",
    ["boris diaw", "diaw"],
    ["Atlanta Hawks", "Phoenix Suns", "Charlotte Bobcats", "San Antonio Spurs", "Utah Jazz"],
    ["Fransız"],
    ["Power Forward", "Center", "Point Forward"],
    ["San Antonio'nun 2014 şampiyonluğunda pasör uzun olarak parladı", "Phoenix'te En Çok Gelişme Gösteren Oyuncu ödülünü aldı", "Kilosuna rağmen oyun görüşü ve sakinliğiyle fark yaratırdı", "Fransa milli takımının en zeki oyuncularından kabul edilir", "Kahve sevgisi ve rahat karakteriyle de tanınır"]
  ,
    ["nba:legend"]
  ),

  n(
    4158,
    "Serge Ibaka",
    ["serge ibaka", "ibaka", "air congo"],
    ["Oklahoma City Thunder", "Orlando Magic", "Toronto Raptors", "Los Angeles Clippers", "Milwaukee Bucks"],
    ["Kongolu", "İspanyol"],
    ["Power Forward", "Center"],
    ["Air Congo lakabıyla blok tehdidiyle parladı", "Oklahoma City genç çekirdeğinin savunma sigortasıydı", "Toronto Raptors ile 2019 şampiyonluğu kazandı", "Kariyerinin ilerleyen döneminde üçlük tehdidi ekledi", "How Hungry Are You programıyla saha dışında da popüler oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4159,
    "Jusuf Nurkić",
    ["jusuf nurkic", "nurkic", "bosnian beast"],
    ["Denver Nuggets", "Portland Trail Blazers", "Phoenix Suns"],
    ["Bosnalı"],
    ["Center"],
    ["Bosnian Beast lakabıyla fiziksel pota altı oyunu oynar", "Portland'da Lillard'ın perde ve pas bağlantısı oldu", "Ribaund, perde ve kısa paslarla hücumu destekler", "Ağır sakatlıktan dönmesiyle bilinir", "Balkan basketbolunun NBA'deki güçlü uzun temsilcilerindendir"]
  ,
    ["nba:active"]
  ),

  n(
    4160,
    "Jonas Valančiūnas",
    ["jonas valanciunas", "valanciunas", "jonas"],
    ["Toronto Raptors", "Memphis Grizzlies", "New Orleans Pelicans"],
    ["Litvanyalı"],
    ["Center"],
    ["Litvanya uzun geleneğinin modern NBA temsilcisidir", "Pota altında ribaund ve bitiricilikte çok güvenilir", "Kariyeri boyunca double-double tehdidi taşıdı", "Memphis'te genç çekirdeğe sertlik ve deneyim kattı", "Sonradan üçlük çizgisine kadar şut menzili geliştirdi"]
  ,
    ["nba:active"]
  ),

  n(
    4161,
    "Brook Lopez",
    ["brook lopez", "lopez", "splash mountain"],
    ["New Jersey Nets", "Brooklyn Nets", "Los Angeles Lakers", "Milwaukee Bucks"],
    ["ABD'li"],
    ["Center"],
    ["Splash Mountain lakabıyla üçlük atan pivot kimliği kazandı", "Brooklyn Nets tarihinin en skorer isimlerinden biridir", "Milwaukee'de çember koruyucu role dönüşerek şampiyonluk kazandı", "Kariyerinin ortasında oyun stilini tamamen değiştirdi", "Disney sevgisi ve ikiz kardeşi Robin ile bilinir"]
  ,
    ["nba:active"]
  ),

  n(
    4162,
    "Steven Adams",
    ["steven adams", "adams"],
    ["Oklahoma City Thunder", "New Orleans Pelicans", "Memphis Grizzlies", "Houston Rockets"],
    ["Yeni Zelandalı"],
    ["Center"],
    ["NBA'in en sert perde yapan uzunlarından biridir", "Hücum ribaundu ve box-out işçiliğiyle takımını rahatlatır", "Russell Westbrook triple-double döneminin görünmeyen destekçisiydi", "Yeni Zelandalı rahat tavrı ve mizahıyla sevilir", "Fiziksel gücüyle soyunma odası efsanelerine konu olur"]
  ,
    ["nba:active"]
  ),

  n(
    4163,
    "Mike Conley",
    ["mike conley", "conley"],
    ["Memphis Grizzlies", "Utah Jazz", "Minnesota Timberwolves"],
    ["ABD'li"],
    ["Point Guard"],
    ["Grit and Grind Memphis döneminin oyun aklıydı", "Yıllarca en centilmen ve düşük hata yapan guardlardan biri oldu", "Solak floater'ı ve pick-and-roll kararlarıyla bilinir", "Uzun süre All-Star seçilemeyen en iyi oyunculardan sayıldı", "Savunma disiplini ve liderliğiyle genç takımları toparlar"]
  ,
    ["nba:active"]
  ),

  n(
    4164,
    "Kemba Walker",
    ["kemba walker", "kemba"],
    ["Charlotte Bobcats", "Charlotte Hornets", "Boston Celtics", "New York Knicks", "Dallas Mavericks"],
    ["ABD'li"],
    ["Point Guard"],
    ["UConn'u 2011 NCAA şampiyonluğuna taşıyan efsane turnuva koşusuyla bilinir", "Step-back ve crossover ile kendi şutunu yaratırdı", "Charlotte tarihinin en sevilen skoreri oldu", "Küçük boyuna rağmen büyük maç cesaretiyle hatırlanır", "Madison Square Garden'daki üniversite performansları ikonikleşti"]
  ,
    ["nba:legend"]
  ),

  n(
    4165,
    "Gordon Hayward",
    ["gordon hayward", "hayward"],
    ["Utah Jazz", "Boston Celtics", "Charlotte Hornets", "Oklahoma City Thunder"],
    ["ABD'li"],
    ["Small Forward"],
    ["Butler ile NCAA finalinde neredeyse yarı sahadan şampiyonluk şutu atacaktı", "Utah Jazz'da All-Star seviyesine yükseldi", "Çok yönlü şut, pas ve karar verme paketi sundu", "Boston kariyeri ağır açılış maçı sakatlığıyla değişti", "E-spor ve oyun kültürüne ilgisiyle de bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4166,
    "Victor Oladipo",
    ["victor oladipo", "oladipo"],
    ["Orlando Magic", "Oklahoma City Thunder", "Indiana Pacers", "Miami Heat", "Houston Rockets"],
    ["ABD'li"],
    ["Shooting Guard", "Point Guard"],
    ["Indiana Pacers'ta All-NBA seviyesine sıçradı", "Savunma enerjisi ve patlayıcı penetreleriyle öne çıktı", "LeBron'a karşı 2018 playoff serisiyle yıldızlaştı", "The Masked Singer gibi sahne performanslarıyla da tanındı", "Ağır sakatlıklar kariyer ivmesini kırdı"]
  ,
    ["nba:legend"]
  ),

  n(
    4167,
    "DeMarcus Cousins",
    ["demarcus cousins", "cousins", "boogie"],
    ["Sacramento Kings", "New Orleans Pelicans", "Golden State Warriors", "Houston Rockets", "Los Angeles Clippers", "Milwaukee Bucks", "Denver Nuggets"],
    ["ABD'li"],
    ["Center"],
    ["Boogie lakabıyla yetenekli ama ateşli karakterli pivot olarak bilinir", "Sacramento'da oyun kurabilen skorer uzun profili çizdi", "Anthony Davis ile Pelicans'ta kısa süreli dev ikili kurdu", "Aşil sakatlığı prime dönemini ciddi etkiledi", "Post, pas ve üçlüğü birleştiren modern uzunlardan biriydi"]
  ,
    ["nba:legend"]
  ),

  n(
    4168,
    "Rudy Gay",
    ["rudy gay", "gay"],
    ["Memphis Grizzlies", "Toronto Raptors", "Sacramento Kings", "San Antonio Spurs", "Utah Jazz"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    ["Uzun yıllar birebir skor üretebilen atletik kanat olarak oynadı", "Memphis ve Sacramento dönemlerinde ana hücum opsiyonu oldu", "Aşil sakatlığından dönüp Spurs sisteminde rolünü değiştirdi", "Orta mesafe pull-up şutlarıyla bilinir", "UConn çıkışlı NBA kanat prototiplerinden biridir"]
  ,
    ["nba:legend"]
  ),

  n(
    4169,
    "Andre Drummond",
    ["andre drummond", "drummond"],
    ["Detroit Pistons", "Cleveland Cavaliers", "Los Angeles Lakers", "Philadelphia 76ers", "Brooklyn Nets", "Chicago Bulls"],
    ["ABD'li"],
    ["Center"],
    ["Modern dönemin en güçlü ribaund makinelerinden biridir", "Detroit'te sürekli double-double ortalamaları yakaladı", "Hücum ribaundlarıyla ekstra pozisyon yaratır", "Serbest atış sorunları kariyerinin ana zayıflığı oldu", "Kısa sürelerde bile ribaund istatistiğini hızla doldurur"]
  ,
    ["nba:active"]
  ),

  n(
    4170,
    "Zach Randolph",
    ["zach randolph", "randolph", "z-bo"],
    ["Portland Trail Blazers", "New York Knicks", "Los Angeles Clippers", "Memphis Grizzlies", "Sacramento Kings"],
    ["ABD'li"],
    ["Power Forward"],
    ["Z-Bo lakabıyla Memphis Grit and Grind kültürünün yüzlerinden oldu", "Alçak postta solak bitirişleriyle savunması çok zordu", "2011 playofflarında Spurs'e karşı sekizinci sıradan sürprizin lideriydi", "Fiziksel temas ve ribaundla maçı çamura çekerdi", "Memphis'te Tony Allen ve Marc Gasol ile sert kimlik kurdu"]
  ,
    ["nba:legend"]
  ),

  n(
    4171,
    "Joe Johnson",
    ["joe johnson", "iso joe", "johnson"],
    ["Boston Celtics", "Phoenix Suns", "Atlanta Hawks", "Brooklyn Nets", "Miami Heat", "Utah Jazz", "Houston Rockets"],
    ["ABD'li"],
    ["Shooting Guard", "Small Forward"],
    ["Iso Joe lakabıyla birebir izolasyon skoreri olarak tanındı", "Atlanta Hawks'ı yıllarca playoff seviyesinde tuttu", "Son saniye şutlarında sakinliğiyle bilinir", "BIG3 ligindeki dominasyonuyla ikinci kez popüler oldu", "Fiziksel guard-forvet gövdesiyle mismatch yaratırdı"]
  ,
    ["nba:legend"]
  ),

  n(
    4172,
    "Baron Davis",
    ["baron davis", "bdiddy", "davis"],
    ["Charlotte Hornets", "New Orleans Hornets", "Golden State Warriors", "Los Angeles Clippers", "Cleveland Cavaliers", "New York Knicks"],
    ["ABD'li"],
    ["Point Guard"],
    ["We Believe Warriors'ın 2007 playoff mucizesinin lideriydi", "Utah'a karşı Andrei Kirilenko üzerinden vurduğu smaç ikonikleşti", "Güçlü fiziğiyle guard pozisyonunda potaya patlayarak giderdi", "Sokak basketbolu havasını NBA'e taşıyan yaratıcı oyun kurucuydu", "Sakatlıklar istikrarını sınırlasa da prime dönemi çok yüksekti"]
  ,
    ["nba:legend"]
  ),

  n(
    4173,
    "Gilbert Arenas",
    ["gilbert arenas", "arenas", "agent zero"],
    ["Golden State Warriors", "Washington Wizards", "Orlando Magic", "Memphis Grizzlies"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    ["Agent Zero lakabıyla Washington'ın en eğlenceli skorerlerinden oldu", "Logo civarından erken dönem derin üçlük cesareti gösterirdi", "Kobe'ye karşı 60 sayı attığı maçla hatırlanır", "Soyunma odası silah krizi kariyerini gölgeledi", "Blogları ve sıra dışı kişiliğiyle 2000'ler internet yıldızlarındandı"]
  ,
    ["nba:legend"]
  ),

  n(
    4174,
    "Brandon Roy",
    ["brandon roy", "roy", "b-roy"],
    ["Portland Trail Blazers", "Minnesota Timberwolves"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["B-Roy lakabıyla kısa prime döneminde elit clutch skorerdi", "Diz sakatlıkları kariyerini çok erken bitirdi", "Dallas'a karşı playoff geri dönüşüyle Portland hafızasına kazındı", "Orta mesafe ve tempo kontrolüyle Brandon Roy oyunu çok olgundu", "Kobe Bryant'ın saygı duyduğu genç guardlardan biriydi"]
  ,
    ["nba:legend"]
  ),

  n(
    4175,
    "Monta Ellis",
    ["monta ellis", "monta"],
    ["Golden State Warriors", "Milwaukee Bucks", "Dallas Mavericks", "Indiana Pacers"],
    ["ABD'li"],
    ["Shooting Guard", "Point Guard"],
    ["Hızlı ilk adımı ve floater bitirişleriyle bilinir", "Golden State'te genç yaşta 20+ sayı ortalamalarına çıktı", "Monta have it all sözü NBA mizahına karıştı", "Sürekli potaya baskı yapan ritim skoreri profili vardı", "Dallas'ta Dirk sonrası dönemin ana hücum motorlarından oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4176,
    "Tyreke Evans",
    ["tyreke evans", "evans"],
    ["Sacramento Kings", "New Orleans Pelicans", "Memphis Grizzlies", "Indiana Pacers"],
    ["ABD'li"],
    ["Shooting Guard", "Point Guard", "Small Forward"],
    ["Çaylak yılında 20-5-5 ortalamalarıyla büyük beklenti yarattı", "Güçlü gövdesiyle guard savunmalarını potaya sürerdi", "Memphis'te kariyerini yeniden canlandıran skorer sezon geçirdi", "Pozisyonu net olmayan çok yönlü top yönlendirici profildi", "Saha dışı ceza süreci kariyer sürekliliğini bozdu"]
  ,
    ["nba:legend"]
  ),

  n(
    4177,
    "Lamar Odom",
    ["lamar odom", "odom"],
    ["Los Angeles Clippers", "Miami Heat", "Los Angeles Lakers", "Dallas Mavericks"],
    ["ABD'li"],
    ["Power Forward", "Small Forward"],
    ["Lakers'ın 2009-2010 şampiyonluklarında çok yönlü altıncı adamdı", "Uzun boyuna rağmen top sürebilen ve oyun kurabilen forvetti", "Solak pasları ve ribaund sonrası hızlı hücum başlatmasıyla bilinir", "Kobe-Gasol-Bynum uzun rotasyonunu bağlayan yapıştırıcıydı", "Saha dışı zorluklarına rağmen yetenek paketi çok özel kabul edilir"]
  ,
    ["nba:legend"]
  ),

  n(
    4178,
    "Andrew Bynum",
    ["andrew bynum", "bynum"],
    ["Los Angeles Lakers", "Cleveland Cavaliers", "Indiana Pacers"],
    ["ABD'li"],
    ["Center"],
    ["Lakers'ın arka arkaya şampiyonluklarında genç pivot olarak rol aldı", "Prime döneminde ligin en yetenekli alçak post uzunlarından sayıldı", "Diz sakatlıkları kariyerini çok erken düşürdü", "Phil Jackson sisteminde boyalı alan tehdidi yarattı", "Olgunlaşmamış tavırları ve saç stilleriyle de gündem oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4179,
    "Elton Brand",
    ["elton brand", "brand"],
    ["Chicago Bulls", "Los Angeles Clippers", "Philadelphia 76ers", "Dallas Mavericks", "Atlanta Hawks"],
    ["ABD'li"],
    ["Power Forward"],
    ["Chicago'da Yılın Çaylağı ödülünü paylaştı", "Clippers'ın 2006 playoff koşusunun ana yıldızıydı", "Kısa kollar değil, uzun kollarıyla blok ve ribaundda fark yaratırdı", "Güçlü post oyunu ve orta mesafe şutunu birleştirirdi", "Duke çıkışlı profesyonel ve sağlam karakterli forvet olarak bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4180,
    "Carlos Boozer",
    ["carlos boozer", "boozer"],
    ["Cleveland Cavaliers", "Utah Jazz", "Chicago Bulls", "Los Angeles Lakers"],
    ["ABD'li"],
    ["Power Forward"],
    ["Utah Jazz'da Deron Williams ile pick-and-roll ikilisi kurdu", "Solak orta mesafe şutu ve post bitirişleriyle tanındı", "Chicago'da Derrick Rose döneminin ana uzun skor opsiyonuydu", "Boyalı saç boyası olayıyla internet mizahına konu oldu", "Fiziksel ribaund katkısı ve güçlü sesiyle hatırlanır"]
  ,
    ["nba:legend"]
  ),

  n(
    4181,
    "Josh Smith",
    ["josh smith", "j-smoove", "smith"],
    ["Atlanta Hawks", "Detroit Pistons", "Houston Rockets", "Los Angeles Clippers", "New Orleans Pelicans"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    ["J-Smoove lakabıyla atletik blok ve smaçlarıyla tanındı", "Atlanta Hawks döneminde highlight savunma aksiyonları üretirdi", "Şut seçimi tartışmalı olsa da fiziksel yeteneği çok yüksekti", "LeBron tarzı point-forward beklentisi yaratmış erken dönem kanatlardandı", "Houston playofflarında Clippers'a karşı geri dönüşün parçası oldu"]
  ,
    ["nba:legend"]
  ),

  n(
    4182,
    "David West",
    ["david west", "west"],
    ["New Orleans Hornets", "Indiana Pacers", "San Antonio Spurs", "Golden State Warriors"],
    ["ABD'li"],
    ["Power Forward"],
    ["Chris Paul'lü Hornets döneminde güvenilir pick-and-pop bitiricisiydi", "Orta mesafe şutu ve sertliğiyle Pacers'ın kimliğine uydu", "Kariyerinin sonunda Warriors ile yüzükler kazandı", "Saha içinde sessiz ama fiziksel liderlik sağlardı", "Xavier çıkışlı disiplinli forvet profiliyle bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4183,
    "Tyson Chandler",
    ["tyson chandler", "chandler"],
    ["Chicago Bulls", "New Orleans Hornets", "Charlotte Bobcats", "Dallas Mavericks", "New York Knicks", "Phoenix Suns", "Los Angeles Lakers", "Houston Rockets"],
    ["ABD'li"],
    ["Center"],
    ["2011 Dallas şampiyonluğunun savunma omurgasıydı", "Lob bitiriciliği ve çember korumasıyla değer yarattı", "New York Knicks'te Yılın Savunmacısı oldu", "Chris Paul ile New Orleans'ta alley-oop tehdidi oluşturdu", "Takım savunmasını organize eden konuşkan pivot olarak bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4184,
    "Shawn Marion",
    ["shawn marion", "marion", "the matrix"],
    ["Phoenix Suns", "Miami Heat", "Toronto Raptors", "Dallas Mavericks", "Cleveland Cavaliers"],
    ["ABD'li"],
    ["Small Forward", "Power Forward"],
    ["The Matrix lakabıyla her istatistik kategorisine dokunurdu", "Alışılmadık şut formuna rağmen etkili dış tehdit sundu", "Phoenix'in 7 saniye ve altı hücum sisteminde kilit parçaydı", "2011 Dallas şampiyonluğunda LeBron savunmalarında rol aldı", "Kısa forvetten uzuna kadar çok pozisyon savunabilirdi"]
  ,
    ["nba:legend"]
  ),

  n(
    4185,
    "Rasheed Wallace",
    ["rasheed wallace", "sheed"],
    ["Washington Bullets", "Portland Trail Blazers", "Atlanta Hawks", "Detroit Pistons", "Boston Celtics", "New York Knicks"],
    ["ABD'li"],
    ["Power Forward", "Center"],
    ["Ball don't lie sözü NBA kültürüne geçti", "2004 Detroit Pistons şampiyonluğunun eksik parçasıydı", "Post savunması ve dış şutuyla döneminin çok yönlü uzunlarındandı", "Teknik faulleri ve ateşli karakteriyle meşhurdur", "Portland Jail Blazers döneminin en yetenekli forvetlerinden biriydi"]
  ,
    ["nba:legend"]
  ),

  n(
    4186,
    "Chauncey Billups",
    ["chauncey billups", "billups", "mr big shot"],
    ["Boston Celtics", "Toronto Raptors", "Denver Nuggets", "Minnesota Timberwolves", "Detroit Pistons", "New York Knicks", "Los Angeles Clippers"],
    ["ABD'li"],
    ["Point Guard"],
    ["Mr. Big Shot lakabını kritik şutlarıyla aldı", "2004 Pistons şampiyonluğunda Finaller MVP'si oldu", "Oyunu yavaşlatıp doğru eşleşmeyi bulan elit liderdi", "Denver'a döndüğünde Carmelo'lu takımı konferans finaline taşıdı", "Geç olgunlaşan kariyer hikayesinin en iyi örneklerinden"]
  ,
    ["nba:legend"]
  ),

  n(
    4187,
    "Richard Hamilton",
    ["richard hamilton", "rip hamilton", "rip"],
    ["Washington Wizards", "Detroit Pistons", "Chicago Bulls"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["Rip lakabıyla sürekli perde çıkışı koşularıyla savunmayı yıpratırdı", "Yüz maskesi Detroit döneminin ikonik görüntüsüdür", "2004 Pistons şampiyonluğunun ana skoreriydi", "Orta mesafe catch-and-shoot oyununda ustaydı", "Ray Allen'lı UConn şampiyonluk kültüründen NBA'e geldi"]
  ,
    ["nba:legend"]
  ),

  n(
    4188,
    "Metta World Peace",
    ["metta world peace", "ron artest", "artest"],
    ["Chicago Bulls", "Indiana Pacers", "Sacramento Kings", "Houston Rockets", "Los Angeles Lakers", "New York Knicks"],
    ["ABD'li"],
    ["Small Forward"],
    ["Ron Artest adıyla Yılın Savunmacısı ödülü kazandı", "2010 Finalleri 7. maçında Lakers için kritik üçlüğü attı", "Malice at the Palace olayının merkezindeki isimlerden biriydi", "Fiziksel kanat savunmasıyla yıldızları yıldırırdı", "Kariyerinde isim değişikliği ve renkli karakteriyle de bilinir"]
  ,
    ["nba:legend"]
  ),

  n(
    4189,
    "Andrew Bogut",
    ["andrew bogut", "bogut"],
    ["Milwaukee Bucks", "Golden State Warriors", "Dallas Mavericks", "Cleveland Cavaliers", "Los Angeles Lakers"],
    ["Avustralyalı"],
    ["Center"],
    ["İlk sıradan draft edilen Avustralyalı uzunlardan biridir", "Warriors'ın 2015 şampiyonluğunda savunma ve perdeleme merkeziydi", "Yüksek post paslarıyla hareketli hücumu desteklerdi", "Blok ve pozisyon alma savunmasıyla boyalı alanı kapatırdı", "Sakatlıklar hücum potansiyelini sınırladı"]
  ,
    ["nba:legend"]
  ),

  n(
    4190,
    "Andrew Wiggins",
    ["andrew wiggins", "wiggins"],
    ["Minnesota Timberwolves", "Golden State Warriors"],
    ["Kanadalı"],
    ["Small Forward", "Shooting Guard"],
    ["2014 draftının bir numarası olarak büyük beklentiyle geldi", "Golden State'in 2022 şampiyonluğunda elit kanat savunması oynadı", "Finallerde Jayson Tatum eşleşmesinde çok değerliydi", "Atletik bitirişleri ve ikinci sıçrayışıyla bilinir", "Kanada basketbolunun en önemli NBA yüzlerinden biridir"]
  ,
    ["nba:active"]
  ),

  n(
    4191,
    "Bam Adebayo",
    ["bam adebayo", "bam"],
    ["Miami Heat"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["Miami Heat savunmasının ana iletişim merkezi oldu", "Guard değişmelerinde kalabilen nadir uzunlardan biridir", "Dribble handoff ve kısa paslarla hücumu başlatır", "Kentucky çıkışlı çok yönlü savunmacı uzun profiline sahip", "Heat Culture'ın modern yüzlerinden biri kabul edilir"]
  ,
    ["nba:active"]
  ),

  n(
    4192,
    "Paolo Banchero",
    ["paolo banchero", "banchero"],
    ["Orlando Magic"],
    ["ABD'li", "İtalyan"],
    ["Power Forward", "Small Forward"],
    ["Orlando Magic'in yeni jenerasyon ana skor opsiyonudur", "Güçlü gövdesiyle temas alarak potaya iner", "Çaylak yılında hemen lider rolüne geçti", "İtalya pasaportu nedeniyle milli takım tercihi uzun süre konuşuldu", "Forvet pozisyonunda top yönlendirme ve izolasyon tehdidi taşır"]
  ,
    ["nba:active"]
  ),

  n(
    4193,
    "Cade Cunningham",
    ["cade cunningham", "cade"],
    ["Detroit Pistons"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    ["Detroit Pistons yeniden yapılanmasının ana oyun kurucusudur", "Uzun boylu guard olarak tempoyu sakin yönetir", "Pick-and-roll kararları ve orta mesafe oyunu öne çıkar", "Oklahoma State çıkışlı bir numara draft seçimidir", "Sakatlık sonrası liderlik yükünü yeniden üstlenmiştir"]
  ,
    ["nba:active"]
  ),

  n(
    4194,
    "Chet Holmgren",
    ["chet holmgren", "chet"],
    ["Oklahoma City Thunder"],
    ["ABD'li"],
    ["Center", "Power Forward"],
    ["Çok ince fiziğine rağmen elit blok zamanlamasıyla bilinir", "OKC'nin spacing sağlayan uzun savunmacısıdır", "Üçlük, top sürme ve çember korumayı aynı profilde birleştirir", "Gonzaga çıkışlı ve Wembanyama ile kıyaslanan uzunlardan biridir", "Rookie sezonunda Shai ve Jalen Williams ile güçlü çekirdek oluşturdu"]
  ,
    ["nba:active"]
  ),

  n(
    4195,
    "Scottie Barnes",
    ["scottie barnes", "barnes"],
    ["Toronto Raptors"],
    ["ABD'li"],
    ["Small Forward", "Power Forward", "Point Forward"],
    ["Toronto'nun çok yönlü point-forward yüzüdür", "Çaylak yılında Yılın Çaylağı ödülünü kazandı", "Savunmada birden fazla pozisyona geçebilir", "Enerjisi ve geniş kanat açıklığıyla oyunu dağınık pozisyonlarda etkiler", "Pas vizyonu forvet pozisyonu için çok değerlidir"]
  ,
    ["nba:active"]
  ),

  n(
    4196,
    "Tyrese Maxey",
    ["tyrese maxey", "maxey"],
    ["Philadelphia 76ers"],
    ["ABD'li"],
    ["Point Guard", "Shooting Guard"],
    ["Philadelphia'da yıldız seviyesine sıçrayan hızlı guarddır", "Floater ve hızlı ilk adımı ana silahlarıdır", "James Harden sonrası top yönlendirme yükü arttı", "Güleryüzlü enerjisi ve çalışma temposuyla sevilir", "Kentucky çıkışlı olup draftta geriye düşmesi sonradan şaşırttı"]
  ,
    ["nba:active"]
  ),

  n(
    4197,
    "Franz Wagner",
    ["franz wagner", "wagner"],
    ["Orlando Magic"],
    ["Alman"],
    ["Small Forward", "Power Forward"],
    ["Almanya'nın 2023 Dünya Kupası şampiyonluğunda kilit rol oynadı", "Orlando Magic'te boyuna göre güçlü top yönlendirme sunar", "Kardeşi Moritz Wagner ile aynı takımda oynamasıyla bilinir", "Keskin cutlar ve akıllı kararlarla hücumu akıtır", "Avrupa temelli, verimli ve takım oyununa uygun forvet profilidir"]
  ,
    ["nba:active"]
  ),

  n(
    4198,
    "Mikal Bridges",
    ["mikal bridges", "bridges"],
    ["Phoenix Suns", "Brooklyn Nets", "New York Knicks"],
    ["ABD'li"],
    ["Small Forward", "Shooting Guard"],
    ["Ironman dayanıklılığı ve maç kaçırmamasıyla tanındı", "Phoenix'in 2021 final yürüyüşünde elit 3&D kanadıydı", "Brooklyn'de daha büyük skor rolüne geçerek oyununu genişletti", "Villanova ile iki NCAA şampiyonluğu yaşadı", "Uzun kolları ve köşe üçlükleriyle modern kanat prototipidir"]
  ,
    ["nba:active"]
  ),

  n(
    4199,
    "Alperen Şengün",
    ["alperen şengün", "alperen sengun", "sengun", "şengün"],
    ["Houston Rockets"],
    ["Türk"],
    ["Center"],
    ["Sırtı dönük pasları ve ayak oyunlarıyla Baby Jokic benzetmesi aldı", "Houston Rockets hücumunda yüksek posttan oyun kurar", "Türkiye'den NBA'e giden en yetenekli uzunlardan biri kabul edilir", "Spin move ve sahte paslarla savunmayı ters ayakta yakalar", "Genç yaşta takımın ana hücum merkezlerinden birine dönüştü"]
  ,
    ["nba:active"]
  ),

  n(
    4200,
    "Tyler Herro",
    ["tyler herro", "herro"],
    ["Miami Heat"],
    ["ABD'li"],
    ["Shooting Guard"],
    ["2020 Bubble playofflarında çaylak hâliyle büyük sahneye çıktı", "Miami Heat'te bench skorerinden ana guard rollerine yükseldi", "Pull-up üçlük ve floater arasında ritim bulur", "Sixth Man of the Year ödülüyle hücum değerini kanıtladı", "Saha dışı özgüveni ve Kentucky çıkışlı skorer kimliğiyle bilinir"]
  ,
    ["nba:active"]
  )

  
];