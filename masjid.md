# DOKUMENTASI SISTEM DIGITAL SIGNAGE & MANAGEMENT SYSTEM
## MASJID NURUL HUDA
**Platform: Flutter (Android TV / STB & PWA Web)**

---

## 1. LATAR BELAKANG

Papan informasi masjid konvensional (seperti papan tulis manual, banner statis, dan jam digital segmen LED sederhana) memiliki banyak keterbatasan dalam menyampaikan informasi yang dinamis kepada jamaah:
1. **Pembaruan Data Lambat & Manual**: Pengurus Dewan Kemakmuran Masjid (DKM) harus mengganti angka kas, jadwal khotib, dan pengumuman secara fisik dengan spidol atau cetak kertas berulang kali.
2. **Keterbatasan Informasi pada Jam LED Standar**: Jam digital masjid segmen LED hanya dapat menampilkan waktu shalat dan teks berjalan (running text) satu baris dengan resolusi rendah tanpa grafis interaktif.
3. **Kurangnya Transparansi Laporan Finansial**: Jamaah kesulitan mengetahui rincian kas masjid secara transparan dan berkala.
4. **Kekhusyukan Ibadah Terganggu**: Seringkali jamaah lupa mematikan ponsel atau terlambat merapikan shaf karena tidak ada media visual pengingat yang mencolok saat waktu shalat tiba.
5. **Pemanfaatan Smart TV / Layar TV di Masjid Belum Optimal**: Banyak masjid telah memasang TV LED besar, namun hanya digunakan untuk memutar video YouTube atau TV siaran yang kurang relevan dan tidak otomatis.

Oleh karena itu, dikembangkan **Sistem Digital Signage Terintegrasi Berbasis Flutter** yang dapat berjalan secara mandiri (*stand-alone*) pada Smart TV / Android STB di masjid, sekaligus tersinkronisasi secara *real-time* dengan aplikasi remote admin di ponsel pengurus DKM.

---

## 2. RUMUSAN MASALAH

Berdasarkan analisis kebutuhan lapangan dan diskusi pengembangan sistem, rumusan masalah yang diselesaikan adalah:
1. **Bagaimana merancang sistem jadwal shalat otomatis yang presisi** lengkap dengan transisi visual otomatis saat adzan, countdown iqamah, dan mode hening shalat?
2. **Bagaimana mengoptimalkan tampilan visual agar terbaca jelas dari jarak jauh pada layar TV fisik** dengan mempertimbangkan masalah pemotongan batas layar (*TV overscan*), ukuran font yang proporsional, dan penyesuaian tata letak konten?
3. **Bagaimana menyajikan informasi multi-konten (Laporan Kas, Jadwal Khotib Bulanan, Struktur DKM, Hadits Harian) secara efisien** pada satu layar tanpa menumpuk konten?
4. **Bagaimana menangani konten panjang pada TV yang tidak memiliki mouse/layar sentuh** agar tetap terbaca seluruhnya secara otomatis (*smart auto-scroll*)?
5. **Bagaimana memastikan aplikasi otomatis berjalan saat TV/STB dinyalakan (*auto-start on boot*)** tanpa perlu intervensi manual pengurus masjid setiap hari?
6. **Bagaimana menyediakan sarana kontrol nirkabel (*remote control*)** yang memudahkan pengurus masjid memperbarui data kas, petugas, dan pengumuman dari smartphone secara mudah dan instan?

---

## 3. SOLUSI YANG DITAWARKAN

Sistem ini menghadirkan ekosistem digital terintegrasi yang terdiri dari:

1. **Digital Signage Client (Android TV / Web Signage)**:
   - Aplikasi yang menampilkan antarmuka modern (Dark Islamic Emerald & Gold aesthetic) dengan layout layar penuh 16:9.
   - Manajemen waktu shalat otomatis berbasis koordinat astronomis GPS/daerah dengan sistem countdown dinamis.
   - Smart TV Optimization: Menyesuaikan margin aman dari overscan TV, penskalaan font tinggi (+5pt), dan algoritma *intelligent auto-scroll*.
   - Native Android Audio Synthesis & Boot Receiver: Bunyi notifikasi adzan/iqamah native tanpa file audio eksternal dan auto-start saat boot.

2. **DKM Mobile Remote & Web Admin (PWA)**:
   - Panel manajemen berbasis smartphone (responsif potret) yang terhubung ke Cloud Firestore.
   - Pengurus dapat mencatat transaksi kas (Pemasukan/Pengeluaran), memilih tanggal petugas Jum'at, mengubah pengumuman running text, dan memperbarui data DKM kapan saja dari mana saja.

---

## 4. FITUR-FITUR UTAMA SISTEM

### A. Fitur Antarmuka Utama (Dashboard Signage)
1. **Header Real-Time & Kalender Hijriah**:
   - Menampilkan Logo Masjid, Nama Masjid, dan Lokasi.
   - Tanggal Masehi dan Kalender Hijriah otomatis tersinkronisasi.
   - Jam digital raksasa (Font monospace dengan detik berjalan) yang anti-terpotong di TV.
2. **Jadwal Shalat 5 Waktu + Imsak & Terbit**:
   - Menampilkan kartu waktu: Subuh, Terbit, Dzuhur, Ashar, Maghrib, dan Isya.
   - **Indikator Aktif**: Kartu shalat berikutnya menyala terang (*highlight*) disertai badge countdown hitung mundur waktu tersisa menuju adzan.
3. **Carousel Informasi Dinamis (Slide Tengah)**:
   - **Slide 1: Laporan Kas Masjid**:
     * Menampilkan **Total Saldo Utama Kas** (dengan badge *Terverifikasi DKM* dan watermark transparan).
     * Menampilkan kartu **Pemasukan** (hijau emerald) dan **Pengeluaran** (oranye amber) secara proporsional.
     * Keterangan tanggal update otomatis.
   - **Slide 2: Jadwal Petugas Shalat Jum'at Bulanan**:
     * Matriks jadwal 4–5 minggu dalam satu bulan.
     * **Auto-Highlight Minggu Ini**: Jadwal minggu aktif otomatis ditandai dengan bingkai emas dan badge `[ MINGGU INI ]`.
     * **Smart Directional Auto-Scroll**: Fokus otomatis pada minggu ini dan minggu selanjutnya. Jika konten bawah tersembunyi, sistem melakukan scroll vertikal halus ke bawah tanpa membuang waktu scroll ke atas (minggu yang telah lewat).
   - **Slide 3: Susunan Pengurus DKM**:
     * Matriks kepengurusan masjid (Penasihat, Ketua, Sekretaris, Bendahara, Seksi).
     * **Auto-Scroll Top-to-Bottom**: Membaca susunan dari atas, berhenti sejenak, auto-scroll ke bawah sampai baris terakhir terlihat, kemudian berpindah ke slide berikutnya.
   - **Slide 4: Hadits Harian / Kutipan Qur'ani**:
     * Menampilkan pesan hadits pilihan dan hikmah Islami untuk jamaah.
4. **Footer Running Text (Informasi Berjalan)**:
   - Teks pengumuman berjalan (*marquee*) dengan kecepatan halus.
   - Dilengkapi *safe bottom padding* sehingga tidak terpotong oleh bezel atau overscan TV tabung/LED.

---

### B. Otomatisasi Siklus Waktu Shalat (Workflow Transisi Layar)

Sistem bekerja secara otomatis tanpa campur tangan operator melalui 4 fase:

```
[Normal Dashboard] 
       │ (Waktu Adzan Tiba)
       ▼
[Layar Adzan (AdhanScreen)] ───► Suara Beep/Adzan & Countdown Waktu Adzan
       │ (Adzan Selesai / Lanjut Otomatis)
       ▼
[Layar Iqamah (IqamahCountdownScreen)] ──► Countdown Raksasa + Beep 5 Detik Terakhir
       │ (Countdown = 0)
       ▼
[Layar Mode Shalat (PrayerModeScreen)] ──► Layar Hening "Luruskan Shaf" & Nonaktifkan HP
       │ (Durasi Shalat Selesai, e.g. 15-20 Menit)
       ▼
[Kembali ke Normal Dashboard]
```

1. **Layar Adzan (`AdhanScreen`)**:
   - Panggilan visual besar ketika waktu shalat masuk: *"TELAH MASUK WAKTU ADZAN [NAMA SHALAT]"*.
   - Jam digital adzan besar (77pt).
   - Indikator sisa waktu adzan berlangsung.
   - Tiga nada beep harmonik native penanda adzan.
2. **Layar Hitung Mundur Iqamah (`IqamahCountdownScreen`)**:
   - Tampilan countdown raksasa (135pt monospace).
   - Pengingat jamaah untuk mengambil wudhu dan mengisi shaf depan.
   - Nada beep peringatan otomatis pada detik 5, 4, 3, 2, 1, dan nada panjang saat masuk waktu shalat.
3. **Layar Mode Shalat (`PrayerModeScreen`)**:
   - Layar hening gelap beresolusi tinggi dengan ikon kontras tinggi.
   - Instruksi tegas: *"LURUS DAN RAPATKAN SHAF"* & *"HARAP MATIKAN ATAU NONAKTIFKAN SUARA TELEPON SELULER"*.
   - Countdown durasi shalat berlangsung sebelum otomatis kembali ke Dashboard normal.

---

### C. Fitur Khusus Hardware TV & Optimasi Android

1. **Pencegahan TV Overscan**:
   - Mengatasi masalah pemotongan batas luar pada TV lama / Android Box melalui penyesuaian flex row, padding proporsional, dan penataan container yang fleksibel.
2. **Font Enlarger (+5pt)**:
   - Seluruh teks pada layar transisi adzan, iqamah, mode shalat, dan nominal kas telah dinaikkan ukurannya agar memiliki *readability* yang prima dari jarak 5–15 meter di ruang utama masjid.
3. **Native Boot Receiver (`BootReceiver.kt`)**:
   - Menggunakan komponen native Android Kotlin yang mendengarkan event `BOOT_COMPLETED`, `QUICKBOOT_POWERON`, dan `REBOOT`.
   - Menghidupkan TV/STB otomatis langsung membuka aplikasi tanpa perlu menggunakan remote untuk memilih menu.
4. **Native Sound Synthesizer (`ToneGenerator` / `AudioTrack`)**:
   - Tidak bergantung pada file MP3 eksternal yang rentan korup atau lambat dimuat. Nada beep dihasilkan langsung secara matematis melalui frekuensi gelombang sinus native.

---

### D. Fitur Panel Admin DKM (PWA Remote)
1. **Cloud Firestore Sync**:
   - Perubahan data dari HP DKM langsung ter-update di layar TV dalam hitungan detik secara nirkabel (*real-time listener*).
2. **Manajemen Laporan Keuangan**:
   - Pencatatan transaksi Pemasukan (+) dan Pengeluaran (-).
   - Perhitungan otomatis Total Saldo Utama, Total Pemasukan, dan Total Pengeluaran.
   - Riwayat transaksi tersimpan rapi dan dapat dihapus jika ada kesalahan entri.
3. **Manajemen Petugas Jum'at Bulanan**:
   - Pengaturan tanggal, nama Khotib, Imam, Muadzin, dan Bilal per minggu.
4. **Manajemen Running Text**:
   - Menambah, mengedit urutan, dan menghapus teks pengumuman masjid.

---

## 5. ARSITEKTUR TEKNOLOGI

| Komponen | Teknologi | Keterangan |
|---|---|---|
| **Framework** | Flutter 3.x (Dart 3.x) | Single codebase untuk Android TV & Web |
| **State Management** | Riverpod | Arsitektur reaktif, modular, dan terisolasi |
| **Backend Database** | Google Cloud Firestore | NoSQL Realtime Database |
| **Platform Target** | Android TV / STB & Web PWA | APK Release untuk TV, Hosting untuk Web |
| **Native Integration** | Kotlin (Android NDK/SDK) | `BootReceiver` dan `AudioTrack` synthesizer |
| **Web Deployment** | Firebase Hosting | Akses instan PWA pengurus masjid |

---

## 6. KESIMPULAN

Sistem Digital Signage Masjid Nurul Huda ini berhasil menggantikan papan informasi konvensional menjadi media informasi digital yang cerdas, otomatis, dan berestetika tinggi. 

Dengan kombinasi **otomatisasi transisi ibadah shalat**, **manajemen kas transparan**, **dukungan perangkat Smart TV (auto-boot & overscan safe)**, serta **kemudahan kontrol dari ponsel pengurus**, sistem ini mampu meningkatkan efisiensi operasional DKM sekaligus menjaga ketertiban dan kekhusyukan jamaah di masjid.
