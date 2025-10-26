import { Icon } from '@iconify/react';

const Header = () => {


  return (
    <div
      className="sticky top-0 flex flex-col items-start justify-start bg-[#FAECB6] p-[45px] h-screen w-[355px] shadow-xl text-left text-[#2B2B23] gap-[22.5px]"
    >
      <h1
        className="text-[38.4px] font-semibold tracking-widest leading-[41px] font-roboto-mono"
      >
        FETCHING <br /> SKILL <br /> SHOWCASE
      </h1>
      <p
        className="text-[21.6px] tracking-[0.15em] font-roboto font-light"
      >
        Beyond coding visual designs, a key part of my job is data fetching: retrieving information from databases and presenting it to the user. I built this project to demonstrate my skill in fetching data from multiple external APIs, proving I can handle different structures.
      </p>
      <div
        className='mt-auto flex flex-row items-center justify-start gap-x-6'
      >
        <a href="https://nurlianto-aldi.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon
            icon="mdi:web"
            className="w-8 h-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/nurlianto-aldi/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon
            icon="mdi:linkedin"
            className="w-8 h-8"
          />
        </a>
        <a href="https://github.com/Nurlianto-Aldi" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
          <Icon
            icon="mdi:github"
            className="w-8 h-8"
          />
        </a>
      </div>
    </div>
  )
}  

export default Header;