import type { GuessItem } from "../../types/game";

type FootballerTag =
  | "football:turkishLegend"
  | "football:foreignLegend"
  | "football:active";

const TURKISH_LEGEND_IDS = new Set<number>([
  4, 75, 76, 77, 101, 102, 103, 104, 105, 106, 107, 108,
  109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
  121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132,
  133, 134, 135, 136, 137, 401, 402, 403, 404, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419,
  420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431,
  432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443,
  444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455,
  456, 457, 458, 459,
]);

const FOREIGN_LEGEND_IDS = new Set<number>([
  1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
  72, 73, 74, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 138, 139,
  140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
  154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167,
  168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181,
  182, 183, 184, 185, 186, 187, 188, 189, 190, 193, 194, 195, 196, 197,
  198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211,
  212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 228, 229, 230,
  231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244,
  245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258,
  259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272,
  273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286,
  287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300,
  301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
  315, 321, 322, 323, 328, 329, 330, 332, 333,
]);

const ACTIVE_PLAYER_IDS = new Set<number>([
  9, 10, 54, 91, 94, 95, 96, 97, 98, 99, 100, 120, 191, 192,
  193, 194, 205, 206, 207, 208, 213, 216, 217, 218, 221, 222, 223, 224,
  225, 226, 227, 228, 230, 245, 251, 252, 262, 264, 265, 266, 268, 269,
  270, 299, 300, 301, 316, 317, 318, 319, 320, 324, 325, 326, 327, 331,
  334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347,
  348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361,
  362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375,
  376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389,
  390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400,
]);

const getFootballerTags = (id: number): FootballerTag[] => {
  const tags: FootballerTag[] = [];

  if (TURKISH_LEGEND_IDS.has(id)) {
    tags.push("football:turkishLegend");
  }

  if (FOREIGN_LEGEND_IDS.has(id)) {
    tags.push("football:foreignLegend");
  }

  if (ACTIVE_PLAYER_IDS.has(id)) {
    tags.push("football:active");
  }

  return tags;
};

const createFootballer = (
  id: number,
  name: string,
  answers: string[],
  teams: string[],
  nationality: string[],
  positions: string[],
  birthDate: string[],
  skills: string[]
): GuessItem => {
  return {
    id,
    mode: "footballer",
    modeLabel: "Futbolcu",
    name,
    answers,
    tags: getFootballerTags(id),
    hintGroups: [
      {
        key: "teams",
        label: "Takımlar",
        hints: teams,
      },
      {
        key: "positions",
        label: "Mevki",
        hints: positions,
      },
      {
        key: "identity",
        label: "Uyruk ve Doğum Tarihi",
        hints: [
          ...nationality.map((item) => `Uyruk: ${item}`),
          ...birthDate.map((item) => `Doğum Tarihi: ${item}`),
        ],
      },
      {
        key: "skills",
        label: "Özellik",
        hints: skills,
      },
],
  };
};

const f = createFootballer;

export const footballers: GuessItem[] = [
  f(
    1,
    "Alessandro Del Piero",
    ["del piero", "delpiero", "alessandro del piero"],
    ["Padova", "Juventus", "Sydney FC", "Delhi Dynamos"],
    ["İtalyan"],
    ["Forvet", "10 Numara", "Forvet Arkası"],
    ["9 Kasım 1974"],
    ["Pinturicchio Lakaplı", "Frikik ustası", "Dünya Kupası kazandı", "Teknik oyun kurucu"]
  ),

  f(
    2,
    "Gabriel Batistuta",
    ["batistuta", "gabriel batistuta", "batigol"],
    ["Newell's Old Boys", "River Plate", "Boca Juniors", "Fiorentina", "Roma", "Inter"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["1 Şubat 1969"],
    ["Batigol lakabı", "Fiorentina efsanesi", "Serie A golcüsü", "Güçlü şut"]
  ),

  f(
    3,
    "Francesco Totti",
    ["totti", "francesco totti"],
    ["Roma"],
    ["İtalyan"],
    ["10 Numara", "Forvet Arkası", "Forvet"],
    ["27 Eylül 1976"],
    ["Tek kulüp efsanesi", "Dünya Kupası kazandı", "Roma kaptanı", "Panenka penaltıları"]
  ),

  f(
    4,
    "Ümit Karan",
    ["ümit karan", "umit karan", "karan"],
    ["Gençlerbirliği", "Galatasaray", "Eskişehirspor", "Ankaraspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1 Ekim 1976"],
    ["Akrobatik goller", "Süper Lig golcüsü", "Ceza sahası bitiricisi", "Galatasaray ile 3 şampiyonluk"]
  ),

  f(
    5,
    "Alvaro Recoba",
    ["recoba", "alvaro recoba", "álvaro recoba"],
    ["Danubio", "Nacional", "Inter", "Venezia", "Torino", "Panionios"],
    ["Uruguaylı"],
    ["10 Numara", "Forvet Arkası", "Kanat"],
    ["17 Mart 1976"],
    ["Sol ayak", "Frikik", "Uzaktan şut", "plase ve falsolu şutlar"]
  ),

  f(
    6,
    "José Luis Chilavert",
    ["chilavert", "jose luis chilavert", "josé luis chilavert"],
    ["Sportivo Luqueño", "Real Zaragoza", "Vélez Sarsfield", "Strasbourg", "Peñarol"],
    ["Paraguaylı"],
    ["Kaleci"],
    ["27 Temmuz 1965"],
    ["Gol atan kaleci", "Frikik ve Penaltıcı kaleci", "Paraguay efsanesi"]
  ),

  f(
    7,
    "Ronaldo Nazário",
    ["ronaldo nazario", "ronaldo nazário", "fenomen ronaldo", "r9"],
    ["Cruzeiro", "PSV", "Barcelona", "Inter", "Real Madrid", "Milan", "Corinthians"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["18 Eylül 1976"],
    ["R9 lakabı", "Ballon d'Or kazandı", "Dünya Kupası kazandı", "Fenomen lakabı"]
  ),

  f(
    8,
    "Zlatan Ibrahimović",
    ["zlatan", "ibrahimovic", "zlatan ibrahimovic", "zlatan ibrahimović"],
    ["Malmö", "Ajax", "Juventus", "Inter", "Barcelona", "Milan", "PSG", "Manchester United", "LA Galaxy"],
    ["İsveçli"],
    ["Forvet", "Santrfor"],
    ["3 Ekim 1981"],
    ["Akrobatik goller", "Güçlü fizik", "Serie A şampiyonlukları", "Tanrı Sendromu :)"]
  ),

  f(
    9,
    "Lionel Messi",
    ["messi", "lionel messi", "leo messi"],
    ["Barcelona", "PSG", "Inter Miami"],
    ["Arjantinli"],
    ["Sağ Kanat", "10 Numara", "Forvet Arkası"],
    ["24 Haziran 1987"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Sol ayak", "Barcelona efsanesi"]
  ),

  f(
    10,
    "Cristiano Ronaldo",
    ["cristiano", "cristiano ronaldo", "christiano ronaldo", "cr7"],
    ["Sporting CP", "Manchester United", "Real Madrid", "Juventus", "Al Nassr"],
    ["Portekizli"],
    ["Sol Kanat", "Forvet", "Santrfor"],
    ["5 Şubat 1985"],
    ["CR7 lakabı", "Ballon d'Or kazandı", "Şampiyonlar Ligi efsanesi", "Güçlü şut"]
  ),

  f(
    11,
    "Ronaldinho",
    ["ronaldinho", "ronaldinho gaucho", "ronaldinho gaúcho"],
    ["Grêmio", "PSG", "Barcelona", "Milan", "Flamengo", "Atlético Mineiro"],
    ["Brezilyalı"],
    ["10 Numara", "Sol Kanat", "Forvet Arkası"],
    ["21 Mart 1980"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Elastico", "Barcelona efsanesi"]
  ),

  f(
    12,
    "Zinedine Zidane",
    ["zidane", "zinedine zidane", "zizou"],
    ["Cannes", "Bordeaux", "Juventus", "Real Madrid"],
    ["Fransız"],
    ["10 Numara", "Merkez Orta Saha", "Ofansif Orta Saha"],
    ["23 Haziran 1972"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Zizou lakabı", "Şampiyonlar Ligi final golü"]
  ),

  f(
    13,
    "Diego Maradona",
    ["maradona", "diego maradona"],
    ["Argentinos Juniors", "Boca Juniors", "Barcelona", "Napoli", "Sevilla"],
    ["Arjantinli"],
    ["10 Numara", "Ofansif Orta Saha", "Forvet Arkası"],
    ["30 Ekim 1960"],
    ["Dünya Kupası kazandı", "Napoli efsanesi", "Tanrı'nın eli", "Dripling ustası"]
  ),

  f(
    14,
    "Pelé",
    ["pele", "pelé", "edson arantes do nascimento"],
    ["Santos", "New York Cosmos"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor", "10 Numara"],
    ["23 Ekim 1940"],
    ["3 Dünya Kupası kazandı", "Futbol kralı", "Santos efsanesi", "Bitiricilik"]
  ),

  f(
    15,
    "Johan Cruyff",
    ["cruyff", "johan cruyff"],
    ["Ajax", "Barcelona", "Feyenoord"],
    ["Hollandalı"],
    ["Forvet", "Ofansif Orta Saha"],
    ["25 Nisan 1947"],
    ["Ballon d'Or kazandı", "Total futbol", "Kendi adını verdiği dönüşü", "Barcelona felsefesini etkiledi"]
  ),

  f(
    16,
    "Michel Platini",
    ["platini", "michel platini"],
    ["Nancy", "Saint-Étienne", "Juventus"],
    ["Fransız"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["21 Haziran 1955"],
    ["3 Ballon d'Or kazandı", "Frikik ustası", "Juventus efsanesi", "Euro 1984 yıldızı"]
  ),

  f(
    17,
    "Roberto Baggio",
    ["baggio", "roberto baggio", "il divin codino"],
    ["Fiorentina", "Juventus", "Milan", "Bologna", "Inter", "Brescia"],
    ["İtalyan"],
    ["10 Numara", "Forvet Arkası", "Forvet"],
    ["18 Şubat 1967"],
    ["Ballon d'Or kazandı", "At kuyruğu", "1994 ABD penaltısı :(" , "Frikik", "Teknik 10 numara"]
  ),

  f(
    18,
    "Paolo Maldini",
    ["maldini", "paolo maldini"],
    ["Milan"],
    ["İtalyan"],
    ["Sol Bek", "Stoper"],
    ["26 Haziran 1968"],
    ["Tek kulüp efsanesi", "Şampiyonlar Ligi kazandı", "Savunma ustası", "Milan Efsane kadrosu kaptanı"]
  ),

  f(
    19,
    "Franz Beckenbauer",
    ["beckenbauer", "franz beckenbauer", "der kaiser"],
    ["Bayern Münih", "New York Cosmos", "Hamburger SV"],
    ["Alman"],
    ["Libero", "Stoper"],
    ["11 Eylül 1945"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Der Kaiser lakabı", "Libero rolünün sembolü"]
  ),

  f(
    20,
    "Gerd Müller",
    ["gerd muller", "gerd müller", "der bomber"],
    ["Bayern Münih", "Fort Lauderdale Strikers"],
    ["Alman"],
    ["Forvet", "Santrfor"],
    ["3 Kasım 1945"],
    ["Der Bomber lakabı", "Dünya Kupası kazandı", "Ballon d'Or kazandı", "Ceza sahası golcüsü"]
  ),

  f(
    21,
    "Marco van Basten",
    ["van basten", "marco van basten"],
    ["Ajax", "Milan"],
    ["Hollandalı"],
    ["Forvet", "Santrfor"],
    ["31 Ekim 1964"],
    ["3 Ballon d'Or kazandı", "Euro 1988 golü", "Milan efsanesi", "Voleleriyle ünlü"]
  ),

  f(
    22,
    "Ruud Gullit",
    ["gullit", "ruud gullit"],
    ["Feyenoord", "PSV", "Milan", "Sampdoria", "Chelsea"],
    ["Hollandalı"],
    ["Merkez Orta Saha", "Forvet Arkası"],
    ["1 Eylül 1962"],
    ["Ballon d'Or kazandı", "Milan efsanesi", "Çok yönlü oyuncu", "Çok Kıvırcık saçlı"]
  ),

  f(
    23,
    "Frank Rijkaard",
    ["rijkaard", "frank rijkaard"],
    ["Ajax", "Real Zaragoza", "Milan"],
    ["Hollandalı"],
    ["Ön Libero", "Stoper", "Orta Saha"],
    ["30 Eylül 1962"],
    ["Milan efsanesi", "Şampiyonlar Ligi kazandı", "Savunma zekası", "Çok yönlü"]
  ),

  f(
    24,
    "George Best",
    ["best", "george best"],
    ["Manchester United", "Fulham", "Hibernian"],
    ["Kuzey İrlandalı"],
    ["Kanat", "Forvet"],
    ["22 Mayıs 1946"],
    ["Ballon d'Or kazandı", "Manchester United efsanesi", "Dripling ustası", "Karizmatik yıldız"]
  ),

  f(
    25,
    "Bobby Charlton",
    ["bobby charlton", "charlton"],
    ["Manchester United", "Preston North End"],
    ["İngiliz"],
    ["Ofansif Orta Saha", "Forvet"],
    ["11 Ekim 1937"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Manchester United efsanesi", "Güçlü şut"]
  ),

  f(
    26,
    "Lev Yashin",
    ["yashin", "lev yashin", "black spider", "kara örümcek"],
    ["Dynamo Moscow"],
    ["Sovyet", "Rus"],
    ["Kaleci"],
    ["22 Ekim 1929"],
    ["Ballon d'Or kazanan kaleci", "Kara örümcek lakabı", "Refleks", "Kaleci efsanesi"]
  ),

  f(
    27,
    "Gianluigi Buffon",
    ["buffon", "gianluigi buffon", "gigi buffon"],
    ["Parma", "Juventus", "PSG"],
    ["İtalyan"],
    ["Kaleci"],
    ["28 Ocak 1978"],
    ["Dünya Kupası kazandı", "Juventus efsanesi", "Uzun kariyer", "Refleks"]
  ),

  f(
    28,
    "Iker Casillas",
    ["casillas", "iker casillas"],
    ["Real Madrid", "Porto"],
    ["İspanyol"],
    ["Kaleci"],
    ["20 Mayıs 1981"],
    ["Dünya Kupası kazandı", "Real Madrid kaptanı", "Saint Iker lakabı", "Şampiyonlar Ligi kazandı"]
  ),

  f(
    29,
    "Oliver Kahn",
    ["kahn", "oliver kahn"],
    ["Karlsruher SC", "Bayern Münih"],
    ["Alman"],
    ["Kaleci"],
    ["15 Haziran 1969"],
    ["Bayern Münih efsanesi", "Agresif karakter", "Dünya Kupası finalisti", "Refleks"]
  ),

  f(
    30,
    "Peter Schmeichel",
    ["schmeichel", "peter schmeichel"],
    ["Brøndby", "Manchester United", "Sporting CP", "Aston Villa", "Manchester City"],
    ["Danimarkalı"],
    ["Kaleci"],
    ["18 Kasım 1963"],
    ["Manchester United efsanesi", "Şampiyonlar Ligi kazandı", "Euro 1992 kazandı", "Dev fiziği"]
  ),

  f(
    31,
    "Cafu",
    ["cafu", "marcos evangelista de morais"],
    ["São Paulo", "Real Zaragoza", "Palmeiras", "Roma", "Milan"],
    ["Brezilyalı"],
    ["Sağ Bek"],
    ["7 Haziran 1970"],
    ["Dünya Kupası kazandı", "Brezilya kaptanı", "Bitmeyen enerji", "Bindirmeleriyle ünlü"]
  ),

  f(
    32,
    "Roberto Carlos",
    ["roberto carlos"],
    ["Palmeiras", "Inter", "Real Madrid", "Fenerbahçe", "Corinthians", "Anzhi"],
    ["Brezilyalı"],
    ["Sol Bek"],
    ["10 Nisan 1973"],
    ["Dünya Kupası kazandı", "Güçlü şut", "Frikik", "Real Madrid efsanesi"]
  ),

  f(
    33,
    "Carles Puyol",
    ["puyol", "carles puyol"],
    ["Barcelona"],
    ["İspanyol"],
    ["Stoper", "Sağ Bek"],
    ["13 Nisan 1978"],
    ["Dünya Kupası kazandı", "Barcelona kaptanı", "Şampiyonlar Ligi kazandı", "Liderlik"]
  ),

  f(
    34,
    "Sergio Ramos",
    ["ramos", "sergio ramos"],
    ["Sevilla", "Real Madrid", "PSG"],
    ["İspanyol"],
    ["Stoper", "Sağ Bek"],
    ["30 Mart 1986"],
    ["Dünya Kupası kazandı", "Şampiyonlar Ligi kazandı", "Kafa golleri", "Sert savunma"]
  ),

  f(
    35,
    "John Terry",
    ["terry", "john terry"],
    ["Chelsea", "Aston Villa"],
    ["İngiliz"],
    ["Stoper"],
    ["7 Aralık 1980"],
    ["Chelsea kaptanı", "Şampiyonlar Ligi kazandı", "Kafa topları", "Liderlik"]
  ),

  f(
    36,
    "Rio Ferdinand",
    ["rio ferdinand", "ferdinand"],
    ["West Ham", "Leeds United", "Manchester United", "QPR"],
    ["İngiliz"],
    ["Stoper"],
    ["7 Kasım 1978"],
    ["İngiltere Milli Takımı'nda 3 Dünya Kupası oynadı", "Şampiyonlar Ligi kazandı", "Topla çıkış", "Savunma zekası"]
  ),

  f(
    37,
    "Nemanja Vidić",
    ["vidic", "vidić", "nemanja vidic", "nemanja vidić"],
    ["Red Star Belgrade", "Spartak Moscow", "Manchester United", "Inter"],
    ["Sırp"],
    ["Stoper"],
    ["21 Ekim 1981"],
    ["Sakatlıklar yüzünden 34'ünde futbolu bıraktı", "Şampiyonlar Ligi kazandı", "Sert savunma", "Kafa topları"]
  ),

  f(
    38,
    "Andrea Pirlo",
    ["pirlo", "andrea pirlo"],
    ["Brescia", "Inter", "Milan", "Juventus", "New York City FC"],
    ["İtalyan"],
    ["Merkez Orta Saha", "Regista", "Ön Libero"],
    ["19 Mayıs 1979"],
    ["Dünya Kupası kazandı", "Regista", "Frikik", "Oyun kurma"]
  ),

  f(
    39,
    "Xavi Hernández",
    ["xavi", "xavi hernandez", "xavi hernández"],
    ["Barcelona", "Al Sadd"],
    ["İspanyol"],
    ["Merkez Orta Saha"],
    ["25 Ocak 1980"],
    ["Dünya Kupası kazandı", "Tiki-taka", "Barcelona efsanesi", "Pas oyunu"]
  ),

  f(
    40,
    "Andrés Iniesta",
    ["iniesta", "andres iniesta", "andrés iniesta"],
    ["Barcelona", "Vissel Kobe", "Emirates Club"],
    ["İspanyol"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["11 Mayıs 1984"],
    ["Dünya Kupası final golü", "Barcelona efsanesi", "Şampiyonlar Ligi kazandı", "Dripling"]
  ),

  f(
    41,
    "Steven Gerrard",
    ["gerrard", "steven gerrard"],
    ["Liverpool", "LA Galaxy"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["30 Mayıs 1980"],
    ["Liverpool kaptanı", "İstanbul finali", "Şampiyonlar Ligi kazandı", "Güçlü şut"]
  ),

  f(
    42,
    "Frank Lampard",
    ["lampard", "frank lampard"],
    ["West Ham", "Chelsea", "Manchester City", "New York City FC"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["20 Haziran 1978"],
    ["Chelsea ile 1 Şampiyonlar Ligi, 1 Avrupa Ligi, 3 Premier Lig şampiyonluğu, 4 FA Cup ve 2 Lig Kupası", "Golcü orta saha", "Şampiyonlar Ligi kazandı", "Uzaktan şut"]
  ),

  f(
    43,
    "Paul Scholes",
    ["scholes", "paul scholes"],
    ["Manchester United"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["16 Kasım 1974"],
    ["Tek kulüp efsanesi", "Gözlerden uzak sakin hayatı sever", "Şampiyonlar Ligi kazandı", "Pas ve şut"]
  ),

  f(
    44,
    "Roy Keane",
    ["roy keane", "keane"],
    ["Nottingham Forest", "Manchester United", "Celtic"],
    ["İrlandalı"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["10 Ağustos 1971"],
    ["Manchester United kaptanı", "Sertlik", "Liderlik", "Mücadele"]
  ),

  f(
    45,
    "Patrick Vieira",
    ["vieira", "patrick vieira"],
    ["Cannes", "Milan", "Arsenal", "Juventus", "Inter", "Manchester City"],
    ["Fransız"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["23 Haziran 1976"],
    ["Dünya Kupası kazandı", "Arsenal kaptanı", "Fizik gücü", "Box-to-box"]
  ),

  f(
    46,
    "Claude Makélélé",
    ["makelele", "makélélé", "claude makelele", "claude makélélé"],
    ["Nantes", "Marseille", "Celta Vigo", "Real Madrid", "Chelsea", "PSG"],
    ["Fransız"],
    ["Ön Libero"],
    ["18 Şubat 1973"],
    ["Görünmez kahraman", "Top kapma", "kendi pozisyonuna adını verdi", "Savunma dengesi"]
  ),

  f(
    47,
    "Kaká",
    ["kaka", "kaká", "ricardo kaka"],
    ["São Paulo", "Milan", "Real Madrid", "Orlando City"],
    ["Brezilyalı"],
    ["Ofansif Orta Saha", "10 Numara"],
    ["22 Nisan 1982"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Milan efsanesi", "Hızlı dripling"]
  ),

  f(
    48,
    "Rivaldo",
    ["rivaldo"],
    ["Palmeiras", "Deportivo La Coruña", "Barcelona", "Milan", "Olympiacos"],
    ["Brezilyalı"],
    ["10 Numara", "Forvet Arkası", "Kanat"],
    ["19 Nisan 1972"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı ama kendini yere atması yakışmadı, alpayın tek haklı olduğu konunun müsebbibi", "Sol ayak", "Röveşata"]
  ),

  f(
    49,
    "Romário",
    ["romario", "romário"],
    ["Vasco da Gama", "PSV", "Barcelona", "Flamengo", "Valencia"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["29 Ocak 1966"],
    ["Dünya Kupası kazandı", "Ceza sahası golcüsü", "Barcelona dönemi", "Bitiricilik"]
  ),

  f(
    50,
    "Thierry Henry",
    ["henry", "thierry henry"],
    ["Monaco", "Juventus", "Arsenal", "Barcelona", "New York Red Bulls"],
    ["Fransız"],
    ["Forvet", "Sol Kanat"],
    ["17 Ağustos 1977"],
    ["Dünya Kupası kazandı", "Arsenal efsanesi", "Premier League gol kralı", "Hız ve plase"]
  ),

  f(
    51,
    "Dennis Bergkamp",
    ["bergkamp", "dennis bergkamp"],
    ["Ajax", "Inter", "Arsenal"],
    ["Hollandalı"],
    ["Forvet Arkası", "Forvet"],
    ["10 Mayıs 1969"],
    ["Arsenal efsanesi", "İlk dokunuş", "Teknik", "Uçak korkusuyla bilinir"]
  ),

  f(
    52,
    "Eric Cantona",
    ["cantona", "eric cantona"],
    ["Auxerre", "Marseille", "Leeds United", "Manchester United"],
    ["Fransız"],
    ["Forvet", "10 Numara"],
    ["24 Mayıs 1966"],
    ["Manchester United ikonu", "Karizmatik lider", "Yakası kalkık forma", "Teknik"]
  ),

  f(
    53,
    "Raúl González",
    ["raul", "raúl", "raul gonzalez", "raúl gonzález"],
    ["Real Madrid", "Schalke 04", "Al Sadd", "New York Cosmos"],
    ["İspanyol"],
    ["Forvet", "Santrfor"],
    ["27 Haziran 1977"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi golcüsü", "Sol ayak", "Kaptanlık"]
  ),

  f(
    54,
    "Karim Benzema",
    ["benzema", "karim benzema"],
    ["Lyon", "Real Madrid", "Al Ittihad"],
    ["Fransız"],
    ["Forvet", "Santrfor"],
    ["19 Aralık 1987"],
    ["Ballon d'Or kazandı", "Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Bağlantı oyunu"]
  ),

  f(
    55,
    "Samuel Eto'o",
    ["eto'o", "etoo", "samuel eto'o", "samuel etoo"],
    ["Real Madrid", "Mallorca", "Barcelona", "Inter", "Chelsea", "Everton", "Antalyaspor", "Konyaspor"],
    ["Kamerunlu"],
    ["Forvet", "Santrfor"],
    ["10 Mart 1981"],
    ["Barcelona ve Inter", "Şampiyonlar Ligi kazandı", "Afrika efsanesi", "Bitiricilik"]
  ),

  f(
    56,
    "Didier Drogba",
    ["drogba", "didier drogba"],
    ["Le Mans", "Guingamp", "Marseille", "Chelsea", "Galatasaray", "Montreal Impact"],
    ["Fildişili"],
    ["Forvet", "Santrfor"],
    ["11 Mart 1978"],
    ["Chelsea efsanesi", "Şampiyonlar Ligi final golü", "Güçlü fizik", "Büyük maç oyuncusu"]
  ),

  f(
    57,
    "David Beckham",
    ["beckham", "david beckham"],
    ["Manchester United", "Real Madrid", "LA Galaxy", "Milan", "PSG"],
    ["İngiliz"],
    ["Sağ Orta Saha", "Sağ Kanat"],
    ["2 Mayıs 1975"],
    ["Frikik", "Orta açma", "Manchester United efsanesi", "Popüler kültür ikonu"]
  ),

  f(
    58,
    "Ryan Giggs",
    ["giggs", "ryan giggs"],
    ["Manchester United"],
    ["Galli"],
    ["Sol Kanat", "Orta Saha"],
    ["29 Kasım 1973"],
    ["Tek kulüp efsanesi", "Manchester United", "Şampiyonlar Ligi kazandı", "Uzun kariyer"]
  ),

  f(
    59,
    "Luis Figo",
    ["figo", "luis figo", "luís figo"],
    ["Sporting CP", "Barcelona", "Real Madrid", "Inter"],
    ["Portekizli"],
    ["Sağ Kanat", "Ofansif Orta Saha"],
    ["4 Kasım 1972"],
    ["Ballon d'Or kazandı", "El Clasico transferi", "Teknik", "Kanat oyunu"]
  ),

  f(
    60,
    "Hristo Stoichkov",
    ["stoichkov", "hristo stoichkov"],
    ["CSKA Sofia", "Barcelona", "Parma", "Chicago Fire"],
    ["Bulgar"],
    ["Forvet", "Sol Kanat"],
    ["8 Şubat 1966"],
    ["Ballon d'Or kazandı", "Barcelona dream team", "Sol ayak", "Bulgar efsanesi"]
  ),

  f(
    61,
    "Pavel Nedvěd",
    ["nedved", "pavel nedved", "pavel nedvěd"],
    ["Sparta Prague", "Lazio", "Juventus"],
    ["Çek"],
    ["Orta Saha", "Kanat", "Ofansif Orta Saha"],
    ["30 Ağustos 1972"],
    ["Ballon d'Or kazandı", "Juventus dönemi", "Bitmeyen enerji", "Uzaktan şut"]
  ),

  f(
    62,
    "Clarence Seedorf",
    ["seedorf", "clarence seedorf"],
    ["Ajax", "Sampdoria", "Real Madrid", "Inter", "Milan", "Botafogo"],
    ["Hollandalı"],
    ["Merkez Orta Saha"],
    ["1 Nisan 1976"],
    ["Şampiyonlar Ligi efsanesi", "Milan dönemi", "Çok yönlü", "Güçlü orta saha"]
  ),

  f(
    63,
    "Edgar Davids",
    ["davids", "edgar davids"],
    ["Ajax", "Milan", "Juventus", "Barcelona", "Inter", "Tottenham"],
    ["Hollandalı"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["13 Mart 1973"],
    ["Pitbull lakabı", "Gözlük", "Juventus dönemi", "Mücadele"]
  ),

  f(
    64,
    "Michael Laudrup",
    ["michael laudrup"],
    ["Lazio", "Juventus", "Barcelona", "Real Madrid", "Ajax"],
    ["Danimarkalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["15 Haziran 1964"],
    ["Barcelona ve Real Madrid", "Oyun zekası", "Pas", "Danimarka efsanesi kardeşlerden"]
  ),

  f(
    65,
    "Brian Laudrup",
    ["brian laudrup"],
    ["Bayern Münih", "Fiorentina", "Milan", "Rangers", "Chelsea", "Ajax"],
    ["Danimarkalı"],
    ["Kanat", "Forvet Arkası"],
    ["22 Şubat 1969"],
    ["Euro 1992 kazandı", "Rangers efsanesi", "Hız", "Dripling"]
  ),

  f(
    66,
    "Jari Litmanen",
    ["litmanen", "jari litmanen"],
    ["Ajax", "Barcelona", "Liverpool", "Malmö", "Lahti"],
    ["Finlandiyalı"],
    ["10 Numara", "Forvet Arkası"],
    ["20 Şubat 1971"],
    ["Ajax efsanesi", "Finlandiya ikonu", "Teknik", "Oyun zekası"]
  ),

  f(
    67,
    "Andriy Shevchenko",
    ["shevchenko", "andriy shevchenko", "sheva"],
    ["Dynamo Kyiv", "Milan", "Chelsea"],
    ["Ukraynalı"],
    ["Forvet", "Santrfor"],
    ["29 Eylül 1976"],
    ["Ballon d'Or kazandı", "Milan efsanesi", "Sheva lakabı", "Bitiricilik"]
  ),

  f(
    68,
    "George Weah",
    ["weah", "george weah"],
    ["Monaco", "PSG", "Milan", "Chelsea", "Manchester City", "Marseille"],
    ["Liberyalı"],
    ["Forvet", "Santrfor"],
    ["1 Ekim 1966"],
    ["Ballon d'Or kazandı", "Afrika futbol efsanesi", "Milan dönemi", "Hız ve güç"]
  ),

  f(
    69,
    "Fernando Torres",
    ["torres", "fernando torres", "el nino", "el niño"],
    ["Atlético Madrid", "Liverpool", "Chelsea", "Milan", "Sagan Tosu"],
    ["İspanyol"],
    ["Forvet", "Santrfor"],
    ["20 Mart 1984"],
    ["Dünya Kupası kazandı", "Euro final golü", "El Niño lakabı", "Liverpool dönemi"]
  ),

  f(
    70,
    "David Villa",
    ["villa", "david villa"],
    ["Sporting Gijón", "Real Zaragoza", "Valencia", "Barcelona", "Atlético Madrid", "New York City FC"],
    ["İspanyol"],
    ["Forvet", "Kanat"],
    ["3 Aralık 1981"],
    ["Dünya Kupası kazandı", "İspanya golcüsü", "Barcelona dönemi", "Bitiricilik"]
  ),

  f(
    71,
    "Wayne Rooney",
    ["rooney", "wayne rooney"],
    ["Everton", "Manchester United", "D.C. United", "Derby County"],
    ["İngiliz"],
    ["Forvet", "10 Numara", "Ofansif Orta Saha"],
    ["24 Ekim 1985"],
    ["Manchester United efsanesi", "Röveşata golü", "Güçlü şut", "Çok yönlü"]
  ),

  f(
    72,
    "Michael Owen",
    ["owen", "michael owen"],
    ["Liverpool", "Real Madrid", "Newcastle United", "Manchester United", "Stoke City"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["14 Aralık 1979"],
    ["Ballon d'Or kazandı", "Hız", "Dripling", "Bitiricilik"]
  ),

  f(
    73,
    "Alan Shearer",
    ["shearer", "alan shearer"],
    ["Southampton", "Blackburn Rovers", "Newcastle United"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["13 Ağustos 1970"],
    ["Premier League gol kralı", "Newcastle efsanesi", "Kafa vuruşu", "Penaltı"]
  ),

  f(
    74,
    "Gheorghe Hagi",
    ["hagi", "gheorghe hagi", "karpatların maradonası", "karpatlarin maradonasi"],
    ["Steaua București", "Real Madrid", "Brescia", "Barcelona", "Galatasaray"],
    ["Rumen"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["5 Şubat 1965"],
    ["Uefa Finali Tony Adam'a dirsek attı :(", "UEFA Kupası kazandı", "Sol ayak", "Karpatların Maradonası"]
  ),

  f(
    75,
    "Bülent Korkmaz",
    ["bülent korkmaz", "bulent korkmaz", "büyük kaptan", "buyuk kaptan"],
    ["Galatasaray"],
    ["Türk"],
    ["Stoper"],
    ["24 Kasım 1968"],
    ["Büyük Kaptan", "UEFA Kupası kazandı", "Tek kulüp efsanesi", "Sert savunma"]
  ),

  f(
 76,
    "Hakan Ünsal",
    ["hakan ünsal", "hakan unsal"],
    ["Karabükspor", "Galatasaray", "Blackburn Rovers", "Çaykur Rizespor"],
    ["Türk"],
    ["Sol Bek", "Sol Kanat"],
    ["14 Mayıs 1973"],
    ["Galatasaray efsanesi", "UEFA Kupası kazandı", "Solak", "2002 Dünya Kupası üçüncüsü olan kadroda yer aldı"]
  ),

  f(
    77,
    "Arda Turan",
    ["arda", "arda turan"],
    ["Galatasaray", "Manisaspor", "Atlético Madrid", "Barcelona", "İstanbul Başakşehir"],
    ["Türk"],
    ["Sol Kanat", "Orta Saha", "Ofansif Orta Saha"],
    ["30 Ocak 1987"],
    ["Dip çizgiye inik orta fake'i", "La Liga kazandı", "Teknik", "Top saklama"]
  ),

  f(
    78,
    "Alex de Souza",
    ["alex", "alex de souza", "alexsandro de souza"],
    ["Coritiba", "Palmeiras", "Flamengo", "Cruzeiro", "Fenerbahçe"],
    ["Brezilyalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["14 Eylül 1977"],
    ["Fenerbahçe efsanesi", "Süper Lig gol kralı", "Frikik", "Asist"]
  ),

  f(
    79,
    "Roberto Rivelino",
    ["rivelino", "roberto rivelino"],
    ["Corinthians", "Fluminense", "Al Hilal"],
    ["Brezilyalı"],
    ["Ofansif Orta Saha", "Sol Kanat"],
    ["1 Ocak 1946"],
    ["Dünya Kupası kazandı", "Elastico", "Sol ayak", "1970 Brezilya"]
  ),

  f(
    80,
    "Sócrates",
    ["socrates", "sócrates"],
    ["Botafogo-SP", "Corinthians", "Fiorentina", "Flamengo", "Santos"],
    ["Brezilyalı"],
    ["Orta Saha", "Ofansif Orta Saha"],
    ["19 Şubat 1954"],
    ["Doktor lakabı", "Topuk pası", "Brezilya ikonu", "Liderlik"]
  ),

  f(
    81,
    "Zico",
    ["zico"],
    ["Flamengo", "Udinese", "Kashima Antlers"],
    ["Brezilyalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["3 Mart 1953"],
    ["Beyaz Pele lakabı", "Frikik", "Flamengo efsanesi", "Teknik"]
  ),

  f(
    82,
    "Garrincha",
    ["garrincha", "manoel francisco dos santos"],
    ["Botafogo", "Corinthians", "Flamengo", "Olaria"],
    ["Brezilyalı"],
    ["Sağ Kanat"],
    ["28 Ekim 1933"],
    ["Dünya Kupası kazandı", "Dripling", "Çalım ustası", "Brezilya efsanesi"]
  ),

  f(
    83,
    "Eusébio",
    ["eusebio", "eusébio", "black panther"],
    ["Benfica", "Boston Minutemen", "Monterrey"],
    ["Portekizli"],
    ["Forvet", "Santrfor"],
    ["25 Ocak 1942"],
    ["Ballon d'Or kazandı", "Kara Panter lakabı", "Benfica efsanesi", "Güçlü şut"]
  ),

  f(
    84,
    "Ferenc Puskás",
    ["puskas", "puskás", "ferenc puskas", "ferenc puskás"],
    ["Budapest Honvéd", "Real Madrid"],
    ["Macar"],
    ["Forvet", "İç Forvet"],
    ["1 Nisan 1927"],
    ["Real Madrid efsanesi", "Sol ayak", "Macar Milli Takımı", "Puskás ödülüne adını verdi"]
  ),

  f(
    85,
    "Alfredo Di Stéfano",
    ["di stefano", "di stéfano", "alfredo di stefano", "alfredo di stéfano"],
    ["River Plate", "Millonarios", "Real Madrid", "Espanyol"],
    ["Arjantinli", "İspanyol"],
    ["Forvet", "Ofansif Orta Saha"],
    ["4 Temmuz 1926"],
    ["Real Madrid efsanesi", "Ballon d'Or kazandı", "Çok yönlü", "Avrupa Kupası efsanesi"]
  ),

  f(
    86,
    "Lothar Matthäus",
    ["matthaus", "matthäus", "lothar matthaus", "lothar matthäus"],
    ["Borussia Mönchengladbach", "Bayern Münih", "Inter", "MetroStars"],
    ["Alman"],
    ["Orta Saha", "Ön Libero", "Libero"],
    ["21 Mart 1961"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "Güçlü şut", "Çok yönlü"]
  ),

  f(
    87,
    "Miroslav Klose",
    ["klose", "miroslav klose"],
    ["Kaiserslautern", "Werder Bremen", "Bayern Münih", "Lazio"],
    ["Alman"],
    ["Forvet", "Santrfor"],
    ["9 Haziran 1978"],
    ["Dünya Kupası kazandı", "Dünya Kupası gol rekoru", "Kafa vuruşu", "Fair-play"]
  ),

  f(
    88,
    "Marta",
    ["marta", "marta vieira da silva"],
    ["Vasco da Gama", "Umeå IK", "Santos", "Rosengård", "Orlando Pride"],
    ["Brezilyalı"],
    ["Forvet", "Ofansif Orta Saha"],
    ["19 Şubat 1986"],
    ["Kadın futbol efsanesi", "FIFA yılın oyuncusu", "Dripling", "Brezilya ikonu"]
  ),

  f(
    89,
    "Mia Hamm",
    ["mia hamm", "hamm"],
    ["North Carolina Tar Heels", "Washington Freedom"],
    ["ABD'li"],
    ["Forvet", "Kanat"],
    ["17 Mart 1972"],
    ["Dünya Kupası kazandı", "Olimpiyat şampiyonu", "Kadın futbol efsanesi", "ABD ikonu"]
  ),

  f(
    90,
    "Megan Rapinoe",
    ["rapinoe", "megan rapinoe"],
    ["Chicago Red Stars", "Lyon", "Seattle Reign"],
    ["ABD'li"],
    ["Kanat", "Forvet"],
    ["5 Temmuz 1985"],
    ["Dünya Kupası kazandı", "Ballon d'Or Féminin kazandı", "Sol ayak", "Orta açma"]
  ),

  f(
    91,
    "Luka Modrić",
    ["modric", "modrić", "luka modric", "luka modrić"],
    ["Dinamo Zagreb", "Tottenham", "Real Madrid"],
    ["Hırvat"],
    ["Merkez Orta Saha"],
    ["9 Eylül 1985"],
    ["Ballon d'Or kazandı", "Real Madrid efsanesi", "Dış ayak pası", "Oyun görüşü"]
  ),

  f(
    92,
    "Toni Kroos",
    ["kroos", "toni kroos"],
    ["Bayern Münih", "Bayer Leverkusen", "Real Madrid"],
    ["Alman"],
    ["Merkez Orta Saha"],
    ["4 Ocak 1990"],
    ["Dünya Kupası kazandı", "Şampiyonlar Ligi kazandı", "Pas isabeti", "Oyun kurma"]
  ),

  f(
    93,
    "Sergio Busquets",
    ["busquets", "sergio busquets"],
    ["Barcelona", "Inter Miami"],
    ["İspanyol"],
    ["Ön Libero"],
    ["16 Temmuz 1988"],
    ["Dünya Kupası kazandı", "Barcelona efsanesi", "Tiki-taka", "Pozisyon bilgisi"]
  ),

  f(
    94,
    "Neymar",
    ["neymar", "neymar jr", "neymar junior"],
    ["Santos", "Barcelona", "PSG", "Al Hilal"],
    ["Brezilyalı"],
    ["Sol Kanat", "Forvet", "10 Numara"],
    ["5 Şubat 1992"],
    ["Şampiyonlar Ligi kazandı", "Olimpiyat şampiyonu", "Dripling", "Santos çıkışlı"]
  ),

  f(
    95,
    "Luis Suárez",
    ["suarez", "suárez", "luis suarez", "luis suárez"],
    ["Nacional", "Ajax", "Liverpool", "Barcelona", "Atlético Madrid", "Inter Miami"],
    ["Uruguaylı"],
    ["Forvet", "Santrfor"],
    ["24 Ocak 1987"],
    ["Barcelona dönemi", "Avrupa Altın Ayakkabı", "Bitiricilik", "Agresif oyun"]
  ),

  f(
    96,
    "Robert Lewandowski",
    ["lewandowski", "robert lewandowski", "lewa"],
    ["Lech Poznań", "Borussia Dortmund", "Bayern Münih", "Barcelona"],
    ["Polonyalı"],
    ["Forvet", "Santrfor"],
    ["21 Ağustos 1988"],
    ["Bayern Münih efsanesi", "Şampiyonlar Ligi kazandı", "5 gol 9 dakika", "Gol makinesi"]
  ),

  f(
    97,
    "Sadio Mané",
    ["mane", "mané", "sadio mane", "sadio mané"],
    ["Metz", "Red Bull Salzburg", "Southampton", "Liverpool", "Bayern Münih", "Al Nassr"],
    ["Senegalli"],
    ["Sol Kanat", "Forvet"],
    ["10 Nisan 1992"],
    ["Liverpool dönemi", "Şampiyonlar Ligi kazandı", "Afrika Uluslar Kupası kazandı", "Hız"]
  ),

  f(
    98,
    "Mohamed Salah",
    ["salah", "mohamed salah", "mo salah"],
    ["Al Mokawloon", "Basel", "Chelsea", "Fiorentina", "Roma", "Liverpool"],
    ["Mısırlı"],
    ["Sağ Kanat", "Forvet"],
    ["15 Haziran 1992"],
    ["Liverpool efsanesi", "Şampiyonlar Ligi kazandı", "Premier League gol kralı", "Sol ayak"]
  ),

  f(
    99,
    "Kevin De Bruyne",
    ["de bruyne", "kevin de bruyne", "kdb"],
    ["Genk", "Chelsea", "Werder Bremen", "Wolfsburg", "Manchester City"],
    ["Belçikalı"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["28 Haziran 1991"],
    ["Manchester City efsanesi", "Şampiyonlar Ligi kazandı", "Pas", "Orta açma"]
  ),

  f(
    100,
    "Erling Haaland",
    ["haaland", "erling haaland"],
    ["Bryne", "Molde", "Red Bull Salzburg", "Borussia Dortmund", "Manchester City"],
    ["Norveçli"],
    ["Forvet", "Santrfor"],
    ["21 Temmuz 2000"],
    ["Manchester City", "Şampiyonlar Ligi kazandı", "Gol makinesi", "Fizik güç"]
  ),

  f(
    101,
    "Fatih Terim",
    ["fatih terim", "terim", "imparator"],
    ["Adana Demirspor", "Galatasaray"],
    ["Türk"],
    ["Stoper", "Libero"],
    ["4 Eylül 1953"],
    ["Galatasaray kaptanı", "Türk futbol efsanesi", "İmparator lakabı", "Milli takım oyuncusu"]
  ),

  f(
    102,
    "Şenol Güneş",
    ["şenol güneş", "senol gunes"],
    ["Trabzonspor"],
    ["Türk"],
    ["Kaleci"],
    ["1 Haziran 1952"],
    ["Trabzonspor efsanesi", "Milli kaleci", "Uzun süre gol yememe serileriyle anılır", "Türk futbol figürü"]
  ),

  f(
    103,
    "Lefter Küçükandonyadis",
    ["lefter", "lefter küçükandonyadis", "lefter kucukandonyadis"],
    ["Taksim", "Fenerbahçe", "Fiorentina", "Nice"],
    ["Türk"],
    ["Forvet"],
    ["22 Aralık 1925"],
    ["Ordinaryüs lakabı", "Fenerbahçe efsanesi", "Milli takım efsanesi", "Golcü"]
  ),

  f(
    104,
    "Metin Oktay",
    ["metin oktay", "taçsız kral", "tacsiz kral"],
    ["İzmirspor", "Galatasaray", "Palermo"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["2 Şubat 1936"],
    ["Taçsız Kral lakabı", "Galatasaray efsanesi", "Gol kralı", "Türk futbol ikonu"]
  ),

  f(
    105,
    "Can Bartu",
    ["can bartu", "sinyor"],
    ["Fenerbahçe", "Fiorentina", "Venezia", "Lazio"],
    ["Türk"],
    ["Orta Saha", "Forvet"],
    ["31 Ocak 1936"],
    ["Sinyor lakabı", "Fenerbahçe efsanesi", "İtalya'da oynadı", "Hem futbol hem basketbol geçmişi"]
  ),

  f(
    106,
    "Tanju Çolak",
    ["tanju çolak", "tanju colak"],
    ["Samsunspor", "Galatasaray", "Fenerbahçe", "İstanbulspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["10 Kasım 1963"],
    ["Avrupa Altın Ayakkabı", "Gol kralı", "Süper Lig golcüsü", "Ceza sahası bitiricisi"]
  ),

  f(
    107,
    "Rıdvan Dilmen",
    ["rıdvan dilmen", "ridvan dilmen", "şeytan", "seytan"],
    ["Muğlaspor", "Boluspor", "Sarıyer", "Fenerbahçe"],
    ["Türk"],
    ["Forvet Arkası", "Kanat"],
    ["15 Ağustos 1962"],
    ["Şeytan lakabı", "Fenerbahçe efsanesi", "Teknik", "Dripling"]
  ),

  f(
    108,
    "Sergen Yalçın",
    ["sergen", "sergen yalçın", "sergen yalcin"],
    ["Beşiktaş", "İstanbulspor", "Fenerbahçe", "Galatasaray", "Trabzonspor"],
    ["Türk"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["5 Kasım 1972"],
    ["Teknik yetenek", "Beşiktaş efsanesi", "Frikik", "Oyun zekası"]
  ),

  f(
    109,
    "Oğuz Çetin",
    ["oğuz çetin", "oguz cetin", "imparator oğuz", "imparator oguz"],
    ["Sakaryaspor", "Fenerbahçe", "İstanbulspor", "Adanaspor"],
    ["Türk"],
    ["Orta Saha", "10 Numara"],
    ["15 Şubat 1963"],
    ["Fenerbahçe efsanesi", "Oyun kurucu", "Milli takım oyuncusu", "Pas yeteneği"]
  ),

  f(
    110,
    "Aykut Kocaman",
    ["aykut kocaman"],
    ["Sakaryaspor", "Fenerbahçe", "İstanbulspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["5 Nisan 1965"],
    ["Fenerbahçe efsanesi", "Gol kralı", "Süper Lig golcüsü", "Bitiricilik"]
  ),

  f(
    111,
    "Hami Mandıralı",
    ["hami mandıralı", "hami mandirali"],
    ["Trabzonspor", "Schalke 04", "Ankaragücü"],
    ["Türk"],
    ["Forvet", "Ofansif Orta Saha"],
    ["20 Temmuz 1968"],
    ["Trabzonspor efsanesi", "Güçlü şut", "Frikik", "Süper Lig golcüsü"]
  ),

  f(
    112,
    "Tugay Kerimoğlu",
    ["tugay", "tugay kerimoğlu", "tugay kerimoglu"],
    ["Galatasaray", "Rangers", "Blackburn Rovers"],
    ["Türk"],
    ["Merkez Orta Saha"],
    ["24 Ağustos 1970"],
    ["Galatasaray altyapısı", "Premier League'de oynadı", "Teknik orta saha", "Pas oyunu"]
  ),

  f(
    113,
    "Rüştü Reçber",
    ["rüştü", "rustu", "rüştü reçber", "rustu recber"],
    ["Antalyaspor", "Fenerbahçe", "Barcelona", "Beşiktaş"],
    ["Türk"],
    ["Kaleci"],
    ["10 Mayıs 1973"],
    ["2002 Dünya Kupası yıldızı", "Milli kaleci", "Fenerbahçe efsanesi", "Yüz boyasıyla hatırlanır"]
  ),

  f(
    114,
    "Volkan Demirel",
    ["volkan demirel", "volkan"],
    ["Kartalspor", "Fenerbahçe"],
    ["Türk"],
    ["Kaleci"],
    ["27 Ekim 1981"],
    ["Yapma!!! Naptın!!! Oyuncu değişikliği hakkımız da dolduuu!! :) ", "Uzun kariyer", "Milli kaleci", "Refleks"]
  ),

  f(
    115,
    "Emre Belözoğlu",
    ["emre", "emre belözoğlu", "emre belozoğlu", "emre belozoglu"],
    ["Galatasaray", "Inter", "Newcastle United", "Fenerbahçe", "Atlético Madrid", "Başakşehir"],
    ["Türk"],
    ["Merkez Orta Saha"],
    ["7 Eylül 1980"],
    [" Pelé tarafından 2004 yılında seçilen ''Yaşayan En İyi 125 Futbolcu'' listesine giren tek Türk oyuncudur", "UEFA Kupası kazandı", "Teknik orta saha", "Milli takım oyuncusu"]
  ),

  f(
    116,
    "Nihat Kahveci",
    ["nihat", "nihat kahveci"],
    ["Beşiktaş", "Real Sociedad", "Villarreal"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["23 Kasım 1979"],
    ["La Liga'da parladı", "Çek Cumruhiyeti ile oynana milli maç performansı", "Milli takım golcüsü", "Hızlı forvet"]
  ),

  f(
    117,
    "Tuncay Şanlı",
    ["tuncay", "tuncay şanlı", "tuncay sanli"],
    ["Sakaryaspor", "Fenerbahçe", "Middlesbrough", "Stoke City", "Bursaspor"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["16 Ocak 1982"],
    ["Old Trafford'da hat-trick yaptı", "Premier League'de oynadı", "Mücadeleci", "Çok yönlü hücumcu"]
  ),

  f(
    118,
    "Hamit Altıntop",
    ["hamit", "hamit altıntop", "hamit altintop"],
    ["Schalke 04", "Bayern Münih", "Real Madrid", "Galatasaray", "Darmstadt"],
    ["Türk"],
    ["Orta Saha", "Sağ Orta Saha"],
    ["8 Aralık 1982"],
    ["Puskás ödülü kazandı", " XXX (adamın adını yazırma şimdi bana) vurduu direkten döndüüüü", "Real Madrid'de oynadı", "Güçlü şut"]
  ),

  f(
    119,
    "Nuri Şahin",
    ["nuri", "nuri şahin", "nuri sahin"],
    ["Borussia Dortmund", "Real Madrid", "Liverpool", "Feyenoord", "Werder Bremen", "Antalyaspor"],
    ["Türk"],
    ["Merkez Orta Saha"],
    ["5 Eylül 1988"],
    ["Borussia Dortmund şampiyonluğu", "Real Madrid'de oynadı", "Pas oyunu", "Genç yaşta çıkış yaptı"]
  ),

  f(
    120,
    "Hakan Çalhanoğlu",
    ["hakan çalhanoğlu", "hakan calhanoglu"],
    ["Karlsruher SC", "Hamburger SV", "Bayer Leverkusen", "Milan", "Inter"],
    ["Türk"],
    ["Ofansif Orta Saha", "Merkez Orta Saha"],
    ["8 Şubat 1994"],
    ["Frikik ustası", "Serie A şampiyonu", "Milan ve Inter'de oynadı", "Milli takım yıldızı"]
  ),

  f(
    121,
    "Burak Yılmaz",
    ["burak", "burak yılmaz", "burak yilmaz"],
    ["Antalyaspor", "Beşiktaş", "Fenerbahçe", "Trabzonspor", "Galatasaray", "Lille"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["15 Temmuz 1985"],
    ["Süper Lig gol kralı", "Lille ile Ligue 1 şampiyonu", "Milli takım golcüsü", "Bitiricilik"]
  ),

  f(
    122,
    "Selçuk İnan",
    ["selçuk inan", "selcuk inan"],
    ["Çanakkale Dardanelspor", "Manisaspor", "Trabzonspor", "Galatasaray"],
    ["Türk"],
    ["Merkez Orta Saha"],
    ["10 Şubat 1985"],
    ["Galatasaray kaptanı", "Frikik", "Süper Lig şampiyonlukları", "Pas oyunu"]
  ),

  f(
    123,
    "Okan Buruk",
    ["okan buruk"],
    ["Galatasaray", "Inter", "Beşiktaş", "İstanbul Başakşehir"],
    ["Türk"],
    ["Orta Saha"],
    ["19 Ekim 1973"],
    ["UEFA Kupası kazandı", "Galatasaray efsanesi", "Inter'de oynadı", "Mücadeleci orta saha"]
  ),

  f(
    124,
    "Alpay Özalan",
    ["alpay", "alpay özalan", "alpay ozalan"],
    ["Altay", "Beşiktaş", "Fenerbahçe", "Aston Villa", "Urawa Red Diamonds"],
    ["Türk"],
    ["Stoper"],
    ["29 Mayıs 1973"],
    ["2002 Dünya Kupası kadrosu", "Premier League'de oynadı", "Sert savunma", "Milli stoper"]
  ),

  f(
    125,
    "Gökhan Gönül",
    ["gökhan gönül", "gokhan gonul"],
    ["Gençlerbirliği", "Fenerbahçe", "Beşiktaş", "Çaykur Rizespor"],
    ["Türk"],
    ["Sağ Bek"],
    ["4 Ocak 1985"],
    ["Fenerbahçe ve Beşiktaş", "Milli sağ bek", "Bindirmeler", "İstikrarlı kariyer"]
  ),

  f(
    126,
    "Hasan Şaş",
    ["hasan şaş", "hasan sas"],
    ["Adana Demirspor", "Ankaragücü", "Galatasaray"],
    ["Türk"],
    ["Kanat", "Orta Saha"],
    ["1 Ağustos 1976"],
    ["UEFA Kupası kazandı", "2002 Dünya Kupası yıldızı", "Galatasaray efsanesi", "Enerjik oyun"]
  ),

  f(
    127,
    "İlhan Mansız",
    ["ilhan mansız", "ilhan mansiz"],
    ["Samsunspor", "Beşiktaş", "Vissel Kobe", "Hertha Berlin"],
    ["Türk"],
    ["Forvet"],
    ["10 Ağustos 1975"],
    ["2002 Dünya Kupası golü", "Beşiktaş dönemi", "Altın gol ile hatırlanır", "rainbow çalım deyince de sen be"]
  ),

  f(
    128,
    "Semih Şentürk",
    ["semih şentürk", "semih senturk", "nöbetçi golcü", "nobetci golcu"],
    ["Fenerbahçe", "Antalyaspor", "Başakşehir", "Eskişehirspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["29 Nisan 1983"],
    ["Nöbetçi golcü lakabı", "Fenerbahçe golcüsü", "Euro 2008 golü", "Süper Lig gol kralı"]
  ),

  f(
    129,
    "Mert Nobre",
    ["mert nobre", "nobre"],
    ["Paraná", "Fenerbahçe", "Beşiktaş", "Mersin İdman Yurdu", "Kayserispor"],
    ["Brezilyalı", "Türk"],
    ["Forvet", "Santrfor"],
    ["6 Kasım 1980"],
    ["Fenerbahçe ve Beşiktaş'ta oynadı", "Süper Lig golcüsü", "Kafa vuruşu", "Ceza sahası oyuncusu"]
  ),

  f(
    130,
    "Ünal Karaman",
    ["ünal karaman", "unal karaman"],
    ["Konyaspor", "Gaziantepspor", "Trabzonspor", "Ankaragücü"],
    ["Türk"],
    ["Orta Saha"],
    ["29 Haziran 1966"],
    ["Trabzonspor efsanesi", "Milli takım oyuncusu", "Mücadeleci orta saha", "Liderlik"]
  ),

  f(
    131,
    "Mehmet Topal",
    ["mehmet topal", "örümcek", "orumcek"],
    ["Galatasaray", "Valencia", "Fenerbahçe", "Başakşehir", "Beşiktaş"],
    ["Türk"],
    ["Ön Libero", "Stoper"],
    ["3 Mart 1986"],
    ["Örümcek lakabı", "La Liga'da oynadı", "Süper Lig şampiyonlukları", "Savunma dengesi"]
  ),

  f(
    132,
    "Rıza Çalımbay",
    ["rıza çalımbay", "riza calimbay", "atom karınca", "atom karinca"],
    ["Beşiktaş"],
    ["Türk"],
    ["Orta Saha"],
    ["2 Şubat 1963"],
    ["Atom Karınca lakabı", "Beşiktaş efsanesi", "Tek kulüp efsanesi", "Mücadeleci oyun"]
  ),

  f(
    133,
    "Feyyaz Uçar",
    ["feyyaz uçar", "feyyaz ucar"],
    ["Beşiktaş", "Fenerbahçe", "Antalyaspor", "Kuşadasıspor"],
    ["Türk"],
    ["Forvet"],
    ["27 Ekim 1963"],
    ["Beşiktaş efsanesi", "Metin-Ali-Feyyaz üçlüsü", "Golcü", "Süper Lig şampiyonlukları"]
  ),

  f(
    134,
    "Ali Gültiken",
    ["ali gültiken", "ali gultiken"],
    ["Beşiktaş", "Kayserispor"],
    ["Türk"],
    ["Forvet"],
    ["27 Haziran 1965"],
    ["Beşiktaş efsanesi", "Metin-Ali-Feyyaz üçlüsü", "Golcü", "Hızlı forvet"]
  ),

  f(
    135,
    "Metin Tekin",
    ["metin tekin", "sarı fırtına", "sari firtina"],
    ["Beşiktaş"],
    ["Türk"],
    ["Kanat", "Forvet"],
    ["8 Mayıs 1964"],
    ["Sarı Fırtına lakabı", "Beşiktaş efsanesi", "Metin-Ali-Feyyaz üçlüsü", "Hız"]
  ),

  f(
    136,
    "Tümer Metin",
    ["tümer metin", "tumer metin"],
    ["Zonguldakspor", "Samsunspor", "Beşiktaş", "Fenerbahçe", "Larissa"],
    ["Türk"],
    ["Orta Saha", "Sol Kanat"],
    ["14 Ekim 1974"],
    ["Sol ayak", "Frikik", "Beşiktaş ve Fenerbahçe", "Teknik oyuncu"]
  ),

  f(
    137,
    "Yusuf Şimşek",
    ["yusuf şimşek", "yusuf simsek"],
    ["Denizlispor", "Fenerbahçe", "Gaziantepspor", "Beşiktaş", "Bursaspor"],
    ["Türk"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["20 Temmuz 1975"],
    ["Teknik", "Sol ayak", "Telefon kulübesinde çalım atar :)", "Oyun kurucu"]
  ),

  f(
    138,
    "Elvir Baljić",
    ["elvir baljic", "elvir baljić", "baljic"],
    ["Željezničar", "Bursaspor", "Fenerbahçe", "Real Madrid", "Galatasaray"],
    ["Bosnalı"],
    ["Forvet", "Kanat"],
    ["8 Temmuz 1974"],
    ["Real Madrid'de oynadı", "Sert şut", "Sol ayak", "Balkan yıldızı"]
  ),

  f(
    139,
    "Pierre van Hooijdonk",
    ["pierre van hooijdonk", "van hooijdonk"],
    ["NAC Breda", "Celtic", "Nottingham Forest", "Feyenoord", "Fenerbahçe"],
    ["Hollandalı"],
    ["Forvet", "Santrfor"],
    ["29 Kasım 1969"],
    ["Kendi takım arkadaşlarından baraj kurdurturdu", "Frikik", "Kafa vuruşu", "Hollanda milli takımı"]
  ),

  f(
    140,
    "Mario Jardel",
    ["jardel", "mario jardel"],
    ["Grêmio", "Porto", "Galatasaray", "Sporting CP", "Bolton Wanderers"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["18 Eylül 1973"],
    ["Avrupa Altın Ayakkabı", "Helikopter ile sahaya indi", "Kafa vuruşu", "Gol makinesi"]
  ),

  f(
    141,
    "Guti",
    ["guti", "jose maria gutierrez", "josé maría gutiérrez"],
    ["Real Madrid", "Beşiktaş"],
    ["İspanyol"],
    ["Merkez Orta Saha", "10 Numara"],
    ["31 Ekim 1976"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Beşiktaş'ta oynadı", "Pas yeteneği"]
  ),

  f(
    142,
    "Ricardo Quaresma",
    ["quaresma", "ricardo quaresma", "q7"],
    ["Sporting CP", "Barcelona", "Porto", "Inter", "Beşiktaş", "Kasımpaşa"],
    ["Portekizli"],
    ["Sağ Kanat", "Sol Kanat"],
    ["26 Eylül 1983"],
    ["Trivela", "Euro 2016 kazandı", "Ayağının dışı canımızın içi diye bilinir", "Q7 lakabı"]
  ),

  f(
    143,
    "Wesley Sneijder",
    ["sneijder", "wesley sneijder"],
    ["Ajax", "Real Madrid", "Inter", "Galatasaray", "Nice", "Al Gharafa"],
    ["Hollandalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["9 Haziran 1984"],
    ["Inter ile Şampiyonlar Ligi", "Galatasaray efsanesi", "Uzaktan şut", "Oyun kurucu"]
  ),

  f(
    144,
    "Robin van Persie",
    ["van persie", "robin van persie", "rvp"],
    ["Feyenoord", "Arsenal", "Manchester United", "Fenerbahçe"],
    ["Hollandalı"],
    ["Forvet", "Kanat"],
    ["6 Ağustos 1983"],
    ["Premier League gol kralı", "Uçan kafa golü", "Manchester United şampiyonluğu", "Fenerbahçe'de oynadı"]
  ),

  f(
    145,
    "Demba Ba",
    ["demba ba", "ba"],
    ["Hoffenheim", "West Ham", "Newcastle United", "Chelsea", "Beşiktaş", "Başakşehir"],
    ["Senegalli"],
    ["Forvet", "Santrfor"],
    ["25 Mayıs 1985"],
    ["Beşiktaş golcüsü", "Hangimiz sevmedik çılgınlar gibi", "Süper Lig şampiyonu", "Bitiricilik"]
  ),

  f(
    146,
    "Jay-Jay Okocha",
    ["okocha", "jay jay okocha", "jay-jay okocha"],
    ["Eintracht Frankfurt", "Fenerbahçe", "PSG", "Bolton Wanderers"],
    ["Nijeryalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["14 Ağustos 1973"],
    ["Fenerbahçe dönemi", "Çalım ustası", "Afrika efsanesi", "Teknik"]
  ),

  f(
    147,
    "Nicolas Anelka",
    ["anelka", "nicolas anelka"],
    ["PSG", "Arsenal", "Real Madrid", "Liverpool", "Manchester City", "Fenerbahçe", "Chelsea"],
    ["Fransız"],
    ["Forvet", "Santrfor"],
    ["14 Mart 1979"],
    ["Şampiyonlar Ligi kazandı", "Fenerbahçe'de oynadı", "Chelsea dönemi", "Gezgin golcü"]
  ),

  f(
    148,
    "Fernando Redondo",
    ["redondo", "fernando redondo"],
    ["Argentinos Juniors", "Tenerife", "Real Madrid", "Milan"],
    ["Arjantinli"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["6 Haziran 1969"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Top tekniği", "Savunmadan oyun kurma"]
  ),

  f(
    149,
    "Juan Román Riquelme",
    ["riquelme", "juan roman riquelme", "juan román riquelme"],
    ["Boca Juniors", "Barcelona", "Villarreal", "Argentinos Juniors"],
    ["Arjantinli"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["24 Haziran 1978"],
    ["Boca Juniors efsanesi", "Oyun kurucu", "Duran top", "Klasik 10 numara"]
  ),

  f(
    150,
    "Javier Zanetti",
    ["zanetti", "javier zanetti"],
    ["Talleres", "Banfield", "Inter"],
    ["Arjantinli"],
    ["Sağ Bek", "Orta Saha"],
    ["10 Ağustos 1973"],
    ["Inter efsanesi", "Şampiyonlar Ligi kazandı", "Uzun kariyer", "Kaptanlık"]
  ),

  f(
    151,
    "Carlos Tevez",
    ["tevez", "carlos tevez", "apache"],
    ["Boca Juniors", "Corinthians", "West Ham", "Manchester United", "Manchester City", "Juventus"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["5 Şubat 1984"],
    ["Apache lakabı", "Şampiyonlar Ligi kazandı", "Boca Juniors efsanesi", "Mücadeleci forvet"]
  ),

  f(
    152,
    "Sergio Agüero",
    ["aguero", "agüero", "sergio aguero", "sergio agüero", "kun aguero"],
    ["Independiente", "Atlético Madrid", "Manchester City", "Barcelona"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["2 Haziran 1988"],
    ["Manchester City efsanesi", "Premier League şampiyonu", "93:20 golü", "Kun lakabı"]
  ),

  f(
    153,
    "Mario Kempes",
    ["kempes", "mario kempes"],
    ["Rosario Central", "Valencia", "River Plate"],
    ["Arjantinli"],
    ["Forvet"],
    ["15 Temmuz 1954"],
    ["Dünya Kupası kazandı", "1978 Dünya Kupası gol kralı", "Valencia efsanesi", "Bitiricilik"]
  ),

  f(
    154,
    "Hernán Crespo",
    ["crespo", "hernan crespo", "hernán crespo"],
    ["River Plate", "Parma", "Lazio", "Inter", "Chelsea", "Milan"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["5 Temmuz 1975"],
    ["Serie A golcüsü", "Parma ve Lazio dönemi", "Kafa vuruşu", "Bitiricilik"]
  ),

  f(
    155,
    "Javier Mascherano",
    ["mascherano", "javier mascherano"],
    ["River Plate", "Corinthians", "West Ham", "Liverpool", "Barcelona"],
    ["Arjantinli"],
    ["Ön Libero", "Stoper"],
    ["8 Haziran 1984"],
    ["Barcelona dönemi", "Şampiyonlar Ligi kazandı", "Mücadele", "Savunma zekası"]
  ),

  f(
    156,
    "Ángel Di María",
    ["di maria", "di maría", "angel di maria", "ángel di maría"],
    ["Rosario Central", "Benfica", "Real Madrid", "Manchester United", "PSG", "Juventus"],
    ["Arjantinli"],
    ["Kanat", "Ofansif Orta Saha"],
    ["14 Şubat 1988"],
    ["Dünya Kupası kazandı", "Şampiyonlar Ligi kazandı", "Sol ayak", "Final oyuncusu"]
  ),

  f(
    157,
    "Franco Baresi",
    ["baresi", "franco baresi"],
    ["Milan"],
    ["İtalyan"],
    ["Stoper", "Libero"],
    ["8 Mayıs 1960"],
    ["Milan efsanesi", "Dünya Kupası kazandı", "Savunma lideri", "Tek kulüp efsanesi"]
  ),

  f(
    158,
    "Fabio Cannavaro",
    ["cannavaro", "fabio cannavaro"],
    ["Napoli", "Parma", "Inter", "Juventus", "Real Madrid"],
    ["İtalyan"],
    ["Stoper"],
    ["13 Eylül 1973"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "İtalya kaptanı", "Savunma zekası"]
  ),

  f(
    159,
    "Alessandro Nesta",
    ["nesta", "alessandro nesta"],
    ["Lazio", "Milan"],
    ["İtalyan"],
    ["Stoper"],
    ["19 Mart 1976"],
    ["Dünya Kupası kazandı", "Milan efsanesi", "Şampiyonlar Ligi kazandı", "Zarif savunmacı"]
  ),

  f(
    160,
    "Giorgio Chiellini",
    ["chiellini", "giorgio chiellini"],
    ["Livorno", "Fiorentina", "Juventus", "Los Angeles FC"],
    ["İtalyan"],
    ["Stoper"],
    ["14 Ağustos 1984"],
    ["Euro 2020 kazandı", "Juventus efsanesi", "Sert savunma", "Liderlik"]
  ),

  f(
    161,
    "Leonardo Bonucci",
    ["bonucci", "leonardo bonucci"],
    ["Inter", "Bari", "Juventus", "Milan", "Union Berlin"],
    ["İtalyan"],
    ["Stoper"],
    ["1 Mayıs 1987"],
    ["Euro 2020 kazandı", "Juventus dönemi", "Oyun kuran stoper", "Uzun pas"]
  ),

  f(
    162,
    "Gennaro Gattuso",
    ["gattuso", "gennaro gattuso", "ringhio"],
    ["Perugia", "Rangers", "Milan", "Sion"],
    ["İtalyan"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["9 Ocak 1978"],
    ["Dünya Kupası kazandı", "Milan efsanesi", "Mücadele", "Ringhio lakabı"]
  ),

  f(
    163,
    "Christian Vieri",
    ["vieri", "christian vieri", "bobo vieri"],
    ["Torino", "Atalanta", "Juventus", "Atlético Madrid", "Lazio", "Inter", "Milan"],
    ["İtalyan"],
    ["Forvet", "Santrfor"],
    ["12 Temmuz 1973"],
    ["Bobo lakabı", "Serie A golcüsü", "Güçlü fizik", "Kafa vuruşu"]
  ),

  f(
    164,
    "Filippo Inzaghi",
    ["inzaghi", "filippo inzaghi", "pippo"],
    ["Parma", "Atalanta", "Juventus", "Milan"],
    ["İtalyan"],
    ["Forvet", "Santrfor"],
    ["9 Ağustos 1973"],
    ["Dünya Kupası kazandı", "Milan efsanesi", "Şampiyonlar Ligi golcüsü", "Ofsayt çizgisi"]
  ),

  f(
    165,
    "Gianfranco Zola",
    ["zola", "gianfranco zola"],
    ["Napoli", "Parma", "Chelsea", "Cagliari"],
    ["İtalyan"],
    ["Forvet Arkası", "10 Numara"],
    ["5 Temmuz 1966"],
    ["Chelsea efsanesi", "Teknik", "Frikik", "Kısa boylu 10 numara"]
  ),

  f(
    166,
    "Paolo Rossi",
    ["paolo rossi", "rossi"],
    ["Vicenza", "Perugia", "Juventus", "Milan", "Verona"],
    ["İtalyan"],
    ["Forvet", "Santrfor"],
    ["23 Eylül 1956"],
    ["Ballon d'Or kazandı", "Dünya Kupası kazandı", "1982 Dünya Kupası gol kralı", "Bitiricilik"]
  ),

  f(
    167,
    "Dino Zoff",
    ["dino zoff", "zoff"],
    ["Udinese", "Mantova", "Napoli", "Juventus"],
    ["İtalyan"],
    ["Kaleci"],
    ["28 Şubat 1942"],
    ["Dünya Kupası kazandı", "Juventus efsanesi", "İtalya kaptanı", "Uzun kariyer"]
  ),

  f(
    168,
    "Fabio Grosso",
    ["fabio grosso", "grosso"],
    ["Perugia", "Palermo", "Inter", "Lyon", "Juventus"],
    ["İtalyan"],
    ["Sol Bek"],
    ["28 Kasım 1977"],
    ["Dünya Kupası kazandı", "2006 final penaltısı", "Sol bek", "Büyük turnuva oyuncusu"]
  ),

  f(
    169,
    "Marco Materazzi",
    ["materazzi", "marco materazzi"],
    ["Perugia", "Everton", "Inter"],
    ["İtalyan"],
    ["Stoper"],
    ["19 Ağustos 1973"],
    ["Dünya Kupası kazandı", "Inter ile Şampiyonlar Ligi", "Sert savunma", "2006 finaliyle hatırlanır"]
  ),

  f(
    170,
    "Xabi Alonso",
    ["xabi alonso", "alonso"],
    ["Real Sociedad", "Liverpool", "Real Madrid", "Bayern Münih"],
    ["İspanyol"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["25 Kasım 1981"],
    ["Dünya Kupası kazandı", "Şampiyonlar Ligi kazandı", "Uzun pas", "Oyun kurma"]
  ),

  f(
    171,
    "David Silva",
    ["david silva"],
    ["Valencia", "Manchester City", "Real Sociedad"],
    ["İspanyol"],
    ["Ofansif Orta Saha", "Kanat"],
    ["8 Ocak 1986"],
    ["Dünya Kupası kazandı", "Manchester City efsanesi", "Sol ayak", "Pas yeteneği"]
  ),

  f(
    172,
    "Cesc Fàbregas",
    ["fabregas", "fàbregas", "cesc fabregas", "cesc fàbregas"],
    ["Arsenal", "Barcelona", "Chelsea", "Monaco", "Como"],
    ["İspanyol"],
    ["Merkez Orta Saha"],
    ["4 Mayıs 1987"],
    ["Dünya Kupası kazandı", "Premier League şampiyonu", "Asist", "Pas oyunu"]
  ),

  f(
    173,
    "Fernando Hierro",
    ["hierro", "fernando hierro"],
    ["Valladolid", "Real Madrid", "Al Rayyan", "Bolton Wanderers"],
    ["İspanyol"],
    ["Stoper", "Ön Libero"],
    ["23 Mart 1968"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Golcü stoper", "Liderlik"]
  ),

  f(
    174,
    "Fernando Morientes",
    ["morientes", "fernando morientes"],
    ["Albacete", "Real Zaragoza", "Real Madrid", "Monaco", "Liverpool", "Valencia", "Marseille"],
    ["İspanyol"],
    ["Forvet", "Santrfor"],
    ["5 Nisan 1976"],
    ["Real Madrid dönemi", "Şampiyonlar Ligi kazandı", "Kafa vuruşu", "Bitiricilik"]
  ),

  f(
    175,
    "Emilio Butragueño",
    ["butragueno", "butragueño", "emilio butragueno", "emilio butragueño"],
    ["Real Madrid", "Celaya"],
    ["İspanyol"],
    ["Forvet"],
    ["22 Temmuz 1963"],
    ["Real Madrid efsanesi", "La Quinta del Buitre", "Teknik forvet", "İspanya ikonu"]
  ),

  f(
    176,
    "Luis Enrique",
    ["luis enrique"],
    ["Sporting Gijón", "Real Madrid", "Barcelona"],
    ["İspanyol"],
    ["Orta Saha", "Kanat", "Forvet"],
    ["8 Mayıs 1970"],
    ["Real Madrid ve Barcelona", "Çok yönlü", "Liderlik", "İspanya milli takımı"]
  ),

  f(
    177,
    "Ruud van Nistelrooy",
    ["van nistelrooy", "ruud van nistelrooy"],
    ["PSV", "Manchester United", "Real Madrid", "Hamburger SV", "Málaga"],
    ["Hollandalı"],
    ["Forvet", "Santrfor"],
    ["1 Temmuz 1976"],
    ["Şampiyonlar Ligi golcüsü", "Manchester United dönemi", "Real Madrid golcüsü", "Ceza sahası bitiricisi"]
  ),

  f(
    178,
    "Arjen Robben",
    ["robben", "arjen robben"],
    ["PSV", "Chelsea", "Real Madrid", "Bayern Münih", "Groningen"],
    ["Hollandalı"],
    ["Sağ Kanat", "Sol Kanat"],
    ["23 Ocak 1984"],
    ["Bayern Münih efsanesi", "Şampiyonlar Ligi final golü", "İçe kat edip şut", "Sol ayak"]
  ),

  f(
    179,
    "Patrick Kluivert",
    ["kluivert", "patrick kluivert"],
    ["Ajax", "Milan", "Barcelona", "Newcastle United", "Valencia", "PSV", "Lille"],
    ["Hollandalı"],
    ["Forvet", "Santrfor"],
    ["1 Temmuz 1976"],
    ["Ajax ile Şampiyonlar Ligi", "Barcelona dönemi", "Kafa vuruşu", "Bitiricilik"]
  ),

  f(
    180,
    "Henrik Larsson",
    ["larsson", "henrik larsson"],
    ["Feyenoord", "Celtic", "Barcelona", "Manchester United", "Helsingborg"],
    ["İsveçli"],
    ["Forvet", "Santrfor"],
    ["20 Eylül 1971"],
    ["Celtic efsanesi", "Barcelona ile Şampiyonlar Ligi", "Kafa vuruşu", "Bitiricilik"]
  ),

  f(
    181,
    "Michael Ballack",
    ["ballack", "michael ballack"],
    ["Kaiserslautern", "Bayer Leverkusen", "Bayern Münih", "Chelsea"],
    ["Alman"],
    ["Merkez Orta Saha"],
    ["26 Eylül 1976"],
    ["Bayern Münih ve Chelsea", "Güçlü şut", "Kafa golleri", "Almanya kaptanı"]
  ),

  f(
    182,
    "Philipp Lahm",
    ["lahm", "philipp lahm"],
    ["Bayern Münih", "Stuttgart"],
    ["Alman"],
    ["Sağ Bek", "Sol Bek", "Ön Libero"],
    ["11 Kasım 1983"],
    ["Dünya Kupası kazandı","sabri'den efsane çalım yedi" ,"Bayern Münih kaptanı", "Şampiyonlar Ligi kazandı", "Pozisyon bilgisi"]
  ),

  f(
    183,
    "Bastian Schweinsteiger",
    ["schweinsteiger", "bastian schweinsteiger"],
    ["Bayern Münih", "Manchester United", "Chicago Fire"],
    ["Alman"],
    ["Merkez Orta Saha"],
    ["1 Ağustos 1984"],
    ["Dünya Kupası kazandı", "Bayern Münih efsanesi", "Şampiyonlar Ligi kazandı", "Mücadele"]
  ),

  f(
    184,
    "Manuel Neuer",
    ["neuer", "manuel neuer"],
    ["Schalke 04", "Bayern Münih"],
    ["Alman"],
    ["Kaleci"],
    ["27 Mart 1986"],
    ["Dünya Kupası kazandı", "Sweeper keeper", "Bayern Münih efsanesi", "Şampiyonlar Ligi kazandı"]
  ),

  f(
    185,
    "Thomas Müller",
    ["muller", "müller", "thomas muller", "thomas müller"],
    ["Bayern Münih"],
    ["Alman"],
    ["Forvet Arkası", "Forvet", "Sağ Kanat"],
    ["13 Eylül 1989"],
    ["Dünya Kupası kazandı", "Bayern Münih efsanesi", "Raumdeuter rolü", "Şampiyonlar Ligi kazandı"]
  ),

  f(
    186,
    "Mesut Özil",
    ["mesut özil", "mesut ozil", "ozil", "özil"],
    ["Schalke 04", "Werder Bremen", "Real Madrid", "Arsenal", "Fenerbahçe", "Başakşehir"],
    ["Alman"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["15 Ekim 1988"],
    ["Dünya Kupası kazandı", "Asist ustası", "Real Madrid ve Arsenal", "Sol ayak"]
  ),

  f(
    187,
    "Yaya Touré",
    ["yaya toure", "yaya touré"],
    ["Monaco", "Barcelona", "Manchester City", "Olympiacos"],
    ["Fildişili"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["13 Mayıs 1983"],
    ["Manchester City efsanesi", "Barcelona ile Şampiyonlar Ligi", "Fizik güç", "Box-to-box"]
  ),

  f(
    188,
    "Roger Milla",
    ["roger milla", "milla"],
    ["Monaco", "Bastia", "Saint-Étienne", "Montpellier"],
    ["Kamerunlu"],
    ["Forvet"],
    ["20 Mayıs 1952"],
    ["Afrika futbol efsanesi", "Dünya Kupası dansı", "İleri yaşta gol", "Kamerun ikonu"]
  ),

  f(
    189,
    "Abedi Pele",
    ["abedi pele", "abedi ayew"],
    ["Al Sadd", "Marseille", "Lille", "Lyon", "Torino"],
    ["Ganalı"],
    ["Ofansif Orta Saha", "10 Numara"],
    ["5 Kasım 1964"],
    ["Afrika futbol efsanesi", "Marseille ile Şampiyonlar Ligi", "Teknik", "Oyun kurucu"]
  ),

  f(
    190,
    "Michael Essien",
    ["essien", "michael essien"],
    ["Bastia", "Lyon", "Chelsea", "Real Madrid", "Milan"],
    ["Ganalı"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["3 Aralık 1982"],
    ["Chelsea efsanesi", "Şampiyonlar Ligi kazandı", "Fizik gücü", "Çok yönlü"]
  ),

  f(
    191,
    "Riyad Mahrez",
    ["mahrez", "riyad mahrez"],
    ["Le Havre", "Leicester City", "Manchester City", "Al Ahli"],
    ["Cezayirli"],
    ["Sağ Kanat"],
    ["21 Şubat 1991"],
    ["Leicester şampiyonluğu", "Manchester City ile Şampiyonlar Ligi", "Sol ayak", "Afrika Uluslar Kupası kazandı"]
  ),

  f(
    192,
    "Achraf Hakimi",
    ["hakimi", "achraf hakimi"],
    ["Real Madrid", "Borussia Dortmund", "Inter", "PSG"],
    ["Faslı"],
    ["Sağ Bek", "Kanat Bek"],
    ["4 Kasım 1998"],
    ["Fas milli takımı yıldızı", "Hız", "Inter şampiyonluğu", "Bindirmeler"]
  ),

  f(
    193,
    "Kylian Mbappé",
    ["mbappe", "mbappé", "kylian mbappe", "kylian mbappé"],
    ["Monaco", "PSG", "Real Madrid"],
    ["Fransız"],
    ["Forvet", "Sol Kanat"],
    ["20 Aralık 1998"],
    ["Dünya Kupası kazandı", "Final hat-trick yaptı", "Hız", "Bitiricilik"]
  ),

  f(
    194,
    "Antoine Griezmann",
    ["griezmann", "antoine griezmann"],
    ["Real Sociedad", "Atlético Madrid", "Barcelona"],
    ["Fransız"],
    ["Forvet Arkası", "Forvet", "Kanat"],
    ["21 Mart 1991"],
    ["Dünya Kupası kazandı", "Atlético Madrid efsanesi", "Çok yönlü hücumcu", "Sol ayak"]
  ),

  f(
    195,
    "Didier Deschamps",
    ["deschamps", "didier deschamps"],
    ["Nantes", "Marseille", "Juventus", "Chelsea", "Valencia"],
    ["Fransız"],
    ["Ön Libero", "Orta Saha"],
    ["15 Ekim 1968"],
    ["Dünya Kupası kazandı", "Fransa kaptanı", "Juventus dönemi", "Mücadeleci orta saha"]
  ),

  f(
    196,
    "Marcel Desailly",
    ["desailly", "marcel desailly"],
    ["Nantes", "Marseille", "Milan", "Chelsea"],
    ["Fransız"],
    ["Stoper", "Ön Libero"],
    ["7 Eylül 1968"],
    ["Dünya Kupası kazandı", "Milan efsanesi", "Şampiyonlar Ligi kazandı", "Fiziksel savunmacı"]
  ),

  f(
    197,
    "Laurent Blanc",
    ["blanc", "laurent blanc"],
    ["Montpellier", "Napoli", "Barcelona", "Marseille", "Inter", "Manchester United"],
    ["Fransız"],
    ["Stoper"],
    ["19 Kasım 1965"],
    ["Dünya Kupası kazandı", "Euro kazandı", "Oyun kuran stoper", "Fransa efsanesi"]
  ),

  f(
    198,
    "Lilian Thuram",
    ["lilian thuram"],
    ["Monaco", "Parma", "Juventus", "Barcelona"],
    ["Fransız"],
    ["Sağ Bek", "Stoper"],
    ["1 Ocak 1972"],
    ["Dünya Kupası kazandı", "Euro kazandı", "Juventus dönemi", "Savunma gücü"]
  ),

  f(
    199,
    "Franck Ribéry",
    ["ribery", "ribéry", "franck ribery", "franck ribéry"],
    ["Metz", "Galatasaray", "Marseille", "Bayern Münih", "Fiorentina", "Salernitana"],
    ["Fransız"],
    ["Sol Kanat", "Sağ Kanat"],
    ["7 Nisan 1983"],
    ["Bayern Münih efsanesi", "Şampiyonlar Ligi kazandı", "Galatasaray'da oynadı", "Dripling"]
  ),

  f(
    200,
    "Dani Alves",
    ["dani alves", "daniel alves"],
    ["Bahia", "Sevilla", "Barcelona", "Juventus", "PSG", "São Paulo"],
    ["Brezilyalı"],
    ["Sağ Bek"],
    ["6 Mayıs 1983"],
    ["Barcelona efsanesi", "Şampiyonlar Ligi kazandı", "Çok kupa kazandı", "Hücumcu sağ bek"]
  ),

  f(
    201,
    "Marc Overmars",
    ["overmars", "marc overmars"],
    ["Go Ahead Eagles", "Willem II", "Ajax", "Arsenal", "Barcelona"],
    ["Hollandalı"],
    ["Sol Kanat", "Sağ Kanat"],
    ["29 Mart 1973"],
    ["Hızlı kanat", "Ajax ile Şampiyonlar Ligi kazandı", "Arsenal dönemi", "Barcelona'da oynadı"]
  ),

  f(
    202,
    "Tony Adams",
    ["tony adams", "adams"],
    ["Arsenal"],
    ["İngiliz"],
    ["Stoper"],
    ["10 Ekim 1966"],
    ["Tek kulüp efsanesi", "Arsenal kaptanı", "Lider stoper", "Premier League şampiyonu"]
  ),

  f(
    203,
    "David Seaman",
    ["david seaman", "seaman"],
    ["Leeds United", "Peterborough United", "Birmingham City", "Queens Park Rangers", "Arsenal", "Manchester City"],
    ["İngiliz"],
    ["Kaleci"],
    ["19 Eylül 1963"],
    ["Arsenal efsanesi", "Refleks", "Premier League şampiyonu", "İngiltere milli kalecisi"]
  ),

  f(
    204,
    "Emmanuel Petit",
    ["emmanuel petit", "petit"],
    ["Monaco", "Arsenal", "Barcelona", "Chelsea"],
    ["Fransız"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["22 Eylül 1970"],
    ["Dünya Kupası kazandı", "Arsenal dönemi", "Sol ayak", "1998 finalinde gol attı"]
  ),

  f(
    205,
    "Marc-André ter Stegen",
    ["ter stegen", "marc andre ter stegen", "marc-andré ter stegen"],
    ["Borussia Mönchengladbach", "Barcelona"],
    ["Alman"],
    ["Kaleci"],
    ["30 Nisan 1992"],
    ["Barcelona kalecisi", "Refleks", "Ayakla oyun kurma", "Şampiyonlar Ligi kazandı"]
  ),

  f(
    206,
    "Virgil van Dijk",
    ["van dijk", "virgil van dijk"],
    ["Groningen", "Celtic", "Southampton", "Liverpool"],
    ["Hollandalı"],
    ["Stoper"],
    ["8 Temmuz 1991"],
    ["Liverpool savunma lideri", "Şampiyonlar Ligi kazandı", "Hava topları", "Güçlü fizik"]
  ),

  f(
    207,
    "Trent Alexander-Arnold",
    ["trent", "trent alexander arnold", "trent alexander-arnold"],
    ["Liverpool", "Real Madrid"],
    ["İngiliz"],
    ["Sağ Bek", "Orta Saha"],
    ["7 Ekim 1998"],
    ["Orta açma", "Uzun pas", "Liverpool çıkışlı", "Şampiyonlar Ligi kazandı"]
  ),

  f(
    208,
    "Andy Robertson",
    ["andy robertson", "robertson"],
    ["Queen's Park", "Dundee United", "Hull City", "Liverpool"],
    ["İskoç"],
    ["Sol Bek"],
    ["11 Mart 1994"],
    ["Liverpool dönemi", "Bindirmeler", "Şampiyonlar Ligi kazandı", "Yüksek enerji"]
  ),

  f(
    209,
    "Marcelo",
    ["marcelo", "marcelo vieira"],
    ["Fluminense", "Real Madrid", "Olympiacos"],
    ["Brezilyalı"],
    ["Sol Bek"],
    ["12 Mayıs 1988"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Teknik sol bek", "Hücumcu bek"]
  ),

  f(
    210,
    "Pepe",
    ["pepe", "kepler laveran de lima ferreira"],
    ["Marítimo", "Porto", "Real Madrid", "Beşiktaş"],
    ["Portekizli"],
    ["Stoper"],
    ["26 Şubat 1983"],
    ["Real Madrid dönemi", "Euro 2016 kazandı", "Sert savunma", "Porto efsanesi"]
  ),

  f(
    211,
    "Raphaël Varane",
    ["varane", "raphael varane", "raphaël varane"],
    ["Lens", "Real Madrid", "Manchester United", "Como"],
    ["Fransız"],
    ["Stoper"],
    ["25 Nisan 1993"],
    ["Dünya Kupası kazandı", "Real Madrid dönemi", "Şampiyonlar Ligi kazandı", "Hızlı stoper"]
  ),

  f(
    212,
    "Gerard Piqué",
    ["pique", "piqué", "gerard pique", "gerard piqué"],
    ["Manchester United", "Real Zaragoza", "Barcelona"],
    ["İspanyol"],
    ["Stoper"],
    ["2 Şubat 1987"],
    ["Dünya Kupası kazandı", "Barcelona efsanesi", "Şampiyonlar Ligi kazandı", "Oyun kuran stoper"]
  ),

  f(
    213,
    "Jordi Alba",
    ["jordi alba", "alba"],
    ["Valencia", "Barcelona", "Inter Miami"],
    ["İspanyol"],
    ["Sol Bek"],
    ["21 Mart 1989"],
    ["Barcelona dönemi", "Euro kazandı", "Hızlı bindirme", "Sol kanat ortaklığı"]
  ),

  f(
    214,
    "Ivan Rakitić",
    ["rakitic", "rakitić", "ivan rakitic", "ivan rakitić"],
    ["Basel", "Schalke 04", "Sevilla", "Barcelona", "Al Shabab", "Hajduk Split"],
    ["Hırvat"],
    ["Merkez Orta Saha"],
    ["10 Mart 1988"],
    ["Barcelona ile Şampiyonlar Ligi", "Sevilla efsanesi", "Pas ve şut", "Hırvatistan final kadrosu"]
  ),

  f(
    215,
    "Arturo Vidal",
    ["arturo vidal", "vidal"],
    ["Colo-Colo", "Bayer Leverkusen", "Juventus", "Bayern Münih", "Barcelona", "Inter", "Flamengo", "Athletico Paranaense"],
    ["Şilili"],
    ["Merkez Orta Saha"],
    ["22 Mayıs 1987"],
    ["Box-to-box", "Juventus ve Bayern dönemi", "Copa América kazandı", "Mücadele gücü"]
  ),

  f(
    216,
    "Casemiro",
    ["casemiro", "carlos casemiro"],
    ["São Paulo", "Real Madrid", "Porto", "Manchester United"],
    ["Brezilyalı"],
    ["Ön Libero"],
    ["23 Şubat 1992"],
    ["Real Madrid efsanesi", "Şampiyonlar Ligi kazandı", "Top kapma", "Savunma dengesi"]
  ),

  f(
    217,
    "Marcelo Brozović",
    ["brozovic", "brozović", "marcelo brozovic", "marcelo brozović"],
    ["Hrvatski Dragovoljac", "Lokomotiva Zagreb", "Dinamo Zagreb", "Inter", "Al Nassr"],
    ["Hırvat"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["16 Kasım 1992"],
    ["Inter dönemi", "Hırvatistan final kadrosu", "Pas oyunu", "Tempo kontrolü"]
  ),

  f(
    218,
    "N'Golo Kanté",
    ["kante", "kanté", "ngolo kante", "n'golo kanté", "n'golo kante"],
    ["Boulogne", "Caen", "Leicester City", "Chelsea", "Al Ittihad"],
    ["Fransız"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["29 Mart 1991"],
    ["Dünya Kupası kazandı", "Leicester mucizesi", "Chelsea ile Şampiyonlar Ligi", "Top kapma ustası"]
  ),

  f(
    219,
    "Eden Hazard",
    ["hazard", "eden hazard"],
    ["Lille", "Chelsea", "Real Madrid"],
    ["Belçikalı"],
    ["Sol Kanat", "Ofansif Orta Saha"],
    ["7 Ocak 1991"],
    ["Chelsea efsanesi", "Premier League şampiyonu", "Dripling", "Belçika altın jenerasyonu"]
  ),

  f(
    220,
    "Gareth Bale",
    ["bale", "gareth bale"],
    ["Southampton", "Tottenham", "Real Madrid", "Los Angeles FC"],
    ["Galli"],
    ["Sağ Kanat", "Sol Kanat"],
    ["16 Temmuz 1989"],
    ["Real Madrid dönemi", "Şampiyonlar Ligi final golleri", "Hız", "Galli yıldız"]
  ),

  f(
    221,
    "Son Heung-min",
    ["son", "son heung min", "son heung-min", "heung min son"],
    ["Hamburger SV", "Bayer Leverkusen", "Tottenham Hotspur"],
    ["Güney Koreli"],
    ["Sol Kanat", "Forvet"],
    ["8 Temmuz 1992"],
    ["Premier League gol kralı", "Tottenham yıldızı", "Çift ayak", "Asya futbol ikonu"]
  ),

  f(
    222,
    "Harry Kane",
    ["harry kane", "kane"],
    ["Tottenham Hotspur", "Leyton Orient", "Millwall", "Norwich City", "Leicester City", "Bayern Münih"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["28 Temmuz 1993"],
    ["İngiltere golcüsü", "Premier League gol kralı", "Bağlantı oyunu", "Penaltı uzmanı"]
  ),

  f(
    223,
    "Jude Bellingham",
    ["bellingham", "jude bellingham"],
    ["Birmingham City", "Borussia Dortmund", "Real Madrid"],
    ["İngiliz"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["29 Haziran 2003"],
    ["Real Madrid yıldızı", "Golden Boy kazandı", "Box-to-box", "Genç yaşta liderlik"]
  ),

  f(
    224,
    "Vinícius Júnior",
    ["vinicius", "vinícius", "vinicius junior", "vinícius júnior", "vini"],
    ["Flamengo", "Real Madrid"],
    ["Brezilyalı"],
    ["Sol Kanat"],
    ["12 Temmuz 2000"],
    ["Real Madrid yıldızı", "Şampiyonlar Ligi final golü", "Hızlı dripling", "Sol kanat"]
  ),

  f(
    225,
    "Rodrygo",
    ["rodrygo", "rodrygo goes"],
    ["Santos", "Real Madrid"],
    ["Brezilyalı"],
    ["Sağ Kanat", "Sol Kanat", "Forvet"],
    ["9 Ocak 2001"],
    ["Real Madrid yıldızı", "Şampiyonlar Ligi geri dönüşleri", "Çok yönlü hücumcu", "Santos çıkışlı"]
  ),

  f(
    226,
    "Federico Valverde",
    ["valverde", "federico valverde", "fede valverde"],
    ["Peñarol", "Real Madrid"],
    ["Uruguaylı"],
    ["Merkez Orta Saha", "Sağ Kanat"],
    ["22 Temmuz 1998"],
    ["Real Madrid orta sahası", "Güçlü koşular", "Uzaktan şut", "Çok yönlü"]
  ),

  f(
    227,
    "Lautaro Martínez",
    ["lautaro", "lautaro martinez", "lautaro martínez"],
    ["Racing Club", "Inter"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["22 Ağustos 1997"],
    ["Dünya Kupası kazandı", "Inter kaptanı", "Serie A golcüsü", "Bitiricilik"]
  ),

  f(
    228,
    "Paulo Dybala",
    ["dybala", "paulo dybala", "la joya"],
    ["Instituto", "Palermo", "Juventus", "Roma"],
    ["Arjantinli"],
    ["Forvet Arkası", "10 Numara", "Forvet"],
    ["15 Kasım 1993"],
    ["La Joya lakabı", "Dünya Kupası kazandı", "Juventus dönemi", "Sol ayak"]
  ),

  f(
    229,
    "Gonzalo Higuaín",
    ["higuain", "higuaín", "gonzalo higuain", "gonzalo higuaín"],
    ["River Plate", "Real Madrid", "Napoli", "Juventus", "Milan", "Chelsea", "Inter Miami"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["10 Aralık 1987"],
    ["Serie A gol rekoru sezonu", "Real Madrid ve Napoli", "Bitiricilik", "Pipita lakabı"]
  ),

  f(
    230,
    "Edinson Cavani",
    ["cavani", "edinson cavani", "el matador"],
    ["Danubio", "Palermo", "Napoli", "PSG", "Manchester United", "Valencia", "Boca Juniors"],
    ["Uruguaylı"],
    ["Forvet", "Santrfor"],
    ["14 Şubat 1987"],
    ["El Matador lakabı", "PSG golcüsü", "Napoli dönemi", "Bitiricilik"]
  ),

  f(
    231,
    "Diego Forlán",
    ["forlan", "forlán", "diego forlan", "diego forlán"],
    ["Independiente", "Manchester United", "Villarreal", "Atlético Madrid", "Inter", "Internacional", "Cerezo Osaka"],
    ["Uruguaylı"],
    ["Forvet", "Santrfor"],
    ["19 Mayıs 1979"],
    ["Dünya Kupası 2010 yıldızı", "Altın Top kazandı", "Villarreal ve Atlético dönemi", "Çift ayak"]
  ),

  f(
    232,
    "Diego Godín",
    ["godin", "godín", "diego godin", "diego godín"],
    ["Cerro", "Nacional", "Villarreal", "Atlético Madrid", "Inter", "Cagliari", "Vélez Sarsfield"],
    ["Uruguaylı"],
    ["Stoper"],
    ["16 Şubat 1986"],
    ["Atlético Madrid efsanesi", "Savunma lideri", "Hava topları", "Uruguay kaptanı"]
  ),

  f(
    233,
    "Diego Simeone",
    ["simeone", "diego simeone", "cholo"],
    ["Vélez Sarsfield", "Pisa", "Sevilla", "Atlético Madrid", "Inter", "Lazio", "Racing Club"],
    ["Arjantinli"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["28 Nisan 1970"],
    ["Cholo lakabı", "Atlético Madrid figürü", "Mücadeleci orta saha", "Serie A kazandı"]
  ),

  f(
    234,
    "Juan Sebastián Verón",
    ["veron", "verón", "juan sebastian veron", "juan sebastián verón"],
    ["Estudiantes", "Boca Juniors", "Sampdoria", "Parma", "Lazio", "Manchester United", "Chelsea", "Inter"],
    ["Arjantinli"],
    ["Merkez Orta Saha"],
    ["9 Mart 1975"],
    ["Lazio dönemi", "Uzun pas", "Oyun kurucu", "Estudiantes efsanesi"]
  ),

  f(
    235,
    "Pablo Aimar",
    ["aimar", "pablo aimar", "el payaso"],
    ["River Plate", "Valencia", "Real Zaragoza", "Benfica", "Johor Darul Ta'zim"],
    ["Arjantinli"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["3 Kasım 1979"],
    ["El Payaso lakabı", "Valencia dönemi", "Teknik 10 numara", "Messi'nin sevdiği oyunculardan"]
  ),

  f(
    236,
    "Ariel Ortega",
    ["ortega", "ariel ortega", "el burrito"],
    ["River Plate", "Valencia", "Sampdoria", "Parma", "Fenerbahçe", "Newell's Old Boys"],
    ["Arjantinli"],
    ["Forvet Arkası", "Kanat"],
    ["4 Mart 1974"],
    ["El Burrito lakabı", "River Plate efsanesi", "Fenerbahçe'de oynadı", "Dripling"]
  ),

  f(
    237,
    "Claudio Caniggia",
    ["caniggia", "claudio caniggia"],
    ["River Plate", "Hellas Verona", "Atalanta", "Roma", "Benfica", "Boca Juniors", "Dundee", "Rangers"],
    ["Arjantinli"],
    ["Forvet", "Kanat"],
    ["9 Ocak 1967"],
    ["Hızlı forvet", "Maradona ile ikili", "1990 Dünya Kupası golü", "Uzun saçlarıyla anılır"]
  ),

  f(
    238,
    "Javier Saviola",
    ["saviola", "javier saviola", "el conejo"],
    ["River Plate", "Barcelona", "Monaco", "Sevilla", "Real Madrid", "Benfica", "Málaga", "Olympiacos"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["11 Aralık 1981"],
    ["El Conejo (tavşan) lakabı", "Barca'da 7 Numara giyiyordu", "Kısa boylu golcü", "Çok hızlı"]
  ),

  f(
    239,
    "Roberto Ayala",
    ["ayala", "roberto ayala"],
    ["Ferro Carril Oeste", "River Plate", "Napoli", "Milan", "Valencia", "Real Zaragoza", "Racing Club"],
    ["Arjantinli"],
    ["Stoper"],
    ["14 Nisan 1973"],
    ["Valencia efsanesi", "Savunma lideri", "Arjantin kaptanı", "Hava topları"]
  ),

  f(
    240,
    "Walter Samuel",
    ["walter samuel", "samuel", "the wall"],
    ["Newell's Old Boys", "Boca Juniors", "Roma", "Real Madrid", "Inter", "Basel"],
    ["Arjantinli"],
    ["Stoper"],
    ["23 Mart 1978"],
    ["The Wall lakabı", "Inter ile Şampiyonlar Ligi", "Sert savunma", "Roma dönemi"]
  ),

  f(
    241,
    "Gabriel Heinze",
    ["heinze", "gabriel heinze"],
    ["Newell's Old Boys", "Valladolid", "PSG", "Manchester United", "Real Madrid", "Marseille", "Roma"],
    ["Arjantinli"],
    ["Sol Bek", "Stoper"],
    ["19 Nisan 1978"],
    ["Manchester United ve Real Madrid", "Sert savunma", "Çok yönlü defans", "Arjantin milli takımı"]
  ),

  f(
    242,
    "Ezequiel Lavezzi",
    ["lavezzi", "ezequiel lavezzi", "pocho"],
    ["Estudiantes", "San Lorenzo", "Napoli", "PSG", "Hebei China Fortune"],
    ["Arjantinli"],
    ["Kanat", "Forvet"],
    ["3 Mayıs 1985"],
    ["Pocho lakabı", "Napoli ve PSG", "Hızlı hücumcu", "Dripling"]
  ),

  f(
    243,
    "Marcelo Salas",
    ["salas", "marcelo salas", "el matador salas"],
    ["Universidad de Chile", "River Plate", "Lazio", "Juventus"],
    ["Şilili"],
    ["Forvet", "Santrfor"],
    ["24 Aralık 1974"],
    ["El Matador lakabı", "Lazio ve Juventus", "Şili efsanesi", "Bitiricilik"]
  ),

  f(
    244,
    "Iván Zamorano",
    ["zamorano", "ivan zamorano", "iván zamorano"],
    ["Cobresal", "St. Gallen", "Sevilla", "Real Madrid", "Inter", "América"],
    ["Şilili"],
    ["Forvet", "Santrfor"],
    ["18 Ocak 1967"],
    ["Real Madrid golcüsü", "Inter dönemi", "1+8 forma numarası", "Kafa vuruşu"]
  ),

  f(
    245,
    "Alexis Sánchez",
    ["alexis sanchez", "alexis sánchez", "sanchez", "sánchez"],
    ["Cobreloa", "Colo-Colo", "River Plate", "Udinese", "Barcelona", "Arsenal", "Manchester United", "Inter", "Marseille"],
    ["Şilili"],
    ["Forvet", "Kanat"],
    ["19 Aralık 1988"],
    ["Copa América kazandı", "Arsenal dönemi", "Çok yönlü hücumcu", "Şili efsanesi"]
  ),

  f(
    246,
    "Claudio Bravo",
    ["claudio bravo", "bravo"],
    ["Colo-Colo", "Real Sociedad", "Barcelona", "Manchester City", "Real Betis"],
    ["Şilili"],
    ["Kaleci"],
    ["13 Nisan 1983"],
    ["Copa América kazandı", "Barcelona ile Şampiyonlar Ligi", "Ayakla oyun", "Şili kaptanı"]
  ),

  f(
    247,
    "Enzo Francescoli",
    ["francescoli", "enzo francescoli", "el principe"],
    ["Montevideo Wanderers", "River Plate", "Racing Paris", "Marseille", "Cagliari", "Torino"],
    ["Uruguaylı"],
    ["10 Numara", "Forvet Arkası"],
    ["12 Kasım 1961"],
    ["El Príncipe lakabı", "River Plate efsanesi", "Uruguay ikonu", "Zidane'a ilham verdi"]
  ),

  f(
    248,
    "Teófilo Cubillas",
    ["cubillas", "teofilo cubillas", "teófilo cubillas"],
    ["Alianza Lima", "Basel", "Porto", "Fort Lauderdale Strikers"],
    ["Perulu"],
    ["Ofansif Orta Saha", "Forvet"],
    ["8 Mart 1949"],
    ["Peru efsanesi", "Dünya Kupası golleri", "Frikik", "Teknik 10 numara"]
  ),

  f(
    249,
    "Paolo Guerrero",
    ["paolo guerrero", "guerrero"],
    ["Bayern Münih", "Hamburger SV", "Corinthians", "Flamengo", "Internacional", "Racing Club"],
    ["Perulu"],
    ["Forvet", "Santrfor"],
    ["1 Ocak 1984"],
    ["Peru golcüsü", "Copa América yıldızı", "Bayern çıkışlı", "Bitiricilik"]
  ),

  f(
    250,
    "Carlos Valderrama",
    ["valderrama", "carlos valderrama", "el pibe"],
    ["Unión Magdalena", "Millonarios", "Deportivo Cali", "Montpellier", "Real Valladolid", "Tampa Bay Mutiny"],
    ["Kolombiyalı"],
    ["10 Numara", "Orta Saha"],
    ["2 Eylül 1961"],
    ["El Pibe lakabı", "Sarı kıvırcık saç", "Kolombiya efsanesi", "Pas ustası"]
  ),

  f(
    251,
    "Radamel Falcao",
    ["falcao", "radamel falcao", "el tigre"],
    ["Lanceros Boyacá", "River Plate", "Porto", "Atlético Madrid", "Monaco", "Manchester United", "Chelsea", "Galatasaray", "Rayo Vallecano"],
    ["Kolombiyalı"],
    ["Forvet", "Santrfor"],
    ["10 Şubat 1986"],
    ["El Tigre lakabı", "Porto ve Atlético dönemi", "Galatasaray'da oynadı", "Ceza sahası golcüsü"]
  ),

  f(
    252,
    "James Rodríguez",
    ["james rodriguez", "james rodríguez", "james"],
    ["Envigado", "Banfield", "Porto", "Monaco", "Real Madrid", "Bayern Münih", "Everton", "Olympiacos", "São Paulo", "Rayo Vallecano"],
    ["Kolombiyalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["12 Temmuz 1991"],
    ["2014 Dünya Kupası gol kralı", "Real Madrid dönemi", "Sol ayak", "Uzaktan vole golü"]
  ),

  f(
    253,
    "René Higuita",
    ["higuita", "rene higuita", "rené higuita"],
    ["Millonarios", "Atlético Nacional", "Real Valladolid", "Veracruz"],
    ["Kolombiyalı"],
    ["Kaleci"],
    ["27 Ağustos 1966"],
    ["Akrep kurtarışı", "Libero kaleci", "Kolombiya efsanesi", "Riskli oyun tarzı"]
  ),

  f(
    254,
    "Bebeto",
    ["bebeto", "jose roberto gama de oliveira"],
    ["Flamengo", "Vasco da Gama", "Deportivo La Coruña", "Sevilla", "Botafogo"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["16 Şubat 1964"],
    ["Dünya Kupası kazandı", "Bebek sallama sevinci", "Deportivo dönemi", "Bitiricilik"]
  ),

  f(
    255,
    "Dunga",
    ["dunga", "carlos caetano bledorn verri"],
    ["Internacional", "Corinthians", "Santos", "Vasco da Gama", "Pisa", "Fiorentina", "Stuttgart", "Júbilo Iwata"],
    ["Brezilyalı"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["31 Ekim 1963"],
    ["Dünya Kupası kazandı", "Brezilya kaptanı", "Savunma disiplini", "Liderlik"]
  ),

  f(
    256,
    "Cláudio Taffarel",
    ["taffarel", "claudio taffarel", "cláudio taffarel"],
    ["Internacional", "Parma", "Reggiana", "Atlético Mineiro", "Galatasaray"],
    ["Brezilyalı"],
    ["Kaleci"],
    ["8 Mayıs 1966"],
    ["Dünya Kupası kazandı", "Galatasaray efsanesi", "UEFA Kupası kazandı", "Penaltı kurtarışları"]
  ),

  f(
    257,
    "Júlio César",
    ["julio cesar", "júlio césar"],
    ["Flamengo", "Inter", "Queens Park Rangers", "Toronto FC", "Benfica"],
    ["Brezilyalı"],
    ["Kaleci"],
    ["3 Eylül 1979"],
    ["Inter ile Şampiyonlar Ligi", "Brezilya kalecisi", "Refleks", "Benfica dönemi"]
  ),

  f(
    258,
    "Dida",
    ["dida", "nelson de jesus silva"],
    ["Vitória", "Cruzeiro", "Milan", "Corinthians", "Portuguesa", "Grêmio", "Internacional"],
    ["Brezilyalı"],
    ["Kaleci"],
    ["7 Ekim 1973"],
    ["Dünya Kupası kazandı", "Milan ile Şampiyonlar Ligi", "Penaltı kurtarışları", "Uzun boylu kaleci"]
  ),

  f(
    259,
    "Maicon",
    ["maicon", "maicon douglas sisenando"],
    ["Cruzeiro", "Monaco", "Inter", "Manchester City", "Roma"],
    ["Brezilyalı"],
    ["Sağ Bek"],
    ["26 Temmuz 1981"],
    ["Inter efsanesi", "Şampiyonlar Ligi kazandı", "Hücumcu sağ bek", "Güçlü koşular"]
  ),

  f(
    260,
    "Lúcio",
    ["lucio", "lúcio"],
    ["Internacional", "Bayer Leverkusen", "Bayern Münih", "Inter", "Juventus"],
    ["Brezilyalı"],
    ["Stoper"],
    ["8 Mayıs 1978"],
    ["Dünya Kupası kazandı", "Inter ile Şampiyonlar Ligi", "Topla çıkan stoper", "Fizik güç"]
  ),

  f(
    261,
    "Aldair",
    ["aldair"],
    ["Flamengo", "Benfica", "Roma", "Genoa"],
    ["Brezilyalı"],
    ["Stoper"],
    ["30 Kasım 1965"],
    ["Dünya Kupası kazandı", "Roma efsanesi", "Savunma zekası", "Brezilya stoperi"]
  ),

  f(
    262,
    "Thiago Silva",
    ["thiago silva"],
    ["Juventude", "Porto", "Dynamo Moscow", "Fluminense", "Milan", "PSG", "Chelsea"],
    ["Brezilyalı"],
    ["Stoper"],
    ["22 Eylül 1984"],
    ["Chelsea ile Şampiyonlar Ligi", "PSG kaptanı", "Savunma lideri", "Pozisyon bilgisi"]
  ),

  f(
    263,
    "Fernandinho",
    ["fernandinho", "fernando luiz roza"],
    ["Atlético Paranaense", "Shakhtar Donetsk", "Manchester City", "Athletico Paranaense"],
    ["Brezilyalı"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["4 Mayıs 1985"],
    ["Manchester City dönemi", "Premier League şampiyonu", "Savunma dengesi", "Pas oyunu"]
  ),

  f(
    264,
    "Roberto Firmino",
    ["firmino", "roberto firmino", "bobby firmino"],
    ["Figueirense", "Hoffenheim", "Liverpool", "Al Ahli"],
    ["Brezilyalı"],
    ["Forvet", "Forvet Arkası"],
    ["2 Ekim 1991"],
    ["Liverpool ile Şampiyonlar Ligi", "Sahte 9 rolü", "Pres", "Bobby lakabı"]
  ),

  f(
    265,
    "Gabriel Jesus",
    ["gabriel jesus", "jesus"],
    ["Palmeiras", "Manchester City", "Arsenal"],
    ["Brezilyalı"],
    ["Forvet", "Kanat"],
    ["3 Nisan 1997"],
    ["Premier League şampiyonu", "Palmeiras çıkışlı", "Pres gücü", "Çok yönlü hücumcu"]
  ),

  f(
    266,
    "Raphinha",
    ["raphinha", "raphael dias belloli"],
    ["Avaí", "Vitória Guimarães", "Sporting CP", "Rennes", "Leeds United", "Barcelona"],
    ["Brezilyalı"],
    ["Sağ Kanat"],
    ["14 Aralık 1996"],
    ["Barcelona kanadı", "Sol ayak", "Hızlı dripling", "Brezilya milli takımı"]
  ),

  f(
    267,
    "Adriano",
    ["adriano", "adriano imperador", "imperador"],
    ["Flamengo", "Inter", "Parma", "Fiorentina", "Roma", "Corinthians"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["17 Şubat 1982"],
    ["Imperador lakabı", "Güçlü sol ayak", "Inter dönemi", "Fizik gücü"]
  ),

  f(
    268,
    "Hulk",
    ["hulk", "givanildo vieira de sousa"],
    ["Vitória", "Kawasaki Frontale", "Tokyo Verdy", "Porto", "Zenit", "Shanghai SIPG", "Atlético Mineiro"],
    ["Brezilyalı"],
    ["Forvet", "Kanat"],
    ["25 Temmuz 1986"],
    ["Güçlü şut", "Fizik gücü", "Porto ve Zenit dönemi", "Sol ayak"]
  ),

  f(
    269,
    "Oscar",
    ["oscar", "oscar dos santos"],
    ["São Paulo", "Internacional", "Chelsea", "Shanghai SIPG"],
    ["Brezilyalı"],
    ["Ofansif Orta Saha"],
    ["9 Eylül 1991"],
    ["Chelsea dönemi", "Dünya Kupası golü", "Teknik orta saha", "Uzaktan şut"]
  ),

  f(
    270,
    "Philippe Coutinho",
    ["coutinho", "philippe coutinho"],
    ["Vasco da Gama", "Inter", "Espanyol", "Liverpool", "Barcelona", "Bayern Münih", "Aston Villa", "Al Duhail"],
    ["Brezilyalı"],
    ["Ofansif Orta Saha", "Sol Kanat"],
    ["12 Haziran 1992"],
    ["Liverpool dönemi", "Uzaktan plase", "Bayern ile Şampiyonlar Ligi", "Sol ayak"]
  ),

  f(
    271,
    "Juninho Pernambucano",
    ["juninho", "juninho pernambucano"],
    ["Sport Recife", "Vasco da Gama", "Lyon", "Al Gharafa", "New York Red Bulls"],
    ["Brezilyalı"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["30 Ocak 1975"],
    ["Frikik efsanesi", "Lyon efsanesi", "Duran top ustası", "Knuckleball şut"]
  ),

  f(
    272,
    "Denílson",
    ["denilson", "denílson"],
    ["São Paulo", "Real Betis", "Flamengo", "Bordeaux"],
    ["Brezilyalı"],
    ["Sol Kanat"],
    ["24 Ağustos 1977"],
    ["Dünya Kupası kazandı", "Çalım ustası", "Real Betis dönemi", "Samba kanadı"]
  ),

  f(
    273,
    "Leonardo",
    ["leonardo", "leonardo araujo", "leonardo araújo"],
    ["Flamengo", "São Paulo", "Valencia", "PSG", "Milan"],
    ["Brezilyalı"],
    ["Sol Kanat", "Sol Bek", "Ofansif Orta Saha"],
    ["5 Eylül 1969"],
    ["Dünya Kupası kazandı", "Milan ve PSG", "Çok yönlü", "Sol ayak"]
  ),

  f(
    274,
    "Mauro Silva",
    ["mauro silva"],
    ["Guarani", "Bragantino", "Deportivo La Coruña"],
    ["Brezilyalı"],
    ["Ön Libero"],
    ["12 Ocak 1968"],
    ["Dünya Kupası kazandı", "Deportivo efsanesi", "Savunma dengesi", "Top kapma"]
  ),

  f(
    275,
    "Djalminha",
    ["djalminha"],
    ["Flamengo", "Guarani", "Palmeiras", "Deportivo La Coruña", "Austria Wien"],
    ["Brezilyalı"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["9 Aralık 1970"],
    ["Deportivo efsanesi", "Teknik 10 numara", "Elastik hareketler", "Sol ayak"]
  ),

  f(
    276,
    "Edmundo",
    ["edmundo", "edmundo alves de souza neto"],
    ["Vasco da Gama", "Palmeiras", "Flamengo", "Fiorentina", "Napoli"],
    ["Brezilyalı"],
    ["Forvet"],
    ["2 Nisan 1971"],
    ["Animal lakabı", "Brezilya golcüsü", "Vasco efsanesi", "Agresif karakter"]
  ),

  f(
    277,
    "Robinho",
    ["robinho"],
    ["Santos", "Real Madrid", "Manchester City", "Milan", "Guangzhou Evergrande", "Atlético Mineiro"],
    ["Brezilyalı"],
    ["Forvet", "Kanat"],
    ["25 Ocak 1984"],
    ["Santos çıkışlı", "Dripling", "Real Madrid ve Milan", "Çalım yeteneği"]
  ),

  f(
    278,
    "Fred",
    ["fred", "frederico chaves guedes"],
    ["América Mineiro", "Cruzeiro", "Lyon", "Fluminense", "Atlético Mineiro"],
    ["Brezilyalı"],
    ["Forvet", "Santrfor"],
    ["3 Ekim 1983"],
    ["Lyon ve Fluminense", "Brezilya golcüsü", "Ceza sahası oyuncusu", "Kafa vuruşu"]
  ),

  f(
    279,
    "Gary Lineker",
    ["gary lineker", "lineker"],
    ["Leicester City", "Everton", "Barcelona", "Tottenham Hotspur", "Nagoya Grampus"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["30 Kasım 1960"],
    ["1986 Dünya Kupası gol kralı", "Barcelona'da oynadı", "Temiz oyunuyla bilinir", "Bitiricilik"]
  ),

  f(
    280,
    "Paul Gascoigne",
    ["paul gascoigne", "gascoigne", "gazza"],
    ["Newcastle United", "Tottenham Hotspur", "Lazio", "Rangers", "Middlesbrough", "Everton"],
    ["İngiliz"],
    ["Orta Saha", "Ofansif Orta Saha"],
    ["27 Mayıs 1967"],
    ["Gazza lakabı", "Teknik orta saha", "Euro 1996 golü", "Karizmatik figür"]
  ),

  f(
    281,
    "Bryan Robson",
    ["bryan robson", "robson"],
    ["West Bromwich Albion", "Manchester United", "Middlesbrough"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["11 Ocak 1957"],
    ["Captain Marvel lakabı", "Manchester United kaptanı", "Box-to-box", "Liderlik"]
  ),

  f(
    282,
    "Gary Neville",
    ["gary neville", "neville"],
    ["Manchester United"],
    ["İngiliz"],
    ["Sağ Bek"],
    ["18 Şubat 1975"],
    ["Tek kulüp efsanesi", "Manchester United", "Şampiyonlar Ligi kazandı", "Savunma disiplini"]
  ),

  f(
    283,
    "Ashley Cole",
    ["ashley cole"],
    ["Arsenal", "Chelsea", "Roma", "LA Galaxy", "Derby County"],
    ["İngiliz"],
    ["Sol Bek"],
    ["20 Aralık 1980"],
    ["Premier League efsanesi", "Chelsea ile Şampiyonlar Ligi", "Savunmacı sol bek", "Arsenal invincibles"]
  ),

  f(
    284,
    "Sol Campbell",
    ["sol campbell", "campbell"],
    ["Tottenham Hotspur", "Arsenal", "Portsmouth", "Notts County", "Newcastle United"],
    ["İngiliz"],
    ["Stoper"],
    ["18 Eylül 1974"],
    ["Arsenal invincibles (yenilzmezler) kadrosunda", "Güçlü stoper", "Tottenham'dan Arsenal'e geçti", "Hava topları"]
  ),

  f(
    285,
    "Jamie Carragher",
    ["jamie carragher", "carragher"],
    ["Liverpool"],
    ["İngiliz"],
    ["Stoper", "Sağ Bek"],
    ["28 Ocak 1978"],
    ["Tek kulüp efsanesi", "Liverpool savunması", "İstanbul finali", "Mücadeleci"]
  ),

  f(
    286,
    "David Platt",
    ["david platt", "platt"],
    ["Crewe Alexandra", "Aston Villa", "Bari", "Juventus", "Sampdoria", "Arsenal"],
    ["İngiliz"],
    ["Orta Saha"],
    ["10 Haziran 1966"],
    ["Golcü orta saha", "İtalya'da oynadı", "İngiltere milli takımı", "Ceza sahasına koşular"]
  ),

  f(
    287,
    "Ian Wright",
    ["ian wright", "wright"],
    ["Crystal Palace", "Arsenal", "West Ham", "Nottingham Forest", "Celtic", "Burnley"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["3 Kasım 1963"],
    ["Arsenal efsanesi", "Golcü", "Geç yaşta parladı", "Bitiricilik"]
  ),

  f(
    288,
    "Robbie Fowler",
    ["robbie fowler", "fowler"],
    ["Liverpool", "Leeds United", "Manchester City", "Cardiff City", "Blackburn Rovers"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["9 Nisan 1975"],
    ["Liverpool golcüsü", "God lakabı", "Sol ayak", "Premier League bitiricisi"]
  ),

  f(
    289,
    "Teddy Sheringham",
    ["teddy sheringham", "sheringham"],
    ["Millwall", "Nottingham Forest", "Tottenham Hotspur", "Manchester United", "Portsmouth", "West Ham", "Colchester United"],
    ["İngiliz"],
    ["Forvet", "Forvet Arkası"],
    ["2 Nisan 1966"],
    ["Manchester United treble kadrosu", "1999 finalinde gol attı", "Zeki forvet", "Bağlantı oyunu"]
  ),

  f(
    290,
    "Andy Cole",
    ["andy cole"],
    ["Arsenal", "Newcastle United", "Manchester United", "Blackburn Rovers", "Fulham", "Manchester City"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["15 Ekim 1971"],
    ["Manchester United golcüsü", "Treble kazandı", "Premier League golcüsü", "Bitiricilik"]
  ),

  f(
    291,
    "Dwight Yorke",
    ["dwight yorke", "yorke"],
    ["Aston Villa", "Manchester United", "Blackburn Rovers", "Birmingham City", "Sydney FC", "Sunderland"],
    ["Trinidad ve Tobagolu"],
    ["Forvet", "Santrfor"],
    ["3 Kasım 1971"],
    ["Manchester United treble kadrosu", "Andy Cole ile ikili", "Karizmatik forvet", "Bitiricilik"]
  ),

  f(
    292,
    "Ole Gunnar Solskjær",
    ["solskjaer", "solskjær", "ole gunnar solskjaer", "ole gunnar solskjær"],
    ["Clausenengen", "Molde", "Manchester United"],
    ["Norveçli"],
    ["Forvet"],
    ["26 Şubat 1973"],
    ["1999 final golü", "Süper yedek lakabı", "Manchester United efsanesi", "Bitiricilik"]
  ),

  f(
    293,
    "Jaap Stam",
    ["jaap stam", "stam"],
    ["Willem II", "PSV", "Manchester United", "Lazio", "Milan", "Ajax"],
    ["Hollandalı"],
    ["Stoper"],
    ["17 Temmuz 1972"],
    ["Manchester United treble kadrosu", "Güçlü stoper", "PSV ve Milan", "Sert savunma"]
  ),

  f(
    294,
    "Ruud Krol",
    ["ruud krol", "krol"],
    ["Ajax", "Vancouver Whitecaps", "Napoli", "Cannes"],
    ["Hollandalı"],
    ["Sol Bek", "Stoper", "Libero"],
    ["24 Mart 1949"],
    ["Total futbol dönemi", "Ajax efsanesi", "Çok yönlü savunmacı", "Avrupa Kupası kazandı"]
  ),

  f(
    295,
    "Ronald Koeman",
    ["ronald koeman", "koeman"],
    ["Groningen", "Ajax", "PSV", "Barcelona", "Feyenoord"],
    ["Hollandalı"],
    ["Stoper", "Libero"],
    ["21 Mart 1963"],
    ["Barcelona final golü", "Frikik atan savunmacı", "Avrupa Kupası kazandı", "Güçlü şut"]
  ),

  f(
    296,
    "Frank de Boer",
    ["frank de boer", "de boer"],
    ["Ajax", "Barcelona", "Galatasaray", "Rangers", "Al Rayyan", "Al Shamal"],
    ["Hollandalı"],
    ["Stoper", "Sol Bek"],
    ["15 Mayıs 1970"],
    ["Ajax ile Şampiyonlar Ligi", "Barcelona'da oynadı", "Galatasaray'da oynadı", "Oyun kuran savunmacı"]
  ),

  f(
    297,
    "Phillip Cocu",
    ["phillip cocu", "cocu"],
    ["AZ", "Vitesse", "PSV", "Barcelona", "Al Jazira"],
    ["Hollandalı"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["29 Ekim 1970"],
    ["PSV efsanesi", "Barcelona'da oynadı", "Çok yönlü orta saha", "Liderlik"]
  ),

  f(
    298,
    "Mark van Bommel",
    ["mark van bommel", "van bommel"],
    ["Fortuna Sittard", "PSV", "Barcelona", "Bayern Münih", "Milan"],
    ["Hollandalı"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["22 Nisan 1977"],
    ["Barcelona ile Şampiyonlar Ligi", "PSV ve Bayern", "Sert orta saha", "Liderlik"]
  ),

  f(
    299,
    "Memphis Depay",
    ["memphis", "memphis depay", "depay"],
    ["PSV", "Manchester United", "Lyon", "Barcelona", "Atlético Madrid", "Corinthians"],
    ["Hollandalı"],
    ["Forvet", "Sol Kanat"],
    ["13 Şubat 1994"],
    ["PSV çıkışlı", "Lyon dönemi", "Sol ayak", "Hollanda milli takımı"]
  ),

  f(
    300,
    "Frenkie de Jong",
    ["frenkie de jong", "de jong"],
    ["Willem II", "Ajax", "Barcelona"],
    ["Hollandalı"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["12 Mayıs 1997"],
    ["Ajax 2019 jenerasyonu", "Barcelona orta sahası", "Topla çıkış", "Pas oyunu"]
  ),

  f(
    301,
    "Matthijs de Ligt",
    ["de ligt", "matthijs de ligt"],
    ["Ajax", "Juventus", "Bayern Münih", "Manchester United"],
    ["Hollandalı"],
    ["Stoper"],
    ["12 Ağustos 1999"],
    ["Ajax kaptanı", "Golden Boy kazandı", "Güçlü stoper", "Hava topları"]
  ),

  f(
    302,
    "Claudio Marchisio",
    ["marchisio", "claudio marchisio", "principino"],
    ["Juventus", "Empoli", "Zenit"],
    ["İtalyan"],
    ["Merkez Orta Saha"],
    ["19 Ocak 1986"],
    ["Juventus efsanesi", "Principino lakabı", "Box-to-box", "İtalyan orta saha"]
  ),

  f(
    303,
    "Daniele De Rossi",
    ["de rossi", "daniele de rossi"],
    ["Roma", "Boca Juniors"],
    ["İtalyan"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["24 Temmuz 1983"],
    ["Dünya Kupası kazandı", "Roma efsanesi", "Mücadeleci orta saha", "Liderlik"]
  ),

  f(
    304,
    "Francesco Toldo",
    ["toldo", "francesco toldo"],
    ["Verona", "Trento", "Ravenna", "Fiorentina", "Inter"],
    ["İtalyan"],
    ["Kaleci"],
    ["2 Aralık 1971"],
    ["Inter kalecisi", "Euro 2000 performansı", "Penaltı kurtarışları", "Fiorentina dönemi"]
  ),

  f(
    305,
    "Gianluca Pagliuca",
    ["pagliuca", "gianluca pagliuca"],
    ["Sampdoria", "Inter", "Bologna", "Ascoli"],
    ["İtalyan"],
    ["Kaleci"],
    ["18 Aralık 1966"],
    ["Sampdoria ve Inter", "İtalya milli kalecisi", "Refleks", "Serie A efsanesi"]
  ),

  f(
    306,
    "Demetrio Albertini",
    ["albertini", "demetrio albertini"],
    ["Milan", "Atlético Madrid", "Lazio", "Atalanta", "Barcelona"],
    ["İtalyan"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["23 Ağustos 1971"],
    ["Milan efsanesi", "Şampiyonlar Ligi kazandı", "Pas oyunu", "Duran toplar"]
  ),

  f(
    307,
    "Dino Baggio",
    ["dino baggio"],
    ["Torino", "Inter", "Juventus", "Parma", "Lazio", "Blackburn Rovers"],
    ["İtalyan"],
    ["Merkez Orta Saha"],
    ["24 Temmuz 1971"],
    ["Parma dönemi", "UEFA Kupası kazandı", "Güçlü orta saha", "İtalya milli takımı"]
  ),

  f(
    308,
    "Antonio Conte",
    ["antonio conte", "conte"],
    ["Lecce", "Juventus"],
    ["İtalyan"],
    ["Merkez Orta Saha"],
    ["31 Temmuz 1969"],
    ["Juventus kaptanı", "Şampiyonlar Ligi kazandı", "Mücadeleci orta saha", "Liderlik"]
  ),

  f(
    309,
    "Gianluca Vialli",
    ["vialli", "gianluca vialli"],
    ["Cremonese", "Sampdoria", "Juventus", "Chelsea"],
    ["İtalyan"],
    ["Forvet", "Santrfor"],
    ["9 Temmuz 1964"],
    ["Sampdoria efsanesi", "Juventus ile Şampiyonlar Ligi", "Chelsea dönemi", "Bitiricilik"]
  ),

  f(
    310,
    "Roberto Mancini",
    ["mancini", "roberto mancini"],
    ["Bologna", "Sampdoria", "Lazio", "Leicester City"],
    ["İtalyan"],
    ["Forvet", "Forvet Arkası"],
    ["27 Kasım 1964"],
    ["Sampdoria efsanesi", "Lazio dönemi", "Teknik forvet", "İtalya milli takımı"]
  ),

  f(
    311,
    "Giuseppe Signori",
    ["signori", "giuseppe signori"],
    ["Leffe", "Piacenza", "Foggia", "Lazio", "Sampdoria", "Bologna"],
    ["İtalyan"],
    ["Forvet", "Sol Kanat"],
    ["17 Şubat 1968"],
    ["Serie A gol kralı", "Lazio golcüsü", "Sol ayak", "Penaltılarıyla bilinir"]
  ),

  f(
    312,
    "Luca Toni",
    ["luca toni", "toni"],
    ["Modena", "Empoli", "Fiorentina", "Bayern Münih", "Roma", "Genoa", "Juventus", "Verona"],
    ["İtalyan"],
    ["Forvet", "Santrfor"],
    ["26 Mayıs 1977"],
    ["Dünya Kupası kazandı", "Avrupa Altın Ayakkabı", "Kafa vuruşu", "Ceza sahası golcüsü"]
  ),

  f(
    313,
    "Antonio Di Natale",
    ["di natale", "antonio di natale", "totò di natale", "toto di natale"],
    ["Empoli", "Udinese"],
    ["İtalyan"],
    ["Forvet", "İkinci Forvet"],
    ["13 Ekim 1977"],
    ["Udinese efsanesi", "Serie A gol kralı", "Teknik bitirici", "Totò lakabı"]
  ),

  f(
    314,
    "Alessandro Costacurta",
    ["costacurta", "alessandro costacurta", "billy costacurta"],
    ["Milan", "Monza"],
    ["İtalyan"],
    ["Stoper", "Sağ Bek"],
    ["24 Nisan 1966"],
    ["Milan efsanesi", "Şampiyonlar Ligi kazandı", "Savunma disiplini", "Uzun kariyer"]
  ),

  f(
    315,
    "Ciro Ferrara",
    ["ciro ferrara", "ferrara"],
    ["Napoli", "Juventus"],
    ["İtalyan"],
    ["Stoper"],
    ["11 Şubat 1967"],
    ["Napoli ve Juventus", "Şampiyonlar Ligi kazandı", "Sert savunma", "Serie A şampiyonlukları"]
  ),

  f(
    316,
    "Marco Verratti",
    ["verratti", "marco verratti"],
    ["Pescara", "PSG", "Al Arabi"],
    ["İtalyan"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["5 Kasım 1992"],
    ["Euro 2020 kazandı", "PSG orta sahası", "Pas oyunu", "Kısa alanda teknik"]
  ),

  f(
    317,
    "Federico Chiesa",
    ["chiesa", "federico chiesa"],
    ["Fiorentina", "Juventus", "Liverpool"],
    ["İtalyan"],
    ["Kanat", "Forvet"],
    ["25 Ekim 1997"],
    ["Euro 2020 kazandı", "Hızlı kanat", "Juventus dönemi", "Fiorentina çıkışlı"]
  ),

  f(
    318,
    "Sandro Tonali",
    ["tonali", "sandro tonali"],
    ["Brescia", "Milan", "Newcastle United"],
    ["İtalyan"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["8 Mayıs 2000"],
    ["Milan şampiyonluğu", "Brescia çıkışlı", "Pas oyunu", "Modern regista"]
  ),

  f(
    319,
    "Federico Dimarco",
    ["dimarco", "federico dimarco"],
    ["Inter", "Ascoli", "Empoli", "Sion", "Parma", "Verona"],
    ["İtalyan"],
    ["Sol Bek", "Sol Kanat Bek"],
    ["10 Kasım 1997"],
    ["Inter sol kanadı", "Sol ayak", "Orta açma", "Hücumcu bek"]
  ),

  f(
    320,
    "Gianluigi Donnarumma",
    ["donnarumma", "gianluigi donnarumma", "gigio donnarumma"],
    ["Milan", "PSG"],
    ["İtalyan"],
    ["Kaleci"],
    ["25 Şubat 1999"],
    ["Euro 2020 kazandı", "Gigio lakabı", "Penaltı kurtarışları", "Genç yaşta parladı"]
  ),

  f(
    321,
    "Rui Costa",
    ["rui costa"],
    ["Benfica", "Fiorentina", "Milan"],
    ["Portekizli"],
    ["10 Numara", "Ofansif Orta Saha"],
    ["29 Mart 1972"],
    ["Fiorentina ve Milan", "Şampiyonlar Ligi kazandı", "Oyun kurucu", "Portekiz altın jenerasyonu"]
  ),

  f(
    322,
    "Deco",
    ["deco", "anderson luis de souza"],
    ["Porto", "Barcelona", "Chelsea", "Fluminense"],
    ["Portekizli"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["27 Ağustos 1977"],
    ["Porto ve Barcelona ile Şampiyonlar Ligi", "Pas oyunu", "Teknik orta saha", "Portekiz milli takımı"]
  ),

  f(
    323,
    "Paulo Futre",
    ["paulo futre", "futre"],
    ["Sporting CP", "Porto", "Atlético Madrid", "Benfica", "Marseille", "Reggiana", "Milan", "West Ham"],
    ["Portekizli"],
    ["Sol Kanat", "Forvet"],
    ["28 Şubat 1966"],
    ["Porto ile Avrupa Kupası", "Atlético Madrid efsanesi", "Hızlı kanat", "Dripling"]
  ),

  f(
    324,
    "João Félix",
    ["joao felix", "joão félix", "joao félix"],
    ["Benfica", "Atlético Madrid", "Chelsea", "Barcelona", "Milan"],
    ["Portekizli"],
    ["Forvet Arkası", "Forvet", "Kanat"],
    ["10 Kasım 1999"],
    ["Golden Boy kazandı", "Benfica çıkışlı", "Teknik hücumcu", "Portekiz milli takımı"]
  ),

  f(
    325,
    "Bernardo Silva",
    ["bernardo silva", "bernardo"],
    ["Benfica", "Monaco", "Manchester City"],
    ["Portekizli"],
    ["Ofansif Orta Saha", "Sağ Kanat", "Merkez Orta Saha"],
    ["10 Ağustos 1994"],
    ["Manchester City ile Şampiyonlar Ligi", "Teknik", "Pres gücü", "Çok yönlü"]
  ),

  f(
    326,
    "Bruno Fernandes",
    ["bruno fernandes", "bruno"],
    ["Novara", "Udinese", "Sampdoria", "Sporting CP", "Manchester United"],
    ["Portekizli"],
    ["Ofansif Orta Saha", "10 Numara"],
    ["8 Eylül 1994"],
    ["Manchester United kaptanı", "Penaltı", "Uzaktan şut", "Asist"]
  ),

  f(
    327,
    "Rúben Dias",
    ["ruben dias", "rúben dias"],
    ["Benfica", "Manchester City"],
    ["Portekizli"],
    ["Stoper"],
    ["14 Mayıs 1997"],
    ["Manchester City savunması", "Şampiyonlar Ligi kazandı", "Lider stoper", "Hava topları"]
  ),

  f(
    328,
    "Ricardo Carvalho",
    ["ricardo carvalho", "carvalho"],
    ["Porto", "Chelsea", "Real Madrid", "Monaco", "Shanghai SIPG"],
    ["Portekizli"],
    ["Stoper"],
    ["18 Mayıs 1978"],
    ["Porto ve Chelsea", "Şampiyonlar Ligi kazandı", "Savunma zekası", "Mourinho dönemleri"]
  ),

  f(
    329,
    "Nuno Gomes",
    ["nuno gomes"],
    ["Boavista", "Benfica", "Fiorentina", "Braga", "Blackburn Rovers"],
    ["Portekizli"],
    ["Forvet", "Santrfor"],
    ["5 Temmuz 1976"],
    ["Benfica efsanesi", "Portekiz milli takımı", "Kafa vuruşu", "Bitiricilik"]
  ),

  f(
    330,
    "Pauleta",
    ["pauleta", "pedro miguel pauleta"],
    ["Estoril", "Salamanca", "Deportivo La Coruña", "Bordeaux", "PSG"],
    ["Portekizli"],
    ["Forvet", "Santrfor"],
    ["28 Nisan 1973"],
    ["PSG golcüsü", "Portekiz milli takımı", "Ceza sahası bitiricisi", "Azorlar kartalı lakabı"]
  ),

  f(
    331,
    "João Cancelo",
    ["joao cancelo", "joão cancelo", "cancelo"],
    ["Benfica", "Valencia", "Inter", "Juventus", "Manchester City", "Bayern Münih", "Barcelona", "Al Hilal"],
    ["Portekizli"],
    ["Sağ Bek", "Sol Bek", "Kanat Bek"],
    ["27 Mayıs 1994"],
    ["Hücumcu bek", "Manchester City dönemi", "Teknik", "İçe kat eden bek"]
  ),

  f(
    332,
    "Diogo Jota",
    ["diogo jota", "jota"],
    ["Paços de Ferreira", "Atlético Madrid", "Porto", "Wolverhampton Wanderers", "Liverpool"],
    ["Portekizli"],
    ["Forvet", "Kanat"],
    ["4 Aralık 1996"],
    ["Liverpool hücumcusu", "Bitiricilik", "Çok yönlü", "Portekiz milli takımı"]
  ),

  f(
    333,
    "Simão Sabrosa",
    ["simao", "simão", "simao sabrosa", "simão sabrosa"],
    ["Sporting CP", "Barcelona", "Benfica", "Atlético Madrid", "Beşiktaş", "Espanyol"],
    ["Portekizli"],
    ["Kanat", "Ofansif Orta Saha"],
    ["31 Ekim 1979"],
    ["Benfica efsanesi", "Beşiktaş'ta oynadı", "Frikik", "Sol/sağ kanat"]
  ),

  f(
    334,
    "Ederson",
    ["ederson", "ederson santana de moraes"],
    ["Rio Ave", "Benfica", "Manchester City"],
    ["Brezilyalı"],
    ["Kaleci"],
    ["17 Ağustos 1993"],
    ["Ayaklarını çok iyi kullanır", "Uzun pas yeteneği", "Refleks", "Süpürücü kaleci"]
  ),

  f(
    335,
    "Rodri",
    ["rodri", "rodrigo hernandez", "rodrigo hernández"],
    ["Villarreal", "Atlético Madrid", "Manchester City"],
    ["İspanyol"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["22 Haziran 1996"],
    ["Oyunun beyni", "Uzaktan şutları meşhur", "Sakin ve soğukkanlı", "Defansif lider"]
  ),

  f(
    336,
    "Phil Foden",
    ["foden", "phil foden"],
    ["Manchester City"],
    ["İngiliz"],
    ["Ofansif Orta Saha", "Kanat"],
    ["28 Mayıs 2000"],
    ["Tek kulüp altyapısından", "Çok yönlü hücumcu", "Hızlı dripling", "Sol ayak"]
  ),

  f(
    337,
    "Declan Rice",
    ["declan rice", "rice"],
    ["West Ham", "Arsenal"],
    ["İngiliz"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["14 Ocak 1999"],
    ["Fiziksel güç", "Liderlik", "Top kapma ustası", "İngiliz milli takımı"]
  ),

  f(
    338,
    "Martin Ødegaard",
    ["odegaard", "ødegaard", "martin odegaard"],
    ["Strømsgodset", "Real Madrid", "Heerenveen", "Vitesse", "Real Sociedad", "Arsenal"],
    ["Norveçli"],
    ["Ofansif Orta Saha", "10 Numara"],
    ["17 Aralık 1998"],
    ["Oyun vizyonu", "Kaptan", "Zarif paslar", "Sol ayak"]
  ),

  f(
    339,
    "Bukayo Saka",
    ["saka", "bukayo saka"],
    ["Arsenal"],
    ["İngiliz"],
    ["Sağ Kanat", "Bek"],
    ["5 Eylül 2001"],
    ["İstikrarlı kanat", "Hız ve çeviklik", "Birebirde çok etkili", "Solak"]
  ),

  f(
    340,
    "William Saliba",
    ["saliba", "william saliba"],
    ["Saint-Étienne", "Nice", "Marseille", "Arsenal"],
    ["Fransız"],
    ["Stoper"],
    ["24 Mart 2001"],
    ["Hızlı savunmacı", "Oyun kuran stoper", "Soğukkanlılık", "Güçlü fizik"]
  ),

  f(
    341,
    "Gabriel Martinelli",
    ["martinelli", "gabriel martinelli"],
    ["Ituano", "Arsenal"],
    ["Brezilyalı"],
    ["Sol Kanat", "Forvet"],
    ["18 Haziran 2001"],
    ["Yüksek hız", "Bitiricilik", "Enerjik oyun", "Brezilya milli takımı"]
  ),

  f(
    342,
    "Kai Havertz",
    ["havertz", "kai havertz"],
    ["Bayer Leverkusen", "Chelsea", "Arsenal"],
    ["Alman"],
    ["Forvet", "Ofansif Orta Saha"],
    ["11 Haziran 1999"],
    ["Çok yönlü hücumcu", "Pozisyon bilgisi", "Kritik goller", "Hava topları"]
  ),

  f(
    343,
    "Ollie Watkins",
    ["watkins", "ollie watkins"],
    ["Exeter City", "Brentford", "Aston Villa"],
    ["İngiliz"],
    ["Forvet", "Santrfor"],
    ["30 Aralık 1995"],
    ["Pres gücü", "Hareketli forvet", "Sürekli gol arayışı", "Bitiricilik"]
  ),

  f(
    344,
    "Dominik Szoboszlai",
    ["szoboszlai", "dominik szoboszlai"],
    ["Red Bull Salzburg", "RB Leipzig", "Liverpool"],
    ["Macar"],
    ["Ofansif Orta Saha"],
    ["25 Ekim 2000"],
    ["Uzaktan şut ustası", "Duran top uzmanı", "Yüksek tempo", "Teknik"]
  ),

  f(
    345,
    "Alexis Mac Allister",
    ["mac allister", "alexis mac allister"],
    ["Argentinos Juniors", "Boca Juniors", "Brighton", "Liverpool"],
    ["Arjantinli"],
    ["Merkez Orta Saha"],
    ["24 Aralık 1998"],
    ["Dünya Kupası şampiyonu", "Pas trafiği", "Oyun kurucu", "Zeki orta saha"]
  ),

  f(
    346,
    "Darwin Núñez",
    ["nunez", "núñez", "darwin nunez"],
    ["Peñarol", "Almería", "Benfica", "Liverpool"],
    ["Uruguaylı"],
    ["Forvet", "Santrfor"],
    ["24 Haziran 1999"],
    ["Patlayıcı hız", "Agresif forvet", "Güçlü fizik", "Hırs"]
  ),

  f(
    347,
    "Luis Díaz",
    ["diaz", "luis díaz", "luis diaz"],
    ["Barranquilla", "Junior", "Porto", "Liverpool"],
    ["Kolombiyalı"],
    ["Sol Kanat"],
    ["13 Ocak 1997"],
    ["İnanılmaz çalım", "Çizgi oyuncusu", "Hız", "Birebirde durdurulamaz"]
  ),

  f(
    348,
    "Ibrahima Konaté",
    ["konate", "konaté", "ibrahima konate"],
    ["Sochaux", "RB Leipzig", "Liverpool"],
    ["Fransız"],
    ["Stoper"],
    ["25 Mayıs 1999"],
    ["Hava topları", "Devasa fizik", "Savunma gücü", "Modern stoper"]
  ),

  f(
    349,
    "Alisson Becker",
    ["alisson", "alisson becker"],
    ["Internacional", "Roma", "Liverpool"],
    ["Brezilyalı"],
    ["Kaleci"],
    ["2 Ekim 1992"],
    ["Ayakla oyun kurma", "Refleks", "Lider kaleci", "Brezilya milli takımı"]
  ),

  f(
    350,
    "Kyle Walker",
    ["walker", "kyle walker"],
    ["Sheffield United", "Tottenham", "Aston Villa", "Manchester City"],
    ["İngiliz"],
    ["Sağ Bek"],
    ["28 Mayıs 1990"],
    ["İnanılmaz hız", "Fiziksel savunma", "Çok kupa sahibi", "Bek"]
  ),

  f(
    351,
    "John Stones",
    ["stones", "john stones"],
    ["Barnsley", "Everton", "Manchester City"],
    ["İngiliz"],
    ["Stoper", "Ön Libero"],
    ["28 Mayıs 1994"],
    ["Topla çıkış", "Oyun kuran stoper", "Soğukkanlı", "Pas isabeti"]
  ),

  f(
    352,
    "Manuel Akanji",
    ["akanji", "manuel akanji"],
    ["Basel", "Borussia Dortmund", "Manchester City"],
    ["İsviçreli"],
    ["Stoper", "Bek"],
    ["19 Temmuz 1995"],
    ["Çok yönlü savunmacı", "Hız", "Oyun zekası", "Disiplin"]
  ),

  f(
    353,
    "Nathan Aké",
    ["ake", "aké", "nathan ake"],
    ["Chelsea", "Reading", "Watford", "Bournemouth", "Manchester City"],
    ["Hollandalı"],
    ["Stoper", "Sol Bek"],
    ["18 Şubat 1995"],
    ["Disiplinli savunma", "İki pozisyon oynayabilme", "Hava topları", "Modern defans"]
  ),

  f(
    354,
    "Josko Gvardiol",
    ["gvardiol", "joško gvardiol"],
    ["Dinamo Zagreb", "RB Leipzig", "Manchester City"],
    ["Hırvat"],
    ["Stoper", "Sol Bek"],
    ["23 Ocak 2002"],
    ["Genç yetenek", "Topla oyun", "Hücumcu bek özellikleri", "Güçlü fizik"]
  ),

  f(
    355,
    "Matheus Nunes",
    ["nunes", "matheus nunes"],
    ["Estoril", "Sporting CP", "Wolverhampton", "Manchester City"],
    ["Portekizli"],
    ["Merkez Orta Saha"],
    ["27 Ağustos 1998"],
    ["Dripling", "Enerji", "Orta saha", "Top taşıma"]
  ),

  f(
    356,
    "Jeremy Doku",
    ["doku", "jeremy doku"],
    ["Anderlecht", "Rennes", "Manchester City"],
    ["Belçikalı"],
    ["Kanat"],
    ["27 Mayıs 2002"],
    ["İnanılmaz hız", "Birebirde çok etkili", "Çeviklik", "Genç yetenek"]
  ),

  f(
    357,
    "Julian Alvarez",
    ["alvarez", "julian alvarez"],
    ["River Plate", "Manchester City", "Atlético Madrid"],
    ["Arjantinli"],
    ["Forvet", "Santrfor"],
    ["31 Ocak 2000"],
    ["Dünya Kupası şampiyonu", "Pres", "Bitiricilik", "Çok yönlü"]
  ),

  f(
    358,
    "Joao Palhinha",
    ["palhinha", "joao palhinha"],
    ["Sporting CP", "Braga", "Fulham", "Bayern Münih"],
    ["Portekizli"],
    ["Ön Libero"],
    ["9 Temmuz 1995"],
    ["Top kapma makinesi", "Fizik gücü", "Defansif orta saha", "Sertlik"]
  ),

  f(
    359,
    "Pau Torres",
    ["pau torres"],
    ["Villarreal", "Málaga", "Aston Villa"],
    ["İspanyol"],
    ["Stoper"],
    ["16 Ocak 1997"],
    ["Sol ayaklı stoper", "Oyun kurucu", "İspanya milli takımı", "Pas yeteneği"]
  ),

  f(
    360,
    "Jarrod Bowen",
    ["bowen", "jarrod bowen"],
    ["Hereford United", "Hull City", "West Ham"],
    ["İngiliz"],
    ["Kanat"],
    ["20 Aralık 1996"],
    ["Skorer kanat", "Hız", "Bitiricilik", "İngiliz"]
  ),

  f(
    361,
    "Lucas Paquetá",
    ["paqueta", "paquetá", "lucas paqueta"],
    ["Flamengo", "Milan", "Lyon", "West Ham"],
    ["Brezilyalı"],
    ["Ofansif Orta Saha"],
    ["27 Ağustos 1997"],
    ["Samba tekniği", "Oyun vizyonu", "Pas yeteneği", "Brezilya milli takımı"]
  ),

  f(
    362,
    "Mohammed Kudus",
    ["kudus", "mohammed kudus"],
    ["Nordsjælland", "Ajax", "West Ham"],
    ["Ganalı"],
    ["Ofansif Orta Saha", "Kanat"],
    ["2 Ağustos 2000"],
    ["Hız", "Birebir", "Bitiricilik", "Genç yetenek"]
  ),

  f(
    363,
    "Kobbie Mainoo",
    ["mainoo", "kobbie mainoo"],
    ["Manchester United"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["19 Nisan 2005"],
    ["Genç yetenek", "Orta saha", "Oyun zekası", "Soğukkanlılık"]
  ),

  f(
    364,
    "Rasmus Højlund",
    ["hojlund", "højlund", "rasmus hojlund"],
    ["Copenhagen", "Sturm Graz", "Atalanta", "Manchester United"],
    ["Danimarkalı"],
    ["Forvet", "Santrfor"],
    ["4 Şubat 2003"],
    ["Güçlü fizik", "Hız", "Genç golcü", "Bitiricilik"]
  ),

  f(
    365,
    "Alejandro Garnacho",
    ["garnacho", "alejandro garnacho"],
    ["Manchester United"],
    ["Arjantinli"],
    ["Kanat"],
    ["1 Temmuz 2004"],
    ["Çeviklik", "Birebir", "Genç yetenek", "Hücumcu"]
  ),

  f(
    366,
    "Victor Osimhen",
    ["osimhen", "victor osimhen"],
    ["Wolfsburg", "Charleroi", "Lille", "Napoli", "Galatasaray"],
    ["Nijeryalı"],
    ["Forvet", "Santrfor"],
    ["29 Aralık 1998"],
    ["Hız", "Güçlü kafa vuruşu", "Bitiricilik", "Afrika ikonu"]
  ),

  f(
    367,
    "Khvicha Kvaratskhelia",
    ["kvaratskhelia", "kvara", "khvicha kvaratskhelia"],
    ["Dinamo Batumi", "Rubin Kazan", "Napoli"],
    ["Gürcü"],
    ["Kanat", "Ofansif Orta Saha"],
    ["12 Şubat 2001"],
    ["Çalım ustası", "Dripling", "Teknik", "İtalya'da yılın oyuncusu"]
  ),

  f(
    368,
    "Nicolo Barella",
    ["barella", "nicolo barella"],
    ["Cagliari", "Inter"],
    ["İtalyan"],
    ["Merkez Orta Saha"],
    ["7 Şubat 1997"],
    ["Yüksek tempo", "Mücadeleci", "İtalya milli takımı", "Orta saha lideri"]
  ),

  f(
    369,
    "Alessandro Bastoni",
    ["bastoni", "alessandro bastoni"],
    ["Atalanta", "Parma", "Inter"],
    ["İtalyan"],
    ["Stoper"],
    ["13 Nisan 1999"],
    ["Sol ayaklı stoper", "Oyun kuran savunma", "İtalya milli takımı", "Modern defans"]
  ),

  f(
    370,
    "Benjamin Pavard",
    ["pavard", "benjamin pavard"],
    ["Lille", "Stuttgart", "Bayern Münih", "Inter"],
    ["Fransız"],
    ["Sağ Bek", "Stoper"],
    ["28 Mart 1996"],
    ["Dünya Kupası şampiyonu", "Çok yönlü", "Savunma", "Modern bek"]
  ),

  f(
    371,
    "Marcus Thuram",
    ["marcus thuram"],
    ["Sochaux", "Guingamp", "Borussia Mönchengladbach", "Inter"],
    ["Fransız"],
    ["Forvet"],
    ["6 Ağustos 1997"],
    ["Hız", "Fizik gücü", "Bitiricilik", "Hücumcu"]
  ),

  f(
    372,
    "Rafael Leão",
    ["leao", "leão", "rafael leao"],
    ["Sporting CP", "Lille", "Milan"],
    ["Portekizli"],
    ["Kanat", "Forvet"],
    ["10 Haziran 1999"],
    ["Patlayıcı hız", "Teknik", "Dripling", "Milan yıldızı"]
  ),

  f(
    373,
    "Theo Hernandez",
    ["theo hernandez"],
    ["Atlético Madrid", "Alavés", "Real Madrid", "Real Sociedad", "Milan"],
    ["Fransız"],
    ["Sol Bek"],
    ["6 Ekim 1997"],
    ["Hücumcu sol bek", "İnanılmaz hız", "Milan", "Bindirmeler"]
  ),

  f(
    374,
    "Christian Pulisic",
    ["pulisic", "christian pulisic"],
    ["Borussia Dortmund", "Chelsea", "Milan"],
    ["ABD'li"],
    ["Kanat", "Ofansif Orta Saha"],
    ["18 Eylül 1998"],
    ["Hız", "Dripling", "Bitiricilik", "Çok yönlü"]
  ),

  f(
    375,
    "Mike Maignan",
    ["maignan", "mike maignan"],
    ["Lille", "Milan"],
    ["Fransız"],
    ["Kaleci"],
    ["3 Temmuz 1995"],
    ["Refleks", "Liderlik", "Milan", "Oyun kurma"]
  ),

  f(
    376,
    "Dusan Vlahovic",
    ["vlahovic", "vlahović", "dusan vlahovic"],
    ["Fiorentina", "Juventus"],
    ["Sırp"],
    ["Forvet", "Santrfor"],
    ["28 Ocak 2000"],
    ["Güçlü şut", "Bitiricilik", "Kafa vuruşu", "Sırbistan"]
  ),

  f(
    377,
    "Teun Koopmeiners",
    ["koopmeiners", "teun koopmeiners"],
    ["AZ", "Atalanta", "Juventus"],
    ["Hollandalı"],
    ["Merkez Orta Saha", "Ofansif Orta Saha"],
    ["28 Şubat 1998"],
    ["Frikik", "Uzaktan şut", "Oyun kurucu", "Teknik"]
  ),

  f(
    378,
    "Douglas Luiz",
    ["douglas luiz"],
    ["Vasco da Gama", "Manchester City", "Girona", "Aston Villa", "Juventus"],
    ["Brezilyalı"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["9 Mayıs 1998"],
    ["Oyun kurucu", "Defansif orta saha", "Brezilya milli takımı", "Pas"]
  ),

  f(
    379,
    "Nico Gonzalez",
    ["nico gonzalez", "nicolás gonzález"],
    ["Argentinos Juniors", "Stuttgart", "Fiorentina", "Juventus"],
    ["Arjantinli"],
    ["Kanat", "Forvet"],
    ["6 Nisan 1998"],
    ["Dripling", "Bitiricilik", "Hız", "Arjantin milli takımı"]
  ),

  f(
    380,
    "Florian Wirtz",
    ["wirtz", "florian wirtz"],
    ["Bayer Leverkusen"],
    ["Alman"],
    ["Ofansif Orta Saha"],
    ["3 Mayıs 2003"],
    ["Genç yetenek", "Oyun vizyonu", "Teknik", "Pas ustalığı"]
  ),

  f(
    381,
    "Granit Xhaka",
    ["xhaka", "granit xhaka"],
    ["Basel", "Borussia Mönchengladbach", "Arsenal", "Bayer Leverkusen"],
    ["İsviçreli"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["27 Eylül 1992"],
    ["Liderlik", "Uzaktan şut", "Pas", "Oyun zekası"]
  ),

  f(
    382,
    "Victor Boniface",
    ["boniface", "victor boniface"],
    ["Bodø/Glimt", "Union Saint-Gilloise", "Bayer Leverkusen"],
    ["Nijeryalı"],
    ["Forvet"],
    ["23 Aralık 2000"],
    ["Fizik gücü", "Bitiricilik", "Genç forvet", "Güçlü şut"]
  ),

  f(
    383,
    "Alejandro Grimaldo",
    ["grimaldo", "alejandro grimaldo"],
    ["Barcelona B", "Benfica", "Bayer Leverkusen"],
    ["İspanyol"],
    ["Sol Bek", "Sol Kanat Bek"],
    ["20 Eylül 1995"],
    ["Frikik", "Orta açma", "Hücumcu bek", "Teknik"]
  ),

  f(
    384,
    "Jeremie Frimpong",
    ["frimpong", "jeremie frimpong"],
    ["Manchester City", "Celtic", "Bayer Leverkusen"],
    ["Hollandalı"],
    ["Sağ Bek", "Sağ Kanat Bek"],
    ["10 Aralık 2000"],
    ["İnanılmaz hız", "Bindirmeler", "Hücumcu bek", "Genç yetenek"]
  ),

  f(
    385,
    "Xavi Simons",
    ["xavi simons"],
    ["PSG", "PSV", "RB Leipzig"],
    ["Hollandalı"],
    ["Ofansif Orta Saha", "Kanat"],
    ["21 Nisan 2003"],
    ["Genç yetenek", "Teknik", "Oyun zekası", "Dripling"]
  ),

  f(
    386,
    "Lois Openda",
    ["openda", "lois openda"],
    ["Club Brugge", "Vitesse", "Lens", "RB Leipzig"],
    ["Belçikalı"],
    ["Forvet"],
    ["16 Şubat 2000"],
    ["Süratli", "Bitiricilik", "Hücumcu", "Genç forvet"]
  ),

  f(
    387,
    "Dani Olmo",
    ["olmo", "dani olmo"],
    ["Dinamo Zagreb", "RB Leipzig", "Barcelona"],
    ["İspanyol"],
    ["Ofansif Orta Saha"],
    ["7 Mayıs 1998"],
    ["Teknik", "Pas", "Yaratıcı", "Oyun zekası"]
  ),

  f(
    388,
    "Lamine Yamal",
    ["yamal", "lamine yamal"],
    ["Barcelona"],
    ["İspanyol"],
    ["Sağ Kanat"],
    ["13 Temmuz 2007"],
    ["Genç yetenek", "Dripling", "Teknik", "Süper yetenek"]
  ),

  f(
    389,
    "Pau Cubarsí",
    ["cubarsi", "pau cubarsí"],
    ["Barcelona"],
    ["İspanyol"],
    ["Stoper"],
    ["22 Ocak 2007"],
    ["Genç stoper", "Topla oyun", "Savunma", "Soğukkanlılık"]
  ),

  f(
    390,
    "Cole Palmer",
    ["palmer", "cole palmer"],
    ["Manchester City", "Chelsea"],
    ["İngiliz"],
    ["Ofansif Orta Saha", "Sağ Kanat"],
    ["6 Mayıs 2002"],
    ["Genç yıldız", "Bitiricilik", "Teknik", "Oyun zekası"]
  ),

  f(
    391,
    "Conor Gallagher",
    ["gallagher", "conor gallagher"],
    ["Chelsea", "Charlton", "Swansea", "West Bromwich", "Crystal Palace", "Atlético Madrid"],
    ["İngiliz"],
    ["Merkez Orta Saha"],
    ["6 Şubat 2000"],
    ["Yüksek tempo", "Mücadele", "Box-to-box", "Enerji"]
  ),

  f(
    392,
    "Nicolas Jackson",
    ["jackson", "nicolas jackson"],
    ["Villarreal", "Chelsea"],
    ["Senegallı"],
    ["Forvet"],
    ["20 Haziran 2001"],
    ["Hız", "Bitiricilik", "Genç forvet", "Fizik"]
  ),

  f(
    393,
    "Enzo Fernandez",
    ["enzo fernandez", "enzo fernández"],
    ["River Plate", "Defensa y Justicia", "Benfica", "Chelsea"],
    ["Arjantinli"],
    ["Merkez Orta Saha"],
    ["17 Ocak 2001"],
    ["Dünya Kupası şampiyonu", "Pas ustalığı", "Oyun kurucu", "Teknik"]
  ),

  f(
    394,
    "Christopher Nkunku",
    ["nkunku", "christopher nkunku"],
    ["PSG", "RB Leipzig", "Chelsea"],
    ["Fransız"],
    ["Forvet", "Ofansif Orta Saha"],
    ["14 Kasım 1997"],
    ["Çok yönlü hücumcu", "Teknik", "Bitiricilik", "Yaratıcı"]
  ),

  f(
    395,
    "Pedro Neto",
    ["neto", "pedro neto"],
    ["Braga", "Lazio", "Wolverhampton", "Chelsea"],
    ["Portekizli"],
    ["Kanat"],
    ["9 Mart 2000"],
    ["Hız", "Dripling", "Teknik", "Hücumcu"]
  ),

  f(
    396,
    "Samu Omorodion",
    ["samu omorodion", "samu"],
    ["Granada", "Atlético Madrid", "Alavés", "Porto"],
    ["İspanyol"],
    ["Forvet"],
    ["5 Mayıs 2004"],
    ["Genç forvet", "Fizik gücü", "Bitiricilik", "Hız"]
  ),

  f(
    397,
    "Riccardo Calafiori",
    ["calafiori", "riccardo calafiori"],
    ["Roma", "Genoa", "Basel", "Bologna", "Arsenal"],
    ["İtalyan"],
    ["Stoper", "Sol Bek"],
    ["19 Mayıs 2002"],
    ["Savunma", "Topla çıkış", "İtalya milli takımı", "Modern defans"]
  ),

  f(
    398,
    "Viktor Gyökeres",
    ["gyokeres", "gyökeres", "viktor gyökeres"],
    ["IF Brommapojkarna", "Brighton", "St. Pauli", "Swansea", "Coventry City", "Sporting CP"],
    ["İsveçli"],
    ["Forvet"],
    ["4 Haziran 1998"],
    ["Gol makinesi", "Güçlü fizik", "Hız", "Bitiricilik"]
  ),

  f(
    399,
    "Jonathan David",
    ["david", "jonathan david"],
    ["Gent", "Lille"],
    ["Kanadalı"],
    ["Forvet"],
    ["14 Ocak 2000"],
    ["Bitiricilik", "Hız", "Lille şampiyonluğu", "Golcü"]
  ),

  f(
    400,
    "Nico Williams",
    ["nico williams"],
    ["Athletic Bilbao"],
    ["İspanyol"],
    ["Kanat"],
    ["12 Temmuz 2002"],
    ["İnanılmaz hız", "Dripling", "Birebir", "Genç yetenek"]
  ),

  f(
    401,
    "Cihat Arman",
    ["cihat arman", "cihat", "uçan kaleci", "ucan kaleci"],
    ["Gençlerbirliği", "Güneş", "Fenerbahçe"],
    ["Türk"],
    ["Kaleci"],
    ["1915 doğumlu"],
    ["Uçan Kaleci lakabıyla bilinir", "Fenerbahçe tarihinin sembol kalecilerindendir", "Kaptanlık ve refleksleriyle öne çıktı", "Türk futbolunun erken dönem ikonlarından"]
  ),

  f(
    402,
    "Baba Hakkı Yeten",
    ["baba hakkı", "baba hakki", "hakkı yeten", "hakki yeten"],
    ["Karagümrük", "Beşiktaş"],
    ["Türk"],
    ["Forvet", "İç Forvet"],
    ["1910 doğumlu"],
    ["Beşiktaş tarihinin en büyük sembollerinden", "Baba lakabıyla anılır", "Futbolculuk sonrası kulüp yöneticiliğiyle de iz bıraktı", "Lider karakteriyle bilinir"]
  ),

  f(
    403,
    "Gündüz Kılıç",
    ["gündüz kılıç", "gunduz kilic", "baba gündüz", "baba gunduz"],
    ["Galatasaray"],
    ["Türk"],
    ["Forvet", "Teknik Direktör"],
    ["1918 doğumlu"],
    ["Baba Gündüz lakabıyla bilinir", "Galatasaray kültürünün en önemli figürlerinden", "Futbolculuk ve teknik adamlıkta iz bıraktı", "Liderlik ve kulüp aidiyetiyle öne çıktı"]
  ),

  f(
    404,
    "Turgay Şeren",
    ["turgay şeren", "turgay seren", "berlin panteri"],
    ["Galatasaray"],
    ["Türk"],
    ["Kaleci"],
    ["1932 doğumlu"],
    ["Berlin Panteri lakabıyla bilinir", "Galatasaray'ın efsane kalecilerindendir", "Milli maç performanslarıyla hatırlanır", "Uzun yıllar Türk futbolunun sembol kalecisi oldu"]
  ),

  f(
    405,
    "Coşkun Özarı",
    ["coşkun özarı", "coskun ozari"],
    ["Galatasaray"],
    ["Türk"],
    ["Stoper", "Teknik Direktör"],
    ["1931 doğumlu"],
    ["Galatasaray savunmasının önemli isimlerindendi", "Milli takım teknik direktörlüğü yaptı", "Sakin liderliğiyle bilinir", "Türk futbolunda hem oyuncu hem hoca kimliğiyle iz bıraktı"]
  ),

  f(
    406,
    "Kadri Aytaç",
    ["kadri aytaç", "kadri aytac"],
    ["Beyoğluspor", "Galatasaray", "Fenerbahçe", "Mersin İdman Yurdu"],
    ["Türk"],
    ["Orta Saha"],
    ["1931 doğumlu"],
    ["Teknik kapasitesi yüksek orta sahalardandı", "Üç büyüklerin rekabet döneminde öne çıktı", "Milli takım formasını giydi", "Oyunu iki yönlü oynayan eski dönem yıldızlarındandı"]
  ),

  f(
    407,
    "Suat Mamat",
    ["suat mamat"],
    ["Galatasaray", "Beşiktaş"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["1930 doğumlu"],
    ["1954 Dünya Kupası kadrosunda yer aldı", "Hızlı hücum oyuncusu olarak bilinir", "Galatasaray ve Beşiktaş formaları giydi", "Milli takım tarihinin eski dönem figürlerindendir"]
  ),

  f(
    408,
    "Necmi Mutlu",
    ["necmi mutlu", "necmi"],
    ["Fenerbahçe"],
    ["Türk"],
    ["Kaleci"],
    ["1930'lar doğumlu"],
    ["Fenerbahçe'nin eski dönem kalecilerindendir", "Güven veren kaleciliğiyle hatırlanır", "Sarı-lacivertli kulüp tarihinin klasik isimlerinden", "Refleksleri ve çizgi hakimiyetiyle öne çıktı"]
  ),

  f(
    409,
    "Şükrü Gülesin",
    ["şükrü gülesin", "sukru gulesin", "gülesin", "gulesin"],
    ["Beşiktaş", "Palermo", "Lazio"],
    ["Türk"],
    ["Forvet"],
    ["1922 doğumlu"],
    ["İtalya'da forma giyen öncü Türk futbolculardandır", "Kornerden attığı gollerle anlatılır", "Beşiktaş tarihinin erken dönem yıldızlarındandır", "Güçlü şutlarıyla bilinir"]
  ),

  f(
    410,
    "Özcan Arkoç",
    ["özcan arkoç", "ozcan arkoc"],
    ["Fenerbahçe", "Austria Wien", "Hamburg"],
    ["Türk"],
    ["Kaleci"],
    ["1939 doğumlu"],
    ["Avrupa'da uzun süre forma giyen Türk kalecilerden", "Hamburg dönemiyle hatırlanır", "Refleks ve kaleci liderliğiyle bilinir", "Türkiye kaleci tarihinde önemli bir figürdür"]
  ),

  f(
    411,
    "Yılmaz Şen",
    ["yılmaz şen", "yilmaz sen"],
    ["Fenerbahçe"],
    ["Türk"],
    ["Stoper", "Sağ Bek"],
    ["1943 doğumlu"],
    ["Fenerbahçe'nin eski dönem savunma isimlerindendir", "Mücadeleci tarzıyla bilinir", "Milli takım formasını giydi", "Sert ve güvenilir savunmacı profiliyle hatırlanır"]
  ),

  f(
    412,
    "Cemil Turan",
    ["cemil turan", "cemil"],
    ["Sarıyer", "İstanbulspor", "Fenerbahçe"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1947 doğumlu"],
    ["Fenerbahçe'nin unutulmaz golcülerindendir", "Gol krallıklarıyla hatırlanır", "Ceza sahası bitiriciliği çok güçlüydü", "Milli takımda da önemli goller attı"]
  ),

  f(
    413,
    "Osman Arpacıoğlu",
    ["osman arpacıoğlu", "osman arpacioglu"],
    ["Balıkesirspor", "Fenerbahçe"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1947 doğumlu"],
    ["Fenerbahçe'nin golcü forvetlerindendir", "Hava topları ve bitiriciliğiyle bilinir", "Milli takımda da forma giydi", "Süper Lig'in eski dönem skorerlerinden"]
  ),

  f(
    414,
    "Selçuk Yula",
    ["selçuk yula", "selcuk yula"],
    ["Şekerspor", "Fenerbahçe", "Blau-Weiß Berlin", "Sarıyer"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1959 doğumlu"],
    ["Fenerbahçe'nin efsane golcülerinden", "Gol krallıklarıyla hatırlanır", "Ceza sahasında doğru yerde durmasıyla bilinir", "Taraftar hafızasında özel yeri vardır"]
  ),

  f(
    415,
    "İlyas Tüfekçi",
    ["ilyas tüfekçi", "ilyas tufekci"],
    ["Fenerbahçe", "Galatasaray"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["1960 doğumlu"],
    ["Hızı ve hücum sezgisiyle bilinir", "Fenerbahçe ve Galatasaray formaları giydi", "Milli takımda görev aldı", "80'ler Türk futbolunun etkili hücumcularındandı"]
  ),

  f(
    416,
    "Engin Verel",
    ["engin verel", "engin"],
    ["Fenerbahçe", "Galatasaray", "Lille"],
    ["Türk"],
    ["Kanat", "Forvet"],
    ["1956 doğumlu"],
    ["Süratiyle öne çıkan hücum oyuncusuydu", "Fransa'da forma giyen Türk futbolculardandır", "Fenerbahçe ve Galatasaray geçmişi vardır", "Çizgiye inen kanat oyunu ile hatırlanır"]
  ),

  f(
    417,
    "Müjdat Yetkiner",
    ["müjdat yetkiner", "mujdat yetkiner", "müjdat", "mujdat"],
    ["Fenerbahçe"],
    ["Türk"],
    ["Stoper", "Sağ Bek"],
    ["1961 doğumlu"],
    ["Fenerbahçe'nin sadakat sembollerinden", "Tek kulüp kültürüyle anılır", "Mücadeleci savunmasıyla bilinir", "Sarı-lacivertli taraftarın sevdiği isimlerdendir"]
  ),

  f(
    418,
    "Cem Pamiroğlu",
    ["cem pamiroğlu", "cem pamiroglu"],
    ["Fenerbahçe", "Sarıyer"],
    ["Türk"],
    ["Sol Bek", "Stoper"],
    ["1957 doğumlu"],
    ["Fenerbahçe savunmasının önemli isimlerindendi", "Sol çizgide güven veren oyunuyla bilinir", "Milli takım forması giydi", "Disiplinli savunmacı profiliyle hatırlanır"]
  ),

  f(
    419,
    "İsmail Kartal",
    ["ismail kartal", "arap ismail"],
    ["Sarıyer", "Fenerbahçe", "Denizlispor"],
    ["Türk"],
    ["Sağ Bek", "Stoper"],
    ["1961 doğumlu"],
    ["Arap İsmail lakabıyla bilinir", "Fenerbahçe'nin mücadeleci savunmacılarındandı", "Teknik adam kimliğiyle de tanındı", "Çalışkanlığı ve sertliğiyle hatırlanır"]
  ),

  f(
    420,
    "İskender Günen",
    ["iskender günen", "iskender gunen"],
    ["Trabzonspor"],
    ["Türk"],
    ["Orta Saha", "Forvet Arkası"],
    ["1958 doğumlu"],
    ["Trabzonspor'un unutulmaz orta saha isimlerinden", "Teknik kapasitesiyle öne çıktı", "Bordo-mavili kulüp tarihinin özel figürlerinden", "Oyun zekası ve paslarıyla bilinir"]
  ),

  f(
    421,
    "Ali Kemal Denizci",
    ["ali kemal denizci", "ali kemal"],
    ["Trabzonspor", "Fenerbahçe"],
    ["Türk"],
    ["Kanat", "Forvet"],
    ["1950 doğumlu"],
    ["Trabzonspor'un yükseliş döneminde önemli rol oynadı", "Hızı ve driplingleriyle bilinir", "Fenerbahçe forması da giydi", "Karadeniz futbolunun unutulmaz isimlerindendir"]
  ),

  f(
    422,
    "Orhan Kaynak",
    ["orhan kaynak"],
    ["Adanaspor", "Trabzonspor"],
    ["Türk"],
    ["Orta Saha"],
    ["1949 doğumlu"],
    ["Trabzonspor'un ilk şampiyonluk dönemlerinin önemli parçalarından", "Orta sahada istikrarıyla bilinir", "Mücadele gücü yüksek oyunculardandı", "Bordo-mavili tarih içinde önemli yeri vardır"]
  ),

  f(
    423,
    "Yusuf Tunaoğlu",
    ["yusuf tunaoğlu", "yusuf tunaoglu", "sarışın fırtına", "sarisin firtina"],
    ["Beşiktaş", "Altay"],
    ["Türk"],
    ["Orta Saha", "Forvet Arkası"],
    ["1946 doğumlu"],
    ["Sarışın Fırtına lakabıyla bilinir", "Beşiktaş tarihinin yetenekli oyuncularındandır", "Tekniği ve zarafetiyle anlatılır", "Türk futbolunun romantik figürlerinden biri kabul edilir"]
  ),

  f(
    424,
    "Sanlı Sarıalioğlu",
    ["sanlı sarıalioğlu", "sanli sarialioglu", "sanlı", "sanli"],
    ["Beşiktaş"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["1945 doğumlu"],
    ["Beşiktaş'ın eski dönem hücum yıldızlarındandır", "Sürati ve gol katkısıyla bilinir", "Milli takım forması giydi", "Siyah-beyazlı tarihin sevilen isimlerindendir"]
  ),

  f(
    425,
    "Vedat Okyar",
    ["vedat okyar", "vedat"],
    ["Bursaspor", "Beşiktaş", "Diyarbakırspor"],
    ["Türk"],
    ["Orta Saha", "Ön Libero"],
    ["1945 doğumlu"],
    ["Beşiktaş kaptanlığıyla hatırlanır", "Saha içi liderliği güçlüydü", "Futbol yorumculuğuyla da sevildi", "Mücadeleci orta saha karakteriydi"]
  ),

  f(
    426,
    "Mustafa Denizli",
    ["mustafa denizli", "denizli"],
    ["Altay", "Galatasaray"],
    ["Türk"],
    ["Forvet", "Sol Kanat"],
    ["1949 doğumlu"],
    ["Altay efsanesi olarak bilinir", "Golcü kimliğiyle öne çıktı", "Teknik direktörlükte üç büyüklerde şampiyonluk yaşadı", "Sol ayağı ve bitiriciliğiyle hatırlanır"]
  ),

  f(
    427,
    "Mehmet Özdilek",
    ["mehmet özdilek", "mehmet ozdilek", "şifo mehmet", "sifo mehmet"],
    ["Kahramanmaraşspor", "Beşiktaş"],
    ["Türk"],
    ["Orta Saha", "10 Numara"],
    ["1966 doğumlu"],
    ["Şifo Mehmet lakabıyla bilinir", "Beşiktaş'ın teknik orta saha liderlerindendi", "Kısa boyuna rağmen yüksek oyun zekasıyla öne çıktı", "Frikik ve pas kalitesiyle hatırlanır"]
  ),

  f(
    428,
    "Ertuğrul Sağlam",
    ["ertuğrul sağlam", "ertugrul saglam"],
    ["Samsunspor", "Beşiktaş"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1969 doğumlu"],
    ["Beşiktaş'ın güçlü forvetlerindendi", "Hava topları ve bitiricilikle öne çıktı", "Teknik direktörlükte de şampiyonluk yaşadı", "Milli takım formasını giydi"]
  ),

  f(
    429,
    "Saffet Sancaklı",
    ["saffet sancaklı", "saffet sancakli"],
    ["Beşiktaş", "Galatasaray", "Fenerbahçe", "Kocaelispor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1966 doğumlu"],
    ["Üç büyüklerde forma giyen nadir Türk futbolculardandır", "Güçlü santrfor profiliyle bilinir", "Kocaelispor döneminde de iz bıraktı", "Milli takımda görev aldı"]
  ),

  f(
    430,
    "Recep Çetin",
    ["recep çetin", "recep cetin", "takoz recep"],
    ["Boluspor", "Beşiktaş", "Trabzonspor"],
    ["Türk"],
    ["Stoper", "Sağ Bek"],
    ["1965 doğumlu"],
    ["Takoz Recep lakabıyla bilinir", "Beşiktaş savunmasının sert isimlerinden", "Milli takım formasını uzun süre giydi", "Markaj gücü ve mücadeleciliğiyle hatırlanır"]
  ),

  f(
    431,
    "Tayfur Havutçu",
    ["tayfur havutçu", "tayfur havutcu"],
    ["Darmstadt", "Fenerbahçe", "Kocaelispor", "Beşiktaş"],
    ["Türk"],
    ["Orta Saha", "Ön Libero"],
    ["1970 doğumlu"],
    ["Beşiktaş orta sahasının istikrarlı isimlerindendi", "Oyun disipliniyle öne çıktı", "Milli takımda görev aldı", "Sakin pas oyunu ve liderliğiyle bilinir"]
  ),

  f(
    432,
    "Ogün Temizkanoğlu",
    ["ogün temizkanoğlu", "ogun temizkanoglu", "ogün", "ogun"],
    ["Trabzonspor", "Fenerbahçe", "Konyaspor", "Akçaabat Sebatspor"],
    ["Türk"],
    ["Stoper"],
    ["1969 doğumlu"],
    ["Milli takımın 90'lar savunma liderlerindendi", "Trabzonspor ve Fenerbahçe formaları giydi", "Sert ve kararlı stoper profiliyle bilinir", "Hava toplarında etkiliydi"]
  ),

  f(
    433,
    "Abdullah Ercan",
    ["abdullah ercan", "abdullah"],
    ["Trabzonspor", "Fenerbahçe", "Galatasaray", "İstanbulspor"],
    ["Türk"],
    ["Sol Bek", "Sol Kanat"],
    ["1971 doğumlu"],
    ["Sol çizgide çalışkanlığıyla bilinir", "Üç büyüklerde forma giyen isimlerdendir", "Milli takımda görev aldı", "Ofansif bindirmeleriyle hatırlanır"]
  ),

  f(
    434,
    "Ümit Davala",
    ["ümit davala", "umit davala", "davala"],
    ["Galatasaray", "Milan", "Inter", "Werder Bremen"],
    ["Türk"],
    ["Sağ Bek", "Sağ Kanat", "Orta Saha"],
    ["1973 doğumlu"],
    ["2002 Dünya Kupası'nda ay yıldızlı saç modeliyle hatırlanır", "Galatasaray ile UEFA Kupası kazandı", "Çok yönlü sağ çizgi oyuncusuydu", "Avrupa'da önemli kulüplerde forma giydi"]
  ),

  f(
    435,
    "Ergün Penbe",
    ["ergün penbe", "ergun penbe", "penbe"],
    ["Gençlerbirliği", "Galatasaray"],
    ["Türk"],
    ["Sol Bek", "Sol Kanat"],
    ["1972 doğumlu"],
    ["Galatasaray'ın UEFA Kupası kadrosunun önemli parçasıydı", "Sol çizgide istikrarıyla bilinir", "Sessiz ama güvenilir oyuncu profiliyle hatırlanır", "2002 Dünya Kupası kadrosunda yer aldı"]
  ),

  f(
    436,
    "Suat Kaya",
    ["suat kaya"],
    ["Konyaspor", "Galatasaray"],
    ["Türk"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["1967 doğumlu"],
    ["Galatasaray'ın Avrupa başarısı döneminin savaşçı orta sahasıydı", "Top kapma ve pres gücüyle bilinir", "UEFA Kupası kazandı", "Mücadeleci karakteriyle sevildi"]
  ),

  f(
    437,
    "Hakan Balta",
    ["hakan balta", "balta"],
    ["Manisaspor", "Galatasaray"],
    ["Türk"],
    ["Sol Bek", "Stoper"],
    ["1983 doğumlu"],
    ["Galatasaray savunmasında uzun yıllar görev yaptı", "Sol bekten stopere evrilen güvenilir oyuncuydu", "Milli takım formasını giydi", "Sakin ve pozisyon bilgisi güçlü savunmacıydı"]
  ),

  f(
    438,
    "Servet Çetin",
    ["servet çetin", "servet cetin", "servet"],
    ["Denizlispor", "Fenerbahçe", "Sivasspor", "Galatasaray", "Eskişehirspor"],
    ["Türk"],
    ["Stoper"],
    ["1981 doğumlu"],
    ["Fizik gücüyle öne çıkan stoperdi", "Milli takım savunmasında önemli rol aldı", "Hava toplarında etkiliydi", "Sert ve temaslı oyunu severdi"]
  ),

  f(
    439,
    "Gökhan Zan",
    ["gökhan zan", "gokhan zan"],
    ["Beşiktaş", "Galatasaray"],
    ["Türk"],
    ["Stoper"],
    ["1981 doğumlu"],
    ["Milli takım stoper rotasyonunda uzun süre yer aldı", "Beşiktaş ve Galatasaray formaları giydi", "Fiziksel mücadele gücüyle bilinir", "Hava toplarında etkili savunmacıydı"]
  ),

  f(
    440,
    "Sabri Sarıoğlu",
    ["sabri sarıoğlu", "sabri sarioglu", "sabri", "reis sabri"],
    ["Galatasaray", "Göztepe"],
    ["Türk"],
    ["Sağ Bek", "Sağ Kanat"],
    ["1984 doğumlu"],
    ["Galatasaray taraftarının kült isimlerinden", "Bitmeyen enerjisiyle bilinir", "Sağ çizgide uzun yıllar oynadı", "Uzak mesafe şutları ve ortalarıyla hatırlanır"]
  ),

  f(
    441,
    "Ayhan Akman",
    ["ayhan akman", "ayhan"],
    ["Gaziantepspor", "Beşiktaş", "Galatasaray"],
    ["Türk"],
    ["Merkez Orta Saha", "Ön Libero"],
    ["1977 doğumlu"],
    ["Galatasaray orta sahasında uzun yıllar oynadı", "Top tekniği ve sakinliğiyle bilinir", "Beşiktaş geçmişi de vardır", "Süper Lig'in istikrarlı orta sahalarındandı"]
  ),

  f(
    442,
    "Mehmet Aurelio",
    ["mehmet aurelio", "aurelio", "marco aurelio"],
    ["Trabzonspor", "Fenerbahçe", "Real Betis", "Beşiktaş"],
    ["Türk", "Brezilya kökenli"],
    ["Ön Libero", "Merkez Orta Saha"],
    ["1977 doğumlu"],
    ["Türk Milli Takımı'nın devşirme sembol isimlerindendir", "Fenerbahçe orta sahasında çok etkiliydi", "Top kapma ve pas dengesini birleştirirdi", "Euro 2008 kadrosuyla hatırlanır"]
  ),

  f(
    443,
    "İbrahim Üzülmez",
    ["ibrahim üzülmez", "ibrahim uzulmez", "deli ibrahim"],
    ["Gaziantepspor", "Beşiktaş"],
    ["Türk"],
    ["Sol Bek"],
    ["1974 doğumlu"],
    ["Deli İbrahim lakabıyla bilinir", "Beşiktaş'ın mücadeleci sol beklerindendi", "Hırsı ve temposuyla öne çıktı", "Taraftarla güçlü bağı olan kült isimlerdendir"]
  ),

  f(
    444,
    "İbrahim Toraman",
    ["ibrahim toraman", "toraman"],
    ["Gaziantepspor", "Beşiktaş", "Sivasspor"],
    ["Türk"],
    ["Stoper", "Sağ Bek"],
    ["1981 doğumlu"],
    ["Beşiktaş savunmasının önemli isimlerindendi", "Farklı savunma bölgelerinde oynayabilirdi", "Milli takım formasını giydi", "Mücadele gücü ve sertliğiyle bilinir"]
  ),

  f(
    445,
    "Ümit Özat",
    ["ümit özat", "umit ozat", "özat", "ozat"],
    ["Gençlerbirliği", "Fenerbahçe", "Köln"],
    ["Türk"],
    ["Sol Bek", "Orta Saha"],
    ["1976 doğumlu"],
    ["Fenerbahçe kaptanlığı yaptı", "Sol ayağı ve liderliğiyle bilinir", "Almanya'da Köln forması giydi", "Saha içinde sert ve karakterli duruşuyla hatırlanır"]
  ),

  f(
    446,
    "Tolunay Kafkas",
    ["tolunay kafkas", "tolunay"],
    ["Trabzonspor", "Galatasaray", "Bursaspor"],
    ["Türk"],
    ["Orta Saha", "Ön Libero"],
    ["1968 doğumlu"],
    ["Sert orta saha oyunuyla bilinir", "Trabzonspor ve Galatasaray formaları giydi", "Milli takımda görev aldı", "Mücadele gücü yüksek oyunculardandı"]
  ),

  f(
    447,
    "Gökdeniz Karadeniz",
    ["gökdeniz karadeniz", "gokdeniz karadeniz", "gökdeniz", "gokdeniz"],
    ["Trabzonspor", "Rubin Kazan"],
    ["Türk"],
    ["Kanat", "Forvet Arkası"],
    ["1980 doğumlu"],
    ["Trabzonspor'un modern dönem yıldızlarındandır", "Rubin Kazan ile Rusya'da iz bıraktı", "Hızlı ve teknik hücum oyuncusuydu", "Milli takım formasını giydi"]
  ),

  f(
    448,
    "Fatih Tekke",
    ["fatih tekke", "tekke", "sultan fatih"],
    ["Trabzonspor", "Zenit", "Beşiktaş", "Ankaragücü", "Orduspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1977 doğumlu"],
    ["Trabzonspor'un golcü kaptanlarındandı", "Sultan lakabıyla bilinir", "Sırtı dönük oyunu ve bitiriciliği güçlüydü", "Zenit ile Avrupa'da başarı yaşadı"]
  ),

  f(
    449,
    "Serhat Akın",
    ["serhat akın", "serhat akin", "serhat"],
    ["Fenerbahçe", "Anderlecht", "Kocaelispor", "Karlsruher SC"],
    ["Türk"],
    ["Forvet", "Kanat"],
    ["1981 doğumlu"],
    ["Fenerbahçe'nin genç yaşta parlayan hücumcularındandı", "Hızı ve bitiriciliğiyle hatırlanır", "Avrupa'da Anderlecht forması giydi", "Milli takımda da görev aldı"]
  ),

  f(
    450,
    "Uğur Boral",
    ["uğur boral", "ugur boral"],
    ["Gençlerbirliği", "Fenerbahçe", "Samsunspor", "Beşiktaş"],
    ["Türk"],
    ["Sol Kanat", "Sol Bek"],
    ["1982 doğumlu"],
    ["Euro 2008 performansıyla hatırlanır", "Sol çizgide hem bek hem kanat oynayabildi", "Fenerbahçe döneminde önemli maçlara çıktı", "Çalışkan ve tempolu oyuncuydu"]
  ),

  f(
    451,
    "Necati Ateş",
    ["necati ateş", "necati ates", "necati"],
    ["Adanaspor", "Galatasaray", "Real Sociedad", "Antalyaspor", "Eskişehirspor"],
    ["Türk"],
    ["Forvet", "Santrfor"],
    ["1980 doğumlu"],
    ["Galatasaray dönemindeki kritik golleriyle bilinir", "Ceza sahasında sezgili bir bitiriciydi", "İspanya'da Real Sociedad forması giydi", "Süper Lig'in tecrübeli golcülerindendi"]
  ),

  f(
    452,
    "Mehmet Yozgatlı",
    ["mehmet yozgatlı", "mehmet yozgatli"],
    ["Galatasaray", "Adanaspor", "Fenerbahçe", "Beşiktaş"],
    ["Türk"],
    ["Sağ Kanat", "Orta Saha"],
    ["1979 doğumlu"],
    ["Üç büyüklerde forma giyen isimlerdendir", "Sağ kanatta tekniği ve ortalarıyla bilinir", "Süper Lig'in deneyimli kanat oyuncularındandı", "Kariyeri boyunca farklı büyük kulüplerde oynadı"]
  ),

  f(
    453,
    "Volkan Babacan",
    ["volkan babacan", "babacan"],
    ["Fenerbahçe", "İstanbul Başakşehir"],
    ["Türk"],
    ["Kaleci"],
    ["1988 doğumlu"],
    ["A Milli Takım kalesinde önemli maçlara çıktı", "Başakşehir döneminde istikrarlı performans verdi", "Uzun boyu ve çizgi refleksleriyle bilinir", "Fenerbahçe altyapısından yetişti"]
  ),

  f(
    454,
    "Emre Aşık",
    ["emre aşık", "emre asik"],
    ["Balıkesirspor", "Fenerbahçe", "İstanbulspor", "Galatasaray", "Beşiktaş"],
    ["Türk"],
    ["Stoper"],
    ["1973 doğumlu"],
    ["Üç büyüklerde forma giyen savunmacılardandır", "Sert ve temaslı oyunu severdi", "Milli takım formasını giydi", "Tecrübeli stoper kimliğiyle hatırlanır"]
  ),

  f(
    455,
    "Gökhan Töre",
    ["gökhan töre", "gokhan tore"],
    ["Chelsea altyapısı", "Hamburg", "Rubin Kazan", "Beşiktaş", "West Ham"],
    ["Türk"],
    ["Sağ Kanat", "Sol Kanat"],
    ["1992 doğumlu"],
    ["Beşiktaş dönemindeki patlayıcı kanat oyunuyla hatırlanır", "Dripling ve bire birleri güçlüydü", "Almanya ve İngiltere bağlantılı kariyeri vardır", "Milli takımda görev aldı"]
  ),

  f(
    456,
    "Olcan Adın",
    ["olcan adın", "olcan adin", "olcan"],
    ["Gaziantepspor", "Trabzonspor", "Galatasaray", "Akhisarspor"],
    ["Türk"],
    ["Sol Kanat", "Sol Bek"],
    ["1985 doğumlu"],
    ["Trabzonspor döneminde hücum katkısıyla öne çıktı", "Sol ayağı etkiliydi", "Kanat ve bek oynayabilen çok yönlü oyuncuydu", "Galatasaray forması da giydi"]
  ),

  f(
    457,
    "Mevlüt Erdinç",
    ["mevlüt erdinç", "mevlut erdinc", "mevlüt", "mevlut"],
    ["Sochaux", "PSG", "Rennes", "Saint-Étienne", "Başakşehir", "Fenerbahçe"],
    ["Türk", "Fransa doğumlu"],
    ["Forvet", "Santrfor"],
    ["1987 doğumlu"],
    ["Fransa Ligue 1'de uzun süre forma giydi", "A Milli Takım'da goller attı", "Hızlı ve direkt forvet profiliyle bilinir", "PSG geçmişiyle hatırlanır"]
  ),

  f(
    458,
    "Halil Altıntop",
    ["halil altıntop", "halil altintop", "halil"],
    ["Kaiserslautern", "Schalke 04", "Eintracht Frankfurt", "Trabzonspor", "Augsburg"],
    ["Türk", "Almanya doğumlu"],
    ["Forvet", "Forvet Arkası"],
    ["1982 doğumlu"],
    ["Bundesliga'da uzun yıllar forma giydi", "Hamit Altıntop'un ikiz kardeşidir", "Tekniği ve bağlantı oyunuyla bilinir", "A Milli Takım formasını giydi"]
  ),

  f(
    459,
    "Cenk Tosun",
    ["cenk tosun", "cenk", "tosun paşa", "tosun pasa"],
    ["Gaziantepspor", "Beşiktaş", "Everton", "Crystal Palace"],
    ["Türk", "Almanya doğumlu"],
    ["Forvet", "Santrfor"],
    ["1991 doğumlu"],
    ["Beşiktaş'taki golcü sezonlarıyla hatırlanır", "Premier League'e yüksek bonservisle transfer oldu", "A Milli Takım'da kritik goller attı", "Ceza sahası bitiriciliğiyle bilinir"]
  ),
];