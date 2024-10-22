
import { TextSourceType } from "@/pages";
import { ScrollTo } from "./Navbar";

type SocialLinksProps = {
  className?: string,
  scheme?: 'white' | 'primary',
  data: TextSourceType,
  followMe?: boolean,
};

const colorScheme = {
  white: {
    base: 'text-white',
    hover: 'hover:text-yellow'
  },
  primary: {
    base: 'text-primary',
    hover: 'hover:text-yellow'
  }
};

const SocialLinks = ({ className, data, scheme = 'white', followMe = false }: SocialLinksProps) => {
  return (
    <div className={`flex items-center justify-center pt-5 sm:justify-start sm:pt-0 ${className}`}>
      {data.socialLinks.links.filter(({ followable = false }) => followMe ? followable : true)
        .map(({ icon, link = null, scrollTo = null, target = "_blank" }, idx) => {
          return link ? (
            <a href={link} target={target} key={idx} className={`px-2 ${colorScheme[scheme].base} ${colorScheme[scheme].hover}`}>
              <i className={`bx ${icon} text-2xl `}></i>
            </a>
          ) : (
            <span key={idx} onClick={() => ScrollTo(scrollTo!)} className={`cursor-pointer px-2 ${colorScheme[scheme].base} ${colorScheme[scheme].hover}`}>
              <i className={`bx ${icon} text-2xl `}></i>
            </span>
          );
        })}
    </div>
  );
};

export default SocialLinks;
