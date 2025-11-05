import { servicesData } from '@/data/services';
import ServiceCard from '@/components/card/ServiceCard';

function HeroService() {
  return (
    <div className="w-full min-h-screen relative py-[130px]">

      <div
        className="flex px-3 mx-auto gap-x-4 gap-y-5 justify-between"
        style={{
          width: 'calc(100vw - clamp(0px, calc((100vw - 1600px) * 0.9888), 310px))'
        }}
      >
        <div>
          <h1 className="text-4xl lg:text-7xl font-bold">
            What is our <br />service
          </h1>
        </div>

        <div className="w-full xl:w-1/2 2xl:w-1/2">
          <div className="grid grid-cols-2 gap-20">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroService;