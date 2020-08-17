const key = 'mGNP8FTAUy01ETeVe8cIAWdQxybNQIEt'

const getCity = async (city) =>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json();

    return data[0]
}

const getweather = async (locationId) =>{

    const base  = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locationId}?apikey=${key}`
    
    const response = await fetch(base + query)
    const data = await response.json()


    return data[0]

}



// getCity('amman')
// .then(data => getweather(data.Key))
// .then(data => console.log(data))
// .catch(err => console.log(err))