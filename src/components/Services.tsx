
import iconDevelopmentWhiteImage from '../assets/img/icon-development-white.svg';
import iconDevelopmentBlackImage from '../assets/img/icon-development-black.svg';
import iconContentWhiteImage from '../assets/img/icon-content-white.svg';
import iconContentBlackImage from '../assets/img/icon-content-black.svg';
import iconMobileWhiteImage from '../assets/img/icon-mobile-white.svg';
import iconMobileBlackImage from '../assets/img/icon-mobile-black.svg';
import iconEmailWhiteImage from '../assets/img/icon-email-white.svg';
import iconEmailBlackImage from '../assets/img/icon-email-black.svg';
import iconDesignWhiteImage from '../assets/img/icon-design-white.svg';
import iconDesignBlackImage from '../assets/img/icon-design-black.svg';
import iconGraphicsWhiteImage from '../assets/img/icon-graphics-white.svg';
import iconGraphicsBlackImage from '../assets/img/icon-graphics-black.svg';
import Image from "next/image";
import { HomeProps } from '@/pages';

type ServiceType = {
  icon: keyof typeof iconSet,
  title: string,
  description: string,
};

const iconSet = {
  development: {
    black: iconDevelopmentBlackImage,
    white: iconDevelopmentWhiteImage,
  },
  content: {
    black: iconContentBlackImage,
    white: iconContentWhiteImage,
  },
  mobile: {
    black: iconMobileBlackImage,
    white: iconMobileWhiteImage,
  },
  email: {
    black: iconEmailBlackImage,
    white: iconEmailWhiteImage,
  },
  design: {
    black: iconDesignBlackImage,
    white: iconDesignWhiteImage,
  },
  graphics: {
    black: iconGraphicsBlackImage,
    white: iconGraphicsWhiteImage,
  },
};

const Services = ({ data }: { data: HomeProps }) => {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        {data.services.title}
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        {data.services.subTitle}
      </h3>

      <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        {(data.services.services as unknown as Array<ServiceType>).map((service: ServiceType, idx) => {
          return (
            <div key={idx} className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <Image src={iconSet[service.icon].white} alt={`${service.icon} icon`} />
                </div>
                <div className="block group-hover:hidden">
                  <Image src={iconSet[service.icon].black} alt={`${service.icon} icon`} />
                </div>
              </div>
              <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  {service.title}
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;