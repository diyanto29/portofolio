/**
 * Diyanto - Software Engineer & Mobile Developer Portfolio
 * Main JavaScript Controller
 */

// ========================================================
// THEME CONTROLLER (DEFAULT: LIGHT THEME, OPTIONS: LIGHT / DARK)
// ========================================================
function getSavedTheme() {
  return localStorage.getItem('diyanto_portfolio_theme') || 'light';
}

function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') {
    theme = 'light';
  }
  
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
  }
  
  try {
    localStorage.setItem('diyanto_portfolio_theme', theme);
  } catch (err) {
    console.warn('localStorage not available', err);
  }
  
  // Update meta theme-color for mobile browsers
  const metaThemeColor = document.getElementById('meta-theme-color') || document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'light' ? '#f8fafc' : '#060911');
  }
  
  updateThemeUI(theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

function updateThemeUI(theme) {
  if (!theme) {
    theme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  }
  
  const isLight = theme === 'light';
  const currentLang = (typeof currentLanguage !== 'undefined') ? currentLanguage : (localStorage.getItem('diyanto_portfolio_lang') || 'id');
  
  // Desktop Toggle Button (show Moon when in Light mode to switch to Dark, and Sun when in Dark mode)
  const desktopIcon = document.getElementById('theme-toggle-icon');
  if (desktopIcon) {
    desktopIcon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
  }
  
  const desktopBtn = document.getElementById('theme-toggle-btn');
  if (desktopBtn) {
    const tooltipText = isLight
      ? (currentLang === 'en' ? 'Switch to Dark Mode' : 'Ganti ke Mode Gelap')
      : (currentLang === 'en' ? 'Switch to Light Mode' : 'Ganti ke Mode Terang');
    desktopBtn.setAttribute('title', tooltipText);
    desktopBtn.setAttribute('aria-label', tooltipText);
  }
  
  // Mobile Toggle Button
  const mobileIcon = document.getElementById('mobile-theme-toggle-icon');
  if (mobileIcon) {
    mobileIcon.setAttribute('data-lucide', isLight ? 'moon' : 'sun');
  }
  
  const mobileText = document.getElementById('mobile-theme-text');
  if (mobileText) {
    mobileText.innerText = isLight
      ? (currentLang === 'en' ? 'Dark Mode' : 'Mode Gelap')
      : (currentLang === 'en' ? 'Light Mode' : 'Mode Terang');
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Immediately apply saved or default theme before DOM fully parses to avoid flash
(function initThemeImmediately() {
  const theme = getSavedTheme();
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Sync Theme UI state
  setTheme(getSavedTheme());

  // Inisialisasi ikon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // Escape key listener untuk menutup modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Klik backdrop di luar modal untuk menutup
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Proyek Filter Handler (mendukung multi-kategori dipisah spasi)
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    if (btn.dataset.filter === category) {
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');
      btn.classList.remove('text-slate-400');
    } else {
      btn.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
      btn.classList.add('text-slate-400');
    }
  });

  cards.forEach(card => {
    const categories = (card.dataset.category || '').split(/\s+/);
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/// Proyek Modal Data & Controller (Bilingual: ID & EN)
window.currentOpenModalKey = null;

const projectData = {
  'batiku': {
    tags: ['Flutter (Dart)', 'Clean Architecture', 'Riverpod 2.0', 'SQLite (sqflite)', 'RepaintBoundary Canvas', 'Local Notifications', 'Scoped Storage', 'Google Drive API'],
    id: {
      badge: 'Produk Mandiri • Flagship App',
      title: 'BatiKu — Asisten Cerdas Operasional & Pre-Order UMKM Kuliner',
      subtitle: 'Independent Proprietary Product (Android & iOS) • 2025',
      desc: 'Platform produktivitas dan asisten operasional dapur modern berbasis local-first yang dirancang khusus untuk UMKM Kuliner Pre-Order (PO), Katering Rumahan, dan Frozen Food. Menghadirkan otomasi materi promosi WhatsApp ber-QRIS otomatis, pengiriman nota belanja gambar resmi, pelacak piutang kasbon santun, asisten pengingat dapur lokal, serta pemisahan modal belanja dan laba riil (Saldo Bati).',
      features: [
        'Mesin Grafis Otomatis (3x Pixel Ratio): Sekali klik buka PO, poster flyer beresolusi tinggi + QRIS toko + caption broadcast WA siap dikirim 1-klik.',
        'Digital Receipt Image Card: Nota belanja visual menyerupai tiket belanja premium dengan stempel LUNAS / DP langsung via WhatsApp.',
        'Penyimpanan Lokal Mandiri: Unduh poster dan nota langsung ke galeri perangkat menggunakan Android Scoped Storage MediaStore API yang aman.',
        'Manajemen Modal Beku (Chiller/Freezer): Pemantauan sisa porsi dan valuasi rupiah modal beku agar makanan tidak terbuang sia-sia.',
        'Asisten Pengingat Dapur Otomatis: Alarm lokal H-1 belanja bahan dan Hari-H produksi tanpa ketergantungan server cloud berbayar.',
        'Dashboard Disiplin Saldo Bati: Kalkulasi otomatis HPP resep, kemasan, omzet, dan proteksi uang modal belanja agar tidak terpakai pribadi.',
        'Pencadangan Google Drive Mandiri: Sinkronisasi database SQLite lokal terenkripsi ke Google Drive pribadi pengguna via Android WorkManager.'
      ],
      impact: 'Memangkas waktu pembuatan promosi dan nota tagihan dari 60 menit menjadi 10 detik, mengontrol 100% piutang kasbon, serta beroperasi 100% offline tanpa biaya server / biaya langganan bulanan (Rp 0 selamanya).'
    },
    en: {
      badge: 'Proprietary Product • Flagship App',
      title: 'BatiKu — Smart Kitchen & Pre-Order Culinary Assistant',
      subtitle: 'Independent Proprietary Product (Android & iOS) • 2025',
      desc: 'A modern local-first kitchen productivity and operational platform tailored for pre-order (PO), home catering, and frozen food culinary businesses. Automates high-resolution WhatsApp visual promotional flyers with embedded QRIS, official digital receipt image cards, receivables/kasbon tracking, local kitchen alarms, and clear separation of operating capital from real net profit (Saldo Bati).',
      features: [
        'Automated Graphic Engine (3x Pixel Ratio): In 1 click, high-res promotional flyer + store QRIS + WhatsApp broadcast caption are ready to share.',
        'Digital Receipt Image Card: Professional digital receipt styled like a premium culinary ticket with PAID / Down-Payment stamp directly via WhatsApp.',
        'Local Device Storage: Export and download promotional flyers and receipts directly to gallery using secure Android Scoped Storage MediaStore API.',
        'Chiller & Freezer Inventory: Full-page dashboard monitoring remaining portions and monetary asset valuation to prevent spoiled food.',
        'Local Kitchen Assistant: Offline alarms reminding raw ingredient shopping on D-1 and production on D-Day without costly server dependencies.',
        'Saldo Bati Discipline: Automated calculation of recipe COGS (HPP), packaging, gross revenue, and protection of operating capital against personal spending.',
        'Google Drive Private Cloud Backup: Automated background database sync via Android WorkManager directly to the user\'s private Google Drive.'
      ],
      impact: 'Reduces promotional and receipt preparation time from 60 minutes to 10 seconds, tracks 100% of customer pay-later debts, and operates 100% offline with zero server or recurring monthly subscription fees.'
    }
  },

  'dpos': {
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.mudahkan.warmi',
    tags: ['Flutter', 'Riverpod', 'ESC/POS Thermal', 'Isar Local DB', 'QR Dynamic', 'Offline-First'],
    id: {
      badge: 'Produk Mandiri • F&B & Retail POS',
      title: 'DPOS (Smart Point of Sale & QR Self-Order)',
      subtitle: 'Independent Product • F&B & Retail Systems',
      desc: 'Sistem kasir (POS) modern modular untuk industri retail dan F&B yang menggabungkan operasional kasir kilat dengan sistem pemesanan mandiri pelanggan via QR code dinamis.',
      features: [
        'Dukungan cetak struk via Bluetooth / USB printer thermal ESC/POS tanpa lag.',
        'Sinkronisasi database offline-first dengan deteksi konflik data transaksi.',
        'Manajemen multi-cabang, inventaris stok batch, dan varian item.',
        'Integrasi transaksi non-tunai via QRIS dinamis.'
      ],
      impact: 'Meningkatkan kecepatan checkout pelanggan hingga 40% dan mencegah kehilangan catatan penjualan saat internet offline.'
    },
    en: {
      badge: 'Proprietary Product • F&B & Retail POS',
      title: 'DPOS (Smart Point of Sale & QR Self-Order)',
      subtitle: 'Independent Product • Retail & F&B Systems',
      desc: 'A modular point-of-sale system for retail and F&B combining rapid cashier checkout operations with self-service QR customer ordering.',
      features: [
        'Seamless receipt printing via Bluetooth/USB ESC/POS thermal printers with zero latency.',
        'Offline-first database synchronization with automated conflict resolution.',
        'Multi-branch management, batch inventory tracking, and item variant customization.',
        'Integrated cashless payments via dynamic QRIS.'
      ],
      impact: 'Boosted customer checkout speeds by 40% and prevented transaction loss during offline network conditions.'
    }
  },

  'escpos': {
    tags: ['Dart Package', 'Low-level Byte Manipulation', 'Bitmap Rendering', 'BLE 5.0'],
    id: {
      badge: 'Produk Mandiri • Developer SDK',
      title: 'Thermal ESC/POS Custom SDK for Flutter',
      subtitle: 'Independent Open Architecture Dart Package',
      desc: 'Paket pustaka kustom Dart berkinerja tinggi untuk memformat dan mengirim stream perintah ESC/POS ke berbagai model printer kasir bluetooth tanpa dependensi eksternal berat.',
      features: [
        'Algoritma konversi bitmap gambar logo monokrom tajam (Floyd-Steinberg dithering).',
        'Format tabel dan kolom struk belanja otomatis tanpa pergeseran karakter.',
        'Auto-reconnect handler saat koneksi bluetooth terputus tiba-tiba.',
        'Mendukung ukuran kertas 58mm dan 80mm secara serempak.'
      ],
      impact: 'Diadopsi pada berbagai proyek internal POS dan menghasilkan cetakan struk rapi serta stabil di beragam hardware printer bluetooth ekonomis.'
    },
    en: {
      badge: 'Proprietary Product • Developer SDK',
      title: 'Thermal ESC/POS Custom SDK for Flutter',
      subtitle: 'Independent Open Architecture Dart Package',
      desc: 'High-performance custom Dart library for formatting and transmitting ESC/POS command byte streams to diverse Bluetooth receipt printers without heavy external dependencies.',
      features: [
        'High-fidelity monochrome bitmap rendering algorithm with Floyd-Steinberg dithering.',
        'Auto-formatting table and columns without character alignment distortion.',
        'Auto-reconnect handler on sudden Bluetooth connection drops.',
        'Simultaneous support for 58mm and 80mm receipt paper widths.'
      ],
      impact: 'Adopted across internal POS initiatives delivering crisp receipts and rock-solid stability on budget Bluetooth printers.'
    }
  },

  'masjid': {
    tags: ['Flutter 3.x', 'Android TV / STB', 'Riverpod', 'Cloud Firestore', 'Kotlin BootReceiver', 'AudioTrack Synthesizer', 'PWA Web Remote'],
    id: {
      badge: 'Produk Mandiri • Smart TV & IoT',
      title: 'Digital Signage & Management System Masjid',
      subtitle: 'Independent Proprietary System (Android TV, STB & Web PWA)',
      desc: 'Sistem otomasi digital signage cerdas untuk Smart TV masjid dan panel remote pengurus DKM berbasis Cloud Firestore. Menggantikan papan tulis dan jam digital LED konvensional dengan transisi otomatis jadwal shalat 4-fase (Normal, Adzan, Iqamah Countdown, Mode Shalat), carousel laporan kas finansial transparan, jadwal petugas Jum\'at bulanan auto-scroll, serta optimasi TV overscan & native boot receiver.',
      features: [
        'Siklus Transisi Otomatis 4-Fase: Dashboard normal ➔ Layar Adzan (hitungan mundur & nada beep) ➔ Layar Iqamah (countdown raksasa 135pt) ➔ Mode Shalat Hening (Luruskan Shaf & Nonaktifkan HP).',
        'Carousel Informasi Dinamis: Laporan kas masjid transparan (saldo utama, pemasukan, pengeluaran), matriks petugas Jum\'at bulanan dengan auto-highlight minggu aktif, dan susunan pengurus DKM.',
        'Smart Directional Auto-Scroll: Navigasi scroll vertikal otomatis pada TV tanpa remote untuk konten panjang petugas Jum\'at dan kepengurusan.',
        'Native Boot Receiver (Android Kotlin): TV/STB otomatis langsung meluncurkan aplikasi saat dinyalakan (BOOT_COMPLETED & QUICKBOOT) tanpa sentuh remote.',
        'Native Sound Synthesizer: Nada beep adzan/iqamah disintesis secara matematis via AudioTrack/ToneGenerator tanpa dependensi file MP3 eksternal.',
        'Panel Remote DKM (PWA Web): Sinkronisasi real-time via Cloud Firestore untuk input kas, petugas Jum\'at, dan teks berjalan langsung dari smartphone pengurus.'
      ],
      impact: 'Mendigitalisasi 100% informasi operasional dan kas masjid, menghilangkan keterlambatan iqamah dan kegaduhan ponsel jamaah saat shalat, serta beroperasi mandiri di Android TV tanpa operator harian.'
    },
    en: {
      badge: 'Proprietary Product • Smart TV & IoT',
      title: 'Mosque Digital Signage & Smart System',
      subtitle: 'Independent Proprietary System (Android TV, STB & Web PWA)',
      desc: 'Intelligent digital signage automation for Mosque Smart TVs coupled with a real-time DKM administrator remote panel powered by Cloud Firestore. Replaces manual whiteboards and simple LED clocks with 4-phase prayer cycles, financial transparency carousels, and native Kotlin auto-boot.',
      features: [
        '4-Phase Automatic Prayer Transition: Normal Dashboard ➔ Adhan Screen (countdown & harmonic beeps) ➔ Iqamah Screen (135pt giant countdown) ➔ Silent Prayer Mode (Straighten Shaf & Mute Phones).',
        'Dynamic Information Carousel: Transparent mosque financial accounting, monthly Friday committee matrix with current-week highlight, and committee structure.',
        'Smart Directional Auto-Scroll: Automated vertical scrolling for long lists on TV screens without needing physical remotes.',
        'Native Boot Receiver (Android Kotlin): Automatically launches the app upon TV/STB power-on (BOOT_COMPLETED & QUICKBOOT) without manual intervention.',
        'Native Sound Synthesizer: Adhan and Iqamah chime beeps synthesized purely via AudioTrack/ToneGenerator with zero external MP3 dependencies.',
        'DKM Remote Panel (PWA Web): Real-time wireless synchronization via Cloud Firestore for cash entry, Friday prayer rosters, and marquee text updates.'
      ],
      impact: 'Digitized 100% of operational and financial announcements, eliminated congregational phone disruptions during prayers, and runs autonomously on Android TV without daily operators.'
    }
  },

  'manggapos': {
    tags: ['Flutter (Dart)', 'Riverpod', 'ESC/POS Bluetooth', 'SQLite / Offline-First', 'Catalog & Split-Bill', 'QRIS Dinamis'],
    id: {
      badge: 'Produk Mandiri • F&B & Retail POS',
      title: 'Mangga POS (Smart POS & Self-Order UMKM)',
      subtitle: 'Independent Proprietary Product • Retail & F&B Ecosystem',
      desc: 'Sistem point-of-sale modern dan kasir modular yang dirancang untuk merchant kuliner dan ritel UMKM. Mengedepankan arsitektur 100% offline-first, pencetakan struk instan tanpa latensi via Bluetooth thermal ESC/POS, katalog varian menu kustom, fitur split-bill pesanan meja, dan laporan kas harian tanpa ketergantungan koneksi internet.',
      features: [
        'Cetak Struk Bluetooth ESC/POS Instan: Driver print engine langsung tanpa jeda, mendukung kertas 58mm/80mm, logo toko, dan format struk rapi.',
        'Operasional Kasir 100% Offline: Penjualan dan rekap pesanan tetap berjalan normal meski sinyal internet padam total.',
        'Manajemen Varian & Modifiers: Kustomisasi menu fleksibel (level pedas, topping, ukuran porsi) dan peringatan batas minimum stok.',
        'Split Bill & Open Tab Meja: Perhitungan otomatis tagihan terpisah per pelanggan, diskon persen/nominal, serta biaya layanan/pajak.',
        'Pembayaran Digital QRIS: Pembuatan QRIS dinamis di layar untuk transaksi non-tunai langsung saat kasir online.',
        'Rekap Kas Shift & Laba Kotor: Laporan penutupan kasir per shift, rincian metode bayar (tunai/transfer), dan analisa produk terlaris.'
      ],
      impact: 'Memangkas antrean kasir di jam sibuk hingga 50%, menjamin zero data loss saat internet mati, dan mengeliminasi biaya software POS bulanan bagi pelaku usaha UMKM.'
    },
    en: {
      badge: 'Proprietary Product • F&B & Retail POS',
      title: 'Mangga POS (Smart POS & Self-Order UMKM)',
      subtitle: 'Independent Proprietary Product • Retail & F&B Ecosystem',
      desc: 'A modern, modular point-of-sale system engineered for culinary and retail MSMEs. Built on a 100% offline-first architecture, zero-latency ESC/POS Bluetooth thermal receipt printing, customizable item variants, table split-billing, and shift sales reconciliation without mandatory internet connectivity.',
      features: [
        'Instant Bluetooth ESC/POS Thermal Printing: Low-level driver engine printing seamlessly on 58mm/80mm receipt papers with custom store logos.',
        '100% Offline Cashier Operations: Seamless checkout and order logging even during complete internet network blackouts.',
        'Variant & Modifier Management: Flexible menu customization (spiciness levels, toppings, portion sizing) and low-stock alerts.',
        'Split Bill & Table Tab System: Automated bill splitting among dining patrons with automatic calculation of taxes and service fees.',
        'Dynamic QRIS Digital Payments: On-screen dynamic QR generation for contactless cashless payments whenever connected.',
        'Shift Cash Ledger & Gross Profit: Shift end reconciliation reports, payment method breakdown (cash/transfer), and top-selling product analytics.'
      ],
      impact: 'Cut peak-hour checkout queues by 50%, guaranteed zero transaction loss during offline hours, and eliminated recurring monthly POS software subscription costs for local merchants.'
    }
  },

  'juragankost': {
    playStoreUrl: 'https://play.google.com/store/apps/details?id=online.mudahkan.kostku',
    tags: ['Flutter (Dart)', 'SQLite / Drift', 'WhatsApp Intent (wa.me)', 'ESC/POS Bluetooth 58/80mm', 'Excel Multi-Sheet (.xlsx)', 'Offline Cryptographic Lock'],
    id: {
      badge: 'Produk Mandiri • Property & FinTech',
      title: 'JuraganKost — Aplikasi Manajemen Kos-Kosan & Tagihan WhatsApp',
      subtitle: 'Independent Proprietary Android App • 100% Offline-First Architecture',
      desc: 'Aplikasi manajemen operasional dan keuangan kos-kosan berbasis 100% offline-first tanpa biaya langganan bulanan. Didesain untuk pemilik kos skala mikro-menengah (5–50 kamar) dengan denah visual kamar berbasis 5 kode warna status sewa, otomasi pengingat tagihan via WhatsApp langsung ke nomor penyewa tanpa biaya server API, kartu linimasa pembayaran bulanan & cicilan, pencatatan beban operasional, cetak kuitansi thermal Bluetooth/PDF, serta ekspor pembukuan Excel multi-sheet.',
      features: [
        'Denah Visual Kamar Interaktif (5 Kode Warna): Pemantauan visual instan status kamar: Hijau (Kosong), Biru (Terisi lancar), Kuning (Jatuh tempo ≤ 3 hari), Merah (Menunggak), dan Abu-abu (Renovasi/Perbaikan).',
        'Otomatisasi Tagihan WhatsApp 1-Klik: Generator pesan penagihan personal terisi otomatis dengan nama penyewa, nomor kamar, nominal tagihan, dan rekening tujuan via Android Intent wa.me tanpa gateway berbayar.',
        'Kartu Linimasa Pembayaran & Cicilan (Tenant Billing): Pencatatan pelunasan penuh, pembayaran bertahap (DP/termin), kalkulasi sisa piutang otomatis, dan arsip foto bukti transfer lokal privat.',
        'Vault Data Penyewa Terenkripsi: Manajemen identitas penghuni (KTP, kontak darurat, tanggal sewa) tersimpan di direktori privat aplikasi dengan hash UUID untuk menjamin privasi.',
        'Generator Kuitansi Digital & Cetak Thermal: Penerbitan kuitansi format PDF resmi siap bagikan ke WhatsApp serta cetak langsung ke printer thermal Bluetooth ESC/POS (58mm/80mm).',
        'Laporan Laba/Rugi & Ekspor Excel (.xlsx): Pembuatan berkas spreadsheet 3 sheet (Buku Kas Masuk/Keluar, Matriks Pembayaran Tahunan Seluruh Kamar, dan Basis Data Penyewa Aktif).',
        'Proteksi Lisensi Kriptografi Offline: Sistem lisensi sekali beli (one-time license) dengan verifikasi hash SHA-256 terikat hardware ID perangkat guna mencegah pembajakan APK tanpa izin.'
      ],
      impact: 'Menghilangkan biaya langganan software kos bulanan (hemat Rp 0 selamanya), menurunkan angka tunggakan sewa hingga 85% dengan reminder WhatsApp santun, dan menyelesaikan audit pembukuan tahunan dalam 1 klik ekspor Excel.'
    },
    en: {
      badge: 'Proprietary Product • Property & FinTech',
      title: 'JuraganKost — Boarding House Management & WhatsApp Billing',
      subtitle: 'Independent Proprietary Android App • 100% Offline-First Architecture',
      desc: 'A 100% offline-first operational and financial management mobile app for boarding houses (kost-kosan) with zero recurring monthly subscription fees. Engineered for property owners (5–50 rooms) featuring interactive 5-color visual room status maps, 1-click WhatsApp billing reminders via Android intents (zero API cost), tenant installment payment timelines, operational bookkeeping, Bluetooth ESC/POS receipt printing, and multi-sheet Excel reporting.',
      features: [
        'Interactive 5-Color Visual Room Map: Instant occupancy monitoring with color-coded badges: Green (Vacant), Blue (Paid/Current), Yellow (Due in ≤ 3 days), Red (Overdue), and Grey (Maintenance).',
        '1-Click Automated WhatsApp Billing: Generates personalized debt reminder messages with tenant name, room number, amount due, and bank account details via native Android wa.me intents with zero API fees.',
        'Tenant Payment Timeline & Installment Tracking: Records full payments, partial deposits, automated receivables calculation, and locally secured transfer proof receipts.',
        'Encrypted Private Tenant Vault: Stores government ID photos and emergency contact details securely in private app sandboxed storage with hashed UUID file naming.',
        'Digital PDF Receipts & Thermal Printing: Generates official PDF receipts ready to share on WhatsApp or print directly via ESC/POS Bluetooth thermal printers (58mm/80mm).',
        'P&L Accounting & Multi-Sheet Excel Export (.xlsx): Generates clean spreadsheets with 3 distinct sheets (Cash Flow Ledger, Annual Room Payment Matrix, and Tenant Roster).',
        'Offline Cryptographic Hardware License Lock: One-time purchase security model utilizing SHA-256 hardware-bound device signature verification preventing unauthorized APK redistribution.'
      ],
      impact: 'Eliminated recurring monthly property software subscriptions ($0 server costs forever), reduced rent delinquency by 85% with courteous WhatsApp reminders, and streamlined annual bookkeeping audits into 1-click Excel exports.'
    }
  },

  'loan-portal': {
    tags: ['CI/CD Pipeline', 'High Availability', 'Frontend Lead', 'Fintech Security'],
    id: {
      badge: 'Fintech & CI/CD',
      title: 'Loan Portal & CI/CD Optimization',
      subtitle: 'PT Beruang Maia Raya (05/2024 - 12/2024)',
      desc: 'Memimpin implementasi frontend dan menyusun arsitektur CI/CD terintegrasi yang memangkas waktu deploy aplikasi dari semula 1 hari kerja penuh menjadi hanya 8 menit, menjamin high-availability untuk transaksi pinjaman finansial.',
      features: [
        'Pipeline otomasi CI/CD dari code commit hingga production deployment.',
        'Antarmuka portal responsif dengan standar keamanan data finansial.',
        'Validasi formulir real-time dan integrasi backend API berkecepatan tinggi.'
      ],
      impact: 'Mengurangi lead-time deployment sebesar 98% (dari 1 hari kerja menjadi 8 menit) dengan zero downtime.'
    },
    en: {
      badge: 'Fintech & CI/CD',
      title: 'Loan Portal & CI/CD Optimization',
      subtitle: 'PT Beruang Maia Raya (05/2024 - 12/2024)',
      desc: 'Led frontend implementation and built automated CI/CD deployment pipelines slashing release lead-times from an entire workday to 8 minutes while guaranteeing high-availability for financial loan transactions.',
      features: [
        'End-to-end automated CI/CD pipeline from git commit to zero-downtime production deployment.',
        'Responsive web portal engineered to comply with strict financial data security standards.',
        'Real-time form validation and high-throughput backend API integration.'
      ],
      impact: 'Decreased deployment lead-times by 98% (from 1 business day down to 8 minutes) with zero downtime.'
    }
  },

  'ekyc': {
    tags: ['Android NDK', 'Custom Camera Module', 'E-KYC Identity Verification', 'Mobile Native'],
    id: {
      badge: 'Mobile & Native NDK',
      title: 'Social Media with E-KYC & Android NDK',
      subtitle: 'PT Asli RI (02/2022 - 12/2022)',
      desc: 'Membangun platform media sosial yang dilengkapi fitur verifikasi E-KYC otomatis, pembuatan modul kamera custom in-house, serta penggunaan Android NDK untuk akselerasi pemrosesan citra dengan latensi minimal.',
      features: [
        'Modul kamera kustom in-house yang dioptimalkan untuk berbagai spesifikasi hardware Android.',
        'Akselerasi pemrosesan citra beresolusi tinggi menggunakan native C++/Android NDK.',
        'Alur verifikasi identitas (E-KYC) otomatis dengan liveness detection.'
      ],
      impact: 'Mempercepat verifikasi pengguna baru dan meningkatkan throughput validasi dokumen identitas hingga 60%.'
    },
    en: {
      badge: 'Mobile & Native NDK',
      title: 'Social Media with E-KYC & Android NDK',
      subtitle: 'PT Asli RI (02/2022 - 12/2022)',
      desc: 'Engineered a social media platform featuring automated E-KYC identity verification, custom in-house camera modules, and Android NDK acceleration for low-latency image processing.',
      features: [
        'Custom in-house camera module optimized across varied Android hardware specifications.',
        'High-resolution image processing acceleration leveraging native C++ via Android NDK.',
        'Automated identity verification flow (E-KYC) with integrated liveness detection.'
      ],
      impact: 'Accelerated new user onboarding and enhanced document validation throughput by 60%.'
    }
  },

  'shrimp-iot': {
    tags: ['Aquaculture IoT', 'Automation Scripting', 'Data Management', 'Mobile Monitoring'],
    id: {
      badge: 'IoT & Monitoring',
      title: 'Shrimp Farm Monitoring System',
      subtitle: 'PT Delos Teknologi Maritim Jaya (09/2022 - 05/2024)',
      desc: 'Pengembangan aplikasi mobile terintegrasi untuk pemantauan real-time tambak udang modern, pengelolaan alur input data petambak, dan pembuatan automation script untuk efisiensi sinkronisasi data lapangan.',
      features: [
        'Monitoring parameter kualitas air tambak udang (pH, salinitas, DO, suhu) secara real-time.',
        'Skrip otomasi untuk efisiensi sinkronisasi data lapangan saat sinyal minim.',
        'Dashboard analitik untuk estimasi panen dan deteksi anomali dini.'
      ],
      impact: 'Memungkinkan petambak merespons anomali air secara cepat dan meminimalkan mortalitas udang budidaya.'
    },
    en: {
      badge: 'IoT & Monitoring',
      title: 'Shrimp Farm Monitoring System',
      subtitle: 'PT Delos Teknologi Maritim Jaya (09/2022 - 05/2024)',
      desc: 'Development of integrated mobile applications for modern shrimp aquaculture monitoring, farmer data collection workflows, and custom automation scripts for remote field data sync.',
      features: [
        'Real-time water quality parameter monitoring (pH, salinity, dissolved oxygen, temperature).',
        'Automation scripts for robust field data synchronization under low-signal conditions.',
        'Analytics dashboard for harvest yield estimation and early anomaly detection.'
      ],
      impact: 'Empowered aquaculture technicians to rapidly respond to water anomalies, minimizing cultivated shrimp mortality.'
    }
  },

  'digital-banking': {
    tags: ['Team Lead (3 Devs)', 'Code Refactoring', 'Fintech Security', 'Mobile Architecture'],
    id: {
      badge: 'Enterprise Fintech',
      title: 'Digital Banking Platform & Architecture',
      subtitle: 'PT Beruang Maia Raya (10/2021 - 03/2022)',
      desc: 'Memimpin tim yang terdiri dari 3 mobile engineer, melakukan perombakan total arsitektur kode (refactoring) demi reliabilitas, keamanan standar perbankan, dan skalabilitas modul transaksi perbankan digital.',
      features: [
        'Penerapan Clean Architecture & modularisasi kode per modul transaksi.',
        'Standardisasi enkripsi data end-to-end sesuai regulasi perbankan.',
        'Code review ketat dan mentoring 3 mobile developer.'
      ],
      impact: 'Menurunkan tingkat bug produksi sebesar 75% dan mempercepat pengembangan fitur baru hingga 2x lipat.'
    },
    en: {
      badge: 'Enterprise Fintech',
      title: 'Digital Banking Platform & Architecture',
      subtitle: 'PT Beruang Maia Raya (10/2021 - 03/2022)',
      desc: 'Led a team of 3 mobile engineers, overhauling code architecture through comprehensive refactoring to meet banking-grade reliability, security, and transaction modularity.',
      features: [
        'Applied Clean Architecture and strict code modularization per transactional banking module.',
        'End-to-end data encryption standardization complying with banking regulations.',
        'Comprehensive code reviews and mentorship for 3 junior-to-mid mobile developers.'
      ],
      impact: 'Reduced production bug rates by 75% and doubled feature development velocity.'
    }
  },

  'ai-app': {
    tags: ['AI Mobile Implementation', 'Cross-Platform B2B/B2C', 'UX Optimization'],
    id: {
      badge: 'AI & Enterprise',
      title: 'AI-Integrated B2B & B2C Applications',
      subtitle: 'PT Aplikasi Lintas Bangsa / Ximply (01/2025 - 04/2025)',
      desc: 'Merancang arsitektur aplikasi mobile yang menghubungkan antarmuka intuitif dengan kapabilitas Artificial Intelligence (AI) untuk mempercepat alur kerja otomatisasi klien korporat maupun pengguna akhir.',
      features: [
        'Integrasi model AI untuk otomatisasi input data dan ekstraksi dokumen.',
        'Desain UX adaptif untuk segmen pengguna korporat (B2B) dan personal (B2C).',
        'Optimasi konsumsi memori dan latensi respon inferensi model.'
      ],
      impact: 'Memangkas proses entri data berulang dari rata-rata 15 menit menjadi di bawah 1 menit bagi pengguna bisnis.'
    },
    en: {
      badge: 'AI & Enterprise',
      title: 'AI-Integrated B2B & B2C Applications',
      subtitle: 'PT Aplikasi Lintas Bangsa / Ximply (01/2025 - 04/2025)',
      desc: 'Designed mobile application architecture connecting intuitive user interfaces with Artificial Intelligence (AI) capabilities to accelerate workflow automation for corporate and retail clients.',
      features: [
        'AI model integration for automated document data extraction and smart receipt entry.',
        'Adaptive UX tailored for both enterprise (B2B) and individual consumer (B2C) segments.',
        'Optimization of model inference latency and client-side device memory consumption.'
      ],
      impact: 'Cut repetitive manual data entry from 15 minutes to under 1 minute for corporate finance users.'
    }
  },

  'best-award': {
    tags: ['Best Graduate Project', 'Full Stack System', 'Polindra 4.0 Award'],
    id: {
      badge: 'Academic Award',
      title: 'Awarded Best Project in Informatics Engineering',
      subtitle: 'Politeknik Negeri Indramayu (10/2020)',
      desc: 'Penghargaan bergengsi tingkat jurusan atas inovasi, kelengkapan arsitektur software, dan dampak langsung sistem perangkat lunak yang dibangun selama masa studi diploma.',
      features: [
        'Arsitektur software full-stack yang solid dan teruji di lingkungan nyata.',
        'Pengujian fungsionalitas menyeluruh dan evaluasi kepuasan pengguna.',
        'Terpilih sebagai karya terbaik dari seluruh angkatan Teknik Informatika.'
      ],
      impact: 'Menjadi standar rujukan rekayasa perangkat lunak mahasiswa tingkat akhir di Politeknik Negeri Indramayu.'
    },
    en: {
      badge: 'Academic Award',
      title: 'Awarded Best Project in Informatics Engineering',
      subtitle: 'Politeknik Negeri Indramayu (10/2020)',
      desc: 'Prestigious departmental award recognizing software engineering innovation, architectural completeness, and real-world impact built during diploma studies.',
      features: [
        'Solid full-stack software architecture thoroughly evaluated under real-world conditions.',
        'Comprehensive functional testing and user satisfaction validation.',
        'Chosen as the top graduating capstone project across the entire Informatics Engineering cohort.'
      ],
      impact: 'Established as the reference benchmark for graduating software engineering projects at Politeknik Negeri Indramayu.'
    }
  }
};

function openModal(key) {
  window.currentOpenModalKey = key;
  const projectItem = projectData[key];
  if (!projectItem) {
    console.warn('Modal key not found in projectData:', key);
    return;
  }

  const lang = (typeof currentLanguage !== 'undefined') ? currentLanguage : 'id';
  const data = projectItem[lang] || projectItem['id'] || projectItem;
  const tags = projectItem.tags || data.tags || [];

  const badgeEl = document.getElementById('modal-badge');
  if (badgeEl) {
    badgeEl.innerText = data.badge || (lang === 'en' ? 'Project Showcase' : 'Showcase Proyek');
  }

  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-subtitle').innerText = data.subtitle;
  document.getElementById('modal-desc').innerText = data.desc;

  // Render Features jika ada
  const featuresContainer = document.getElementById('modal-features-container');
  const featuresList = document.getElementById('modal-features');
  if (featuresContainer && featuresList) {
    if (data.features && data.features.length > 0) {
      featuresList.innerHTML = '';
      data.features.forEach(f => {
        const li = document.createElement('li');
        li.className = 'flex items-start gap-2 text-xs leading-relaxed text-slate-300';
        li.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i><span>${f}</span>`;
        featuresList.appendChild(li);
      });
      featuresContainer.classList.remove('hidden');
    } else {
      featuresContainer.classList.add('hidden');
    }
  }

  // Render Impact jika ada
  const impactContainer = document.getElementById('modal-impact-container');
  const impactEl = document.getElementById('modal-impact');
  if (impactContainer && impactEl) {
    if (data.impact) {
      impactEl.innerText = data.impact;
      impactContainer.classList.remove('hidden');
    } else {
      impactContainer.classList.add('hidden');
    }
  }

  // Render Tags
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = '';
  tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'text-[10px] font-mono bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 px-2.5 py-0.5 rounded';
    span.innerText = t;
    tagsContainer.appendChild(span);
  });

  // Render Play Store link button and badge if available
  const playstoreContainer = document.getElementById('modal-playstore-container');
  const playstoreBtn = document.getElementById('modal-playstore-btn');
  const playstoreBadge = document.getElementById('modal-playstore-badge');
  if (projectItem.playStoreUrl) {
    if (playstoreContainer && playstoreBtn) {
      playstoreBtn.href = projectItem.playStoreUrl;
      playstoreContainer.classList.remove('hidden');
    }
    if (playstoreBadge) {
      playstoreBadge.href = projectItem.playStoreUrl;
      playstoreBadge.classList.remove('hidden');
      playstoreBadge.classList.add('inline-flex');
    }
  } else {
    if (playstoreContainer) {
      playstoreContainer.classList.add('hidden');
    }
    if (playstoreBadge) {
      playstoreBadge.classList.add('hidden');
      playstoreBadge.classList.remove('inline-flex');
    }
  }

  // Re-run Lucide Icons untuk ikon baru di modal
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  window.currentOpenModalKey = null;
  const modal = document.getElementById('detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

// Contact Form Handler
function handleFormSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById('form-feedback');
  if (feedback) {
    feedback.classList.remove('hidden');
  }
  setTimeout(() => {
    if (feedback) feedback.classList.add('hidden');
    window.location.href = 'mailto:diyanto2911@gmail.com?subject=Tawaran Kolaborasi Software Engineer';
  }, 1200);
}

// Global exports for inline HTML onclick handlers
window.openModal = openModal;
window.closeModal = closeModal;
window.filterProjects = filterProjects;
window.handleFormSubmit = handleFormSubmit;
window.setTheme = setTheme;
window.toggleTheme = toggleTheme;
window.updateThemeUI = updateThemeUI;

