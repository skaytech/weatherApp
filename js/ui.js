class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-description');
        this.maxTemp = document.querySelector('#w-max-temp');
        this.icon = document.querySelector('#w-icon');

        this.humidity = document.querySelector('#w-humidity');
        this.windDirection = document.querySelector('#w-wind-direction');
        this.windSpeed = document.querySelector('#w-wind-speed');
    }

    showWeatherData(data) {
        this.location.textContent = `${data.name}, ${data.sys.country}`;
        this.desc.textContent = data.weather[0].description;
        this.maxTemp.textContent = `${data.main.temp_max}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        this.humidity.textContent = `Relative Humidity: ${data.main.humidity}`;
        this.windDirection.textContent = `Wind Direction: ${data.wind.deg} degrees`;
        this.windSpeed.textContent = `Wind Speed: ${data.wind.speed}meters/second`;
    }

    showWeatherDataError(msg, className) {
        this.clearWeatherDataError();
        const errorDiv = document.createElement('div');
        errorDiv.id = 'weather-error';
        errorDiv.className = className;
        errorDiv.appendChild(document.createTextNode(msg));
        const parent = document.querySelector('.card-body');
        const location = document.querySelector('#w-location');
        parent.insertBefore(errorDiv, location);
        setTimeout(this.clearWeatherDataError, 2000);
    }

    clearWeatherDataError() {
        const weatherErrorDiv = document.querySelector('#weather-error');
        if (weatherErrorDiv) {
            weatherErrorDiv.remove();
        }
    }

    showModalError(msg, className) {
        this.clearModalError();
        const errorDiv = document.createElement('div');
        errorDiv.id = 'modal-error';
        errorDiv.className = className;
        errorDiv.appendChild(document.createTextNode(msg));
        const parent = document.querySelector('.modal-body');
        const modalForm = document.querySelector('#modal-form');
        parent.insertBefore(errorDiv, modalForm);
        setTimeout(this.clearModalError, 2000);
    }

    clearModalError() {
        const modalErrorDiv = document.querySelector('#modal-error');
        if (modalErrorDiv) {
            modalErrorDiv.remove();
        }
    }

}