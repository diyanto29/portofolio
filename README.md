# Diyanto Portfolio - Siap Upload ke GitHub Pages 🚀

Portofolio modern Software Engineer & Mobile Developer yang dirancang responsif, interaktif, dan terstruktur rapi dengan folder `assets/`.

---

## 📁 Struktur Berkas Proyek

```text
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css            # Stylesheet modular (glassmorphism, scrollbar, card hover)
│   ├── js/
│   │   └── main.js              # Logika interaktif (filter proyek, modal detail, kontak, ikon)
│   ├── images/
│   │   ├── favicon.svg          # Favicon modern logo 'D'
│   │   ├── og-image.svg         # Banner preview OpenGraph (WhatsApp, LinkedIn, Twitter)
│   │   ├── profile/             # Tempat menaruh foto profil Anda (misal: profile.jpg)
│   │   └── projects/            # Tempat menaruh tangkapan layar / mockup proyek
│   └── docs/                    # Tempat menaruh berkas CV / Resume (misal: resume-diyanto.pdf)
├── .github/
│   └── workflows/
│       └── deploy.yml           # Workflow otomatis GitHub Actions untuk deploy ke Pages
├── .nojekyll                    # Mencegah Jekyll mengabaikan file atau aset
├── 404.html                     # Halaman custom error 404 berdesain senada
├── favicon.svg                  # Root fallback favicon
├── og-image.svg                 # Root fallback banner OpenGraph
├── robots.txt                   # Konfigurasi perayap mesin pencari (SEO)
├── sitemap.xml                  # Peta situs untuk Google / Bing Search Console
├── index.html                   # Halaman utama portofolio
└── README.md                    # Panduan ini
```

---

## 💡 Panduan Menambahkan Aset Baru Nanti

1. **Foto Profil**:
   - Letakkan foto Anda di folder `assets/images/profile/` (misal `profile.png` atau `profile.jpg`).
   - Di `index.html`, Anda tinggal mengganti avatar placeholder dengan:
     ```html
     <img src="assets/images/profile/profile.png" alt="Diyanto" class="w-24 h-24 rounded-2xl object-cover" />
     ```

2. **Screenshot / Mockup Proyek**:
   - Simpan gambar ke `assets/images/projects/` (misal `loan-portal.png`, `ekyc.png`, dll).
   - Hubungkan ke card proyek di `index.html` atau data di `assets/js/main.js`.

3. **File CV / Resume**:
   - Simpan file PDF ke `assets/docs/resume-diyanto.pdf`.
   - Di tombol navbar "Hire Me" atau tombol CV di `index.html`, ubah link `href` menjadi:
     ```html
     <a href="assets/docs/resume-diyanto.pdf" download class="...">Download CV</a>
     ```

---

## 🚀 Cara Upload / Deploy ke GitHub Pages

Pilih salah satu metode berikut:

### Opsi A: Menggunakan Terminal / Git (Direkomendasikan)

1. **Masuk ke folder proyek**:
   ```bash
   cd ~/.gemini/antigravity-ide/scratch/portfolio
   ```
   *(Atau buka folder `portfolio` di VS Code / Terminal Anda)*

2. **Buat Repository Baru di GitHub**:
   - Buka [github.com/new](https://github.com/new).
   - Beri nama repository:
     - Jika ingin URL `https://username.github.io`: namai repo persis `username.github.io` (ganti *username* dengan akun GitHub Anda).
     - Atau bisa nama `portfolio` (URL: `https://username.github.io/portfolio`).
   - Pilih **Public**, lalu klik **Create repository**.

3. **Hubungkan & Push ke GitHub**:
   ```bash
   git remote add origin https://github.com/<USERNAME-ANDA>/<NAMA-REPO>.git
   git push -u origin main
   ```

4. **Aktifkan GitHub Pages**:
   - Buka repo di GitHub > Masuk ke tab **Settings** > **Pages**.
   - Pada bagian **Build and deployment**:
     - **Source**: Pilih **GitHub Actions** (otomatis jalan lewat workflow yang sudah disiapkan), ATAU
     - Pilih **Deploy from a branch** -> Branch `main` / folder `/(root)` -> Klik **Save**.
   - Tunggu sekitar 1–2 menit, portofolio Anda akan langsung online!

---

### Opsi B: Lewat Web GitHub (Upload Folder)

1. Buat repository baru di [github.com/new](https://github.com/new) (Public).
2. Di halaman repositori baru, klik **"uploading an existing file"**.
3. Drag & drop seluruh isi folder `portfolio` ke browser (pastikan folder `assets` ikut terunggah).
4. Klik **Commit changes**.
5. Masuk ke **Settings** > **Pages** > Pada **Source**, pilih **Deploy from a branch** (Branch: `main`), lalu klik **Save**.
