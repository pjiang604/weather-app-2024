import { Card, CardContent, CardMedia } from "@mui/material";

export default function CurrentWeather({
    temperature,
    feels_like,
    humidity,
    pressure,
    temp_max,
    temp_min,
    wind_speed,
    update,
    weather_id,
    weather_main,
}: ICurrentWeather) {

    const today = new Date();
    const month = (today.toLocaleString('default', { month: 'short' }));
    const year = today.getFullYear();
    const date = today.getDate();
    const newDate = `${month} ${date}, ${year}`

    const time = today.toLocaleTimeString()
    const newTime = `${time}`

    const updated = new Date(update * 1000)
    const updatedMonth = `${updated.toLocaleString('default', { month: 'short' })}`
    const updatedDay = `${updated.getDate()}`
    const updatedYear = `${updated.getFullYear()}`
    const updatedTime = `${updated.toLocaleTimeString('en-US', { timeStyle: 'short', hour12: true })}`
    const newUpdate = `${updatedMonth} ${updatedDay}, ${updatedYear} ${updatedTime}`
    console.log(weather_id)

    return (
        <>
            <Card className={`flex flex-col gap-2 p-2 rounded-md shadow-grey-shadow
            ${weather_id >= 200 && weather_id < 300 ? `bg-violet-300` : //Thunderstorm
                    weather_id >= 300 && weather_id < 600 ? `bg-violet-100` : //Drizzle and Rain
                        weather_id >= 600 && weather_id < 700 ? `bg-violet-200` : //Snow
                            weather_id > 700 && weather_id < 800 ? `bg-violet-400 text-white` : //Atmosphere
                                weather_id > 800 ? `bg-lightGrey` : `bg-white` //Clouds : Clear
                }
        `}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={`/images/${weather_main}.png`}
                    title="placeholder" />
                <CardContent>
                    <div>
                        <h4 className={`text-center`}>{newDate} at {newTime}</h4>
                    </div>
                    <div>
                        <p>Current Temperature:  {temperature}°C</p>
                        <p>Feels Like: {feels_like}°C</p>
                        <p>A temperature high of: {temp_max}°C</p>
                        <p>A temperature low of: {temp_min}°C</p>
                    </div>
                    <div>
                        <p>Humidity: {humidity}%</p>
                        <p>Pressure: {pressure} hPa</p>
                        <p>Wind speed: {wind_speed} meters/sec</p>
                    </div>
                    <p>Last updated: {newUpdate}</p>

                </CardContent>



            </Card >
        </>
    )
}