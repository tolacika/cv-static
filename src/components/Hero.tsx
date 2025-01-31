
import Image from 'next/image';
import bgHeroImage from '../assets/img/bg-hero.jpg';
import blogAuthorImage from '../assets/img/blog-author.jpg';
import LetsConnect from './LetsConnect';
import { TextSourceType } from '@/pages';


const Hero = ({ data, print = false }: { data: TextSourceType, print: boolean }) => {
  console.log(bgHeroImage);
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-8"
      style={print ? {} : { backgroundImage: `url(${bgHeroImage.src})` }}>
      <div
        className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
      </div>

      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <Image src={blogAuthorImage} className="rounded-full max-w-48 md:max-w-64" alt="author" />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl whitespace-pre-wrap text-white sm:text-left sm:text-5xl xl:text-6xl">
              {data.hero?.title}
            </h1>
            <LetsConnect data={data} className='pt-3 lg:justify-start' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;