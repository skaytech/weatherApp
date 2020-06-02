class Weather {
    constructor(city, country) {
        this.apiKey = 'e88e6975bad7b37f3fa366d2adf72649';
        this.city = city;
        this.country = country;
    }

    async getWeatherDetails() {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`;

            const response = await fetch(url);

            const data = await response.json();
            return {
                status: response.status,
                data: data
            }
        } catch (e) {
            throw e.message;
        }
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}