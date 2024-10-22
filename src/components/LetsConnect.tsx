
import { TextSourceType } from "@/pages";
import SocialLinks from "./SocialLinks";

type LetsConnectProps = {
  className?: string,
  scheme?: 'white' | 'primary',
  followMe?: boolean,
  data: TextSourceType,
};

const colorScheme = {
  white: {
    title: 'text-white',
    arrow: 'text-yellow',
  },
  primary: {
    title: 'text-grey-2',
    arrow: 'text-primary',
  },
};

const LetsConnect = ({className, data, scheme = 'white', followMe = false}: LetsConnectProps) => {
  return (
    <div className={`flex flex-col justify-center sm:flex-row sm:pt-5 ${className}`}>
      <div className="flex items-center justify-center pl-0 sm:justify-start">
        <p className={`font-body text-lg uppercase ${colorScheme[scheme].title}`}>
          {followMe ? data.socialLinks.followText : data.socialLinks.actionText}
        </p>
        <div className="hidden sm:block">
          <i className={`bx bx-chevron-right text-3xl ${colorScheme[scheme].arrow}`}></i>
        </div>
      </div>
      <SocialLinks data={data} className='pl-2' scheme={scheme} followMe={followMe} />
    </div>
  );
};

export default LetsConnect;