import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {

  const [geoData, setGeoData] = useState<IGeoData[]>([])
  const [cityData, setCityData] = useState<ICityData[]>([])
  const [foreData, setForeData] = useState<IForeData[]>([])

  const [value, setValue] = useState<string>()
  const [city, setCity] = useState<string>()
  const [lat, setLat] = useState<ILat>()
  const [lon, setLon] = useState<ILon>()

  const apiKey = "269d894cb7c7f6154b9903ccbe4ce7f2"

  useEffect(() => {
    const getGeoData = async () => {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
      const geoRes = await axios.get(geoUrl);
      setGeoData(geoRes.data);
    }
    getGeoData()
      .catch(console.error)
  }, [city])

  useEffect(() => {
    const getCityData = async () => {
      const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric`
      const cityRes = await axios.get(currentUrl);
      setCityData([cityRes.data])

      const foreUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${apiKey}&units=metric`
      const foreRes = await axios.get(foreUrl);
      setForeData([foreRes.data])
    }
    getCityData()
      .catch(console.error)
  }, [geoData])

  console.log(cityData, "citydata")
  console.log(foreData, "forecast data")

  //Celsius Calculations
  const divVal = (5 / 9)

  return (
    <main className="">
      <form action={'/'} onSubmit={e => { e.preventDefault(); setCity(value) }}
        className={`flex flex-col`}>
        <label htmlFor="cityInput" className={`flex flex-1`}>
          <h4>City Name</h4>
        </label>
        <input type="text" id="cityInput" name="city" value={value} onChange={e => setValue(e.target.value)} />
      </form>
      {city && <h2 className={`text-center`}>Current Weather in <br /> {city}</h2>}
      <div>
        {
          cityData && cityData.map((c, index) => {
            return (
              <div key={index}>
                {
                  c.name === city ?
                    <div>
                      <p>Last updated: !Can't find!</p>
                      <p>Temp in Celcius:  {c.main.temp}</p>
                      <ul>Weather main from the api:</ul>
                      <li>Feels like: {c.main.feels_like}</li>
                      <li>Humidity: {c.main.humidity}</li>
                      <li>Pressure: {c.main.pressure}</li>
                      <li>Max: {c.main.temp_max}</li>
                      <li>Min: {c.main.temp_min}</li>
                      <p>Wind speed:{c.wind.speed}</p>
                    </div>
                    :
                    ""
                }
              </div>
            )
          })
        }
      </div>

      <div>
        {city && <h2>Weather Forecast</h2>}
        {
          foreData && foreData.map((f, cindex) => {
            return (
              <div key={cindex}
              >
                {
                  f.city.name === city ?
                    <div className={`flex flex-col gap-2 flex-wrap `}>
                      {
                        f.list && f.list.map((l, lindex) => {
                          return (
                            <div 
                            key={lindex}
                            className={`p-2 box-border border-2 rounded-lg`}>
                              <p>Temp: {l.main.temp.toFixed(1)}</p>
                              <p>Weather
                                {
                                  l.weather && l.weather.map((w, windex) => {
                                    return (
                                      <div key={windex}>
                                        <p>weather main: {w.main}</p>
                                        <p>weather main: {w.description}</p>
                                      </div>
                                    )
                                  })
                                }
                              </p>
                              <p>wind speed: {l.wind.speed}</p>
                              <p>date: {`${(new Date(l.dt_txt)).toLocaleString('default', { month: 'short' })} ${(new Date(l.dt_txt)).getDate()}, ${(new Date(l.dt_txt)).getFullYear()}`}</p>
                            </div>
                          )
                        })
                      }

                    </div>
                    :
                    ""
                }
              </div>
            )
          })
        }

      </div>

    </main>
  )
}
