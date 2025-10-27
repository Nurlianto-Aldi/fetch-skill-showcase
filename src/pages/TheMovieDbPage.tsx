import { Icon } from '@iconify/react'

const TheMovieDbPage = () => {

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
            <h2>The Movie DB</h2>
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
            <span className='text-[12px]'>https://www.themoviedb.org/</span>
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
        className='flex flex-col items-center justify-center gap-[19.2px] pt-30'
      >

      <h1
        className='font-bold text-4xl font-roboto-mono'
      >501 Not Implemented</h1>
      <p
        className='text-xl font-roboto'
      >Sorry, this page is still in development.</p>

      </div>
    </div>
  )
}

export default TheMovieDbPage;