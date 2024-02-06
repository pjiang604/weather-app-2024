

export default function ForecastWeather({
    temperature,
    weather_main,
    weather_description,
    wind_speed,
    date,
    time,
    weather_id

}: IForecastWeather) {

    const newDate = `${new Date(date).toLocaleString('default', { month: 'short' })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
    const newTime = `${new Date(time).toLocaleString('en-US', { timeStyle: 'short', hour12: true })}`
    return (
        <>
            <div className={`p-2 rounded-md shadow-grey-shadow
            ${weather_id >= 200 && weather_id < 300 ? `bg-violet-300` : //Thunderstorm
                    weather_id >= 300 && weather_id < 600 ? `bg-indigo-200` : //Drizzle and Rain
                        weather_id >= 600 && weather_id < 700 ? `bg-neutral-200` : //Snow
                            weather_id > 700 && weather_id < 800 ? `bg-darkPurple text-white` : //Atmosphere
                                weather_id > 800 ? `bg-lightGrey` : `bg-white` //Clouds : Clear
                }
            `}>
                <h4>{newDate} {newTime}</h4>
                <p>Temperature:  {temperature.toFixed(1)}°C</p>
                <p>Weather: {weather_main} ({weather_description})</p>
                <p>Wind speed: {wind_speed} meters/sec</p>

            </div>
        </>
    )
}