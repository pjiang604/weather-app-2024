
interface IGeoData {
    name: string;
    lat?: number;
    lon?: number;
}


interface ICityData {
    name: string;
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

}

interface IForeData {
    city: {
        name: string;
    }
    list: [
        {
            main: {
                temp: number;
            },
            weather: [
                {
                    main: string;
                    description: string;
                }
            ],
            wind: {
                speed: number;
            },
            dt_txt: any
        }
    ]
}

interface ILat {
    lat: number;
}

interface ILon {
    lon: number;
}