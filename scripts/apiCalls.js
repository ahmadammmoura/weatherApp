
class Apicalls {

    constructor(){
        this.key = 'Xgg8zHDk2Y6NiwmqJqyMwE8wFxeeV9Sz';
        this.weatherURl = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async ubdateCity(city){

        const Citydets = await this.getCity(city)
        const weather = await this.getweather(Citydets.Key)
    
        
        return { Citydets , weather } 
    
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
    
        const response = await fetch(this.cityURL + query)
        const data = await response.json();
    
        return data[0]
    }

    async getweather(locationId){

        const query = `${locationId}?apikey=${this.key}`
        
        const response = await fetch(this.weatherURl + query)
        const data = await response.json()
    
        return data[0]

    }



}















export {Apicalls}



// getCity('amman')
// .then(data => getweather(data.Key))
// .then(data => console.log(data))
// .catch(err => console.log(err))