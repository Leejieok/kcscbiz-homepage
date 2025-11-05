function HeroService() {
  return (
    <div className="w-full h-screen overflow-hidden relative">

      <div 
        className="absolute inset-0 flex px-3 mx-auto gap-x-4 gap-y-5 justify-between"
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            What is our <br />service
          </h1>
        </div>

        <div className="w-full xl:w-1/2 2xl:w-1/2">
          <div className="flex flex-wrap gap-[114px]">
            여기
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroService;