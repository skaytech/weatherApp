class Store {
    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.defaultCity = 'London';
        this.defaultCountry = 'UK';
    }

    getLocation() {
        localStorage.getItem('city') === null ? (this.city = this.defaultCity) :
            (this.city = localStorage.getItem('city'));

        localStorage.getItem('country') === null ? (this.country = this.defaultCountry) :
            (this.country = localStorage.getItem('country'));

        return {
            city: this.city,
            country: this.country
        }
    }


    setLocation(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
}