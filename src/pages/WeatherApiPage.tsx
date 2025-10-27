import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react';
import { type ChangeEvent } from 'react';

interface WeatherData {
  description: string;
}

interface MainData {
  temp: number;
  humidity: number;
}

interface WindData {
  speed: number;
}

interface WeatherAPIResponse {
  name: string;
  weather: WeatherData[];
  main: MainData;
  wind: WindData;
}

interface DisplayDataProps {
  city: string;
  weather: string;
  temp: string;
  humidity: string;
  wind: string;
}

const initialDisplayData: DisplayDataProps = {
  city: "N/A",
  weather: "N/A",
  temp: "N/A",
  humidity: "N/A",
  wind: "N/A",
}

const fetchData = async (cityLocation: string): Promise<WeatherAPIResponse | null> => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityLocation}&appid=309e4cead8d73a5a292404e24cb66e10`)
    if(!response.ok) {
      throw new Error("Error from the response")
    }

    const data = response.json();
    return data

  } catch (error) {
    console.error(`There's an error with the fetch operation : ${error}`)
    return null;
  }
}

const WeatherApiPage = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");
  const [weatherLocation, setWeatherLocation] = useState<DisplayDataProps>(initialDisplayData);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }

  const handleSearch = () => {
    if(inputValue.trim() !== "") {
      setSearchCity(inputValue);
      console.log(searchCity)
    }
  }

  

  useEffect(() => {
    if(!searchCity) {
      return
    }

    const loadWeather = async () => {
      setWeatherLocation(initialDisplayData);

      const data = await fetchData(searchCity);

      if(data) {
        const newDisplayData: DisplayDataProps = {
          city: `${data.name}`,
          weather: `${data.weather[0].description}`,
          temp: `${(data.main.temp - 273.15).toFixed(1)} °C`,
          humidity: `${data.main.humidity} %`,
          wind: `${data.wind.speed} m/s`,
        }
        setWeatherLocation(newDisplayData)
      } else {
        setWeatherLocation({...initialDisplayData, city: "City Not Found"})
      }
    }
    loadWeather();
  }, [searchCity])

  return (
    <div
      className="w-[960px] h-[640px] bg-[#FAECB6] rounded-md outline-3 shadow-[10px_12px_0px_0_#2B2B23]"
    >

      {/* header tab */}
      <div
        className="flex flex-row items-center justify-between w-[960px] h-[37.8px] bg-[#FAECB6] rounded-t-md outline-3 font-bold"
      >

        {/* windows tab */}
        <div>
          <div
            className="flex flex-row items-center justify-center gap-5 px-3 h-[37.8px] outline-3 font-bold rounded-tl-md bg-[#F96635]"
          >
            <h2>Weather API</h2>
            <span>+</span>
          </div>
        </div>

        {/* button tab */}
        <div
          className="flex flex-row gap-2 mr-3"
        >
          <span>-</span>
          <span>☐</span>
          <span>x</span>
        </div>
      </div>

      {/* url box */}
      <div
        className="flex flex-row items-center justify-between w-[960px] h-[37.8px] bg-[#F96635] py-2 px-3"
      >
        <div
          className='flex flex-row gap-5'
        >
          <Icon
            icon="ic:baseline-arrow-back"
            className="w-full h-full"
          />
          <Icon
            icon="ic:baseline-arrow-forward"
            className="w-full h-full"
          />
        </div>
        <div
          className='w-full h-full mx-3'
        >
          <div
            className="flex items-center justify-start bg-white w-full h-full rounded-4xl px-2 outline-3"
          >
            <span className='text-[12px]'>https://openweathermap.org/api</span>
          </div>

        </div>
        <div
          className=''
        >
          <Icon
            icon="ic:baseline-star"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* body window */}
      <div
        className='flex flex-col items-center justify-center gap-[19.2px]'
      >

        {/* title */}
        <div>
          <span>Weather API</span>
        </div>

        {/* search box */}
        <div
          className='flex flex-row rounded-md outline-3 shadow-[6px_8px_0px_0_#2B2B23]'
        >
          <div
            className='flex flex-row items-center justify-center px-2 h-9 w-[216px] '
          >
            <input
              onChange={handleInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              value={inputValue}
              type="text"
              placeholder='Search your city...'
              className='rounded-md outline-none h-full'
            />
            <Icon 
              onClick={handleSearch}
              icon="ic:outline-search"
              className='w-6 cursor-pointer h-full'
            />
          </div>

        </div>

        {/* result */}
        <div>
          <div
            className='flex flex-row justify-between w-[400px] h-[157.8px] outline-3 shadow-[6px_8px_0px_0_#2B2B23] rounded-md p-6 font-roboto-mono'
          >
            <div
              className='flex flex-col flex-1 w-full items-start justify-between font-bold'
            >
              <span>City</span>
              <span>Temp</span>
              <span>Weather</span>
              <span>Humidity</span>
              <span>Wind</span>
            </div>
            <div
              className='flex flex-col flex-1 pl-4 w-full items-start justify-between'
            >
              <span>:</span>
              <span>:</span>
              <span>:</span>
              <span>:</span>
              <span>:</span>
            </div>
            <div
              className='flex flex-col grow pl-4 w-full items-start justify-between'
            >
              <span>{weatherLocation.city}</span>
              <span>{weatherLocation.temp}</span>
              <span>{weatherLocation.weather}</span>
              <span>{weatherLocation.humidity}</span>
              <span>{weatherLocation.wind}</span>
            </div>
            
          </div>
        </div>




      </div>
    </div>
  )
}

export default WeatherApiPage;