

export default function ForecastWeather({
    temperature,
    weather_main,
    weather_description,
    wind_speed,
    date,

}: IForecastWeather) {
    return (
        <>
            <div>
                <p>Temp in Celcius:  {temperature.toFixed(1)}</p>
                <p>Weather main: {weather_main}</p>
                <p>Weather description: {weather_description}</p>
                <p>Wind speed: {wind_speed}</p>
                <p>Date: {`${(new Date(date)).toLocaleString('default', { month: 'short' })} ${(new Date(date)).getDate()}, ${(new Date(date)).getFullYear()}`}</p>
            </div>
        </>
    )
}