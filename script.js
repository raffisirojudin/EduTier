// ===== BANK SOAL =====
const bankSoal = {
  Matematika: {
    SD: [
      {
        pertanyaan: "Berapakah hasil dari 5 + 5?",
        pilihan: ["8", "10", "12", "14"],
        jawaban: "10",
      },
      {
        pertanyaan: "Berapakah 12 - 4?",
        pilihan: ["6", "7", "8", "9"],
        jawaban: "8",
      },
      {
        pertanyaan: "Berapakah hasil dari 3 × 4?",
        pilihan: ["10", "11", "12", "13"],
        jawaban: "12",
      },
      {
        pertanyaan: "Berapakah 20 ÷ 5?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
      },
      {
        pertanyaan: "Berapakah setengah dari 18?",
        pilihan: ["7", "8", "9", "10"],
        jawaban: "9",
      },
      {
        pertanyaan: "Berapa sisi pada bangun segitiga?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "3",
      },
      {
        pertanyaan: "Angka manakah yang merupakan bilangan genap?",
        pilihan: ["3", "5", "7", "8"],
        jawaban: "8",
      },
    ],
    SMP: [
      {
        pertanyaan: "Berapakah nilai x dari x + 3 = 7?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
      },
      {
        pertanyaan: "Berapakah luas persegi dengan sisi 6 cm?",
        pilihan: ["12 cm²", "24 cm²", "36 cm²", "48 cm²"],
        jawaban: "36 cm²",
      },
      {
        pertanyaan: "Berapakah akar kuadrat dari 144?",
        pilihan: ["10", "11", "12", "13"],
        jawaban: "12",
      },
      {
        pertanyaan: "Jika 2x = 16, berapakah nilai x?",
        pilihan: ["6", "7", "8", "9"],
        jawaban: "8",
      },
      {
        pertanyaan: "Berapakah hasil dari (-5) × (-4)?",
        pilihan: ["-20", "-9", "9", "20"],
        jawaban: "20",
      },
      {
        pertanyaan:
          "Keliling lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
        pilihan: ["22 cm", "44 cm", "66 cm", "88 cm"],
        jawaban: "44 cm",
      },
      {
        pertanyaan: "Berapakah FPB dari 12 dan 18?",
        pilihan: ["3", "4", "6", "9"],
        jawaban: "6",
      },
    ],
    SMA: [
      {
        pertanyaan: "Turunan pertama dari f(x) = 2x² adalah...",
        pilihan: ["2x", "4x", "2", "4"],
        jawaban: "4x",
      },
      {
        pertanyaan: "Nilai dari sin 30° adalah...",
        pilihan: ["√2/2", "√3/2", "1/2", "1"],
        jawaban: "1/2",
      },
      {
        pertanyaan: "Hasil dari ∫ 3x² dx adalah...",
        pilihan: ["6x", "x³ + C", "3x + C", "x² + C"],
        jawaban: "x³ + C",
      },
      {
        pertanyaan: "Jika log₂(8) = n, maka n adalah...",
        pilihan: ["2", "3", "4", "6"],
        jawaban: "3",
      },
      {
        pertanyaan:
          "Persamaan lingkaran dengan pusat (0,0) dan jari-jari 5 adalah...",
        pilihan: ["x+y=25", "x²+y²=5", "x²+y²=25", "x²-y²=25"],
        jawaban: "x²+y²=25",
      },
      {
        pertanyaan: "Nilai limit x→0 dari (sin x)/x adalah...",
        pilihan: ["0", "∞", "1", "tak terdefinisi"],
        jawaban: "1",
      },
      {
        pertanyaan: "Suku ke-10 dari barisan aritmatika 2, 5, 8, ... adalah...",
        pilihan: ["27", "29", "31", "33"],
        jawaban: "29",
      },
    ],
  },
  Sains: {
    SD: [
      {
        pertanyaan: "Hewan apa yang memiliki sayap dan bisa terbang?",
        pilihan: ["Ikan", "Burung", "Kelinci", "Kura-kura"],
        jawaban: "Burung",
      },
      {
        pertanyaan: "Apa yang dibutuhkan tanaman untuk berfotosintesis?",
        pilihan: [
          "Air & Udara",
          "Api & Tanah",
          "Sinar Matahari & Air",
          "Udara & Batu",
        ],
        jawaban: "Sinar Matahari & Air",
      },
      {
        pertanyaan: "Benda apa yang bisa mengalirkan listrik?",
        pilihan: ["Karet", "Kayu", "Tembaga", "Plastik"],
        jawaban: "Tembaga",
      },
      {
        pertanyaan: "Planet manakah yang paling dekat dengan Matahari?",
        pilihan: ["Venus", "Bumi", "Merkurius", "Mars"],
        jawaban: "Merkurius",
      },
      {
        pertanyaan: "Organ manakah yang berfungsi memompa darah?",
        pilihan: ["Paru-paru", "Hati", "Lambung", "Jantung"],
        jawaban: "Jantung",
      },
      {
        pertanyaan: "Hewan yang bertelur dan hidup di dua alam disebut...",
        pilihan: ["Mamalia", "Reptil", "Amfibi", "Aves"],
        jawaban: "Amfibi",
      },
      {
        pertanyaan: "Air akan mendidih pada suhu berapa derajat Celsius?",
        pilihan: ["80°C", "90°C", "100°C", "110°C"],
        jawaban: "100°C",
      },
    ],
    SMP: [
      {
        pertanyaan: "Sel yang tidak memiliki membran inti disebut...",
        pilihan: ["Eukariotik", "Prokariotik", "Organisme", "Sitoplasma"],
        jawaban: "Prokariotik",
      },
      {
        pertanyaan: "Rumus kimia air adalah...",
        pilihan: ["CO₂", "NaCl", "H₂O", "O₂"],
        jawaban: "H₂O",
      },
      {
        pertanyaan: "Proses perubahan zat cair menjadi gas disebut...",
        pilihan: ["Kondensasi", "Membeku", "Menguap", "Mencair"],
        jawaban: "Menguap",
      },
      {
        pertanyaan:
          "Energi yang tersimpan dalam makanan diukur dalam satuan...",
        pilihan: ["Watt", "Newton", "Kalori", "Joule"],
        jawaban: "Kalori",
      },
      {
        pertanyaan: "Lapisan terluar bumi disebut...",
        pilihan: ["Mantel", "Inti", "Kerak", "Litosfer"],
        jawaban: "Kerak",
      },
      {
        pertanyaan:
          "Hukum Newton I menyatakan bahwa benda diam akan terus diam jika...",
        pilihan: [
          "Diberi gaya",
          "Tidak ada gaya luar",
          "Diberi tekanan",
          "Dipanaskan",
        ],
        jawaban: "Tidak ada gaya luar",
      },
      {
        pertanyaan:
          "Proses pembelahan sel yang menghasilkan 2 sel anak identik disebut...",
        pilihan: ["Meiosis", "Mitosis", "Fertilisasi", "Diferensiasi"],
        jawaban: "Mitosis",
      },
    ],
    SMA: [
      {
        pertanyaan: "Teori evolusi dikemukakan oleh...",
        pilihan: [
          "Isaac Newton",
          "Albert Einstein",
          "Charles Darwin",
          "Gregor Mendel",
        ],
        jawaban: "Charles Darwin",
      },
      {
        pertanyaan: "Partikel penyusun inti atom adalah...",
        pilihan: [
          "Proton & Elektron",
          "Neutron & Elektron",
          "Proton & Neutron",
          "Elektron saja",
        ],
        jawaban: "Proton & Neutron",
      },
      {
        pertanyaan: "Hukum kekekalan energi menyatakan bahwa energi...",
        pilihan: [
          "Bisa diciptakan",
          "Bisa dimusnahkan",
          "Tidak berubah bentuk",
          "Tidak dapat diciptakan/dimusnahkan",
        ],
        jawaban: "Tidak dapat diciptakan/dimusnahkan",
      },
      {
        pertanyaan: "Organel sel yang disebut 'dapur sel' adalah...",
        pilihan: ["Mitokondria", "Kloroplas", "Ribosom", "Nukleus"],
        jawaban: "Kloroplas",
      },
      {
        pertanyaan: "pH larutan asam berada di bawah...",
        pilihan: ["5", "6", "7", "8"],
        jawaban: "7",
      },
      {
        pertanyaan: "Reaksi kimia yang melepaskan panas disebut reaksi...",
        pilihan: ["Endoterm", "Eksoterm", "Redoks", "Hidrolisis"],
        jawaban: "Eksoterm",
      },
      {
        pertanyaan: "Hukum Mendel I menyatakan tentang...",
        pilihan: ["Dominansi", "Segregasi", "Asortasi bebas", "Mutasi"],
        jawaban: "Segregasi",
      },
    ],
  },
  Sejarah: {
    SD: [
      {
        pertanyaan: "Siapakah proklamator kemerdekaan Indonesia?",
        pilihan: [
          "Soeharto",
          "Soekarno & Hatta",
          "Soekarno & Syahrir",
          "Soekarno saja",
        ],
        jawaban: "Soekarno & Hatta",
      },
      {
        pertanyaan: "Indonesia merdeka pada tanggal...",
        pilihan: [
          "17 Agustus 1945",
          "17 Agustus 1950",
          "1 Juni 1945",
          "28 Oktober 1928",
        ],
        jawaban: "17 Agustus 1945",
      },
      {
        pertanyaan: "Ibu kota Indonesia adalah...",
        pilihan: ["Surabaya", "Bandung", "Jakarta", "Yogyakarta"],
        jawaban: "Jakarta",
      },
      {
        pertanyaan: "Sumpah Pemuda terjadi pada tahun...",
        pilihan: ["1920", "1925", "1928", "1930"],
        jawaban: "1928",
      },
      {
        pertanyaan: "Garuda Pancasila adalah lambang negara...",
        pilihan: ["Malaysia", "Indonesia", "Filipina", "Thailand"],
        jawaban: "Indonesia",
      },
      {
        pertanyaan: "Pahlawan wanita dari Aceh yang terkenal adalah...",
        pilihan: [
          "R.A. Kartini",
          "Cut Nyak Dien",
          "Dewi Sartika",
          "Martha Christina",
        ],
        jawaban: "Cut Nyak Dien",
      },
      {
        pertanyaan:
          "Pancasila sebagai dasar negara Indonesia diresmikan pada...",
        pilihan: [
          "17 Agustus 1945",
          "18 Agustus 1945",
          "1 Juni 1945",
          "20 Mei 1908",
        ],
        jawaban: "18 Agustus 1945",
      },
    ],
    SMP: [
      {
        pertanyaan: "Kerajaan Hindu pertama di Nusantara adalah...",
        pilihan: ["Sriwijaya", "Majapahit", "Kutai", "Mataram"],
        jawaban: "Kutai",
      },
      {
        pertanyaan: "Siapakah pendiri Kerajaan Majapahit?",
        pilihan: ["Hayam Wuruk", "Raden Wijaya", "Gajah Mada", "Ken Arok"],
        jawaban: "Raden Wijaya",
      },
      {
        pertanyaan: "Peristiwa Rengasdengklok terjadi pada...",
        pilihan: [
          "14 Agustus 1945",
          "15 Agustus 1945",
          "16 Agustus 1945",
          "17 Agustus 1945",
        ],
        jawaban: "16 Agustus 1945",
      },
      {
        pertanyaan:
          "Strategi VOC menguasai perdagangan rempah-rempah disebut...",
        pilihan: ["Cultuurstelsel", "Extirpatie", "Monopoli", "Tanam Paksa"],
        jawaban: "Monopoli",
      },
      {
        pertanyaan: "Perang Diponegoro berlangsung dari tahun...",
        pilihan: ["1825–1830", "1830–1835", "1820–1825", "1810–1815"],
        jawaban: "1825–1830",
      },
      {
        pertanyaan: "Kerajaan Islam pertama di Nusantara adalah...",
        pilihan: ["Demak", "Samudra Pasai", "Mataram", "Ternate"],
        jawaban: "Samudra Pasai",
      },
      {
        pertanyaan: "Sumpah Palapa diucapkan oleh...",
        pilihan: ["Hayam Wuruk", "Raden Wijaya", "Gajah Mada", "Ken Arok"],
        jawaban: "Gajah Mada",
      },
    ],
    SMA: [
      {
        pertanyaan: "Konferensi Asia-Afrika diadakan di kota...",
        pilihan: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
        jawaban: "Bandung",
      },
      {
        pertanyaan: "Gerakan Non-Blok diprakarsai oleh Indonesia bersama...",
        pilihan: [
          "India, Yugoslavia, Mesir, Ghana",
          "India, Cina, Malaysia, Mesir",
          "India, Pakistan, Filipina, Mesir",
          "India, Amerika, Cina, Mesir",
        ],
        jawaban: "India, Yugoslavia, Mesir, Ghana",
      },
      {
        pertanyaan: "Dekrit Presiden 5 Juli 1959 berisi...",
        pilihan: [
          "Pembubaran PKI",
          "Kembali ke UUD 1945",
          "Pembentukan MPRS",
          "Nasionalisasi Perusahaan",
        ],
        jawaban: "Kembali ke UUD 1945",
      },
      {
        pertanyaan: "Reformasi 1998 dipicu oleh jatuhnya Presiden...",
        pilihan: ["Soekarno", "B.J. Habibie", "Soeharto", "Megawati"],
        jawaban: "Soeharto",
      },
      {
        pertanyaan:
          "Perjanjian yang mengakui kedaulatan Indonesia oleh Belanda ditandatangani di...",
        pilihan: ["Den Haag", "Amsterdam", "Paris", "Linggarjati"],
        jawaban: "Den Haag",
      },
      {
        pertanyaan: "Operasi Trikora bertujuan untuk merebut wilayah...",
        pilihan: ["Timor Timur", "Aceh", "Irian Barat", "Kalimantan Utara"],
        jawaban: "Irian Barat",
      },
      {
        pertanyaan: "Supersemar ditandatangani oleh Soekarno pada tanggal...",
        pilihan: [
          "11 Maret 1966",
          "1 Oktober 1965",
          "5 Juli 1959",
          "17 Agustus 1950",
        ],
        jawaban: "11 Maret 1966",
      },
    ],
  },
  "Bahasa Inggris": {
    SD: [
      {
        pertanyaan: "What is the English word for 'Kucing'?",
        pilihan: ["Dog", "Bird", "Cat", "Fish"],
        jawaban: "Cat",
      },
      {
        pertanyaan: "How many days are there in a week?",
        pilihan: ["Five", "Six", "Seven", "Eight"],
        jawaban: "Seven",
      },
      {
        pertanyaan: "Which color is the sky on a clear day?",
        pilihan: ["Green", "Blue", "Red", "Yellow"],
        jawaban: "Blue",
      },
      {
        pertanyaan: "What do we say to greet someone in the morning?",
        pilihan: [
          "Good night",
          "Good afternoon",
          "Good morning",
          "Good evening",
        ],
        jawaban: "Good morning",
      },
      {
        pertanyaan: "Choose the correct spelling for the fruit 'Apel'.",
        pilihan: ["Aple", "Apple", "Appel", "Apel"],
        jawaban: "Apple",
      },
      {
        pertanyaan: "What is the opposite of 'big'?",
        pilihan: ["Tall", "Heavy", "Small", "Long"],
        jawaban: "Small",
      },
      {
        pertanyaan: "Which animal says 'Moo'?",
        pilihan: ["Cat", "Cow", "Dog", "Duck"],
        jawaban: "Cow",
      },
    ],
    SMP: [
      {
        pertanyaan: "Choose the correct sentence: She ___ to school every day.",
        pilihan: ["go", "goes", "going", "gone"],
        jawaban: "goes",
      },
      {
        pertanyaan: "What is the past tense of 'eat'?",
        pilihan: ["Eated", "Eating", "Ate", "Eaten"],
        jawaban: "Ate",
      },
      {
        pertanyaan: "Which word is a noun?",
        pilihan: ["Beautiful", "Run", "Happiness", "Quickly"],
        jawaban: "Happiness",
      },
      {
        pertanyaan: "I have lived here ___ 2010.",
        pilihan: ["for", "since", "during", "while"],
        jawaban: "since",
      },
      {
        pertanyaan: "The synonym of 'brave' is...",
        pilihan: ["Coward", "Fearful", "Courageous", "Weak"],
        jawaban: "Courageous",
      },
      {
        pertanyaan: "Which sentence uses the correct article?",
        pilihan: [
          "She is a honest girl",
          "He has a umbrella",
          "It is an honour",
          "I saw a elephant",
        ],
        jawaban: "It is an honour",
      },
      {
        pertanyaan: "What does 'frequently' mean?",
        pilihan: ["Rarely", "Often", "Never", "Sometimes"],
        jawaban: "Often",
      },
    ],
    SMA: [
      {
        pertanyaan: "If I ___ rich, I would travel the world. (Conditional II)",
        pilihan: ["am", "was", "were", "be"],
        jawaban: "were",
      },
      {
        pertanyaan:
          "The passive form of 'They built this bridge in 1990' is...",
        pilihan: [
          "This bridge builds in 1990",
          "This bridge was built in 1990",
          "This bridge is built in 1990",
          "This bridge built in 1990",
        ],
        jawaban: "This bridge was built in 1990",
      },
      {
        pertanyaan: "She suggested that he ___ more careful.",
        pilihan: ["is", "was", "be", "being"],
        jawaban: "be",
      },
      {
        pertanyaan: "What is the meaning of the idiom 'break a leg'?",
        pilihan: ["Get injured", "Good luck", "Run fast", "Be careful"],
        jawaban: "Good luck",
      },
      {
        pertanyaan: "Which word is an antonym of 'benevolent'?",
        pilihan: ["Kind", "Generous", "Malevolent", "Warm"],
        jawaban: "Malevolent",
      },
      {
        pertanyaan: "She asked me where ___ from.",
        pilihan: ["do I come", "I come", "I came", "did I come"],
        jawaban: "I came",
      },
      {
        pertanyaan: "The word 'protagonist' in a story refers to...",
        pilihan: [
          "The villain",
          "The setting",
          "The main character",
          "The narrator",
        ],
        jawaban: "The main character",
      },
    ],
  },
  Teknologi: {
    SD: [
      {
        pertanyaan: "Alat apa yang digunakan untuk mengetik di komputer?",
        pilihan: ["Mouse", "Monitor", "Keyboard", "Speaker"],
        jawaban: "Keyboard",
      },
      {
        pertanyaan: "Apa fungsi dari tombol 'Delete' pada keyboard?",
        pilihan: [
          "Menyimpan file",
          "Menghapus karakter",
          "Membuka program",
          "Mencetak dokumen",
        ],
        jawaban: "Menghapus karakter",
      },
      {
        pertanyaan: "Kepanjangan dari WWW adalah...",
        pilihan: [
          "World Wide Web",
          "World Work Web",
          "Wide World Web",
          "Web World Wide",
        ],
        jawaban: "World Wide Web",
      },
      {
        pertanyaan:
          "Alat berikut yang digunakan untuk mencetak dokumen adalah...",
        pilihan: ["Scanner", "Proyektor", "Printer", "Webcam"],
        jawaban: "Printer",
      },
      {
        pertanyaan: "File dengan ekstensi .jpg biasanya berupa file...",
        pilihan: ["Video", "Gambar", "Musik", "Dokumen teks"],
        jawaban: "Gambar",
      },
      {
        pertanyaan:
          "Tombol apa yang digunakan untuk membuat huruf kapital sementara?",
        pilihan: ["Ctrl", "Alt", "Shift", "Tab"],
        jawaban: "Shift",
      },
      {
        pertanyaan:
          "Apa nama alat untuk menggerakkan kursor di layar komputer?",
        pilihan: ["Keyboard", "Monitor", "Mouse", "CPU"],
        jawaban: "Mouse",
      },
    ],
    SMP: [
      {
        pertanyaan: "Singkatan CPU dalam komputer adalah...",
        pilihan: [
          "Central Process Unit",
          "Central Processing Unit",
          "Computer Personal Unit",
          "Core Processing Unit",
        ],
        jawaban: "Central Processing Unit",
      },
      {
        pertanyaan: "Sistem operasi yang dikembangkan oleh Microsoft adalah...",
        pilihan: ["macOS", "Linux", "Android", "Windows"],
        jawaban: "Windows",
      },
      {
        pertanyaan:
          "Satuan kecepatan internet yang paling umum digunakan adalah...",
        pilihan: ["GHz", "MB", "Mbps", "dpi"],
        jawaban: "Mbps",
      },
      {
        pertanyaan: "Fungsi dari RAM pada komputer adalah...",
        pilihan: [
          "Menyimpan data permanen",
          "Memproses grafis",
          "Menyimpan data sementara",
          "Menghubungkan ke internet",
        ],
        jawaban: "Menyimpan data sementara",
      },
      {
        pertanyaan: "HTML adalah singkatan dari...",
        pilihan: [
          "Hyper Text Markup Language",
          "High Transfer Mark Language",
          "Hyper Tool Making Language",
          "Home Text Markup Language",
        ],
        jawaban: "Hyper Text Markup Language",
      },
      {
        pertanyaan:
          "Perangkat yang mengubah sinyal digital menjadi sinyal internet disebut...",
        pilihan: ["Router", "Switch", "Modem", "Hub"],
        jawaban: "Modem",
      },
      {
        pertanyaan: "Program jahat yang merusak komputer disebut...",
        pilihan: ["Cookie", "Virus", "Browser", "Plugin"],
        jawaban: "Virus",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Dalam pemrograman, struktur pengulangan yang sudah diketahui jumlah iterasinya menggunakan...",
        pilihan: ["while", "do-while", "for", "if-else"],
        jawaban: "for",
      },
      {
        pertanyaan:
          "Protokol yang digunakan untuk transfer file di internet adalah...",
        pilihan: ["HTTP", "SMTP", "FTP", "DNS"],
        jawaban: "FTP",
      },
      {
        pertanyaan:
          "Sistem bilangan yang hanya menggunakan angka 0 dan 1 disebut...",
        pilihan: ["Oktal", "Desimal", "Heksadesimal", "Biner"],
        jawaban: "Biner",
      },
      {
        pertanyaan:
          "Dalam basis data relasional, perintah SQL untuk mengambil data adalah...",
        pilihan: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        jawaban: "SELECT",
      },
      {
        pertanyaan:
          "Konsep OOP yang memungkinkan satu kelas mewarisi sifat kelas lain disebut...",
        pilihan: [
          "Polymorphism",
          "Encapsulation",
          "Inheritance",
          "Abstraction",
        ],
        jawaban: "Inheritance",
      },
      {
        pertanyaan:
          "Algoritma pengurutan yang bekerja dengan membandingkan elemen berdekatan secara berulang disebut...",
        pilihan: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
        jawaban: "Bubble Sort",
      },
      {
        pertanyaan: "Kepanjangan dari API dalam dunia teknologi adalah...",
        pilihan: [
          "Application Program Interface",
          "Application Programming Interface",
          "App Process Integration",
          "Automated Program Interface",
        ],
        jawaban: "Application Programming Interface",
      },
    ],
  },
  Olahraga: {
    SD: [
      {
        pertanyaan:
          "Olahraga apa yang dimainkan dengan menendang bola ke gawang?",
        pilihan: ["Basket", "Voli", "Sepak Bola", "Tenis"],
        jawaban: "Sepak Bola",
      },
      {
        pertanyaan: "Berapa jumlah pemain dalam satu tim bola basket?",
        pilihan: ["5", "6", "7", "9"],
        jawaban: "5",
      },
      {
        pertanyaan: "Olahraga renang dilakukan di...",
        pilihan: ["Lapangan", "Kolam", "Pantai saja", "Sungai saja"],
        jawaban: "Kolam",
      },
      {
        pertanyaan: "Apa manfaat utama berolahraga secara rutin?",
        pilihan: [
          "Membuat ngantuk",
          "Menjaga kesehatan tubuh",
          "Membuat badan lemah",
          "Mengurangi nafsu makan",
        ],
        jawaban: "Menjaga kesehatan tubuh",
      },
      {
        pertanyaan: "Olahraga bela diri asli Indonesia adalah...",
        pilihan: ["Karate", "Taekwondo", "Pencak Silat", "Judo"],
        jawaban: "Pencak Silat",
      },
      {
        pertanyaan: "Berapa set dalam pertandingan bulu tangkis tunggal?",
        pilihan: ["1 set", "2 set", "3 set", "5 set"],
        jawaban: "3 set",
      },
      {
        pertanyaan: "Alat pelindung kepala saat bersepeda disebut...",
        pilihan: ["Masker", "Helm", "Topi", "Pelindung"],
        jawaban: "Helm",
      },
    ],
    SMP: [
      {
        pertanyaan: "Ukuran lapangan bola voli standar adalah...",
        pilihan: [
          "9 x 18 meter",
          "8 x 16 meter",
          "10 x 20 meter",
          "7 x 14 meter",
        ],
        jawaban: "9 x 18 meter",
      },
      {
        pertanyaan:
          "Teknik dasar renang gaya bebas menggunakan gerakan kaki seperti...",
        pilihan: ["Katak", "Gunting", "Naik-turun bergantian", "Melingkar"],
        jawaban: "Naik-turun bergantian",
      },
      {
        pertanyaan:
          "Sistem tubuh yang berfungsi mengangkut oksigen ke seluruh tubuh adalah...",
        pilihan: [
          "Sistem pencernaan",
          "Sistem saraf",
          "Sistem peredaran darah",
          "Sistem gerak",
        ],
        jawaban: "Sistem peredaran darah",
      },
      {
        pertanyaan:
          "Denyut jantung normal saat istirahat untuk remaja adalah...",
        pilihan: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "130-150 bpm"],
        jawaban: "60-100 bpm",
      },
      {
        pertanyaan: "Servis dalam permainan tenis meja dilakukan dengan...",
        pilihan: [
          "Melempar bola ke atas lalu dipukul",
          "Memantulkan bola ke meja lalu dipukul",
          "Langsung memukul bola",
          "Melempar bola ke lawan",
        ],
        jawaban: "Melempar bola ke atas lalu dipukul",
      },
      {
        pertanyaan: "Indeks Massa Tubuh (IMT) dihitung dengan rumus...",
        pilihan: [
          "Berat (kg) / Tinggi (m)",
          "Berat (kg) / Tinggi² (m²)",
          "Tinggi (m) / Berat (kg)",
          "Berat (kg) x Tinggi (m)",
        ],
        jawaban: "Berat (kg) / Tinggi² (m²)",
      },
      {
        pertanyaan: "Olahraga yang melatih kelenturan tubuh disebut...",
        pilihan: ["Kardio", "Angkat beban", "Senam", "Lari sprint"],
        jawaban: "Senam",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Asam laktat yang menumpuk di otot saat olahraga intensif menyebabkan...",
        pilihan: [
          "Otot membesar",
          "Rasa pegal/nyeri otot",
          "Otot lebih fleksibel",
          "Detak jantung melambat",
        ],
        jawaban: "Rasa pegal/nyeri otot",
      },
      {
        pertanyaan:
          "Prinsip latihan FITT mencakup Frequency, Intensity, Time, dan...",
        pilihan: ["Technique", "Type", "Training", "Target"],
        jawaban: "Type",
      },
      {
        pertanyaan: "Cabang olahraga lari 42,195 km disebut...",
        pilihan: ["Sprint", "Triathlon", "Maraton", "Ultra run"],
        jawaban: "Maraton",
      },
      {
        pertanyaan:
          "Zat gizi utama yang menjadi sumber energi cepat saat olahraga adalah...",
        pilihan: ["Protein", "Lemak", "Karbohidrat", "Vitamin"],
        jawaban: "Karbohidrat",
      },
      {
        pertanyaan: "VO2 Max dalam olahraga mengukur...",
        pilihan: [
          "Kekuatan otot maksimal",
          "Kapasitas paru-paru maksimal",
          "Konsumsi oksigen maksimal",
          "Denyut jantung maksimal",
        ],
        jawaban: "Konsumsi oksigen maksimal",
      },
      {
        pertanyaan:
          "Teknik lompat tinggi gaya Fosbury Flop dikembangkan oleh...",
        pilihan: ["Carl Lewis", "Dick Fosbury", "Jesse Owens", "Usain Bolt"],
        jawaban: "Dick Fosbury",
      },
      {
        pertanyaan: "Overtraining syndrome terjadi akibat...",
        pilihan: [
          "Kurang olahraga",
          "Latihan berlebihan tanpa pemulihan cukup",
          "Pola makan buruk",
          "Cuaca panas",
        ],
        jawaban: "Latihan berlebihan tanpa pemulihan cukup",
      },
    ],
  },
  "Agama Islam": {
    SD: [
      {
        pertanyaan: "Kitab suci umat Islam adalah...",
        pilihan: ["Injil", "Taurat", "Zabur", "Al-Qur'an"],
        jawaban: "Al-Qur'an",
      },
      {
        pertanyaan: "Jumlah rakaat shalat Subuh adalah...",
        pilihan: ["1", "2", "3", "4"],
        jawaban: "2",
      },
      {
        pertanyaan: "Nabi terakhir yang diutus Allah SWT adalah...",
        pilihan: ["Nabi Isa", "Nabi Musa", "Nabi Ibrahim", "Nabi Muhammad SAW"],
        jawaban: "Nabi Muhammad SAW",
      },
      {
        pertanyaan: "Rukun Islam yang pertama adalah...",
        pilihan: ["Shalat", "Puasa", "Syahadat", "Zakat"],
        jawaban: "Syahadat",
      },
      {
        pertanyaan: "Bulan puasa umat Islam disebut bulan...",
        pilihan: ["Syawal", "Ramadhan", "Dzulhijjah", "Muharram"],
        jawaban: "Ramadhan",
      },
      {
        pertanyaan: "Tempat ibadah umat Islam disebut...",
        pilihan: ["Gereja", "Pura", "Masjid", "Vihara"],
        jawaban: "Masjid",
      },
      {
        pertanyaan: "Malaikat yang bertugas menyampaikan wahyu adalah...",
        pilihan: ["Mikail", "Israfil", "Jibril", "Izrail"],
        jawaban: "Jibril",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Shalat fardhu yang dilakukan setelah matahari tergelincir adalah...",
        pilihan: ["Subuh", "Dzuhur", "Ashar", "Maghrib"],
        jawaban: "Dzuhur",
      },
      {
        pertanyaan: "Zakat fitrah wajib dikeluarkan sebesar...",
        pilihan: ["1 kg beras", "2 kg beras", "2,5 kg beras", "3 kg beras"],
        jawaban: "2,5 kg beras",
      },
      {
        pertanyaan: "Surat pertama dalam Al-Qur'an adalah...",
        pilihan: ["Al-Baqarah", "Al-Fatihah", "Al-Ikhlas", "Al-Falaq"],
        jawaban: "Al-Fatihah",
      },
      {
        pertanyaan:
          "Isra' Mi'raj merupakan peristiwa perjalanan Nabi Muhammad SAW ke...",
        pilihan: [
          "Madinah",
          "Makkah",
          "Masjidil Aqsha & Sidratul Muntaha",
          "Baitul Maqdis saja",
        ],
        jawaban: "Masjidil Aqsha & Sidratul Muntaha",
      },
      {
        pertanyaan:
          "Hukum bacaan tajwid 'Idgham Bighunnah' terjadi bila nun sukun bertemu huruf...",
        pilihan: [
          "Ba dan Ta",
          "Mim dan Nun",
          "Ya, Nun, Mim, Wau",
          "Lam dan Ra",
        ],
        jawaban: "Ya, Nun, Mim, Wau",
      },
      {
        pertanyaan: "Sifat Allah SWT yang berarti Maha Melihat adalah...",
        pilihan: ["As-Sami'", "Al-Bashir", "Al-'Alim", "Al-Khabir"],
        jawaban: "Al-Bashir",
      },
      {
        pertanyaan: "Perang Badar terjadi pada tahun...",
        pilihan: ["1 H", "2 H", "3 H", "5 H"],
        jawaban: "2 H",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Konsep ekonomi Islam yang melarang bunga/riba berlandaskan surah...",
        pilihan: [
          "Al-Baqarah: 275",
          "Ali Imran: 130",
          "An-Nisa: 29",
          "Al-Baqarah: 275 & Ali Imran: 130",
        ],
        jawaban: "Al-Baqarah: 275 & Ali Imran: 130",
      },
      {
        pertanyaan: "Ijma' dalam ushul fiqh berarti...",
        pilihan: [
          "Pendapat satu ulama",
          "Kesepakatan para mujtahid",
          "Analogi hukum",
          "Hadits Nabi",
        ],
        jawaban: "Kesepakatan para mujtahid",
      },
      {
        pertanyaan:
          "Nuzulul Qur'an memperingati turunnya wahyu pertama pada...",
        pilihan: ["17 Ramadhan", "21 Ramadhan", "27 Ramadhan", "1 Ramadhan"],
        jawaban: "17 Ramadhan",
      },
      {
        pertanyaan:
          "Makna kandungan Surah Al-Hujurat ayat 13 membahas tentang...",
        pilihan: [
          "Larangan riba",
          "Kesetaraan manusia & pentingnya takwa",
          "Perintah shalat",
          "Larangan zina",
        ],
        jawaban: "Kesetaraan manusia & pentingnya takwa",
      },
      {
        pertanyaan: "Metode penetapan hukum Islam melalui analogi disebut...",
        pilihan: ["Ijma'", "Ijtihad", "Qiyas", "Istihsan"],
        jawaban: "Qiyas",
      },
      {
        pertanyaan:
          "Khulafaur Rasyidin yang memerintah pertama kali setelah Nabi wafat adalah...",
        pilihan: [
          "Umar bin Khattab",
          "Utsman bin Affan",
          "Abu Bakar As-Siddiq",
          "Ali bin Abi Thalib",
        ],
        jawaban: "Abu Bakar As-Siddiq",
      },
      {
        pertanyaan:
          "Hukum nikah bagi seseorang yang sudah mampu dan takut terjerumus zina adalah...",
        pilihan: ["Sunnah", "Wajib", "Mubah", "Makruh"],
        jawaban: "Wajib",
      },
    ],
  },
  Geografi: {
    SD: [
      {
        pertanyaan: "Negara Indonesia terletak di benua...",
        pilihan: ["Afrika", "Amerika", "Asia", "Eropa"],
        jawaban: "Asia",
      },
      {
        pertanyaan: "Pulau terbesar di Indonesia adalah...",
        pilihan: ["Jawa", "Sulawesi", "Kalimantan", "Sumatera"],
        jawaban: "Kalimantan",
      },
      {
        pertanyaan: "Gunung tertinggi di Indonesia adalah...",
        pilihan: [
          "Gunung Rinjani",
          "Gunung Semeru",
          "Gunung Puncak Jaya",
          "Gunung Kerinci",
        ],
        jawaban: "Gunung Puncak Jaya",
      },
      {
        pertanyaan: "Mata angin yang berlawanan dengan Utara adalah...",
        pilihan: ["Barat", "Timur", "Selatan", "Barat Daya"],
        jawaban: "Selatan",
      },
      {
        pertanyaan: "Laut yang memisahkan Pulau Jawa dan Sumatra adalah...",
        pilihan: ["Laut Jawa", "Selat Sunda", "Selat Malaka", "Laut Banda"],
        jawaban: "Selat Sunda",
      },
      {
        pertanyaan: "Danau terbesar di Indonesia adalah...",
        pilihan: [
          "Danau Toba",
          "Danau Sentani",
          "Danau Poso",
          "Danau Maninjau",
        ],
        jawaban: "Danau Toba",
      },
      {
        pertanyaan: "Bumi berbentuk...",
        pilihan: ["Datar", "Kotak", "Bulat pepat (elipsoid)", "Segitiga"],
        jawaban: "Bulat pepat (elipsoid)",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Garis khayal yang membagi bumi menjadi belahan utara dan selatan disebut...",
        pilihan: [
          "Garis Bujur",
          "Meridian",
          "Ekuator/Khatulistiwa",
          "Garis Balik",
        ],
        jawaban: "Ekuator/Khatulistiwa",
      },
      {
        pertanyaan:
          "Proses pembentukan pegunungan akibat tumbukan lempeng disebut...",
        pilihan: ["Vulkanisme", "Tektonisme", "Orogenesis", "Erosi"],
        jawaban: "Orogenesis",
      },
      {
        pertanyaan: "Iklim Indonesia secara umum adalah...",
        pilihan: ["Subtropis", "Tropis", "Dingin", "Gurun"],
        jawaban: "Tropis",
      },
      {
        pertanyaan:
          "Skala peta 1:500.000 berarti 1 cm di peta mewakili... di lapangan.",
        pilihan: ["500 m", "5 km", "50 km", "500 km"],
        jawaban: "5 km",
      },
      {
        pertanyaan:
          "Batuan yang terbentuk dari magma yang mendingin disebut batuan...",
        pilihan: ["Sedimen", "Metamorf", "Beku", "Karbonat"],
        jawaban: "Beku",
      },
      {
        pertanyaan: "Angin yang bertiup dari darat ke laut terjadi pada...",
        pilihan: ["Siang hari", "Malam hari", "Pagi hari", "Sore hari"],
        jawaban: "Malam hari",
      },
      {
        pertanyaan: "Sungai terpanjang di Indonesia adalah...",
        pilihan: [
          "Sungai Musi",
          "Sungai Mahakam",
          "Sungai Kapuas",
          "Sungai Barito",
        ],
        jawaban: "Sungai Kapuas",
      },
    ],
    SMA: [
      {
        pertanyaan: "Teori Lempeng Tektonik dikemukakan oleh...",
        pilihan: [
          "Charles Darwin",
          "Alfred Wegener",
          "Albert Einstein",
          "Isaac Newton",
        ],
        jawaban: "Alfred Wegener",
      },
      {
        pertanyaan:
          "Fenomena El Niño menyebabkan wilayah Indonesia mengalami...",
        pilihan: ["Banjir ekstrem", "Kemarau panjang", "Salju", "Badai tropis"],
        jawaban: "Kemarau panjang",
      },
      {
        pertanyaan:
          "Indeks Pembangunan Manusia (IPM) diukur berdasarkan tiga dimensi, yaitu...",
        pilihan: [
          "Ekonomi, Sosial, Politik",
          "Kesehatan, Pendidikan, Pendapatan",
          "Infrastruktur, SDM, Alam",
          "PDB, Inflasi, Pengangguran",
        ],
        jawaban: "Kesehatan, Pendidikan, Pendapatan",
      },
      {
        pertanyaan:
          "Zona ekonomi eksklusif (ZEE) Indonesia membentang sejauh...",
        pilihan: ["12 mil laut", "24 mil laut", "200 mil laut", "350 mil laut"],
        jawaban: "200 mil laut",
      },
      {
        pertanyaan:
          "Jenis proyeksi peta yang paling akurat untuk wilayah khatulistiwa adalah...",
        pilihan: [
          "Proyeksi Kerucut",
          "Proyeksi Silinder",
          "Proyeksi Azimuthal",
          "Proyeksi Mercator",
        ],
        jawaban: "Proyeksi Silinder",
      },
      {
        pertanyaan: "Fenomena urban heat island terjadi karena...",
        pilihan: [
          "Hutan kota yang lebat",
          "Minimnya vegetasi & banyaknya bangunan di kota",
          "Curah hujan tinggi di kota",
          "Angin kencang di perkotaan",
        ],
        jawaban: "Minimnya vegetasi & banyaknya bangunan di kota",
      },
      {
        pertanyaan: "Sistem informasi geografis (SIG) digunakan untuk...",
        pilihan: [
          "Memotret satelit",
          "Menganalisis data spasial/keruangan",
          "Meramalkan cuaca saja",
          "Mengukur gempa bumi",
        ],
        jawaban: "Menganalisis data spasial/keruangan",
      },
    ],
  },
};

// ===== FUNGSI ACAK SOAL =====
function acakSoal(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ===== STATE APLIKASI =====
let pilihanKategoriUser = null;
let pilihanJenjangUser = null;
let skorSaatIni = 0;
let nomorSoalAktif = 0;
let soalAktif = [];
let jawabanBenar = 0;

// ===== NAVIGASI HALAMAN =====
function tampilkanHalaman(idHalaman) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById(idHalaman).classList.add("active");
}

// ===== PILIH KATEGORI =====
function pilihKategori(el) {
  document
    .querySelectorAll(".category-card")
    .forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");
  pilihanKategoriUser = el.dataset.kategori;
  pilihanJenjangUser = null;

  // Reset radio jenjang
  document
    .querySelectorAll('input[name="jenjang"]')
    .forEach((r) => (r.checked = false));
  document.querySelectorAll(".jenjang-card").forEach((j) => {
    j.style.borderColor = "";
    j.style.background = "";
  });

  // Tampilkan section jenjang
  document.getElementById("jenjang-section").style.display = "block";

  cekKesiapanMulai();
}

// ===== PILIH JENJANG =====
function pilihJenjang(el) {
  pilihanJenjangUser = el.value;
  cekKesiapanMulai();
}

// ===== CEK TOMBOL MULAI =====
function cekKesiapanMulai() {
  const btnMulai = document.getElementById("btn-mulai");
  btnMulai.disabled = !(pilihanKategoriUser && pilihanJenjangUser);
}

// ===== MULAI KUIS =====
function mulaiKuis() {
  const notif = document.getElementById("notif-kosong");
  notif.classList.add("hidden");

  const soalTerpilih = bankSoal[pilihanKategoriUser]?.[pilihanJenjangUser];

  if (!soalTerpilih || soalTerpilih.length === 0) {
    notif.classList.remove("hidden");
    return;
  }

  soalAktif = acakSoal(soalTerpilih).slice(0, 5);
  skorSaatIni = 0;
  nomorSoalAktif = 0;
  jawabanBenar = 0;

  // Set label header kuis
  document.getElementById("kuis-kategori-label").textContent =
    pilihanKategoriUser;
  document.getElementById("kuis-jenjang-label").textContent =
    pilihanJenjangUser;

  tampilkanHalaman("page-kuis");
  tampilkanSoal();
}

// ===== TAMPILKAN SOAL =====
function tampilkanSoal() {
  const soal = soalAktif[nomorSoalAktif];
  const total = soalAktif.length;

  // Update progress
  const persen = (nomorSoalAktif / total) * 100;
  document.getElementById("progress-fill").style.width = persen + "%";
  document.getElementById("progress-text").textContent =
    `Soal ${nomorSoalAktif + 1} dari ${total}`;
  document.getElementById("soal-number").textContent = String(
    nomorSoalAktif + 1,
  ).padStart(2, "0");

  // Pertanyaan
  document.getElementById("pertanyaan-text").textContent = soal.pertanyaan;

  // Pilihan jawaban
  const grid = document.getElementById("pilihan-grid");
  grid.innerHTML = "";
  const labels = ["A", "B", "C", "D"];

  soal.pilihan.forEach((pilihan, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-pilihan";
    btn.innerHTML = `<span class="pilihan-label">${labels[idx]}</span><span>${pilihan}</span>`;
    btn.onclick = () => prosesJawaban(btn, pilihan, soal.jawaban);
    grid.appendChild(btn);
  });
}

// ===== PROSES JAWABAN =====
function prosesJawaban(btnDiklik, jawabanPilih, jawabanKunci) {
  // Nonaktifkan semua tombol (cegah klik ganda)
  const semuaTombol = document.querySelectorAll(".btn-pilihan");
  semuaTombol.forEach((btn) => (btn.disabled = true));

  const benar = jawabanPilih === jawabanKunci;

  if (benar) {
    btnDiklik.classList.add("benar");
    skorSaatIni += 10;
    jawabanBenar++;
  } else {
    btnDiklik.classList.add("salah");
    // Highlight jawaban yang benar
    semuaTombol.forEach((btn) => {
      const teks = btn.querySelector("span:last-child").textContent;
      if (teks === jawabanKunci) btn.classList.add("benar");
    });
  }

  // Tunggu 1 detik, lanjut soal berikutnya
  setTimeout(() => {
    nomorSoalAktif++;
    if (nomorSoalAktif < soalAktif.length) {
      tampilkanSoal();
    } else {
      tampilkanHasil();
    }
  }, 1000);
}

// ===== TAMPILKAN HASIL =====
function tampilkanHasil() {
  tampilkanHalaman("page-hasil");

  const total = soalAktif.length;
  const salah = total - jawabanBenar;
  const nilaiAkhir = Math.round((jawabanBenar / total) * 100);
  const persentaseRing = (jawabanBenar / total) * 327;

  // Update DOM
  document.getElementById("skor-angka").textContent = nilaiAkhir;
  document.getElementById("detail-benar").textContent = jawabanBenar;
  document.getElementById("detail-salah").textContent = salah;
  document.getElementById("detail-total").textContent = total;

  // Animasi ring
  const ringFill = document.getElementById("ring-fill");
  if (!document.getElementById("svg-grad")) {
    const svgEl = ringFill.closest("svg");
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.id = "svg-grad";
    defs.innerHTML = `<linearGradient id="gradRing" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6C63FF"/>
      <stop offset="100%" stop-color="#FFD93D"/>
    </linearGradient>`;
    svgEl.prepend(defs);
  }

  setTimeout(() => {
    ringFill.style.strokeDashoffset = 327 - persentaseRing;
  }, 200);

  // Animasi angka skor
  animasiAngka(document.getElementById("skor-angka"), nilaiAkhir);

  // Trophy & pesan feedback
  if (nilaiAkhir >= 80) {
    document.getElementById("hasil-trophy").textContent = "🏆";
    document.getElementById("hasil-title").textContent = "Luar Biasa!";
    document.getElementById("pesan-feedback").textContent =
      "Kamu hebat! Pertahankan prestasimu dan terus semangat belajar! 🌟";
  } else if (nilaiAkhir >= 70) {
    document.getElementById("hasil-trophy").textContent = "😊";
    document.getElementById("hasil-title").textContent = "Bagus!";
    document.getElementById("pesan-feedback").textContent =
      "Hasil yang bagus! Sedikit lagi untuk mencapai nilai sempurna. Terus berlatih! 💪";
  } else {
    document.getElementById("hasil-trophy").textContent = "📚";
    document.getElementById("hasil-title").textContent = "Ayo Belajar Lagi!";
    document.getElementById("pesan-feedback").textContent =
      "Jangan menyerah! Setiap kesalahan adalah kesempatan untuk belajar. Coba lagi, kamu pasti bisa! 🚀";
  }
}

// ===== ANIMASI ANGKA =====
function animasiAngka(el, targetAngka) {
  let current = 0;
  const durasi = 1000;
  const langkah = targetAngka / (durasi / 16);

  const interval = setInterval(() => {
    current = Math.min(current + langkah, targetAngka);
    el.textContent = Math.round(current);
    if (current >= targetAngka) clearInterval(interval);
  }, 16);
}

// ===== RESET / KEMBALI HOME =====
function resetKuis() {
  pilihanKategoriUser = null;
  pilihanJenjangUser = null;
  skorSaatIni = 0;
  nomorSoalAktif = 0;
  soalAktif = [];
  jawabanBenar = 0;

  // Reset UI home
  document
    .querySelectorAll(".category-card")
    .forEach((c) => c.classList.remove("selected"));
  document
    .querySelectorAll('input[name="jenjang"]')
    .forEach((r) => (r.checked = false));
  document.getElementById("jenjang-section").style.display = "none";
  document.getElementById("btn-mulai").disabled = true;
  document.getElementById("notif-kosong").classList.add("hidden");
  document.getElementById("progress-fill").style.width = "0%";
  document.getElementById("ring-fill").style.strokeDashoffset = "327";

  tampilkanHalaman("page-home");
}

function kembaliKeHome() {
  resetKuis();
}

// ===== INISIALISASI =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jenjang-section").style.display = "none";
});
