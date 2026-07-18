import type { GuessItem } from "../../types/game";

const uniqueTags = (tags: string[]) => Array.from(new Set(tags));

const includesAny = (text: string, keywords: string[]) => {
  const normalizedText = text.toLocaleLowerCase("tr-TR");

  return keywords.some((keyword) =>
    normalizedText.includes(keyword.toLocaleLowerCase("tr-TR"))
  );
};

const createHistoricalTags = (
  region: string[],
  period: string[],
  role: string[],
  events: string[],
  features: string[],
  explicitTags: string[] = []
) => {
  const combinedText = [...region, ...period, ...role, ...events, ...features].join(" ");
  const tags = [...explicitTags];

  if (
    includesAny(combinedText, [
      "antik",
      "mö ",
      "m.ö",
      "geç antik",
      "roma imparatorluğu",
      "antik yunan",
      "antik mısır",
      "antik çin",
      "anticağ",
      "firavun",
      "stoacı",
      "stoacılık",
    ])
  ) {
    tags.push("historical:ancient");
  }

  if (
    includesAny(combinedText, [
      "20. yüzyıl",
      "21. yüzyıl",
      "19. yüzyıl",
      "18. yüzyıl",
      "modern",
      "cumhuriyet",
      "soğuk savaş",
      "ii. dünya savaşı",
      "i. dünya savaşı",
      "bağımsızlık",
      "devrim",
      "sanayi devrimi",
    ])
  ) {
    tags.push("historical:modern");
  }

  if (
    includesAny(combinedText, [
      "kral",
      "kraliçe",
      "imparator",
      "imparatoriçe",
      "padişah",
      "başkan",
      "başbakan",
      "cumhurbaşkanı",
      "lider",
      "devlet adamı",
      "hükümdar",
      "han",
      "çar",
      "sultan",
      "monark",
      "firavun",
      "şogun",
      "diktatör",
      "devlet kurucu",
      "kurucu lider",
      "siyasi lider",
    ])
  ) {
    tags.push("historical:leader");
  }

  if (
    includesAny(combinedText, [
      "komutan",
      "asker",
      "general",
      "amiral",
      "savaşçı",
      "savaş",
      "sefer",
      "cephe",
      "fetih",
      "fatih",
      "gerilla",
      "ordular",
      "donanma",
      "haçlı",
      "muharebe",
    ])
  ) {
    tags.push("historical:war");
  }

  if (
    includesAny(combinedText, [
      "bilim insanı",
      "fizikçi",
      "matematikçi",
      "kimyager",
      "astronom",
      "hekim",
      "mühendis",
      "mucit",
      "biyolog",
      "kriptolog",
      "bilgisayar bilimci",
      "kozmolog",
      "astronot",
      "pilot",
      "tıp",
      "genetik",
      "kuantum",
      "elektrik",
      "astronomi",
      "bilimsel",
      "teknoloji",
    ])
  ) {
    tags.push("historical:science");
  }

  if (
    includesAny(combinedText, [
      "sanatçı",
      "ressam",
      "heykeltıraş",
      "besteci",
      "müzisyen",
      "piyanist",
      "mimar",
      "şair",
      "yazar",
      "edebiyat",
      "opera",
      "roman",
      "tiyatro",
      "fresk",
      "resim",
      "müzik",
    ])
  ) {
    tags.push("historical:art");
  }

  if (
    includesAny(combinedText, [
      "filozof",
      "düşünür",
      "felsefe",
      "psikanalist",
      "sosyolog",
      "ekonomist",
      "ahlak",
      "mantık",
      "stoacı",
      "ampirizm",
      "rasyonalizm",
      "varoluşçuluk",
    ])
  ) {
    tags.push("historical:philosophy");
  }

  if (includesAny(combinedText, ["osmanlı", "türkiye", "anadolu", "türk"])) {
    tags.push("historical:turkish");
  }

  return uniqueTags(tags);
};

const createHistoricalFigure = (
  id: number,
  name: string,
  answers: string[],
  region: string[],
  period: string[],
  role: string[],
  events: string[],
  features: string[],
  tags: string[] = []
): GuessItem => {
  return {
    id,
    mode: "historicalFigure",
    modeLabel: "Tarihi Kişi",
    name,
    answers,
    tags: createHistoricalTags(region, period, role, events, features, tags),
    hintGroups: [
      {
        key: "region",
        label: "Ülke / Bölge",
        hints: region,
      },
      {
        key: "period",
        label: "Dönem",
        hints: period,
      },
      {
        key: "role",
        label: "Rol",
        hints: role,
      },
      {
        key: "events",
        label: "Olaylar",
        hints: events,
      },
      {
        key: "features",
        label: "Özellik",
        hints: features,
      },
    ],
  };
};

const h = createHistoricalFigure;

export const historicalFigures: GuessItem[] = [
  h(
    5001,
    "Mustafa Kemal Atatürk",
    ["atatürk", "ataturk", "mustafa kemal", "mustafa kemal atatürk", "mustafa kemal ataturk"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Anadolu"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi", "Cumhuriyetin kuruluş dönemi"],
    ["Asker", "Devlet adamı", "Kurucu lider", "Cumhurbaşkanı"],
    ["Çanakkale Cephesi", "Kurtuluş Savaşı", "Cumhuriyetin ilanı", "Harf Devrimi"],
    ["Modernleşme reformları", "Liderlik", "Askeri strateji", "Nutuk ile hatırlanır"]
  ),

  h(
    5002,
    "Napolyon Bonapart",
    ["napolyon", "napolyon bonapart", "napoleon", "napoleon bonaparte", "bonapart", "bonaparte"],
    ["Fransa", "Avrupa", "Korsika"],
    ["18. yüzyıl sonu", "19. yüzyıl başı", "Fransız Devrimi sonrası dönem"],
    ["Asker", "İmparator", "Komutan", "Devlet adamı"],
    ["Waterloo Savaşı", "Austerlitz Savaşı", "Napolyon Savaşları", "Elba sürgünü"],
    ["Askeri deha", "Avrupa siyasetini etkiledi", "Napolyon Kanunları", "Avrupa tarihinin en etkili liderlerinden"]
  ),

  h(
    5003,
    "Hannibal Barca",
    ["hannibal", "hannibal barca", "hanibal", "hanibal barka"],
    ["Kartaca", "Kuzey Afrika", "Akdeniz"],
    ["Antik Çağ", "MÖ 3. yüzyıl", "Roma Cumhuriyeti dönemi"],
    ["Komutan", "Stratejist", "Kartacalı general"],
    ["İkinci Pön Savaşı", "Alpleri aşması", "Cannae Savaşı", "Roma'ya karşı sefer"],
    ["Fillerle Alpleri geçmesiyle bilinir", "Roma'nın büyük rakiplerinden", "Taktik zekası", "Kartaca efsanesi"]
  ),

  h(
    5004,
    "Julius Caesar",
    ["julius caesar", "caesar", "sezar", "jül sezar", "jul sezar"],
    ["Roma", "Akdeniz", "Galya"],
    ["Antik Çağ", "MÖ 1. yüzyıl", "Roma Cumhuriyeti'nin son dönemi"],
    ["Komutan", "Devlet adamı", "Diktatör"],
    ["Galya Savaşları", "Rubicon'u geçmesi", "Roma iç savaşı", "Senato suikastı"],
    ["Veni vidi vici sözüyle bilinir", "Roma tarihinin merkezi figürlerinden", "Askeri ve siyasi lider"]
  ),

  h(
    5005,
    "Cleopatra",
    ["cleopatra", "kleopatra"],
    ["Mısır", "İskenderiye", "Doğu Akdeniz"],
    ["Antik Çağ", "Ptolemaios dönemi", "Roma Cumhuriyeti'nin son dönemi"],
    ["Kraliçe", "Siyasi lider", "Diplomat"],
    ["Roma ile ittifaklar", "Julius Caesar ile bağlantı", "Marcus Antonius ile bağlantı"],
    ["Mısır'ın son güçlü kraliçesi", "Siyasi zekasıyla bilinir", "Antik dünyanın ikonik figürü"]
  ),

  h(
    5006,
    "Alexander the Great",
    ["alexander", "alexander the great", "büyük iskender", "buyuk iskender", "iskender"],
    ["Makedonya", "Yunan dünyası", "Pers İmparatorluğu coğrafyası"],
    ["Antik Çağ", "MÖ 4. yüzyıl", "Helenistik dönem başlangıcı"],
    ["Kral", "Komutan", "Fatih"],
    ["Pers seferi", "Gaugamela Savaşı", "Mısır'a girişi", "Büyük imparatorluk kurması"],
    ["Genç yaşta büyük fetihler", "Askeri deha", "Helenistik kültürün yayılması"]
  ),

  h(
    5007,
    "Cengiz Han",
    ["cengiz han", "genghis khan", "temuçin", "temucin"],
    ["Moğolistan", "Orta Asya", "Avrasya bozkırları"],
    ["12. yüzyıl", "13. yüzyıl", "Orta Çağ"],
    ["Han", "Komutan", "İmparatorluk kurucusu"],
    ["Moğol kabilelerini birleştirmesi", "Büyük fetihler", "Moğol İmparatorluğu'nun kuruluşu"],
    ["Bozkır stratejisi", "Büyük imparatorluk", "Atlı savaş taktikleri"]
  ),

  h(
    5008,
    "Fatih Sultan Mehmet",
    ["fatih", "fatih sultan mehmet", "mehmet ii", "2. mehmet", "ikinci mehmet"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu ve Balkanlar"],
    ["15. yüzyıl", "Orta Çağ sonu", "Osmanlı yükseliş dönemi"],
    ["Padişah", "Komutan", "Devlet adamı"],
    ["İstanbul'un fethi", "Topkapı Sarayı dönemi", "Osmanlı'nın büyümesi"],
    ["Fatih unvanı", "Genç yaşta büyük fetih", "Askeri ve siyasi vizyon"]
  ),

  h(
    5009,
    "Kanuni Sultan Süleyman",
    ["kanuni", "kanuni sultan süleyman", "kanuni sultan suleyman", "süleyman", "suleyman"],
    ["Osmanlı İmparatorluğu", "Avrupa", "Akdeniz"],
    ["16. yüzyıl", "Osmanlı klasik çağı", "Erken modern dönem"],
    ["Padişah", "Kanun koyucu", "Devlet adamı"],
    ["Mohaç Savaşı", "Viyana kuşatması", "Akdeniz mücadelesi"],
    ["Muhteşem Süleyman olarak da bilinir", "Uzun saltanat", "Osmanlı'nın zirve dönemi"]
  ),

  h(
    5010,
    "Leonardo da Vinci",
    ["leonardo", "leonardo da vinci", "da vinci"],
    ["İtalya", "Floransa", "Rönesans Avrupa'sı"],
    ["15. yüzyıl", "16. yüzyıl", "Rönesans"],
    ["Sanatçı", "Mucit", "Bilim insanı"],
    ["Rönesans çalışmaları", "Anatomi çizimleri", "Mühendislik tasarımları"],
    ["Mona Lisa ile bilinir", "Çok yönlü deha", "Sanat ve bilimi birleştirdi"]
  ),

  h(
    5011,
    "Michelangelo",
    ["michelangelo", "mikelenjelo"],
    ["İtalya", "Floransa", "Roma"],
    ["Rönesans", "15. yüzyıl", "16. yüzyıl"],
    ["Sanatçı", "Heykeltıraş", "Ressam", "Mimar"],
    ["Sistina Şapeli", "David heykeli", "Rönesans sanatı"],
    ["Heykel ve freskleriyle bilinir", "Rönesans ustası", "Sanatta anatomi bilgisi"]
  ),

  h(
    5012,
    "Albert Einstein",
    ["einstein", "albert einstein"],
    ["Almanya", "İsviçre", "ABD"],
    ["20. yüzyıl", "Modern fizik dönemi"],
    ["Fizikçi", "Bilim insanı", "Teorisyen"],
    ["Görelilik teorisi", "Nobel Fizik Ödülü", "Modern fiziğe katkılar"],
    ["E=mc² ile bilinir", "Dahi sembolü", "Teorik fizik"]
  ),

  h(
    5013,
    "Isaac Newton",
    ["newton", "isaac newton"],
    ["İngiltere", "Cambridge", "Avrupa bilim tarihi"],
    ["17. yüzyıl", "18. yüzyıl başı", "Bilimsel Devrim"],
    ["Fizikçi", "Matematikçi", "Bilim insanı"],
    ["Yerçekimi çalışmaları", "Hareket yasaları", "Calculus çalışmaları"],
    ["Elma hikayesiyle anılır", "Klasik mekaniğin kurucularından", "Bilimsel devrim figürü"]
  ),

  h(
    5014,
    "Nikola Tesla",
    ["tesla", "nikola tesla"],
    ["Sırbistan kökenli", "Avrupa", "ABD"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Mucit", "Mühendis", "Bilim insanı"],
    ["Alternatif akım sistemleri", "Elektrik çalışmaları", "Kablosuz enerji fikirleri"],
    ["Elektrik dehası", "İleri görüşlü mucit", "AC sistemiyle bilinir"]
  ),

  h(
    5015,
    "Marie Curie",
    ["marie curie", "curie", "maria sklodowska curie"],
    ["Polonya", "Fransa", "Paris"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Bilim insanı", "Fizikçi", "Kimyager"],
    ["Radyoaktivite çalışmaları", "Nobel ödülleri", "Polonyum ve radyum araştırmaları"],
    ["İki farklı alanda Nobel kazandı", "Bilim tarihinde öncü kadın", "Radyoaktivite kavramıyla bilinir"]
  ),

  h(
    5016,
    "Galileo Galilei",
    ["galileo", "galileo galilei"],
    ["İtalya", "Pisa", "Floransa"],
    ["16. yüzyıl", "17. yüzyıl", "Bilimsel Devrim"],
    ["Bilim insanı", "Astronom", "Fizikçi"],
    ["Teleskop gözlemleri", "Güneş merkezli sistem tartışmaları", "Engizisyon süreci"],
    ["Modern bilimin öncülerinden", "Astronomi gözlemleriyle bilinir", "Deneysel yaklaşım"]
  ),

  h(
    5017,
    "Sokrates",
    ["sokrates", "socrates"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Filozof", "Öğretmen", "Düşünür"],
    ["Atina tartışmaları", "Öğrencileriyle felsefi diyaloglar", "Yargılanması"],
    ["Sorgulama yöntemi", "Felsefenin kurucu figürlerinden", "Platon ile bağlantılı"]
  ),

  h(
    5018,
    "Platon",
    ["platon", "plato"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Filozof", "Akademi kurucusu", "Düşünür"],
    ["Akademia", "Devlet eseri", "Sokrates'in öğrencisi olması"],
    ["İdealar kuramı", "Batı felsefesinin temel isimlerinden", "Sokrates ve Aristoteles ile bağlantılı"]
  ),

  h(
    5019,
    "Aristoteles",
    ["aristoteles", "aristotle"],
    ["Antik Yunan", "Makedonya", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Filozof", "Bilim insanı", "Öğretmen"],
    ["Lykeion", "Büyük İskender'e hocalık", "Mantık çalışmaları"],
    ["Çok yönlü düşünür", "Mantık ve bilimle bağlantılı", "Platon'un öğrencisi"]
  ),

  h(
    5020,
    "Martin Luther King Jr.",
    ["martin luther king", "martin luther king jr", "mlk"],
    ["ABD", "Güney eyaletleri", "Washington"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Din adamı", "Konuşmacı"],
    ["Sivil haklar yürüyüşleri", "Washington konuşması", "Eşitlik mücadelesi"],
    ["Şiddetsiz direniş", "I Have a Dream konuşmasıyla bilinir", "Toplumsal eşitlik figürü"]
  ),

  h(
    5021,
    "Mahatma Gandhi",
    ["gandhi", "mahatma gandhi", "gandi"],
    ["Hindistan", "Güney Afrika", "Britanya Hindistanı"],
    ["19. yüzyıl sonu", "20. yüzyıl"],
    ["Lider", "Aktivist", "Düşünür"],
    ["Hindistan bağımsızlık hareketi", "Tuz Yürüyüşü", "Şiddetsiz direniş"],
    ["Sivil itaatsizlik", "Şiddetsiz mücadele", "Bağımsızlık hareketinin sembolü"]
  ),

  h(
    5022,
    "Nelson Mandela",
    ["mandela", "nelson mandela"],
    ["Güney Afrika", "Johannesburg", "Cape Town"],
    ["20. yüzyıl", "Apartheid dönemi", "Demokratik dönüşüm dönemi"],
    ["Lider", "Aktivist", "Cumhurbaşkanı"],
    ["Apartheid karşıtı mücadele", "Robben Island hapsi", "Güney Afrika başkanlığı"],
    ["Uzlaşma figürü", "Özgürlük mücadelesi", "Nobel Barış Ödülü"]
  ),

  h(
    5023,
    "Abraham Lincoln",
    ["lincoln", "abraham lincoln"],
    ["ABD", "Washington", "Illinois"],
    ["19. yüzyıl", "Amerikan İç Savaşı dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["Amerikan İç Savaşı", "Köleliğin kaldırılması süreci", "Gettysburg konuşması"],
    ["Uzun boyuyla anılır", "Birlik savunucusu", "ABD tarihinin önemli başkanlarından"]
  ),

  h(
    5024,
    "Winston Churchill",
    ["churchill", "winston churchill"],
    ["Birleşik Krallık", "Londra", "Avrupa"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi"],
    ["Başbakan", "Devlet adamı", "Konuşmacı"],
    ["II. Dünya Savaşı", "Savaş dönemi konuşmaları", "Britanya liderliği"],
    ["Güçlü hitabet", "Puro ile anılır", "Savaş dönemi lideri"]
  ),

  h(
    5025,
    "Kraliçe Elizabeth II",
    ["elizabeth", "queen elizabeth", "queen elizabeth ii", "2. elizabeth", "kraliçe elizabeth", "kralice elizabeth"],
    ["Birleşik Krallık", "Londra", "Commonwealth"],
    ["20. yüzyıl", "21. yüzyıl", "Modern monarşi dönemi"],
    ["Kraliçe", "Monark", "Devlet başkanı"],
    ["Uzun saltanat", "Commonwealth dönemi", "Modern İngiliz tarihi"],
    ["Çok uzun süre tahtta kaldı", "Monarşi sembolü", "Buckingham Sarayı ile bağlantılı"]
  ),

  h(
    5026,
    "Selahaddin Eyyubi",
    ["selahaddin", "selahaddin eyyubi", "selahattin eyyubi", "saladin", "salahaddin"],
    ["Mısır", "Suriye", "Ortadoğu", "Kudüs"],
    ["12. yüzyıl", "Orta Çağ", "Haçlı Seferleri dönemi"],
    ["Sultan", "Komutan", "Devlet adamı", "Eyyubi hükümdarı"],
    ["Kudüs'ün alınması", "Hıttin Savaşı", "Haçlılarla mücadele", "Eyyubi Devleti'nin kuruluşu"],
    ["Haçlılara karşı direnişiyle bilinir", "Hoşgörüsüyle anılır", "Ortadoğu'nun sembol komutanlarından"]
  ),

  h(
    5027,
    "Timur",
    ["timur", "aksak timur", "timurlenk", "tamerlane", "emir timur"],
    ["Orta Asya", "Semerkant", "Maveraünnehir"],
    ["14. yüzyıl", "15. yüzyıl başı", "Orta Çağ"],
    ["Han", "Komutan", "İmparatorluk kurucusu", "Fatih"],
    ["Ankara Savaşı", "Büyük fetihler", "Timur İmparatorluğu'nun kuruluşu", "Yıldırım Bayezid'i yenmesi"],
    ["Semerkant'ı başkent yapmasıyla bilinir", "Bozkır fatihi", "Askeri dehasıyla anılır"]
  ),

  h(
    5028,
    "Mimar Sinan",
    ["mimar sinan", "sinan", "koca sinan"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu"],
    ["16. yüzyıl", "Osmanlı klasik çağı", "Erken modern dönem"],
    ["Mimar", "Mühendis", "Baş mimar"],
    ["Süleymaniye Camii", "Selimiye Camii", "Osmanlı mimarisinin gelişimi", "Yüzlerce eser inşası"],
    ["Selimiye'yi ustalık eseri sayması", "Osmanlı mimarisinin zirvesi", "Kubbe ve denge ustalığı"]
  ),

  h(
    5029,
    "Mevlana Celaleddin Rumi",
    ["mevlana", "mevlana celaleddin rumi", "rumi", "celaleddin rumi", "mevlana rumi"],
    ["Anadolu", "Konya", "Horasan kökenli"],
    ["13. yüzyıl", "Orta Çağ", "Anadolu Selçuklu dönemi"],
    ["Düşünür", "Şair", "Mutasavvıf", "Din adamı"],
    ["Mesnevi'nin yazılması", "Şems ile buluşması", "Konya'da tasavvuf öğretisi"],
    ["Hoşgörü çağrısıyla bilinir", "Mesnevi ile anılır", "Sema ve Mevlevilikle bağlantılı"]
  ),

  h(
    5030,
    "İbn-i Sina",
    ["ibni sina", "ibn-i sina", "ibn sina", "avicenna", "avisenna"],
    ["Orta Asya", "Buhara", "İran coğrafyası"],
    ["10. yüzyıl", "11. yüzyıl", "Orta Çağ", "İslam altın çağı"],
    ["Bilim insanı", "Hekim", "Filozof"],
    ["El-Kanun fi't-Tıb eseri", "Tıp ve felsefe çalışmaları", "İslam biliminin gelişimi"],
    ["Tıp kitabı yüzyıllarca okutuldu", "Çok yönlü bilgin", "Doğu ve Batı bilimini etkiledi"]
  ),

  h(
    5031,
    "William Shakespeare",
    ["shakespeare", "william shakespeare", "şekspir"],
    ["İngiltere", "Londra", "Stratford"],
    ["16. yüzyıl", "17. yüzyıl başı", "Rönesans"],
    ["Oyun yazarı", "Şair", "Sanatçı"],
    ["Hamlet", "Romeo ve Juliet", "Globe Tiyatrosu dönemi"],
    ["Dünya edebiyatının en ünlü yazarlarından", "Trajedi ve komedileriyle bilinir", "İngilizceyi zenginleştirdi"]
  ),

  h(
    5032,
    "Ludwig van Beethoven",
    ["beethoven", "ludwig van beethoven"],
    ["Almanya", "Avusturya", "Viyana"],
    ["18. yüzyıl sonu", "19. yüzyıl başı", "Klasik ve Romantik dönem"],
    ["Besteci", "Piyanist", "Sanatçı"],
    ["9. Senfoni", "Ay Işığı Sonatı", "Klasik müzikten Romantizme geçiş"],
    ["Sağırlığına rağmen beste yapmasıyla bilinir", "Batı müziğinin devlerinden", "9. Senfoni ile anılır"]
  ),

  h(
    5033,
    "Vincent van Gogh",
    ["van gogh", "vincent van gogh", "vangogh"],
    ["Hollanda", "Fransa", "Avrupa"],
    ["19. yüzyıl", "Post-empresyonizm dönemi"],
    ["Ressam", "Sanatçı"],
    ["Yıldızlı Gece", "Ayçiçekleri", "Kısa ve yoğun sanat dönemi"],
    ["Yaşarken tanınmayan ressam", "Canlı renkleriyle bilinir", "Post-empresyonizmin önemli isimlerinden"]
  ),

  h(
    5034,
    "Charles Darwin",
    ["darwin", "charles darwin"],
    ["İngiltere", "Avrupa", "Galapagos"],
    ["19. yüzyıl", "Bilimsel gelişim dönemi"],
    ["Bilim insanı", "Doğa bilimci", "Teorisyen"],
    ["Beagle yolculuğu", "Türlerin Kökeni eseri", "Doğal seçilim çalışmaları"],
    ["Evrim teorisiyle bilinir", "Biyolojiyi kökten etkiledi", "Galapagos gözlemleriyle anılır"]
  ),

  h(
    5035,
    "Christopher Columbus",
    ["kristof kolomb", "kolomb", "columbus", "christopher columbus"],
    ["İtalya kökenli", "İspanya", "Atlantik"],
    ["15. yüzyıl", "16. yüzyıl başı", "Keşifler Çağı"],
    ["Denizci", "Kaşif", "Kaptan"],
    ["Atlantik'i geçmesi", "Amerika kıtasına ulaşması", "İspanya adına seferler"],
    ["Yeni Dünya'ya ulaşmasıyla bilinir", "Keşifler Çağı'nın sembolü", "Hindistan'a gittiğini sanmasıyla anılır"]
  ),

  h(
    5036,
    "Joan of Arc",
    ["jan dark", "jeanne d'arc", "joan of arc", "jandark", "orleans bakiresi"],
    ["Fransa", "Orleans", "Avrupa"],
    ["15. yüzyıl", "Orta Çağ sonu", "Yüzyıl Savaşları dönemi"],
    ["Komutan", "Asker", "Ulusal kahraman"],
    ["Orleans kuşatması", "Yüzyıl Savaşları", "Yargılanması"],
    ["Genç yaşta ordulara önderlik etti", "Fransa'nın ulusal sembollerinden", "İnancı ve cesaretiyle anılır"]
  ),

  h(
    5037,
    "George Washington",
    ["washington", "george washington"],
    ["ABD", "Virginia", "Kuzey Amerika"],
    ["18. yüzyıl", "Amerikan Bağımsızlık dönemi"],
    ["Komutan", "Devlet adamı", "Başkan", "Kurucu lider"],
    ["Amerikan Bağımsızlık Savaşı", "İlk ABD başkanlığı", "Yeni cumhuriyetin kuruluşu"],
    ["ABD'nin ilk başkanı olmasıyla bilinir", "Kurucu babalardan", "Bağımsızlık mücadelesinin lideri"]
  ),

  h(
    5038,
    "Konfüçyüs",
    ["konfucyus", "konfüçyüs", "confucius", "kong fuzi"],
    ["Çin", "Doğu Asya"],
    ["Antik Çağ", "MÖ 6. yüzyıl", "MÖ 5. yüzyıl"],
    ["Filozof", "Öğretmen", "Düşünür"],
    ["Ahlak ve toplum öğretisi", "Öğrencileriyle diyaloglar", "Konfüçyüsçülüğün doğuşu"],
    ["Ahlak ve erdem öğretisiyle bilinir", "Doğu düşüncesini derinden etkiledi", "Özdeyişleriyle anılır"]
  ),

  h(
    5039,
    "Sigmund Freud",
    ["freud", "sigmund freud", "froyd"],
    ["Avusturya", "Viyana", "Avrupa"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Bilim insanı", "Hekim", "Teorisyen", "Psikanalist"],
    ["Psikanalizin kuruluşu", "Rüya çalışmaları", "Bilinçdışı kuramı"],
    ["Psikanalizin kurucusu olarak bilinir", "Bilinçdışı kavramıyla anılır", "Psikolojiyi derinden etkiledi"]
  ),

  h(
    5040,
    "Yavuz Sultan Selim",
    ["yavuz", "yavuz sultan selim", "selim i", "1. selim", "birinci selim"],
    ["Osmanlı İmparatorluğu", "Mısır", "Ortadoğu ve Anadolu"],
    ["16. yüzyıl", "Osmanlı yükseliş dönemi", "Erken modern dönem"],
    ["Padişah", "Komutan", "Halife", "Devlet adamı"],
    ["Çaldıran Savaşı", "Mısır seferi", "Halifeliğin Osmanlı'ya geçmesi"],
    ["Kısa ama etkili saltanatıyla bilinir", "Sert mizacıyla anılır", "Osmanlı topraklarını genişletti"]
  ),

  h(
    5041,
    "Osman Gazi",
    ["osman gazi", "osman bey", "osman i", "1. osman"],
    ["Anadolu", "Bilecik", "Söğüt", "Osmanlı Beyliği"],
    ["13. yüzyıl", "14. yüzyıl başı", "Beylikler dönemi"],
    ["Bey", "Kurucu lider", "Savaşçı"],
    ["Osmanlı Beyliği'nin kuruluşu", "Bizans sınırlarında genişleme", "Söğüt çevresinde güçlenme"],
    ["Osmanlı hanedanının kurucusu", "Kuruluş dönemi figürü", "Beylikten devlete geçişin sembolü"]
  ),

  h(
    5042,
    "Orhan Gazi",
    ["orhan gazi", "orhan bey", "orhan i", "1. orhan"],
    ["Osmanlı Beyliği", "Bursa", "Anadolu"],
    ["14. yüzyıl", "Osmanlı kuruluş dönemi"],
    ["Bey", "Devlet adamı", "Komutan"],
    ["Bursa'nın alınması", "Osmanlı teşkilatlanması", "Rumeli'ye geçiş süreci"],
    ["Osmanlı'nın kurumsallaşmasında etkili oldu", "Bursa dönemiyle bilinir", "Kuruluş döneminin önemli hükümdarı"]
  ),

  h(
    5043,
    "Yıldırım Bayezid",
    ["yıldırım bayezid", "yildirim bayezid", "bayezid i", "1. bayezid"],
    ["Osmanlı İmparatorluğu", "Anadolu", "Balkanlar"],
    ["14. yüzyıl sonu", "15. yüzyıl başı"],
    ["Padişah", "Komutan"],
    ["Niğbolu Savaşı", "Ankara Savaşı", "Anadolu'da siyasi birlik çabası"],
    ["Yıldırım lakabıyla bilinir", "Hızlı seferleriyle anılır", "Timur ile mücadelesiyle hatırlanır"]
  ),

  h(
    5044,
    "II. Abdülhamid",
    ["abdülhamid", "abdulhamid", "2. abdülhamid", "ii abdülhamid", "ikinci abdülhamid"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Yıldız Sarayı"],
    ["19. yüzyıl sonu", "20. yüzyıl başı", "Osmanlı son dönemi"],
    ["Padişah", "Devlet adamı"],
    ["I. Meşrutiyet", "Yıldız Sarayı dönemi", "Demiryolu projeleri", "Osmanlı modernleşmesi"],
    ["Uzun saltanatıyla bilinir", "Osmanlı son döneminin tartışmalı figürlerinden", "Diplomasi ve denge siyasetiyle anılır"]
  ),

  h(
    5045,
    "Enver Paşa",
    ["enver paşa", "enver pasa", "ismail enver"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Kafkasya"],
    ["20. yüzyıl başı", "I. Dünya Savaşı dönemi"],
    ["Asker", "Paşa", "Siyasi figür"],
    ["İttihat ve Terakki dönemi", "I. Dünya Savaşı", "Sarıkamış Harekâtı"],
    ["Osmanlı son döneminin etkili askerlerinden", "Tartışmalı bir tarihi figür", "İttihat ve Terakki ile bağlantılı"]
  ),

  h(
    5046,
    "Kazım Karabekir",
    ["kazım karabekir", "kazim karabekir"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Doğu Anadolu"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi"],
    ["Asker", "Komutan", "Siyasetçi"],
    ["Doğu Cephesi", "Kurtuluş Savaşı", "Gümrü Antlaşması"],
    ["Doğu Cephesi komutanı olarak bilinir", "Milli Mücadele figürü", "Askeri ve siyasi yönüyle anılır"]
  ),

  h(
    5047,
    "İsmet İnönü",
    ["ismet inönü", "ismet inonu", "inönü", "inonu"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Ankara"],
    ["20. yüzyıl", "Cumhuriyet dönemi", "Kurtuluş Savaşı dönemi"],
    ["Asker", "Devlet adamı", "Cumhurbaşkanı", "Başbakan"],
    ["İnönü Savaşları", "Lozan Antlaşması", "II. Dünya Savaşı dönemi politikaları"],
    ["Türkiye'nin ikinci cumhurbaşkanı", "Lozan ile anılır", "Milli Mücadele komutanlarından"]
  ),

  h(
    5048,
    "Fevzi Çakmak",
    ["fevzi çakmak", "fevzi cakmak", "mareşal fevzi çakmak", "maresal fevzi cakmak"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Ankara"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi", "Cumhuriyetin ilk dönemi"],
    ["Asker", "Mareşal", "Genelkurmay Başkanı"],
    ["Kurtuluş Savaşı", "Sakarya Meydan Muharebesi", "Cumhuriyet ordusunun kuruluşu"],
    ["Mareşal unvanıyla bilinir", "Türk askeri tarihinin önemli isimlerinden", "Cumhuriyetin erken döneminde etkili oldu"]
  ),

  h(
    5049,
    "Ali Kuşçu",
    ["ali kuşçu", "ali kuscu"],
    ["Semerkant", "İstanbul", "Osmanlı İmparatorluğu"],
    ["15. yüzyıl", "Bilim tarihi", "Osmanlı klasik öncesi"],
    ["Astronom", "Matematikçi", "Bilim insanı"],
    ["Semerkant okulunda çalışmalar", "İstanbul'a gelişi", "Astronomi ve matematik eserleri"],
    ["Osmanlı bilim hayatını etkiledi", "Astronomiyle bilinir", "Matematik çalışmalarıyla anılır"]
  ),

  h(
    5050,
    "Piri Reis",
    ["piri reis", "pirireis"],
    ["Osmanlı İmparatorluğu", "Akdeniz", "Gelibolu"],
    ["15. yüzyıl sonu", "16. yüzyıl", "Osmanlı denizcilik dönemi"],
    ["Denizci", "Haritacı", "Amiral"],
    ["Piri Reis haritası", "Kitab-ı Bahriye", "Akdeniz denizciliği"],
    ["Ünlü dünya haritasıyla bilinir", "Osmanlı denizcilik tarihinin önemli ismi", "Haritacılıkta öne çıkar"]
  ),

  h(
    5051,
    "Barbaros Hayreddin Paşa",
    ["barbaros", "barbaros hayreddin", "barbaros hayreddin paşa", "barbaros hayreddin pasa"],
    ["Osmanlı İmparatorluğu", "Akdeniz", "Cezayir"],
    ["16. yüzyıl", "Osmanlı deniz gücü dönemi"],
    ["Kaptan-ı Derya", "Denizci", "Komutan"],
    ["Preveze Deniz Savaşı", "Akdeniz hakimiyeti", "Osmanlı donanmasının güçlenmesi"],
    ["Osmanlı denizciliğinin sembol isimlerinden", "Preveze zaferiyle bilinir", "Akdeniz'de Osmanlı gücünü artırdı"]
  ),

  h(
    5052,
    "Evliya Çelebi",
    ["evliya çelebi", "evliya celebi"],
    ["Osmanlı İmparatorluğu", "Anadolu", "Balkanlar", "Ortadoğu"],
    ["17. yüzyıl", "Osmanlı klasik dönemi"],
    ["Gezgin", "Yazar", "Seyyah"],
    ["Seyahatname", "Osmanlı coğrafyasında geziler", "Kültür ve şehir anlatıları"],
    ["Seyahatname ile bilinir", "Geniş coğrafyaları anlattı", "Osmanlı toplum hayatına dair bilgiler verdi"]
  ),

  h(
    5053,
    "Katip Çelebi",
    ["katip çelebi", "katip celebi", "hacı kalfa", "haci kalfa"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu"],
    ["17. yüzyıl", "Osmanlı bilim ve düşünce dönemi"],
    ["Bilgin", "Yazar", "Coğrafyacı"],
    ["Cihannüma", "Keşfü'z-Zunûn", "Osmanlı düşünce hayatı"],
    ["Hacı Kalfa adıyla da bilinir", "Coğrafya ve bibliyografya çalışmalarıyla anılır", "Çok yönlü Osmanlı bilgini"]
  ),

  h(
    5054,
    "Uluğ Bey",
    ["uluğ bey", "ulug bey"],
    ["Semerkant", "Maveraünnehir", "Timurlu Devleti"],
    ["15. yüzyıl", "İslam bilim tarihi", "Timurlu dönemi"],
    ["Hükümdar", "Astronom", "Matematikçi"],
    ["Semerkant Rasathanesi", "Yıldız katalogları", "Astronomi çalışmaları"],
    ["Astronomi alanındaki çalışmalarıyla bilinir", "Semerkant bilim çevresinin lideri", "Bilgin hükümdar"]
  ),

  h(
    5055,
    "Farabi",
    ["farabi", "el farabi", "al farabi"],
    ["Türkistan", "İslam dünyası", "Bağdat"],
    ["9. yüzyıl", "10. yüzyıl", "İslam altın çağı"],
    ["Filozof", "Bilim insanı", "Düşünür"],
    ["Felsefe çalışmaları", "Mantık ve siyaset düşüncesi", "İslam felsefesinin gelişimi"],
    ["İkinci öğretmen olarak anılır", "Felsefe ve mantıkla bilinir", "İslam düşüncesini etkiledi"]
  ),

  h(
    5056,
    "Biruni",
    ["biruni", "el biruni", "al biruni"],
    ["Harezm", "Orta Asya", "İslam dünyası"],
    ["10. yüzyıl", "11. yüzyıl", "İslam altın çağı"],
    ["Bilim insanı", "Astronom", "Matematikçi", "Coğrafyacı"],
    ["Hindistan çalışmaları", "Astronomi gözlemleri", "Coğrafya ve ölçüm çalışmaları"],
    ["Çok yönlü bilgin", "Hindistan üzerine çalışmalarıyla bilinir", "Bilimsel ölçüm yöntemleriyle anılır"]
  ),

  h(
    5057,
    "Harezmi",
    ["harezmi", "el harezmi", "al khwarizmi", "al khwarazmi"],
    ["Harezm", "Bağdat", "İslam dünyası"],
    ["8. yüzyıl", "9. yüzyıl", "İslam altın çağı"],
    ["Matematikçi", "Astronom", "Bilim insanı"],
    ["Cebir çalışmaları", "Bağdat Bilgelik Evi", "Matematik eserleri"],
    ["Cebirin kurucularından sayılır", "Algoritma kelimesiyle bağlantılıdır", "Matematik tarihini etkiledi"]
  ),

  h(
    5058,
    "Arşimet",
    ["arşimet", "arsimet", "archimedes"],
    ["Antik Yunan", "Sicilya", "Siraküza"],
    ["Antik Çağ", "MÖ 3. yüzyıl"],
    ["Matematikçi", "Mühendis", "Bilim insanı"],
    ["Kaldıraç çalışmaları", "Suyun kaldırma kuvveti", "Siraküza savunması"],
    ["Eureka sözüyle anılır", "Antik bilimin en büyük isimlerinden", "Geometri ve fizik çalışmalarıyla bilinir"]
  ),

  h(
    5059,
    "Hipokrat",
    ["hipokrat", "hippocrates"],
    ["Antik Yunan", "Kos Adası"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Hekim", "Tıp insanı"],
    ["Tıp geleneğinin gelişimi", "Hipokrat yemini", "Hastalıkların doğal açıklamaları"],
    ["Tıbbın babası olarak anılır", "Hipokrat yeminiyle bilinir", "Tıpta gözlemci yaklaşımı temsil eder"]
  ),

  h(
    5060,
    "Homeros",
    ["homeros", "homer"],
    ["Antik Yunan", "Ege dünyası"],
    ["Antik Çağ", "MÖ 8. yüzyıl civarı"],
    ["Şair", "Anlatıcı", "Edebiyat figürü"],
    ["İlyada", "Odysseia", "Antik Yunan destan geleneği"],
    ["Batı edebiyatının temel isimlerinden sayılır", "Destanlarıyla bilinir", "Troya anlatılarıyla bağlantılıdır"]
  ),

  h(
    5061,
    "Buda",
    ["buda", "buddha", "siddhartha gautama", "sidarta gautama"],
    ["Hindistan", "Nepal bölgesi", "Ganj havzası"],
    ["Antik Çağ", "MÖ 6. yüzyıl", "MÖ 5. yüzyıl"],
    ["Düşünür", "Din kurucusu", "Öğretmen"],
    ["Aydınlanma anlatısı", "Budizm öğretisi", "Dört Yüce Hakikat"],
    ["Budizmin kurucusu olarak bilinir", "Aydınlanma kavramıyla anılır", "Doğu düşüncesini etkiledi"]
  ),

  h(
    5062,
    "Laozi",
    ["laozi", "lao tzu", "laotse"],
    ["Çin", "Doğu Asya"],
    ["Antik Çağ", "MÖ 6. yüzyıl civarı"],
    ["Filozof", "Düşünür", "Öğretmen"],
    ["Tao Te Ching", "Taoizm öğretisi", "Doğa ve uyum düşüncesi"],
    ["Taoizmin kurucu figürü olarak anılır", "Tao kavramıyla bilinir", "Doğu felsefesini etkiledi"]
  ),

  h(
    5063,
    "Qin Shi Huang",
    ["qin shi huang", "çi şı huang", "qin imparatoru", "ilk çin imparatoru"],
    ["Çin", "Qin Hanedanı", "Doğu Asya"],
    ["MÖ 3. yüzyıl", "Antik Çin"],
    ["İmparator", "Devlet kurucu", "Hükümdar"],
    ["Çin'in birleştirilmesi", "Qin Hanedanı", "Terracotta Ordusu", "Büyük Duvar projeleri"],
    ["Çin'in ilk imparatoru olarak bilinir", "Merkezi yönetimi güçlendirdi", "Terracotta Ordusu ile anılır"]
  ),

  h(
    5064,
    "Aşoka",
    ["aşoka", "asoka", "ashoka", "ashoka the great"],
    ["Hindistan", "Maurya İmparatorluğu", "Güney Asya"],
    ["MÖ 3. yüzyıl", "Antik Hindistan"],
    ["İmparator", "Hükümdar", "Devlet adamı"],
    ["Kalinga Savaşı", "Budizmi desteklemesi", "Aşoka fermanları"],
    ["Maurya İmparatorluğu'nun en önemli hükümdarlarından", "Budizmin yayılmasında etkili oldu", "Fermanlarıyla bilinir"]
  ),

  h(
    5065,
    "Kiros",
    ["kiros", "cyrus", "cyrus the great", "büyük kiros", "buyuk kiros"],
    ["Pers İmparatorluğu", "İran coğrafyası", "Mezopotamya"],
    ["MÖ 6. yüzyıl", "Antik Çağ"],
    ["Kral", "Fatih", "İmparatorluk kurucusu"],
    ["Ahameniş İmparatorluğu'nun kuruluşu", "Babil'in alınması", "Pers genişlemesi"],
    ["Pers İmparatorluğu'nun kurucusu", "Hoşgörülü yönetim anlayışıyla anılır", "Antik dünyanın büyük hükümdarlarından"]
  ),

  h(
    5066,
    "Darius I",
    ["darius", "darius i", "1. darius", "büyük darius", "buyuk darius"],
    ["Pers İmparatorluğu", "İran", "Anadolu", "Mezopotamya"],
    ["MÖ 6. yüzyıl", "MÖ 5. yüzyıl", "Antik Çağ"],
    ["Kral", "Hükümdar", "Devlet adamı"],
    ["Pers idari sistemi", "Kraliyet Yolu", "Yunan-Pers savaşları"],
    ["Pers yönetimini düzenlemesiyle bilinir", "Satraplık sistemiyle anılır", "Büyük Pers krallarından"]
  ),

  h(
    5067,
    "Ramses II",
    ["ramses", "ramses ii", "2. ramses", "büyük ramses", "buyuk ramses"],
    ["Antik Mısır", "Nil Vadisi", "Kadeş bölgesi"],
    ["MÖ 13. yüzyıl", "Yeni Krallık dönemi", "Antik Çağ"],
    ["Firavun", "Hükümdar", "Komutan"],
    ["Kadeş Savaşı", "Abu Simbel tapınakları", "Mısır-Hitit ilişkileri"],
    ["En ünlü firavunlardan", "Uzun saltanatıyla bilinir", "Anıtsal yapılarıyla anılır"]
  ),

  h(
    5068,
    "Nefertiti",
    ["nefertiti", "nefertiti kraliçe", "nefertiti kralice"],
    ["Antik Mısır", "Amarna", "Nil Vadisi"],
    ["MÖ 14. yüzyıl", "Amarna dönemi", "Antik Çağ"],
    ["Kraliçe", "Siyasi figür", "Hanedan üyesi"],
    ["Amarna dönemi", "Akhenaton ile bağlantı", "Mısır sanatında değişim"],
    ["Ünlü büstüyle bilinir", "Antik Mısır'ın ikonik kraliçelerinden", "Güzellik ve zarafet sembolü olarak anılır"]
  ),

  h(
    5069,
    "Akhenaton",
    ["akhenaton", "akhenaten", "akhenaten firavun"],
    ["Antik Mısır", "Amarna", "Nil Vadisi"],
    ["MÖ 14. yüzyıl", "Amarna dönemi", "Antik Çağ"],
    ["Firavun", "Hükümdar", "Dini reformcu"],
    ["Aton inancı", "Amarna'nın kurulması", "Mısır dininde reform girişimi"],
    ["Dini reformlarıyla bilinir", "Amarna dönemiyle anılır", "Antik Mısır'ın sıra dışı firavunlarından"]
  ),

  h(
    5070,
    "Tutankhamun",
    ["tutankhamun", "tutankamon", "tutankhamon"],
    ["Antik Mısır", "Nil Vadisi", "Krallar Vadisi"],
    ["MÖ 14. yüzyıl", "Antik Çağ"],
    ["Firavun", "Hükümdar"],
    ["Mezarının keşfi", "Amarna sonrası dönem", "Genç yaşta hükümdarlık"],
    ["Mezarının bozulmadan bulunmasıyla ünlüdür", "Altın maskesiyle bilinir", "Antik Mısır'ın popüler figürlerinden"]
  ),

  h(
    5071,
    "Marcus Aurelius",
    ["marcus aurelius", "markus aurelius"],
    ["Roma İmparatorluğu", "Akdeniz", "Avrupa"],
    ["2. yüzyıl", "Antik Roma", "Pax Romana dönemi"],
    ["İmparator", "Filozof", "Devlet adamı"],
    ["Roma imparatorluğu", "Meditations eseri", "Sınır savaşları"],
    ["Filozof imparator olarak bilinir", "Stoacı düşünceyle anılır", "Meditations eseriyle tanınır"]
  ),

  h(
    5072,
    "Augustus",
    ["augustus", "octavian", "oktavyan", "augustus caesar"],
    ["Roma", "Akdeniz", "Roma İmparatorluğu"],
    ["MÖ 1. yüzyıl", "MS 1. yüzyıl", "Roma İmparatorluğu'nun başlangıcı"],
    ["İmparator", "Devlet adamı", "Kurucu lider"],
    ["Roma Cumhuriyeti'nin imparatorluğa dönüşmesi", "Pax Romana", "Actium Savaşı"],
    ["Roma'nın ilk imparatoru olarak bilinir", "Pax Romana dönemini başlattı", "Siyasi düzen kurucusu"]
  ),

  h(
    5073,
    "Neron",
    ["neron", "nero"],
    ["Roma İmparatorluğu", "Roma", "Akdeniz"],
    ["1. yüzyıl", "Antik Roma"],
    ["İmparator", "Hükümdar"],
    ["Roma yangını", "Julio-Claudian hanedanı", "Roma'da siyasi krizler"],
    ["Roma'nın en tartışmalı imparatorlarından", "Roma yangınıyla anılır", "Sanat merakıyla bilinir"]
  ),

  h(
    5074,
    "Spartaküs",
    ["spartaküs", "spartakus", "spartacus"],
    ["Roma Cumhuriyeti", "Trakya", "İtalya"],
    ["MÖ 1. yüzyıl", "Antik Roma"],
    ["Gladyatör", "İsyan lideri", "Savaşçı"],
    ["Köle isyanı", "Gladyatör ayaklanması", "Roma Cumhuriyeti'ne karşı mücadele"],
    ["Köle isyanıyla bilinir", "Özgürlük sembollerinden biri oldu", "Gladyatör lider olarak anılır"]
  ),

  h(
    5075,
    "Attila",
    ["attila", "attila hun", "hun attila"],
    ["Hun İmparatorluğu", "Avrupa", "Avrasya bozkırları"],
    ["5. yüzyıl", "Kavimler Göçü dönemi"],
    ["Hükümdar", "Komutan", "Han"],
    ["Avrupa seferleri", "Roma İmparatorluğu ile mücadele", "Hun İmparatorluğu'nun güçlenmesi"],
    ["Avrupa'da büyük etki bıraktı", "Hun hükümdarı olarak bilinir", "Bozkır savaşçılığıyla anılır"]
  ),

  h(
    5076,
    "Charlemagne",
    ["charlemagne", "şarlman", "sarlman", "büyük şarl", "buyuk sarl"],
    ["Frank Krallığı", "Batı Avrupa", "Kutsal Roma İmparatorluğu"],
    ["8. yüzyıl", "9. yüzyıl", "Orta Çağ"],
    ["Kral", "İmparator", "Devlet kurucu"],
    ["Frank İmparatorluğu", "Roma imparatoru olarak taç giymesi", "Karolenj Rönesansı"],
    ["Avrupa tarihinin kurucu figürlerinden", "Karolenj dönemiyle bilinir", "Batı Avrupa'yı şekillendirdi"]
  ),

  h(
    5077,
    "William the Conqueror",
    ["william the conqueror", "fatih william", "norman william", "i. william"],
    ["Normandiya", "İngiltere", "Batı Avrupa"],
    ["11. yüzyıl", "Orta Çağ"],
    ["Dük", "Kral", "Komutan"],
    ["Hastings Savaşı", "Norman fethi", "İngiltere'de Norman dönemi"],
    ["İngiltere'yi fethetmesiyle bilinir", "Norman etkisini başlattı", "Orta Çağ İngiltere'sini değiştirdi"]
  ),

  h(
    5078,
    "Richard the Lionheart",
    ["richard the lionheart", "aslan yürekli richard", "aslan yurekli richard", "i. richard"],
    ["İngiltere", "Fransa", "Ortadoğu"],
    ["12. yüzyıl", "Haçlı Seferleri dönemi", "Orta Çağ"],
    ["Kral", "Komutan", "Savaşçı"],
    ["Üçüncü Haçlı Seferi", "Akka kuşatması", "Selahaddin Eyyubi ile mücadele"],
    ["Aslan Yürekli lakabıyla bilinir", "Haçlı Seferleri figürü", "Savaşçı kral olarak anılır"]
  ),

  h(
    5079,
    "Catherine the Great",
    ["catherine the great", "büyük katerina", "buyuk katerina", "katerina"],
    ["Rusya", "St. Petersburg", "Doğu Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["İmparatoriçe", "Devlet adamı", "Reformcu"],
    ["Rus İmparatorluğu'nun genişlemesi", "Aydınlanma etkili reformlar", "Kırım'ın Rusya'ya katılması"],
    ["Rusya'nın en güçlü hükümdarlarından", "Büyük Katerina olarak bilinir", "Modernleşme ve genişleme dönemiyle anılır"]
  ),

  h(
    5080,
    "Peter the Great",
    ["peter the great", "büyük petro", "buyuk petro", "i. petro"],
    ["Rusya", "St. Petersburg", "Avrupa"],
    ["17. yüzyıl sonu", "18. yüzyıl başı"],
    ["Çar", "İmparator", "Reformcu"],
    ["Rus modernleşmesi", "St. Petersburg'un kurulması", "Batılılaşma reformları"],
    ["Rusya'yı modernleştirmesiyle bilinir", "Büyük Petro olarak anılır", "St. Petersburg ile bağlantılıdır"]
  ),

  h(
    5081,
    "Louis XIV",
    ["louis xiv", "14. louis", "xiv louis", "güneş kral", "gunes kral"],
    ["Fransa", "Versay", "Avrupa"],
    ["17. yüzyıl", "18. yüzyıl başı", "Mutlak monarşi dönemi"],
    ["Kral", "Monark", "Devlet adamı"],
    ["Versay Sarayı", "Mutlak monarşi", "Fransa'nın Avrupa'daki güç siyaseti"],
    ["Güneş Kral olarak bilinir", "Versay Sarayı ile anılır", "Mutlak monarşinin sembol isimlerinden"]
  ),

  h(
    5082,
    "Marie Antoinette",
    ["marie antoinette", "mari antonet"],
    ["Fransa", "Versay", "Avusturya kökenli"],
    ["18. yüzyıl", "Fransız Devrimi dönemi"],
    ["Kraliçe", "Monark", "Siyasi figür"],
    ["Fransız Devrimi", "Versay yaşamı", "Monarşinin düşüşü"],
    ["Fransız Devrimi ile anılır", "Versay sarayıyla bağlantılıdır", "Fransa'nın son kraliçelerinden"]
  ),

  h(
    5083,
    "Robespierre",
    ["robespierre", "maximilien robespierre"],
    ["Fransa", "Paris"],
    ["18. yüzyıl", "Fransız Devrimi dönemi"],
    ["Devrimci", "Siyasetçi", "Hukukçu"],
    ["Fransız Devrimi", "Jakobenler", "Terör dönemi"],
    ["Fransız Devrimi'nin etkili isimlerinden", "Jakoben lider olarak bilinir", "Sert devrimci politikalarla anılır"]
  ),

  h(
    5084,
    "Simon Bolivar",
    ["simon bolivar", "simón bolívar", "bolivar"],
    ["Venezuela", "Kolombiya", "Güney Amerika"],
    ["19. yüzyıl", "Latin Amerika bağımsızlık dönemi"],
    ["Lider", "Komutan", "Devlet adamı"],
    ["Latin Amerika bağımsızlık savaşları", "Gran Colombia", "İspanyol yönetimine karşı mücadele"],
    ["El Libertador lakabıyla bilinir", "Latin Amerika bağımsızlık sembolü", "Birçok ülkenin kuruluş sürecini etkiledi"]
  ),

  h(
    5085,
    "Jose de San Martin",
    ["jose de san martin", "josé de san martín", "san martin"],
    ["Arjantin", "Şili", "Peru", "Güney Amerika"],
    ["19. yüzyıl", "Latin Amerika bağımsızlık dönemi"],
    ["Komutan", "Lider", "Devlet adamı"],
    ["And Dağları'nı aşması", "Şili ve Peru bağımsızlığı", "İspanyol yönetimine karşı mücadele"],
    ["Güney Amerika bağımsızlık kahramanlarından", "Askeri stratejisiyle bilinir", "And geçişiyle anılır"]
  ),

  h(
    5086,
    "Thomas Jefferson",
    ["thomas jefferson", "jefferson"],
    ["ABD", "Virginia", "Washington"],
    ["18. yüzyıl", "19. yüzyıl başı", "Amerikan kuruluş dönemi"],
    ["Başkan", "Devlet adamı", "Yazar"],
    ["Bağımsızlık Bildirgesi", "ABD başkanlığı", "Louisiana Satın Alımı"],
    ["ABD'nin kurucu babalarından", "Bağımsızlık Bildirgesi ile bilinir", "Aydınlanma düşüncesinden etkilenmiştir"]
  ),

  h(
    5087,
    "Benjamin Franklin",
    ["benjamin franklin"],
    ["ABD", "Philadelphia", "Avrupa"],
    ["18. yüzyıl", "Amerikan kuruluş dönemi", "Aydınlanma Çağı"],
    ["Bilim insanı", "Devlet adamı", "Mucit", "Diplomat"],
    ["Elektrik deneyleri", "Amerikan Bağımsızlığı", "Fransa diplomasi görevi"],
    ["Çok yönlü kurucu baba", "Elektrik çalışmalarıyla bilinir", "Diplomasi ve icatlarıyla anılır"]
  ),

  h(
    5088,
    "John F. Kennedy",
    ["john f kennedy", "john fitzgerald kennedy", "kennedy", "jfk"],
    ["ABD", "Washington", "Massachusetts"],
    ["20. yüzyıl", "Soğuk Savaş dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["Küba Füze Krizi", "Uzay yarışı", "ABD başkanlığı"],
    ["JFK kısaltmasıyla bilinir", "Soğuk Savaş dönemi liderlerinden", "Genç başkan imajıyla anılır"]
  ),

  h(
    5089,
    "Theodore Roosevelt",
    ["theodore roosevelt", "teddy roosevelt"],
    ["ABD", "Washington", "New York"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Başkan", "Devlet adamı", "Reformcu"],
    ["Progressive Era", "Panama Kanalı süreci", "Doğa koruma politikaları"],
    ["Teddy lakabıyla bilinir", "Enerjik liderliğiyle anılır", "Doğa koruma çalışmalarıyla öne çıkar"]
  ),

  h(
    5090,
    "Franklin D. Roosevelt",
    ["franklin d roosevelt", "franklin roosevelt", "fdr"],
    ["ABD", "Washington", "New York"],
    ["20. yüzyıl", "Büyük Buhran", "II. Dünya Savaşı dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["New Deal", "II. Dünya Savaşı", "Büyük Buhran ile mücadele"],
    ["FDR kısaltmasıyla bilinir", "Uzun süre başkanlık yaptı", "New Deal politikalarıyla anılır"]
  ),

  h(
    5091,
    "Rosa Parks",
    ["rosa parks", "parks"],
    ["ABD", "Alabama", "Montgomery"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Sivil haklar figürü"],
    ["Montgomery otobüs boykotu", "Sivil haklar hareketi", "Ayrımcılığa karşı direniş"],
    ["Sivil haklar hareketinin sembol isimlerinden", "Otobüs protestosuyla bilinir", "Sessiz direniş figürü olarak anılır"]
  ),

  h(
    5092,
    "Harriet Tubman",
    ["harriet tubman", "tubman"],
    ["ABD", "Maryland", "Kuzey Amerika"],
    ["19. yüzyıl", "Kölelik karşıtı hareket dönemi"],
    ["Aktivist", "Özgürlük mücadelesi figürü", "Rehber"],
    ["Underground Railroad", "Kölelikten kaçışlara yardım", "Amerikan İç Savaşı dönemi"],
    ["Kölelik karşıtı hareketin sembol isimlerinden", "Birçok kişiye özgürlük yolunda yardım etti", "Cesaretiyle anılır"]
  ),

  h(
    5093,
    "Malcolm X",
    ["malcolm x", "malcolm"],
    ["ABD", "New York", "Michigan"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Konuşmacı", "Siyasi figür"],
    ["Sivil haklar mücadelesi", "Nation of Islam dönemi", "Toplumsal eşitlik tartışmaları"],
    ["Güçlü hitabetiyle bilinir", "Sivil haklar hareketinin önemli figürlerinden", "Kimlik ve eşitlik vurgusuyla anılır"]
  ),

  h(
    5094,
    "Che Guevara",
    ["che", "che guevara", "ernesto che guevara"],
    ["Arjantin", "Küba", "Latin Amerika"],
    ["20. yüzyıl", "Soğuk Savaş dönemi", "Küba Devrimi dönemi"],
    ["Devrimci", "Doktor", "Siyasi figür"],
    ["Küba Devrimi", "Gerilla hareketleri", "Latin Amerika siyaseti"],
    ["Popüler kültürde ikonikleşmiş figür", "Küba Devrimi ile bilinir", "Devrimci sembol olarak anılır"]
  ),

  h(
    5095,
    "Fidel Castro",
    ["fidel castro", "castro"],
    ["Küba", "Havana", "Karayipler"],
    ["20. yüzyıl", "Soğuk Savaş dönemi"],
    ["Lider", "Devlet adamı", "Devrimci"],
    ["Küba Devrimi", "Küba yönetimi", "Soğuk Savaş politikaları"],
    ["Küba Devrimi'nin liderlerinden", "Uzun süre iktidarda kaldı", "Soğuk Savaş figürü olarak bilinir"]
  ),

  h(
    5096,
    "Mao Zedong",
    ["mao", "mao zedong", "mao tse tung"],
    ["Çin", "Pekin", "Doğu Asya"],
    ["20. yüzyıl", "Çin Devrimi dönemi", "Soğuk Savaş dönemi"],
    ["Lider", "Devrimci", "Devlet adamı"],
    ["Çin Halk Cumhuriyeti'nin kuruluşu", "Uzun Yürüyüş", "Çin iç savaşı"],
    ["Modern Çin tarihinin en etkili figürlerinden", "Çin Halk Cumhuriyeti'nin kurucusu olarak bilinir", "Tartışmalı politikalarıyla anılır"]
  ),

  h(
    5097,
    "Deng Xiaoping",
    ["deng xiaoping", "deng"],
    ["Çin", "Pekin", "Doğu Asya"],
    ["20. yüzyıl", "Çin reform dönemi"],
    ["Lider", "Devlet adamı", "Reformcu"],
    ["Ekonomik reformlar", "Açılım politikaları", "Modern Çin ekonomisinin dönüşümü"],
    ["Çin'in ekonomik dönüşümünde etkili oldu", "Reform ve açılım dönemiyle bilinir", "Pragmatik liderlik anlayışıyla anılır"]
  ),

  h(
    5098,
    "Sun Yat-sen",
    ["sun yat sen", "sun yat-sen", "sun yatsen"],
    ["Çin", "Guangdong", "Doğu Asya"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Devrimci", "Lider", "Siyasetçi"],
    ["Qing Hanedanı'nın yıkılışı", "Çin Cumhuriyeti'nin kuruluşu", "Üç Halk İlkesi"],
    ["Modern Çin'in kurucu figürlerinden", "Çin Cumhuriyeti ile bağlantılıdır", "Üç Halk İlkesi ile bilinir"]
  ),

  h(
    5099,
    "Ho Chi Minh",
    ["ho chi minh", "ho şimin", "ho simin"],
    ["Vietnam", "Hanoi", "Güneydoğu Asya"],
    ["20. yüzyıl", "Sömürgecilik karşıtı dönem", "Soğuk Savaş dönemi"],
    ["Lider", "Devrimci", "Devlet adamı"],
    ["Vietnam bağımsızlık mücadelesi", "Fransız sömürge yönetimine karşı mücadele", "Vietnam siyasi tarihi"],
    ["Vietnam bağımsızlık hareketinin sembol isimlerinden", "Hanoi ile bağlantılıdır", "Sömürgecilik karşıtı mücadeleyle anılır"]
  ),

  h(
    5100,
    "Indira Gandhi",
    ["indira gandhi", "indira gandi"],
    ["Hindistan", "Yeni Delhi", "Güney Asya"],
    ["20. yüzyıl", "Modern Hindistan dönemi"],
    ["Başbakan", "Devlet adamı", "Siyasi lider"],
    ["Hindistan başbakanlığı", "1971 savaşı", "Hindistan siyasetinde merkezi rol"],
    ["Hindistan'ın ilk kadın başbakanı", "Güçlü siyasi lider olarak bilinir", "Modern Hindistan tarihinde önemli figür"]
  ),

  h(
    5101,
    "Ada Lovelace",
    ["ada lovelace", "lovelace", "ada"],
    ["İngiltere", "Londra", "Britanya"],
    ["19. yüzyıl", "Sanayi Devrimi dönemi"],
    ["Matematikçi", "Yazar", "Bilgisayar bilimi öncüsü"],
    ["Analitik Makine notları", "Babbage ile çalışmaları", "İlk algoritma fikri"],
    ["İlk bilgisayar programcısı olarak anılır", "Matematik ve teknoloji tarihiyle bağlantılı", "Öngörülü notlarıyla bilinir"]
  ),

  h(
    5102,
    "Alan Turing",
    ["alan turing", "turing"],
    ["Birleşik Krallık", "İngiltere", "Bletchley Park"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi", "Bilgisayar biliminin erken dönemi"],
    ["Matematikçi", "Kriptolog", "Bilgisayar bilimci"],
    ["Enigma şifre çalışmaları", "Turing makinesi fikri", "Yapay zeka tartışmaları"],
    ["Modern bilgisayar biliminin öncülerinden", "Turing testiyle bilinir", "Kriptolojiyle anılır"]
  ),

  h(
    5103,
    "Grace Hopper",
    ["grace hopper", "hopper"],
    ["ABD", "New York", "Donanma çevresi"],
    ["20. yüzyıl", "Erken bilgisayar dönemi"],
    ["Bilgisayar bilimci", "Amiral", "Programcı"],
    ["COBOL'un gelişimi", "Derleyici çalışmaları", "Bilgisayar programlama tarihi"],
    ["Programlama dillerinin gelişimine katkı verdi", "Debug kavramıyla anılır", "Teknoloji tarihinde öncü kadın"]
  ),

  h(
    5104,
    "Louis Pasteur",
    ["louis pasteur", "pasteur", "pastör"],
    ["Fransa", "Paris", "Lille"],
    ["19. yüzyıl", "Modern mikrobiyoloji dönemi"],
    ["Bilim insanı", "Kimyager", "Mikrobiyolog"],
    ["Pastörizasyon", "Aşı çalışmaları", "Mikrop kuramının gelişimi"],
    ["Pastörizasyonla bilinir", "Modern mikrobiyolojiyi etkiledi", "Sağlık bilimine büyük katkı verdi"]
  ),

  h(
    5105,
    "Florence Nightingale",
    ["florence nightingale", "nightingale"],
    ["Birleşik Krallık", "Kırım", "İstanbul"],
    ["19. yüzyıl", "Kırım Savaşı dönemi"],
    ["Hemşire", "Reformcu", "İstatistikçi"],
    ["Kırım Savaşı sağlık çalışmaları", "Hemşirelik reformu", "Hastane hijyeni düzenlemeleri"],
    ["Modern hemşireliğin kurucularından", "Lambalı Kadın olarak anılır", "Sağlık istatistikleriyle de bilinir"]
  ),

  h(
    5106,
    "Charles Babbage",
    ["charles babbage", "babbage"],
    ["İngiltere", "Londra", "Cambridge"],
    ["19. yüzyıl", "Sanayi Devrimi dönemi"],
    ["Matematikçi", "Mucit", "Mühendis"],
    ["Fark Makinesi", "Analitik Makine tasarımı", "Hesaplama makineleri çalışmaları"],
    ["Bilgisayarın babası olarak anılır", "Mekanik hesaplama fikriyle bilinir", "Ada Lovelace ile bağlantılı"]
  ),

  h(
    5107,
    "James Watt",
    ["james watt", "watt"],
    ["İskoçya", "Britanya", "Glasgow"],
    ["18. yüzyıl", "Sanayi Devrimi"],
    ["Mucit", "Mühendis"],
    ["Buhar makinesi geliştirmeleri", "Sanayi Devrimi", "Enerji verimliliği çalışmaları"],
    ["Buhar makinesiyle bilinir", "Sanayi Devrimi'nin sembol isimlerinden", "Watt birimiyle anılır"]
  ),

  h(
    5108,
    "Johannes Gutenberg",
    ["johannes gutenberg", "gutenberg"],
    ["Almanya", "Mainz", "Avrupa"],
    ["15. yüzyıl", "Rönesans öncesi dönem"],
    ["Mucit", "Matbaacı"],
    ["Hareketli harfli matbaa", "Kitap basımının yaygınlaşması", "Gutenberg İncili"],
    ["Matbaanın yaygınlaşmasıyla bilinir", "Bilgi paylaşımını dönüştürdü", "Avrupa kültür tarihini etkiledi"]
  ),

  h(
    5109,
    "Marco Polo",
    ["marco polo", "polo"],
    ["Venedik", "Asya", "Çin"],
    ["13. yüzyıl", "Orta Çağ"],
    ["Gezgin", "Tüccar", "Yazar"],
    ["İpek Yolu seyahatleri", "Çin anlatıları", "Doğu-Batı temasları"],
    ["Seyahatleriyle bilinir", "Asya anlatıları Avrupa'da ilgi gördü", "Venedikli gezgin"]
  ),

  h(
    5110,
    "Vasco da Gama",
    ["vasco da gama", "gama"],
    ["Portekiz", "Hindistan rotası", "Atlantik ve Hint Okyanusu"],
    ["15. yüzyıl", "16. yüzyıl başı", "Keşifler Çağı"],
    ["Denizci", "Kaşif", "Kaptan"],
    ["Ümit Burnu rotası", "Hindistan seferi", "Portekiz denizcilik genişlemesi"],
    ["Avrupa'dan Hindistan'a deniz yoluyla ulaşmasıyla bilinir", "Keşifler Çağı figürü", "Portekiz denizcilik tarihinde önemli"]
  ),

  h(
    5111,
    "Ferdinand Magellan",
    ["ferdinand magellan", "magellan", "macellan"],
    ["Portekiz kökenli", "İspanya adına sefer", "Pasifik"],
    ["16. yüzyıl", "Keşifler Çağı"],
    ["Denizci", "Kaşif", "Kaptan"],
    ["Dünya çevresini dolaşan sefer", "Macellan Boğazı", "Pasifik'e geçiş"],
    ["Dünya çevresi seferiyle bilinir", "Pasifik adını yaygınlaştırdı", "Keşifler Çağı'nın önemli ismi"]
  ),

  h(
    5112,
    "Zheng He",
    ["zheng he", "cheng ho", "zeng he"],
    ["Çin", "Hint Okyanusu", "Ming Hanedanı"],
    ["15. yüzyıl", "Ming dönemi"],
    ["Amiral", "Denizci", "Diplomat"],
    ["Hazine filoları", "Hint Okyanusu seferleri", "Ming deniz diplomasisi"],
    ["Büyük deniz seferleriyle bilinir", "Çin denizcilik tarihinde öne çıkar", "Diplomatik yolculuklarıyla anılır"]
  ),

  h(
    5113,
    "İbn Battuta",
    ["ibn battuta", "ibni battuta", "ibn batuta"],
    ["Fas", "Kuzey Afrika", "İslam dünyası", "Asya"],
    ["14. yüzyıl", "Orta Çağ"],
    ["Gezgin", "Kadılık görevi de yaptı", "Yazar"],
    ["Geniş seyahatleri", "Rıhle eseri", "Afrika ve Asya yolculukları"],
    ["Dünya tarihinin en büyük gezginlerinden", "İslam coğrafyasını anlattı", "Seyahatname geleneğiyle bilinir"]
  ),

  h(
    5114,
    "Amerigo Vespucci",
    ["amerigo vespucci", "vespucci", "ameriko vespuçi"],
    ["İtalya", "İspanya", "Portekiz", "Atlantik"],
    ["15. yüzyıl", "16. yüzyıl başı", "Keşifler Çağı"],
    ["Denizci", "Kaşif", "Haritacı"],
    ["Yeni Dünya seferleri", "Amerika adının yaygınlaşması", "Atlantik keşifleri"],
    ["Amerika kıtasına adını veren figürle bağlantılı", "Keşifler Çağı isimlerinden", "Haritacılıkla anılır"]
  ),

  h(
    5115,
    "Hernán Cortés",
    ["hernan cortes", "hernán cortés", "cortes"],
    ["İspanya", "Meksika", "Orta Amerika"],
    ["16. yüzyıl", "Keşifler Çağı"],
    ["Fatih", "Asker", "Siyasi figür"],
    ["Aztek İmparatorluğu ile mücadele", "Meksika seferi", "İspanyol sömürge genişlemesi"],
    ["Tartışmalı bir keşifler çağı figürü", "Meksika tarihiyle bağlantılı", "Azteklerle mücadelesiyle bilinir"]
  ),

  h(
    5116,
    "Francisco Pizarro",
    ["francisco pizarro", "pizarro"],
    ["İspanya", "Peru", "And bölgesi"],
    ["16. yüzyıl", "Keşifler Çağı"],
    ["Fatih", "Asker", "Siyasi figür"],
    ["İnka İmparatorluğu ile mücadele", "Peru seferi", "İspanyol genişlemesi"],
    ["Tartışmalı bir tarihi figür", "And bölgesi tarihiyle bağlantılı", "İnka dünyasıyla anılır"]
  ),

  h(
    5117,
    "Niccolò Machiavelli",
    ["niccolo machiavelli", "machiavelli", "makyavelli"],
    ["İtalya", "Floransa"],
    ["15. yüzyıl sonu", "16. yüzyıl", "Rönesans"],
    ["Düşünür", "Diplomat", "Yazar"],
    ["Prens eseri", "Floransa siyaseti", "Rönesans siyasi düşüncesi"],
    ["Siyaset teorisiyle bilinir", "Makyavelizm kavramıyla anılır", "Gerçekçi siyaset anlayışıyla öne çıkar"]
  ),

  h(
    5118,
    "René Descartes",
    ["rene descartes", "rené descartes", "descartes", "dekart"],
    ["Fransa", "Hollanda", "Avrupa"],
    ["17. yüzyıl", "Modern felsefe dönemi"],
    ["Filozof", "Matematikçi", "Düşünür"],
    ["Cogito düşüncesi", "Analitik geometri", "Modern felsefenin gelişimi"],
    ["Düşünüyorum öyleyse varım sözüyle bilinir", "Modern felsefenin kurucu isimlerinden", "Matematik ve felsefeyi etkiledi"]
  ),

  h(
    5119,
    "Immanuel Kant",
    ["immanuel kant", "kant"],
    ["Prusya", "Königsberg", "Almanya coğrafyası"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Filozof", "Düşünür"],
    ["Saf Aklın Eleştirisi", "Ahlak felsefesi", "Aydınlanma düşüncesi"],
    ["Modern felsefenin en etkili isimlerinden", "Eleştirel felsefeyle bilinir", "Ahlak ve bilgi teorisiyle anılır"]
  ),

  h(
    5120,
    "Friedrich Nietzsche",
    ["friedrich nietzsche", "nietzsche", "niçe"],
    ["Almanya", "İsviçre", "Avrupa"],
    ["19. yüzyıl"],
    ["Filozof", "Yazar", "Düşünür"],
    ["Böyle Buyurdu Zerdüşt", "Ahlak eleştirileri", "Modern felsefe tartışmaları"],
    ["Keskin üslubuyla bilinir", "Üstinsan ve güç istenci kavramlarıyla anılır", "Modern düşünceyi etkiledi"]
  ),

  h(
    5121,
    "Jean-Jacques Rousseau",
    ["jean jacques rousseau", "rousseau", "ruso"],
    ["Cenevre", "Fransa", "Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Filozof", "Yazar", "Düşünür"],
    ["Toplum Sözleşmesi", "Eğitim üzerine çalışmaları", "Fransız Devrimi düşünsel etkileri"],
    ["Toplum sözleşmesi fikriyle bilinir", "Aydınlanma düşünürlerinden", "Siyaset felsefesini etkiledi"]
  ),

  h(
    5122,
    "Voltaire",
    ["voltaire", "volter"],
    ["Fransa", "Paris", "Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Filozof", "Yazar", "Eleştirmen"],
    ["Aydınlanma tartışmaları", "Candide", "Düşünce özgürlüğü savunusu"],
    ["Keskin mizahıyla bilinir", "Aydınlanma'nın sembol isimlerinden", "Özgür düşünceyle anılır"]
  ),

  h(
    5123,
    "John Locke",
    ["john locke", "locke"],
    ["İngiltere", "Avrupa"],
    ["17. yüzyıl", "Aydınlanma öncesi dönem"],
    ["Filozof", "Düşünür", "Siyaset teorisyeni"],
    ["Doğal haklar fikri", "Yönetim üzerine yazılar", "Liberal düşüncenin gelişimi"],
    ["Liberalizmin kurucu isimlerinden", "Haklar ve özgürlükler düşüncesiyle bilinir", "Siyaset felsefesini etkiledi"]
  ),

  h(
    5124,
    "Thomas Hobbes",
    ["thomas hobbes", "hobbes"],
    ["İngiltere", "Avrupa"],
    ["17. yüzyıl"],
    ["Filozof", "Siyaset düşünürü"],
    ["Leviathan eseri", "Toplum sözleşmesi tartışmaları", "İngiliz iç savaşı dönemi"],
    ["Güçlü devlet fikriyle bilinir", "Leviathan ile anılır", "Modern siyaset felsefesinde etkili"]
  ),

  h(
    5125,
    "Karl Marx",
    ["karl marx", "marx", "marks"],
    ["Almanya", "Londra", "Avrupa"],
    ["19. yüzyıl", "Sanayi Devrimi sonrası dönem"],
    ["Filozof", "Ekonomist", "Yazar"],
    ["Komünist Manifesto", "Kapital eleştirisi", "İşçi hareketleriyle bağlantı"],
    ["Marksizm ile bilinir", "Sosyal ve ekonomik düşünceyi etkiledi", "Tartışmalı ve etkili bir düşünür"]
  ),

  h(
    5126,
    "Adam Smith",
    ["adam smith", "smith"],
    ["İskoçya", "Britanya", "Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Ekonomist", "Filozof", "Yazar"],
    ["Milletlerin Zenginliği", "Piyasa teorisi", "Ahlak felsefesi çalışmaları"],
    ["Modern ekonominin kurucu isimlerinden", "Görünmez el kavramıyla anılır", "Serbest piyasa düşüncesini etkiledi"]
  ),

  h(
    5127,
    "John Maynard Keynes",
    ["john maynard keynes", "keynes", "keynesyen"],
    ["Birleşik Krallık", "Cambridge", "Avrupa"],
    ["20. yüzyıl", "Büyük Buhran dönemi"],
    ["Ekonomist", "Düşünür"],
    ["Genel Teori", "Keynesyen ekonomi", "Büyük Buhran politikaları"],
    ["Makroekonomiyi etkiledi", "Devlet müdahalesi tartışmalarıyla bilinir", "20. yüzyıl ekonomisinde merkezi figür"]
  ),

  h(
    5128,
    "Nicolaus Copernicus",
    ["nicolaus copernicus", "copernicus", "kopernik"],
    ["Polonya", "Avrupa"],
    ["15. yüzyıl sonu", "16. yüzyıl", "Rönesans"],
    ["Astronom", "Bilim insanı"],
    ["Güneş merkezli sistem", "Göksel kürelerin dönüşleri eseri", "Bilimsel Devrim başlangıcı"],
    ["Güneş merkezli modeliyle bilinir", "Astronomi tarihini değiştirdi", "Bilimsel Devrim'in öncülerinden"]
  ),

  h(
    5129,
    "Johannes Kepler",
    ["johannes kepler", "kepler"],
    ["Almanya", "Prag", "Avrupa"],
    ["16. yüzyıl", "17. yüzyıl", "Bilimsel Devrim"],
    ["Astronom", "Matematikçi", "Bilim insanı"],
    ["Gezegen hareket yasaları", "Tycho Brahe verileri", "Astronomi çalışmaları"],
    ["Kepler yasalarıyla bilinir", "Modern astronomiyi etkiledi", "Gezegen hareketlerini açıkladı"]
  ),

  h(
    5130,
    "Michael Faraday",
    ["michael faraday", "faraday"],
    ["İngiltere", "Londra", "Britanya"],
    ["19. yüzyıl"],
    ["Bilim insanı", "Fizikçi", "Kimyager"],
    ["Elektromanyetik indüksiyon", "Elektrik deneyleri", "Faraday kafesi"],
    ["Elektrik ve manyetizma çalışmalarında öncü", "Deneysel bilimiyle bilinir", "Faraday kafesiyle anılır"]
  ),

  h(
    5131,
    "James Clerk Maxwell",
    ["james clerk maxwell", "maxwell"],
    ["İskoçya", "Britanya", "Cambridge"],
    ["19. yüzyıl"],
    ["Fizikçi", "Matematikçi"],
    ["Maxwell denklemleri", "Elektromanyetizma", "Işık teorisi"],
    ["Modern fiziğin temel isimlerinden", "Elektromanyetik teoriyi birleştirdi", "Maxwell denklemleriyle bilinir"]
  ),

  h(
    5132,
    "Antoine Lavoisier",
    ["antoine lavoisier", "lavoisier", "lavosier"],
    ["Fransa", "Paris"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Kimyager", "Bilim insanı"],
    ["Kütlenin korunumu", "Modern kimya adlandırmaları", "Oksijen çalışmaları"],
    ["Modern kimyanın kurucularından", "Kütlenin korunumu ile bilinir", "Kimya dilini düzenledi"]
  ),

  h(
    5133,
    "Dmitri Mendeleev",
    ["dmitri mendeleev", "mendeleev", "mendeleyev"],
    ["Rusya", "St. Petersburg"],
    ["19. yüzyıl"],
    ["Kimyager", "Bilim insanı"],
    ["Periyodik tablo", "Elementlerin sınıflandırılması", "Kimya eğitimi"],
    ["Periyodik tabloyla bilinir", "Element düzenini öngördü", "Kimya tarihinde merkezi isim"]
  ),

  h(
    5134,
    "Rosalind Franklin",
    ["rosalind franklin"],
    ["Birleşik Krallık", "Londra", "Cambridge"],
    ["20. yüzyıl", "Moleküler biyoloji dönemi"],
    ["Bilim insanı", "Kimyager", "Kristalograf"],
    ["DNA yapısı çalışmaları", "X-ışını kırınımı", "Fotoğraf 51"],
    ["DNA araştırmalarında kritik katkı yaptı", "Bilim tarihinde hakkı geç tanınan isimlerden", "Kristalografiyle bilinir"]
  ),

  h(
    5135,
    "Gregor Mendel",
    ["gregor mendel", "mendel"],
    ["Avusturya İmparatorluğu", "Brno", "Orta Avrupa"],
    ["19. yüzyıl"],
    ["Bilim insanı", "Rahip", "Genetik öncüsü"],
    ["Bezelye deneyleri", "Kalıtım yasaları", "Genetik biliminin temelleri"],
    ["Genetiğin babası olarak anılır", "Mendel yasalarıyla bilinir", "Kalıtım çalışmalarının öncüsü"]
  ),

  h(
    5136,
    "Ivan Pavlov",
    ["ivan pavlov", "pavlov"],
    ["Rusya", "St. Petersburg"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Bilim insanı", "Fizyolog"],
    ["Koşullanma deneyleri", "Sindirim sistemi çalışmaları", "Nobel ödülü"],
    ["Klasik koşullanma ile bilinir", "Pavlov'un köpekleri ifadesiyle anılır", "Psikoloji ve fizyolojiyi etkiledi"]
  ),

  h(
    5137,
    "Alfred Nobel",
    ["alfred nobel", "nobel"],
    ["İsveç", "Avrupa"],
    ["19. yüzyıl"],
    ["Mucit", "Kimyager", "Sanayici"],
    ["Dinamitin icadı", "Nobel Ödülleri vasiyeti", "Kimya ve mühendislik çalışmaları"],
    ["Nobel Ödülleri ile bilinir", "Mucit ve sanayici", "Bilim ve barış ödüllerine adını verdi"]
  ),

  h(
    5138,
    "Alexander Graham Bell",
    ["alexander graham bell", "graham bell", "bell"],
    ["İskoçya", "Kanada", "ABD"],
    ["19. yüzyıl", "İletişim teknolojileri dönemi"],
    ["Mucit", "Öğretmen", "Bilim insanı"],
    ["Telefonun geliştirilmesi", "İletişim teknolojileri", "Sağır eğitimi çalışmaları"],
    ["Telefonla bilinir", "İletişim tarihini etkiledi", "Ses teknolojileriyle anılır"]
  ),

  h(
    5139,
    "Thomas Edison",
    ["thomas edison", "edison"],
    ["ABD", "New Jersey", "Menlo Park"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Mucit", "İş insanı"],
    ["Elektrik ampulü geliştirmeleri", "Fonograf", "Patent çalışmaları"],
    ["Üretken mucit olarak bilinir", "Menlo Park laboratuvarıyla anılır", "Elektrik ve kayıt teknolojilerini etkiledi"]
  ),

  h(
    5140,
    "Guglielmo Marconi",
    ["guglielmo marconi", "marconi"],
    ["İtalya", "Birleşik Krallık", "Atlantik"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Mucit", "Mühendis"],
    ["Kablosuz telgraf", "Radyo iletişimi", "Atlantik ötesi sinyal denemeleri"],
    ["Radyo iletişiminin öncülerinden", "Kablosuz iletişimle bilinir", "Nobel Fizik Ödülü aldı"]
  ),

  h(
    5141,
    "Wright Kardeşler",
    ["wright kardeşler", "wright brothers", "orville wright", "wilbur wright"],
    ["ABD", "Ohio", "Kitty Hawk"],
    ["20. yüzyıl başı", "Havacılık tarihi"],
    ["Mucit", "Havacılık öncüsü"],
    ["İlk motorlu uçuş denemeleri", "Kitty Hawk uçuşu", "Uçak geliştirme çalışmaları"],
    ["Modern havacılığın öncülerinden", "İlk kontrollü motorlu uçuşla bilinir", "Kardeş mucitler"]
  ),

  h(
    5142,
    "Amelia Earhart",
    ["amelia earhart", "earhart"],
    ["ABD", "Atlantik", "Pasifik"],
    ["20. yüzyıl", "Havacılık tarihi"],
    ["Pilot", "Kaşif", "Yazar"],
    ["Atlantik aşırı uçuş", "Kadın havacılık öncülüğü", "Dünya turu girişimi"],
    ["Havacılık tarihinde öncü kadın", "Cesur uçuşlarıyla bilinir", "Gizemli kayboluşuyla anılır"]
  ),

  h(
    5143,
    "Charles Lindbergh",
    ["charles lindbergh", "lindbergh"],
    ["ABD", "Atlantik", "Paris"],
    ["20. yüzyıl", "Havacılık tarihi"],
    ["Pilot", "Havacılık figürü"],
    ["Atlantik'i tek başına geçiş", "Spirit of St. Louis", "Havacılık popülerliği"],
    ["Uzun mesafe uçuşuyla bilinir", "Havacılık tarihinin sembol isimlerinden", "Atlantik geçişiyle anılır"]
  ),

  h(
    5144,
    "Dante Alighieri",
    ["dante", "dante alighieri"],
    ["İtalya", "Floransa", "Ravenna"],
    ["13. yüzyıl", "14. yüzyıl", "Orta Çağ sonu"],
    ["Şair", "Yazar", "Düşünür"],
    ["İlahi Komedya", "Sürgün yılları", "İtalyan edebiyatının gelişimi"],
    ["İlahi Komedya ile bilinir", "İtalyan edebiyatının temel isimlerinden", "Orta Çağ düşüncesini etkiledi"]
  ),

  h(
    5145,
    "Miguel de Cervantes",
    ["miguel de cervantes", "cervantes"],
    ["İspanya", "Madrid", "Akdeniz"],
    ["16. yüzyıl", "17. yüzyıl başı"],
    ["Yazar", "Asker", "Edebiyat figürü"],
    ["Don Kişot", "İspanyol edebiyatı", "Akdeniz esaret yılları"],
    ["Don Kişot ile bilinir", "Modern romanın öncülerinden sayılır", "İspanyol edebiyatının büyük ismi"]
  ),

  h(
    5146,
    "Johann Wolfgang von Goethe",
    ["goethe", "johann wolfgang von goethe", "göte"],
    ["Almanya", "Weimar", "Avrupa"],
    ["18. yüzyıl", "19. yüzyıl başı"],
    ["Yazar", "Şair", "Devlet adamı"],
    ["Faust", "Weimar dönemi", "Alman edebiyatı"],
    ["Faust ile bilinir", "Alman edebiyatının en büyük isimlerinden", "Çok yönlü sanatçı"]
  ),

  h(
    5147,
    "Lev Tolstoy",
    ["lev tolstoy", "tolstoy", "leo tolstoy"],
    ["Rusya", "Yasnaya Polyana", "Moskova"],
    ["19. yüzyıl"],
    ["Yazar", "Düşünür"],
    ["Savaş ve Barış", "Anna Karenina", "Rus edebiyatı"],
    ["Dünya edebiyatının devlerinden", "Epik romanlarıyla bilinir", "Ahlaki düşünceleriyle de anılır"]
  ),

  h(
    5148,
    "Fyodor Dostoyevski",
    ["fyodor dostoyevski", "dostoyevski", "dostoevsky"],
    ["Rusya", "St. Petersburg", "Moskova"],
    ["19. yüzyıl"],
    ["Yazar", "Düşünür"],
    ["Suç ve Ceza", "Karamazov Kardeşler", "Rus edebiyatı"],
    ["Psikolojik derinliğiyle bilinir", "Dünya edebiyatının büyük isimlerinden", "İnsanın iç dünyasını güçlü anlattı"]
  ),

  h(
    5149,
    "Franz Kafka",
    ["franz kafka", "kafka"],
    ["Prag", "Avusturya-Macaristan", "Orta Avrupa"],
    ["20. yüzyıl başı"],
    ["Yazar", "Edebiyat figürü"],
    ["Dönüşüm", "Dava", "Modern edebiyat"],
    ["Kafkaesk kavramıyla anılır", "Modern yabancılaşma temalarıyla bilinir", "Prag edebiyat çevresiyle bağlantılı"]
  ),

  h(
    5150,
    "Virginia Woolf",
    ["virginia woolf", "woolf"],
    ["Birleşik Krallık", "Londra", "Bloomsbury"],
    ["20. yüzyıl", "Modernist edebiyat"],
    ["Yazar", "Denemeci"],
    ["Mrs Dalloway", "Kendine Ait Bir Oda", "Modernist roman"],
    ["Bilinç akışı tekniğiyle bilinir", "Modernist edebiyatın önemli ismi", "Kadın yazarlık üzerine etkili oldu"]
  ),

  h(
    5151,
    "Jane Austen",
    ["jane austen", "austen"],
    ["İngiltere", "Bath", "Hampshire"],
    ["18. yüzyıl sonu", "19. yüzyıl başı"],
    ["Yazar", "Edebiyat figürü"],
    ["Gurur ve Önyargı", "Emma", "İngiliz romanı"],
    ["Toplumsal gözlem gücüyle bilinir", "İngiliz edebiyatının önemli yazarı", "Romantik ve ironik üslubuyla anılır"]
  ),

  h(
    5152,
    "Agatha Christie",
    ["agatha christie", "christie"],
    ["Birleşik Krallık", "İngiltere"],
    ["20. yüzyıl"],
    ["Yazar", "Polisiye yazarı"],
    ["Hercule Poirot", "Miss Marple", "Polisiye romanlar"],
    ["Polisiye edebiyatın kraliçesi olarak anılır", "Çok satan romanlarıyla bilinir", "Gizem kurgularıyla ünlüdür"]
  ),

  h(
    5153,
    "Wolfgang Amadeus Mozart",
    ["mozart", "wolfgang amadeus mozart"],
    ["Avusturya", "Salzburg", "Viyana"],
    ["18. yüzyıl", "Klasik müzik dönemi"],
    ["Besteci", "Piyanist", "Müzisyen"],
    ["Requiem", "Sihirli Flüt", "Viyana dönemi"],
    ["Dahi çocuk olarak anılır", "Klasik müziğin büyük isimlerinden", "Çok üretken besteci"]
  ),

  h(
    5154,
    "Johann Sebastian Bach",
    ["bach", "johann sebastian bach"],
    ["Almanya", "Leipzig", "Avrupa"],
    ["17. yüzyıl sonu", "18. yüzyıl", "Barok dönem"],
    ["Besteci", "Orgcu", "Müzisyen"],
    ["Brandenburg Konçertoları", "Matta Passion", "Barok müzik"],
    ["Barok müziğin zirve isimlerinden", "Kontrapunt ustası", "Klasik müziği derinden etkiledi"]
  ),

  h(
    5155,
    "Antonio Vivaldi",
    ["vivaldi", "antonio vivaldi"],
    ["İtalya", "Venedik"],
    ["17. yüzyıl sonu", "18. yüzyıl", "Barok dönem"],
    ["Besteci", "Kemancı", "Din adamı"],
    ["Dört Mevsim", "Venedik müzik çevresi", "Barok konçertolar"],
    ["Dört Mevsim ile bilinir", "Barok müziğin önemli bestecisi", "Keman eserleriyle öne çıkar"]
  ),

  h(
    5156,
    "Frédéric Chopin",
    ["chopin", "frederic chopin", "frédéric chopin", "şopen"],
    ["Polonya", "Fransa", "Paris"],
    ["19. yüzyıl", "Romantik dönem"],
    ["Besteci", "Piyanist"],
    ["Piyano eserleri", "Paris dönemi", "Romantik müzik"],
    ["Piyano müziğiyle bilinir", "Romantik dönemin büyük bestecilerinden", "Polonya kimliğiyle de anılır"]
  ),

  h(
    5157,
    "Pyotr İlyiç Çaykovski",
    ["çaykovski", "caykovski", "tchaikovsky", "pyotr ilyiç çaykovski"],
    ["Rusya", "Moskova", "St. Petersburg"],
    ["19. yüzyıl", "Romantik dönem"],
    ["Besteci", "Müzisyen"],
    ["Kuğu Gölü", "Fındıkkıran", "1812 Uvertürü"],
    ["Bale müzikleriyle bilinir", "Rus klasik müziğinin büyük isimlerinden", "Melodik besteleriyle anılır"]
  ),

  h(
    5158,
    "Richard Wagner",
    ["richard wagner", "wagner"],
    ["Almanya", "Bayreuth", "Avrupa"],
    ["19. yüzyıl"],
    ["Besteci", "Opera yazarı"],
    ["Nibelung Yüzüğü", "Bayreuth Festivali", "Opera reformları"],
    ["Opera tarihini etkiledi", "Leitmotif tekniğiyle bilinir", "Görkemli müzik diliyle anılır"]
  ),

  h(
    5159,
    "Frida Kahlo",
    ["frida kahlo", "kahlo"],
    ["Meksika", "Coyoacán", "Latin Amerika"],
    ["20. yüzyıl"],
    ["Ressam", "Sanatçı"],
    ["Otoportreler", "Meksika sanat çevresi", "Kişisel semboller"],
    ["Otoportreleriyle bilinir", "Güçlü görsel kimliğiyle anılır", "Meksika kültürüyle bağlantılı"]
  ),

  h(
    5160,
    "Pablo Picasso",
    ["pablo picasso", "picasso"],
    ["İspanya", "Fransa", "Paris"],
    ["20. yüzyıl", "Modern sanat dönemi"],
    ["Ressam", "Sanatçı", "Heykeltıraş"],
    ["Kübizm", "Guernica", "Paris sanat çevresi"],
    ["Modern sanatın en etkili isimlerinden", "Kübizm ile bilinir", "Üretkenliğiyle anılır"]
  ),

  h(
    5161,
    "Salvador Dalí",
    ["salvador dali", "salvador dalí", "dali"],
    ["İspanya", "Katalonya", "Avrupa"],
    ["20. yüzyıl", "Sürrealizm dönemi"],
    ["Ressam", "Sanatçı"],
    ["Sürrealist eserler", "Eriyen saat imgeleri", "Avrupa sanat çevresi"],
    ["Sürrealizmle bilinir", "Eriyen saatleriyle anılır", "Sıradışı imajıyla tanınır"]
  ),

  h(
    5162,
    "Rembrandt",
    ["rembrandt", "rembrandt van rijn"],
    ["Hollanda", "Amsterdam", "Leiden"],
    ["17. yüzyıl", "Hollanda Altın Çağı"],
    ["Ressam", "Sanatçı"],
    ["Işık-gölge kullanımı", "Otoportreler", "Hollanda resim sanatı"],
    ["Işık ve gölge ustası", "Otoportreleriyle bilinir", "Hollanda sanatının büyük ismi"]
  ),

  h(
    5163,
    "Claude Monet",
    ["claude monet", "monet"],
    ["Fransa", "Paris", "Giverny"],
    ["19. yüzyıl", "20. yüzyıl başı", "Empresyonizm"],
    ["Ressam", "Sanatçı"],
    ["Empresyonizm", "Nilüferler serisi", "Açık hava resmi"],
    ["Empresyonizmin kurucu isimlerinden", "Işık ve renk çalışmalarıyla bilinir", "Nilüfer tablolarıyla anılır"]
  ),

  h(
    5164,
    "Edgar Degas",
    ["edgar degas", "degas"],
    ["Fransa", "Paris"],
    ["19. yüzyıl", "Empresyonizm dönemi"],
    ["Ressam", "Heykeltıraş", "Sanatçı"],
    ["Balerin resimleri", "Paris sanat çevresi", "Empresyonist sergiler"],
    ["Balerin temalarıyla bilinir", "Hareket ve kompozisyon ustası", "Empresyonizmle bağlantılı"]
  ),

  h(
    5165,
    "Sandro Botticelli",
    ["sandro botticelli", "botticelli"],
    ["İtalya", "Floransa"],
    ["15. yüzyıl", "Rönesans"],
    ["Ressam", "Sanatçı"],
    ["Venüs'ün Doğuşu", "Primavera", "Floransa Rönesansı"],
    ["Rönesans resminin önemli isimlerinden", "Mitolojik sahneleriyle bilinir", "Floransa ile bağlantılı"]
  ),

  h(
    5166,
    "Raffaello Sanzio",
    ["raffaello", "raphael", "raffaello sanzio", "rafael"],
    ["İtalya", "Urbino", "Roma"],
    ["15. yüzyıl sonu", "16. yüzyıl", "Rönesans"],
    ["Ressam", "Mimar", "Sanatçı"],
    ["Atina Okulu", "Vatikan freskleri", "Yüksek Rönesans"],
    ["Yüksek Rönesans ustalarından", "Uyumlu kompozisyonlarıyla bilinir", "Atina Okulu ile anılır"]
  ),

  h(
    5167,
    "Donatello",
    ["donatello", "donato di niccolo"],
    ["İtalya", "Floransa"],
    ["15. yüzyıl", "Rönesans"],
    ["Heykeltıraş", "Sanatçı"],
    ["David heykeli", "Floransa heykel sanatı", "Rönesans heykelciliği"],
    ["Rönesans heykelinin öncülerinden", "Bronz David ile bilinir", "Doğalcı üslubuyla anılır"]
  ),

  h(
    5168,
    "Filippo Brunelleschi",
    ["brunelleschi", "filippo brunelleschi"],
    ["İtalya", "Floransa"],
    ["15. yüzyıl", "Rönesans"],
    ["Mimar", "Mühendis"],
    ["Floransa Katedrali kubbesi", "Perspektif çalışmaları", "Rönesans mimarisi"],
    ["Kubbe tasarımıyla bilinir", "Rönesans mimarisini etkiledi", "Perspektif çalışmalarıyla anılır"]
  ),

  h(
    5169,
    "Otto von Bismarck",
    ["otto von bismarck", "bismarck"],
    ["Prusya", "Almanya", "Avrupa"],
    ["19. yüzyıl"],
    ["Devlet adamı", "Şansölye", "Diplomat"],
    ["Alman birliği", "Prusya siyaseti", "Avrupa dengesi"],
    ["Demir Şansölye olarak bilinir", "Almanya'nın birleşmesinde etkili oldu", "Realpolitik ile anılır"]
  ),

  h(
    5170,
    "Giuseppe Garibaldi",
    ["giuseppe garibaldi", "garibaldi"],
    ["İtalya", "Güney Amerika", "Akdeniz"],
    ["19. yüzyıl", "İtalyan birliği dönemi"],
    ["Komutan", "Devrimci", "Ulusal kahraman"],
    ["İtalyan birliği", "Kırmızı Gömlekliler", "Sicilya seferi"],
    ["İtalyan birliğinin sembol isimlerinden", "Gönüllü birlikleriyle bilinir", "Ulusal kahraman olarak anılır"]
  ),

  h(
    5171,
    "Queen Victoria",
    ["queen victoria", "kraliçe victoria", "kralice victoria", "victoria"],
    ["Birleşik Krallık", "Londra", "Britanya İmparatorluğu"],
    ["19. yüzyıl", "Victoria dönemi"],
    ["Kraliçe", "Monark"],
    ["Victoria dönemi", "Britanya İmparatorluğu'nun genişlemesi", "Sanayi çağı toplumu"],
    ["Uzun saltanatıyla bilinir", "Victoria dönemiyle anılır", "Britanya monarşisinin ikonik figürü"]
  ),

  h(
    5172,
    "Charles de Gaulle",
    ["charles de gaulle", "de gaulle"],
    ["Fransa", "Paris", "Avrupa"],
    ["20. yüzyıl", "II. Dünya Savaşı", "Soğuk Savaş başlangıcı"],
    ["General", "Devlet adamı", "Cumhurbaşkanı"],
    ["Özgür Fransa hareketi", "Fransa Beşinci Cumhuriyeti", "Savaş sonrası politika"],
    ["Fransız direnişiyle bilinir", "Beşinci Cumhuriyetin kurucu figürü", "Güçlü devlet anlayışıyla anılır"]
  ),

  h(
    5173,
    "Margaret Thatcher",
    ["margaret thatcher", "thatcher"],
    ["Birleşik Krallık", "Londra"],
    ["20. yüzyıl", "Soğuk Savaş dönemi"],
    ["Başbakan", "Siyasi lider"],
    ["Britanya başbakanlığı", "Ekonomi politikaları", "Falkland Savaşı dönemi"],
    ["Demir Leydi olarak bilinir", "Tartışmalı ve etkili lider", "Uzun başbakanlığıyla anılır"]
  ),

  h(
    5174,
    "Mikhail Gorbachev",
    ["mikhail gorbachev", "gorbachev", "gorbaçov"],
    ["Sovyetler Birliği", "Moskova", "Rusya"],
    ["20. yüzyıl", "Soğuk Savaş'ın son dönemi"],
    ["Lider", "Devlet adamı", "Reformcu"],
    ["Perestroyka", "Glasnost", "Soğuk Savaş'ın sona ermesi"],
    ["Sovyet reformlarıyla bilinir", "Soğuk Savaş'ın bitişinde etkili oldu", "Nobel Barış Ödülü aldı"]
  ),

  h(
    5175,
    "Vladimir Lenin",
    ["vladimir lenin", "lenin"],
    ["Rusya", "Sovyetler Birliği", "Petrograd"],
    ["20. yüzyıl başı", "Rus Devrimi dönemi"],
    ["Devrimci", "Lider", "Siyasi düşünür"],
    ["1917 Devrimi", "Bolşevik hareket", "Sovyet devletinin kuruluşu"],
    ["Rus Devrimi'nin liderlerinden", "Leninizm ile bilinir", "20. yüzyıl siyasetini etkiledi"]
  ),

  h(
    5176,
    "Josef Stalin",
    ["josef stalin", "stalin", "iosif stalin"],
    ["Sovyetler Birliği", "Gürcistan kökenli", "Moskova"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi"],
    ["Lider", "Devlet adamı"],
    ["Sovyet yönetimi", "II. Dünya Savaşı", "Sanayileşme politikaları"],
    ["Tartışmalı bir tarihi figür", "Sovyet tarihinde merkezi rol oynadı", "Otoriter yönetimiyle anılır"]
  ),

  h(
    5177,
    "Benito Mussolini",
    ["benito mussolini", "mussolini"],
    ["İtalya", "Roma"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi"],
    ["Siyasi lider", "Diktatör"],
    ["Faşist İtalya", "II. Dünya Savaşı", "Roma yönetimi"],
    ["Tartışmalı bir tarihi figür", "Faşizmle anılır", "İtalya'nın savaş dönemi lideriydi"]
  ),

  h(
    5178,
    "Adolf Hitler",
    ["adolf hitler", "hitler"],
    ["Almanya", "Avusturya kökenli", "Berlin"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi"],
    ["Diktatör", "Siyasi lider"],
    ["Nazi Almanyası", "II. Dünya Savaşı", "Avrupa tarihindeki büyük yıkım dönemi"],
    ["Tarihin en karanlık figürlerinden biri olarak anılır", "Nazi rejimiyle bilinir", "Tartışmalı ve olumsuz tarihi figür"]
  ),

  h(
    5179,
    "Jawaharlal Nehru",
    ["jawaharlal nehru", "nehru"],
    ["Hindistan", "Yeni Delhi", "Güney Asya"],
    ["20. yüzyıl", "Bağımsız Hindistan dönemi"],
    ["Başbakan", "Devlet adamı", "Bağımsızlık lideri"],
    ["Hindistan bağımsızlığı", "Bağımsız Hindistan'ın kuruluşu", "Bağlantısızlar hareketi"],
    ["Hindistan'ın ilk başbakanı", "Modern Hindistan'ın kurucu liderlerinden", "Bağımsızlık hareketiyle bağlantılı"]
  ),

  h(
    5180,
    "Muhammed Ali Cinnah",
    ["muhammed ali cinnah", "muhammad ali jinnah", "cinnah", "jinnah"],
    ["Pakistan", "Hindistan", "Güney Asya"],
    ["20. yüzyıl", "Bölünme dönemi"],
    ["Lider", "Devlet kurucu", "Hukukçu"],
    ["Pakistan'ın kuruluşu", "Hindistan'ın bölünmesi", "Bağımsızlık süreci"],
    ["Pakistan'ın kurucusu olarak bilinir", "Quaid-i Azam unvanıyla anılır", "Güney Asya tarihinde merkezi figür"]
  ),

  h(
    5181,
    "Mustafa Reşit Paşa",
    ["mustafa reşit paşa", "mustafa resit pasa", "reşit paşa", "resit pasa"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Avrupa diplomasisi"],
    ["19. yüzyıl", "Tanzimat dönemi"],
    ["Devlet adamı", "Diplomat", "Reformcu"],
    ["Tanzimat Fermanı", "Osmanlı modernleşmesi", "Avrupa diplomasisi"],
    ["Tanzimat'ın önemli isimlerinden", "Osmanlı reform süreciyle bilinir", "Diplomatik kariyeriyle anılır"]
  ),

  h(
    5182,
    "Mahmud II",
    ["mahmud ii", "2. mahmud", "ikinci mahmud", "mahmud sultan"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu"],
    ["19. yüzyıl", "Osmanlı modernleşme dönemi"],
    ["Padişah", "Reformcu", "Devlet adamı"],
    ["Yeniçeri Ocağı'nın kaldırılması", "Merkezi reformlar", "Osmanlı modernleşmesi"],
    ["Reformcu padişah olarak bilinir", "Merkezi devlet yapısını güçlendirdi", "Osmanlı son dönem dönüşümünü başlattı"]
  ),

  h(
    5183,
    "İbn Haldun",
    ["ibn haldun", "ibni haldun", "ibn khaldun"],
    ["Kuzey Afrika", "Tunus", "Mağrip"],
    ["14. yüzyıl", "Orta Çağ", "İslam düşünce tarihi"],
    ["Tarihçi", "Sosyolog", "Düşünür"],
    ["Mukaddime", "Toplum ve tarih kuramları", "Devletlerin yükseliş ve düşüş analizleri"],
    ["Sosyolojinin öncülerinden sayılır", "Mukaddime ile bilinir", "Tarih felsefesini etkiledi"]
  ),

  h(
    5184,
    "İbn Rüşd",
    ["ibn rüşd", "ibn rusd", "averroes"],
    ["Endülüs", "Kurtuba", "İslam dünyası"],
    ["12. yüzyıl", "Orta Çağ"],
    ["Filozof", "Hekim", "Hukukçu"],
    ["Aristoteles yorumları", "Endülüs düşünce hayatı", "Felsefe ve din tartışmaları"],
    ["Averroes adıyla Batı'da tanındı", "Aristoteles yorumlarıyla bilinir", "İslam ve Avrupa felsefesini etkiledi"]
  ),

  h(
    5185,
    "Ömer Hayyam",
    ["ömer hayyam", "omer hayyam", "omar khayyam"],
    ["İran", "Nişabur", "İslam dünyası"],
    ["11. yüzyıl", "12. yüzyıl", "İslam altın çağı"],
    ["Şair", "Matematikçi", "Astronom"],
    ["Rubailer", "Takvim çalışmaları", "Matematiksel katkılar"],
    ["Rubaileriyle bilinir", "Çok yönlü bilgin", "Şiir ve bilimle anılır"]
  ),

  h(
    5186,
    "El-Kindi",
    ["el kindi", "al kindi", "kindi"],
    ["Irak", "Bağdat", "İslam dünyası"],
    ["9. yüzyıl", "İslam altın çağı"],
    ["Filozof", "Bilim insanı", "Çevirmen"],
    ["Bağdat Bilgelik Evi", "Felsefe çevirileri", "Matematik ve müzik çalışmaları"],
    ["İslam felsefesinin erken isimlerinden", "Çok yönlü bilgin", "Çeviri hareketiyle bağlantılı"]
  ),

  h(
    5187,
    "Yunus Emre",
    ["yunus emre", "yunus"],
    ["Anadolu", "Türkiye", "Orta Anadolu"],
    ["13. yüzyıl", "14. yüzyıl", "Anadolu Selçuklu sonrası dönem"],
    ["Şair", "Mutasavvıf", "Halk ozanı"],
    ["Türkçe tasavvuf şiirleri", "Anadolu irfan geleneği", "Halk edebiyatı"],
    ["Sade Türkçesiyle bilinir", "Sevgi ve hoşgörü temalarıyla anılır", "Anadolu edebiyatının önemli ismi"]
  ),

  h(
    5188,
    "Hacı Bektaş Veli",
    ["hacı bektaş veli", "haci bektas veli", "bektaş veli"],
    ["Anadolu", "Horasan kökenli", "Nevşehir"],
    ["13. yüzyıl", "Orta Çağ", "Anadolu tasavvuf dönemi"],
    ["Düşünür", "Mutasavvıf", "Öğretmen"],
    ["Bektaşilik geleneği", "Anadolu tasavvufu", "Makâlât ile bağlantı"],
    ["Anadolu düşünce hayatında etkili oldu", "Hoşgörü öğretisiyle anılır", "Tasavvuf geleneğiyle bilinir"]
  ),

  h(
    5189,
    "Ahi Evran",
    ["ahi evran", "ahi evren"],
    ["Anadolu", "Kırşehir", "Kayseri"],
    ["13. yüzyıl", "Anadolu Selçuklu dönemi"],
    ["Teşkilat kurucusu", "Esnaf lideri", "Düşünür"],
    ["Ahilik teşkilatı", "Esnaf dayanışması", "Anadolu şehir hayatı"],
    ["Ahilik geleneğiyle bilinir", "Esnaf ahlakı ve örgütlenmesiyle anılır", "Anadolu sosyal tarihinde önemli"]
  ),

  h(
    5190,
    "Elizabeth I",
    ["elizabeth i", "1. elizabeth", "birinci elizabeth", "kraliçe elizabeth i"],
    ["İngiltere", "Londra", "Avrupa"],
    ["16. yüzyıl", "Elizabeth dönemi"],
    ["Kraliçe", "Monark", "Devlet başkanı"],
    ["İngiliz Rönesansı", "İspanyol Armadası dönemi", "Tudor yönetimi"],
    ["Elizabeth dönemiyle bilinir", "İngiltere'nin güçlenmesinde etkili oldu", "Tudor hanedanının önemli figürü"]
  ),

  h(
    5191,
    "Mary Wollstonecraft",
    ["mary wollstonecraft", "wollstonecraft"],
    ["İngiltere", "Londra", "Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["Yazar", "Düşünür", "Kadın hakları savunucusu"],
    ["Kadın Haklarının Gerekçelendirilmesi", "Aydınlanma tartışmaları", "Eğitim hakkı savunusu"],
    ["Erken kadın hakları düşüncesinin öncülerinden", "Eğitim ve eşitlik vurgusuyla bilinir", "Modern feminist düşünceyi etkiledi"]
  ),

  h(
    5192,
    "Mary Shelley",
    ["mary shelley", "shelley"],
    ["İngiltere", "Londra", "Avrupa"],
    ["19. yüzyıl", "Romantik dönem"],
    ["Yazar", "Edebiyat figürü"],
    ["Frankenstein", "Romantik edebiyat çevresi", "Bilim kurgu geleneği"],
    ["Frankenstein ile bilinir", "Bilim kurgu edebiyatının öncülerinden sayılır", "Romantik dönem yazarı"]
  ),

  h(
    5193,
    "Simone de Beauvoir",
    ["simone de beauvoir", "beauvoir"],
    ["Fransa", "Paris", "Avrupa"],
    ["20. yüzyıl", "Varoluşçuluk dönemi"],
    ["Yazar", "Filozof", "Düşünür"],
    ["İkinci Cins", "Varoluşçu çevre", "Kadın özgürlüğü tartışmaları"],
    ["Modern feminist düşünceyi etkiledi", "İkinci Cins ile bilinir", "Varoluşçulukla bağlantılı"]
  ),

  h(
    5194,
    "Eleanor Roosevelt",
    ["eleanor roosevelt"],
    ["ABD", "New York", "Washington"],
    ["20. yüzyıl", "II. Dünya Savaşı sonrası dönem"],
    ["First Lady", "Diplomat", "İnsan hakları savunucusu"],
    ["İnsan Hakları Evrensel Beyannamesi", "BM çalışmaları", "ABD kamu hayatı"],
    ["İnsan hakları çalışmalarıyla bilinir", "Etkili First Lady figürü", "BM'de aktif rol aldı"]
  ),

  h(
    5195,
    "Eva Perón",
    ["eva peron", "eva perón", "evita"],
    ["Arjantin", "Buenos Aires", "Latin Amerika"],
    ["20. yüzyıl", "Peron dönemi"],
    ["Siyasi figür", "First Lady", "Toplumsal figür"],
    ["Arjantin sosyal politikaları", "Peronizm", "Kadınların oy hakkı süreci"],
    ["Evita olarak bilinir", "Arjantin siyasetinde sembol isim", "Popüler kültürde de yer aldı"]
  ),

  h(
    5196,
    "Hypatia",
    ["hypatia", "hipatya"],
    ["İskenderiye", "Mısır", "Geç Antik Çağ dünyası"],
    ["4. yüzyıl", "5. yüzyıl", "Geç Antik Çağ"],
    ["Filozof", "Matematikçi", "Öğretmen"],
    ["İskenderiye okulu", "Matematik ve felsefe öğretimi", "Geç antik bilim çevresi"],
    ["Antik dünyanın önemli kadın bilginlerinden", "İskenderiye ile anılır", "Bilim ve felsefe tarihiyle bağlantılı"]
  ),

  h(
    5197,
    "Hatshepsut",
    ["hatshepsut", "hatşepsut", "hatsepsut"],
    ["Antik Mısır", "Nil Vadisi", "Teb"],
    ["MÖ 15. yüzyıl", "Yeni Krallık dönemi"],
    ["Firavun", "Kraliçe", "Hükümdar"],
    ["Deir el-Bahari tapınağı", "Ticaret seferleri", "Mısır yönetimi"],
    ["Antik Mısır'ın güçlü kadın hükümdarlarından", "Anıtsal yapılarıyla bilinir", "Firavun unvanıyla anılır"]
  ),

  h(
    5198,
    "Boudica",
    ["boudica", "boudicca", "budika"],
    ["Britanya", "İceni kabilesi", "Roma Britanyası"],
    ["1. yüzyıl", "Antik Roma dönemi"],
    ["Kraliçe", "İsyan lideri", "Savaşçı"],
    ["Roma yönetimine karşı isyan", "Britanya direnişi", "İceni kabilesi"],
    ["Britanya direniş sembollerinden", "Roma'ya karşı isyanıyla bilinir", "Cesur lider olarak anılır"]
  ),

  h(
    5199,
    "Sappho",
    ["sappho", "safo"],
    ["Antik Yunan", "Lesbos", "Ege"],
    ["MÖ 7. yüzyıl", "MÖ 6. yüzyıl", "Arkaik dönem"],
    ["Şair", "Edebiyat figürü"],
    ["Lirik şiirler", "Lesbos şiir çevresi", "Antik Yunan edebiyatı"],
    ["Antik lirik şiirin önemli ismidir", "Şiirleriyle bilinir", "Edebiyat tarihinde etkili kadın şair"]
  ),

  h(
    5200,
    "Catherine de' Medici",
    ["catherine de medici", "katerina de medici", "medici"],
    ["İtalya kökenli", "Fransa", "Paris"],
    ["16. yüzyıl", "Fransız din savaşları dönemi"],
    ["Kraliçe", "Siyasi figür", "Naibe"],
    ["Fransız saray siyaseti", "Valois hanedanı", "Din savaşları dönemi"],
    ["Fransa saray siyasetinde etkili oldu", "Medici ailesiyle bağlantılı", "Tartışmalı bir kraliçe figürü"]
  ),

  h(
    5201,
    "Marcus Agrippa",
    ["marcus agrippa", "agrippa"],
    ["Antik Roma", "İtalya"],
    ["MÖ 1. yüzyıl", "Antik Çağ"],
    ["General", "Mimar", "Devlet adamı"],
    ["Aktium Savaşı", "Pantheon inşası", "Augustus dönemi"],
    [
      "Aktium'da Octavianus'un zaferini hazırlayan kilit komutandı",
      "Roma'daki Pantheon'un ilk hamisi olarak bilinir",
      "Augustus'un en güvendiği sağ kolu ve damadıydı",
      "Askeri başarıyı şehircilik ve kamu yapılarıyla birleştirdi",
    ]
  ),
  h(
    5202,
    "Trajan",
    ["trajan", "traianus", "trajanus"],
    ["Roma İmparatorluğu", "İtalya", "Avrupa"],
    ["MS 1. yüzyıl", "MS 2. yüzyıl", "Antik Roma"],
    ["İmparator", "Komutan"],
    ["Dacia Savaşları", "İmparatorluk genişlemesi", "Trajan Sütunu"],
    [
      "Roma İmparatorluğu sınırlarını en geniş noktaya taşıdı",
      "Dacia zaferleri Trajan Sütunu'nda sahne sahne anlatılır",
      "Roma geleneğinde 'iyi imparator' örneklerinden biri kabul edilir",
      "Asker kökenli, disiplinli ve popüler bir hükümdardı",
    ]
  ),
  h(
    5203,
    "Hadrian",
    ["hadrian", "hadrianus"],
    ["Roma İmparatorluğu", "Britanya", "İtalya"],
    ["MS 2. yüzyıl", "Antik Roma"],
    ["İmparator", "Mimar"],
    ["Hadrian Duvarı", "İmparatorluk seyahatleri", "Pantheon'un yeniden inşası"],
    [
      "Fetih yerine sınırları sağlamlaştırma politikasıyla ayrıştı",
      "Britanya'daki Hadrian Duvarı en bilinen miraslarından biridir",
      "İmparatorluğu bizzat gezip eyaletleri denetlemesiyle tanınır",
      "Mimariye ve Yunan kültürüne ilgisi güçlüydü",
    ]
  ),
  h(
    5204,
    "Constantine I",
    ["constantine", "konstantin", "büyük konstantin"],
    ["Roma İmparatorluğu", "Konstantinopolis", "Avrupa"],
    ["MS 4. yüzyıl", "Geç Antik Çağ"],
    ["İmparator", "Hükümdar"],
    ["Hristiyanlığın kabulü", "Konstantinopolis'in kuruluşu", "Milano Fermanı"],
    [
      "Konstantinopolis'i kurarak Roma'nın ağırlık merkezini doğuya taşıdı",
      "Milano Fermanı ile Hristiyanların durumunu değiştiren süreci başlattı",
      "Milvian Köprüsü Savaşı sonrasındaki dönüşümüyle hatırlanır",
      "Geç Roma tarihinin en belirleyici imparatorlarından biridir",
    ]
  ),
  h(
    5205,
    "Justinian I",
    ["justinian", "justinyen", "i. justinyen"],
    ["Bizans İmparatorluğu", "Konstantinopolis", "Akdeniz"],
    ["MS 6. yüzyıl", "Erken Orta Çağ"],
    ["İmparator", "Hukukçu"],
    ["Ayasofya inşası", "Justinianus Kanunları", "Roma topraklarını geri alma çabası"],
    [
      "Corpus Juris Civilis ile Roma hukukunu sistemleştirdi",
      "Ayasofya'nın inşası onun döneminin en güçlü sembolüdür",
      "Eski Batı Roma topraklarını geri alma hedefiyle seferler yürüttü",
      "Theodora ve Belisarius ile birlikte Bizans'ın altın çağını temsil eder",
    ]
  ),
  h(
    5206,
    "Theodora",
    ["theodora"],
    ["Bizans İmparatorluğu", "Konstantinopolis"],
    ["MS 6. yüzyıl", "Erken Orta Çağ"],
    ["İmparatoriçe", "Siyasi figür"],
    ["Nika Ayaklanması", "Siyasi güç", "İmparatorluk yönetimi"],
    [
      "Nika Ayaklanması sırasında geri çekilmeyi reddeden kararlı tavrıyla bilinir",
      "Justinianus yönetiminde sarayın en etkili siyasi akıllarından biriydi",
      "Kadınların hukuki konumu konusunda etkili düzenlemelerle anılır",
      "Alt sınıftan imparatoriçeliğe yükselmesiyle sıra dışı bir figürdür",
    ]
  ),
  h(
    5207,
    "Belisarius",
    ["belisarius", "belisar"],
    ["Bizans İmparatorluğu", "İtalya", "Kuzey Afrika"],
    ["MS 6. yüzyıl"],
    ["Komutan", "General"],
    ["Vandal savaşları", "Got savaşları", "Bizans topraklarını geri alması"],
    [
      "Vandallara ve Ostrogotlara karşı kazandığı seferlerle ün kazandı",
      "Az kuvvetle büyük sonuç alma becerisiyle klasik komutan örneklerindendir",
      "Justinianus'un Batı'yı geri alma siyasetinin askeri yüzüydü",
      "Bizans askeri tarihinde en çok saygı duyulan generallerden biridir",
    ]
  ),
  h(
    5208,
    "Heraclius",
    ["heraclius", "herakleios"],
    ["Bizans İmparatorluğu", "Anadolu", "Ortadoğu"],
    ["MS 7. yüzyıl"],
    ["İmparator", "Komutan"],
    ["Sasani savaşları", "Bizans'ın yeniden dirilişi", "Yüzyılın başı dönemi"],
    [
      "Sasanilere karşı imparatorluğu çöküşten döndüren seferler yürüttü",
      "Kutsal Haç'ın geri alınması anlatısıyla hatırlanır",
      "Latince ağırlıklı Roma mirasından Yunanca Bizans kimliğine geçişte sembol figürdür",
      "Uzun savaşların ardından Arap fetihleriyle yeni bir kriz dönemine girdi",
    ]
  ),
  h(
    5209,
    "Alexios I Komnenos",
    ["alexios komnenos", "alexios i"],
    ["Bizans İmparatorluğu", "Konstantinopolis"],
    ["11. yüzyıl", "12. yüzyıl", "Orta Çağ"],
    ["İmparator", "Siyasetçi"],
    ["Komnenos Restorasyonu", "Haçlı Seferleri ile temas", "Bizans'ı toparlaması"],
    [
      "Malazgirt sonrası sarsılan Bizans'ı toparlama çabasıyla bilinir",
      "Birinci Haçlı Seferi'nin başlamasında diplomatik çağrısı etkili oldu",
      "Komnenos hanedanının yükselişini başlattı",
      "Askeri krizleri evlilik ittifakları ve diplomasiyle yönetmeye çalıştı",
    ]
  ),
  h(
    5210,
    "Otto I",
    ["otto i", "büyük otto", "otto"],
    ["Kutsal Roma İmparatorluğu", "Almanya"],
    ["10. yüzyıl"],
    ["İmparator", "Kral"],
    ["Kutsal Roma İmparatorluğu'nun temeli", "Macar seferi", "İtalya ilişkileri"],
    [
      "Lechfeld zaferiyle Macar akınlarını durdurmasıyla bilinir",
      "962'de imparator olarak taç giyerek Kutsal Roma düzeninin temelini attı",
      "Alman krallığını kilise ve soylular dengesiyle güçlendirdi",
      "Orta Çağ Avrupa siyasetinin kurucu hükümdarlarındandır",
    ]
  ),
  h(
    5211,
    "Frederick Barbarossa",
    ["barbarossa", "frederick i"],
    ["Kutsal Roma İmparatorluğu", "Avrupa", "Ortadoğu"],
    ["12. yüzyıl"],
    ["İmparator", "Komutan"],
    ["Haçlı Seferi", "İtalya siyaseti", "İmparatorluk otoritesi"],
    [
      "Kızıl sakalı ve imparatorluk otoritesini savunmasıyla tanınır",
      "İtalyan şehirleriyle uzun mücadeleleriyle hatırlanır",
      "Üçüncü Haçlı Seferi sırasında ölümü efsaneleşmiştir",
      "Alman siyasi mitolojisinde geri dönecek kral anlatısına konu olmuştur",
    ]
  ),
  h(
    5212,
    "Ivan IV",
    ["ivan iv", "korkunç ivan", "ivan the terrible"],
    ["Rusya", "Moskova"],
    ["16. yüzyıl"],
    ["Çar", "Hükümdar"],
    ["Rusya'nın genişlemesi", "Merkezi otorite kurma", "Korku dönemi"],
    [
      "Rusya'da çar unvanını kullanan ilk hükümdar olarak bilinir",
      "Kazan ve Astrahan'ın alınmasıyla Rusya'nın doğuya açılmasını hızlandırdı",
      "Opriçnina dönemi ve sert yönetimiyle karanlık bir miras bıraktı",
      "'Korkunç' lakabı gücünü ve acımasızlığını birlikte çağrıştırır",
    ]
  ),
  h(
    5213,
    "Catherine of Aragon",
    ["catherine of aragon"],
    ["İspanya", "İngiltere"],
    ["16. yüzyıl"],
    ["Kraliçe"],
    ["Henry VIII ile evlilik", "İngiliz dini değişimi süreci", "Siyasi mücadele"],
    [
      "Henry VIII'in ilk eşi ve Mary I'in annesiydi",
      "Boşanma krizi İngiliz Reformu'nun yolunu açan temel olaylardan oldu",
      "Aragon ve Kastilya hanedan bağlantılarıyla İngiliz sarayında güçlü konumdaydı",
      "Haklarından vazgeçmeyen kararlı kraliçe imajıyla hatırlanır",
    ]
  ),
  h(
    5214,
    "Anne Boleyn",
    ["anne boleyn"],
    ["İngiltere"],
    ["16. yüzyıl"],
    ["Kraliçe", "Siyasi figür"],
    ["Henry VIII ile evlilik", "İngiliz Reformu", "İdamı"],
    [
      "Elizabeth I'in annesi olarak Tudor tarihinin kilit figürlerindendir",
      "Henry VIII ile evliliği İngiliz Reformu sürecini hızlandırdı",
      "İdamı saray entrikalarının en dramatik örneklerinden biridir",
      "Kısa kraliçelik dönemine rağmen İngiliz monarşisini kalıcı biçimde etkiledi",
    ]
  ),
  h(
    5215,
    "Mary I",
    ["mary i", "kanlı mary", "bloody mary"],
    ["İngiltere"],
    ["16. yüzyıl"],
    ["Kraliçe"],
    ["Dini politikalar", "İngiliz tahtı", "Katolik dönüşüm çabaları"],
    [
      "İngiltere'nin tek başına hüküm süren ilk kraliçesiydi",
      "Katolikliği geri getirme çabaları nedeniyle 'Bloody Mary' lakabıyla anılır",
      "Tudor hanedanındaki din çatışmalarının en sert yüzünü temsil eder",
      "Kısa saltanatı İngiliz Reformu'nun geri döndürülemezliğini gösterdi",
    ]
  ),
  h(
    5216,
    "Henry VIII",
    ["henry viii", "8. henry"],
    ["İngiltere"],
    ["16. yüzyıl"],
    ["Kral"],
    ["İngiliz Reformu", "Eşleri ile evlilikleri", "Güçlü monarşi"],
    [
      "Altı evliliğiyle popüler tarihin en tanınan krallarındandır",
      "Roma Katolik Kilisesi'nden kopuş İngiltere Kilisesi'ni doğurdu",
      "Tudor monarşisini merkezileştiren güçlü ve sert bir hükümdardı",
      "Saray entrikaları, miras krizi ve reformla birlikte hatırlanır",
    ]
  ),
  h(
    5217,
    "Charles V",
    ["charles v", "5. şarl", "kutsal roma imparatoru"],
    ["Kutsal Roma İmparatorluğu", "İspanya", "Avrupa"],
    ["16. yüzyıl"],
    ["İmparator", "Kral"],
    ["Avrupa hakimiyeti çabası", "Martin Luther dönemi", "İspanyol kolonileri"],
    [
      "Güneş batmayan imparatorluk fikrine yaklaşan devasa toprakları yönetti",
      "Luther ve Reform hareketiyle doğrudan yüzleşti",
      "İspanya, Kutsal Roma ve Amerika bağlantılı karmaşık bir imparatorluk mirası vardı",
      "Avrupa'da Habsburg gücünün zirve sembollerinden biridir",
    ]
  ),
  h(
    5218,
    "Philip II of Spain",
    ["philip ii", "2. philip", "2. filip"],
    ["İspanya", "Avrupa", "Amerika"],
    ["16. yüzyıl"],
    ["Kral"],
    ["İspanyol gücünün zirvesi", "İngiltere ile mücadele", "Hristiyanlık savunusu"],
    [
      "İspanyol Armadası ve İngiltere rekabetiyle hatırlanır",
      "El Escorial sarayı onun merkeziyetçi yönetiminin simgelerindendir",
      "Katolik dünyasının savunucusu rolünü üstlendi",
      "İspanya'nın küresel imparatorluk gücünü en görünür hâle getiren krallardandır",
    ]
  ),
  h(
    5219,
    "Gustavus Adolphus",
    ["gustavus adolphus"],
    ["İsveç", "Avrupa"],
    ["17. yüzyıl"],
    ["Kral", "Komutan"],
    ["Otuz Yıl Savaşları", "Askeri reformlar", "İsveç'in yükselişi"],
    [
      "Modern savaş taktiklerini geliştiren krallardan biri kabul edilir",
      "Otuz Yıl Savaşları'nda İsveç'i Avrupa'nın büyük gücü hâline getirdi",
      "Hareketli topçu ve disiplinli piyade kullanımıyla ayrıştı",
      "Lützen'de ölümü Protestan Avrupa için büyük kırılma sayıldı",
    ]
  ),
  h(
    5220,
    "Cardinal Richelieu",
    ["richelieu"],
    ["Fransa"],
    ["17. yüzyıl"],
    ["Siyasetçi", "Kardinal"],
    ["Fransız merkeziyeti", "Otuz Yıl Savaşları", "Kraliyet otoritesi"],
    [
      "Fransız kraliyet otoritesini merkezileştiren ana mimarlardandır",
      "Kardinal olmasına rağmen devlet çıkarını mezhep bağlarının önüne koydu",
      "Otuz Yıl Savaşları diplomasisinde Fransa'nın yönünü belirledi",
      "Gölgeden yöneten güçlü devlet aklı imajıyla hatırlanır",
    ]
  ),
  h(
    5221,
    "Sun Tzu",
    ["sun tzu", "sun zi"],
    ["Çin"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Stratejist", "Komutan"],
    ["Savaş sanatı üzerine teoriler", "Savaş taktikleri", "Askeri felsefe"],
    [
      "Savaş Sanatı eseri askeri stratejinin en çok okunan klasiklerindendir",
      "Savaşı kazanmadan önce zihinde ve planda kazanma fikriyle tanınır",
      "Düşmanı tanıma ve çatışmadan kaçınarak üstünlük kurma yaklaşımıyla öne çıkar",
      "Askeri düşüncenin ötesinde iş ve yönetim dünyasına da taşınan bir figürdür",
    ]
  ),
  h(
    5222,
    "Han Wudi",
    ["han wudi"],
    ["Çin", "Han Hanedanı"],
    ["MÖ 2. yüzyıl", "Antik Çin"],
    ["İmparator"],
    ["İpek Yolu'nun genişlemesi", "Han hanedanının zirvesi", "Konfüçyüsçülüğün devlet dini olması"],
    [
      "Han Hanedanı'nı askeri ve kültürel açıdan zirveye taşıdı",
      "İpek Yolu'nun gelişmesinde etkili dış açılımlarıyla bilinir",
      "Konfüçyüsçülüğü devlet yönetiminde merkezî konuma taşıdı",
      "Çin imparatorluk geleneğinin en güçlü hükümdarlarından sayılır",
    ]
  ),
  h(
    5223,
    "Tang Taizong",
    ["tang taizong"],
    ["Çin", "Tang Hanedanı"],
    ["MS 7. yüzyıl"],
    ["İmparator"],
    ["Tang hanedanının zirvesi", "İstikrar dönemi", "Kültürel gelişim"],
    [
      "Zhenguan yönetimi Çin'de iyi hükümdarlık örneği sayılır",
      "Tang Hanedanı'nın siyasi ve askeri yükselişini sağlamlaştırdı",
      "Danışmanlarını dinleyen ve yetenekli bürokratları kullanan lider olarak bilinir",
      "Çin tarihindeki ideal imparator tiplerinden biri kabul edilir",
    ]
  ),
  h(
    5224,
    "Kublai Khan",
    ["kublai khan", "kubilay han"],
    ["Moğol İmparatorluğu", "Çin", "Yuan Hanedanı"],
    ["13. yüzyıl"],
    ["Han", "İmparator"],
    ["Yuan hanedanının kuruluşu", "Marco Polo ile temas", "Çin'in fethi"],
    [
      "Yuan Hanedanı'nı kurarak Çin'i yöneten Moğol imparatoru oldu",
      "Marco Polo anlatılarında Batı dünyasının ilgisini çeken saray figürüdür",
      "Moğol bozkır mirası ile Çin bürokrasisini birleştirmeye çalıştı",
      "Japonya seferlerindeki başarısızlıklarıyla da hatırlanır",
    ]
  ),
  h(
    5225,
    "Hongwu Emperor",
    ["hongwu"],
    ["Çin", "Ming Hanedanı"],
    ["14. yüzyıl"],
    ["İmparator"],
    ["Ming hanedanının kuruluşu", "Yuan yönetiminin sonu", "Çin'in restorasyonu"],
    [
      "Yoksul köylü kökeninden Ming Hanedanı'nın kuruculuğuna yükseldi",
      "Yuan/Moğol yönetimini devirerek Çin'de yerli hanedanı yeniden kurdu",
      "Sert merkeziyetçilik ve bürokratik kontrol politikalarıyla bilinir",
      "Köken hikayesi onu Çin tarihinin en dramatik yükselişlerinden biri yapar",
    ]
  ),
  h(
    5226,
    "Yongle Emperor",
    ["yongle"],
    ["Çin", "Ming Hanedanı"],
    ["15. yüzyıl"],
    ["İmparator"],
    ["Zheng He seferleri", "Yasak Şehir inşası", "Çin'in gücünün zirvesi"],
    [
      "Yasak Şehir'in inşasıyla Pekin'i imparatorluk merkezine dönüştürdü",
      "Zheng He'nin büyük deniz seferlerini destekledi",
      "Ansiklopedi ve kültür projeleriyle Ming görkemini büyüttü",
      "Tahta geçişindeki iç savaş nedeniyle tartışmalı ama güçlü bir hükümdardır",
    ]
  ),
  h(
    5227,
    "Kangxi Emperor",
    ["kangxi"],
    ["Çin", "Qing Hanedanı"],
    ["17. yüzyıl", "18. yüzyıl"],
    ["İmparator"],
    ["Qing yönetimi", "Uzun süren hükümdarlık", "Çin'in genişlemesi"],
    [
      "Çin tarihinin en uzun süre hüküm süren imparatorlarından biridir",
      "Qing yönetimini istikrara kavuşturup imparatorluğu genişletti",
      "Cizvit bilginlerle temas kuran meraklı ve öğrenmeye açık hükümdar olarak bilinir",
      "Kangxi Sözlüğü gibi kültürel projelerle de anılır",
    ]
  ),
  h(
    5228,
    "Qianlong Emperor",
    ["qianlong"],
    ["Çin", "Qing Hanedanı"],
    ["18. yüzyıl"],
    ["İmparator"],
    ["Zirve dönemi", "Genişleme", "Kültürel refah"],
    [
      "Qing İmparatorluğu'nun toprak ve kültür bakımından zirve dönemini temsil eder",
      "Büyük sanat koleksiyonları ve saray himayesiyle tanınır",
      "On Büyük Sefer anlatılarıyla askeri başarılarını meşrulaştırdı",
      "Uzun saltanatının sonu Qing düzenindeki yavaş zayıflamayı da gösterir",
    ]
  ),
  h(
    5229,
    "Meiji Emperor",
    ["meiji"],
    ["Japonya"],
    ["19. yüzyıl", "20. yüzyıl başı"],
    ["İmparator"],
    ["Modernleşme", "Meiji Restorasyonu", "Japonya'nın dünyayla bütünleşmesi"],
    [
      "Meiji Restorasyonu ile Japonya'nın feodal düzenden modern devlete geçişinin sembolüdür",
      "Batı teknolojisi ve kurumlarının hızla uyarlanması onun döneminde gerçekleşti",
      "Japonya'nın sanayileşme ve askeri modernleşme süreciyle anılır",
      "İmparator figürünün modern ulus-devlet kimliğinde merkezileştiği dönemdir",
    ]
  ),
  h(
    5230,
    "Toyotomi Hideyoshi",
    ["toyotomi hideyoshi"],
    ["Japonya"],
    ["16. yüzyıl"],
    ["Lider", "Daimyo"],
    ["Japon birleşimi", "Kore seferleri", "Sengoku dönemi sonu"],
    [
      "Köylü kökeninden Japonya'nın en güçlü liderlerinden birine yükseldi",
      "Sengoku döneminde ülkeyi birleştiren üç büyük figürden biridir",
      "Kore seferleriyle Japonya dışına yayılma denemesi yaptı",
      "Kılıç toplama ve sınıf düzeni politikalarıyla toplumu şekillendirdi",
    ]
  ),
  h(
    5231,
    "Tokugawa Ieyasu",
    ["tokugawa ieyasu"],
    ["Japonya"],
    ["17. yüzyıl başı"],
    ["Şogun", "Hükümdar"],
    ["Tokugawa Şogunluğu", "Sekigahara Savaşı", "Barış dönemi (Edo)"],
    [
      "Sekigahara zaferiyle Japonya'da Tokugawa düzeninin önünü açtı",
      "Edo döneminin uzun barış ve kapalı ülke sisteminin kurucu figürüdür",
      "Sabırlı ve hesapçı siyasi stratejisiyle bilinir",
      "Şogunluk yönetimini iki buçuk yüzyıldan fazla sürecek biçimde kurdu",
    ]
  ),
  h(
    5232,
    "Oda Nobunaga",
    ["oda nobunaga"],
    ["Japonya"],
    ["16. yüzyıl"],
    ["Daimyo", "Birleştirici"],
    ["Sengoku dönemi mücadeleleri", "Japon birleşimi başlangıcı", "Askeri modernleşme"],
    [
      "Sengoku döneminin en acımasız ve yenilikçi daimyo figürlerinden biridir",
      "Ateşli silahları etkili kullanarak savaş düzenini değiştirdi",
      "Japonya'nın birleşme sürecini başlatan üç büyük isimden biridir",
      "Honnō-ji olayıyla dramatik biçimde hayatını kaybetti",
    ]
  ),
  h(
    5233,
    "Minamoto no Yoritomo",
    ["minamoto no yoritomo"],
    ["Japonya"],
    ["12. yüzyıl", "13. yüzyıl"],
    ["Şogun"],
    ["Kamakura Şogunluğu", "Genpei Savaşı", "Askeri yönetimin başlangıcı"],
    [
      "Kamakura Şogunluğu'nu kurarak samuray yönetimini başlattı",
      "Genpei Savaşı sonrası Japon siyasetinde saray dışı askeri otoriteyi kalıcılaştırdı",
      "İlk şogun olarak Japon feodal düzeninin temel figürüdür",
      "Minamoto-Taira rekabetinin kazanan tarafını temsil eder",
    ]
  ),
  h(
    5234,
    "Wu Zetian",
    ["wu zetian"],
    ["Çin", "Tang Hanedanı"],
    ["7. yüzyıl"],
    ["İmparatoriçe"],
    ["Kendi imparatorluğunu kurması", "Güçlü yönetim", "Siyasi entrikalar"],
    [
      "Çin tarihinde imparator unvanını kendi adına kullanan tek kadındır",
      "Tang sarayında cariyelikten en yüksek siyasi güce yükseldi",
      "Bürokrasi ve sınav sistemi üzerinden yetenekli isimleri yükseltmesiyle bilinir",
      "Gücü, entrikası ve reformlarıyla Çin tarihinin en sıra dışı figürlerindendir",
    ]
  ),
  h(
    5235,
    "Akbar the Great",
    ["akbar", "ekber şah"],
    ["Hindistan", "Babür İmparatorluğu"],
    ["16. yüzyıl"],
    ["İmparator", "Hükümdar"],
    ["Hoşgörülü yönetim", "Babür genişlemesi", "Kültürel reformlar"],
    [
      "Babür İmparatorluğu'nu askeri güç ve idari reformlarla büyüttü",
      "Dinler arası hoşgörü ve saray tartışmalarıyla ünlüdür",
      "Mansabdari sistemiyle imparatorluk yönetimini düzenledi",
      "Hindistan tarihindeki en güçlü ve kapsayıcı hükümdarlardan sayılır",
    ]
  ),
  h(
    5236,
    "Shah Jahan",
    ["shah jahan", "şah cihan"],
    ["Hindistan", "Babür İmparatorluğu"],
    ["17. yüzyıl"],
    ["İmparator"],
    ["Tac Mahal inşası", "Babür sanatının zirvesi", "İmparatorluk dönemi"],
    [
      "Tac Mahal'i yaptırmasıyla dünya mimarlık tarihinde unutulmazdır",
      "Babür sanatının ve saray estetiğinin zirve dönemini temsil eder",
      "Mümtaz Mahal'e duyduğu bağlılıkla popüler tarihte romantik figür hâline geldi",
      "Saltanatının sonu oğulları arasındaki taht kavgasıyla gölgelendi",
    ]
  ),
  h(
    5237,
    "Aurangzeb",
    ["aurangzeb"],
    ["Hindistan", "Babür İmparatorluğu"],
    ["17. yüzyıl", "18. yüzyıl başı"],
    ["İmparator"],
    ["Genişleme", "Dini sertlik", "Babür son parlak dönem"],
    [
      "Babür topraklarını en geniş sınırlara taşıyan hükümdarlardan biridir",
      "Uzun savaşlar ve sert dini politikalarla tartışmalı bir miras bıraktı",
      "Deccan seferleri imparatorluğu genişletirken ekonomik yükü artırdı",
      "Babürlerin son büyük ama yıpratıcı hükümdarı olarak anılır",
    ]
  ),
  h(
    5238,
    "Babur",
    ["babur", "babür şah"],
    ["Hindistan", "Orta Asya"],
    ["16. yüzyıl başı"],
    ["İmparator", "Kurucu"],
    ["Babür İmparatorluğu'nun kuruluşu", "Hindistan seferleri", "Timurlu kökeni"],
    [
      "Timurlu ve Cengizli mirası Hindistan'da Babür İmparatorluğu'na taşıdı",
      "Panipat zaferiyle Kuzey Hindistan'da yeni bir hanedan kurdu",
      "Babürname adlı anılarıyla kendi dönemini canlı biçimde anlattı",
      "Hem savaşçı hem edebi yönü olan kurucu hükümdardır",
    ]
  ),
  h(
    5239,
    "Tipu Sultan",
    ["tipu sultan", "tippu sultan"],
    ["Hindistan", "Mysore"],
    ["18. yüzyıl"],
    ["Sultan", "Direnişçi"],
    ["İngilizlere karşı mücadele", "Mysore savaşları", "Modern askeri teknolojiler"],
    [
      "Mysore Kaplanı lakabıyla İngiliz yayılmasına karşı direnişi temsil eder",
      "Roket teknolojisini askeri alanda kullanmasıyla dikkat çeker",
      "Mysore Savaşları'nda İngiliz Doğu Hindistan Şirketi'ne karşı mücadele etti",
      "Hint anti-sömürge hafızasında güçlü bir semboldür",
    ]
  ),
  h(
    5240,
    "Rani of Jhansi",
    ["lakshmibai", "rani of jhansi"],
    ["Hindistan", "Jhansi"],
    ["19. yüzyıl"],
    ["Kraliçe", "Savaşçı"],
    ["1857 Bağımsızlık isyanı", "Britanya karşıtı mücadele", "Savaş meydanı"],
    [
      "1857 ayaklanmasının en güçlü kadın savaşçı simgelerindendir",
      "Lakshmibai adıyla Jhansi'nin savunmasında öne çıktı",
      "At üzerinde savaşa katılan cesur kraliçe imajıyla hatırlanır",
      "Britanya yönetimine karşı Hint direnişinin sembollerinden biridir",
    ]
  ),
  h(
    5241,
    "Toussaint Louverture",
    ["toussaint louverture"],
    ["Haiti", "Karayipler"],
    ["18. yüzyıl", "19. yüzyıl başı"],
    ["Devrimci", "Asker"],
    ["Haiti Devrimi", "Kölelik karşıtı mücadele", "Özgürlük savaşı"],
    [
      "Haiti Devrimi'nin en stratejik ve karizmatik liderlerinden biridir",
      "Kölelikten gelip Fransız, İspanyol ve İngiliz güçleri arasında ustaca politika yürüttü",
      "Saint-Domingue'de köleliğin kaldırılması ve siyah özgürlüğüyle anılır",
      "Atlantik dünyasının en önemli özgürlük figürlerindendir",
    ]
  ),
  h(
    5242,
    "Giuseppe Mazzini",
    ["mazzini"],
    ["İtalya"],
    ["19. yüzyıl"],
    ["Devrimci", "Düşünür"],
    ["İtalya birliği fikirleri", "Genç İtalya hareketi", "Siyasi aktivizm"],
    [
      "Genç İtalya hareketiyle İtalyan birliğinin fikir babalarındandır",
      "Cumhuriyetçi ve ulusalcı idealleri Avrupa gençliğini etkiledi",
      "Sürgün hayatı boyunca devrimci ağlar kurdu",
      "Garibaldi ve Cavour kadar sahada değil, fikirde belirleyici oldu",
    ]
  ),
  h(
    5243,
    "Camillo di Cavour",
    ["cavour"],
    ["İtalya"],
    ["19. yüzyıl"],
    ["Siyasetçi", "Diplomat"],
    ["İtalya birliğinin sağlanması", "Diplomatik ustalık", "Sardinya krallığı yönetimi"],
    [
      "Diplomasiyle İtalyan birliğinin yolunu açan baş aktördür",
      "Sardinya-Piemonte'yi modernleşmiş bir güç merkezine çevirdi",
      "Fransa ile ittifak kurarak Avusturya etkisini kırmaya çalıştı",
      "Garibaldi'nin askeri başarısını siyasi birliğe dönüştüren isimdir",
    ]
  ),
  h(
    5244,
    "Bernardo O'Higgins",
    ["ohiggins", "o'higgins"],
    ["Şili", "Güney Amerika"],
    ["19. yüzyıl"],
    ["Lider", "Devrimci"],
    ["Şili bağımsızlık savaşı", "Bağımsızlık yönetimi", "Latin Amerika özgürlükleri"],
    [
      "Şili bağımsızlığının kurucu babalarından kabul edilir",
      "San Martin ile birlikte Andlar üzerinden yürütülen mücadelede öne çıktı",
      "Bağımsız Şili'nin ilk yöneticilerinden biri olarak reformlar yaptı",
      "Askeri liderliği ve devlet kuruculuğu birlikte hatırlanır",
    ]
  ),
  h(
    5245,
    "Pancho Villa",
    ["pancho villa"],
    ["Meksika", "Kuzey Amerika"],
    ["20. yüzyıl başı"],
    ["Devrimci", "Komutan"],
    ["Meksika Devrimi", "Gerilla savaşları", "Siyasi hareketler"],
    [
      "Meksika Devrimi'nin kuzeydeki en ünlü gerilla liderlerinden biridir",
      "Dorados adlı süvari birlikleri ve baskınlarıyla efsaneleşti",
      "Halk kahramanı, haydut ve devrimci imajları aynı anda taşır",
      "ABD sınırına yaptığı Columbus baskınıyla uluslararası kriz çıkardı",
    ]
  ),
  h(
    5246,
    "Emiliano Zapata",
    ["zapata", "emiliano zapata"],
    ["Meksika"],
    ["20. yüzyıl başı"],
    ["Devrimci", "Lider"],
    ["Meksika Devrimi", "Toprak reformu mücadeleleri", "Gerilla"],
    [
      "'Tierra y Libertad' sloganıyla toprak reformunun sembolüdür",
      "Güney Meksika'daki köylü hareketinin en güçlü lideriydi",
      "Plan de Ayala ile devrimin sosyal adalet yönünü temsil etti",
      "Zapatista mirası sonraki yüzyılda da siyasi sembol olarak yaşadı",
    ]
  ),
  h(
    5247,
    "Benito Juarez",
    ["juarez", "benito juarez"],
    ["Meksika"],
    ["19. yüzyıl"],
    ["Başkan", "Reformcu"],
    ["Meksika'nın modernleşmesi", "Fransız müdahalesine karşı direniş", "Liberal reformlar"],
    [
      "Yerli kökenli bir lider olarak Meksika liberalizminin simgesidir",
      "Fransız müdahalesine ve Maximilian rejimine karşı cumhuriyeti savundu",
      "La Reforma ile kilise-devlet ilişkisini ve hukuk düzenini dönüştürdü",
      "Modern Meksika devletinin temel figürlerinden biridir",
    ]
  ),
  h(
    5248,
    "Porfirio Diaz",
    ["porfirio diaz", "diaz"],
    ["Meksika"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Başkan", "Diktatör"],
    ["Uzun süreli iktidar", "Modernleşme çabaları", "Devrim öncesi baskı"],
    [
      "Porfiriato dönemiyle Meksika'yı demiryolu ve yatırım ekseninde modernleştirdi",
      "Uzun otoriter yönetimi Meksika Devrimi'nin başlıca nedenlerinden oldu",
      "Düzen ve ilerleme söylemiyle güçlü merkezi kontrol kurdu",
      "Modernleşme ve eşitsizlik mirası birlikte anılır",
    ]
  ),
  h(
    5249,
    "Getulio Vargas",
    ["getulio vargas", "getúlio vargas"],
    ["Brezilya", "Latin Amerika"],
    ["20. yüzyıl"],
    ["Başkan", "Siyasi lider"],
    ["Brezilya'da sanayileşme", "Popülist politikalar", "Devlet yönetimi"],
    [
      "Brezilya'da işçi hakları ve devletçi sanayileşme politikalarıyla bilinir",
      "Estado Novo döneminde otoriter bir yönetim kurdu",
      "Popülizm ve milliyetçi ekonomi çizgisiyle Latin Amerika siyasetini etkiledi",
      "Dramatik intiharı Brezilya siyasi hafızasında büyük yer tutar",
    ]
  ),
  h(
    5250,
    "Juan Peron",
    ["peron", "juan perón"],
    ["Arjantin", "Latin Amerika"],
    ["20. yüzyıl"],
    ["Başkan", "Siyasi lider"],
    ["Peronizm hareketi", "İşçi sınıfı destekleri", "Siyasi etkileşim"],
    [
      "Peronizm hareketiyle Arjantin siyasetinin kalıcı eksenlerinden birini kurdu",
      "İşçi sınıfı desteği ve sendikal bağlarıyla güç kazandı",
      "Eva Perón ile birlikte popüler siyasi mitin parçası oldu",
      "Popülizm, milliyetçilik ve sosyal politika karışımıyla anılır",
    ]
  ),
  h(
    5251,
    "Salvador Allende",
    ["allende", "salvador allende"],
    ["Şili", "Latin Amerika"],
    ["20. yüzyıl"],
    ["Başkan", "Siyasi lider"],
    ["Demokratik sosyalizm çabaları", "1973 darbesi", "Siyasi kriz dönemi"],
    [
      "Seçimle iktidara gelen sosyalist lider olarak küresel tarihte özel yer tutar",
      "Bakırın millileştirilmesi ve sosyal reformlarla hatırlanır",
      "1973 darbesi sırasında başkanlık sarayındaki son direnişi sembolleşti",
      "Latin Amerika solunun en trajik figürlerinden biridir",
    ]
  ),
  h(
    5252,
    "Augusto Pinochet",
    ["pinochet", "augusto pinochet"],
    ["Şili", "Latin Amerika"],
    ["20. yüzyıl"],
    ["Diktatör", "Askeri lider"],
    ["1973 darbesi", "Askeri yönetim", "Ekonomik ve siyasi politikalar"],
    [
      "1973 darbesi sonrası Şili'de askeri diktatörlük kurdu",
      "İnsan hakları ihlalleri ve kayıplarla tartışmalı bir miras bıraktı",
      "Piyasa odaklı ekonomi politikalarıyla da anılır",
      "Şili siyasetinde derin kutuplaşmanın merkezindeki figürdür",
    ]
  ),
  h(
    5253,
    "Hugo Chavez",
    ["chavez", "hugo chávez"],
    ["Venezuela", "Latin Amerika"],
    ["20. ve 21. yüzyıl"],
    ["Başkan", "Lider"],
    ["Bolivarcı Devrim", "Petrol politikaları", "Sosyal hareketler"],
    [
      "Bolivarcı Devrim söylemiyle Venezuela siyasetini baştan şekillendirdi",
      "Petrol gelirlerini sosyal programlar ve siyasi mobilizasyon için kullandı",
      "ABD karşıtı sert hitabetiyle Latin Amerika'da görünür oldu",
      "Chavismo hareketinin kurucu figürüdür",
    ]
  ),
  h(
    5254,
    "Pol Pot",
    ["pol pot"],
    ["Kamboçya", "Güneydoğu Asya"],
    ["20. yüzyıl"],
    ["Diktatör", "Devrimci"],
    ["Kızıl Kmerler", "Kamboçya trajedisi", "Radikal tarım toplumu"],
    [
      "Kızıl Kmer rejiminin lideri olarak Kamboçya'nın en karanlık dönemini temsil eder",
      "Zorla kırsallaştırma ve radikal ideolojiyle büyük yıkıma yol açtı",
      "Killing Fields dönemiyle anılır",
      "20. yüzyıl totaliter şiddetinin en uç örneklerindendir",
    ]
  ),
  h(
    5255,
    "Kim Il Sung",
    ["kim il sung"],
    ["Kuzey Kore", "Doğu Asya"],
    ["20. yüzyıl"],
    ["Lider", "Devlet başkanı"],
    ["Kuzey Kore'nin kuruluşu", "Siyasi rejim", "Kore Savaşı dönemi"],
    [
      "Kuzey Kore devletinin kurucusu ve hanedan rejiminin başlangıç figürüdür",
      "Juche ideolojisiyle siyasi meşruiyetini kurdu",
      "Kore Savaşı ve Soğuk Savaş bloklaşmasıyla anılır",
      "Kişi kültünün devlet yapısına dönüştüğü liderlerden biridir",
    ]
  ),
  h(
    5256,
    "Park Chung-hee",
    ["park chung-hee"],
    ["Güney Kore", "Doğu Asya"],
    ["20. yüzyıl"],
    ["Başkan", "Askeri lider"],
    ["Güney Kore'nin sanayileşmesi", "Ekonomik büyüme", "Siyasi otorite"],
    [
      "Güney Kore'nin hızlı sanayileşme hamlesinin merkezindeki liderdir",
      "Askeri darbe sonrası otoriter kalkınma modeli kurdu",
      "Chaebol sistemi ve ihracat odaklı ekonomiyle ülkeyi dönüştürdü",
      "Ekonomik başarı ve siyasi baskı mirası birlikte tartışılır",
    ]
  ),
  h(
    5257,
    "Lee Kuan Yew",
    ["lee kuan yew"],
    ["Singapur", "Doğu Asya"],
    ["20. yüzyıl", "21. yüzyıl"],
    ["Başbakan", "Devlet kurucu"],
    ["Singapur'un modernleşmesi", "Ekonomik mucize", "Siyasi düzen"],
    [
      "Singapur'u küçük liman kentinden küresel finans ve ticaret merkezine dönüştürdü",
      "Yolsuzlukla mücadele ve yüksek devlet kapasitesi vurgusuyla bilinir",
      "Sert ama etkili yönetim tarzı uluslararası tartışma konusudur",
      "Modern Singapur'un kurucu aklı olarak anılır",
    ]
  ),
  h(
    5258,
    "Sukarno",
    ["sukarno"],
    ["Endonezya", "Güneydoğu Asya"],
    ["20. yüzyıl"],
    ["Başkan", "Lider"],
    ["Endonezya bağımsızlığı", "Sömürge karşıtı mücadele", "Siyasi denge"],
    [
      "Endonezya bağımsızlık hareketinin en karizmatik liderlerinden biridir",
      "Pancasila ilkeleriyle çok etnili ülkeye ortak kimlik aradı",
      "Bağlantısızlar hareketinde görünür rol oynadı",
      "Guided Democracy dönemiyle hem birlik hem otoriterleşme tartışmaları yaratır",
    ]
  ),
  h(
    5259,
    "Suharto",
    ["suharto"],
    ["Endonezya", "Güneydoğu Asya"],
    ["20. yüzyıl"],
    ["Başkan", "Askeri lider"],
    ["Uzun süreli iktidar", "Ekonomik politikalar", "Siyasi yönetim"],
    [
      "Yeni Düzen rejimiyle Endonezya'yı otuz yılı aşkın süre yönetti",
      "Ekonomik büyüme ve sert siyasi kontrol mirası birlikte anılır",
      "1965 sonrası şiddet ve tasfiyelerle tartışmalı bir figürdür",
      "Askeri bürokrasiye dayanan güçlü bir yönetim kurdu",
    ]
  ),
  h(
    5260,
    "Ferdinand Marcos",
    ["marcos", "ferdinand marcos"],
    ["Filipinler", "Güneydoğu Asya"],
    ["20. yüzyıl"],
    ["Başkan", "Diktatör"],
    ["Sıkıyönetim dönemi", "Siyasi krizler", "Servet tartışmaları"],
    [
      "Filipinler'de sıkıyönetim ve kişisel iktidar dönemiyle anılır",
      "Marcos ailesinin servet ve yolsuzluk tartışmaları siyasi mirasının merkezindedir",
      "People Power hareketiyle iktidardan uzaklaştırıldı",
      "Modern Filipinler tarihinde en tartışmalı liderlerden biridir",
    ]
  ),
  h(
    5261,
    "Corazon Aquino",
    ["corazon aquino", "aquino"],
    ["Filipinler", "Güneydoğu Asya"],
    ["20. yüzyıl"],
    ["Başkan", "Demokratik figür"],
    ["Demokrasiye geçiş", "Halk hareketi", "Siyasi değişim"],
    [
      "People Power devrimi sonrası Filipinler'de demokrasinin simgesi oldu",
      "Marcos rejimi sonrası sivil yönetime dönüşü temsil eder",
      "Sarı renkli kampanya imajı ve halk desteğiyle anılır",
      "Askeri darbe girişimleri ve ekonomik sorunlarla dolu zor bir dönem yönetti",
    ]
  ),
  h(
    5262,
    "Aung San Suu Kyi",
    ["aung san suu kyi"],
    ["Myanmar", "Güneydoğu Asya"],
    ["20. yüzyıl", "21. yüzyıl"],
    ["Aktivist", "Siyasi figür"],
    ["Demokrasi mücadelesi", "Ev hapsi dönemi", "Siyasi süreçler"],
    [
      "Myanmar'da uzun ev hapsi dönemiyle demokrasi mücadelesinin sembolü oldu",
      "Nobel Barış Ödülü ile küresel destek kazandı",
      "Sonraki siyasi rolü özellikle Rohingya krizi nedeniyle ciddi tartışma yarattı",
      "Umut figürü ve hayal kırıklığı yaratan liderlik algısı birlikte anılır",
    ]
  ),
  h(
    5263,
    "Dalai Lama",
    ["dalai lama"],
    ["Tibet", "Doğu Asya"],
    ["20. yüzyıl", "21. yüzyıl"],
    ["Lider", "Düşünür", "Dini figür"],
    ["Tibet mücadelesi", "Sürgün dönemi", "Barış çalışmaları"],
    [
      "Tibet'in sürgündeki ruhani lideri olarak küresel barış figürü hâline geldi",
      "Şiddetsizlik, merhamet ve kültürel kimlik vurgusuyla bilinir",
      "Çin-Tibet geriliminin uluslararası yüzlerinden biridir",
      "Nobel Barış Ödülü sahibi ruhani liderdir",
    ]
  ),
  h(
    5264,
    "Thutmose III",
    ["thutmose iii", "tutmose iii", "3. tutmose"],
    ["Antik Mısır", "Nil Vadisi"],
    ["MÖ 15. yüzyıl", "Yeni Krallık"],
    ["Firavun", "Komutan"],
    ["Mısır'ın en geniş sınırları", "Megiddo Savaşı", "Askeri seferler"],
    [
      "Mısır'ın Napolyon'u benzetmesiyle anılan büyük fatihlerden biridir",
      "Megiddo Savaşı ayrıntılı kaydıyla askeri tarih açısından önemlidir",
      "Yeni Krallık Mısır'ını imparatorluk gücüne dönüştürdü",
      "Üvey annesi Hatshepsut sonrası kendi askeri mirasını özellikle vurguladı",
    ]
  ),
  h(
    5265,
    "Thales of Miletus",
    ["thales"],
    ["Antik Yunan", "Milet"],
    ["Antik Çağ", "MÖ 6. yüzyıl"],
    ["Filozof", "Bilim insanı"],
    ["Doğa felsefesi", "Geometri çalışmaları", "Bilimsel düşüncenin kökeni"],
    [
      "Doğayı mitolojik değil akılcı nedenlerle açıklama geleneğinin öncülerindendir",
      "Güneş tutulması öngörüsüyle klasik anlatılarda öne çıkar",
      "Milet okulunun ve erken Yunan felsefesinin kurucu ismidir",
      "Geometri ve pratik ölçüm bilgisiyle de anılır",
    ]
  ),
  h(
    5266,
    "Pythagoras",
    ["pythagoras", "pisagor"],
    ["Antik Yunan", "Samos"],
    ["Antik Çağ", "MÖ 6. yüzyıl"],
    ["Filozof", "Matematikçi"],
    ["Pisagor teoremi", "Sayılar felsefesi", "Müzik teorisi"],
    [
      "Pisagor teoremiyle matematiğin popüler sembollerinden biridir",
      "Sayıları evrenin temel düzeni olarak gören mistik-felsefi okul kurdu",
      "Müzik aralıkları ve matematik ilişkisiyle ilgilendi",
      "Felsefe, matematik ve dini topluluk yapısını birleştiren sıra dışı figürdür",
    ]
  ),
  h(
    5267,
    "Democritus",
    ["democritus", "demokritos"],
    ["Antik Yunan", "Abdera"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Filozof", "Bilim insanı"],
    ["Atom kuramı", "Doğa felsefesi", "Madde çalışmaları"],
    [
      "Atomcu görüşüyle maddenin bölünemez parçacıklardan oluştuğunu savundu",
      "Leukippos ile birlikte erken materyalist düşüncenin temel adlarındandır",
      "Gülümseyen filozof lakabıyla da anılır",
      "Modern atom teorisinden çok önce atom fikrini felsefi düzeyde kurdu",
    ]
  ),
  h(
    5268,
    "Epicurus",
    ["epicurus", "epikür"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Filozof"],
    ["Epikürcülük", "Haz felsefesi", "Acıdan kaçınma"],
    [
      "Haz kavramını ölçülü yaşam ve ruh dinginliğiyle ilişkilendirdi",
      "Bahçe adlı okulunda sade dostluk ve korkulardan arınma öğretisi verdi",
      "Tanrı ve ölüm korkusunu azaltmaya çalışan pratik etik anlayışıyla tanınır",
      "Popüler yanlış anlamanın aksine aşırı zevk değil ölçülü huzur felsefesini savundu",
    ]
  ),
  h(
    5269,
    "Zeno of Citium",
    ["zeno", "zenon"],
    ["Antik Yunan", "Kıbrıs", "Atina"],
    ["Antik Çağ", "MÖ 3. yüzyıl"],
    ["Filozof"],
    ["Stoacılık", "Stoa felsefesi", "Mantık çalışmaları"],
    [
      "Stoacılığın kurucusu olarak erdemi yaşamın merkezi yaptı",
      "Atina'daki Stoa Poikile'de ders verdiği için okulun adı buradan gelir",
      "Duygulara esir olmadan akla uygun yaşama fikriyle bilinir",
      "Roma düşüncesini derinden etkileyecek felsefi hattı başlattı",
    ]
  ),
  h(
    5270,
    "Herodotus",
    ["herodotus", "herodot"],
    ["Antik Yunan", "Halikarnas"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Tarihçi"],
    ["Pers Savaşları tarihi", "Tarih eseri", "Tarih yazıcılığı"],
    [
      "Tarihin babası olarak anılır ama anlatıları efsanevi unsurlar da taşır",
      "Pers Savaşları üzerinden Yunan ve Doğu dünyasını geniş biçimde anlattı",
      "Farklı halkların geleneklerini meraklı bir gezgin gibi kaydetti",
      "Tarih yazımını büyük hikaye anlatımıyla birleştirdi",
    ]
  ),
  h(
    5271,
    "Thucydides",
    ["thucydides", "tukidides"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Tarihçi"],
    ["Peloponez Savaşları", "Bilimsel tarih yazımı", "Politik analiz"],
    [
      "Peloponez Savaşı'nı neden-sonuç ilişkisiyle analiz eden keskin tarihçidir",
      "Tanrısal açıklamalardan çok güç, çıkar ve korku dinamiklerine odaklandı",
      "Melos Diyaloğu ve Perikles'in söyleviyle siyaset düşüncesini etkiledi",
      "Uluslararası ilişkilerde realist yaklaşımın erken kaynağı sayılır",
    ]
  ),
  h(
    5272,
    "Xenophon",
    ["xenophon", "ksenofon"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Tarihçi", "Asker"],
    ["Anabasis", "Onbinlerin dönüşü", "Askeri günlükler"],
    [
      "Anabasis eserinde Onbinlerin zorlu geri dönüşünü anlattı",
      "Sokrates'in öğrencisi olarak felsefi ve askeri yazıları birleştirdi",
      "Pers coğrafyasına dair gözlemleriyle antik dünya bilgisini zenginleştirdi",
      "Asker-yazar profiliyle klasik tarih anlatısında özel yer tutar",
    ]
  ),
  h(
    5273,
    "Polybius",
    ["polybius", "polibios"],
    ["Antik Yunan", "Megalopolis", "Roma"],
    ["Antik Çağ", "MÖ 2. yüzyıl"],
    ["Tarihçi"],
    ["Roma'nın yükselişi", "Tarih eseri", "Devlet analizleri"],
    [
      "Roma'nın Akdeniz gücüne dönüşmesini sistemli biçimde açıklamaya çalıştı",
      "Karma anayasa analizi siyaset teorisinde etkili oldu",
      "Rehin olarak Roma'da bulunması ona içeriden gözlem imkanı verdi",
      "Neden-sonuç ve kurum analiziyle pragmatik tarihçiliğin güçlü adıdır",
    ]
  ),
  h(
    5274,
    "Tacitus",
    ["tacitus", "tasisitus"],
    ["Roma İmparatorluğu"],
    ["MS 1. yüzyıl", "MS 2. yüzyıl"],
    ["Tarihçi", "Siyasetçi"],
    ["Roma tarihi", "Germania eseri", "İmparatorluk eleştirileri"],
    [
      "Roma imparatorlarını keskin ve karamsar üslupla eleştiren tarihçidir",
      "Annales ve Historiae eserleri erken imparatorluk için ana kaynaklardandır",
      "Güç, korku ve saray entrikalarını yoğun bir dille anlatır",
      "Germania eseri Roma dışı toplumlara bakışıyla da önemlidir",
    ]
  ),
  h(
    5275,
    "Livy",
    ["livy", "livius"],
    ["Roma İmparatorluğu"],
    ["MÖ 1. yüzyıl", "MS 1. yüzyıl"],
    ["Tarihçi"],
    ["Roma'nın kuruluşu tarihi", "Cumhuriyet dönemi", "Anıtsal eser"],
    [
      "Roma'nın kuruluşundan kendi dönemine uzanan devasa tarih anlatısıyla bilinir",
      "Cumhuriyet erdemleri ve ahlaki örnekler üzerinden tarih yazdı",
      "Ab Urbe Condita Roma kimliğinin klasik metinlerinden biridir",
      "Tarih anlatısına destansı ve öğretici bir ton verdi",
    ]
  ),
  h(
    5276,
    "Seneca the Younger",
    ["seneca", "seneka"],
    ["Roma İmparatorluğu"],
    ["MS 1. yüzyıl"],
    ["Filozof", "Yazar"],
    ["Stoacı felsefe", "Trajediler", "Neron dönemi"],
    [
      "Stoacı ahlak yazılarıyla Roma düşüncesinin en etkili isimlerindendir",
      "Neron'un hocası ve danışmanı olarak siyasetin merkezine yaklaştı",
      "Zenginlik, ölüm ve erdem üzerine pratik mektuplarıyla bilinir",
      "Felsefi sakinlik arayışı ile saray siyaseti arasındaki çelişkiyle anılır",
    ]
  ),
  h(
    5277,
    "Epictetus",
    ["epictetus", "epiktetos"],
    ["Antik Yunan", "Roma"],
    ["MS 1. yüzyıl", "MS 2. yüzyıl"],
    ["Filozof"],
    ["Stoacı öğretiler", "Özgürlük düşüncesi", "Disiplinli hayat"],
    [
      "Kölelikten filozofluğa yükselen Stoacı öğretmendir",
      "Kontrolümüzde olan ve olmayan şeyleri ayırma düşüncesiyle bilinir",
      "Dersleri öğrencisi Arrian tarafından kaydedildi",
      "Modern kişisel gelişim ve pratik felsefede hâlâ çok etkili bir isimdir",
    ]
  ),
  h(
    5278,
    "Plotinus",
    ["plotinus", "plotin"],
    ["Roma İmparatorluğu", "Mısır"],
    ["MS 3. yüzyıl"],
    ["Filozof"],
    ["Yeni-Platonculuk", "Varlık kuramı", "Mistisizm"],
    [
      "Yeni-Platonculuğun kurucusu olarak Bir kavramını merkeze aldı",
      "Enneadlar üzerinden varlık, ruh ve mistik yükseliş düşüncesini kurdu",
      "Antik felsefeden Orta Çağ teolojisine geçişte köprü figürdür",
      "Metafizik derinliğiyle İslam, Hristiyan ve Batı felsefesini etkiledi",
    ]
  ),
  h(
    5279,
    "Augustine of Hippo",
    ["augustine", "aziz augustin", "augustinus"],
    ["Roma İmparatorluğu", "Kuzey Afrika"],
    ["MS 4. yüzyıl", "MS 5. yüzyıl"],
    ["Düşünür", "Din adamı"],
    ["İtiraflar", "Tanrı Şehri", "Hristiyan felsefesi"],
    [
      "İtiraflar eseriyle içsel hayatı anlatan klasik metinlerden birini yazdı",
      "Tanrı Şehri ile Hristiyan tarih felsefesini şekillendirdi",
      "Kuzey Afrika'dan çıkan en etkili Hristiyan düşünürlerden biridir",
      "Günah, irade ve lütuf tartışmalarında kalıcı etki bıraktı",
    ]
  ),
  h(
    5280,
    "Thomas Aquinas",
    ["aquinas", "thomas aquinas"],
    ["İtalya", "Avrupa"],
    ["13. yüzyıl"],
    ["Filozof", "Din adamı"],
    ["Skolastik felsefe", "Summa Theologica", "Akıl ve inanç sentezi"],
    [
      "Aristoteles felsefesini Hristiyan teolojisiyle sentezledi",
      "Summa Theologica skolastik düşüncenin zirve metinlerindendir",
      "Akıl ve inancın uyumlu çalışabileceğini savunmasıyla bilinir",
      "Doğal hukuk düşüncesi üzerinde kalıcı etkisi vardır",
    ]
  ),
  h(
    5281,
    "William of Ockham",
    ["ockham", "william of ockham"],
    ["İngiltere", "Avrupa"],
    ["14. yüzyıl"],
    ["Filozof", "Mantıkçı"],
    ["Ockham'ın Usturası", "Nominalizm", "Mantık çalışmaları"],
    [
      "Ockham'ın Usturası olarak bilinen basitlik ilkesiyle tanınır",
      "Nominalizm tartışmalarında Orta Çağ felsefesinin kilit ismidir",
      "Kilise otoritesi ve siyasal güç üzerine sert fikirler geliştirdi",
      "Modern düşüncede yöntemsel sadelik fikrinin sembolü hâline geldi",
    ]
  ),
  h(
    5282,
    "Francis Bacon",
    ["francis bacon", "bacon"],
    ["İngiltere"],
    ["16. yüzyıl", "17. yüzyıl"],
    ["Filozof", "Bilim insanı"],
    ["Bilimsel yöntem", "Ampirizm", "Bilgi güçtür"],
    [
      "Deney ve gözleme dayalı bilimsel yöntemin erken savunucularındandır",
      "'Bilgi güçtür' anlayışıyla modern bilim zihniyetini etkiledi",
      "Novum Organum ile eski skolastik yönteme alternatif önerdi",
      "Bilimsel ilerlemeyi toplumsal güç ve refahla ilişkilendirdi",
    ]
  ),
  h(
    5283,
    "Baruch Spinoza",
    ["spinoza"],
    ["Hollanda"],
    ["17. yüzyıl"],
    ["Filozof"],
    ["Etika", "Panteizm", "Rasyonalizm"],
    [
      "Etika eserinde geometrik yöntemle felsefe kurmaya çalıştı",
      "Tanrı-doğa özdeşliği düşüncesiyle radikal rasyonalistlerden sayılır",
      "Düşünceleri nedeniyle Yahudi cemaatinden dışlandı",
      "Modern özgürlük ve akıl tartışmalarında derin etki bıraktı",
    ]
  ),
  h(
    5284,
    "Gottfried Wilhelm Leibniz",
    ["leibniz"],
    ["Almanya", "Avrupa"],
    ["17. yüzyıl", "18. yüzyıl"],
    ["Filozof", "Matematikçi"],
    ["Kalkülüs", "Monadoloji", "Mantık"],
    [
      "Newton'dan bağımsız olarak kalkülüsü geliştiren büyük matematikçidir",
      "Monadoloji ile evreni basit tözler üzerinden açıklamaya çalıştı",
      "İkili sayı sistemi ve hesap makineleriyle bilgisayar tarihine uzanan etkisi vardır",
      "'Mümkün dünyaların en iyisi' fikriyle felsefi tartışmalara konu oldu",
    ]
  ),
  h(
    5285,
    "David Hume",
    ["hume", "david hume"],
    ["İskoçya", "Britanya"],
    ["18. yüzyıl"],
    ["Filozof", "Tarihçi"],
    ["Ampirizm", "Nedensellik tartışması", "Zihin felsefesi"],
    [
      "Nedensellik eleştirisiyle modern felsefeyi sarsan ampirist düşünürdür",
      "İnsan doğası üzerine çalışmaları Kant'ı derinden etkiledi",
      "Din, mucize ve bilgi konularında kuşkucu yaklaşımıyla bilinir",
      "Aynı zamanda İngiltere tarihi üzerine etkili eserler yazdı",
    ]
  ),
  h(
    5286,
    "Henri Poincare",
    ["poincare", "henri poincare"],
    ["Fransa"],
    ["19. yüzyıl", "20. yüzyıl"],
    ["Matematikçi", "Fizikçi"],
    ["Kaos teorisi öncülleri", "Relativite teorisi katkıları", "Matematiksel çalışmalar"],
    [
      "Kaos teorisinin öncüllerini sezdiren üç cisim problemi çalışmalarıyla bilinir",
      "Matematik, fizik ve felsefe arasında çok yönlü bir dehadır",
      "Görelilik öncesi uzay-zaman tartışmalarına katkı verdi",
      "Poincare varsayımı ile adı modern matematikte de yaşamaya devam eder",
    ]
  ),
  h(
    5287,
    "Niels Bohr",
    ["bohr", "niels bohr"],
    ["Danimarka", "Avrupa"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Kuantum mekaniği", "Bohr atom modeli", "Atom fiziği"],
    [
      "Bohr atom modeli kuantum fiziğinin popüler simgelerindendir",
      "Kopenhag yorumu ve tamamlayıcılık ilkesiyle kuantum tartışmalarını şekillendirdi",
      "Einstein ile yaptığı fikir tartışmaları bilim tarihinin klasikleri arasındadır",
      "Danimarka'da güçlü bir fizik okulu kurdu",
    ]
  ),
  h(
    5288,
    "Max Planck",
    ["planck", "max planck"],
    ["Almanya"],
    ["19. yüzyıl", "20. yüzyıl"],
    ["Fizikçi"],
    ["Kuantum teorisi", "Planck sabiti", "Enerji kuantumu"],
    [
      "Kuantum teorisinin başlangıç noktasını oluşturan enerji kuantumu fikrini ortaya koydu",
      "Planck sabiti modern fiziğin temel sabitlerinden biridir",
      "Klasik fizik ile modern fizik arasındaki kırılmanın baş aktörüdür",
      "Kişisel trajedilere rağmen bilimsel otoritesini koruyan bir figürdü",
    ]
  ),
  h(
    5289,
    "Werner Heisenberg",
    ["heisenberg", "werner heisenberg"],
    ["Almanya"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Belirsizlik ilkesi", "Kuantum mekaniği", "Atom fiziği"],
    [
      "Belirsizlik ilkesi kuantum mekaniğinin en bilinen kavramlarından biridir",
      "Matris mekaniğiyle modern kuantum teorisinin kurucuları arasındadır",
      "II. Dünya Savaşı dönemindeki Alman nükleer programı nedeniyle tartışmalıdır",
      "Bohr ile ilişkisi ve savaş sonrası yorumları bilim tarihinde çok tartışılmıştır",
    ]
  ),
  h(
    5290,
    "Erwin Schrodinger",
    ["schrodinger", "schrödinger"],
    ["Avusturya", "Almanya"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Kuantum mekaniği", "Schrodinger'in kedisi", "Dalga denklemleri"],
    [
      "Schrödinger denklemi kuantum mekaniğinin temel taşlarındandır",
      "Kedi düşünce deneyiyle kuantum yorumlarını popülerleştirdi",
      "Dalga mekaniği yaklaşımıyla Nobel kazandı",
      "Fizik dışında yaşam ve biyoloji üzerine fikirleriyle de etkili oldu",
    ]
  ),
  h(
    5291,
    "Enrico Fermi",
    ["fermi", "enrico fermi"],
    ["İtalya", "ABD"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Nükleer enerji çalışmaları", "Fermi paradoksu", "Atom bombası projesi"],
    [
      "Hem teorik hem deneysel fizikte olağanüstü yetkin nadir isimlerdendir",
      "İlk kontrollü nükleer zincir reaksiyonunu gerçekleştiren ekibe liderlik etti",
      "Fermi paradoksu uzaylı yaşamı tartışmalarının en meşhur sorularındandır",
      "Nükleer çağın bilimsel mimarlarından biri kabul edilir",
    ]
  ),
  h(
    5292,
    "Lise Meitner",
    ["meitner", "lise meitner"],
    ["Avusturya", "İsveç"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Nükleer fisyon çalışmaları", "Atom fiziği"],
    [
      "Nükleer fisyonun fiziksel açıklamasında kritik rol oynadı",
      "Nobel'in dışında bırakılması bilim tarihinde haksızlık örneklerinden sayılır",
      "Nazi Almanyası'ndan kaçmak zorunda kalan Yahudi kökenli bilim insanıdır",
      "Atom fiziğinde kadın bilim insanlarının görünürlüğü açısından sembol isimdir",
    ]
  ),
  h(
    5293,
    "Richard Feynman",
    ["feynman", "richard feynman"],
    ["ABD"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Kuantum elektrodinamiği", "Feynman diyagramları", "Eğitimi"],
    [
      "Feynman diyagramları parçacık fiziğini görsel ve pratik hâle getirdi",
      "QED çalışmalarıyla Nobel kazandı",
      "Eğlenceli, sezgisel ve öğretici anlatım tarzıyla bilim iletişiminin ikonudur",
      "Challenger faciası komisyonundaki basit ama çarpıcı gösterisiyle hatırlanır",
    ]
  ),
  h(
    5294,
    "Stephen Hawking",
    ["hawking", "stephen hawking"],
    ["Birleşik Krallık"],
    ["20. yüzyıl", "21. yüzyıl"],
    ["Fizikçi", "Kozmolog"],
    ["Kara delik teorileri", "Zamanın Kısa Tarihi", "Kozmoloji"],
    [
      "Kara deliklerin Hawking radyasyonu yayabileceği fikriyle kozmolojiyi etkiledi",
      "Zamanın Kısa Tarihi ile karmaşık fiziği geniş kitlelere taşıdı",
      "ALS ile yaşarken bilimsel üretimini sürdürmesiyle ikonikleşti",
      "Evrenin başlangıcı ve kara delikler üzerine çalışmalarıyla bilinir",
    ]
  ),
  h(
    5295,
    "Carl Sagan",
    ["sagan", "carl sagan"],
    ["ABD"],
    ["20. yüzyıl"],
    ["Astronom", "Yazar"],
    ["Kozmos serisi", "Uzay keşifleri", "Bilim iletişimi"],
    [
      "Cosmos serisiyle bilimi popüler kültüre güçlü biçimde taşıdı",
      "Pale Blue Dot anlatısı insanlığın evrendeki yerini simgeleyen metinlerden oldu",
      "SETI ve gezegen bilimi çalışmalarında görünür bir isimdi",
      "Şüphecilik, merak ve bilimsel düşünceyi savunan etkili bir iletişimciydi",
    ]
  ),
  h(
    5296,
    "Neil Armstrong",
    ["armstrong", "neil armstrong"],
    ["ABD"],
    ["20. yüzyıl"],
    ["Astronot", "Pilot"],
    ["Ay'a ilk adım", "Apollo 11", "Uzay keşifleri"],
    [
      "Ay'a ayak basan ilk insan olarak uzay tarihinin sembol ismidir",
      "Apollo 11 görevinin komutanıydı",
      "'İnsan için küçük, insanlık için büyük adım' sözüyle hatırlanır",
      "Sakin, düşük profilli ve görev odaklı kişiliğiyle bilinir",
    ]
  ),
  h(
    5297,
    "Yuri Gagarin",
    ["gagarin", "yuri gagarin"],
    ["Sovyetler Birliği"],
    ["20. yüzyıl"],
    ["Astronot", "Pilot"],
    ["Uzaya çıkan ilk insan", "Vostok 1", "Uzay yarışı"],
    [
      "Uzaya çıkan ilk insan olarak Sovyet uzay programının yüzü oldu",
      "Vostok 1 uçuşuyla Dünya yörüngesine ulaştı",
      "Soğuk Savaş uzay yarışında Sovyetlerin büyük propaganda zaferini temsil etti",
      "Güler yüzlü halk kahramanı imajıyla dünya çapında tanındı",
    ]
  ),
  h(
    5298,
    "Wernher von Braun",
    ["von braun"],
    ["Almanya", "ABD"],
    ["20. yüzyıl"],
    ["Mühendis", "Bilim insanı"],
    ["Roket teknolojisi", "Apollo programı", "V2 roketleri"],
    [
      "V-2 roketlerinden Apollo programına uzanan tartışmalı bir roket mühendisi kariyeri vardır",
      "Saturn V roketinin geliştirilmesinde kritik rol oynadı",
      "Nazi Almanyası geçmişi nedeniyle etik tartışmaların merkezindedir",
      "Uzay uçuşunu popülerleştiren medya çalışmalarına da katıldı",
    ]
  ),
  h(
    5299,
    "Robert Oppenheimer",
    ["oppenheimer", "robert oppenheimer"],
    ["ABD"],
    ["20. yüzyıl"],
    ["Fizikçi"],
    ["Manhattan Projesi", "Atom bombası", "Kuantum fiziği"],
    [
      "Manhattan Projesi'nin bilimsel direktörü olarak atom çağının sembol ismidir",
      "Trinity testi sonrası Bhagavad Gita alıntısıyla popüler hafızada yer etti",
      "Savaş sonrası hidrojen bombası tartışmalarında güvenlik soruşturmasına uğradı",
      "Bilimsel başarı ve ahlaki sorumluluk ikilemiyle anılır",
    ]
  ),
  h(
    5300,
    "Nikolaus Otto",
    ["nikolaus otto", "otto motoru", "otto çevrimi", "otto cevrimi"],
    ["Almanya"],
    ["19. yüzyıl"],
    ["Mucit", "Mühendis"],
    ["İçten yanmalı motor", "Mekanik icatlar"],
    [
      "Dört zamanlı içten yanmalı motor çevrimiyle otomotiv tarihini etkiledi",
      "Otto çevrimi modern benzinli motorların temel prensiplerinden biridir",
      "Sanayi Devrimi sonrası ulaşım ve makineleşme tarihinde kritik bir mucittir",
      "Adı bugün hâlâ motor teknolojisinde teknik bir terim olarak yaşar",
    ]
  )



];