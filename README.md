# 🏢 Izin Gedung - Konsultan Sipil Profesional

<div align="center">
  <img src="public/logo.svg" alt="Izin Gedung Logo" width="200" height="auto">
  
  **Solusi Terpercaya untuk Legalitas dan Keamanan Bangunan Anda**
  
  [![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![Inertia.js](https://img.shields.io/badge/Inertia.js-2.x-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)
</div>

## 📋 Deskripsi Project

**Izin Gedung** adalah platform digital yang menyediakan layanan konsultasi profesional untuk pengurusan izin dan legalitas bangunan. Website ini menawarkan layanan utama berupa **Sertifikat Laik Fungsi (SLF)** dan **Persetujuan Bangunan Gedung (PBG)** dengan pendekatan yang cepat, tepat, dan terpercaya.

### 🎯 Tujuan

- Memudahkan masyarakat dalam mengurus legalitas bangunan
- Menyediakan layanan konsultasi sipil yang profesional dan terpercaya
- Memastikan bangunan memenuhi standar keselamatan dan regulasi pemerintah
- Memberikan solusi administrasi yang efisien tanpa ribet

## ✨ Fitur Utama

### 🏠 **Halaman Beranda**

- Hero section dengan call-to-action yang menarik
- Overview layanan SLF dan PBG
- Alasan memilih layanan kami
- Informasi kontak dan konsultasi

### 📜 **Layanan SLF (Sertifikat Laik Fungsi)**

- Informasi lengkap tentang SLF
- Proses dan persyaratan yang diperlukan
- Manfaat memiliki sertifikat SLF
- Form konsultasi khusus SLF

### 🏗️ **Layanan PBG (Persetujuan Bangunan Gedung)**

- Detail layanan PBG sebagai pengganti IMB
- Panduan lengkap proses perizinan
- Keuntungan memiliki PBG
- Konsultasi untuk berbagai jenis bangunan

### 🔍 **SEO & Schema.org Optimized**

- Meta tags yang dioptimasi untuk setiap halaman
- Structured data dengan schema.org
- Open Graph dan Twitter Cards
- Breadcrumb navigation
- FAQ schema untuk better search visibility

## 🛠️ Tech Stack

### **Backend**

- **Laravel 12.x** - PHP Framework yang powerful dan elegant
- **Inertia.js 2.x** - Modern monolith approach
- **PHP 8.2+** - Latest PHP features

### **Frontend**

- **React 18.x** - Modern UI library
- **TypeScript 5.x** - Type-safe JavaScript
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Headless UI** - Unstyled, accessible UI components

### **Build Tools & Development**

- **Vite** - Fast build tool dan dev server
- **Laravel Vite Plugin** - Laravel integration
- **ESLint & Prettier** - Code linting dan formatting
- **TypeScript ESLint** - TypeScript-specific linting

### **UI Components & Styling**

- **Flowbite** - Component library
- **Anime.js** - Lightweight animation library
- **Class Variance Authority** - Component variants
- **clsx** - Conditional className utility

## 🚀 Quick Start

### Prerequisites

- **PHP 8.2+**
- **Composer**
- **Node.js 18+**
- **npm atau yarn**

### Installation

1. **Clone repository**

    ```bash
    git clone <repository-url>
    cd izingedung
    ```

2. **Install PHP dependencies**

    ```bash
    composer install
    ```

3. **Install Node.js dependencies**

    ```bash
    npm install
    ```

4. **Setup environment**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. **Configure database** (edit `.env` file)

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=izingedung
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    ```

6. **Run migrations**

    ```bash
    php artisan migrate
    ```

7. **Start development servers**

    ```bash
    # Terminal 1 - Laravel development server
    php artisan serve

    # Terminal 2 - Vite development server
    npm run dev
    ```

8. **Open browser**
    ```
    http://localhost:8000
    ```

## 📝 Available Scripts

### **Development**

```bash
npm run dev          # Start Vite development server
npm run build        # Build for production
npm run build:ssr    # Build with SSR support
```

### **Code Quality**

```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run types        # Type check with TypeScript
```

### **Laravel**

```bash
php artisan serve    # Start Laravel development server
php artisan migrate  # Run database migrations
php artisan tinker   # Laravel REPL
```

## 📁 Project Structure

```
izingedung/
├── app/                    # Laravel application logic
│   ├── Http/Controllers/   # HTTP controllers
│   ├── Models/            # Eloquent models
│   └── Providers/         # Service providers
├── resources/
│   ├── js/
│   │   ├── components/    # React components
│   │   ├── pages/         # Inertia.js pages
│   │   ├── layouts/       # Layout components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── types/         # TypeScript type definitions
│   ├── css/               # Stylesheets
│   └── views/             # Blade templates
├── routes/                 # Application routes
├── public/                 # Public assets
├── database/               # Database files
└── config/                 # Configuration files
```

## 🎨 Design System

### **Colors**

- **Primary**: Orange tones untuk branding
- **Secondary**: Professional grays
- **Accent**: Complementary colors untuk highlights

### **Typography**

- Modern, readable font stack
- Responsive typography scales
- Proper heading hierarchy

### **Components**

- Reusable React components
- Consistent spacing dan sizing
- Accessible design patterns
- Mobile-first responsive design

## 🔧 Configuration

### **Environment Variables**

Penting untuk dikonfigurasi di `.env`:

```env
APP_NAME="Izin Gedung"
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=izingedung
DB_USERNAME=root
DB_PASSWORD=
```

### **Vite Configuration**

Sudah dikonfigurasi untuk:

- React dengan TypeScript
- Tailwind CSS
- Laravel integration
- Hot module replacement
- SSR support

## 📱 Responsive Design

- **Mobile First**: Didesain untuk mobile terlebih dahulu
- **Breakpoints**: Menggunakan Tailwind CSS breakpoints
- **Touch Friendly**: Optimized untuk touch interactions
- **Performance**: Optimized images dan lazy loading

## 🔍 SEO Features

- **Meta Tags**: Optimized untuk setiap halaman
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Schema.org**: Structured data untuk search engines
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling guidelines

## 🚀 Deployment

### **Production Build**

```bash
# Build assets
npm run build

# Optimize Laravel
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### **Server Requirements**

- PHP 8.2+
- MySQL 8.0+ atau PostgreSQL 13+
- Nginx atau Apache
- SSL Certificate (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### **Code Style**

- Follow PSR-12 untuk PHP
- Use Prettier untuk JavaScript/TypeScript
- Follow React best practices
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [https://izingedung.id](https://izingedung.id)

---

<div align="center">
  <p><strong>Dibuat dengan ❤️ untuk kemudahan legalitas bangunan Indonesia</strong></p>
  <p>© 2025 Izin Gedung. All rights reserved.</p>
</div>
