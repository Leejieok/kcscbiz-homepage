import type { ServiceData } from '@/data/services';

interface ServiceCardProps {
  service: ServiceData;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="fade-anim"
      data-delay={service.delay}
      data-direction="right"
    >
      <div className="bg-white px-8 duration-300 border-l border-black h-full">
        <div className="flex flex-col gap-6 justify-between h-full">
          {/* Icon */}
          <div className="w-16 h-16">
            <img
              src={service.icon}
              alt={`${service.title}-icon`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-14">
              <h5 className="text-3xl font-bold text-gray-900">
                {service.title}
              </h5>
              <p className="text-xl leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Link Button */}
            <a
              href={service.linkUrl}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group"
            >
              {service.linkText}
              <span className="inline-flex items-center">
                <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
