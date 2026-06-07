// ===== BANK SOAL =====
const bankSoal = {
  Matematika: {
    SD: [
      {
        pertanyaan: "Berapakah hasil dari 5 + 5?",
        pilihan: ["8", "10", "12", "14"],
        jawaban: "10",
        penjelasan:
          "5 + 5 = 10. Jika kamu menghitung 5 jari tangan kiri ditambah 5 jari tangan kanan, hasilnya tepat 10 jari.",
      },
      {
        pertanyaan: "Berapakah 12 - 4?",
        pilihan: ["6", "7", "8", "9"],
        jawaban: "8",
        penjelasan:
          "12 - 4 = 8. Bayangkan kamu punya 12 permen, lalu diberikan 4 kepada temanmu. Sisa permen kamu adalah 8.",
      },
      {
        pertanyaan: "Berapakah hasil dari 3 × 4?",
        pilihan: ["10", "11", "12", "13"],
        jawaban: "12",
        penjelasan:
          "3 × 4 artinya 3 ditambahkan sebanyak 4 kali: 3 + 3 + 3 + 3 = 12. Atau bisa dibayangkan 3 baris kursi, masing-masing berisi 4 kursi, totalnya 12 kursi.",
      },
      {
        pertanyaan: "Berapakah 20 ÷ 5?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
        penjelasan:
          "20 ÷ 5 = 4. Jika kamu membagi 20 kue kepada 5 orang secara sama rata, masing-masing mendapat 4 kue.",
      },
      {
        pertanyaan: "Berapakah setengah dari 18?",
        pilihan: ["7", "8", "9", "10"],
        jawaban: "9",
        penjelasan:
          "Setengah dari 18 = 18 ÷ 2 = 9. Membagi dua artinya dibagi menjadi 2 bagian sama besar, hasilnya 9.",
      },
      {
        pertanyaan: "Berapa sisi pada bangun segitiga?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "3",
        penjelasan:
          "Segitiga artinya 'tiga sudut' dan juga memiliki 3 sisi. Kata 'segi' berarti sisi/sudut, dan 'tiga' berarti 3. Itulah mengapa disebut segitiga!",
      },
      {
        pertanyaan: "Angka manakah yang merupakan bilangan genap?",
        pilihan: ["3", "5", "7", "8"],
        jawaban: "8",
        penjelasan:
          "Bilangan genap adalah bilangan yang habis dibagi 2. Dari pilihan: 3÷2=1 sisa 1 (ganjil), 5÷2=2 sisa 1 (ganjil), 7÷2=3 sisa 1 (ganjil), 8÷2=4 sisa 0 ✓ (genap).",
      },
    ],
    SMP: [
      {
        pertanyaan: "Berapakah nilai x dari x + 3 = 7?",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
        penjelasan:
          "Untuk mencari x, pindahkan angka 3 ke ruas kanan dengan cara dikurangi: x = 7 - 3 = 4. Verifikasi: 4 + 3 = 7 ✓",
      },
      {
        pertanyaan: "Berapakah luas persegi dengan sisi 6 cm?",
        pilihan: ["12 cm²", "24 cm²", "36 cm²", "48 cm²"],
        jawaban: "36 cm²",
        penjelasan:
          "Rumus luas persegi = sisi × sisi = s². Jika sisi = 6 cm, maka luas = 6 × 6 = 36 cm². Bukan 12 (itu keliling/2) dan bukan 24 (itu keliling).",
      },
      {
        pertanyaan: "Berapakah akar kuadrat dari 144?",
        pilihan: ["10", "11", "12", "13"],
        jawaban: "12",
        penjelasan:
          "√144 = 12, karena 12 × 12 = 144. Cara cek: 10²=100, 11²=121, 12²=144 ✓, 13²=169.",
      },
      {
        pertanyaan: "Jika 2x = 16, berapakah nilai x?",
        pilihan: ["6", "7", "8", "9"],
        jawaban: "8",
        penjelasan:
          "Untuk mencari x, bagi kedua ruas dengan 2: x = 16 ÷ 2 = 8. Verifikasi: 2 × 8 = 16 ✓",
      },
      {
        pertanyaan: "Berapakah hasil dari (-5) × (-4)?",
        pilihan: ["-20", "-9", "9", "20"],
        jawaban: "20",
        penjelasan:
          "Aturan perkalian: negatif × negatif = positif. Jadi (-5) × (-4) = +20. Ingat: min × min = plus, min × plus = min.",
      },
      {
        pertanyaan:
          "Keliling lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
        pilihan: ["22 cm", "44 cm", "66 cm", "88 cm"],
        jawaban: "44 cm",
        penjelasan:
          "Keliling lingkaran = 2πr = 2 × (22/7) × 7 = 2 × 22 = 44 cm. Ingat rumusnya: K = 2πr atau K = πd (d = diameter = 2r).",
      },
      {
        pertanyaan: "Berapakah FPB dari 12 dan 18?",
        pilihan: ["3", "4", "6", "9"],
        jawaban: "6",
        penjelasan:
          "Faktor dari 12: 1, 2, 3, 4, 6, 12. Faktor dari 18: 1, 2, 3, 6, 9, 18. Faktor persekutuan: 1, 2, 3, 6. FPB (terbesar) = 6.",
      },
    ],
    SMA: [
      {
        pertanyaan: "Turunan pertama dari f(x) = 2x² adalah...",
        pilihan: ["2x", "4x", "2", "4"],
        jawaban: "4x",
        penjelasan:
          "Aturan turunan pangkat: jika f(x) = axⁿ maka f'(x) = n·ax^(n-1). Untuk 2x²: turunkan pangkat jadi 2, kalikan koefisien: f'(x) = 2·2·x^(2-1) = 4x.",
      },
      {
        pertanyaan: "Nilai dari sin 30° adalah...",
        pilihan: ["√2/2", "√3/2", "1/2", "1"],
        jawaban: "1/2",
        penjelasan:
          "sin 30° = 1/2 adalah nilai yang harus dihafal. Ingat mnemonic segitiga istimewa: sin 30°=1/2, sin 45°=√2/2, sin 60°=√3/2, sin 90°=1.",
      },
      {
        pertanyaan: "Hasil dari ∫ 3x² dx adalah...",
        pilihan: ["6x", "x³ + C", "3x + C", "x² + C"],
        jawaban: "x³ + C",
        penjelasan:
          "Aturan integral pangkat: ∫xⁿ dx = x^(n+1)/(n+1) + C. Untuk 3x²: ∫3x² dx = 3·x^(2+1)/(2+1) + C = 3x³/3 + C = x³ + C.",
      },
      {
        pertanyaan: "Jika log₂(8) = n, maka n adalah...",
        pilihan: ["2", "3", "4", "6"],
        jawaban: "3",
        penjelasan:
          "log₂(8) = n artinya 2ⁿ = 8. Karena 2³ = 8, maka n = 3. Logaritma menanyakan: 'pangkat berapa yang membuat basisnya sama dengan argumennya?'",
      },
      {
        pertanyaan:
          "Persamaan lingkaran dengan pusat (0,0) dan jari-jari 5 adalah...",
        pilihan: ["x+y=25", "x²+y²=5", "x²+y²=25", "x²-y²=25"],
        jawaban: "x²+y²=25",
        penjelasan:
          "Persamaan lingkaran berpusat di (0,0) adalah x² + y² = r². Dengan r = 5, maka r² = 25. Jadi persamaannya x² + y² = 25.",
      },
      {
        pertanyaan: "Nilai limit x→0 dari (sin x)/x adalah...",
        pilihan: ["0", "∞", "1", "tak terdefinisi"],
        jawaban: "1",
        penjelasan:
          "lim(x→0) sin(x)/x = 1 adalah limit trigonometri fundamental yang wajib dihafal. Meski di x=0 bentuknya 0/0 (tak tentu), limitnya mendekati 1 (dapat dibuktikan dengan aturan L'Hôpital atau deret Taylor).",
      },
      {
        pertanyaan: "Suku ke-10 dari barisan aritmatika 2, 5, 8, ... adalah...",
        pilihan: ["27", "29", "31", "33"],
        jawaban: "29",
        penjelasan:
          "Barisan aritmatika: a=2 (suku pertama), b=3 (beda). Rumus suku ke-n: Un = a + (n-1)b. U₁₀ = 2 + (10-1)×3 = 2 + 27 = 29.",
      },
    ],
  },
  Sains: {
    SD: [
      {
        pertanyaan: "Hewan apa yang memiliki sayap dan bisa terbang?",
        pilihan: ["Ikan", "Burung", "Kelinci", "Kura-kura"],
        jawaban: "Burung",
        penjelasan:
          "Burung memiliki sayap yang berfungsi untuk terbang. Ikan bergerak di air, kelinci berlari di darat, dan kura-kura berjalan lambat. Hanya burung yang secara umum bisa terbang menggunakan sayapnya.",
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
        penjelasan:
          "Fotosintesis adalah proses tanaman membuat makanan sendiri. Bahan yang dibutuhkan: Sinar Matahari (sumber energi) + Air (dari tanah/akar) + CO₂ (dari udara). Hasilnya: glukosa (makanan) + oksigen.",
      },
      {
        pertanyaan: "Benda apa yang bisa mengalirkan listrik?",
        pilihan: ["Karet", "Kayu", "Tembaga", "Plastik"],
        jawaban: "Tembaga",
        penjelasan:
          "Tembaga adalah konduktor (penghantar listrik) yang baik karena elektron-elektronnya bebas bergerak. Karet, kayu, dan plastik adalah isolator yang tidak bisa mengalirkan listrik, itulah mengapa kabel listrik dibungkus plastik.",
      },
      {
        pertanyaan: "Planet manakah yang paling dekat dengan Matahari?",
        pilihan: ["Venus", "Bumi", "Merkurius", "Mars"],
        jawaban: "Merkurius",
        penjelasan:
          "Urutan planet dari Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. Merkurius adalah yang terdekat, sehingga suhunya bisa sangat panas di siang hari (+430°C) dan sangat dingin di malam hari.",
      },
      {
        pertanyaan: "Organ manakah yang berfungsi memompa darah?",
        pilihan: ["Paru-paru", "Hati", "Lambung", "Jantung"],
        jawaban: "Jantung",
        penjelasan:
          "Jantung adalah pompa otot yang bekerja tanpa henti memompa darah ke seluruh tubuh. Paru-paru untuk bernapas, hati untuk menyaring racun & menghasilkan empedu, dan lambung untuk mencerna makanan.",
      },
      {
        pertanyaan: "Hewan yang bertelur dan hidup di dua alam disebut...",
        pilihan: ["Mamalia", "Reptil", "Amfibi", "Aves"],
        jawaban: "Amfibi",
        penjelasan:
          "Amfibi berasal dari bahasa Yunani 'amphi' (dua) + 'bios' (kehidupan). Mereka bisa hidup di darat dan air. Contoh: katak, salamander. Mamalia menyusui, reptil bersisik, Aves adalah burung.",
      },
      {
        pertanyaan: "Air akan mendidih pada suhu berapa derajat Celsius?",
        pilihan: ["80°C", "90°C", "100°C", "110°C"],
        jawaban: "100°C",
        penjelasan:
          "Air murni mendidih pada 100°C di tekanan 1 atmosfer (permukaan laut). Di pegunungan, tekanan udara lebih rendah sehingga air mendidih di bawah 100°C. Mendidih artinya terjadi perubahan wujud dari cair ke gas (uap).",
      },
    ],
    SMP: [
      {
        pertanyaan: "Sel yang tidak memiliki membran inti disebut...",
        pilihan: ["Eukariotik", "Prokariotik", "Organisme", "Sitoplasma"],
        jawaban: "Prokariotik",
        penjelasan:
          "Prokariotik (pro = sebelum, karyon = inti) adalah sel tanpa membran inti — materi genetiknya tersebar bebas di sitoplasma. Contoh: bakteri. Eukariotik memiliki membran inti yang jelas. Contoh: sel manusia, tumbuhan, jamur.",
      },
      {
        pertanyaan: "Rumus kimia air adalah...",
        pilihan: ["CO₂", "NaCl", "H₂O", "O₂"],
        jawaban: "H₂O",
        penjelasan:
          "Air terdiri dari 2 atom Hidrogen (H) dan 1 atom Oksigen (O), sehingga rumusnya H₂O. CO₂ = karbon dioksida, NaCl = garam dapur, O₂ = oksigen yang kita hirup.",
      },
      {
        pertanyaan: "Proses perubahan zat cair menjadi gas disebut...",
        pilihan: ["Kondensasi", "Membeku", "Menguap", "Mencair"],
        jawaban: "Menguap",
        penjelasan:
          "Menguap (evaporasi) = cair → gas. Kondensasi = gas → cair. Membeku = cair → padat. Mencair/meleleh = padat → cair. Contoh menguap: air yang dipanaskan akan berubah menjadi uap air.",
      },
      {
        pertanyaan:
          "Energi yang tersimpan dalam makanan diukur dalam satuan...",
        pilihan: ["Watt", "Newton", "Kalori", "Joule"],
        jawaban: "Kalori",
        penjelasan:
          "Kalori (kal) adalah satuan energi yang umum digunakan dalam konteks gizi/makanan. 1 kkal (kilokalori) = energi untuk memanaskan 1 kg air sebesar 1°C. Watt = satuan daya, Newton = satuan gaya.",
      },
      {
        pertanyaan: "Lapisan terluar bumi disebut...",
        pilihan: ["Mantel", "Inti", "Kerak", "Litosfer"],
        jawaban: "Kerak",
        penjelasan:
          "Struktur bumi dari luar ke dalam: Kerak (tipis, tempat kita berpijak) → Mantel (lapisan tebal batuan semi-cair) → Inti luar (besi cair) → Inti dalam (besi padat). Litosfer mencakup kerak + bagian atas mantel.",
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
        penjelasan:
          "Hukum Newton I (Hukum Inersia): benda cenderung mempertahankan keadaannya. Benda diam tetap diam, benda bergerak tetap bergerak SELAMA tidak ada resultan gaya luar. Itulah mengapa kita terdorong ke depan saat mobil berhenti mendadak.",
      },
      {
        pertanyaan:
          "Proses pembelahan sel yang menghasilkan 2 sel anak identik disebut...",
        pilihan: ["Meiosis", "Mitosis", "Fertilisasi", "Diferensiasi"],
        jawaban: "Mitosis",
        penjelasan:
          "Mitosis: 1 sel induk → 2 sel anak yang identik (kromosom sama). Digunakan untuk pertumbuhan dan perbaikan jaringan. Meiosis: 1 sel induk → 4 sel anak dengan kromosom setengah (untuk reproduksi seksual/sel gamet).",
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
        penjelasan:
          "Charles Darwin (1809-1882) mempublikasikan 'On the Origin of Species' (1859) yang berisi teori evolusi melalui seleksi alam. Newton menemukan hukum gravitasi, Einstein teori relativitas, Mendel hukum pewarisan sifat.",
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
        penjelasan:
          "Atom terdiri dari: Inti atom (nukleus) yang berisi PROTON (bermuatan +) dan NEUTRON (netral/tidak bermuatan), dikelilingi ELEKTRON (bermuatan -) yang bergerak di kulit atom. Elektron TIDAK ada di inti.",
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
        penjelasan:
          "Hukum Kekekalan Energi (Termodinamika I): energi tidak bisa diciptakan dari nol dan tidak bisa dimusnahkan. Energi hanya bisa DIUBAH dari satu bentuk ke bentuk lain. Contoh: energi kimia BBM → energi gerak mobil + energi panas.",
      },
      {
        pertanyaan: "Organel sel yang disebut 'dapur sel' adalah...",
        pilihan: ["Mitokondria", "Kloroplas", "Ribosom", "Nukleus"],
        jawaban: "Kloroplas",
        penjelasan:
          "Kloroplas disebut 'dapur sel' karena di sinilah tempat berlangsung fotosintesis — proses memasak makanan (glukosa) dari bahan baku CO₂ dan H₂O menggunakan energi matahari. Mitokondria disebut 'pembangkit energi sel'.",
      },
      {
        pertanyaan: "pH larutan asam berada di bawah...",
        pilihan: ["5", "6", "7", "8"],
        jawaban: "7",
        penjelasan:
          "Skala pH: 0-6 = asam, 7 = netral, 8-14 = basa. Asam memiliki pH < 7, basa memiliki pH > 7. Contoh asam: cuka (pH≈3), jeruk (pH≈4). Contoh basa: sabun (pH≈9), pemutih (pH≈12).",
      },
      {
        pertanyaan: "Reaksi kimia yang melepaskan panas disebut reaksi...",
        pilihan: ["Endoterm", "Eksoterm", "Redoks", "Hidrolisis"],
        jawaban: "Eksoterm",
        penjelasan:
          "Eksoterm (exo = keluar) = reaksi yang MELEPASKAN energi panas ke lingkungan. Contoh: pembakaran kayu, bom meledak. Endoterm (endo = masuk) = reaksi yang MENYERAP panas dari lingkungan. Contoh: fotosintesis, memasak.",
      },
      {
        pertanyaan: "Hukum Mendel I menyatakan tentang...",
        pilihan: ["Dominansi", "Segregasi", "Asortasi bebas", "Mutasi"],
        jawaban: "Segregasi",
        penjelasan:
          "Hukum Mendel I = Hukum Segregasi: pasangan gen (alel) akan memisah (segregasi) saat pembentukan sel gamet, sehingga tiap gamet hanya membawa satu alel dari setiap pasangan. Hukum Mendel II = Asortasi bebas (pemisahan gen secara independen).",
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
        penjelasan:
          "Proklamasi kemerdekaan Indonesia pada 17 Agustus 1945 dibacakan oleh Ir. Soekarno dan Drs. Mohammad Hatta. Teks proklamasi ditandatangani atas nama bangsa Indonesia oleh keduanya. Soeharto adalah presiden ke-2, Syahrir adalah perdana menteri pertama.",
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
        penjelasan:
          "Proklamasi kemerdekaan Indonesia dibacakan pada 17 Agustus 1945, sehari setelah Jepang menyerah kepada Sekutu (15 Agustus 1945). 1 Juni 1945 = hari lahir Pancasila. 28 Oktober 1928 = Sumpah Pemuda.",
      },
      {
        pertanyaan: "Ibu kota Indonesia adalah...",
        pilihan: ["Surabaya", "Bandung", "Jakarta", "Yogyakarta"],
        jawaban: "Jakarta",
        penjelasan:
          "Jakarta (sebelumnya Batavia di masa kolonial Belanda) adalah ibu kota dan kota terbesar Indonesia. Catatan: Indonesia sedang membangun ibu kota baru bernama Nusantara di Kalimantan Timur.",
      },
      {
        pertanyaan: "Sumpah Pemuda terjadi pada tahun...",
        pilihan: ["1920", "1925", "1928", "1930"],
        jawaban: "1928",
        penjelasan:
          "Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II di Batavia (Jakarta). Isinya: bertanah air satu Indonesia, berbangsa satu Indonesia, dan menjunjung bahasa persatuan bahasa Indonesia.",
      },
      {
        pertanyaan: "Garuda Pancasila adalah lambang negara...",
        pilihan: ["Malaysia", "Indonesia", "Filipina", "Thailand"],
        jawaban: "Indonesia",
        penjelasan:
          "Garuda Pancasila adalah lambang negara Indonesia. Gambar burung Garuda dengan perisai berisi simbol-simbol Pancasila, pita bertuliskan 'Bhinneka Tunggal Ika' di bawahnya.",
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
        penjelasan:
          "Cut Nyak Dien adalah pahlawan nasional dari Aceh yang gigih melawan penjajahan Belanda bersama suaminya Teuku Umar. R.A. Kartini = pahlawan emansipasi wanita dari Jawa, Dewi Sartika = pelopor pendidikan wanita dari Sunda.",
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
        penjelasan:
          "Pancasila resmi menjadi dasar negara pada 18 Agustus 1945 saat PPKI mengesahkan UUD 1945. Meski 1 Juni 1945 diperingati sebagai hari lahir Pancasila (saat Soekarno berpidato), tanggal pengesahan resminya adalah 18 Agustus 1945.",
      },
    ],
    SMP: [
      {
        pertanyaan: "Kerajaan Hindu pertama di Nusantara adalah...",
        pilihan: ["Sriwijaya", "Majapahit", "Kutai", "Mataram"],
        jawaban: "Kutai",
        penjelasan:
          "Kerajaan Kutai di Kalimantan Timur (abad ke-4 M) adalah kerajaan Hindu tertua di Nusantara, dibuktikan dengan prasasti Yupa. Sriwijaya = kerajaan Buddha besar. Majapahit = kerajaan Hindu-Buddha terbesar. Mataram ada dua: Hindu dan Islam.",
      },
      {
        pertanyaan: "Siapakah pendiri Kerajaan Majapahit?",
        pilihan: ["Hayam Wuruk", "Raden Wijaya", "Gajah Mada", "Ken Arok"],
        jawaban: "Raden Wijaya",
        penjelasan:
          "Raden Wijaya mendirikan Kerajaan Majapahit pada 1293 M setelah berhasil mengusir pasukan Mongol (Kubilai Khan). Hayam Wuruk = raja terbesar Majapahit. Gajah Mada = mahapatih yang mengucapkan Sumpah Palapa. Ken Arok = pendiri Singasari.",
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
        penjelasan:
          "Pada 16 Agustus 1945, para pemuda (Sukarni, Wikana, dll) menculik Soekarno-Hatta ke Rengasdengklok, Karawang, untuk mendesak agar proklamasi segera dilakukan tanpa menunggu Jepang. Keesokan harinya, 17 Agustus 1945, proklamasi dikumandangkan.",
      },
      {
        pertanyaan:
          "Strategi VOC menguasai perdagangan rempah-rempah disebut...",
        pilihan: ["Cultuurstelsel", "Extirpatie", "Monopoli", "Tanam Paksa"],
        jawaban: "Monopoli",
        penjelasan:
          "VOC menguasai perdagangan rempah dengan sistem monopoli — hanya VOC yang boleh membeli dan menjual rempah-rempah. Cultuurstelsel = Tanam Paksa (masa pemerintah Belanda, bukan VOC). Extirpatie = pemusnahan tanaman rempah di luar wilayah VOC.",
      },
      {
        pertanyaan: "Perang Diponegoro berlangsung dari tahun...",
        pilihan: ["1825–1830", "1830–1835", "1820–1825", "1810–1815"],
        jawaban: "1825–1830",
        penjelasan:
          "Perang Diponegoro (1825-1830) dipimpin oleh Pangeran Diponegoro melawan penjajahan Belanda di Jawa. Perang ini menjadi salah satu perang paling mematikan bagi Belanda — mereka harus mengerahkan pasukan besar dan menghabiskan biaya sangat besar.",
      },
      {
        pertanyaan: "Kerajaan Islam pertama di Nusantara adalah...",
        pilihan: ["Demak", "Samudra Pasai", "Mataram", "Ternate"],
        jawaban: "Samudra Pasai",
        penjelasan:
          "Kerajaan Samudra Pasai di Aceh (abad ke-13 M) adalah kerajaan Islam pertama di Nusantara. Demak adalah kerajaan Islam pertama di Jawa (abad ke-15). Keislaman Samudra Pasai juga dikonfirmasi oleh kunjungan Ibnu Battutah.",
      },
      {
        pertanyaan: "Sumpah Palapa diucapkan oleh...",
        pilihan: ["Hayam Wuruk", "Raden Wijaya", "Gajah Mada", "Ken Arok"],
        jawaban: "Gajah Mada",
        penjelasan:
          "Gajah Mada, Mahapatih Majapahit, mengucapkan Sumpah Palapa: tidak akan menikmati palapa (rempah/kemewahan) sebelum mempersatukan Nusantara di bawah Majapahit. Sumpah ini diucapkan saat pengangkatannya sebagai Mahapatih pada 1336 M.",
      },
    ],
    SMA: [
      {
        pertanyaan: "Konferensi Asia-Afrika diadakan di kota...",
        pilihan: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
        jawaban: "Bandung",
        penjelasan:
          "Konferensi Asia-Afrika (KAA) diadakan di Bandung pada 18-24 April 1955, dihadiri 29 negara Asia-Afrika. Hasilnya: Dasasila Bandung yang menjadi landasan hubungan antar negara berkembang. Itulah mengapa disebut 'Semangat Bandung'.",
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
        penjelasan:
          "GNB didirikan oleh 5 pemimpin: Soekarno (Indonesia), Nehru (India), Tito (Yugoslavia), Nasser (Mesir), dan Nkrumah (Ghana) pada Konferensi Belgrade 1961. GNB bertujuan menghindari keterikatan pada blok Barat (AS) maupun Timur (USSR).",
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
        penjelasan:
          "Dekrit Presiden 5 Juli 1959 dikeluarkan Soekarno berisi: (1) Kembali ke UUD 1945 (membubarkan UUD Sementara 1950), (2) Membubarkan Konstituante, (3) Membentuk MPRS dan DPAS. Ini menandai awal era Demokrasi Terpimpin.",
      },
      {
        pertanyaan: "Reformasi 1998 dipicu oleh jatuhnya Presiden...",
        pilihan: ["Soekarno", "B.J. Habibie", "Soeharto", "Megawati"],
        jawaban: "Soeharto",
        penjelasan:
          "Reformasi 1998 adalah gerakan mahasiswa yang menuntut Soeharto mundur setelah 32 tahun berkuasa (1966-1998). Krisis ekonomi Asia 1997-1998 memperparah kondisi, puncaknya tragedi Trisakti. Soeharto mundur 21 Mei 1998, digantikan B.J. Habibie.",
      },
      {
        pertanyaan:
          "Perjanjian yang mengakui kedaulatan Indonesia oleh Belanda ditandatangani di...",
        pilihan: ["Den Haag", "Amsterdam", "Paris", "Linggarjati"],
        jawaban: "Den Haag",
        penjelasan:
          "Konferensi Meja Bundar (KMB) berlangsung di Den Haag, Belanda, pada 23 Agustus - 2 November 1949. Hasilnya: Belanda mengakui kedaulatan RIS (Republik Indonesia Serikat). Linggarjati adalah perjanjian berbeda (1947) yang belum mengakui kedaulatan penuh.",
      },
      {
        pertanyaan: "Operasi Trikora bertujuan untuk merebut wilayah...",
        pilihan: ["Timor Timur", "Aceh", "Irian Barat", "Kalimantan Utara"],
        jawaban: "Irian Barat",
        penjelasan:
          "Operasi Trikora (Tri Komando Rakyat) dicanangkan Soekarno pada 19 Desember 1961 untuk merebut Irian Barat (Papua) dari Belanda. Irian Barat akhirnya diserahkan kepada Indonesia melalui Perjanjian New York 1962, diikuti PEPERA 1969.",
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
        penjelasan:
          "Surat Perintah Sebelas Maret (Supersemar) ditandatangani Soekarno pada 11 Maret 1966 — memberikan kewenangan kepada Soeharto untuk memulihkan keamanan. Supersemar menjadi legitimasi Soeharto mengambil alih kekuasaan dan memulai Orde Baru.",
      },
    ],
  },
  "Bahasa Inggris": {
    SD: [
      {
        pertanyaan: "What is the English word for 'Kucing'?",
        pilihan: ["Dog", "Bird", "Cat", "Fish"],
        jawaban: "Cat",
        penjelasan:
          "Kucing = Cat. Dog = Anjing, Bird = Burung, Fish = Ikan. Cara mudah mengingat: 'Cat' terdengar seperti 'ke-t' dan kucing sering bersuara 'meow'. Di Inggris, kucing peliharaan sangat populer!",
      },
      {
        pertanyaan: "How many days are there in a week?",
        pilihan: ["Five", "Six", "Seven", "Eight"],
        jawaban: "Seven",
        penjelasan:
          "There are 7 days in a week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Seminggu = 7 hari. Ingat: weekdays (hari kerja) ada 5 hari, ditambah weekend (Sabtu-Minggu) = 7 hari.",
      },
      {
        pertanyaan: "Which color is the sky on a clear day?",
        pilihan: ["Green", "Blue", "Red", "Yellow"],
        jawaban: "Blue",
        penjelasan:
          "The sky is Blue (biru) on a clear day. Langit berwarna biru karena cahaya matahari dipencarkan oleh atmosfer — cahaya biru lebih banyak dipencarkan dibanding warna lain (fenomena Rayleigh scattering).",
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
        penjelasan:
          "Good morning = Selamat pagi (digunakan dari pagi hingga siang). Good afternoon = Selamat siang/sore. Good evening = Selamat malam (saat matahari terbenam). Good night = Selamat tidur (saat akan tidur/berpisah di malam hari).",
      },
      {
        pertanyaan: "Choose the correct spelling for the fruit 'Apel'.",
        pilihan: ["Aple", "Apple", "Appel", "Apel"],
        jawaban: "Apple",
        penjelasan:
          "The correct spelling is 'Apple' — dengan dua huruf 'p' dan diakhiri 'le'. Banyak yang salah menulis 'Aple' atau 'Appel'. Ingat: Apple = A-P-P-L-E.",
      },
      {
        pertanyaan: "What is the opposite of 'big'?",
        pilihan: ["Tall", "Heavy", "Small", "Long"],
        jawaban: "Small",
        penjelasan:
          "Opposite (lawan kata) dari 'big' (besar) adalah 'small' (kecil). Tall = tinggi (lawannya short), Heavy = berat (lawannya light), Long = panjang (lawannya short).",
      },
      {
        pertanyaan: "Which animal says 'Moo'?",
        pilihan: ["Cat", "Cow", "Dog", "Duck"],
        jawaban: "Cow",
        penjelasan:
          "Cow (sapi) makes the sound 'Moo'. Cat = meow, Dog = woof/bark, Duck = quack. Dalam bahasa Indonesia, sapi bersuara 'moo' pun sama dengan bahasa Inggris!",
      },
    ],
    SMP: [
      {
        pertanyaan: "Choose the correct sentence: She ___ to school every day.",
        pilihan: ["go", "goes", "going", "gone"],
        jawaban: "goes",
        penjelasan:
          "Subject 'She' adalah orang ketiga tunggal (third person singular). Dalam Simple Present Tense, kata kerja ditambah -s/-es untuk he/she/it. 'Go' menjadi 'goes'. Rumus: He/She/It + V-s/es. (I/You/We/They + V).",
      },
      {
        pertanyaan: "What is the past tense of 'eat'?",
        pilihan: ["Eated", "Eating", "Ate", "Eaten"],
        jawaban: "Ate",
        penjelasan:
          "'Eat' adalah kata kerja tidak beraturan (irregular verb). Past tense-nya adalah 'Ate' (bukan 'Eated'). Eating = present participle (sedang makan). Eaten = past participle (digunakan dengan have: 'I have eaten'). Hafal: eat-ate-eaten.",
      },
      {
        pertanyaan: "Which word is a noun?",
        pilihan: ["Beautiful", "Run", "Happiness", "Quickly"],
        jawaban: "Happiness",
        penjelasan:
          "Noun (kata benda) = nama orang, tempat, benda, atau konsep. Happiness (kebahagiaan) = noun abstrak. Beautiful = adjective (kata sifat). Run = verb (kata kerja). Quickly = adverb (kata keterangan, biasanya berakhiran -ly).",
      },
      {
        pertanyaan: "I have lived here ___ 2010.",
        pilihan: ["for", "since", "during", "while"],
        jawaban: "since",
        penjelasan:
          "'Since' digunakan dengan TITIK WAKTU tertentu (tahun, tanggal, hari). 'For' digunakan dengan DURASI waktu (for 5 years, for a long time). Contoh: 'I have lived here since 2010' (sejak 2010) vs 'I have lived here for 10 years' (selama 10 tahun).",
      },
      {
        pertanyaan: "The synonym of 'brave' is...",
        pilihan: ["Coward", "Fearful", "Courageous", "Weak"],
        jawaban: "Courageous",
        penjelasan:
          "Synonym = kata yang bermakna sama/mirip. Brave = Courageous = berani. Coward = pengecut (antonim brave). Fearful = takut (antonim brave). Weak = lemah (bukan sinonim brave). Sinonim lain 'brave': bold, daring, heroic.",
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
        penjelasan:
          "Artikel 'an' digunakan sebelum kata yang diawali bunyi VOKAL (a, e, i, o, u). 'Honour' diucapkan 'onor' (huruf h tidak berbunyi), sehingga menggunakan 'an'. Honest = 'onest', umbrella = 'umbrela', elephant = 'elefant' — semuanya perlu 'an'.",
      },
      {
        pertanyaan: "What does 'frequently' mean?",
        pilihan: ["Rarely", "Often", "Never", "Sometimes"],
        jawaban: "Often",
        penjelasan:
          "'Frequently' = sering = Often. Ini adalah adverb of frequency (kata keterangan frekuensi). Urutan dari paling sering: Always (100%) > Usually > Often/Frequently (~70%) > Sometimes (~50%) > Rarely/Seldom > Never (0%).",
      },
    ],
    SMA: [
      {
        pertanyaan: "If I ___ rich, I would travel the world. (Conditional II)",
        pilihan: ["am", "was", "were", "be"],
        jawaban: "were",
        penjelasan:
          "Conditional II (unreal/hypothetical present/future) menggunakan: If + subject + WERE + ..., subject + would + V1. 'Were' digunakan untuk SEMUA subjek (I, he, she, it, we, they) dalam conditional II — bukan 'was'. Ini adalah bentuk subjunctive mood.",
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
        penjelasan:
          "Kalimat aktif 'built' (V2/past tense) diubah ke pasif: Subject + was/were + V3 + ... Karena aktifnya Past Tense, pasifnya menggunakan 'was/were + V3'. 'Built' adalah V3 dari 'build'. Jadi: 'This bridge was built in 1990'.",
      },
      {
        pertanyaan: "She suggested that he ___ more careful.",
        pilihan: ["is", "was", "be", "being"],
        jawaban: "be",
        penjelasan:
          "Kata kerja seperti suggest, recommend, insist, demand, propose + that clause menggunakan SUBJUNCTIVE: 'be' (bukan is/was/were) untuk semua subjek. Ini disebut 'mandative subjunctive'. Contoh: 'I suggest that he be on time'.",
      },
      {
        pertanyaan: "What is the meaning of the idiom 'break a leg'?",
        pilihan: ["Get injured", "Good luck", "Run fast", "Be careful"],
        jawaban: "Good luck",
        penjelasan:
          "'Break a leg' adalah idiom bahasa Inggris yang berarti 'Good luck' (semoga berhasil). Idiom sering diucapkan kepada aktor/performer sebelum tampil. Asal-usulnya ada beberapa teori, salah satunya dari tradisi teater yang percaya mengucapkan 'good luck' justru membawa sial.",
      },
      {
        pertanyaan: "Which word is an antonym of 'benevolent'?",
        pilihan: ["Kind", "Generous", "Malevolent", "Warm"],
        jawaban: "Malevolent",
        penjelasan:
          "Benevolent = baik hati, dermawan. Antonym (lawan kata) = Malevolent = jahat, berniat buruk. Prefix 'bene-' = baik, 'male-' = buruk. Kind, Generous, Warm adalah sinonim benevolent. Contoh: 'a benevolent king' vs 'a malevolent villain'.",
      },
      {
        pertanyaan: "She asked me where ___ from.",
        pilihan: ["do I come", "I come", "I came", "did I come"],
        jawaban: "I came",
        penjelasan:
          "Ini adalah Indirect/Reported Question. Kalimat langsung: 'Where do you come from?' Diubah ke indirect: subjek + kata kerja (tanpa auxiliary di depan), dan tense mundur (do → came). Jadi: 'She asked me where I came from.' (BUKAN 'where did I come' — tidak ada 'did' di indirect question).",
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
        penjelasan:
          "Protagonist = tokoh utama/karakter utama dalam sebuah cerita, biasanya yang menjadi pusat konflik. Antagonist = tokoh jahat/penentang protagonis. Villain = penjahat. Setting = latar/tempat cerita. Narrator = pencerita.",
      },
    ],
  },
  Teknologi: {
    SD: [
      {
        pertanyaan: "Alat apa yang digunakan untuk mengetik di komputer?",
        pilihan: ["Mouse", "Monitor", "Keyboard", "Speaker"],
        jawaban: "Keyboard",
        penjelasan:
          "Keyboard adalah perangkat input untuk mengetik huruf, angka, dan simbol di komputer. Mouse untuk menggerakkan kursor, Monitor untuk menampilkan gambar, Speaker untuk mengeluarkan suara.",
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
        penjelasan:
          "Tombol Delete menghapus karakter di DEPAN kursor. Berbeda dengan Backspace yang menghapus karakter di BELAKANG kursor. Untuk menyimpan: Ctrl+S, mencetak: Ctrl+P.",
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
        penjelasan:
          "WWW = World Wide Web adalah sistem informasi di internet yang memungkinkan dokumen/halaman web terhubung satu sama lain melalui hyperlink. WWW ditemukan oleh Tim Berners-Lee pada 1989. Berbeda dengan internet — internet adalah infrastrukturnya, WWW adalah layanannya.",
      },
      {
        pertanyaan:
          "Alat berikut yang digunakan untuk mencetak dokumen adalah...",
        pilihan: ["Scanner", "Proyektor", "Printer", "Webcam"],
        jawaban: "Printer",
        penjelasan:
          "Printer adalah perangkat output yang mencetak dokumen digital menjadi fisik (kertas). Scanner kebalikannya — mengubah dokumen fisik menjadi digital. Proyektor menampilkan gambar di layar besar. Webcam untuk video call.",
      },
      {
        pertanyaan: "File dengan ekstensi .jpg biasanya berupa file...",
        pilihan: ["Video", "Gambar", "Musik", "Dokumen teks"],
        jawaban: "Gambar",
        penjelasan:
          "JPG/JPEG = format file gambar yang umum. Ekstensi lain: .png, .gif, .bmp = gambar. .mp4, .avi = video. .mp3, .wav = audio/musik. .doc/.docx = dokumen Word. .pdf = dokumen PDF.",
      },
      {
        pertanyaan:
          "Tombol apa yang digunakan untuk membuat huruf kapital sementara?",
        pilihan: ["Ctrl", "Alt", "Shift", "Tab"],
        jawaban: "Shift",
        penjelasan:
          "Shift ditekan bersamaan dengan huruf untuk membuat KAPITAL sementara. Caps Lock untuk mengunci kapital permanen. Ctrl untuk shortcut (Ctrl+C = copy, Ctrl+V = paste). Alt untuk menu/shortcut lain. Tab untuk pindah kolom/indentasi.",
      },
      {
        pertanyaan:
          "Apa nama alat untuk menggerakkan kursor di layar komputer?",
        pilihan: ["Keyboard", "Monitor", "Mouse", "CPU"],
        jawaban: "Mouse",
        penjelasan:
          "Mouse adalah perangkat input yang digerakkan tangan untuk mengontrol kursor di layar. Nama 'mouse' karena bentuknya menyerupai tikus dengan kabel sebagai 'ekor'. CPU (Central Processing Unit) adalah otak komputer yang memproses data.",
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
        penjelasan:
          "CPU = Central Processing Unit adalah 'otak' komputer yang menjalankan instruksi program. CPU memproses semua kalkulasi dan perintah. Semakin cepat CPU (diukur dalam GHz), semakin cepat komputer memproses data.",
      },
      {
        pertanyaan: "Sistem operasi yang dikembangkan oleh Microsoft adalah...",
        pilihan: ["macOS", "Linux", "Android", "Windows"],
        jawaban: "Windows",
        penjelasan:
          "Windows dikembangkan oleh Microsoft (Bill Gates). macOS = Apple. Linux = open source (Linus Torvalds). Android = Google (berbasis Linux). Windows adalah sistem operasi paling banyak digunakan di PC/laptop dunia.",
      },
      {
        pertanyaan:
          "Satuan kecepatan internet yang paling umum digunakan adalah...",
        pilihan: ["GHz", "MB", "Mbps", "dpi"],
        jawaban: "Mbps",
        penjelasan:
          "Mbps = Megabits per second, satuan kecepatan transfer data internet. Semakin besar Mbps, semakin cepat internet. GHz = frekuensi prosesor. MB = Megabyte (satuan kapasitas penyimpanan). dpi = dots per inch (resolusi gambar).",
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
        penjelasan:
          "RAM (Random Access Memory) menyimpan data sementara saat komputer aktif — seperti program yang sedang berjalan. Data di RAM hilang saat komputer dimatikan. Penyimpanan permanen ada di HDD/SSD. Semakin besar RAM, semakin banyak program yang bisa berjalan bersamaan.",
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
        penjelasan:
          "HTML = HyperText Markup Language adalah bahasa standar untuk membuat halaman web. HTML menggunakan tag-tag seperti <h1>, <p>, <img> untuk menstrukturkan konten halaman web. HTML bukan bahasa pemrograman, melainkan bahasa markup.",
      },
      {
        pertanyaan:
          "Perangkat yang mengubah sinyal digital menjadi sinyal internet disebut...",
        pilihan: ["Router", "Switch", "Modem", "Hub"],
        jawaban: "Modem",
        penjelasan:
          "Modem (Modulator-Demodulator) mengubah sinyal digital komputer menjadi sinyal analog (telepon/kabel) untuk dikirim via ISP, dan sebaliknya. Router mendistribusikan koneksi internet ke banyak perangkat via WiFi/kabel. Keduanya sering dikombinasikan dalam satu alat.",
      },
      {
        pertanyaan: "Program jahat yang merusak komputer disebut...",
        pilihan: ["Cookie", "Virus", "Browser", "Plugin"],
        jawaban: "Virus",
        penjelasan:
          "Virus komputer adalah program jahat yang menyebar dan merusak sistem. Jenis malware lain: worm, trojan, ransomware, spyware. Cookie = file kecil yang disimpan browser untuk mengingat preferensi. Browser = aplikasi untuk browsing internet. Plugin = ekstensi tambahan.",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Dalam pemrograman, struktur pengulangan yang sudah diketahui jumlah iterasinya menggunakan...",
        pilihan: ["while", "do-while", "for", "if-else"],
        jawaban: "for",
        penjelasan:
          "Loop 'for' digunakan jika jumlah iterasi sudah DIKETAHUI. Contoh: for(i=0; i<10; i++) akan berulang tepat 10 kali. Loop 'while' digunakan jika kondisi pengulangan tidak pasti. 'do-while' mirip while tapi minimal berjalan sekali. 'if-else' bukan struktur pengulangan.",
      },
      {
        pertanyaan:
          "Protokol yang digunakan untuk transfer file di internet adalah...",
        pilihan: ["HTTP", "SMTP", "FTP", "DNS"],
        jawaban: "FTP",
        penjelasan:
          "FTP (File Transfer Protocol) khusus untuk transfer file antar komputer via internet. HTTP = protokol web browser. SMTP = protokol pengiriman email (Simple Mail Transfer Protocol). DNS = Domain Name System, menerjemahkan domain (google.com) menjadi IP address.",
      },
      {
        pertanyaan:
          "Sistem bilangan yang hanya menggunakan angka 0 dan 1 disebut...",
        pilihan: ["Oktal", "Desimal", "Heksadesimal", "Biner"],
        jawaban: "Biner",
        penjelasan:
          "Biner (basis 2) hanya menggunakan 0 dan 1 — bahasa dasar komputer karena komputer bekerja dengan sinyal ON (1) dan OFF (0). Desimal = basis 10 (0-9). Oktal = basis 8 (0-7). Heksadesimal = basis 16 (0-9, A-F).",
      },
      {
        pertanyaan:
          "Dalam basis data relasional, perintah SQL untuk mengambil data adalah...",
        pilihan: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        jawaban: "SELECT",
        penjelasan:
          "SQL CRUD: SELECT = Read (baca/ambil data), INSERT = Create (tambah data baru), UPDATE = Update (ubah data), DELETE = Delete (hapus data). Contoh: SELECT * FROM mahasiswa WHERE nilai > 80;",
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
        penjelasan:
          "4 pilar OOP: Inheritance = pewarisan sifat/method dari class induk ke class anak. Encapsulation = penyembunyian data internal. Polymorphism = satu interface, banyak bentuk. Abstraction = menyembunyikan kompleksitas, hanya menampilkan fitur penting.",
      },
      {
        pertanyaan:
          "Algoritma pengurutan yang bekerja dengan membandingkan elemen berdekatan secara berulang disebut...",
        pilihan: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
        jawaban: "Bubble Sort",
        penjelasan:
          "Bubble Sort membandingkan elemen berdekatan dan menukar jika urutannya salah — elemen terbesar 'menggelembung' ke akhir seperti gelembung. Ini algoritma paling sederhana tapi paling lambat O(n²). Quick Sort = O(n log n), lebih efisien untuk data besar.",
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
        penjelasan:
          "API = Application Programming Interface adalah antarmuka yang memungkinkan dua aplikasi berkomunikasi/bertukar data. Contoh: aplikasi cuaca menggunakan API dari BMKG untuk mendapatkan data cuaca. API seperti 'pelayan restoran' yang menjembatani pelanggan (app) dengan dapur (server/database).",
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
        penjelasan:
          "Sepak bola dimainkan dengan menendang bola dan mencetak gol ke gawang lawan. Basket = memasukkan bola ke ring/keranjang. Voli = memukul bola melewati net. Tenis = memukul bola dengan raket.",
      },
      {
        pertanyaan: "Berapa jumlah pemain dalam satu tim bola basket?",
        pilihan: ["5", "6", "7", "9"],
        jawaban: "5",
        penjelasan:
          "Satu tim basket terdiri dari 5 pemain di lapangan: point guard, shooting guard, small forward, power forward, dan center. Total dalam satu tim bisa lebih banyak, tapi yang bermain di lapangan hanya 5 orang sekaligus.",
      },
      {
        pertanyaan: "Olahraga renang dilakukan di...",
        pilihan: ["Lapangan", "Kolam", "Pantai saja", "Sungai saja"],
        jawaban: "Kolam",
        penjelasan:
          "Renang resmi/kompetisi dilakukan di kolam renang standar (25m atau 50m). Meski orang juga bisa berenang di pantai atau sungai, olahraga renang yang terstandar dilakukan di kolam dengan jalur (lane) yang diatur.",
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
        penjelasan:
          "Olahraga rutin bermanfaat: menjaga kebugaran jantung dan paru-paru, memperkuat otot dan tulang, meningkatkan imunitas, mengurangi stres, dan menjaga berat badan ideal. Olahraga justru meningkatkan energi, bukan membuat lemah.",
      },
      {
        pertanyaan: "Olahraga bela diri asli Indonesia adalah...",
        pilihan: ["Karate", "Taekwondo", "Pencak Silat", "Judo"],
        jawaban: "Pencak Silat",
        penjelasan:
          "Pencak Silat adalah seni bela diri tradisional asli Nusantara/Indonesia, telah diakui UNESCO sebagai Warisan Budaya Tak Benda pada 2019. Karate = Jepang, Taekwondo = Korea, Judo = Jepang.",
      },
      {
        pertanyaan: "Berapa set dalam pertandingan bulu tangkis tunggal?",
        pilihan: ["1 set", "2 set", "3 set", "5 set"],
        jawaban: "3 set",
        penjelasan:
          "Pertandingan bulu tangkis menggunakan sistem best of 3 sets. Setiap set dimenangkan oleh pemain yang pertama mencapai 21 poin (dengan selisih minimal 2 poin). Pemain yang memenangkan 2 set terlebih dahulu menjadi pemenang.",
      },
      {
        pertanyaan: "Alat pelindung kepala saat bersepeda disebut...",
        pilihan: ["Masker", "Helm", "Topi", "Pelindung"],
        jawaban: "Helm",
        penjelasan:
          "Helm adalah pelindung kepala wajib saat bersepeda untuk mencegah cedera kepala jika terjatuh. Helm terbuat dari bahan yang mampu menyerap benturan. Helm sepeda berbeda dengan helm motor — lebih ringan dan banyak ventilasi.",
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
        penjelasan:
          "Lapangan voli standar berukuran 9 x 18 meter, dibagi net di tengah menjadi dua sisi 9x9 meter. Tinggi net: 2,43 m (putra) dan 2,24 m (putri). Tiap tim terdiri dari 6 pemain di lapangan.",
      },
      {
        pertanyaan:
          "Teknik dasar renang gaya bebas menggunakan gerakan kaki seperti...",
        pilihan: ["Katak", "Gunting", "Naik-turun bergantian", "Melingkar"],
        jawaban: "Naik-turun bergantian",
        penjelasan:
          "Gaya bebas (freestyle/crawl) menggunakan tendangan flutter kick: kaki bergantian naik-turun secara terus-menerus. Gaya katak menggunakan gerakan kaki seperti katak. Gaya punggung mirip gaya bebas tapi terlentang.",
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
        penjelasan:
          "Sistem peredaran darah (kardiovaskular) terdiri dari jantung, pembuluh darah, dan darah. Darah mengangkut oksigen dari paru-paru ke seluruh sel tubuh, dan membawa CO₂ kembali ke paru-paru. Olahraga memperkuat jantung dan sistem ini.",
      },
      {
        pertanyaan:
          "Denyut jantung normal saat istirahat untuk remaja adalah...",
        pilihan: ["40-50 bpm", "60-100 bpm", "110-130 bpm", "130-150 bpm"],
        jawaban: "60-100 bpm",
        penjelasan:
          "Denyut jantung normal dewasa/remaja saat istirahat: 60-100 bpm (beats per minute). Atlet terlatih bisa lebih rendah (40-60 bpm) karena jantungnya lebih efisien. Di atas 100 bpm saat istirahat disebut takikardia, di bawah 60 disebut bradikardia.",
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
        penjelasan:
          "Aturan servis tenis meja: bola diletakkan di telapak tangan terbuka, dilempar ke atas minimal 16 cm, lalu dipukul saat turun. Bola harus memantul di sisi server dulu, melewati net, lalu memantul di sisi lawan.",
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
        penjelasan:
          "IMT = Berat Badan (kg) ÷ Tinggi Badan² (m²). Contoh: BB 60 kg, TB 1,65 m → IMT = 60 ÷ (1,65²) = 60 ÷ 2,72 = 22,05. Kategori: <18,5 = kurus, 18,5-24,9 = normal, 25-29,9 = gemuk, ≥30 = obesitas.",
      },
      {
        pertanyaan: "Olahraga yang melatih kelenturan tubuh disebut...",
        pilihan: ["Kardio", "Angkat beban", "Senam", "Lari sprint"],
        jawaban: "Senam",
        penjelasan:
          "Senam (khususnya senam artistik/ritmik) melatih kelenturan, keseimbangan, dan koordinasi. Kardio (lari, sepeda) melatih daya tahan jantung-paru. Angkat beban melatih kekuatan otot. Lari sprint melatih kecepatan.",
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
        penjelasan:
          "Saat olahraga intensif, otot kekurangan oksigen dan menghasilkan energi melalui glikolisis anaerob yang menghasilkan asam laktat. Penumpukan asam laktat menurunkan pH otot dan menyebabkan rasa terbakar/pegal. Ini normal dan hilang setelah istirahat + pemulihan.",
      },
      {
        pertanyaan:
          "Prinsip latihan FITT mencakup Frequency, Intensity, Time, dan...",
        pilihan: ["Technique", "Type", "Training", "Target"],
        jawaban: "Type",
        penjelasan:
          "FITT = Frequency (seberapa sering latihan/minggu), Intensity (seberapa keras, diukur dengan denyut jantung), Time (berapa lama setiap sesi), Type (jenis latihan apa: kardio, kekuatan, fleksibilitas). Prinsip ini membantu merancang program latihan yang efektif.",
      },
      {
        pertanyaan: "Cabang olahraga lari 42,195 km disebut...",
        pilihan: ["Sprint", "Triathlon", "Maraton", "Ultra run"],
        jawaban: "Maraton",
        penjelasan:
          "Maraton = lari sejauh 42,195 km. Jarak ini berasal dari legenda prajurit Yunani Pheidippides yang berlari dari Marathon ke Athena (490 SM). Sprint = lari jarak pendek (100m, 200m, 400m). Triathlon = gabungan renang, sepeda, lari.",
      },
      {
        pertanyaan:
          "Zat gizi utama yang menjadi sumber energi cepat saat olahraga adalah...",
        pilihan: ["Protein", "Lemak", "Karbohidrat", "Vitamin"],
        jawaban: "Karbohidrat",
        penjelasan:
          "Karbohidrat (glukosa/glikogen) adalah bahan bakar utama olahraga karena diubah menjadi energi paling cepat. Lemak digunakan saat olahraga intensitas rendah-sedang jangka panjang. Protein untuk pemulihan/pembangunan otot, bukan sumber energi utama.",
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
        penjelasan:
          "VO2 Max = volume oksigen maksimum yang bisa dikonsumsi tubuh per menit saat olahraga maksimal (ml/kg/menit). Ini adalah indikator terbaik kebugaran kardiorespirasi. Semakin tinggi VO2 Max, semakin fit seseorang. Atlet elite bisa mencapai 70-90 ml/kg/mnt.",
      },
      {
        pertanyaan:
          "Teknik lompat tinggi gaya Fosbury Flop dikembangkan oleh...",
        pilihan: ["Carl Lewis", "Dick Fosbury", "Jesse Owens", "Usain Bolt"],
        jawaban: "Dick Fosbury",
        penjelasan:
          "Dick Fosbury (Amerika) memperkenalkan teknik Fosbury Flop di Olimpiade Mexico 1968 — melompat dengan posisi punggung menghadap ke bawah/bar. Sebelumnya atlet menggunakan gaya Western Roll (perut ke bawah). Fosbury memenangkan emas dan tekniknya kini digunakan semua atlet lompat tinggi.",
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
        penjelasan:
          "Overtraining syndrome terjadi saat volume/intensitas latihan melebihi kemampuan tubuh untuk pulih. Gejalanya: performa menurun, kelelahan kronis, mood buruk, rentan cedera, gangguan tidur. Solusi: rest yang cukup, periodisasi latihan, nutrisi memadai.",
      },
    ],
  },
  "Agama Islam": {
    SD: [
      {
        pertanyaan: "Kitab suci umat Islam adalah...",
        pilihan: ["Injil", "Taurat", "Zabur", "Al-Qur'an"],
        jawaban: "Al-Qur'an",
        penjelasan:
          "Al-Qur'an adalah kitab suci umat Islam, diturunkan kepada Nabi Muhammad SAW melalui Malaikat Jibril. Taurat = kitab Nabi Musa (Yahudi). Zabur = kitab Nabi Daud. Injil = kitab Nabi Isa (Kristen). Al-Qur'an terdiri dari 30 juz, 114 surah, 6.236 ayat.",
      },
      {
        pertanyaan: "Jumlah rakaat shalat Subuh adalah...",
        pilihan: ["1", "2", "3", "4"],
        jawaban: "2",
        penjelasan:
          "Shalat Subuh = 2 rakaat. Ringkasan rakaat shalat fardhu: Subuh 2, Dzuhur 4, Ashar 4, Maghrib 3, Isya 4. Total = 17 rakaat per hari. Shalat Subuh dilakukan dari fajar shadiq hingga sebelum matahari terbit.",
      },
      {
        pertanyaan: "Nabi terakhir yang diutus Allah SWT adalah...",
        pilihan: ["Nabi Isa", "Nabi Musa", "Nabi Ibrahim", "Nabi Muhammad SAW"],
        jawaban: "Nabi Muhammad SAW",
        penjelasan:
          "Nabi Muhammad SAW adalah Nabi dan Rasul terakhir (khatamul anbiya) yang diutus Allah untuk seluruh umat manusia hingga akhir zaman. Beliau lahir di Makkah tahun 570 M dan wafat di Madinah tahun 632 M.",
      },
      {
        pertanyaan: "Rukun Islam yang pertama adalah...",
        pilihan: ["Shalat", "Puasa", "Syahadat", "Zakat"],
        jawaban: "Syahadat",
        penjelasan:
          "5 Rukun Islam berurutan: (1) Syahadat — bersaksi tiada Tuhan selain Allah dan Muhammad rasul-Nya, (2) Shalat 5 waktu, (3) Zakat, (4) Puasa Ramadhan, (5) Haji bagi yang mampu. Syahadat adalah pondasi utama keislaman seseorang.",
      },
      {
        pertanyaan: "Bulan puasa umat Islam disebut bulan...",
        pilihan: ["Syawal", "Ramadhan", "Dzulhijjah", "Muharram"],
        jawaban: "Ramadhan",
        penjelasan:
          "Ramadhan adalah bulan ke-9 dalam kalender Hijriah, wajib berpuasa dari fajar hingga maghrib. Syawal adalah bulan setelah Ramadhan (bulan Lebaran, 1 Syawal = Idul Fitri). Dzulhijjah = bulan haji (10 Dzulhijjah = Idul Adha). Muharram = bulan pertama Hijriah.",
      },
      {
        pertanyaan: "Tempat ibadah umat Islam disebut...",
        pilihan: ["Gereja", "Pura", "Masjid", "Vihara"],
        jawaban: "Masjid",
        penjelasan:
          "Masjid (dari bahasa Arab 'masjad' = tempat sujud) adalah tempat ibadah utama umat Islam. Gereja = Kristen/Katolik, Pura = Hindu, Vihara/Klenteng = Buddha. Masjid terbesar di dunia adalah Masjidil Haram di Makkah.",
      },
      {
        pertanyaan: "Malaikat yang bertugas menyampaikan wahyu adalah...",
        pilihan: ["Mikail", "Israfil", "Jibril", "Izrail"],
        jawaban: "Jibril",
        penjelasan:
          "Malaikat Jibril (Jibril/Gabriel) bertugas menyampaikan wahyu dari Allah kepada para Nabi. Mikail = mengurus rezeki dan hujan. Israfil = meniup sangkakala di hari kiamat. Izrail = mencabut nyawa (malaikat maut). Islam mengenal 10 malaikat yang wajib diimani.",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Shalat fardhu yang dilakukan setelah matahari tergelincir adalah...",
        pilihan: ["Subuh", "Dzuhur", "Ashar", "Maghrib"],
        jawaban: "Dzuhur",
        penjelasan:
          "Waktu shalat: Subuh (fajar-matahari terbit), Dzuhur (matahari tergelincir/tengah hari-ashar), Ashar (pertengahan siang-matahari terbenam), Maghrib (matahari terbenam-isya), Isya (gelap malam-fajar). 'Tergelincir' berarti matahari melewati titik tertinggi/meridian.",
      },
      {
        pertanyaan: "Zakat fitrah wajib dikeluarkan sebesar...",
        pilihan: ["1 kg beras", "2 kg beras", "2,5 kg beras", "3 kg beras"],
        jawaban: "2,5 kg beras",
        penjelasan:
          "Zakat fitrah wajib dikeluarkan sebesar 1 sha' = sekitar 2,5 kg bahan makanan pokok (beras di Indonesia) per jiwa, atau bisa diganti uang senilai itu. Dikeluarkan sebelum shalat Idul Fitri. Tujuannya menyucikan jiwa dan membahagiakan fakir miskin di hari raya.",
      },
      {
        pertanyaan: "Surat pertama dalam Al-Qur'an adalah...",
        pilihan: ["Al-Baqarah", "Al-Fatihah", "Al-Ikhlas", "Al-Falaq"],
        jawaban: "Al-Fatihah",
        penjelasan:
          "Al-Fatihah (Pembuka) adalah surah pertama Al-Qur'an, terdiri dari 7 ayat. Disebut juga 'Ummul Qur'an' (induk Al-Qur'an) karena merangkum isi Al-Qur'an. Dibaca wajib dalam setiap rakaat shalat. Al-Baqarah = surah ke-2 (terpanjang).",
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
        penjelasan:
          "Isra' = perjalanan malam Nabi dari Masjidil Haram (Makkah) ke Masjidil Aqsha (Yerusalem). Mi'raj = naik ke Sidratul Muntaha (langit ke-7) untuk menerima perintah shalat 5 waktu. Terjadi pada 27 Rajab, sekitar 621 M.",
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
        penjelasan:
          "Idgham Bighunnah = memasukkan/meleburkan nun sukun/tanwin ke huruf berikutnya DENGAN dengung (ghunnah). Hurufnya: Ya (ي), Nun (ن), Mim (م), Wau (و) — disingkat 'yanmu'. Idgham Bilaghunnah (tanpa dengung) = Lam dan Ra.",
      },
      {
        pertanyaan: "Sifat Allah SWT yang berarti Maha Melihat adalah...",
        pilihan: ["As-Sami'", "Al-Bashir", "Al-'Alim", "Al-Khabir"],
        jawaban: "Al-Bashir",
        penjelasan:
          "Al-Bashir = Maha Melihat (segala sesuatu, termasuk yang tersembunyi). As-Sami' = Maha Mendengar. Al-'Alim = Maha Mengetahui. Al-Khabir = Maha Teliti/Mengetahui hal yang lembut. Asmaul Husna = 99 nama-nama Allah yang indah.",
      },
      {
        pertanyaan: "Perang Badar terjadi pada tahun...",
        pilihan: ["1 H", "2 H", "3 H", "5 H"],
        jawaban: "2 H",
        penjelasan:
          "Perang Badar terjadi pada 17 Ramadhan 2 Hijriah (624 M) — pertempuran besar pertama umat Islam vs kaum Quraisy Makkah. Pasukan Muslim ±313 orang menghadapi ±1000 musuh dan menang. Kemenangan ini dipandang sebagai pertolongan Allah (Al-Anfal:9).",
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
        penjelasan:
          "Larangan riba ada di beberapa ayat: Al-Baqarah: 275 ('Allah menghalalkan jual beli dan mengharamkan riba'), Ali Imran: 130 ('janganlah kamu memakan riba berlipat ganda'). Ekonomi Islam menggantikan bunga dengan sistem bagi hasil (mudharabah, musyarakah).",
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
        penjelasan:
          "4 sumber hukum Islam: Al-Qur'an, Hadits/Sunnah, Ijma' (kesepakatan para ulama mujtahid setelah Nabi wafat), Qiyas (analogi). Ijma' yang paling kuat adalah ijma' sahabat. Qiyas = menyamakan hukum hal baru dengan hal lama yang ada nash-nya.",
      },
      {
        pertanyaan:
          "Nuzulul Qur'an memperingati turunnya wahyu pertama pada...",
        pilihan: ["17 Ramadhan", "21 Ramadhan", "27 Ramadhan", "1 Ramadhan"],
        jawaban: "17 Ramadhan",
        penjelasan:
          "Wahyu pertama (QS Al-Alaq: 1-5) turun kepada Nabi Muhammad di Gua Hira pada 17 Ramadhan. Diperingati sebagai Nuzulul Qur'an. Berbeda dengan Lailatul Qadar (malam kemuliaan) yang umumnya diyakini pada malam ganjil 10 hari terakhir Ramadhan (27 Ramadhan).",
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
        penjelasan:
          "QS Al-Hujurat: 13 menyatakan: 'Wahai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu adalah yang paling bertakwa.' Ini landasan kesetaraan dan anti-rasisme dalam Islam.",
      },
      {
        pertanyaan: "Metode penetapan hukum Islam melalui analogi disebut...",
        pilihan: ["Ijma'", "Ijtihad", "Qiyas", "Istihsan"],
        jawaban: "Qiyas",
        penjelasan:
          "Qiyas = menyamakan hukum kasus baru dengan kasus lama yang sudah ada hukumnya dalam Al-Qur'an/Hadits karena kesamaan 'illat (sebab/alasan). Contoh: hukum narkoba diqiyaskan dengan khamr (sama-sama memabukkan → haram). Istihsan = pengecualian dari qiyas karena kemaslahatan.",
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
        penjelasan:
          "Urutan Khulafaur Rasyidin: (1) Abu Bakar As-Siddiq (632-634 M), (2) Umar bin Khattab (634-644 M), (3) Utsman bin Affan (644-656 M), (4) Ali bin Abi Thalib (656-661 M). Abu Bakar dipilih melalui musyawarah para sahabat setelah Nabi wafat.",
      },
      {
        pertanyaan:
          "Hukum nikah bagi seseorang yang sudah mampu dan takut terjerumus zina adalah...",
        pilihan: ["Sunnah", "Wajib", "Mubah", "Makruh"],
        jawaban: "Wajib",
        penjelasan:
          "Hukum nikah bersifat situasional: Wajib = jika sudah mampu dan sangat khawatir terjerumus zina. Sunnah = jika mampu dan tidak terlalu khawatir. Mubah = boleh saja. Makruh = jika dikhawatirkan akan menyia-nyiakan kewajiban. Haram = jika pasti akan menzalimi pasangan.",
      },
    ],
  },
  Geografi: {
    SD: [
      {
        pertanyaan: "Negara Indonesia terletak di benua...",
        pilihan: ["Afrika", "Amerika", "Asia", "Eropa"],
        jawaban: "Asia",
        penjelasan:
          "Indonesia terletak di Asia Tenggara, di antara Benua Asia dan Australia, di antara Samudra Hindia dan Pasifik. Indonesia adalah negara kepulauan terbesar di dunia dengan lebih dari 17.000 pulau.",
      },
      {
        pertanyaan: "Pulau terbesar di Indonesia adalah...",
        pilihan: ["Jawa", "Sulawesi", "Kalimantan", "Sumatera"],
        jawaban: "Kalimantan",
        penjelasan:
          "Kalimantan (Borneo) adalah pulau terbesar di Indonesia dengan luas ±743.330 km². Sumatera ±473.481 km² (terbesar kedua). Jawa lebih kecil tapi paling padat penduduknya. Catatan: secara global, Kalimantan adalah pulau terbesar ke-3 di dunia.",
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
        penjelasan:
          "Puncak Jaya (Carstensz Pyramid) di Papua setinggi 4.884 mdpl adalah gunung tertinggi di Indonesia, sekaligus tertinggi di Oceania. Semeru (3.676 m) = tertinggi di Jawa. Kerinci (3.805 m) = tertinggi di Sumatera. Rinjani (3.726 m) = tertinggi di Lombok.",
      },
      {
        pertanyaan: "Mata angin yang berlawanan dengan Utara adalah...",
        pilihan: ["Barat", "Timur", "Selatan", "Barat Daya"],
        jawaban: "Selatan",
        penjelasan:
          "Mata angin berlawanan: Utara ↔ Selatan, Timur ↔ Barat, Timur Laut ↔ Barat Daya, Tenggara ↔ Barat Laut. Kompas menunjuk ke Utara magnetis. Matahari terbit di Timur dan terbenam di Barat.",
      },
      {
        pertanyaan: "Laut yang memisahkan Pulau Jawa dan Sumatra adalah...",
        pilihan: ["Laut Jawa", "Selat Sunda", "Selat Malaka", "Laut Banda"],
        jawaban: "Selat Sunda",
        penjelasan:
          "Selat Sunda memisahkan Pulau Jawa dan Sumatera. Di Selat Sunda terdapat Gunung Anak Krakatau. Laut Jawa di utara Pulau Jawa. Selat Malaka antara Sumatera dan Malaysia. Laut Banda di Maluku.",
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
        penjelasan:
          "Danau Toba di Sumatera Utara adalah danau terbesar di Indonesia (±1.130 km²) sekaligus danau vulkanik terbesar di dunia. Terbentuk dari letusan supervulkan ±74.000 tahun lalu. Di tengahnya terdapat Pulau Samosir.",
      },
      {
        pertanyaan: "Bumi berbentuk...",
        pilihan: ["Datar", "Kotak", "Bulat pepat (elipsoid)", "Segitiga"],
        jawaban: "Bulat pepat (elipsoid)",
        penjelasan:
          "Bumi tidak bulat sempurna, melainkan elipsoid/geoid — pepat (gepeng) di kutub dan menggembung di khatulistiwa akibat gaya sentrifugal rotasi bumi. Diameter khatulistiwa (12.756 km) lebih besar dari diameter kutub (12.714 km).",
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
        penjelasan:
          "Ekuator (garis khatulistiwa) adalah garis lintang 0° yang membagi bumi jadi belahan utara dan selatan. Indonesia dilintasi ekuator. Garis Bujur/Meridian membagi bumi jadi belahan timur dan barat. Garis Balik = 23,5°LU (Balik Utara) dan 23,5°LS (Balik Selatan).",
      },
      {
        pertanyaan:
          "Proses pembentukan pegunungan akibat tumbukan lempeng disebut...",
        pilihan: ["Vulkanisme", "Tektonisme", "Orogenesis", "Erosi"],
        jawaban: "Orogenesis",
        penjelasan:
          "Orogenesis (oro = gunung, genesis = pembentukan) adalah proses terbentuknya pegunungan akibat tumbukan/tekanan lempeng tektonik. Contoh: Pegunungan Himalaya terbentuk dari tumbukan lempeng India dan Eurasia. Vulkanisme = aktivitas magma. Erosi = pengikisan.",
      },
      {
        pertanyaan: "Iklim Indonesia secara umum adalah...",
        pilihan: ["Subtropis", "Tropis", "Dingin", "Gurun"],
        jawaban: "Tropis",
        penjelasan:
          "Indonesia beriklim tropis karena terletak di sekitar garis khatulistiwa (0°). Ciri iklim tropis: suhu tinggi sepanjang tahun (26-28°C), curah hujan tinggi, hanya memiliki 2 musim (hujan dan kemarau, bukan 4 musim seperti negara subtropis).",
      },
      {
        pertanyaan:
          "Skala peta 1:500.000 berarti 1 cm di peta mewakili... di lapangan.",
        pilihan: ["500 m", "5 km", "50 km", "500 km"],
        jawaban: "5 km",
        penjelasan:
          "Skala 1:500.000 berarti 1 satuan di peta = 500.000 satuan di lapangan. Jadi 1 cm = 500.000 cm = 5.000 m = 5 km. Semakin kecil angka skala (misal 1:10.000), semakin detail peta. Semakin besar angka (1:1.000.000), semakin luas wilayah yang tercakup.",
      },
      {
        pertanyaan:
          "Batuan yang terbentuk dari magma yang mendingin disebut batuan...",
        pilihan: ["Sedimen", "Metamorf", "Beku", "Karbonat"],
        jawaban: "Beku",
        penjelasan:
          "3 jenis batuan: Batuan Beku = terbentuk dari magma/lava yang mendingin (contoh: granit, basalt, obsidian). Batuan Sedimen = dari endapan material (contoh: batu pasir, batu kapur). Batuan Metamorf = dari batuan lain yang berubah akibat panas/tekanan (contoh: marmer dari batu kapur).",
      },
      {
        pertanyaan: "Angin yang bertiup dari darat ke laut terjadi pada...",
        pilihan: ["Siang hari", "Malam hari", "Pagi hari", "Sore hari"],
        jawaban: "Malam hari",
        penjelasan:
          "Angin darat (darat→laut) terjadi malam hari karena daratan lebih cepat dingin dari laut — udara di atas laut lebih hangat dan naik, udara dingin dari darat mengalir menggantikan. Angin laut (laut→darat) terjadi siang hari — daratan lebih cepat panas.",
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
        penjelasan:
          "Sungai Kapuas di Kalimantan Barat adalah sungai terpanjang di Indonesia (±1.143 km). Sungai Mahakam di Kalimantan Timur (±920 km). Sungai Barito di Kalimantan Selatan/Tengah. Sungai Musi di Sumatera Selatan.",
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
        penjelasan:
          "Alfred Wegener (1880-1930) mengajukan teori Pergeseran Benua (Continental Drift) pada 1912 — cikal bakal Teori Lempeng Tektonik. Ia mengamati kecocokan bentuk pantai Afrika dan Amerika Selatan. Teorinya awalnya ditolak tapi akhirnya diterima setelah ditemukan bukti dasar laut.",
      },
      {
        pertanyaan:
          "Fenomena El Niño menyebabkan wilayah Indonesia mengalami...",
        pilihan: ["Banjir ekstrem", "Kemarau panjang", "Salju", "Badai tropis"],
        jawaban: "Kemarau panjang",
        penjelasan:
          "El Niño = pemanasan suhu Samudra Pasifik tengah-timur yang menyebabkan angin membawa uap air menjauhi Asia Tenggara. Akibatnya Indonesia mengalami kemarau panjang dan kering. Kebalikannya, La Niña menyebabkan curah hujan lebih tinggi dari normal di Indonesia.",
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
        penjelasan:
          "IPM (Human Development Index/HDI) mengukur tiga dimensi: (1) Kesehatan = harapan hidup saat lahir, (2) Pendidikan = rata-rata lama sekolah & harapan lama sekolah, (3) Pendapatan = GNI per kapita. IPM dikembangkan UNDP dan digunakan untuk membandingkan kesejahteraan antar negara.",
      },
      {
        pertanyaan:
          "Zona ekonomi eksklusif (ZEE) Indonesia membentang sejauh...",
        pilihan: ["12 mil laut", "24 mil laut", "200 mil laut", "350 mil laut"],
        jawaban: "200 mil laut",
        penjelasan:
          "ZEE = 200 mil laut dari garis pantai terluar — Indonesia memiliki hak eksklusif untuk mengeksploitasi sumber daya alam (ikan, minyak, mineral) di zona ini. 12 mil laut = laut teritorial (kedaulatan penuh). 24 mil laut = zona tambahan. ZEE diatur UNCLOS 1982.",
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
        penjelasan:
          "Proyeksi Silinder (termasuk Mercator) paling akurat di daerah khatulistiwa karena bidang proyeksinya menyinggung bumi tepat di ekuator. Proyeksi Kerucut = akurat di lintang sedang (45°). Proyeksi Azimuthal/Zenithal = akurat di kutub. Semua proyeksi memiliki distorsi, tidak ada yang sempurna.",
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
        penjelasan:
          "Urban Heat Island = kondisi di mana suhu kota lebih tinggi dari daerah sekitarnya. Penyebab: (1) minimnya vegetasi yang mengurangi efek pendinginan, (2) banyak permukaan aspal/beton yang menyerap dan memancarkan panas, (3) panas dari kendaraan & AC. Suhu kota bisa 1-3°C lebih tinggi dari pedesaan sekitarnya.",
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
        penjelasan:
          "SIG (GIS = Geographic Information System) adalah sistem komputer untuk mengumpulkan, menyimpan, menganalisis, dan menampilkan data spasial (bereferensi lokasi geografis). Digunakan untuk: pemetaan bencana, perencanaan tata kota, analisis sumber daya alam, navigasi, dsb.",
      },
    ],
  },
  "Bahasa Indonesia": {
    SD: [
      {
        pertanyaan: "Kalimat yang berisi perintah disebut kalimat...",
        pilihan: ["Tanya", "Berita", "Perintah", "Seru"],
        jawaban: "Perintah",
        penjelasan:
          "Jenis kalimat: Kalimat perintah = menyuruh/meminta seseorang melakukan sesuatu, diakhiri tanda seru (!). Contoh: 'Tolong tutup pintunya!' Kalimat tanya = menanyakan sesuatu (?). Kalimat berita = menyampaikan informasi (.). Kalimat seru = mengungkapkan perasaan (!).",
      },
      {
        pertanyaan: "Antonim (lawan kata) dari 'rajin' adalah...",
        pilihan: ["Tekun", "Malas", "Giat", "Semangat"],
        jawaban: "Malas",
        penjelasan:
          "Antonim = kata yang maknanya berlawanan. Rajin ↔ Malas. Tekun, Giat, Semangat adalah sinonim (persamaan kata) dari 'rajin'. Contoh penggunaan: 'Siswa yang rajin belajar akan berbeda hasilnya dengan siswa yang malas.'",
      },
      {
        pertanyaan: "Huruf kapital digunakan untuk menulis...",
        pilihan: [
          "Semua kata dalam kalimat",
          "Kata di awal kalimat dan nama orang",
          "Hanya kata kerja",
          "Kata benda saja",
        ],
        jawaban: "Kata di awal kalimat dan nama orang",
        penjelasan:
          "Penggunaan huruf kapital: awal kalimat, nama orang (Budi, Siti), nama tempat (Jakarta, Jawa), nama hari dan bulan (Senin, Januari), judul karya, dan sapaan (Bapak, Ibu). Tidak semua kata ditulis kapital kecuali akronim seperti TNI, PBB.",
      },
      {
        pertanyaan:
          "Tanda baca yang digunakan di akhir kalimat tanya adalah...",
        pilihan: ["Titik (.)", "Koma (,)", "Tanda tanya (?)", "Tanda seru (!)"],
        jawaban: "Tanda tanya (?)",
        penjelasan:
          "Tanda baca: Titik (.) = akhir kalimat berita/pernyataan. Koma (,) = pemisah dalam kalimat. Tanda tanya (?) = akhir kalimat tanya. Tanda seru (!) = akhir kalimat perintah atau seru. Contoh: 'Siapa namamu?' menggunakan tanda tanya.",
      },
      {
        pertanyaan: "Kata 'berlari' terdiri dari kata dasar dan imbuhan...",
        pilihan: ["Lari + -an", "Ber- + lari", "Me- + lari", "Lari + -kan"],
        jawaban: "Ber- + lari",
        penjelasan:
          "Berlari = awalan ber- + kata dasar 'lari'. Awalan ber- biasanya membentuk kata kerja aktif. Contoh lain: berjalan (ber- + jalan), bernyanyi (ber- + nyanyi), bermain (ber- + main). Awalan me- juga membentuk kata kerja: melari tidak baku, yang baku adalah berlari.",
      },
      {
        pertanyaan: "Sinonim (persamaan kata) dari 'indah' adalah...",
        pilihan: ["Jelek", "Buruk", "Cantik", "Kotor"],
        jawaban: "Cantik",
        penjelasan:
          "Sinonim = kata yang memiliki makna sama atau mirip. Sinonim 'indah': cantik, elok, molek, permai, rupawan. Jelek dan Buruk adalah antonim (lawan kata) dari indah. Kotor tidak berhubungan langsung.",
      },
      {
        pertanyaan: "Paragraf adalah kumpulan beberapa...",
        pilihan: ["Kata", "Kalimat", "Huruf", "Bab"],
        jawaban: "Kalimat",
        penjelasan:
          "Paragraf (alinea) adalah kumpulan beberapa kalimat yang membahas satu ide/gagasan pokok. Sebuah paragraf minimal terdiri dari 1 kalimat utama + beberapa kalimat penjelas. Kumpulan paragraf membentuk wacana/teks utuh.",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Kalimat utama yang terletak di awal paragraf disebut paragraf...",
        pilihan: ["Induktif", "Deduktif", "Campuran", "Deskriptif"],
        jawaban: "Deduktif",
        penjelasan:
          "Jenis paragraf berdasarkan letak kalimat utama: Deduktif = kalimat utama di AWAL paragraf (umum → khusus). Induktif = kalimat utama di AKHIR paragraf (khusus → umum, biasanya diawali contoh-contoh). Campuran = kalimat utama di awal dan ditegaskan kembali di akhir.",
      },
      {
        pertanyaan:
          "Majas yang membandingkan dua hal berbeda menggunakan kata 'seperti' atau 'bagaikan' disebut...",
        pilihan: ["Metafora", "Personifikasi", "Simile", "Hiperbola"],
        jawaban: "Simile",
        penjelasan:
          "Simile (perumpamaan) = majas perbandingan EKSPLISIT menggunakan kata penghubung: seperti, bagaikan, laksana, bak, ibarat. Contoh: 'Wajahnya seperti bulan purnama.' Metafora = perbandingan LANGSUNG tanpa kata penghubung: 'Dia adalah bintang kelasku.' Personifikasi = benda mati diberi sifat manusia.",
      },
      {
        pertanyaan:
          "Teks yang menceritakan urutan kejadian secara kronologis disebut teks...",
        pilihan: ["Deskripsi", "Eksposisi", "Narasi", "Argumentasi"],
        jawaban: "Narasi",
        penjelasan:
          "Jenis teks: Narasi = menceritakan peristiwa secara urut/kronologis (cerita, novel, biografi). Deskripsi = menggambarkan sesuatu secara detail sehingga pembaca seolah melihat/merasakan. Eksposisi = menjelaskan/memaparkan informasi. Argumentasi = membuktikan pendapat dengan bukti.",
      },
      {
        pertanyaan: "Kata baku untuk 'ijin' dalam KBBI adalah...",
        pilihan: ["Ijin", "Izin", "Idzin", "Ijijn"],
        jawaban: "Izin",
        penjelasan:
          "Berdasarkan KBBI (Kamus Besar Bahasa Indonesia), bentuk baku adalah 'izin', bukan 'ijin'. Kesalahan ini sangat umum. Contoh lain kata tidak baku → baku: apotek (bukan apotik), jadwal (bukan jadual), analisis (bukan analisa), aktif (bukan aktip).",
      },
      {
        pertanyaan: "Imbuhan 'me-' pada kata 'memukul' berfungsi membentuk...",
        pilihan: [
          "Kata benda",
          "Kata sifat",
          "Kata kerja aktif transitif",
          "Kata keterangan",
        ],
        jawaban: "Kata kerja aktif transitif",
        penjelasan:
          "Awalan me- membentuk kata kerja aktif. 'Memukul' adalah kata kerja aktif transitif (butuh objek): 'Dia memukul bola.' Transitif = bisa dipasifkan: 'Bola dipukul olehnya.' Awalan me- dapat berubah jadi meng-, mem-, men-, meny-, menge- tergantung huruf awal kata dasarnya.",
      },
      {
        pertanyaan: "Pantun memiliki ciri: bersajak...",
        pilihan: ["a-a-a-a", "a-b-a-b", "a-a-b-b", "a-b-b-a"],
        jawaban: "a-b-a-b",
        penjelasan:
          "Ciri-ciri pantun: (1) 4 baris per bait, (2) baris 1-2 = sampiran, baris 3-4 = isi, (3) sajak silang a-b-a-b (baris 1 rima dengan 3, baris 2 rima dengan 4), (4) tiap baris 8-12 suku kata. Berbeda dengan syair yang bersajak a-a-a-a dan semua baris adalah isi.",
      },
      {
        pertanyaan: "Penggunaan tanda koma yang tepat terdapat pada kalimat...",
        pilihan: [
          "Saya suka makan, nasi goreng",
          "Hari ini, cuaca sangat panas",
          "Ibu membeli sayur, buah, dan ikan",
          "Dia pergi, ke sekolah",
        ],
        jawaban: "Ibu membeli sayur, buah, dan ikan",
        penjelasan:
          "Tanda koma digunakan untuk memisahkan unsur-unsur dalam suatu perincian/daftar (minimal 3 unsur). 'Ibu membeli sayur, buah, dan ikan' — koma memisahkan tiga benda yang dibeli. Koma TIDAK digunakan memisahkan subjek dari predikat, atau predikat dari objek.",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Teks yang bertujuan memengaruhi pembaca untuk menyetujui pendapat penulis disebut teks...",
        pilihan: ["Narasi", "Deskripsi", "Persuasi", "Eksplanasi"],
        jawaban: "Persuasi",
        penjelasan:
          "Teks persuasi bertujuan memengaruhi/membujuk pembaca agar setuju atau melakukan sesuatu. Ciri: ada fakta, opini, argumen, dan bujukan. Contoh: iklan, pidato kampanye, editorial. Berbeda dengan argumentasi yang hanya membuktikan kebenaran, persuasi juga mengajak bertindak.",
      },
      {
        pertanyaan:
          "Dalam puisi, rima akhir yang berpola a-a-b-b disebut rima...",
        pilihan: ["Silang", "Peluk", "Terus/datar", "Bebas"],
        jawaban: "Terus/datar",
        penjelasan:
          "Pola rima akhir puisi: a-b-a-b = rima silang. a-b-b-a = rima peluk/berpeluk. a-a-b-b = rima terus/datar/beruntun. a-a-a-a = rima sama. Contoh rima terus: 'Angin berhembus sepoi (a) / Daun berguguran di kali (a) / Hati terasa sepi (b) / Jauh dari sanak famili (b)'.",
      },
      {
        pertanyaan: "Kalimat efektif memiliki ciri, KECUALI...",
        pilihan: ["Hemat kata", "Logis", "Bertele-tele", "Sesuai EYD"],
        jawaban: "Bertele-tele",
        penjelasan:
          "Ciri kalimat efektif: (1) Kesepadanan (subjek-predikat jelas), (2) Kesejajaran (bentuk kata sejajar), (3) Ketegasan (penekanan pada hal penting), (4) Kehematan (tidak boros kata), (5) Kecermatan (tidak ambigu), (6) Kelogisan, (7) Kebakuan. Bertele-tele adalah KEBALIKAN dari kalimat efektif.",
      },
      {
        pertanyaan: "Novel 'Laskar Pelangi' ditulis oleh...",
        pilihan: [
          "Pramoedya Ananta Toer",
          "Andrea Hirata",
          "Habiburrahman El Shirazy",
          "Dee Lestari",
        ],
        jawaban: "Andrea Hirata",
        penjelasan:
          "Laskar Pelangi (2005) ditulis Andrea Hirata — novel pertama dari tetralogi Laskar Pelangi, bercerita tentang kehidupan anak-anak di Belitung. Pramoedya Ananta Toer = Bumi Manusia, Tetralogi Pulau Buru. Habiburrahman = Ayat-Ayat Cinta. Dee Lestari = Supernova.",
      },
      {
        pertanyaan:
          "Penggunaan kata 'di' sebagai kata depan yang benar adalah...",
        pilihan: [
          "Dia tinggal disini",
          "Buku itu diatas meja",
          "Dia berlari di lapangan",
          "Saya dimarahi ibu",
        ],
        jawaban: "Dia berlari di lapangan",
        penjelasan:
          "'Di' sebagai KATA DEPAN (preposisi) ditulis TERPISAH dari kata belakangnya, menyatakan tempat: di lapangan, di sekolah, di sini (bukan 'disini'). 'Di' sebagai AWALAN ditulis SERANGKAI dan membentuk kata kerja pasif: dimarahi, dimakan, dibeli. 'Di atas' juga terpisah karena 'di' = kata depan.",
      },
      {
        pertanyaan:
          "Unsur intrinsik karya sastra yang menggambarkan watak tokoh dalam cerita disebut...",
        pilihan: ["Tema", "Alur", "Penokohan/karakter", "Sudut pandang"],
        jawaban: "Penokohan/karakter",
        penjelasan:
          "Unsur intrinsik: Tema = inti/pokok cerita. Alur/plot = rangkaian peristiwa. Penokohan/karakter = penggambaran watak/sifat tokoh (protagonis, antagonis, tritagonis). Latar = tempat, waktu, suasana. Sudut pandang = posisi penulis (orang pertama/ketiga). Amanat = pesan moral cerita.",
      },
      {
        pertanyaan:
          "Cara pengarang menyampaikan watak tokoh secara langsung disebut metode...",
        pilihan: ["Dramatik", "Analitik", "Dialogis", "Naratif"],
        jawaban: "Analitik",
        penjelasan:
          "Metode penokohan: Analitik (langsung) = penulis LANGSUNG menyebutkan sifat tokoh. Contoh: 'Budi adalah anak yang rajin dan jujur.' Dramatik (tidak langsung) = watak tokoh diperlihatkan melalui dialog, tindakan, pikiran, atau reaksi tokoh lain — pembaca menyimpulkan sendiri.",
      },
    ],
  },
  PKn: {
    SD: [
      {
        pertanyaan: "Dasar negara Indonesia adalah...",
        pilihan: [
          "UUD 1945",
          "Pancasila",
          "Bhinneka Tunggal Ika",
          "Proklamasi",
        ],
        jawaban: "Pancasila",
        penjelasan:
          "Pancasila adalah dasar negara (fondasi) Indonesia yang terdiri dari 5 sila. UUD 1945 adalah konstitusi/hukum dasar tertulis. Bhinneka Tunggal Ika adalah semboyan negara. Pancasila dirumuskan oleh para pendiri bangsa dan diresmikan 18 Agustus 1945.",
      },
      {
        pertanyaan: "Semboyan negara Indonesia adalah...",
        pilihan: [
          "Bhinneka Tunggal Ika",
          "Pancasila",
          "Bhineka Nusantara",
          "Garuda Sakti",
        ],
        jawaban: "Bhinneka Tunggal Ika",
        penjelasan:
          "Bhinneka Tunggal Ika berasal dari bahasa Jawa Kuno, artinya 'Berbeda-beda tetapi tetap satu'. Semboyan ini berasal dari kitab Sutasoma karangan Mpu Tantular. Maknanya: meski Indonesia terdiri dari berbagai suku, agama, dan budaya, kita tetap satu bangsa.",
      },
      {
        pertanyaan: "Sila ke-3 Pancasila berbunyi...",
        pilihan: [
          "Keadilan sosial bagi seluruh rakyat Indonesia",
          "Persatuan Indonesia",
          "Ketuhanan Yang Maha Esa",
          "Kemanusiaan yang adil dan beradab",
        ],
        jawaban: "Persatuan Indonesia",
        penjelasan:
          "5 sila Pancasila: (1) Ketuhanan Yang Maha Esa, (2) Kemanusiaan yang adil dan beradab, (3) Persatuan Indonesia, (4) Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan, (5) Keadilan sosial bagi seluruh rakyat Indonesia.",
      },
      {
        pertanyaan:
          "Hak yang dimiliki setiap warga negara Indonesia sejak lahir disebut...",
        pilihan: ["Hak pilih", "Hak asasi manusia", "Hak paten", "Hak cipta"],
        jawaban: "Hak asasi manusia",
        penjelasan:
          "Hak Asasi Manusia (HAM) adalah hak dasar yang dimiliki setiap manusia sejak lahir, bersifat universal dan tidak bisa dicabut oleh siapapun. Contoh: hak hidup, hak pendidikan, hak kebebasan berpendapat. HAM diatur dalam UUD 1945 Pasal 28A-28J.",
      },
      {
        pertanyaan: "Indonesia adalah negara...",
        pilihan: ["Kerajaan", "Republik", "Federasi", "Persemakmuran"],
        jawaban: "Republik",
        penjelasan:
          "Indonesia adalah Negara Kesatuan Republik Indonesia (NKRI). 'Republik' berarti kepala negara dipilih (bukan diwariskan seperti kerajaan), dan kekuasaan berasal dari rakyat. Kepala negara Indonesia adalah Presiden yang dipilih langsung oleh rakyat setiap 5 tahun.",
      },
      {
        pertanyaan: "Lagu kebangsaan Indonesia adalah...",
        pilihan: [
          "Bagimu Negeri",
          "Garuda Pancasila",
          "Indonesia Raya",
          "Padamu Negeri",
        ],
        jawaban: "Indonesia Raya",
        penjelasan:
          "Indonesia Raya adalah lagu kebangsaan Indonesia, diciptakan oleh Wage Rudolf Supratman dan pertama kali dikumandangkan pada Kongres Pemuda 28 Oktober 1928. Lagu ini wajib dinyanyikan saat upacara resmi dan pertandingan internasional.",
      },
      {
        pertanyaan:
          "Sikap yang mencerminkan pengamalan sila ke-1 Pancasila adalah...",
        pilihan: [
          "Membantu teman yang kesusahan",
          "Beribadah sesuai agama masing-masing",
          "Mencintai produk dalam negeri",
          "Mengikuti musyawarah",
        ],
        jawaban: "Beribadah sesuai agama masing-masing",
        penjelasan:
          "Sila ke-1: Ketuhanan Yang Maha Esa → pengamalannya adalah beriman kepada Tuhan, beribadah sesuai agama/kepercayaan masing-masing, dan menghormati pemeluk agama lain. Sila ke-2 = membantu sesama, Sila ke-3 = mencintai produk Indonesia, Sila ke-4 = musyawarah.",
      },
    ],
    SMP: [
      {
        pertanyaan: "UUD 1945 pertama kali disahkan oleh...",
        pilihan: ["MPR", "DPR", "PPKI", "BPUPKI"],
        jawaban: "PPKI",
        penjelasan:
          "UUD 1945 disahkan oleh PPKI (Panitia Persiapan Kemerdekaan Indonesia) pada 18 Agustus 1945, sehari setelah proklamasi. BPUPKI adalah badan yang merumuskan dasar negara dan rancangan UUD. MPR dan DPR adalah lembaga legislatif yang ada setelah kemerdekaan.",
      },
      {
        pertanyaan:
          "Hak warga negara untuk memilih dalam pemilu disebut hak...",
        pilihan: [
          "Hak legislatif",
          "Hak sufrage/pilih",
          "Hak angket",
          "Hak interpelasi",
        ],
        jawaban: "Hak sufrage/pilih",
        penjelasan:
          "Hak sufrage (hak pilih) adalah hak warga negara untuk memilih wakil rakyat dalam pemilu. Di Indonesia, hak pilih dimiliki WNI berusia ≥17 tahun atau sudah menikah. Hak angket dan interpelasi adalah hak DPR untuk mengawasi pemerintah.",
      },
      {
        pertanyaan:
          "Lembaga negara yang berwenang membuat undang-undang adalah...",
        pilihan: ["Presiden", "DPR", "MA", "KPU"],
        jawaban: "DPR",
        penjelasan:
          "DPR (Dewan Perwakilan Rakyat) adalah lembaga legislatif yang berwenang membuat UU bersama Presiden. MA (Mahkamah Agung) = kekuasaan kehakiman. KPU = penyelenggara pemilu. Presiden = eksekutif, tapi ikut mengesahkan UU.",
      },
      {
        pertanyaan: "Sistem pemerintahan Indonesia adalah...",
        pilihan: [
          "Parlementer",
          "Presidensial",
          "Monarki Konstitusional",
          "Semi-presidensial",
        ],
        jawaban: "Presidensial",
        penjelasan:
          "Indonesia menggunakan sistem presidensial: Presiden sebagai kepala negara sekaligus kepala pemerintahan, dipilih langsung oleh rakyat, dan tidak bertanggung jawab kepada parlemen. Berbeda dengan sistem parlementer di mana PM bertanggung jawab kepada parlemen.",
      },
      {
        pertanyaan: "Wilayah NKRI dibagi menjadi beberapa...",
        pilihan: ["Negara bagian", "Provinsi", "Kanton", "Distrik"],
        jawaban: "Provinsi",
        penjelasan:
          "Indonesia adalah negara kesatuan (bukan federasi) yang dibagi menjadi provinsi-provinsi. Saat ini Indonesia memiliki 38 provinsi. Di bawah provinsi ada kabupaten/kota, lalu kecamatan, lalu desa/kelurahan.",
      },
      {
        pertanyaan:
          "Kewajiban warga negara yang diatur UUD 1945 Pasal 27 ayat (1) adalah...",
        pilihan: [
          "Membayar pajak",
          "Menjunjung hukum dan pemerintahan",
          "Mengikuti pendidikan dasar",
          "Membela negara",
        ],
        jawaban: "Menjunjung hukum dan pemerintahan",
        penjelasan:
          "UUD 1945 Pasal 27 ayat (1): 'Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya.' Membayar pajak diatur Pasal 23A, membela negara diatur Pasal 27 ayat (3).",
      },
      {
        pertanyaan:
          "Prinsip demokrasi yang diterapkan Indonesia adalah demokrasi...",
        pilihan: ["Liberal", "Terpimpin", "Pancasila", "Sosialis"],
        jawaban: "Pancasila",
        penjelasan:
          "Indonesia menganut Demokrasi Pancasila: demokrasi yang berlandaskan nilai-nilai Pancasila, mengutamakan musyawarah mufakat, gotong royong, dan kepentingan bersama — bukan semata-mata suara mayoritas seperti demokrasi liberal. Era Soekarno pernah menerapkan Demokrasi Terpimpin (1959-1965).",
      },
    ],
    SMA: [
      {
        pertanyaan: "Mahkamah Konstitusi berwenang untuk...",
        pilihan: [
          "Mengadili perkara pidana",
          "Menguji UU terhadap UUD 1945",
          "Membuat peraturan pemerintah",
          "Mengangkat hakim agung",
        ],
        jawaban: "Menguji UU terhadap UUD 1945",
        penjelasan:
          "Mahkamah Konstitusi (MK) memiliki 4 kewenangan: (1) menguji UU terhadap UUD, (2) memutus sengketa kewenangan lembaga negara, (3) memutus pembubaran parpol, (4) memutus perselisihan hasil pemilu. Mengadili perkara pidana = MA. Membuat PP = Presiden.",
      },
      {
        pertanyaan: "Amandemen UUD 1945 dilakukan sebanyak... kali.",
        pilihan: ["2", "3", "4", "5"],
        jawaban: "4",
        penjelasan:
          "UUD 1945 telah diamandemen 4 kali oleh MPR: Amandemen I (1999), II (2000), III (2001), IV (2002). Amandemen ini mengubah banyak hal, termasuk: pembatasan masa jabatan presiden (2x5 tahun), penghapusan DPR-utusan golongan, pembentukan MK dan KY.",
      },
      {
        pertanyaan: "Konsep otonomi daerah di Indonesia diatur dalam UU...",
        pilihan: [
          "UU No. 22/1999",
          "UU No. 23/2014",
          "UU No. 32/2004",
          "Semua benar (telah direvisi bertahap)",
        ],
        jawaban: "Semua benar (telah direvisi bertahap)",
        penjelasan:
          "Otonomi daerah diatur dalam serangkaian UU: UU No. 22/1999 (era Reformasi awal), direvisi UU No. 32/2004, lalu direvisi lagi UU No. 23/2014 tentang Pemerintahan Daerah yang berlaku saat ini. Otonomi daerah memberi kewenangan kepada daerah untuk mengurus urusan rumah tangganya sendiri.",
      },
      {
        pertanyaan:
          "Hak DPR untuk meminta keterangan kepada pemerintah disebut hak...",
        pilihan: ["Angket", "Interpelasi", "Menyatakan pendapat", "Imunitas"],
        jawaban: "Interpelasi",
        penjelasan:
          "Hak-hak DPR: Interpelasi = meminta keterangan pemerintah soal kebijakan penting. Angket = melakukan penyelidikan terhadap kebijakan pemerintah. Menyatakan pendapat = menyampaikan pandangan DPR atas suatu hal. Imunitas = kekebalan hukum anggota DPR atas pernyataan di sidang.",
      },
      {
        pertanyaan:
          "Dalam trias politica, kekuasaan kehakiman dipegang oleh...",
        pilihan: ["DPR", "Presiden", "Mahkamah Agung & MK", "KPK"],
        jawaban: "Mahkamah Agung & MK",
        penjelasan:
          "Trias politica Montesquieu: Legislatif (DPR/DPD/MPR) = membuat UU. Eksekutif (Presiden) = menjalankan pemerintahan. Yudikatif (MA + MK) = kekuasaan kehakiman/peradilan. KPK adalah lembaga independen pemberantasan korupsi, bukan bagian trias politica.",
      },
      {
        pertanyaan:
          "Warga negara Indonesia yang tinggal di luar negeri dapat memilih dalam pemilu melalui...",
        pilihan: [
          "Tidak bisa memilih",
          "Menitipkan suara ke keluarga",
          "Pemilu luar negeri via KBRI/KJRI",
          "Memilih saat pulang ke Indonesia",
        ],
        jawaban: "Pemilu luar negeri via KBRI/KJRI",
        penjelasan:
          "WNI di luar negeri tetap memiliki hak pilih dalam pemilu nasional. Mereka dapat memilih melalui TPS yang dibuka di KBRI (Kedutaan Besar) atau KJRI (Konsulat Jenderal). Ada juga opsi pos dan kotak suara keliling (KSK) di beberapa negara.",
      },
      {
        pertanyaan: "Prinsip 'rule of law' dalam negara hukum berarti...",
        pilihan: [
          "Hukum dibuat oleh penguasa",
          "Semua pihak tunduk pada hukum yang sama",
          "Polisi berhak menangkap siapapun",
          "Presiden kebal dari hukum",
        ],
        jawaban: "Semua pihak tunduk pada hukum yang sama",
        penjelasan:
          "Rule of law (supremasi hukum) berarti: (1) hukum berlaku sama untuk semua — rakyat biasa maupun pejabat, (2) tidak ada yang kebal hukum, (3) hukum dibuat secara demokratis dan adil. Ini adalah prinsip dasar negara hukum (rechtsstaat) yang dianut Indonesia sesuai UUD 1945 Pasal 1 ayat (3).",
      },
    ],
  },
  Astronomi: {
    SD: [
      {
        pertanyaan: "Benda langit yang menjadi pusat tata surya kita adalah...",
        pilihan: ["Bulan", "Bumi", "Matahari", "Bintang"],
        jawaban: "Matahari",
        penjelasan:
          "Matahari adalah pusat tata surya — semua planet, termasuk Bumi, berputar mengelilingi Matahari (revolusi). Matahari adalah bintang berupa bola gas panas raksasa dengan suhu permukaan ±5.500°C. Cahaya Matahari membutuhkan ±8 menit untuk sampai ke Bumi.",
      },
      {
        pertanyaan: "Planet yang paling dekat dengan Matahari adalah...",
        pilihan: ["Venus", "Mars", "Merkurius", "Bumi"],
        jawaban: "Merkurius",
        penjelasan:
          "Urutan planet dari Matahari: Merkurius → Venus → Bumi → Mars → Jupiter → Saturnus → Uranus → Neptunus. Merkurius adalah yang terdekat, namun bukan yang terpanas — Venus lebih panas karena efek rumah kaca tebalnya (±465°C).",
      },
      {
        pertanyaan: "Satelit alami Bumi adalah...",
        pilihan: ["Mars", "Bulan", "Pluto", "Saturnus"],
        jawaban: "Bulan",
        penjelasan:
          "Bulan adalah satu-satunya satelit alami Bumi. Bulan tidak memiliki cahaya sendiri — ia memantulkan cahaya Matahari. Jarak Bulan ke Bumi ±384.400 km. Manusia pertama yang menginjakkan kaki di Bulan adalah Neil Armstrong (1969).",
      },
      {
        pertanyaan: "Planet terbesar di tata surya adalah...",
        pilihan: ["Saturnus", "Uranus", "Neptunus", "Jupiter"],
        jawaban: "Jupiter",
        penjelasan:
          "Jupiter adalah planet terbesar di tata surya — diameternya ±142.984 km, sekitar 11 kali diameter Bumi. Jupiter adalah planet gas raksasa yang terkenal dengan 'Bintik Merah Besar', yaitu badai raksasa yang sudah berlangsung ratusan tahun.",
      },
      {
        pertanyaan: "Fenomena gerhana Matahari terjadi ketika...",
        pilihan: [
          "Bumi berada di antara Matahari dan Bulan",
          "Bulan berada di antara Matahari dan Bumi",
          "Matahari berada di antara Bumi dan Bulan",
          "Bumi menjauh dari Matahari",
        ],
        jawaban: "Bulan berada di antara Matahari dan Bumi",
        penjelasan:
          "Gerhana Matahari terjadi saat Bulan berada tepat di antara Matahari dan Bumi, sehingga bayangan Bulan jatuh ke permukaan Bumi. Gerhana Bulan terjadi sebaliknya: Bumi berada di antara Matahari dan Bulan.",
      },
      {
        pertanyaan:
          "Bintang yang terlihat paling terang dari Bumi (selain Matahari) adalah...",
        pilihan: ["Polaris", "Sirius", "Vega", "Betelgeuse"],
        jawaban: "Sirius",
        penjelasan:
          "Sirius (Bintang Anjing) adalah bintang paling terang di langit malam, berada di rasi Canis Major. Jaraknya ±8,6 tahun cahaya dari Bumi. Polaris adalah bintang Utara (Bintang Kutub) yang berguna untuk navigasi, tapi bukan yang paling terang.",
      },
      {
        pertanyaan: "Lapisan gas yang menyelimuti Bumi disebut...",
        pilihan: ["Hidrosfer", "Litosfer", "Atmosfer", "Biosfer"],
        jawaban: "Atmosfer",
        penjelasan:
          "Atmosfer adalah lapisan gas (udara) yang menyelimuti Bumi, terdiri dari nitrogen (78%), oksigen (21%), dan gas lain (1%). Atmosfer melindungi Bumi dari radiasi Matahari berbahaya dan meteorit. Hidrosfer = lapisan air, Litosfer = lapisan batuan, Biosfer = lapisan kehidupan.",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Satuan yang digunakan untuk mengukur jarak antar bintang adalah...",
        pilihan: ["Kilometer", "Meter", "Tahun cahaya", "Astronomical Unit"],
        jawaban: "Tahun cahaya",
        penjelasan:
          "Tahun cahaya = jarak yang ditempuh cahaya selama 1 tahun = ±9,46 triliun km. Digunakan untuk jarak antar bintang/galaksi karena jaraknya sangat jauh. Astronomical Unit (AU) digunakan untuk jarak di dalam tata surya (1 AU = jarak Bumi-Matahari ≈ 150 juta km).",
      },
      {
        pertanyaan: "Planet yang memiliki cincin paling terkenal adalah...",
        pilihan: ["Jupiter", "Uranus", "Neptunus", "Saturnus"],
        jawaban: "Saturnus",
        penjelasan:
          "Saturnus terkenal dengan sistem cincin-nya yang spektakuler — terbuat dari es dan batuan. Meski Jupiter, Uranus, dan Neptunus juga memiliki cincin, cincin Saturnus jauh lebih tebal dan terlihat jelas. Saturnus adalah planet gas terbesar kedua setelah Jupiter.",
      },
      {
        pertanyaan: "Galaksi tempat tata surya kita berada disebut...",
        pilihan: [
          "Andromeda",
          "Triangulum",
          "Bimasakti (Milky Way)",
          "Magellan",
        ],
        jawaban: "Bimasakti (Milky Way)",
        penjelasan:
          "Tata surya kita berada di galaksi Bimasakti (Milky Way) — galaksi spiral berbentuk seperti cakram berputar dengan diameter ±100.000 tahun cahaya dan berisi ±200-400 miliar bintang. Galaksi Andromeda adalah galaksi spiral terdekat dengan Bimasakti.",
      },
      {
        pertanyaan:
          "Meteor yang berhasil mencapai permukaan Bumi tanpa habis terbakar disebut...",
        pilihan: ["Komet", "Asteroid", "Meteorit", "Nebula"],
        jawaban: "Meteorit",
        penjelasan:
          "Meteor = batu luar angkasa yang memasuki atmosfer Bumi dan terbakar (bintang jatuh). Meteorit = meteor yang berhasil mencapai permukaan Bumi. Asteroid = batu luar angkasa yang mengorbit Matahari. Komet = benda es dan debu yang mengorbit Matahari dengan ekor panjang.",
      },
      {
        pertanyaan: "Rotasi Bumi menyebabkan terjadinya...",
        pilihan: [
          "Pergantian musim",
          "Perbedaan waktu siang dan malam",
          "Gerhana Matahari",
          "Pasang surut air laut",
        ],
        jawaban: "Perbedaan waktu siang dan malam",
        penjelasan:
          "Rotasi Bumi (berputar pada sumbunya, 24 jam) → siang & malam. Revolusi Bumi (mengelilingi Matahari, 365 hari) → pergantian musim & tahun. Gerhana Matahari = posisi Bulan-Bumi-Matahari. Pasang surut = pengaruh gravitasi Bulan terhadap air laut.",
      },
      {
        pertanyaan:
          "Benda langit yang mengeluarkan ekor panjang saat mendekati Matahari adalah...",
        pilihan: ["Asteroid", "Meteoroid", "Satelit", "Komet"],
        jawaban: "Komet",
        penjelasan:
          "Komet adalah benda es, debu, dan gas beku yang mengorbit Matahari dengan lintasan lonjong (elips). Saat mendekati Matahari, es menguap membentuk koma (kepala kabut) dan ekor yang selalu menjauhi Matahari. Contoh terkenal: Komet Halley (muncul tiap ±76 tahun).",
      },
      {
        pertanyaan:
          "Fase Bulan saat seluruh sisi Bulan yang menghadap Bumi terlihat terang disebut...",
        pilihan: [
          "Bulan baru",
          "Bulan sabit",
          "Bulan purnama",
          "Bulan separuh",
        ],
        jawaban: "Bulan purnama",
        penjelasan:
          "Fase Bulan: Bulan baru (new moon) = tidak terlihat. Bulan sabit = seperempat terlihat. Bulan separuh (kuartal) = setengah terlihat. Bulan purnama (full moon) = seluruh sisi yang menghadap Bumi terlihat terang. Siklus lengkap ±29,5 hari.",
      },
    ],
    SMA: [
      {
        pertanyaan: "Teori yang menjelaskan asal-usul alam semesta adalah...",
        pilihan: [
          "Teori Keadaan Tetap",
          "Teori Big Bang",
          "Teori Nebula",
          "Teori Ekspansi",
        ],
        jawaban: "Teori Big Bang",
        penjelasan:
          "Teori Big Bang menyatakan alam semesta bermula dari singularitas (titik sangat padat dan panas) yang meledak ±13,8 miliar tahun lalu dan terus mengembang hingga kini. Buktinya: radiasi latar gelombang mikro kosmik (CMB) dan pergeseran merah galaksi-galaksi yang saling menjauh.",
      },
      {
        pertanyaan:
          "Bintang yang massanya sangat besar dan runtuh menjadi titik tanpa batas disebut...",
        pilihan: ["Bintang Neutron", "Katai Putih", "Lubang Hitam", "Nova"],
        jawaban: "Lubang Hitam",
        penjelasan:
          "Lubang Hitam (Black Hole) terbentuk saat bintang supermassif mati dan runtuh — gravitasinya begitu kuat sehingga tidak ada yang bisa lolos, termasuk cahaya. Katai Putih = sisa bintang bermassa sedang. Bintang Neutron = sisa supernova bermassa menengah. Nova = ledakan di permukaan bintang.",
      },
      {
        pertanyaan:
          "Hukum Kepler I menyatakan bahwa planet bergerak mengelilingi Matahari dalam lintasan berbentuk...",
        pilihan: ["Lingkaran sempurna", "Elips", "Parabola", "Hiperbola"],
        jawaban: "Elips",
        penjelasan:
          "Hukum Kepler I: Setiap planet bergerak mengelilingi Matahari dalam orbit berbentuk ELIPS dengan Matahari berada di salah satu titik fokusnya (bukan di pusat). Inilah mengapa jarak Bumi ke Matahari tidak selalu sama sepanjang tahun (perihelion vs aphelion).",
      },
      {
        pertanyaan:
          "Pergeseran merah (redshift) dalam astronomi menunjukkan bahwa galaksi-galaksi...",
        pilihan: [
          "Saling mendekat",
          "Saling menjauh",
          "Diam di tempat",
          "Berputar lebih cepat",
        ],
        jawaban: "Saling menjauh",
        penjelasan:
          "Redshift (pergeseran merah) terjadi karena efek Doppler — cahaya dari galaksi yang menjauh bergeser ke panjang gelombang merah (lebih panjang). Semakin jauh galaksi, semakin besar redshiftnya. Ini adalah bukti utama bahwa alam semesta terus mengembang, mendukung Teori Big Bang.",
      },
      {
        pertanyaan: "Satuan kecepatan cahaya di ruang hampa adalah...",
        pilihan: [
          "300.000 km/jam",
          "300.000 km/detik",
          "3.000.000 km/detik",
          "30.000 km/detik",
        ],
        jawaban: "300.000 km/detik",
        penjelasan:
          "Kecepatan cahaya (c) di ruang hampa = ±299.792 km/detik, dibulatkan menjadi 300.000 km/detik. Ini adalah batas kecepatan tertinggi di alam semesta menurut teori relativitas Einstein. Cahaya Matahari membutuhkan ±8 menit 20 detik untuk mencapai Bumi.",
      },
      {
        pertanyaan:
          "Zona di sekitar bintang yang memungkinkan kehidupan seperti Bumi ada disebut...",
        pilihan: [
          "Zona Kuiper",
          "Zona Oort",
          "Zona Habitable (Goldilocks Zone)",
          "Zona Corona",
        ],
        jawaban: "Zona Habitable (Goldilocks Zone)",
        penjelasan:
          "Zona Habitable (Goldilocks Zone) adalah wilayah di sekitar bintang di mana suhu memungkinkan air cair ada di permukaan planet — tidak terlalu panas, tidak terlalu dingin. Bumi berada di zona ini. Para astronom mencari exoplanet di zona ini untuk menemukan kemungkinan kehidupan luar angkasa.",
      },
      {
        pertanyaan: "Exoplanet adalah...",
        pilihan: [
          "Planet di tata surya kita",
          "Planet buatan manusia",
          "Planet di luar tata surya",
          "Bulan dari planet raksasa",
        ],
        jawaban: "Planet di luar tata surya",
        penjelasan:
          "Exoplanet (planet ekstrasurya) adalah planet yang mengorbit bintang selain Matahari kita. Per 2024, lebih dari 5.600 exoplanet telah dikonfirmasi. Sebagian besar ditemukan dengan metode transit (planet melewati depan bintang, menghalangi sebagian cahayanya) menggunakan teleskop Kepler dan TESS.",
      },
    ],
  },
  Psikologi: {
    SD: [
      {
        pertanyaan: "Perasaan senang, sedih, takut, dan marah disebut...",
        pilihan: ["Pikiran", "Emosi", "Imajinasi", "Ingatan"],
        jawaban: "Emosi",
        penjelasan:
          "Emosi adalah perasaan yang muncul sebagai respons terhadap situasi tertentu. Emosi dasar manusia meliputi: senang, sedih, takut, marah, jijik, dan terkejut (menurut psikolog Paul Ekman). Emosi bersifat universal — dirasakan oleh semua manusia di seluruh dunia.",
      },
      {
        pertanyaan:
          "Ketika kita mengingat sesuatu yang sudah lama terjadi, kita menggunakan...",
        pilihan: ["Emosi", "Memori/Ingatan", "Imajinasi", "Refleks"],
        jawaban: "Memori/Ingatan",
        penjelasan:
          "Memori (ingatan) adalah kemampuan otak untuk menyimpan dan mengingat kembali pengalaman atau informasi. Ada memori jangka pendek (short-term memory) dan memori jangka panjang (long-term memory). Otak bagian hippocampus berperan penting dalam pembentukan memori.",
      },
      {
        pertanyaan:
          "Rasa takut yang berlebihan terhadap sesuatu yang sebenarnya tidak berbahaya disebut...",
        pilihan: ["Trauma", "Fobia", "Stres", "Panik"],
        jawaban: "Fobia",
        penjelasan:
          "Fobia adalah rasa takut yang intens, tidak rasional, dan berlebihan terhadap objek atau situasi tertentu. Contoh: arachnofobia (takut laba-laba), acrophobia (takut ketinggian), claustrophobia (takut ruang sempit). Fobia bisa diatasi dengan terapi perilaku kognitif (CBT).",
      },
      {
        pertanyaan:
          "Ketika kita menirukan perilaku orang lain tanpa sadar, itu disebut...",
        pilihan: ["Kompetisi", "Imitasi", "Inovasi", "Isolasi"],
        jawaban: "Imitasi",
        penjelasan:
          "Imitasi adalah proses meniru perilaku, cara bicara, atau sikap orang lain — kadang tanpa kita sadari. Imitasi adalah cara utama anak-anak belajar di masa kecil. Ilmuwan menemukan 'mirror neurons' (neuron cermin) di otak yang aktif saat kita melihat orang lain melakukan sesuatu.",
      },
      {
        pertanyaan: "Tidur yang cukup penting bagi kesehatan mental karena...",
        pilihan: [
          "Membuat kita lebih malas",
          "Otak memproses dan menyimpan memori saat tidur",
          "Tidak ada hubungannya dengan otak",
          "Membuat kita lebih lapar",
        ],
        jawaban: "Otak memproses dan menyimpan memori saat tidur",
        penjelasan:
          "Saat tidur, otak aktif memproses pengalaman hari itu, mengkonsolidasikan memori, dan 'membersihkan' limbah metabolik otak. Kurang tidur menyebabkan sulit konsentrasi, mood buruk, memori lemah, dan sistem imun menurun. Remaja membutuhkan 8-10 jam tidur per malam.",
      },
      {
        pertanyaan:
          "Dorongan dari dalam diri sendiri untuk mencapai sesuatu disebut motivasi...",
        pilihan: ["Eksternal", "Internal/Intrinsik", "Sosial", "Fisik"],
        jawaban: "Internal/Intrinsik",
        penjelasan:
          "Motivasi intrinsik = dorongan dari dalam diri sendiri, karena genuinely menikmati atau peduli dengan sesuatu. Contoh: belajar karena ingin tahu, bukan karena takut nilai jelek. Motivasi ekstrinsik = dorongan dari luar (hadiah, hukuman). Motivasi intrinsik terbukti lebih tahan lama.",
      },
      {
        pertanyaan:
          "Kemampuan untuk memahami dan merasakan perasaan orang lain disebut...",
        pilihan: ["Simpati", "Empati", "Antipati", "Apati"],
        jawaban: "Empati",
        penjelasan:
          "Empati = kemampuan menempatkan diri pada posisi orang lain dan merasakan apa yang mereka rasakan. Simpati = merasa kasihan/peduli tanpa benar-benar 'masuk' ke perasaan mereka. Antipati = perasaan tidak suka. Apati = tidak peduli/acuh tak acuh. Empati adalah fondasi hubungan sosial yang sehat.",
      },
    ],
    SMP: [
      {
        pertanyaan:
          "Teori kebutuhan Maslow menyusun kebutuhan manusia dalam bentuk...",
        pilihan: ["Lingkaran", "Piramida", "Garis lurus", "Pohon"],
        jawaban: "Piramida",
        penjelasan:
          "Abraham Maslow menyusun hierarki kebutuhan dalam bentuk piramida 5 tingkat (dari bawah): (1) Kebutuhan fisiologis (makan, tidur), (2) Keamanan, (3) Cinta & kepunyaan sosial, (4) Penghargaan diri, (5) Aktualisasi diri (puncak). Kebutuhan dasar harus terpenuhi sebelum naik ke tingkat lebih tinggi.",
      },
      {
        pertanyaan:
          "Mekanisme pertahanan diri dengan cara menyangkal kenyataan yang menyakitkan disebut...",
        pilihan: [
          "Proyeksi",
          "Rasionalisasi",
          "Denial (Penyangkalan)",
          "Sublimasi",
        ],
        jawaban: "Denial (Penyangkalan)",
        penjelasan:
          "Mekanisme pertahanan ego (Freud) adalah cara bawah sadar melindungi diri dari kecemasan. Denial = menolak mengakui kenyataan yang menyakitkan. Proyeksi = memproyeksikan perasaan sendiri ke orang lain. Rasionalisasi = membuat alasan logis untuk perilaku yang sesungguhnya tidak rasional. Sublimasi = menyalurkan dorongan negatif ke kegiatan positif.",
      },
      {
        pertanyaan:
          "Kondisi ketika seseorang merasa tertekan, lelah, dan kewalahan akibat tekanan berkepanjangan disebut...",
        pilihan: ["Depresi", "Stres", "Burnout", "Fobia"],
        jawaban: "Stres",
        penjelasan:
          "Stres = respons tubuh dan pikiran terhadap tuntutan/tekanan yang dirasakan melebihi kemampuan kita. Stres jangka pendek bisa positif (eustres), tapi stres berkepanjangan merusak kesehatan. Burnout = kelelahan total akibat stres kerja/sekolah kronis. Depresi = gangguan mood yang lebih serius dan membutuhkan penanganan profesional.",
      },
      {
        pertanyaan:
          "Proses belajar di mana perilaku yang diberi hadiah cenderung diulang disebut...",
        pilihan: [
          "Classical conditioning",
          "Operant conditioning",
          "Observational learning",
          "Insight learning",
        ],
        jawaban: "Operant conditioning",
        penjelasan:
          "Operant Conditioning (B.F. Skinner): perilaku dibentuk oleh konsekuensinya. Reinforcement (hadiah) → perilaku diulang. Punishment → perilaku dihindari. Classical Conditioning (Pavlov): asosiasi stimulus netral dengan respons alami (eksperimen anjing & bel). Observational = belajar dengan mengamati orang lain.",
      },
      {
        pertanyaan:
          "Tahap perkembangan Piaget di mana anak mulai berpikir logis tentang objek konkret (7-11 tahun) disebut tahap...",
        pilihan: [
          "Sensorimotor",
          "Praoperasional",
          "Operasional Konkret",
          "Operasional Formal",
        ],
        jawaban: "Operasional Konkret",
        penjelasan:
          "Tahap perkembangan kognitif Piaget: (1) Sensorimotor (0-2 th) = belajar lewat indera & gerak. (2) Praoperasional (2-7 th) = mulai berbahasa, egosentris. (3) Operasional Konkret (7-11 th) = berpikir logis tentang hal nyata. (4) Operasional Formal (12+ th) = berpikir abstrak dan hipotetis.",
      },
      {
        pertanyaan:
          "Bias kognitif di mana kita cenderung mencari informasi yang membenarkan pendapat kita sendiri disebut...",
        pilihan: [
          "Halo Effect",
          "Confirmation Bias",
          "Dunning-Kruger Effect",
          "Anchoring Bias",
        ],
        jawaban: "Confirmation Bias",
        penjelasan:
          "Confirmation Bias = kecenderungan mencari, menafsirkan, dan mengingat informasi yang sesuai dengan keyakinan yang sudah ada. Inilah mengapa orang sulit mengubah pendapat meski ada bukti bertentangan. Halo Effect = kesan pertama memengaruhi penilaian keseluruhan. Dunning-Kruger = orang yang kurang kompeten justru merasa paling kompeten.",
      },
      {
        pertanyaan:
          "Kemampuan mengelola emosi diri sendiri dan memahami emosi orang lain disebut...",
        pilihan: [
          "IQ (Kecerdasan Intelektual)",
          "EQ (Kecerdasan Emosional)",
          "SQ (Kecerdasan Spiritual)",
          "AQ (Adversity Quotient)",
        ],
        jawaban: "EQ (Kecerdasan Emosional)",
        penjelasan:
          "EQ (Emotional Intelligence, Daniel Goleman) mencakup: kesadaran diri, pengelolaan emosi, motivasi diri, empati, dan keterampilan sosial. Penelitian menunjukkan EQ sering lebih memprediksi kesuksesan hidup dibanding IQ. IQ = kemampuan kognitif/logis. AQ = kemampuan menghadapi kesulitan.",
      },
    ],
    SMA: [
      {
        pertanyaan:
          "Teori kepribadian Freud membagi pikiran manusia menjadi tiga bagian, yaitu...",
        pilihan: [
          "Id, Ego, Superego",
          "Sadar, Prasadar, Tidak Sadar",
          "Eros, Thanatos, Libido",
          "Persona, Anima, Shadow",
        ],
        jawaban: "Id, Ego, Superego",
        penjelasan:
          "Struktur kepribadian Freud: Id = bagian primitif, prinsip kesenangan, menginginkan kepuasan segera. Ego = mediator antara Id dan realitas, prinsip realitas. Superego = moral/nurani, internalisasi norma masyarakat. Ketiganya sering berkonflik, dan ego berusaha menyeimbangkan Id dan Superego.",
      },
      {
        pertanyaan:
          "Eksperimen Milgram (1961) menunjukkan bahwa manusia cenderung...",
        pilihan: [
          "Selalu menentang otoritas",
          "Mematuhi otoritas meski melanggar etika",
          "Tidak terpengaruh tekanan sosial",
          "Selalu bersikap altruistik",
        ],
        jawaban: "Mematuhi otoritas meski melanggar etika",
        penjelasan:
          "Eksperimen Milgram: partisipan diperintahkan memberikan kejutan listrik ke orang lain oleh figur otoritas (ilmuwan). Hasilnya mengejutkan: 65% partisipan terus mematuhi hingga tegangan maksimum (450V). Eksperimen ini menunjukkan betapa kuatnya pengaruh otoritas terhadap perilaku manusia — relevan untuk memahami kepatuhan buta dalam sejarah.",
      },
      {
        pertanyaan:
          "Konsep 'self-fulfilling prophecy' dalam psikologi berarti...",
        pilihan: [
          "Kita selalu mendapat apa yang kita inginkan",
          "Keyakinan tentang sesuatu dapat membuat keyakinan itu menjadi kenyataan",
          "Ramalan masa depan selalu akurat",
          "Orang selalu memenuhi harapan diri sendiri",
        ],
        jawaban:
          "Keyakinan tentang sesuatu dapat membuat keyakinan itu menjadi kenyataan",
        penjelasan:
          "Self-fulfilling prophecy = ekspektasi/keyakinan tentang seseorang atau situasi yang akhirnya terwujud karena keyakinan itu sendiri memengaruhi perilaku. Contoh: guru yang yakin muridnya pintar → lebih banyak memberi perhatian → murid benar-benar berkembang lebih baik (Efek Pygmalion/Rosenthal).",
      },
      {
        pertanyaan:
          "Dalam psikologi, 'locus of control' internal berarti seseorang percaya bahwa...",
        pilihan: [
          "Nasib dikendalikan oleh takdir",
          "Keberhasilan ditentukan oleh keberuntungan",
          "Dirinya sendiri yang menentukan hasil hidupnya",
          "Orang lain yang mengontrol hidupnya",
        ],
        jawaban: "Dirinya sendiri yang menentukan hasil hidupnya",
        penjelasan:
          "Locus of Control (Julian Rotter): Internal = percaya bahwa hasil hidup ditentukan oleh tindakan dan usaha diri sendiri → cenderung lebih aktif, bertanggung jawab, dan resilien. Eksternal = percaya bahwa nasib ditentukan oleh faktor luar (takdir, keberuntungan, orang lain) → cenderung pasif dan mudah menyerah.",
      },
      {
        pertanyaan: "Fenomena 'bystander effect' terjadi ketika...",
        pilihan: [
          "Semakin banyak orang yang menyaksikan, semakin kecil kemungkinan seseorang menolong",
          "Orang ramai-ramai menolong korban",
          "Seseorang menolong karena melihat orang lain menolong",
          "Kerumunan membuat orang lebih berani",
        ],
        jawaban:
          "Semakin banyak orang yang menyaksikan, semakin kecil kemungkinan seseorang menolong",
        penjelasan:
          "Bystander Effect (Darley & Latané, 1968): semakin banyak saksi dalam situasi darurat, semakin kecil kemungkinan individu tertentu membantu — karena terjadi 'diffusion of responsibility' (tanggung jawab terasa terbagi). Kasus pemicu penelitian ini: pembunuhan Kitty Genovese yang disaksikan ±38 tetangga tanpa ada yang memanggil polisi.",
      },
      {
        pertanyaan:
          "Pendekatan psikologi yang berfokus pada kekuatan, potensi, dan kesejahteraan manusia disebut...",
        pilihan: [
          "Psikoanalisis",
          "Behaviorisme",
          "Psikologi Positif",
          "Humanisme",
        ],
        jawaban: "Psikologi Positif",
        penjelasan:
          "Psikologi Positif (Martin Seligman, 1990-an) berfokus pada apa yang membuat hidup bermakna dan sejahtera — bukan sekadar mengobati gangguan mental. Konsep utama: PERMA (Positive emotions, Engagement, Relationships, Meaning, Achievement). Berbeda dengan Humanisme (Maslow, Rogers) yang lebih filosofis, Psikologi Positif berbasis riset empiris.",
      },
      {
        pertanyaan:
          "Kondisi psikologis saat seseorang sepenuhnya terserap dalam aktivitas sehingga kehilangan rasa waktu disebut...",
        pilihan: ["Meditasi", "Flow", "Trance", "Hipnosis"],
        jawaban: "Flow",
        penjelasan:
          "Flow (Mihaly Csikszentmihalyi) = kondisi 'optimal experience' di mana seseorang begitu terfokus dan terlibat dalam aktivitas sehingga merasa lupa waktu, lupa diri, dan sangat menikmati prosesnya. Flow terjadi saat tantangan seimbang dengan kemampuan. Aktivitas yang sering memicu flow: melukis, bermain musik, coding, olahraga.",
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

// ===== NAVIGASI HALAMAN (dengan transisi) =====
function tampilkanHalaman(idHalaman) {
  const overlay = document.getElementById("page-overlay");
  const halamanBaru = document.getElementById(idHalaman);

  // Flash overlay
  overlay.classList.add("flash");

  setTimeout(() => {
    // Sembunyikan semua halaman
    document.querySelectorAll(".page").forEach((p) => {
      p.classList.remove("active", "visible");
    });

    // Tampilkan halaman baru
    halamanBaru.classList.add("active");

    // Scroll ke atas
    window.scrollTo(0, 0);

    // Trigger animasi masuk setelah satu frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        halamanBaru.classList.add("visible");
        overlay.classList.remove("flash");
      });
    });
  }, 180);
}

// ===== PILIH KATEGORI =====
function pilihKategori(el) {
  document
    .querySelectorAll(".category-card")
    .forEach((c) => c.classList.remove("selected"));
  el.classList.add("selected");
  pilihanKategoriUser = el.dataset.kategori;
  pilihanJenjangUser = null;
  document
    .querySelectorAll('input[name="jenjang"]')
    .forEach((r) => (r.checked = false));
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
  document.getElementById("kuis-kategori-label").textContent =
    pilihanKategoriUser;
  document.getElementById("kuis-jenjang-label").textContent =
    pilihanJenjangUser;
  tampilkanHalaman("page-kuis");
  tampilkanSoal();
}

// ===== TAMPILKAN SOAL =====
function tampilkanSoal() {
  tutupBreakdown();
  const soal = soalAktif[nomorSoalAktif];
  const total = soalAktif.length;
  const persen = (nomorSoalAktif / total) * 100;
  document.getElementById("progress-fill").style.width = persen + "%";
  document.getElementById("progress-text").textContent =
    `Soal ${nomorSoalAktif + 1} dari ${total}`;
  document.getElementById("soal-number").textContent = String(
    nomorSoalAktif + 1,
  ).padStart(2, "0");
  document.getElementById("pertanyaan-text").textContent = soal.pertanyaan;

  const grid = document.getElementById("pilihan-grid");
  grid.innerHTML = "";
  const labels = ["A", "B", "C", "D"];
  soal.pilihan.forEach((pilihan, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-pilihan";
    btn.innerHTML = `<span class="pilihan-label">${labels[idx]}</span><span>${pilihan}</span>`;
    btn.onclick = () =>
      prosesJawaban(btn, pilihan, soal.jawaban, soal.penjelasan);
    grid.appendChild(btn);
  });
}

// ===== PROSES JAWABAN =====
function prosesJawaban(btnDiklik, jawabanPilih, jawabanKunci, penjelasan) {
  const semuaTombol = document.querySelectorAll(".btn-pilihan");
  semuaTombol.forEach((btn) => (btn.disabled = true));

  const benar = jawabanPilih === jawabanKunci;

  if (benar) {
    btnDiklik.classList.add("benar");
    skorSaatIni += 10;
    jawabanBenar++;
  } else {
    btnDiklik.classList.add("salah");
    semuaTombol.forEach((btn) => {
      const teks = btn.querySelector("span:last-child").textContent;
      if (teks === jawabanKunci) btn.classList.add("benar");
    });
  }

  // Tampilkan panel breakdown setelah menjawab
  tampilkanBreakdown(benar, jawabanPilih, jawabanKunci, penjelasan);
}

// ===== TAMPILKAN BREAKDOWN =====
function tampilkanBreakdown(benar, jawabanPilih, jawabanKunci, penjelasan) {
  const panel = document.getElementById("breakdown-panel");
  const icon = document.getElementById("breakdown-icon");
  const judul = document.getElementById("breakdown-judul");
  const pilihanInfo = document.getElementById("breakdown-pilihan");
  const penjelasanEl = document.getElementById("breakdown-penjelasan");

  panel.className =
    "breakdown-panel " + (benar ? "breakdown-benar" : "breakdown-salah");

  if (benar) {
    icon.textContent = "✅";
    judul.textContent = "Jawaban Kamu Benar!";
    pilihanInfo.innerHTML = `<span class="bd-label bd-benar">Jawaban kamu:</span> <strong>${jawabanPilih}</strong>`;
  } else {
    icon.textContent = "❌";
    judul.textContent = "Jawaban Kamu Salah";
    pilihanInfo.innerHTML = `
      <div><span class="bd-label bd-salah">Jawaban kamu:</span> <strong>${jawabanPilih}</strong></div>
      <div><span class="bd-label bd-benar">Jawaban benar:</span> <strong>${jawabanKunci}</strong></div>
    `;
  }

  penjelasanEl.textContent = penjelasan;

  panel.classList.add("show");

  // Scroll ke panel
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ===== TUTUP BREAKDOWN & LANJUT =====
function lanjutSoal() {
  tutupBreakdown();
  nomorSoalAktif++;
  if (nomorSoalAktif < soalAktif.length) {
    tampilkanSoal();
  } else {
    tampilkanHasil();
  }
}

function tutupBreakdown() {
  const panel = document.getElementById("breakdown-panel");
  panel.classList.remove("show");
}

// ===== TAMPILKAN HASIL =====
function tampilkanHasil() {
  tampilkanHalaman("page-hasil");
  const total = soalAktif.length;
  const salah = total - jawabanBenar;
  const nilaiAkhir = Math.round((jawabanBenar / total) * 100);
  const persentaseRing = (jawabanBenar / total) * 327;

  document.getElementById("skor-angka").textContent = nilaiAkhir;
  document.getElementById("detail-benar").textContent = jawabanBenar;
  document.getElementById("detail-salah").textContent = salah;
  document.getElementById("detail-total").textContent = total;

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
  animasiAngka(document.getElementById("skor-angka"), nilaiAkhir);

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
  const langkah = targetAngka / (1000 / 16);
  const interval = setInterval(() => {
    current = Math.min(current + langkah, targetAngka);
    el.textContent = Math.round(current);
    if (current >= targetAngka) clearInterval(interval);
  }, 16);
}

// ===== RESET =====
function resetKuis() {
  pilihanKategoriUser = null;
  pilihanJenjangUser = null;
  skorSaatIni = 0;
  nomorSoalAktif = 0;
  soalAktif = [];
  jawabanBenar = 0;
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
  tutupBreakdown();
  tampilkanHalaman("page-home");
}

function kembaliKeHome() {
  resetKuis();
}

// ===== INISIALISASI + LOADING SCREEN =====
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("jenjang-section").style.display = "none";

  const loadingScreen = document.getElementById("loading-screen");
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");
  const homePage = document.getElementById("page-home");

  const pesanLoading = [
    "Memuat soal...",
    "Menyusun kategori...",
    "Hampir siap...",
  ];

  let progress = 0;
  let pesanIdx = 0;

  // Animasi progress bar
  const interval = setInterval(() => {
    // Kecepatan naik tidak linear — lambat di awal, cepat di tengah, lambat lagi di akhir
    const tambah = progress < 60 ? 3 : progress < 85 ? 5 : 1.5;
    progress = Math.min(progress + tambah, 95);
    loadingBar.style.width = progress + "%";

    // Ganti teks loading secara bertahap
    const idx = Math.floor((progress / 95) * pesanLoading.length);
    if (idx !== pesanIdx && idx < pesanLoading.length) {
      pesanIdx = idx;
      loadingText.style.opacity = "0";
      setTimeout(() => {
        loadingText.textContent = pesanLoading[pesanIdx];
        loadingText.style.opacity = "1";
      }, 200);
    }
  }, 60);

  // Selesai loading setelah semua resource siap (min 1.8 detik)
  const selesai = () => {
    clearInterval(interval);
    loadingBar.style.width = "100%";
    loadingText.style.opacity = "0";

    setTimeout(() => {
      // Fade out loading screen
      loadingScreen.classList.add("fade-out");

      // Tampilkan halaman utama dengan animasi masuk
      homePage.classList.add("active");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          homePage.classList.add("visible");
        });
      });

      // Hapus loading screen dari DOM setelah animasi selesai
      setTimeout(() => loadingScreen.remove(), 600);
    }, 300);
  };

  // Tunggu font + minimum durasi loading
  const minDurasi = new Promise((r) => setTimeout(r, 1800));
  const fontSiap = document.fonts ? document.fonts.ready : Promise.resolve();

  Promise.all([minDurasi, fontSiap]).then(selesai);
});
