# Weather Dashboard

Weather Dashboard aplikasi berbasis web untuk menampilkan cuaca real-time dan prakiraan cuaca 5 hari menggunakan OpenWeatherMap API. Dibuat untuk Tugas Akhir Praktikum Pemrograman Web - Modul 6: AJAX & Web Service.

![Weather Dashboard](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/8036100d-5044-4ec9-9fd7-2c333ca4df2a" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/beff57a7-3f60-4612-8b3a-e95870c5e0c1" />


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



### Default Location
Default location adalah **Jakarta** (fallback jika GPS tidak diizinkan):
```javascript
// Di file js/app.js, fungsi getUserLocation()
() => fetchWeatherData('Jakarta')  // Ganti 'Jakarta' dengan kota lain jika perlu
```

**Created with ❤️ for Web Programming Practicum - Module 6: AJAX & Web Service**

*Weather data provided by OpenWeather API*
