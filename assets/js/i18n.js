/**
 * Diyanto Portfolio - Internationalization (i18n) Module
 * Supports Indonesian (ID) and English (EN)
 */

const translations = {
  id: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.experience': 'Pengalaman',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Produk & Proyek',
    'nav.contact': 'Kontak',
    'nav.hire_me': 'Hire Me',

    // Hero Section
    'hero.available': 'Tersedia untuk Kontrak Remote & Proyek Kritis',
    'hero.title': 'Membangun Aplikasi Skala Besar dengan <span class="gradient-text">Flutter & Modern Engineering</span>.',
    'hero.bio': 'Halo, saya <strong>Diyanto</strong>. Software Engineer yang berpengalaman merancang aplikasi mobile berkinerja tinggi, mengintegrasikan kecerdasan buatan (AI), pipeline CI/CD instan, serta arsitektur backend yang tangguh.',
    'hero.btn_projects': 'Eksplorasi Produk & Proyek',
    'hero.btn_contact': 'Hubungi Saya',
    'hero.metric_exp_val': '5+ Thn',
    'hero.metric_exp': 'Pengalaman Rekayasa',
    'hero.metric_cicd_val': '8 Menit',
    'hero.metric_cicd': 'CI/CD Deployment',
    'hero.metric_offline_val': '100%',
    'hero.metric_offline': 'Offline-First & Reliability',
    'hero.photo_status': 'Tersedia untuk Remote',
    'hero.photo_badge': 'Flutter & Mobile Specialist',
    'hero.photo_exp': '5+ Thn Rekayasa',
    'hero.photo_role': 'Software Engineer',
    'hero.photo_location': 'Indramayu, Jawa Barat',
    'hero.photo_view_bio': 'Lihat Profil',

    // About Section
    'about.subtitle': 'Profil Profesional',
    'about.title': 'Spesialis Aplikasi Skalabel Berbasis Pengalaman Nyata',
    'about.card1_title': 'Dedikasi Rekayasa Perangkat Lunak',
    'about.card1_desc': 'Praktisi pengembangan mobile dinamis dengan rekam jejak terbukti dalam membangun aplikasi yang intuitif dan berorientasi pada kenyamanan pengguna. Menguasai ekosistem Flutter secara mendalam, optimalisasi performa rendah latensi menggunakan Android NDK, hingga implementasi kecerdasan buatan (AI) terapan pada aplikasi mobile.',
    'about.card2_title': 'Latar Belakang Pendidikan & Prestasi',
    'about.edu_degree': 'Diploma (D3) Teknik Informatika',
    'about.edu_school': 'Politeknik Negeri Indramayu (Lulus 10/2020)',
    'about.edu_item1': 'Penerima penghargaan <strong>Awarded Best Project in Informatics Engineering</strong>.',
    'about.edu_item2': 'Aktif dalam program pengabdian masyarakat pemberdayaan UMKM (Mangoline).',

    // Experience Section
    'experience.subtitle': 'Riwayat Karier',
    'experience.title': 'Perjalanan Profesional & Kontribusi Industri',
    'exp.job1_period': '04/2025 – Sekarang',
    'exp.job1_role': 'Mobile Developer',
    'exp.job1_desc': 'Menyederhanakan pengujian dengan Continuous Integration (CI), optimalisasi performa aplikasi skala besar, dan mendukung sistem legacy dengan peningkatan fitur berkala.',
    'exp.job2_period': '01/2025 – 04/2025',
    'exp.job2_role': 'Mobile Developer',
    'exp.job2_desc': 'Membangun mobile apps B2B & B2C untuk iOS dan Android, mengintegrasikan fitur Artificial Intelligence (AI) langsung ke dalam mobile workflow.',
    'exp.job3_period': '05/2024 – 12/2024',
    'exp.job3_role': 'Software Engineer',
    'exp.job3_desc': 'Memimpin pengembangan frontend portal pinjaman berkeandalan tinggi serta membangun pipeline CI/CD yang memangkas durasi deploy dari <strong>1 hari menjadi hanya 8 menit</strong>.',
    'exp.job4_period': '09/2022 – 05/2024',
    'exp.job4_role': 'Software Engineer',
    'exp.job4_desc': 'Merancang aplikasi mobile pemantauan budidaya tambak udang, tata kelola data terpusat, dan script automasi pemrosesan log lapangan.',
    'exp.job5_period': '02/2022 – 12/2022',
    'exp.job5_role': 'Mobile Developer (Freelance)',
    'exp.job5_desc': 'Membangun platform media sosial dengan integrasi E-KYC ketat, modul kamera kustom, dan optimasi performa native via Android NDK.',
    'exp.job6_period': '04/2021 – 10/2022',
    'exp.job6_role': 'Full Stack Developer',
    'exp.job6_desc': 'Merancang sistem CRM & CSS terintegrasi, menerapkan unit testing menyeluruh, serta mendongkrak retensi keterlibatan pengguna sebesar 40%.',

    // Skills Section
    'skills.subtitle': 'Peralatan & Kemampuan',
    'skills.title': 'Tech Stack Teruji',

    // Projects Section & Spotlight
    'projects.subtitle': 'Showcase Produk & Rekayasa',
    'projects.title': 'Produk Mandiri & Proyek Rekayasa',
    'spotlight.badge_flagship': 'Flagship Proprietary Product',
    'spotlight.badge_mobile': 'Mobile (Android & iOS)',
    'spotlight.badge_local': '100% Local-First (Zero Server Cost)',
    'spotlight.meta_credit': 'Didesain & Direkayasa Mandiri • 2025',
    'spotlight.tagline': '"Asisten Cerdas Operasional, Finansial & Pre-Order UMKM Kuliner"',
    'spotlight.desc': 'Platform produktivitas dapur modern yang dirancang untuk mengatasi fenomena <em>"Pesanan Ramai di WhatsApp, Tapi Keuntungan Tidak Terasa"</em> pada bisnis Pre-Order (PO), katering rumahan, dan frozen food. Mengubah proses dapur manual menjadi alur otomatis berkecepatan tinggi: dari materi promosi WhatsApp ber-QRIS otomatis, nota struk gambar resmi, hingga pemisahan modal belanja dan laba riil (<strong>Saldo Bati</strong>).',
    'spotlight.metric1_val': '10 Detik',
    'spotlight.metric1_lbl': 'Buat Flyer PO & Nota',
    'spotlight.metric2_val': 'Rp 0',
    'spotlight.metric2_lbl': 'Biaya Server / Bulanan',
    'spotlight.metric3_val': '100%',
    'spotlight.metric3_lbl': 'Kontrol Piutang Kasbon',
    'spotlight.pill1_title': 'Broadcast PO Gambar + QRIS',
    'spotlight.pill1_desc': 'Flyer resolusi tinggi (3x ratio) tersemat QRIS & teks WhatsApp broadcast langsung siap kirim 1-klik.',
    'spotlight.pill2_title': 'Nota Gambar Digital (Receipt Card)',
    'spotlight.pill2_desc': 'Struk tiket belanja premium dengan stempel LUNAS / DP langsung via WhatsApp mengakhiri nota manual kertas.',
    'spotlight.pill3_title': 'Disiplin Saldo Bati (Laba Bersih)',
    'spotlight.pill3_desc': 'Pemisahan otomatis modal bahan baku vs laba riil agar tidak boncos terpakai konsumsi pribadi.',
    'spotlight.pill4_title': 'Kelola Modal Beku (Chiller/Freezer)',
    'spotlight.pill4_desc': 'Pantau sisa porsi dan valuasi rupiah di lemari pendingin agar aset tidak basi dan siap dijual kembali.',
    'spotlight.btn_explore': 'Eksplorasi Fitur & Studi Kasus Lengkap',

    // Filter Buttons
    'filter.header_title': 'Eksplorasi Seluruh Proyek',
    'filter.header_desc': 'Pilih kategori untuk memfilter portofolio berdasarkan domain produk atau industri.',
    'filter.all': 'Semua',
    'filter.product': '⭐ Produk Mandiri & SDK',
    'filter.mobile': 'Mobile Apps',
    'filter.fintech': 'Fintech & CI/CD',
    'filter.iot': 'IoT & Tools',

    // Project Cards Quick Action
    'cards.detail_btn': 'Detail',

    // Project Cards Content (ID)
    'card.batiku.badge': 'Flagship Product',
    'card.batiku.title': 'BatiKu (Smart Kitchen & Pre-Order)',
    'card.batiku.desc': 'Asisten operasional UMKM kuliner pre-order (PO) & katering. Generator flyer visual WA ber-QRIS otomatis, nota gambar resmi, pelacak modal beku chiller, dan proteksi saldo laba bersih.',
    'card.batiku.footer': '100% Local-First (Free Server)',

    'card.dpos.badge': 'Produk Mandiri • POS',
    'card.dpos.title': 'DPOS (Point of Sale & QR Self-Order)',
    'card.dpos.desc': 'Sistem kasir modular F&B & retail terintegrasi printer thermal bluetooth ESC/POS, manajemen inventaris offline-first, dan pemesanan mandiri via dynamic QR code.',
    'card.dpos.footer': 'Sistem Retail & F&B',

    'card.escpos.badge': 'Developer SDK',
    'card.escpos.title': 'Thermal ESC/POS Custom SDK',
    'card.escpos.desc': 'Library Dart kustom berkinerja tinggi untuk manipulasi byte stream ESC/POS, dithering bitmap logo monokrom tajam, dan koneksi BLE 5.0 tanpa lag.',
    'card.escpos.footer': 'Hardware & IoT SDK',

    'card.masjid.badge': 'Produk Mandiri • Smart TV',
    'card.masjid.title': 'Digital Signage & Smart System Masjid',
    'card.masjid.desc': 'Sistem signage Android TV/STB cerdas dan panel remote PWA pengurus DKM. Otomasi transisi adzan-iqamah 4-fase, laporan kas realtime Firestore, overscan-safe, dan native boot Kotlin.',
    'card.masjid.footer': 'Smart TV & Web PWA',

    'card.loan.badge': 'Fintech & CI/CD',
    'card.loan.title': 'Loan Portal & CI/CD Deployment',
    'card.loan.desc': 'Arsitektur portal pinjaman bereputasi tinggi dengan frontend responsif dan pipeline CI/CD instan dari 1 hari menjadi 8 menit deploy.',
    'card.loan.footer': 'PT Beruang Maia Raya',

    'card.ekyc.badge': 'Mobile & Native NDK',
    'card.ekyc.title': 'Social Platform with E-KYC Module',
    'card.ekyc.desc': 'Aplikasi mobile dengan sistem verifikasi identitas (E-KYC), modul kamera kustom, serta optimasi pemrosesan citra via Android NDK.',
    'card.ekyc.footer': 'PT Asli RI',

    'card.shrimp.badge': 'Aquaculture IoT',
    'card.shrimp.title': 'Shrimp Farm Monitoring System',
    'card.shrimp.desc': 'Solusi monitoring operasional tambak udang terintegrasi data log, metrik kualitas air, dan script otomatisasi manajemen data lapangan.',
    'card.shrimp.footer': 'PT Delos Maritim',

    'card.banking.badge': 'Banking Tech',
    'card.banking.title': 'Digital Banking Platform',
    'card.banking.desc': 'Memimpin 3 developer dalam refactoring arsitektur kode dan pengembangan fitur perbankan digital yang aman dan skalabel.',
    'card.banking.footer': 'PT Beruang Maia Raya',

    'card.ai.badge': 'AI & Enterprise',
    'card.ai.title': 'AI-Powered B2B & B2C Mobile App',
    'card.ai.desc': 'Implementasi AI pada mobile app untuk meningkatkan otomatisasi dan interaksi pengguna B2B maupun B2C di iOS dan Android.',
    'card.ai.footer': 'PT Aplikasi Lintas Bangsa (Ximply)',

    'card.award.badge': 'Academic Award',
    'card.award.title': 'Awarded Best Project Informatics',
    'card.award.desc': 'Proyek akhir rekayasa perangkat lunak terpilih sebagai proyek terbaik di Politeknik Negeri Indramayu dengan keunggulan fungsionalitas dan arsitektur.',
    'card.award.footer': 'Politeknik Negeri Indramayu',

    // Contact Section
    'contact.subtitle': 'Mari Berkolaborasi',
    'contact.title': 'Hubungi Saya Langsung',
    'contact.desc': 'Terbuka untuk posisi Software Engineer, Senior Mobile Developer, konsultasi arsitektur aplikasi mobile, atau proyek berdaya jangkau tinggi.',
    'contact.name_label': 'Nama Lengkap',
    'contact.name_placeholder': 'John Doe',
    'contact.email_label': 'Email / Kontak',
    'contact.email_placeholder': 'john@example.com',
    'contact.subject_label': 'Subjek Pesan',
    'contact.subject_placeholder': 'Tawaran Kolaborasi / Remote Job',
    'contact.message_label': 'Pesan',
    'contact.message_placeholder': 'Tuliskan kebutuhan proyek atau diskusi teknis...',
    'contact.submit_btn': 'Kirim Pesan Sekarang',
    'contact.feedback': 'Pesan berhasil disiapkan! Mengalihkan ke email client...',

    // Footer
    'footer.copyright': '© 2026 Diyanto. Software Engineer & Mobile Specialist.',
    'footer.back_to_top': 'Kembali ke Atas ↑',

    // Modal Titles
    'modal.summary_title': 'Ringkasan Proyek',
    'modal.features_title': 'Fitur & Arsitektur Utama',
    'modal.impact_title': 'Dampak Bisnis & Nilai Solusi',
    'modal.tech_title': 'Teknologi Digunakan',
    'modal.close_btn': 'Tutup'
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Products & Projects',
    'nav.contact': 'Contact',
    'nav.hire_me': 'Hire Me',

    // Hero Section
    'hero.available': 'Available for Remote Roles & High-Impact Projects',
    'hero.title': 'Engineering Scalable Systems with <span class="gradient-text">Flutter & Modern Engineering</span>.',
    'hero.bio': 'Hello, I\'m <strong>Diyanto</strong>. A Software Engineer specialized in designing high-performance mobile applications, AI integration, rapid CI/CD deployment pipelines, and resilient backend architectures.',
    'hero.btn_projects': 'Explore Products & Projects',
    'hero.btn_contact': 'Get In Touch',
    'hero.metric_exp_val': '5+ Yrs',
    'hero.metric_exp': 'Engineering Experience',
    'hero.metric_cicd_val': '8 Mins',
    'hero.metric_cicd': 'CI/CD Deployment',
    'hero.metric_offline_val': '100%',
    'hero.metric_offline': 'Offline-First & Reliability',
    'hero.photo_status': 'Available for Remote',
    'hero.photo_badge': 'Flutter & Mobile Specialist',
    'hero.photo_exp': '5+ Yrs Engineering',
    'hero.photo_role': 'Software Engineer',
    'hero.photo_location': 'Indramayu, West Java',
    'hero.photo_view_bio': 'View Profile',

    // About Section
    'about.subtitle': 'Professional Profile',
    'about.title': 'Scalable Mobile Specialist Grounded in Real-World Impact',
    'about.card1_title': 'Software Engineering Dedication',
    'about.card1_desc': 'Dynamic mobile software engineer with a proven track record of engineering intuitive, user-centric applications. Deep mastery in the Flutter ecosystem, low-latency performance tuning leveraging Android NDK, and practical AI implementations in production mobile applications.',
    'about.card2_title': 'Education & Honors',
    'about.edu_degree': 'Associate Degree (D3) in Informatics Engineering',
    'about.edu_school': 'State Polytechnic of Indramayu (Graduated 10/2020)',
    'about.edu_item1': 'Recipient of <strong>Awarded Best Project in Informatics Engineering</strong>.',
    'about.edu_item2': 'Active in community empowerment initiatives for culinary MSMEs (Mangoline).',

    // Experience Section
    'experience.subtitle': 'Career Trajectory',
    'experience.title': 'Professional Journey & Industry Impact',
    'exp.job1_period': '04/2025 – Present',
    'exp.job1_role': 'Mobile Developer',
    'exp.job1_desc': 'Streamlined testing workflows using Continuous Integration (CI), optimized large-scale app performance, and maintained legacy systems with continuous feature enhancements.',
    'exp.job2_period': '01/2025 – 04/2025',
    'exp.job2_role': 'Mobile Developer',
    'exp.job2_desc': 'Engineered B2B & B2C mobile applications for iOS and Android, directly integrating Artificial Intelligence (AI) features into mobile user workflows.',
    'exp.job3_period': '05/2024 – 12/2024',
    'exp.job3_role': 'Software Engineer',
    'exp.job3_desc': 'Led frontend development of a high-availability loan portal and architected CI/CD pipelines reducing deployment turnaround from <strong>1 day down to just 8 minutes</strong>.',
    'exp.job4_period': '09/2022 – 05/2024',
    'exp.job4_role': 'Software Engineer',
    'exp.job4_desc': 'Engineered mobile monitoring application for shrimp aquaculture, centralized data management, and automation scripts for processing field sensor logs.',
    'exp.job5_period': '02/2022 – 12/2022',
    'exp.job5_role': 'Mobile Developer (Freelance)',
    'exp.job5_desc': 'Developed social media platform featuring strict E-KYC verification, custom camera modules, and native performance optimization using Android NDK.',
    'exp.job6_period': '04/2021 – 10/2022',
    'exp.job6_role': 'Full Stack Developer',
    'exp.job6_desc': 'Architected integrated CRM & CSS systems, instituted comprehensive unit testing, and boosted user engagement retention by 40%.',

    // Skills Section
    'skills.subtitle': 'Tooling & Capabilities',
    'skills.title': 'Battle-Tested Tech Stack',

    // Projects Section & Spotlight
    'projects.subtitle': 'Product Showcase & Engineering',
    'projects.title': 'Independent Products & Engineering Projects',
    'spotlight.badge_flagship': 'Flagship Proprietary Product',
    'spotlight.badge_mobile': 'Mobile (Android & iOS)',
    'spotlight.badge_local': '100% Local-First (Zero Server Cost)',
    'spotlight.meta_credit': 'Designed & Engineered Independently • 2025',
    'spotlight.tagline': '"Smart Kitchen Operational, Financial & Pre-Order Culinary Assistant"',
    'spotlight.desc': 'A modern kitchen productivity platform engineered to resolve the common dilemma <em>"High WhatsApp orders, yet elusive profits"</em> in Pre-Order (PO), home catering, and frozen food businesses. Transforms manual kitchen operations into high-speed automation: from automated WhatsApp flyers with embedded QRIS, official digital receipt images, to strict separation of operating capital from real net profit (<strong>Saldo Bati</strong>).',
    'spotlight.metric1_val': '10 Secs',
    'spotlight.metric1_lbl': 'Generate Flyer & Receipt',
    'spotlight.metric2_val': '$0',
    'spotlight.metric2_lbl': 'Server Cost / Subscription',
    'spotlight.metric3_val': '100%',
    'spotlight.metric3_lbl': 'Receivables / Debt Control',
    'spotlight.pill1_title': 'PO Flyer Broadcast + QRIS',
    'spotlight.pill1_desc': 'High-resolution flyer (3x pixel ratio) with embedded store QRIS and ready-to-share WhatsApp caption in 1 click.',
    'spotlight.pill2_title': 'Digital Receipt Image Card',
    'spotlight.pill2_desc': 'Premium digital ticket receipt with PAID / Down-Payment stamp directly via WhatsApp ending paper slips.',
    'spotlight.pill3_title': 'Real Net Profit Discipline (Saldo Bati)',
    'spotlight.pill3_desc': 'Automatic separation of kitchen raw material capital from real net profit to prevent personal overspending.',
    'spotlight.pill4_title': 'Frozen Inventory Valuation (Chiller)',
    'spotlight.pill4_desc': 'Monitor leftover portions and monetary valuation in the freezer to prevent food waste and monetize stock.',
    'spotlight.btn_explore': 'Explore Features & Case Study',

    // Filter Buttons
    'filter.header_title': 'Explore All Engineering Projects',
    'filter.header_desc': 'Filter portfolio by product domain or industry engineering focus.',
    'filter.all': 'All',
    'filter.product': '⭐ Independent Products & SDK',
    'filter.mobile': 'Mobile Apps',
    'filter.fintech': 'Fintech & CI/CD',
    'filter.iot': 'IoT & Tools',

    // Project Cards Quick Action
    'cards.detail_btn': 'Details',

    // Project Cards Content (EN)
    'card.batiku.badge': 'Flagship Product',
    'card.batiku.title': 'BatiKu (Smart Kitchen & Pre-Order)',
    'card.batiku.desc': 'Operational assistant for culinary MSMEs, pre-orders (PO) & catering. Automated WhatsApp flyer generator with QRIS, official receipt cards, frozen inventory tracker, and net profit safeguard.',
    'card.batiku.footer': '100% Local-First (Zero Server Cost)',

    'card.dpos.badge': 'Proprietary • POS',
    'card.dpos.title': 'DPOS (Point of Sale & QR Self-Order)',
    'card.dpos.desc': 'Modular F&B & retail POS system integrated with ESC/POS bluetooth thermal printer, offline-first inventory management, and self-ordering via dynamic QR codes.',
    'card.dpos.footer': 'Retail & F&B System',

    'card.escpos.badge': 'Developer SDK',
    'card.escpos.title': 'Thermal ESC/POS Custom SDK',
    'card.escpos.desc': 'High-performance custom Dart library for ESC/POS byte stream manipulation, sharp monochrome logo bitmap dithering, and lag-free BLE 5.0 connection.',
    'card.escpos.footer': 'Hardware & IoT SDK',

    'card.masjid.badge': 'Proprietary • Smart TV',
    'card.masjid.title': 'Digital Signage & Smart Mosque System',
    'card.masjid.desc': 'Smart Android TV/STB signage and DKM board remote PWA panel. 4-phase adhan-iqamah transition automation, real-time Firestore financial ledger, overscan-safe UI, and native Kotlin boot.',
    'card.masjid.footer': 'Smart TV & Web PWA',

    'card.loan.badge': 'Fintech & CI/CD',
    'card.loan.title': 'Loan Portal & CI/CD Deployment',
    'card.loan.desc': 'High-reliability loan portal architecture with responsive frontend and instant CI/CD deployment reducing release time from 1 day down to 8 minutes.',
    'card.loan.footer': 'PT Beruang Maia Raya',

    'card.ekyc.badge': 'Mobile & Native NDK',
    'card.ekyc.title': 'Social Platform with E-KYC Module',
    'card.ekyc.desc': 'Mobile social platform featuring strict identity verification (E-KYC), custom camera module, and native image processing optimization via Android NDK.',
    'card.ekyc.footer': 'PT Asli RI',

    'card.shrimp.badge': 'Aquaculture IoT',
    'card.shrimp.title': 'Shrimp Farm Monitoring System',
    'card.shrimp.desc': 'Shrimp aquaculture operational monitoring solution integrated with sensor logs, water quality metrics, and field data automation scripts.',
    'card.shrimp.footer': 'PT Delos Maritim',

    'card.banking.badge': 'Banking Tech',
    'card.banking.title': 'Digital Banking Platform',
    'card.banking.desc': 'Led 3 developers in codebase architecture refactoring and engineering secure, scalable digital banking features.',
    'card.banking.footer': 'PT Beruang Maia Raya',

    'card.ai.badge': 'AI & Enterprise',
    'card.ai.title': 'AI-Powered B2B & B2C Mobile App',
    'card.ai.desc': 'AI implementation in production mobile apps to elevate automation and user engagement across B2B and B2C workflows on iOS and Android.',
    'card.ai.footer': 'PT Aplikasi Lintas Bangsa (Ximply)',

    'card.award.badge': 'Academic Award',
    'card.award.title': 'Awarded Best Project Informatics',
    'card.award.desc': 'Undergraduate software engineering capstone selected as the Best Project at State Polytechnic of Indramayu for architectural and functional excellence.',
    'card.award.footer': 'State Polytechnic of Indramayu',

    // Contact Section
    'contact.subtitle': 'Let\'s Connect',
    'contact.title': 'Get In Touch Directly',
    'contact.desc': 'Available for Software Engineer roles, Senior Mobile Developer positions, mobile system architecture consulting, or high-impact technical collaborations.',
    'contact.name_label': 'Full Name',
    'contact.name_placeholder': 'John Doe',
    'contact.email_label': 'Email / Contact',
    'contact.email_placeholder': 'john@example.com',
    'contact.subject_label': 'Subject',
    'contact.subject_placeholder': 'Collaboration / Remote Job Opportunity',
    'contact.message_label': 'Message',
    'contact.message_placeholder': 'Tell me about your project requirements or technical discussion...',
    'contact.submit_btn': 'Send Message Now',
    'contact.feedback': 'Message prepared! Redirecting to email client...',

    // Footer
    'footer.copyright': '© 2026 Diyanto. Software Engineer & Mobile Specialist.',
    'footer.back_to_top': 'Back to Top ↑',

    // Modal Titles
    'modal.summary_title': 'Project Overview',
    'modal.features_title': 'Key Features & Architecture',
    'modal.impact_title': 'Business Impact & Value',
    'modal.tech_title': 'Technologies Used',
    'modal.close_btn': 'Close'
  }
};

let currentLanguage = 'id';

function setLanguage(lang) {
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  currentLanguage = lang;
  localStorage.setItem('diyanto_portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update text content of elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update Switcher Button active classes
  updateSwitcherUI(lang);

  // If detail modal is currently open, re-render it in the new language
  if (window.currentOpenModalKey && typeof window.openModal === 'function') {
    const modal = document.getElementById('detail-modal');
    if (modal && !modal.classList.contains('hidden')) {
      window.openModal(window.currentOpenModalKey);
    }
  }

  // Refresh Lucide Icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateSwitcherUI(lang) {
  const switchers = document.querySelectorAll('.lang-switcher-container');
  switchers.forEach(container => {
    const btnId = container.querySelector('[data-lang="id"]');
    const btnEn = container.querySelector('[data-lang="en"]');
    if (btnId && btnEn) {
      if (lang === 'id') {
        btnId.className = 'px-2 py-0.5 rounded font-bold transition-all bg-cyan-500 text-slate-950 shadow-sm';
        btnEn.className = 'px-2 py-0.5 rounded text-slate-400 hover:text-white transition-all font-medium';
      } else {
        btnId.className = 'px-2 py-0.5 rounded text-slate-400 hover:text-white transition-all font-medium';
        btnEn.className = 'px-2 py-0.5 rounded font-bold transition-all bg-cyan-500 text-slate-950 shadow-sm';
      }
    }
  });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('diyanto_portfolio_lang') || 'id';
  setLanguage(savedLang);
});
