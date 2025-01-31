//import mapImage from '../assets/img/map.png';
import Hero from './Hero';
import Intro from './Into';
import Services from './Services';
//import Portfolio from './Portfolio';
//import LogoList from './LogoList';
import WorkExperience from './WorkExperience';
import { TextSourceType } from '@/pages';
import ContactDetails from './ContactDetails';
import FollowMe from './FollowMe';
//import BlogTeaser from './BlogTeaser';
//import Statistics from './Statistics';

const Content = ({ data, print = false }: { data: TextSourceType, print: boolean }) => {

  return (
    <div>
      <Hero data={data} print={print} />

      <Intro data={data} />

      <WorkExperience data={data} />

      {/*<LogoList />*/}

      <Services data={data} />

      {/*<Portfolio data={data} />*/}

      {/*<Statistics />*/}
      {/*<BlogTeaser />*/}

      <ContactDetails data={data} />

      {/*<div id="map" className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
        style={{ backgroundImage: `url(${mapImage.src})` }}></div>*/}

      <FollowMe data={data} />
    </div>
  );
};

export default Content;