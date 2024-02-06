

export default function CurrentWeather({
    temperature,
    feels_like,
    humidity,
    pressure,
    temp_max,
    temp_min,
    wind_speed,
}: ICurrentWeather) {

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return (
        <>
            <div>
                <h3>{`${month}/${date}/${year}`}</h3>
                <p>Last updated: !Can't find!</p>
                <p>Temp in Celcius:  {temperature}</p>
                <p>Feels Like: {feels_like}</p>
                <p>Humidity: {humidity}</p>
                <p>Pressure: {pressure}</p>
                <p>Maximum temperature: {temp_max}</p>
                <p>Minimum temperature: {temp_min}</p>
                <p>Wind speed: {wind_speed}</p>
            </div>
        </>
    )
}