import { Icon } from '@iconify/react';

const WeatherApiPage = () => {

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
              type="text"
              placeholder='Search your city...'
              className='rounded-md outline-none h-full'
            />
            <Icon 
              icon="ic:outline-search"
              className='w-6 cursor-pointer h-full'
            />
          </div>

        </div>

        {/* result */}
        <div>
          <div
            className='flex flex-col items-start justify-between w-[288px] h-[157.8px] outline-3 shadow-[6px_8px_0px_0_#2B2B23] rounded-md'
          >
            <div
              className='flex flex-row w-full items-center justify-between'
            >
              <span>City</span>
              <span>:</span>
              <span>bandung</span>
            </div>
            <div
              className='flex flex-row w-full items-center justify-between'
            >
              <span>Weather</span>
              <span>:</span>
              <span>bandung</span>
            </div>
            <div
              className='flex flex-row w-full items-center justify-between'
            >
              <span>Temp</span>
              <span>:</span>
              <span>bandung</span>
            </div>
            <div
              className='flex flex-row w-full items-center justify-between'
            >
              <span>Humidity</span>
              <span>:</span>
              <span>bandung</span>
            </div>
            <div
              className='flex flex-row w-full items-center justify-between'
            >
              <span>Wind</span>
              <span>:</span>
              <span>bandung</span>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default WeatherApiPage;