import { useEffect, useState } from "react"
import axios from "axios"
import CurrentWeather from "@/components/CurrentWeather"
import ForecastWeather from "@/components/ForecastWeather"
import Title from "@/components/Title"
import ScrollTop from "@/components/ScrollTop"
import { TextField } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {

  const [cityData, setCityData] = useState<ICityData[]>([])
  const [foreData, setForeData] = useState<IForeData[]>([])

  const [value, setValue] = useState<string>()
  const [city, setCity] = useState<string>()

  const [dataLoading, setDataLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)


  const apiKey = process.env.NEXT_PUBLIC_API
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` //current weather api
  const foreUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric` //forecast api

  useEffect(() => {
    if (!city) return;
    const getCityData = async () => {

      setDataLoading(true)
      setError(false)
      try {
        const cityRes = await axios.get(currentUrl);
        setCityData([cityRes.data])

        const foreRes = await axios.get(foreUrl);
        setForeData([foreRes.data])

      } catch (error) {
        setError(true)

      } finally {
        setDataLoading(false)

      }
    }
    getCityData()
  }, [city])

  return (
    <main className="flex flex-col gap-8">

      <div className={`flex flex-col justify-evenly ${!city ? `h-75vh` : `gap-8 mb-12`}`}>
        <Title />
        <div className={`flex justify-center w-full`}>
          <form 
          className={`flex flex-col`}
          action={'/'} onSubmit={e => { e.preventDefault(); value && setCity(value.substring(0, 1).toUpperCase() + value.substring(1)) }}>
            <label htmlFor="cityInput" className={`flex flex-1`}>
              <h4>City Name</h4>
            </label>
            <TextField variant="outlined" color="secondary" type="text" id="cityInput" name="city" value={value} onChange={e => setValue(e.target.value)} />
          </form>
        </div>

      </div>
      {
        error ?
          <div className={`flex flex-col items-center`}>
            <p>City not found.</p>
            <p>Try a different city!</p>
          </div>

          :
          <>
            {
              dataLoading ?
                <div className={`w-full flex justify-center`}>
                  <CircularProgress color="secondary" />
                </div>
                :
                <>
                  {
                    cityData && !dataLoading ?
                      <>
                        <div className={`flex flex-col gap-4`}>
                          {city &&
                            <div className={`text-center`}>
                              <h2 className={`text-center`}>Current Weather in</h2>
                              <h1>{city}</h1>
                            </div>}
                          {
                            cityData && cityData.map((c, index) => {
                              return (
                                <div key={index}>
                                  {
                                    c.name === city ?
                                      <div className={`flex flex-row justify-center`}>
                                        {
                                          c.weather && c.weather.map((wId, wIdIndex) => {
                                            return (
                                              <CurrentWeather
                                                key={wIdIndex}
                                                temperature={c.main.temp}
                                                feels_like={c.main.feels_like}
                                                humidity={c.main.humidity}
                                                pressure={c.main.pressure}
                                                temp_max={c.main.temp_max}
                                                temp_min={c.main.temp_min}
                                                wind_speed={c.wind.speed}
                                                update={c.dt}
                                                weather_id={wId.id}
                                                weather_main={wId.main}
                                              />
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

                        <div className={`flex flex-col gap-4`}>
                          {city && <h2>Weather Forecast</h2>}
                          <div className={`flex flex-row wrap`}>
                            {
                              foreData && foreData.map((f, cindex) => {
                                return (
                                  <div key={cindex} className={`w-full`}>
                                    {
                                      f.city.name === city ?
                                        <div className={`flex flex-col gap-4 md:flex-row flex-wrap w-full `}>
                                          {
                                            f.list && f.list.map((l, lindex) => {
                                              return (
                                                <div key={lindex} className={`w-full md:w-half lg:w-third`}>
                                                  {
                                                    l.weather && l.weather.map((w, windex) => {
                                                      return (
                                                        <ForecastWeather
                                                          key={windex}
                                                          temperature={l.main.temp}
                                                          weather_main={w.main}
                                                          weather_description={w.description}
                                                          wind_speed={l.wind.speed}
                                                          date={l.dt_txt}
                                                          time={l.dt_txt}
                                                          weather_id={w.id}
                                                        />
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
                        </div>
                      </>
                      :
                      ""
                  }
                </>
            }
          </>
      }

      <ScrollTop />
    </main>
  )
}
