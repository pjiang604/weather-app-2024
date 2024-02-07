interface IHeaderData {
    city: string
}


interface IGeoData {
    name: string;
    lat?: number;
    lon?: number;
}

interface ICurrentWeather {
    temperature: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    wind_speed: number;
    update: number;
    weather_id: number;
    weather_main;
}

interface IForecastWeather {
    temperature: number;
    weather_main: string;
    weather_description: string;
    wind_speed: number;
    date: number;
    time: number;
    weather_id: number;
}


interface ICityData {
    name?: string;
    coord?: {
        lon: number;
        lat: number
    }
    wind: {
        speed: number;
    }
    main: {
        temp: number;
        humidity: number;
        pressure: number;
        feels_like: number;
        temp_max: number;
        temp_min: number;
    }
    dt: number;
    weather: [
        {
            id: number;
            main: string;
        }
    ]
}

interface IForeData {
    city: {
        name: string;
    }
    list: [
        {
            dt: number;
            main: {
                temp: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                    id: number;
                }
            ],
            wind: {
                speed: number;
            },
            dt_txt: number
        }
    ]
}

interface ILat {
    lat: number;
}

interface ILon {
    lon: number;
}

interface IImages {
    url: string;
    weather: string;
}

interface IImageData {
    imgUrl: string;
}