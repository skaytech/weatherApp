//Initialize Weather Class
const weather = new Weather('Mumbai', 'IN');

//Initialize UI Class
const ui = new UI();

//Initialize Storage Class
const storage = new Store();

//Get Weather Location from local storage
const weatherLocation = storage.getLocation();

//Set the Weather Location from local storage
weather.changeLocation(weatherLocation.city, weatherLocation.country);

//Fetch the Weather Details on DOMContentLoaded Event
window.addEventListener('DOMContentLoaded', fetchWeatherDetails());

document.querySelector('#save-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#input-city');
    const country = document.querySelector('#input-country');

    if (city.value === '' || country.value === '') {
        ui.showModalError('Please enter values for City and Country', 'alert alert-danger');
    } else {
        //Change the location 
        weather.changeLocation(city.value, country.value);

        //Set location to local storage
        storage.setLocation(city.value, country.value);

        fetchWeatherDetails();

        $('#locModal').modal('hide');
    }
});

function fetchWeatherDetails() {
    weather.getWeatherDetails()
        .then(data => {
            if (data.status !== 200) {
                ui.showWeatherDataError('Unable to fetch data. Try again later', 'alert alert-danger');
            } else {
                ui.showWeatherData(data.data);
            }
        });
}