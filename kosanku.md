# Product Requirement Document (PRD)
## Sistem Manajemen Kos-Kosan (Offline-First Android App)

---

## 1. Ringkasan Eksekutif

| Parameter | Spesifikasi |
| :--- | :--- |
| **Nama Produk** | JuraganKost / KostKu Mobile |
| **Versi Dokumen** | 1.0.0 |
| **Status Dokumen** | Disetujui untuk Tahap Implementasi |
| **Tipe Aplikasi** | Native / Hybrid Android Mobile Application |
| **Arsitektur Jaringan**| **100% Offline-First** (Tanpa server API & cloud database wajib) |
| **Model Distribusi** | Beli putus (*one-time license*) melalui Marketplace (Shopee, Tokopedia, TikTok Shop, Lynk.id) |
| **Target Pasar** | Pemilik kos skala mikro–menengah (5–50 kamar) yang menginginkan pencatatan praktis, anti-ribet, tanpa biaya bulanan (*subscription-free*), dan bebas ketergantungan sinyal internet |

---

## 2. Arsitektur Teknis & Penyimpanan Berkas

### 2.1 Spesifikasi Perangkat Lunak
* **Platform Target:** Android 8.0 (Oreo / API Level 26) ke atas.
* **Framework Rekomendasi:** Flutter (Dart) atau Kotlin Native.
* **Database Mesin:** SQLite / Drift (penyimpanan lokal penuh pada direktori privat aplikasi).
* **Manajemen Kunci Rahasia:** `EncryptedSharedPreferences` (Android Jetpack Security) / `flutter_secure_storage`.
* **Obfuscation & Keamanan Kode:** ProGuard / R8 diaktifkan penuh pada mode rilis (`minifyEnabled true`, `shrinkResources true`).

### 2.2 Struktur Penyimpanan Media & Data
* **Foto KTP & Bukti Transfer:** Disimpan di subfolder lokal privat perangkat (`/data/user/0/[package_name]/app_flutter/media/`) dengan nama file berbasis hash UUID untuk menjaga privasi penyewa.
* **Berkas Backup Database:** Berkas biner `.db` terkompresi yang dapat diekspor/diimpor secara manual oleh pengguna ke media eksternal (Google Drive / WhatsApp / SD Card).

---

## 3. Spesifikasi Proteksi Lisensi (100% Offline Cryptographic Lock)

Aplikasi wajib dilindungi agar satu file instalasi APK yang dibeli tidak dapat disebarluaskan secara bebas tanpa izin penjual.

### 3.1 Skema Alur Lisensi

```
[Pengguna Buka APK Baru]
          │
          ▼
[Aplikasi Baca Hardware ID]
          │
          ▼
[Layar Lisensi Terkunci] ──(Kirim via WhatsApp)──► [Developer / Penjual]
                                                          │
                                            (Hitung: HMAC-SHA256(ID, Secret))
                                                          │
[Aplikasi Terbuka Penuh] ◄──(Input Serial Key)──── [Kirim Balik Serial Key]
```

### 3.2 Detail Matematis Lisensi
1. **Generasi Hardware ID:**
   * Aplikasi membaca identitas perangkat:
     $$\text{RawID} = \text{ANDROID\_ID}$$
   * Diformat agar ringkas dibaca manusia:
     $$\text{Hardware ID} = \text{"KOS-" + Substring(SHA256(RawID), 0, 4) + "-" + Substring(SHA256(RawID), 4, 8)}$$
     *(Contoh: `KOS-8821-X9A2`)*
2. **Generasi Serial Key (Sisi Penjual):**
   * Penjual menjalankan script generator lokal (Python/Web HTML internal):
     $$\text{FullHash} = \text{HMAC-SHA256}(\text{Key} = \text{SECRET\_SALT}, \text{Message} = \text{Hardware ID})$$
     $$\text{Serial Key} = \text{Format4x4}(\text{Substring}(\text{FullHash}, 0, 16))$$
     *(Contoh: `AK82-9901-BL42-77XA`)*
3. **Verifikasi Sisi Aplikasi:**
   * Aplikasi menerima input Serial Key dari pengguna.
   * Algoritma internal aplikasi menjalankan fungsi hashing yang sama menggunakan `SECRET_SALT` yang telah di-obfuscate dalam binary kode.
   * Jika hasil hitung cocok: Status lisensi diubah menjadi `ACTIVATED` dan disimpan dalam penyimpanan terenkripsi.

---

## 4. Rincian Modul & Fungsionalitas Fitur

### 4.1 Modul Dashboard (Pusat Kendali Operasional)
* **Kartu Ringkasan Metrik Finansial & Okupansi:**
  * **Tingkat Okupansi:** Menampilkan perbandingan kamar terisi vs kapasitas total (contoh: `12 / 15 Kamar Terisi (80%)`).
  * **Target Pemasukan Bulan Berjalan:** Total proyeksi sewa dari seluruh kamar terisi.
  * **Realisasi Kas Masuk:** Total dana sewa yang telah dibayarkan oleh penyewa bulan ini.
  * **Piutang Tertunda:** Akumulasi nominal tagihan yang belum dilunasi.
* **Pusat Peringatan Mendesak (Urgent Action Alerts):**
  * Daftar sewa lewat jatuh tempo (menunggak) dengan tombol jalan pintas langsung kirim pesan tagihan WhatsApp.
  * Daftar sewa yang jatuh tempo dalam $\le 3$ hari ke depan.
* **Denah Kamar Visual (Grid Layout):**
  * Tampilan grid interaktif yang menggambarkan tata letak fisik kamar.
  * Kode warna status:
    * 🟢 **Hijau:** Kamar kosong & siap dipasarkan.
    * 🔵 **Biru:** Terisi dengan riwayat pembayaran lancar.
    * 🟡 **Kuning:** Jatuh tempo mendekat ($\le 3$ hari).
    * 🔴 **Merah:** Menunggak / melewati tanggal jatuh tempo sewa.
    * ⚪ **Abu-abu:** Kamar dalam proses renovasi / perbaikan fasilitas.

### 4.2 Modul Kamar & Profil Penyewa
* **Master Data Kamar:**
  * Pengelompokan: Lantai / Gedung / Tipe Kamar (AC, Kamar Mandi Dalam, Kasur Springbed, Listrik Token/Inklusif).
  * Harga sewa standar: Periode bulanan, harian, atau tahunan.
* **Data Penghuni Lengkap:**
  * Identitas utama: Nama lengkap, Nomor WhatsApp aktif, No. KTP/NIK, Pekerjaan / Kampus.
  * Kontak darurat: Nama dan nomor kerabat yang bisa dihubungi saat kondisi darurat.
  * Tanggal mulai kontrak & penetapan tanggal jatuh tempo tagihan berkala (misal: tiap tanggal 1 atau 5).
  * Pengambilan foto KTP langsung dari kamera atau galeri dengan pemangkasan (*crop*) gambar otomatis.
  * Riwayat riil penghuni terdahulu (arsip penyewa *check-out*).

### 4.3 Modul Riwayat Pembayaran Bulanan (Detail Transaksi)
* **Kartu Linimasa Pembayaran Kamar (Tenant Billing Card):**
  * Menampilkan riwayat pembayaran historis bulan demi bulan untuk setiap penyewa:
    * Periode Sewa (contoh: September 2026).
    * Tanggal Jatuh Tempo vs Tanggal Realisasi Pembayaran.
    * Rincian Tarif: Harga sewa pokok + biaya tambahan barang elektronik (kulkas, dispenser, dsb.) $-$ diskon/potongan.
    * Status Bayar: **Lunas**, **Sebagian (Cicilan/DP)**, atau **Menunggak**.
    * Riwayat bukti transfer (lampiran foto tersimpan lokal).
* **Dukungan Pembayaran Bertahap (Cicilan / Uang Muka):**
  * Memungkinkan pencatatan pembayaran termin (misal: bayar separuh di awal bulan, sisa pelunasan di pertengahan bulan).
  * Perhitungan otomatis sisa sisa piutang berjalan.
* **Buku Rekap Riwayat Bulanan Global (Matrix View):**
  * Matriks tabel seluruh kamar per bulan terpilih. Memudahkan evaluasi audit bulanan tanpa harus membuka detail kamar satu per satu.
* **Cetak Ulang Bukti Bayar Kuitansi:**
  * Pengguna dapat sewaktu-waktu mencetak atau membagikan ulang kuitansi digital untuk transaksi bulan-bulan sebelumnya.

### 4.4 Otomatisasi Penagihan via WhatsApp (Tanpa Biaya API Server)
* Memanfaatkan Android Intent `wa.me` / `whatsapp://send` langsung membuka aplikasi WhatsApp tanpa perantara API gateway berbayar.
* **Template Draf Tagihan Otomatis:**
  ```text
  Halo Kak [Nama Penyewa], ini pengingat tagihan sewa kamar [No. Kamar] kos [Nama Kos] untuk periode [Bulan Tahun].

  Total Tagihan: Rp[Nominal]
  Jatuh Tempo: [Tanggal Bulan Tahun]

  Pembayaran dapat ditransfer ke:
  Bank: [Nama Bank]
  No. Rekening: [Nomor Rekening]
  Atas Nama: [Nama Pemilik Kos]

  Mohon konfirmasi atau kirimkan bukti transfer jika sudah membayar ya Kak. Terima kasih.
  ```

### 4.5 Pembukuan Operasional & Cetak Nota
* **Pencatatan Biaya Operasional:** Input pengeluaran rutin (token listrik bersama, tagihan air PDAM, WiFi, iuran kebersihan/sampah, biaya pemeliharaan/perbaikan).
* **Generator Kuitansi:**
  * Kuitansi PDF siap simpan / bagikan via WhatsApp.
  * Dukungan cetak printer thermal Bluetooth format ESC/POS standar (58mm dan 80mm).

### 4.6 Laporan Keuangan & Ekspor Berkas Excel
* **Laporan Laba Rugi Operasional:**
  $$\text{Laba Bersih} = \text{Total Kas Masuk Sewa} - \text{Total Pengeluaran Operasional}$$
* **Ekspor Berkas Spreadsheet (`.xlsx`):**
  * Menghasilkan berkas Excel rapi langsung di folder `Downloads` perangkat:
    * **Sheet 1:** Rekap Buku Kas (Pemasukan & Pengeluaran).
    * **Sheet 2:** Riwayat Pembayaran Seluruh Kamar Tahunan.
    * **Sheet 3:** Basis Data Penyewa Aktif & Kamar Kosong.

### 4.7 Pencadangan Data Mandiri (Backup & Restore)
* **Cadangkan Database:** Menyalin database SQLite internal menjadi satu file berkas cadangan (`.db` terenkripsi) yang dapat dikirimkan pemilik ke Google Drive atau WhatsApp dokumen miliknya.
* **Pulihkan Database:** Memuat berkas cadangan ke dalam aplikasi saat pemilik berganti ponsel baru untuk memulihkan seluruh data dan histori secara instan.

---

## 5. Rencana Tahapan Rilis (Roadmap)

| Fase | Target Waktu | Fokus Deliverable |
| :--- | :--- | :--- |
| **Fase 1** | Minggu 1 | Struktur database SQLite, skema tabel, implementasi proteksi lisensi offline, dan script key generator admin. |
| **Fase 2** | Minggu 2 | Manajemen master kamar, status denah visual grid, CRUD data penghuni, dan penyimpanan foto KTP lokal. |
| **Fase 3** | Minggu 3 | Modul kasir pembayaran, kartu histori pembayaran bulanan, integrasi penagihan via WhatsApp intent, cetak thermal ESC/POS. |
| **Fase 4** | Minggu 4 | Buku kas operasional, laporan laba rugi, modul ekspor Excel `.xlsx`, dan fitur backup/restore database. |
| **Fase 5** | Minggu 5 | Konfigurasi ProGuard/R8 obfuscation, pembuatan installer APK rilis, video panduan setup aktivasi untuk marketplace. |