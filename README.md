# README.md - HMIF Portal

Selamat datang di repositori **HMIF Portal**. Proyek ini merupakan platform integrasi untuk berbagai layanan dan informasi Himpunan Mahasiswa Teknik Informatika Universitas Mataram.

## Tech Stack

Platform ini menggunakan arsitektur modern berbasis monorepo (shared repo):

- **Frontend**: [Next.js 15+](https://nextjs.org/) (React 19, Tailwind CSS 4)
- **Backend**: [Laravel 11](https://laravel.com/) (PHP 8.2+)
- **UI Components**: Shadcn UI & Lucide Icons

---

### Prasyarat
- Node.js (v20+)
- Composer & PHP (v8.2+)
- MySQL / PostgreSQL

### Instalasi & Menjalankan

#### 1. Frontend
```bash
cd frontend
npm install
npm run dev
```

#### 2. Backend
```bash
cd backend
composer install
cp .env.example .env 
php artisan key:generate
php artisan serve
```

---

## 📂 Struktur Proyek

```text
web-hmif/
├── frontend/    # Next.js Application
│   ├── src/app/        # App Router & Layouts
│   ├── src/components/ # Reusable UI & Sections
│   └── public/         # Assets & Logos
├── backend/     # Laravel API
│   ├── app/            # Business Logic
│   └── routes/         # API Endpoints
└── README.md    # Dokumentasi Utama
```

---

## 🤝 Kontribusi

1. Fork repositori ini.
2. Buat branch fitur kamu (`github checkout -b feature/FiturKeren`).
3. Commit perubahan kamu (`git commit -m 'Menambahkan fitur keren'`).
4. Push ke branch tersebut (`git push origin feature/FiturKeren`).
5. Buat Pull Request.

------
Made with ❤️ by **I Kadek Mahesa Permana Putra (Vuxyn)**
