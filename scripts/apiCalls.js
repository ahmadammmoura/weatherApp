const key = 'Xgg8zHDk2Y6NiwmqJqyMwE8wFxeeV9Sz'

const getCity = async (city) =>{

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json();

    return data[0]
}

const getweather = async (locationId) =>{

    const base  = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locationId}?apikey=${key}`
    
    const response = await fetch(base + query)
    const data = await response.json()


    return data[0]

}

export {getweather , getCity}



// getCity('amman')
// .then(data => getweather(data.Key))
// .then(data => console.log(data))
// .catch(err => console.log(err))