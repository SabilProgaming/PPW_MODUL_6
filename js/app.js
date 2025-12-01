// ===== CONFIGURATION =====
const API_KEY = '4d8fb5b93d4af21d66a2948710284366';
const API_BASE = 'https://api.openweathermap.org/data/2.5';

// ===== STATE =====
let currentWeatherData = null;
let forecastData = null;

// ===== UTILITY FUNCTIONS =====
const roundDegree = (degree) => {
    const rounded = Math.round(degree * 10) / 10;
    return rounded % 1 === 0 ? `${rounded.toFixed(1)}°C` : `${rounded}°C`;
};

const formatDate = (unixTimestamp, type = 'full') => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date(unixTimestamp * 1000);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const dayIndex = date.getDay();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    if (type === 'day') return daysOfWeek[dayIndex];
    if (type === 'hour') return `${hours}:${minutes}`;
    if (type === 'short') return `${day} ${monthsShort[monthIndex]} ${daysShort[dayIndex]}`;
    return `${day} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayIndex]}`;
};

const mpsToKmh = (mps) => `${Math.round(mps * 3.6)} km/h`;
const metersToKm = (meters) => `${meters / 1000} km`;
const capitalize = (str) => str.replace(/\b\w/g, match => match.toUpperCase());
const getWeatherIcon = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

// ===== LOADING STATE =====
const startLoadingState = () => {
    document.querySelectorAll('.dynamic-data').forEach(el => el.classList.add('loading'));
};

const endLoadingState = () => {
    document.querySelectorAll('.dynamic-data').forEach(el => el.classList.remove('loading'));
};

// ===== ERROR HANDLING =====
const handleError = (message, buttonText = 'Try Again') => {
    const alert = document.getElementById('alert');
    const alertMessage = document.getElementById('alertMessage');
    const alertButton = document.getElementById('alertButton');

    alertMessage.textContent = message;
    alertButton.textContent = buttonText;
    alert.classList.add('active');
    endLoadingState();

    alertButton.onclick = buttonText === 'Refresh Page' 
        ? () => location.reload() 
        : () => {
            alert.classList.remove('active');
            document.querySelector('.search-box-input').focus();
        };
};

const hideAlert = () => document.getElementById('alert').classList.remove('active');

// ===== API CALLS =====
const fetchCurrentWeather = async (location) => {
    const url = location.lat && location.lon
        ? `${API_BASE}/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        : `${API_BASE}/weather?q=${location}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status === 404 
            ? `Sorry, we couldn't find "${location}". Please check the spelling.`
            : 'Failed to fetch weather data. Please try again.');
    }

    const data = await response.json();
    currentWeatherData = data;
    displayCurrentWeather(data);
    return data;
};

const fetchForecast = async (location) => {
    const url = location.lat && location.lon
        ? `${API_BASE}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        : `${API_BASE}/forecast?q=${location}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch forecast data.');

    const data = await response.json();
    forecastData = data;
    displayForecast(data);
    displayDailyForecast(data);
    return data;
};

// ===== DISPLAY FUNCTIONS =====
const displayCurrentWeather = (data) => {
    document.querySelector('.current-weather-icon').src = getWeatherIcon(data.weather[0].icon);
    document.querySelector('.current-weather-temperature').textContent = roundDegree(data.main.temp);
    document.querySelector('.current-weather-description').textContent = capitalize(data.weather[0].description);
    document.querySelector('.current-location').textContent = data.name;
    document.querySelector('.current-date').textContent = formatDate(data.dt);
    document.querySelector('.wind-speed-value').textContent = mpsToKmh(data.wind.speed);
    document.querySelector('.pressure-value').textContent = `${data.main.pressure} hPa`;
    document.querySelector('.sunrise-value').textContent = formatDate(data.sys.sunrise, 'hour');
    document.querySelector('.humidity-value').textContent = `${data.main.humidity}%`;
    document.querySelector('.visibility-value').textContent = metersToKm(data.visibility);
    document.querySelector('.sunset-value').textContent = formatDate(data.sys.sunset, 'hour');
};

const displayForecast = (data) => {
    const container = document.querySelector('.hourly-weather-forecast-section');
    container.innerHTML = data.list.slice(0, 5).map(item => `
        <div class="hourly-weather-forecast-card">
            <div class="hourly-weather-forecast-date-time">
                <div class="hourly-weather-forecast-date">${formatDate(item.dt, 'day')}</div>
                <div class="hourly-weather-forecast-time">${formatDate(item.dt, 'hour')}</div>
            </div>
            <div class="hourly-weather-forecast-temperature">${roundDegree(item.main.temp)}</div>
        </div>
    `).join('');
};

const displayDailyForecast = (data) => {
    const container = document.querySelector('.daily-forecast-section');
    container.innerHTML = data.list.map(item => `
        <div class="daily-weather-forecast-card">
            <div class="daily-weather-forecast-date-time">
                <div class="daily-weather-forecast-date">${formatDate(item.dt, 'short')}</div>
                <div class="daily-weather-forecast-time">${formatDate(item.dt, 'hour')}</div>
            </div>
            <img class="daily-weather-forecast-icon" src="${getWeatherIcon(item.weather[0].icon)}" alt="${item.weather[0].description}">
            <div class="daily-forecast-weather-details">
                <div class="daily-weather-forecast-temperature">${roundDegree(item.main.temp)}</div>
                <div class="daily-weather-forecast-description">${capitalize(item.weather[0].main)}</div>
            </div>
        </div>
    `).join('');

    createFilterContainer(data);
};

const createFilterContainer = (forecastData) => {
    const existing = document.querySelector('.filter-container');
    if (existing) existing.remove();

    const uniqueDates = ['All Days', ...new Set(forecastData.list.map(item => formatDate(item.dt, 'short')))];
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';

    filterContainer.innerHTML = uniqueDates.map((date, i) => 
        `<div class="filter-item ${i === 0 ? 'active' : ''}" onclick="filterDailyForecast('${date}')">${date}</div>`
    ).join('');

    const heading = document.querySelector('.heading:last-of-type');
    heading.parentNode.insertBefore(filterContainer, heading.nextSibling);
};

const filterDailyForecast = (selectedDate) => {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.toggle('active', item.textContent === selectedDate);
    });

    document.querySelectorAll('.daily-weather-forecast-card').forEach(card => {
        const cardDate = card.querySelector('.daily-weather-forecast-date').textContent;
        card.style.display = selectedDate === 'All Days' || cardDate === selectedDate ? 'flex' : 'none';
    });
};

// Make filterDailyForecast global
window.filterDailyForecast = filterDailyForecast;

// ===== MAIN FUNCTION =====
const fetchWeatherData = async (location) => {
    try {
        hideAlert();
        startLoadingState();
        await fetchCurrentWeather(location);
        await fetchForecast(location);
        endLoadingState();
    } catch (error) {
        handleError(
            error.message === 'Failed to fetch' 
                ? 'No internet connection. Please check and try again.'
                : error.message,
            error.message === 'Failed to fetch' ? 'Refresh Page' : 'Try Again'
        );
    }
};

// ===== GEOLOCATION =====
const getUserLocation = () => {
    if (!navigator.geolocation) {
        fetchWeatherData('Jakarta');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => fetchWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        }),
        () => fetchWeatherData('Jakarta')
    );
};

// ===== THEME TOGGLE =====
const toggleTheme = () => {
    const html = document.documentElement;
    const current = localStorage.getItem('theme');
    
    if (current) {
        html.classList.remove(current);
        localStorage.removeItem('theme');
    } else {
        const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
        html.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    }
};

// ===== SCROLL TO TOP =====
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.classList.add(saved);

    getUserLocation();

    document.querySelector('.search-box-input').addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            const location = e.target.value.trim();
            if (location) fetchWeatherData(location);
        }
    });

    document.querySelector('.gps-button').addEventListener('click', getUserLocation);
    document.querySelector('.theme-button').addEventListener('click', toggleTheme);
    document.querySelector('.top-button').addEventListener('click', scrollToTop);
});
