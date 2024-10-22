import { TextSourceType } from '@/pages';
import bgCtaImage from '../assets/img/bg-cta.jpg';
import LetsConnect from './LetsConnect';

const FollowMe = ({data}: {data: TextSourceType}) => {
  return (
    <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
      style={{ backgroundImage: `url(${bgCtaImage.src})` }}>
      <div className="container relative z-30">
        <h3
          className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl whitespace-pre-wrap">
          {data.followMe.title}
        </h3>
        <div className='pt-6 text-center'>
          <LetsConnect data={data} className='pt-6' followMe={true} />
        </div>
      </div>
    </div>
  );
}

export default FollowMe;