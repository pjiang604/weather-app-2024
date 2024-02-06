import { useEffect, useState } from "react"
import axios from "axios"
import CurrentWeather from "@/components/CurrentWeather"
import ForecastWeather from "@/components/ForecastWeather"

export default function Home() {

  const [geoData, setGeoData] = useState<IGeoData[]>([])
  const [cityData, setCityData] = useState<ICityData[]>([])
  const [foreData, setForeData] = useState<IForeData[]>([])

  const [value, setValue] = useState<string>()
  const [city, setCity] = useState<string>()


  const apiKey = process.env.NEXT_PUBLIC_API

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
                    <CurrentWeather
                      temperature={c.main?.temp}
                      feels_like={c.main?.feels_like}
                      humidity={c.main?.humidity}
                      pressure={c.main?.pressure}
                      temp_max={c.main?.temp_max}
                      temp_min={c.main?.temp_min}
                      wind_speed={c.wind?.speed}
                    />
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
                            <div key={lindex}>
                              {
                                l.weather && l.weather.map((w, windex) => {
                                  return (
                                    <div key={windex}>
                                      <ForecastWeather
                                        temperature={l.main.temp}
                                        weather_main={w.main}
                                        weather_description={w.description}
                                        wind_speed={l.wind.speed}
                                        date={l.dt_txt}
                                      />
                                    </div>
                                  )
                                })
                              }
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
