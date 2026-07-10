import type { GuessItem } from "../../types/game";

const createHistoricalFigure = (
  id: number,
  name: string,
  answers: string[],
  region: string[],
  period: string[],
  role: string[],
  events: string[],
  features: string[]
): GuessItem => {
  return {
    id,
    mode: "historicalFigure",
    modeLabel: "Tarihi Kişi",
    name,
    answers,
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
    3001,
    "Mustafa Kemal Atatürk",
    ["atatürk", "ataturk", "mustafa kemal", "mustafa kemal atatürk", "mustafa kemal ataturk"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Anadolu"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi", "Cumhuriyetin kuruluş dönemi"],
    ["Asker", "Devlet adamı", "Kurucu lider", "Cumhurbaşkanı"],
    ["Çanakkale Cephesi", "Kurtuluş Savaşı", "Cumhuriyetin ilanı", "Harf Devrimi"],
    ["Modernleşme reformları", "Liderlik", "Askeri strateji", "Nutuk ile hatırlanır"]
  ),

  h(
    3002,
    "Napolyon Bonapart",
    ["napolyon", "napolyon bonapart", "napoleon", "napoleon bonaparte", "bonapart", "bonaparte"],
    ["Fransa", "Avrupa", "Korsika"],
    ["18. yüzyıl sonu", "19. yüzyıl başı", "Fransız Devrimi sonrası dönem"],
    ["Asker", "İmparator", "Komutan", "Devlet adamı"],
    ["Waterloo Savaşı", "Austerlitz Savaşı", "Napolyon Savaşları", "Elba sürgünü"],
    ["Askeri deha", "Avrupa siyasetini etkiledi", "Napolyon Kanunları", "Avrupa tarihinin en etkili liderlerinden"]
  ),

  h(
    3003,
    "Hannibal Barca",
    ["hannibal", "hannibal barca", "hanibal", "hanibal barka"],
    ["Kartaca", "Kuzey Afrika", "Akdeniz"],
    ["Antik Çağ", "MÖ 3. yüzyıl", "Roma Cumhuriyeti dönemi"],
    ["Komutan", "Stratejist", "Kartacalı general"],
    ["İkinci Pön Savaşı", "Alpleri aşması", "Cannae Savaşı", "Roma'ya karşı sefer"],
    ["Fillerle Alpleri geçmesiyle bilinir", "Roma'nın büyük rakiplerinden", "Taktik zekası", "Kartaca efsanesi"]
  ),

  h(
    3004,
    "Julius Caesar",
    ["julius caesar", "caesar", "sezar", "jül sezar", "jul sezar"],
    ["Roma", "Akdeniz", "Galya"],
    ["Antik Çağ", "MÖ 1. yüzyıl", "Roma Cumhuriyeti'nin son dönemi"],
    ["Komutan", "Devlet adamı", "Diktatör"],
    ["Galya Savaşları", "Rubicon'u geçmesi", "Roma iç savaşı", "Senato suikastı"],
    ["Veni vidi vici sözüyle bilinir", "Roma tarihinin merkezi figürlerinden", "Askeri ve siyasi lider"]
  ),

  h(
    3005,
    "Cleopatra",
    ["cleopatra", "kleopatra"],
    ["Mısır", "İskenderiye", "Doğu Akdeniz"],
    ["Antik Çağ", "Ptolemaios dönemi", "Roma Cumhuriyeti'nin son dönemi"],
    ["Kraliçe", "Siyasi lider", "Diplomat"],
    ["Roma ile ittifaklar", "Julius Caesar ile bağlantı", "Marcus Antonius ile bağlantı"],
    ["Mısır'ın son güçlü kraliçesi", "Siyasi zekasıyla bilinir", "Antik dünyanın ikonik figürü"]
  ),

  h(
    3006,
    "Alexander the Great",
    ["alexander", "alexander the great", "büyük iskender", "buyuk iskender", "iskender"],
    ["Makedonya", "Yunan dünyası", "Pers İmparatorluğu coğrafyası"],
    ["Antik Çağ", "MÖ 4. yüzyıl", "Helenistik dönem başlangıcı"],
    ["Kral", "Komutan", "Fatih"],
    ["Pers seferi", "Gaugamela Savaşı", "Mısır'a girişi", "Büyük imparatorluk kurması"],
    ["Genç yaşta büyük fetihler", "Askeri deha", "Helenistik kültürün yayılması"]
  ),

  h(
    3007,
    "Cengiz Han",
    ["cengiz han", "genghis khan", "temuçin", "temucin"],
    ["Moğolistan", "Orta Asya", "Avrasya bozkırları"],
    ["12. yüzyıl", "13. yüzyıl", "Orta Çağ"],
    ["Han", "Komutan", "İmparatorluk kurucusu"],
    ["Moğol kabilelerini birleştirmesi", "Büyük fetihler", "Moğol İmparatorluğu'nun kuruluşu"],
    ["Bozkır stratejisi", "Büyük imparatorluk", "Atlı savaş taktikleri"]
  ),

  h(
    3008,
    "Fatih Sultan Mehmet",
    ["fatih", "fatih sultan mehmet", "mehmet ii", "2. mehmet", "ikinci mehmet"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu ve Balkanlar"],
    ["15. yüzyıl", "Orta Çağ sonu", "Osmanlı yükseliş dönemi"],
    ["Padişah", "Komutan", "Devlet adamı"],
    ["İstanbul'un fethi", "Topkapı Sarayı dönemi", "Osmanlı'nın büyümesi"],
    ["Fatih unvanı", "Genç yaşta büyük fetih", "Askeri ve siyasi vizyon"]
  ),

  h(
    3009,
    "Kanuni Sultan Süleyman",
    ["kanuni", "kanuni sultan süleyman", "kanuni sultan suleyman", "süleyman", "suleyman"],
    ["Osmanlı İmparatorluğu", "Avrupa", "Akdeniz"],
    ["16. yüzyıl", "Osmanlı klasik çağı", "Erken modern dönem"],
    ["Padişah", "Kanun koyucu", "Devlet adamı"],
    ["Mohaç Savaşı", "Viyana kuşatması", "Akdeniz mücadelesi"],
    ["Muhteşem Süleyman olarak da bilinir", "Uzun saltanat", "Osmanlı'nın zirve dönemi"]
  ),

  h(
    3010,
    "Leonardo da Vinci",
    ["leonardo", "leonardo da vinci", "da vinci"],
    ["İtalya", "Floransa", "Rönesans Avrupa'sı"],
    ["15. yüzyıl", "16. yüzyıl", "Rönesans"],
    ["Sanatçı", "Mucit", "Bilim insanı"],
    ["Rönesans çalışmaları", "Anatomi çizimleri", "Mühendislik tasarımları"],
    ["Mona Lisa ile bilinir", "Çok yönlü deha", "Sanat ve bilimi birleştirdi"]
  ),

  h(
    3011,
    "Michelangelo",
    ["michelangelo", "mikelenjelo"],
    ["İtalya", "Floransa", "Roma"],
    ["Rönesans", "15. yüzyıl", "16. yüzyıl"],
    ["Sanatçı", "Heykeltıraş", "Ressam", "Mimar"],
    ["Sistina Şapeli", "David heykeli", "Rönesans sanatı"],
    ["Heykel ve freskleriyle bilinir", "Rönesans ustası", "Sanatta anatomi bilgisi"]
  ),

  h(
    3012,
    "Albert Einstein",
    ["einstein", "albert einstein"],
    ["Almanya", "İsviçre", "ABD"],
    ["20. yüzyıl", "Modern fizik dönemi"],
    ["Fizikçi", "Bilim insanı", "Teorisyen"],
    ["Görelilik teorisi", "Nobel Fizik Ödülü", "Modern fiziğe katkılar"],
    ["E=mc² ile bilinir", "Dahi sembolü", "Teorik fizik"]
  ),

  h(
    3013,
    "Isaac Newton",
    ["newton", "isaac newton"],
    ["İngiltere", "Cambridge", "Avrupa bilim tarihi"],
    ["17. yüzyıl", "18. yüzyıl başı", "Bilimsel Devrim"],
    ["Fizikçi", "Matematikçi", "Bilim insanı"],
    ["Yerçekimi çalışmaları", "Hareket yasaları", "Calculus çalışmaları"],
    ["Elma hikayesiyle anılır", "Klasik mekaniğin kurucularından", "Bilimsel devrim figürü"]
  ),

  h(
    3014,
    "Nikola Tesla",
    ["tesla", "nikola tesla"],
    ["Sırbistan kökenli", "Avrupa", "ABD"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Mucit", "Mühendis", "Bilim insanı"],
    ["Alternatif akım sistemleri", "Elektrik çalışmaları", "Kablosuz enerji fikirleri"],
    ["Elektrik dehası", "İleri görüşlü mucit", "AC sistemiyle bilinir"]
  ),

  h(
    3015,
    "Marie Curie",
    ["marie curie", "curie", "maria sklodowska curie"],
    ["Polonya", "Fransa", "Paris"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Bilim insanı", "Fizikçi", "Kimyager"],
    ["Radyoaktivite çalışmaları", "Nobel ödülleri", "Polonyum ve radyum araştırmaları"],
    ["İki farklı alanda Nobel kazandı", "Bilim tarihinde öncü kadın", "Radyoaktivite kavramıyla bilinir"]
  ),

  h(
    3016,
    "Galileo Galilei",
    ["galileo", "galileo galilei"],
    ["İtalya", "Pisa", "Floransa"],
    ["16. yüzyıl", "17. yüzyıl", "Bilimsel Devrim"],
    ["Bilim insanı", "Astronom", "Fizikçi"],
    ["Teleskop gözlemleri", "Güneş merkezli sistem tartışmaları", "Engizisyon süreci"],
    ["Modern bilimin öncülerinden", "Astronomi gözlemleriyle bilinir", "Deneysel yaklaşım"]
  ),

  h(
    3017,
    "Sokrates",
    ["sokrates", "socrates"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Filozof", "Öğretmen", "Düşünür"],
    ["Atina tartışmaları", "Öğrencileriyle felsefi diyaloglar", "Yargılanması"],
    ["Sorgulama yöntemi", "Felsefenin kurucu figürlerinden", "Platon ile bağlantılı"]
  ),

  h(
    3018,
    "Platon",
    ["platon", "plato"],
    ["Antik Yunan", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Filozof", "Akademi kurucusu", "Düşünür"],
    ["Akademia", "Devlet eseri", "Sokrates'in öğrencisi olması"],
    ["İdealar kuramı", "Batı felsefesinin temel isimlerinden", "Sokrates ve Aristoteles ile bağlantılı"]
  ),

  h(
    3019,
    "Aristoteles",
    ["aristoteles", "aristotle"],
    ["Antik Yunan", "Makedonya", "Atina"],
    ["Antik Çağ", "MÖ 4. yüzyıl"],
    ["Filozof", "Bilim insanı", "Öğretmen"],
    ["Lykeion", "Büyük İskender'e hocalık", "Mantık çalışmaları"],
    ["Çok yönlü düşünür", "Mantık ve bilimle bağlantılı", "Platon'un öğrencisi"]
  ),

  h(
    3020,
    "Martin Luther King Jr.",
    ["martin luther king", "martin luther king jr", "mlk"],
    ["ABD", "Güney eyaletleri", "Washington"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Din adamı", "Konuşmacı"],
    ["Sivil haklar yürüyüşleri", "Washington konuşması", "Eşitlik mücadelesi"],
    ["Şiddetsiz direniş", "I Have a Dream konuşmasıyla bilinir", "Toplumsal eşitlik figürü"]
  ),

  h(
    3021,
    "Mahatma Gandhi",
    ["gandhi", "mahatma gandhi", "gandi"],
    ["Hindistan", "Güney Afrika", "Britanya Hindistanı"],
    ["19. yüzyıl sonu", "20. yüzyıl"],
    ["Lider", "Aktivist", "Düşünür"],
    ["Hindistan bağımsızlık hareketi", "Tuz Yürüyüşü", "Şiddetsiz direniş"],
    ["Sivil itaatsizlik", "Şiddetsiz mücadele", "Bağımsızlık hareketinin sembolü"]
  ),

  h(
    3022,
    "Nelson Mandela",
    ["mandela", "nelson mandela"],
    ["Güney Afrika", "Johannesburg", "Cape Town"],
    ["20. yüzyıl", "Apartheid dönemi", "Demokratik dönüşüm dönemi"],
    ["Lider", "Aktivist", "Cumhurbaşkanı"],
    ["Apartheid karşıtı mücadele", "Robben Island hapsi", "Güney Afrika başkanlığı"],
    ["Uzlaşma figürü", "Özgürlük mücadelesi", "Nobel Barış Ödülü"]
  ),

  h(
    3023,
    "Abraham Lincoln",
    ["lincoln", "abraham lincoln"],
    ["ABD", "Washington", "Illinois"],
    ["19. yüzyıl", "Amerikan İç Savaşı dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["Amerikan İç Savaşı", "Köleliğin kaldırılması süreci", "Gettysburg konuşması"],
    ["Uzun boyuyla anılır", "Birlik savunucusu", "ABD tarihinin önemli başkanlarından"]
  ),

  h(
    3024,
    "Winston Churchill",
    ["churchill", "winston churchill"],
    ["Birleşik Krallık", "Londra", "Avrupa"],
    ["20. yüzyıl", "II. Dünya Savaşı dönemi"],
    ["Başbakan", "Devlet adamı", "Konuşmacı"],
    ["II. Dünya Savaşı", "Savaş dönemi konuşmaları", "Britanya liderliği"],
    ["Güçlü hitabet", "Puro ile anılır", "Savaş dönemi lideri"]
  ),

  h(
    3025,
    "Kraliçe Elizabeth II",
    ["elizabeth", "queen elizabeth", "queen elizabeth ii", "2. elizabeth", "kraliçe elizabeth", "kralice elizabeth"],
    ["Birleşik Krallık", "Londra", "Commonwealth"],
    ["20. yüzyıl", "21. yüzyıl", "Modern monarşi dönemi"],
    ["Kraliçe", "Monark", "Devlet başkanı"],
    ["Uzun saltanat", "Commonwealth dönemi", "Modern İngiliz tarihi"],
    ["Çok uzun süre tahtta kaldı", "Monarşi sembolü", "Buckingham Sarayı ile bağlantılı"]
  ),

  h(
    3026,
    "Selahaddin Eyyubi",
    ["selahaddin", "selahaddin eyyubi", "selahattin eyyubi", "saladin", "salahaddin"],
    ["Mısır", "Suriye", "Ortadoğu", "Kudüs"],
    ["12. yüzyıl", "Orta Çağ", "Haçlı Seferleri dönemi"],
    ["Sultan", "Komutan", "Devlet adamı", "Eyyubi hükümdarı"],
    ["Kudüs'ün alınması", "Hıttin Savaşı", "Haçlılarla mücadele", "Eyyubi Devleti'nin kuruluşu"],
    ["Haçlılara karşı direnişiyle bilinir", "Hoşgörüsüyle anılır", "Ortadoğu'nun sembol komutanlarından"]
  ),

  h(
    3027,
    "Timur",
    ["timur", "aksak timur", "timurlenk", "tamerlane", "emir timur"],
    ["Orta Asya", "Semerkant", "Maveraünnehir"],
    ["14. yüzyıl", "15. yüzyıl başı", "Orta Çağ"],
    ["Han", "Komutan", "İmparatorluk kurucusu", "Fatih"],
    ["Ankara Savaşı", "Büyük fetihler", "Timur İmparatorluğu'nun kuruluşu", "Yıldırım Bayezid'i yenmesi"],
    ["Semerkant'ı başkent yapmasıyla bilinir", "Bozkır fatihi", "Askeri dehasıyla anılır"]
  ),

  h(
    3028,
    "Mimar Sinan",
    ["mimar sinan", "sinan", "koca sinan"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu"],
    ["16. yüzyıl", "Osmanlı klasik çağı", "Erken modern dönem"],
    ["Mimar", "Mühendis", "Baş mimar"],
    ["Süleymaniye Camii", "Selimiye Camii", "Osmanlı mimarisinin gelişimi", "Yüzlerce eser inşası"],
    ["Selimiye'yi ustalık eseri sayması", "Osmanlı mimarisinin zirvesi", "Kubbe ve denge ustalığı"]
  ),

  h(
    3029,
    "Mevlana Celaleddin Rumi",
    ["mevlana", "mevlana celaleddin rumi", "rumi", "celaleddin rumi", "mevlana rumi"],
    ["Anadolu", "Konya", "Horasan kökenli"],
    ["13. yüzyıl", "Orta Çağ", "Anadolu Selçuklu dönemi"],
    ["Düşünür", "Şair", "Mutasavvıf", "Din adamı"],
    ["Mesnevi'nin yazılması", "Şems ile buluşması", "Konya'da tasavvuf öğretisi"],
    ["Hoşgörü çağrısıyla bilinir", "Mesnevi ile anılır", "Sema ve Mevlevilikle bağlantılı"]
  ),

  h(
    3030,
    "İbn-i Sina",
    ["ibni sina", "ibn-i sina", "ibn sina", "avicenna", "avisenna"],
    ["Orta Asya", "Buhara", "İran coğrafyası"],
    ["10. yüzyıl", "11. yüzyıl", "Orta Çağ", "İslam altın çağı"],
    ["Bilim insanı", "Hekim", "Filozof"],
    ["El-Kanun fi't-Tıb eseri", "Tıp ve felsefe çalışmaları", "İslam biliminin gelişimi"],
    ["Tıp kitabı yüzyıllarca okutuldu", "Çok yönlü bilgin", "Doğu ve Batı bilimini etkiledi"]
  ),

  h(
    3031,
    "William Shakespeare",
    ["shakespeare", "william shakespeare", "şekspir"],
    ["İngiltere", "Londra", "Stratford"],
    ["16. yüzyıl", "17. yüzyıl başı", "Rönesans"],
    ["Oyun yazarı", "Şair", "Sanatçı"],
    ["Hamlet", "Romeo ve Juliet", "Globe Tiyatrosu dönemi"],
    ["Dünya edebiyatının en ünlü yazarlarından", "Trajedi ve komedileriyle bilinir", "İngilizceyi zenginleştirdi"]
  ),

  h(
    3032,
    "Ludwig van Beethoven",
    ["beethoven", "ludwig van beethoven"],
    ["Almanya", "Avusturya", "Viyana"],
    ["18. yüzyıl sonu", "19. yüzyıl başı", "Klasik ve Romantik dönem"],
    ["Besteci", "Piyanist", "Sanatçı"],
    ["9. Senfoni", "Ay Işığı Sonatı", "Klasik müzikten Romantizme geçiş"],
    ["Sağırlığına rağmen beste yapmasıyla bilinir", "Batı müziğinin devlerinden", "9. Senfoni ile anılır"]
  ),

  h(
    3033,
    "Vincent van Gogh",
    ["van gogh", "vincent van gogh", "vangogh"],
    ["Hollanda", "Fransa", "Avrupa"],
    ["19. yüzyıl", "Post-empresyonizm dönemi"],
    ["Ressam", "Sanatçı"],
    ["Yıldızlı Gece", "Ayçiçekleri", "Kısa ve yoğun sanat dönemi"],
    ["Yaşarken tanınmayan ressam", "Canlı renkleriyle bilinir", "Post-empresyonizmin önemli isimlerinden"]
  ),

  h(
    3034,
    "Charles Darwin",
    ["darwin", "charles darwin"],
    ["İngiltere", "Avrupa", "Galapagos"],
    ["19. yüzyıl", "Bilimsel gelişim dönemi"],
    ["Bilim insanı", "Doğa bilimci", "Teorisyen"],
    ["Beagle yolculuğu", "Türlerin Kökeni eseri", "Doğal seçilim çalışmaları"],
    ["Evrim teorisiyle bilinir", "Biyolojiyi kökten etkiledi", "Galapagos gözlemleriyle anılır"]
  ),

  h(
    3035,
    "Christopher Columbus",
    ["kristof kolomb", "kolomb", "columbus", "christopher columbus"],
    ["İtalya kökenli", "İspanya", "Atlantik"],
    ["15. yüzyıl", "16. yüzyıl başı", "Keşifler Çağı"],
    ["Denizci", "Kaşif", "Kaptan"],
    ["Atlantik'i geçmesi", "Amerika kıtasına ulaşması", "İspanya adına seferler"],
    ["Yeni Dünya'ya ulaşmasıyla bilinir", "Keşifler Çağı'nın sembolü", "Hindistan'a gittiğini sanmasıyla anılır"]
  ),

  h(
    3036,
    "Joan of Arc",
    ["jan dark", "jeanne d'arc", "joan of arc", "jandark", "orleans bakiresi"],
    ["Fransa", "Orleans", "Avrupa"],
    ["15. yüzyıl", "Orta Çağ sonu", "Yüzyıl Savaşları dönemi"],
    ["Komutan", "Asker", "Ulusal kahraman"],
    ["Orleans kuşatması", "Yüzyıl Savaşları", "Yargılanması"],
    ["Genç yaşta ordulara önderlik etti", "Fransa'nın ulusal sembollerinden", "İnancı ve cesaretiyle anılır"]
  ),

  h(
    3037,
    "George Washington",
    ["washington", "george washington"],
    ["ABD", "Virginia", "Kuzey Amerika"],
    ["18. yüzyıl", "Amerikan Bağımsızlık dönemi"],
    ["Komutan", "Devlet adamı", "Başkan", "Kurucu lider"],
    ["Amerikan Bağımsızlık Savaşı", "İlk ABD başkanlığı", "Yeni cumhuriyetin kuruluşu"],
    ["ABD'nin ilk başkanı olmasıyla bilinir", "Kurucu babalardan", "Bağımsızlık mücadelesinin lideri"]
  ),

  h(
    3038,
    "Konfüçyüs",
    ["konfucyus", "konfüçyüs", "confucius", "kong fuzi"],
    ["Çin", "Doğu Asya"],
    ["Antik Çağ", "MÖ 6. yüzyıl", "MÖ 5. yüzyıl"],
    ["Filozof", "Öğretmen", "Düşünür"],
    ["Ahlak ve toplum öğretisi", "Öğrencileriyle diyaloglar", "Konfüçyüsçülüğün doğuşu"],
    ["Ahlak ve erdem öğretisiyle bilinir", "Doğu düşüncesini derinden etkiledi", "Özdeyişleriyle anılır"]
  ),

  h(
    3039,
    "Sigmund Freud",
    ["freud", "sigmund freud", "froyd"],
    ["Avusturya", "Viyana", "Avrupa"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Bilim insanı", "Hekim", "Teorisyen", "Psikanalist"],
    ["Psikanalizin kuruluşu", "Rüya çalışmaları", "Bilinçdışı kuramı"],
    ["Psikanalizin kurucusu olarak bilinir", "Bilinçdışı kavramıyla anılır", "Psikolojiyi derinden etkiledi"]
  ),

  h(
    3040,
    "Yavuz Sultan Selim",
    ["yavuz", "yavuz sultan selim", "selim i", "1. selim", "birinci selim"],
    ["Osmanlı İmparatorluğu", "Mısır", "Ortadoğu ve Anadolu"],
    ["16. yüzyıl", "Osmanlı yükseliş dönemi", "Erken modern dönem"],
    ["Padişah", "Komutan", "Halife", "Devlet adamı"],
    ["Çaldıran Savaşı", "Mısır seferi", "Halifeliğin Osmanlı'ya geçmesi"],
    ["Kısa ama etkili saltanatıyla bilinir", "Sert mizacıyla anılır", "Osmanlı topraklarını genişletti"]
  ),

  h(
    3041,
    "Osman Gazi",
    ["osman gazi", "osman bey", "osman i", "1. osman"],
    ["Anadolu", "Bilecik", "Söğüt", "Osmanlı Beyliği"],
    ["13. yüzyıl", "14. yüzyıl başı", "Beylikler dönemi"],
    ["Bey", "Kurucu lider", "Savaşçı"],
    ["Osmanlı Beyliği'nin kuruluşu", "Bizans sınırlarında genişleme", "Söğüt çevresinde güçlenme"],
    ["Osmanlı hanedanının kurucusu", "Kuruluş dönemi figürü", "Beylikten devlete geçişin sembolü"]
  ),

  h(
    3042,
    "Orhan Gazi",
    ["orhan gazi", "orhan bey", "orhan i", "1. orhan"],
    ["Osmanlı Beyliği", "Bursa", "Anadolu"],
    ["14. yüzyıl", "Osmanlı kuruluş dönemi"],
    ["Bey", "Devlet adamı", "Komutan"],
    ["Bursa'nın alınması", "Osmanlı teşkilatlanması", "Rumeli'ye geçiş süreci"],
    ["Osmanlı'nın kurumsallaşmasında etkili oldu", "Bursa dönemiyle bilinir", "Kuruluş döneminin önemli hükümdarı"]
  ),

  h(
    3043,
    "Yıldırım Bayezid",
    ["yıldırım bayezid", "yildirim bayezid", "bayezid i", "1. bayezid"],
    ["Osmanlı İmparatorluğu", "Anadolu", "Balkanlar"],
    ["14. yüzyıl sonu", "15. yüzyıl başı"],
    ["Padişah", "Komutan"],
    ["Niğbolu Savaşı", "Ankara Savaşı", "Anadolu'da siyasi birlik çabası"],
    ["Yıldırım lakabıyla bilinir", "Hızlı seferleriyle anılır", "Timur ile mücadelesiyle hatırlanır"]
  ),

  h(
    3044,
    "II. Abdülhamid",
    ["abdülhamid", "abdulhamid", "2. abdülhamid", "ii abdülhamid", "ikinci abdülhamid"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Yıldız Sarayı"],
    ["19. yüzyıl sonu", "20. yüzyıl başı", "Osmanlı son dönemi"],
    ["Padişah", "Devlet adamı"],
    ["I. Meşrutiyet", "Yıldız Sarayı dönemi", "Demiryolu projeleri", "Osmanlı modernleşmesi"],
    ["Uzun saltanatıyla bilinir", "Osmanlı son döneminin tartışmalı figürlerinden", "Diplomasi ve denge siyasetiyle anılır"]
  ),

  h(
    3045,
    "Enver Paşa",
    ["enver paşa", "enver pasa", "ismail enver"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Kafkasya"],
    ["20. yüzyıl başı", "I. Dünya Savaşı dönemi"],
    ["Asker", "Paşa", "Siyasi figür"],
    ["İttihat ve Terakki dönemi", "I. Dünya Savaşı", "Sarıkamış Harekâtı"],
    ["Osmanlı son döneminin etkili askerlerinden", "Tartışmalı bir tarihi figür", "İttihat ve Terakki ile bağlantılı"]
  ),

  h(
    3046,
    "Kazım Karabekir",
    ["kazım karabekir", "kazim karabekir"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Doğu Anadolu"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi"],
    ["Asker", "Komutan", "Siyasetçi"],
    ["Doğu Cephesi", "Kurtuluş Savaşı", "Gümrü Antlaşması"],
    ["Doğu Cephesi komutanı olarak bilinir", "Milli Mücadele figürü", "Askeri ve siyasi yönüyle anılır"]
  ),

  h(
    3047,
    "İsmet İnönü",
    ["ismet inönü", "ismet inonu", "inönü", "inonu"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Ankara"],
    ["20. yüzyıl", "Cumhuriyet dönemi", "Kurtuluş Savaşı dönemi"],
    ["Asker", "Devlet adamı", "Cumhurbaşkanı", "Başbakan"],
    ["İnönü Savaşları", "Lozan Antlaşması", "II. Dünya Savaşı dönemi politikaları"],
    ["Türkiye'nin ikinci cumhurbaşkanı", "Lozan ile anılır", "Milli Mücadele komutanlarından"]
  ),

  h(
    3048,
    "Fevzi Çakmak",
    ["fevzi çakmak", "fevzi cakmak", "mareşal fevzi çakmak", "maresal fevzi cakmak"],
    ["Osmanlı İmparatorluğu", "Türkiye", "Ankara"],
    ["20. yüzyıl", "Kurtuluş Savaşı dönemi", "Cumhuriyetin ilk dönemi"],
    ["Asker", "Mareşal", "Genelkurmay Başkanı"],
    ["Kurtuluş Savaşı", "Sakarya Meydan Muharebesi", "Cumhuriyet ordusunun kuruluşu"],
    ["Mareşal unvanıyla bilinir", "Türk askeri tarihinin önemli isimlerinden", "Cumhuriyetin erken döneminde etkili oldu"]
  ),

  h(
    3049,
    "Ali Kuşçu",
    ["ali kuşçu", "ali kuscu"],
    ["Semerkant", "İstanbul", "Osmanlı İmparatorluğu"],
    ["15. yüzyıl", "Bilim tarihi", "Osmanlı klasik öncesi"],
    ["Astronom", "Matematikçi", "Bilim insanı"],
    ["Semerkant okulunda çalışmalar", "İstanbul'a gelişi", "Astronomi ve matematik eserleri"],
    ["Osmanlı bilim hayatını etkiledi", "Astronomiyle bilinir", "Matematik çalışmalarıyla anılır"]
  ),

  h(
    3050,
    "Piri Reis",
    ["piri reis", "pirireis"],
    ["Osmanlı İmparatorluğu", "Akdeniz", "Gelibolu"],
    ["15. yüzyıl sonu", "16. yüzyıl", "Osmanlı denizcilik dönemi"],
    ["Denizci", "Haritacı", "Amiral"],
    ["Piri Reis haritası", "Kitab-ı Bahriye", "Akdeniz denizciliği"],
    ["Ünlü dünya haritasıyla bilinir", "Osmanlı denizcilik tarihinin önemli ismi", "Haritacılıkta öne çıkar"]
  ),

  h(
    3051,
    "Barbaros Hayreddin Paşa",
    ["barbaros", "barbaros hayreddin", "barbaros hayreddin paşa", "barbaros hayreddin pasa"],
    ["Osmanlı İmparatorluğu", "Akdeniz", "Cezayir"],
    ["16. yüzyıl", "Osmanlı deniz gücü dönemi"],
    ["Kaptan-ı Derya", "Denizci", "Komutan"],
    ["Preveze Deniz Savaşı", "Akdeniz hakimiyeti", "Osmanlı donanmasının güçlenmesi"],
    ["Osmanlı denizciliğinin sembol isimlerinden", "Preveze zaferiyle bilinir", "Akdeniz'de Osmanlı gücünü artırdı"]
  ),

  h(
    3052,
    "Evliya Çelebi",
    ["evliya çelebi", "evliya celebi"],
    ["Osmanlı İmparatorluğu", "Anadolu", "Balkanlar", "Ortadoğu"],
    ["17. yüzyıl", "Osmanlı klasik dönemi"],
    ["Gezgin", "Yazar", "Seyyah"],
    ["Seyahatname", "Osmanlı coğrafyasında geziler", "Kültür ve şehir anlatıları"],
    ["Seyahatname ile bilinir", "Geniş coğrafyaları anlattı", "Osmanlı toplum hayatına dair bilgiler verdi"]
  ),

  h(
    3053,
    "Katip Çelebi",
    ["katip çelebi", "katip celebi", "hacı kalfa", "haci kalfa"],
    ["Osmanlı İmparatorluğu", "İstanbul", "Anadolu"],
    ["17. yüzyıl", "Osmanlı bilim ve düşünce dönemi"],
    ["Bilgin", "Yazar", "Coğrafyacı"],
    ["Cihannüma", "Keşfü'z-Zunûn", "Osmanlı düşünce hayatı"],
    ["Hacı Kalfa adıyla da bilinir", "Coğrafya ve bibliyografya çalışmalarıyla anılır", "Çok yönlü Osmanlı bilgini"]
  ),

  h(
    3054,
    "Uluğ Bey",
    ["uluğ bey", "ulug bey"],
    ["Semerkant", "Maveraünnehir", "Timurlu Devleti"],
    ["15. yüzyıl", "İslam bilim tarihi", "Timurlu dönemi"],
    ["Hükümdar", "Astronom", "Matematikçi"],
    ["Semerkant Rasathanesi", "Yıldız katalogları", "Astronomi çalışmaları"],
    ["Astronomi alanındaki çalışmalarıyla bilinir", "Semerkant bilim çevresinin lideri", "Bilgin hükümdar"]
  ),

  h(
    3055,
    "Farabi",
    ["farabi", "el farabi", "al farabi"],
    ["Türkistan", "İslam dünyası", "Bağdat"],
    ["9. yüzyıl", "10. yüzyıl", "İslam altın çağı"],
    ["Filozof", "Bilim insanı", "Düşünür"],
    ["Felsefe çalışmaları", "Mantık ve siyaset düşüncesi", "İslam felsefesinin gelişimi"],
    ["İkinci öğretmen olarak anılır", "Felsefe ve mantıkla bilinir", "İslam düşüncesini etkiledi"]
  ),

  h(
    3056,
    "Biruni",
    ["biruni", "el biruni", "al biruni"],
    ["Harezm", "Orta Asya", "İslam dünyası"],
    ["10. yüzyıl", "11. yüzyıl", "İslam altın çağı"],
    ["Bilim insanı", "Astronom", "Matematikçi", "Coğrafyacı"],
    ["Hindistan çalışmaları", "Astronomi gözlemleri", "Coğrafya ve ölçüm çalışmaları"],
    ["Çok yönlü bilgin", "Hindistan üzerine çalışmalarıyla bilinir", "Bilimsel ölçüm yöntemleriyle anılır"]
  ),

  h(
    3057,
    "Harezmi",
    ["harezmi", "el harezmi", "al khwarizmi", "al khwarazmi"],
    ["Harezm", "Bağdat", "İslam dünyası"],
    ["8. yüzyıl", "9. yüzyıl", "İslam altın çağı"],
    ["Matematikçi", "Astronom", "Bilim insanı"],
    ["Cebir çalışmaları", "Bağdat Bilgelik Evi", "Matematik eserleri"],
    ["Cebirin kurucularından sayılır", "Algoritma kelimesiyle bağlantılıdır", "Matematik tarihini etkiledi"]
  ),

  h(
    3058,
    "Arşimet",
    ["arşimet", "arsimet", "archimedes"],
    ["Antik Yunan", "Sicilya", "Siraküza"],
    ["Antik Çağ", "MÖ 3. yüzyıl"],
    ["Matematikçi", "Mühendis", "Bilim insanı"],
    ["Kaldıraç çalışmaları", "Suyun kaldırma kuvveti", "Siraküza savunması"],
    ["Eureka sözüyle anılır", "Antik bilimin en büyük isimlerinden", "Geometri ve fizik çalışmalarıyla bilinir"]
  ),

  h(
    3059,
    "Hipokrat",
    ["hipokrat", "hippocrates"],
    ["Antik Yunan", "Kos Adası"],
    ["Antik Çağ", "MÖ 5. yüzyıl"],
    ["Hekim", "Tıp insanı"],
    ["Tıp geleneğinin gelişimi", "Hipokrat yemini", "Hastalıkların doğal açıklamaları"],
    ["Tıbbın babası olarak anılır", "Hipokrat yeminiyle bilinir", "Tıpta gözlemci yaklaşımı temsil eder"]
  ),

  h(
    3060,
    "Homeros",
    ["homeros", "homer"],
    ["Antik Yunan", "Ege dünyası"],
    ["Antik Çağ", "MÖ 8. yüzyıl civarı"],
    ["Şair", "Anlatıcı", "Edebiyat figürü"],
    ["İlyada", "Odysseia", "Antik Yunan destan geleneği"],
    ["Batı edebiyatının temel isimlerinden sayılır", "Destanlarıyla bilinir", "Troya anlatılarıyla bağlantılıdır"]
  ),

  h(
    3061,
    "Buda",
    ["buda", "buddha", "siddhartha gautama", "sidarta gautama"],
    ["Hindistan", "Nepal bölgesi", "Ganj havzası"],
    ["Antik Çağ", "MÖ 6. yüzyıl", "MÖ 5. yüzyıl"],
    ["Düşünür", "Din kurucusu", "Öğretmen"],
    ["Aydınlanma anlatısı", "Budizm öğretisi", "Dört Yüce Hakikat"],
    ["Budizmin kurucusu olarak bilinir", "Aydınlanma kavramıyla anılır", "Doğu düşüncesini etkiledi"]
  ),

  h(
    3062,
    "Laozi",
    ["laozi", "lao tzu", "laotse"],
    ["Çin", "Doğu Asya"],
    ["Antik Çağ", "MÖ 6. yüzyıl civarı"],
    ["Filozof", "Düşünür", "Öğretmen"],
    ["Tao Te Ching", "Taoizm öğretisi", "Doğa ve uyum düşüncesi"],
    ["Taoizmin kurucu figürü olarak anılır", "Tao kavramıyla bilinir", "Doğu felsefesini etkiledi"]
  ),

  h(
    3063,
    "Qin Shi Huang",
    ["qin shi huang", "çi şı huang", "qin imparatoru", "ilk çin imparatoru"],
    ["Çin", "Qin Hanedanı", "Doğu Asya"],
    ["MÖ 3. yüzyıl", "Antik Çin"],
    ["İmparator", "Devlet kurucu", "Hükümdar"],
    ["Çin'in birleştirilmesi", "Qin Hanedanı", "Terracotta Ordusu", "Büyük Duvar projeleri"],
    ["Çin'in ilk imparatoru olarak bilinir", "Merkezi yönetimi güçlendirdi", "Terracotta Ordusu ile anılır"]
  ),

  h(
    3064,
    "Aşoka",
    ["aşoka", "asoka", "ashoka", "ashoka the great"],
    ["Hindistan", "Maurya İmparatorluğu", "Güney Asya"],
    ["MÖ 3. yüzyıl", "Antik Hindistan"],
    ["İmparator", "Hükümdar", "Devlet adamı"],
    ["Kalinga Savaşı", "Budizmi desteklemesi", "Aşoka fermanları"],
    ["Maurya İmparatorluğu'nun en önemli hükümdarlarından", "Budizmin yayılmasında etkili oldu", "Fermanlarıyla bilinir"]
  ),

  h(
    3065,
    "Kiros",
    ["kiros", "cyrus", "cyrus the great", "büyük kiros", "buyuk kiros"],
    ["Pers İmparatorluğu", "İran coğrafyası", "Mezopotamya"],
    ["MÖ 6. yüzyıl", "Antik Çağ"],
    ["Kral", "Fatih", "İmparatorluk kurucusu"],
    ["Ahameniş İmparatorluğu'nun kuruluşu", "Babil'in alınması", "Pers genişlemesi"],
    ["Pers İmparatorluğu'nun kurucusu", "Hoşgörülü yönetim anlayışıyla anılır", "Antik dünyanın büyük hükümdarlarından"]
  ),

  h(
    3066,
    "Darius I",
    ["darius", "darius i", "1. darius", "büyük darius", "buyuk darius"],
    ["Pers İmparatorluğu", "İran", "Anadolu", "Mezopotamya"],
    ["MÖ 6. yüzyıl", "MÖ 5. yüzyıl", "Antik Çağ"],
    ["Kral", "Hükümdar", "Devlet adamı"],
    ["Pers idari sistemi", "Kraliyet Yolu", "Yunan-Pers savaşları"],
    ["Pers yönetimini düzenlemesiyle bilinir", "Satraplık sistemiyle anılır", "Büyük Pers krallarından"]
  ),

  h(
    3067,
    "Ramses II",
    ["ramses", "ramses ii", "2. ramses", "büyük ramses", "buyuk ramses"],
    ["Antik Mısır", "Nil Vadisi", "Kadeş bölgesi"],
    ["MÖ 13. yüzyıl", "Yeni Krallık dönemi", "Antik Çağ"],
    ["Firavun", "Hükümdar", "Komutan"],
    ["Kadeş Savaşı", "Abu Simbel tapınakları", "Mısır-Hitit ilişkileri"],
    ["En ünlü firavunlardan", "Uzun saltanatıyla bilinir", "Anıtsal yapılarıyla anılır"]
  ),

  h(
    3068,
    "Nefertiti",
    ["nefertiti", "nefertiti kraliçe", "nefertiti kralice"],
    ["Antik Mısır", "Amarna", "Nil Vadisi"],
    ["MÖ 14. yüzyıl", "Amarna dönemi", "Antik Çağ"],
    ["Kraliçe", "Siyasi figür", "Hanedan üyesi"],
    ["Amarna dönemi", "Akhenaton ile bağlantı", "Mısır sanatında değişim"],
    ["Ünlü büstüyle bilinir", "Antik Mısır'ın ikonik kraliçelerinden", "Güzellik ve zarafet sembolü olarak anılır"]
  ),

  h(
    3069,
    "Akhenaton",
    ["akhenaton", "akhenaten", "akhenaten firavun"],
    ["Antik Mısır", "Amarna", "Nil Vadisi"],
    ["MÖ 14. yüzyıl", "Amarna dönemi", "Antik Çağ"],
    ["Firavun", "Hükümdar", "Dini reformcu"],
    ["Aton inancı", "Amarna'nın kurulması", "Mısır dininde reform girişimi"],
    ["Dini reformlarıyla bilinir", "Amarna dönemiyle anılır", "Antik Mısır'ın sıra dışı firavunlarından"]
  ),

  h(
    3070,
    "Tutankhamun",
    ["tutankhamun", "tutankamon", "tutankhamon"],
    ["Antik Mısır", "Nil Vadisi", "Krallar Vadisi"],
    ["MÖ 14. yüzyıl", "Antik Çağ"],
    ["Firavun", "Hükümdar"],
    ["Mezarının keşfi", "Amarna sonrası dönem", "Genç yaşta hükümdarlık"],
    ["Mezarının bozulmadan bulunmasıyla ünlüdür", "Altın maskesiyle bilinir", "Antik Mısır'ın popüler figürlerinden"]
  ),

  h(
    3071,
    "Marcus Aurelius",
    ["marcus aurelius", "markus aurelius"],
    ["Roma İmparatorluğu", "Akdeniz", "Avrupa"],
    ["2. yüzyıl", "Antik Roma", "Pax Romana dönemi"],
    ["İmparator", "Filozof", "Devlet adamı"],
    ["Roma imparatorluğu", "Meditations eseri", "Sınır savaşları"],
    ["Filozof imparator olarak bilinir", "Stoacı düşünceyle anılır", "Meditations eseriyle tanınır"]
  ),

  h(
    3072,
    "Augustus",
    ["augustus", "octavian", "oktavyan", "augustus caesar"],
    ["Roma", "Akdeniz", "Roma İmparatorluğu"],
    ["MÖ 1. yüzyıl", "MS 1. yüzyıl", "Roma İmparatorluğu'nun başlangıcı"],
    ["İmparator", "Devlet adamı", "Kurucu lider"],
    ["Roma Cumhuriyeti'nin imparatorluğa dönüşmesi", "Pax Romana", "Actium Savaşı"],
    ["Roma'nın ilk imparatoru olarak bilinir", "Pax Romana dönemini başlattı", "Siyasi düzen kurucusu"]
  ),

  h(
    3073,
    "Neron",
    ["neron", "nero"],
    ["Roma İmparatorluğu", "Roma", "Akdeniz"],
    ["1. yüzyıl", "Antik Roma"],
    ["İmparator", "Hükümdar"],
    ["Roma yangını", "Julio-Claudian hanedanı", "Roma'da siyasi krizler"],
    ["Roma'nın en tartışmalı imparatorlarından", "Roma yangınıyla anılır", "Sanat merakıyla bilinir"]
  ),

  h(
    3074,
    "Spartaküs",
    ["spartaküs", "spartakus", "spartacus"],
    ["Roma Cumhuriyeti", "Trakya", "İtalya"],
    ["MÖ 1. yüzyıl", "Antik Roma"],
    ["Gladyatör", "İsyan lideri", "Savaşçı"],
    ["Köle isyanı", "Gladyatör ayaklanması", "Roma Cumhuriyeti'ne karşı mücadele"],
    ["Köle isyanıyla bilinir", "Özgürlük sembollerinden biri oldu", "Gladyatör lider olarak anılır"]
  ),

  h(
    3075,
    "Attila",
    ["attila", "attila hun", "hun attila"],
    ["Hun İmparatorluğu", "Avrupa", "Avrasya bozkırları"],
    ["5. yüzyıl", "Kavimler Göçü dönemi"],
    ["Hükümdar", "Komutan", "Han"],
    ["Avrupa seferleri", "Roma İmparatorluğu ile mücadele", "Hun İmparatorluğu'nun güçlenmesi"],
    ["Avrupa'da büyük etki bıraktı", "Hun hükümdarı olarak bilinir", "Bozkır savaşçılığıyla anılır"]
  ),

  h(
    3076,
    "Charlemagne",
    ["charlemagne", "şarlman", "sarlman", "büyük şarl", "buyuk sarl"],
    ["Frank Krallığı", "Batı Avrupa", "Kutsal Roma İmparatorluğu"],
    ["8. yüzyıl", "9. yüzyıl", "Orta Çağ"],
    ["Kral", "İmparator", "Devlet kurucu"],
    ["Frank İmparatorluğu", "Roma imparatoru olarak taç giymesi", "Karolenj Rönesansı"],
    ["Avrupa tarihinin kurucu figürlerinden", "Karolenj dönemiyle bilinir", "Batı Avrupa'yı şekillendirdi"]
  ),

  h(
    3077,
    "William the Conqueror",
    ["william the conqueror", "fatih william", "norman william", "i. william"],
    ["Normandiya", "İngiltere", "Batı Avrupa"],
    ["11. yüzyıl", "Orta Çağ"],
    ["Dük", "Kral", "Komutan"],
    ["Hastings Savaşı", "Norman fethi", "İngiltere'de Norman dönemi"],
    ["İngiltere'yi fethetmesiyle bilinir", "Norman etkisini başlattı", "Orta Çağ İngiltere'sini değiştirdi"]
  ),

  h(
    3078,
    "Richard the Lionheart",
    ["richard the lionheart", "aslan yürekli richard", "aslan yurekli richard", "i. richard"],
    ["İngiltere", "Fransa", "Ortadoğu"],
    ["12. yüzyıl", "Haçlı Seferleri dönemi", "Orta Çağ"],
    ["Kral", "Komutan", "Savaşçı"],
    ["Üçüncü Haçlı Seferi", "Akka kuşatması", "Selahaddin Eyyubi ile mücadele"],
    ["Aslan Yürekli lakabıyla bilinir", "Haçlı Seferleri figürü", "Savaşçı kral olarak anılır"]
  ),

  h(
    3079,
    "Catherine the Great",
    ["catherine the great", "büyük katerina", "buyuk katerina", "katerina"],
    ["Rusya", "St. Petersburg", "Doğu Avrupa"],
    ["18. yüzyıl", "Aydınlanma Çağı"],
    ["İmparatoriçe", "Devlet adamı", "Reformcu"],
    ["Rus İmparatorluğu'nun genişlemesi", "Aydınlanma etkili reformlar", "Kırım'ın Rusya'ya katılması"],
    ["Rusya'nın en güçlü hükümdarlarından", "Büyük Katerina olarak bilinir", "Modernleşme ve genişleme dönemiyle anılır"]
  ),

  h(
    3080,
    "Peter the Great",
    ["peter the great", "büyük petro", "buyuk petro", "i. petro"],
    ["Rusya", "St. Petersburg", "Avrupa"],
    ["17. yüzyıl sonu", "18. yüzyıl başı"],
    ["Çar", "İmparator", "Reformcu"],
    ["Rus modernleşmesi", "St. Petersburg'un kurulması", "Batılılaşma reformları"],
    ["Rusya'yı modernleştirmesiyle bilinir", "Büyük Petro olarak anılır", "St. Petersburg ile bağlantılıdır"]
  ),

  h(
    3081,
    "Louis XIV",
    ["louis xiv", "14. louis", "xiv louis", "güneş kral", "gunes kral"],
    ["Fransa", "Versay", "Avrupa"],
    ["17. yüzyıl", "18. yüzyıl başı", "Mutlak monarşi dönemi"],
    ["Kral", "Monark", "Devlet adamı"],
    ["Versay Sarayı", "Mutlak monarşi", "Fransa'nın Avrupa'daki güç siyaseti"],
    ["Güneş Kral olarak bilinir", "Versay Sarayı ile anılır", "Mutlak monarşinin sembol isimlerinden"]
  ),

  h(
    3082,
    "Marie Antoinette",
    ["marie antoinette", "mari antonet"],
    ["Fransa", "Versay", "Avusturya kökenli"],
    ["18. yüzyıl", "Fransız Devrimi dönemi"],
    ["Kraliçe", "Monark", "Siyasi figür"],
    ["Fransız Devrimi", "Versay yaşamı", "Monarşinin düşüşü"],
    ["Fransız Devrimi ile anılır", "Versay sarayıyla bağlantılıdır", "Fransa'nın son kraliçelerinden"]
  ),

  h(
    3083,
    "Robespierre",
    ["robespierre", "maximilien robespierre"],
    ["Fransa", "Paris"],
    ["18. yüzyıl", "Fransız Devrimi dönemi"],
    ["Devrimci", "Siyasetçi", "Hukukçu"],
    ["Fransız Devrimi", "Jakobenler", "Terör dönemi"],
    ["Fransız Devrimi'nin etkili isimlerinden", "Jakoben lider olarak bilinir", "Sert devrimci politikalarla anılır"]
  ),

  h(
    3084,
    "Simon Bolivar",
    ["simon bolivar", "simón bolívar", "bolivar"],
    ["Venezuela", "Kolombiya", "Güney Amerika"],
    ["19. yüzyıl", "Latin Amerika bağımsızlık dönemi"],
    ["Lider", "Komutan", "Devlet adamı"],
    ["Latin Amerika bağımsızlık savaşları", "Gran Colombia", "İspanyol yönetimine karşı mücadele"],
    ["El Libertador lakabıyla bilinir", "Latin Amerika bağımsızlık sembolü", "Birçok ülkenin kuruluş sürecini etkiledi"]
  ),

  h(
    3085,
    "Jose de San Martin",
    ["jose de san martin", "josé de san martín", "san martin"],
    ["Arjantin", "Şili", "Peru", "Güney Amerika"],
    ["19. yüzyıl", "Latin Amerika bağımsızlık dönemi"],
    ["Komutan", "Lider", "Devlet adamı"],
    ["And Dağları'nı aşması", "Şili ve Peru bağımsızlığı", "İspanyol yönetimine karşı mücadele"],
    ["Güney Amerika bağımsızlık kahramanlarından", "Askeri stratejisiyle bilinir", "And geçişiyle anılır"]
  ),

  h(
    3086,
    "Thomas Jefferson",
    ["thomas jefferson", "jefferson"],
    ["ABD", "Virginia", "Washington"],
    ["18. yüzyıl", "19. yüzyıl başı", "Amerikan kuruluş dönemi"],
    ["Başkan", "Devlet adamı", "Yazar"],
    ["Bağımsızlık Bildirgesi", "ABD başkanlığı", "Louisiana Satın Alımı"],
    ["ABD'nin kurucu babalarından", "Bağımsızlık Bildirgesi ile bilinir", "Aydınlanma düşüncesinden etkilenmiştir"]
  ),

  h(
    3087,
    "Benjamin Franklin",
    ["benjamin franklin", "franklin"],
    ["ABD", "Philadelphia", "Avrupa"],
    ["18. yüzyıl", "Amerikan kuruluş dönemi", "Aydınlanma Çağı"],
    ["Bilim insanı", "Devlet adamı", "Mucit", "Diplomat"],
    ["Elektrik deneyleri", "Amerikan Bağımsızlığı", "Fransa diplomasi görevi"],
    ["Çok yönlü kurucu baba", "Elektrik çalışmalarıyla bilinir", "Diplomasi ve icatlarıyla anılır"]
  ),

  h(
    3088,
    "John F. Kennedy",
    ["john f kennedy", "john fitzgerald kennedy", "kennedy", "jfk"],
    ["ABD", "Washington", "Massachusetts"],
    ["20. yüzyıl", "Soğuk Savaş dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["Küba Füze Krizi", "Uzay yarışı", "ABD başkanlığı"],
    ["JFK kısaltmasıyla bilinir", "Soğuk Savaş dönemi liderlerinden", "Genç başkan imajıyla anılır"]
  ),

  h(
    3089,
    "Theodore Roosevelt",
    ["theodore roosevelt", "roosevelt", "teddy roosevelt"],
    ["ABD", "Washington", "New York"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Başkan", "Devlet adamı", "Reformcu"],
    ["Progressive Era", "Panama Kanalı süreci", "Doğa koruma politikaları"],
    ["Teddy lakabıyla bilinir", "Enerjik liderliğiyle anılır", "Doğa koruma çalışmalarıyla öne çıkar"]
  ),

  h(
    3090,
    "Franklin D. Roosevelt",
    ["franklin d roosevelt", "franklin roosevelt", "fdr"],
    ["ABD", "Washington", "New York"],
    ["20. yüzyıl", "Büyük Buhran", "II. Dünya Savaşı dönemi"],
    ["Başkan", "Devlet adamı", "Siyasi lider"],
    ["New Deal", "II. Dünya Savaşı", "Büyük Buhran ile mücadele"],
    ["FDR kısaltmasıyla bilinir", "Uzun süre başkanlık yaptı", "New Deal politikalarıyla anılır"]
  ),

  h(
    3091,
    "Rosa Parks",
    ["rosa parks", "parks"],
    ["ABD", "Alabama", "Montgomery"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Sivil haklar figürü"],
    ["Montgomery otobüs boykotu", "Sivil haklar hareketi", "Ayrımcılığa karşı direniş"],
    ["Sivil haklar hareketinin sembol isimlerinden", "Otobüs protestosuyla bilinir", "Sessiz direniş figürü olarak anılır"]
  ),

  h(
    3092,
    "Harriet Tubman",
    ["harriet tubman", "tubman"],
    ["ABD", "Maryland", "Kuzey Amerika"],
    ["19. yüzyıl", "Kölelik karşıtı hareket dönemi"],
    ["Aktivist", "Özgürlük mücadelesi figürü", "Rehber"],
    ["Underground Railroad", "Kölelikten kaçışlara yardım", "Amerikan İç Savaşı dönemi"],
    ["Kölelik karşıtı hareketin sembol isimlerinden", "Birçok kişiye özgürlük yolunda yardım etti", "Cesaretiyle anılır"]
  ),

  h(
    3093,
    "Malcolm X",
    ["malcolm x", "malcolm"],
    ["ABD", "New York", "Michigan"],
    ["20. yüzyıl", "Sivil haklar hareketi dönemi"],
    ["Aktivist", "Konuşmacı", "Siyasi figür"],
    ["Sivil haklar mücadelesi", "Nation of Islam dönemi", "Toplumsal eşitlik tartışmaları"],
    ["Güçlü hitabetiyle bilinir", "Sivil haklar hareketinin önemli figürlerinden", "Kimlik ve eşitlik vurgusuyla anılır"]
  ),

  h(
    3094,
    "Che Guevara",
    ["che", "che guevara", "ernesto che guevara"],
    ["Arjantin", "Küba", "Latin Amerika"],
    ["20. yüzyıl", "Soğuk Savaş dönemi", "Küba Devrimi dönemi"],
    ["Devrimci", "Doktor", "Siyasi figür"],
    ["Küba Devrimi", "Gerilla hareketleri", "Latin Amerika siyaseti"],
    ["Popüler kültürde ikonikleşmiş figür", "Küba Devrimi ile bilinir", "Devrimci sembol olarak anılır"]
  ),

  h(
    3095,
    "Fidel Castro",
    ["fidel castro", "castro"],
    ["Küba", "Havana", "Karayipler"],
    ["20. yüzyıl", "Soğuk Savaş dönemi"],
    ["Lider", "Devlet adamı", "Devrimci"],
    ["Küba Devrimi", "Küba yönetimi", "Soğuk Savaş politikaları"],
    ["Küba Devrimi'nin liderlerinden", "Uzun süre iktidarda kaldı", "Soğuk Savaş figürü olarak bilinir"]
  ),

  h(
    3096,
    "Mao Zedong",
    ["mao", "mao zedong", "mao tse tung"],
    ["Çin", "Pekin", "Doğu Asya"],
    ["20. yüzyıl", "Çin Devrimi dönemi", "Soğuk Savaş dönemi"],
    ["Lider", "Devrimci", "Devlet adamı"],
    ["Çin Halk Cumhuriyeti'nin kuruluşu", "Uzun Yürüyüş", "Çin iç savaşı"],
    ["Modern Çin tarihinin en etkili figürlerinden", "Çin Halk Cumhuriyeti'nin kurucusu olarak bilinir", "Tartışmalı politikalarıyla anılır"]
  ),

  h(
    3097,
    "Deng Xiaoping",
    ["deng xiaoping", "deng"],
    ["Çin", "Pekin", "Doğu Asya"],
    ["20. yüzyıl", "Çin reform dönemi"],
    ["Lider", "Devlet adamı", "Reformcu"],
    ["Ekonomik reformlar", "Açılım politikaları", "Modern Çin ekonomisinin dönüşümü"],
    ["Çin'in ekonomik dönüşümünde etkili oldu", "Reform ve açılım dönemiyle bilinir", "Pragmatik liderlik anlayışıyla anılır"]
  ),

  h(
    3098,
    "Sun Yat-sen",
    ["sun yat sen", "sun yat-sen", "sun yatsen"],
    ["Çin", "Guangdong", "Doğu Asya"],
    ["19. yüzyıl sonu", "20. yüzyıl başı"],
    ["Devrimci", "Lider", "Siyasetçi"],
    ["Qing Hanedanı'nın yıkılışı", "Çin Cumhuriyeti'nin kuruluşu", "Üç Halk İlkesi"],
    ["Modern Çin'in kurucu figürlerinden", "Çin Cumhuriyeti ile bağlantılıdır", "Üç Halk İlkesi ile bilinir"]
  ),

  h(
    3099,
    "Ho Chi Minh",
    ["ho chi minh", "ho şimin", "ho simin"],
    ["Vietnam", "Hanoi", "Güneydoğu Asya"],
    ["20. yüzyıl", "Sömürgecilik karşıtı dönem", "Soğuk Savaş dönemi"],
    ["Lider", "Devrimci", "Devlet adamı"],
    ["Vietnam bağımsızlık mücadelesi", "Fransız sömürge yönetimine karşı mücadele", "Vietnam siyasi tarihi"],
    ["Vietnam bağımsızlık hareketinin sembol isimlerinden", "Hanoi ile bağlantılıdır", "Sömürgecilik karşıtı mücadeleyle anılır"]
  ),

  h(
    3100,
    "Indira Gandhi",
    ["indira gandhi", "indira gandi"],
    ["Hindistan", "Yeni Delhi", "Güney Asya"],
    ["20. yüzyıl", "Modern Hindistan dönemi"],
    ["Başbakan", "Devlet adamı", "Siyasi lider"],
    ["Hindistan başbakanlığı", "1971 savaşı", "Hindistan siyasetinde merkezi rol"],
    ["Hindistan'ın ilk kadın başbakanı", "Güçlü siyasi lider olarak bilinir", "Modern Hindistan tarihinde önemli figür"]
  ),
];