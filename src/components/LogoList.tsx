
import Image from 'next/image';
import logoAmazonImage from '../assets/img/logo-amazon.svg';
import logoAppleImage from '../assets/img/logo-apple.svg';
import logoCocaColaImage from '../assets/img/logo-coca-cola.svg';
import logoNetflixImage from '../assets/img/logo-netflix.svg';
import logoStripeImage from '../assets/img/logo-stripe.svg';

const LogoList = () => {
  return (
    <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                <Image src={logoCocaColaImage} alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
              <span className="m-8 block">
                <Image src={logoAppleImage} alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <Image src={logoNetflixImage} alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <Image src={logoAmazonImage} alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>

              <span className="m-8 block">
                <Image src={logoStripeImage} alt="client logo" className="mx-auto block h-12 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LogoList;
