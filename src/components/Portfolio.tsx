
import portfolioAppleImage from '@/assets/img/portfolio-apple.jpeg';
import portfolioStripeImage from '@/assets/img/portfolio-stripe.jpeg';
import portfolioFedexImage from '@/assets/img/portfolio-fedex.jpeg';
import portfolioMicrosoftImage from '@/assets/img/portfolio-microsoft.jpeg';
import Image from 'next/image';
import { TextSourceType } from '@/pages';

const Portfolio = ({ data }: { data: TextSourceType }) => {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        {data.portfolio.title}
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        {data.portfolio.subTitle}
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        <a href="#" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image src={portfolioAppleImage} className="w-full shadow" alt="portfolio" />
        </a>
        <a href="#" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image src={portfolioStripeImage} className="w-full shadow" alt="portfolio" />
        </a>
        <a href="#" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image src={portfolioFedexImage} className="w-full shadow" alt="portfolio" />
        </a>
        <a href="#" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
          <Image src={portfolioMicrosoftImage} className="w-full shadow" alt="portfolio" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
