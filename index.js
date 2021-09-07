const getWeather = async () => {

    const getInput = document.getElementById('input')
    const cityName = getInput.value;
    getInput.value = ''

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=31756088f95950e8db6e6e881f838615`
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => showWeather(data))
    //     .catch(error => alert('Can not read property of city name'))

    try {
        const res = await fetch(url)
        const data = await res.json();
        showWeather(data)
    }
    catch (error) {
        alert(error)
    }
}

const showWeather = data => {
    console.log(data);
    const weatherContainer = document.getElementById('weatherResult')
    const temp = ((data.main.temp) - 273.15).toFixed(1);
    weatherContainer.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1>${data.name}</h1>
        <h3><span>${temp}</span>&deg;C</h3>
        <h1 class="lead">${data.weather[0].description}</h1>
`
}
