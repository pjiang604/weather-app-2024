import { Card, CardContent, CardMedia } from "@mui/material";

export default function ForecastWeather({
    temperature,
    weather_main,
    weather_description,
    wind_speed,
    date,
    time,
    weather_id,
}: IForecastWeather) {

    const newDate = `${new Date(date).toLocaleString('default', { month: 'short' })} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
    const newTime = `${new Date(time).toLocaleString('en-US', { timeStyle: 'short', hour12: true })}`


    return (
        <>
            <Card className={`p-2 rounded-md shadow-grey-shadow
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
                    <h4 className={`text-center`}>{newDate} {newTime}</h4>
                    <p>Temperature:  {temperature.toFixed(1)}°C</p>
                    <p>Weather: {weather_main} ({weather_description})</p>
                    <p>Wind speed: {wind_speed} meters/sec</p>
                </CardContent>


            </Card>
        </>
    )
}