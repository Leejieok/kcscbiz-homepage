import heroImg from '@/assets/images/hero.png';

function Home() {

  return (
    <div className="w-full">
      <div className="w-full h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Home;