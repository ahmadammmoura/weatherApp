import {getCity,getweather} from './apiCalls.js'


const cityForm = document.querySelector('form');
const cards = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const ubdateCity = async (city) => {

    const Citydets = await getCity(city)
    const weather = await getweather(Citydets.Key)

    
    return { Citydets , weather } 

}

const updateUI = (data) =>{

    console.log(data)
    const {Citydets,weather} = data

    details.innerHTML = `
            <h5 class="my-3">${Citydets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
            `


    if(cards.classList.contains('d-none')){
        cards.classList.remove('d-none')
    }
    
    const imgUrl = (weather.IsDayTime) ? '/img/day.svg' : '/img/night.svg'

    time.setAttribute('src',imgUrl);

    const iconsrc = `/img/icons/${weather.WeatherIcon}.svg`

    icon.setAttribute('src',iconsrc)

}



cityForm.addEventListener('submit', e =>{
    e.preventDefault()
    const cityName = cityForm.city.value.trim()

    cityForm.reset()

    ubdateCity(cityName)
        .then(data => updateUI(data))

    
    localStorage.setItem('city',cityName)

})

let cheackCity = localStorage.getItem('city')

if(cheackCity){
    ubdateCity(cheackCity)
    .then(data => updateUI(data))
}

