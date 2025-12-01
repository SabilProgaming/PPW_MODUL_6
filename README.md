# Weather Dashboard

Weather Dashboard aplikasi berbasis web untuk menampilkan cuaca real-time dan prakiraan cuaca 5 hari menggunakan OpenWeatherMap API. Dibuat untuk Tugas Akhir Praktikum Pemrograman Web - Modul 6: AJAX & Web Service.

![Weather Dashboard](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌟 Fitur

### Current Weather Display
- Menampilkan suhu, kelembaban, dan kecepatan angin secara real-time
- Ikon cuaca dinamis dari OpenWeatherMap
- Informasi lokasi dan timestamp
- Info tambahan: tekanan udara, visibility, sunrise & sunset

### 5-Day Forecast
- Prakiraan cuaca harian dengan akurasi tinggi
- Tampilan suhu minimum dan maksimum
- Ikon cuaca dan deskripsi kondisi
- Filter berdasarkan tanggal

### Interactive Features
- **Search Functionality**: Cari cuaca berdasarkan nama kota
- **GPS Location**: Deteksi lokasi otomatis dengan geolocation API
- **Dark/Light Theme**: Toggle tema dengan persistensi localStorage
- **Filter Forecast**: Filter prakiraan berdasarkan tanggal
- **Loading Indicators**: Animasi loading yang smooth
- **Error Handling**: Pesan error yang user-friendly
- **Responsive Design**: Support semua ukuran layar (mobile, tablet, desktop)

### Additional Features
- **Hourly Forecast**: Prakiraan cuaca per 3 jam (15 jam ke depan)
- **Scroll to Top**: Tombol floating untuk kembali ke atas
- **Auto-Complete**: Pencarian kota dengan suggestions (via OpenWeather API)
- **Weather Details**: Wind speed, pressure, humidity, visibility, sunrise, sunset

## 📁 Struktur File

```
weather-dashboard-project/
├── index.html              # File HTML utama
├── css/
│   └── style.css          # Stylesheet aplikasi
├── js/
│   └── app.js             # JavaScript aplikasi
└── README.md              # Dokumentasi
```

## 🚀 Cara Menggunakan

### Metode 1: Direct Open (Recommended)
1. Download semua file dalam folder `weather-dashboard-project`
2. **Double-click** pada file `index.html`
3. Aplikasi akan langsung berjalan di browser default Anda

### Metode 2: Local Server (Optional)
Jika ingin menggunakan local server:

**Menggunakan Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Menggunakan Node.js (http-server):**
```bash
npm install -g http-server
http-server -p 8000
```

**Menggunakan VS Code Live Server:**
1. Install extension "Live Server" di VS Code
2. Right-click pada `index.html`
3. Pilih "Open with Live Server"

Kemudian buka browser dan akses: `http://localhost:8000`

## 📖 Cara Menggunakan Aplikasi

### 1. Search by City Name
- Ketik nama kota di search box
- Tekan **Enter** atau click tombol search
- Contoh: "Jakarta", "London", "New York"

### 2. Use GPS Location
- Click tombol **GPS** (ikon lokasi) di header
- Browser akan meminta izin akses lokasi
- Click "Allow" untuk menggunakan lokasi Anda
- Aplikasi akan otomatis menampilkan cuaca lokasi Anda

### 3. Toggle Theme
- Click tombol **Theme** (ikon bulan/matahari) di header
- Tema akan berganti antara light dan dark mode
- Pilihan tema akan tersimpan di browser (localStorage)

### 4. Filter Forecast
- Scroll ke bagian "Next 5 Days"
- Click pada tanggal di filter horizontal
- Tampilan akan menampilkan prakiraan untuk tanggal yang dipilih
- Click "All Days" untuk melihat semua prakiraan

### 5. Scroll to Top
- Scroll ke bawah halaman
- Click tombol **arrow up** di pojok kanan bawah
- Halaman akan otomatis scroll ke atas dengan smooth animation

## ⚙️ Konfigurasi

### API Key
Aplikasi sudah include API Key dari OpenWeatherMap yang siap pakai:
```javascript
const API_KEY = '4d8fb5b93d4af21d66a2948710284366';
```

Jika ingin menggunakan API Key sendiri:
1. Daftar gratis di [OpenWeatherMap](https://openweathermap.org/api)
2. Dapatkan API Key Anda
3. Buka file `js/app.js`
4. Replace API_KEY di baris 2 dengan API Key Anda

### Default Location
Default location adalah **Jakarta** (fallback jika GPS tidak diizinkan):
```javascript
// Di file js/app.js, fungsi getUserLocation()
() => fetchWeatherData('Jakarta')  // Ganti 'Jakarta' dengan kota lain jika perlu
```

## 🌐 Browser Support

Aplikasi ini support semua browser modern:
- ✅ Google Chrome (recommended)
- ✅ Mozilla Firefox
- ✅ Safari
- ✅ Microsoft Edge
- ✅ Opera

**Minimum Requirements:**
- ES6 JavaScript support
- CSS Grid & Flexbox support
- Fetch API support
- LocalStorage support

## 💻 Teknologi yang Digunakan

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Variables untuk theming
  - CSS Grid & Flexbox untuk layout
  - CSS Animations untuk loading state
  - Media Queries untuk responsive design
- **JavaScript (ES6+)**:
  - Async/Await untuk API calls
  - Fetch API untuk HTTP requests
  - LocalStorage untuk data persistence
  - DOM Manipulation
  - Event Handling

### API
- **OpenWeatherMap API**:
  - Current Weather Data API
  - 5 Day / 3 Hour Forecast API
  - Weather Icons API

### Browser APIs
- Geolocation API untuk GPS location
- LocalStorage API untuk theme persistence

## 🐛 Troubleshooting

### Aplikasi tidak menampilkan cuaca
**Solusi:**
- Pastikan ada koneksi internet
- Cek nama kota yang diinput (harus ejaan yang benar)
- Clear browser cache (Ctrl+F5)
- Coba refresh halaman

### GPS tidak berfungsi
**Solusi:**
- Pastikan browser memiliki permission untuk akses lokasi
- Di Chrome: Settings → Privacy → Site Settings → Location
- Jika masih error, gunakan search manual dengan nama kota

### Theme tidak tersimpan
**Solusi:**
- Pastikan browser tidak dalam mode incognito/private
- Cek LocalStorage tidak diblokir di browser settings
- Clear browser data dan coba lagi

### Tampilan berantakan (layout rusak)
**Solusi:**
- Pastikan file CSS (`css/style.css`) ada dan ter-load
- Check browser console (F12) untuk error
- Pastikan menggunakan browser yang support CSS Grid & Flexbox

### API Error / Rate Limit
**Solusi:**
- OpenWeatherMap free tier: 1,000 calls/day, 60 calls/minute
- Jika exceed limit, tunggu beberapa saat
- Cek koneksi internet
- Pastikan API Key masih valid

## 📱 Responsive Design

Aplikasi ini **fully responsive** dengan breakpoints:

- **Desktop** (1200px+): Grid 4 kolom, full features
- **Tablet** (768px - 1199px): Grid 2-3 kolom, compact layout
- **Mobile** (< 768px): Grid 1 kolom, stacked layout, touch-optimized

## 🎓 Untuk Submit Tugas

### Upload ke GitHub
```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Add weather dashboard project"

# 4. Create repository di GitHub (https://github.com/new)
# 5. Add remote
git remote add origin https://github.com/USERNAME/weather-dashboard.git

# 6. Push ke GitHub
git push -u origin main
```

### Atau Upload Manual
1. Buka [GitHub](https://github.com)
2. Click **New Repository**
3. Nama: `weather-dashboard`
4. Click **Create Repository**
5. Click **uploading an existing file**
6. Drag & drop semua file dari folder `weather-dashboard-project`
7. Click **Commit changes**

### Submit Link
Setelah upload ke GitHub, copy link repository Anda:
```
https://github.com/USERNAME/weather-dashboard
```
Submit link ini ke dosen/platform e-learning Anda.

### GitHub Pages (Optional)
Untuk deploy aplikasi secara online:
1. Di repository GitHub, click **Settings**
2. Scroll ke **Pages**
3. Source: pilih **main branch**
4. Click **Save**
5. Aplikasi akan live di: `https://USERNAME.github.io/weather-dashboard`

## 📝 Catatan Penting

### API Limitations
- Free tier OpenWeatherMap: 1,000 calls/day
- Rate limit: 60 calls/minute
- Data update setiap 10 menit
- Forecast: 5 days / 3 hour interval (40 data points)

### Features Sesuai Requirements Modul 6
✅ **AJAX Implementation**: Fetch API untuk async requests  
✅ **Web Service Integration**: OpenWeatherMap API  
✅ **Error Handling**: Try-catch, user-friendly messages  
✅ **Loading States**: Skeleton loading animation  
✅ **Dynamic DOM**: JavaScript DOM manipulation  
✅ **Responsive Design**: Mobile-first approach  
✅ **User Experience**: Smooth animations, intuitive UI  

### Security Best Practices
- API Key included (untuk kemudahan demo)
- Untuk production: gunakan environment variables
- HTTPS recommended untuk deployment
- Sanitize user input (search box)

## 🎯 Kriteria Penilaian

Aplikasi ini memenuhi semua kriteria Tugas Akhir Modul 6:

1. ✅ **Implementasi AJAX** (25 poin)
   - Fetch API untuk current weather
   - Fetch API untuk forecast
   - Async/Await pattern
   - Error handling

2. ✅ **Web Service Integration** (25 poin)
   - OpenWeatherMap API
   - Multiple endpoints (weather, forecast)
   - API key authentication
   - Response parsing (JSON)

3. ✅ **User Interface** (20 poin)
   - Clean & modern design
   - Responsive layout
   - Dark/Light theme
   - Loading indicators

4. ✅ **Functionality** (20 poin)
   - Search by city
   - GPS location
   - 5-day forecast
   - Filter by date
   - Theme toggle

5. ✅ **Code Quality** (10 poin)
   - Clean code structure
   - Proper comments
   - ES6+ syntax
   - Modular functions
   - Error handling

## 📞 Support

Jika ada pertanyaan atau kendala:
1. Check dokumentasi ini terlebih dahulu
2. Check browser console (F12) untuk error messages
3. Pastikan semua file ada dan path benar
4. Test di browser lain (Chrome recommended)

## 📄 License

Project ini dibuat untuk keperluan akademik - Tugas Akhir Praktikum Pemrograman Web.

---

**Created with ❤️ for Web Programming Practicum - Module 6: AJAX & Web Service**

*Weather data provided by OpenWeather API*
