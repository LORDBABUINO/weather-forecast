export class Weather {

		currentTemperature
		maxTemperature
		minTemperature
		city
		country

	constructor(weather){
		this.currentTemperature = weather.main.temp
		this.maxTemperature = weather.main.temp_max
		this.minTemperature = weather.main.temp_min
		this.city = weather.name
		this.country = weather.sys.country
	}
}
