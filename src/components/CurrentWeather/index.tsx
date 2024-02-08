import { Card, CardContent, CardMedia } from "@mui/material";
import styles from './currentWeather.module.css'

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
            <Card className={`flex flex-col gap-2 p-2 rounded-md shadow-grey-shadow w-full
            ${weather_id >= 200 && weather_id < 300 ? `bg-violet-300` : //Thunderstorm
                    weather_id >= 300 && weather_id < 600 ? `bg-violet-100` : //Drizzle and Rain
                        weather_id >= 600 && weather_id < 700 ? `bg-violet-200` : //Snow
                            weather_id > 700 && weather_id < 800 ? `bg-violet-400 text-white` : //Atmosphere
                                weather_id > 800 ? `bg-lightGrey` : `bg-white` //Clouds : Clear
                } lg:w-half`}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={`/images/${weather_main}.png`}
                    title="placeholder" />
                <CardContent>

                    <div>
                        <h4 className={`text-center`}>{newDate} at {newTime}</h4>
                    </div>
                    <div>
                        <h1 className={`text-center my-4`}>{temperature}°C</h1>
                        <div className={styles.infoContainer}>
                            <div className={styles.infoCard}>
                                <p>High</p>
                                <p>{temp_max}°C</p>
                            </div>
                            <div className={styles.infoCard}>
                                <p>Low</p>
                                <p>{temp_min}°C</p>
                            </div>
                            <div className={styles.infoCard}>
                                <p>Feels Like</p>
                                <p>{feels_like}°C</p>
                            </div>
                            <div className={styles.infoCard}>
                                <p>Humidity</p>
                                <p>{humidity}%</p>
                            </div>
                            <div className={styles.infoCard}>
                                <p>Pressure</p>
                                <p>{pressure} hPa</p>
                            </div>

                        </div>
                        <div className={styles.windCard}>
                                <p>Wind</p>
                                <p>{wind_speed} meters/sec</p>
                            </div>
                    </div>
                    <p className={styles.updatedCard}>Updated: {newUpdate}</p>
                </CardContent>
            </Card >
        </>
    )
}