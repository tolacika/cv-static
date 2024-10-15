
import { HomeProps } from "@/pages";

type SocialLinksProps = {
  className?: string,
  scheme?: 'white' | 'primary',
  data: HomeProps,
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

const SocialLinks = ({ className, scheme = 'white', data }: SocialLinksProps) => {
  return (
    <div className={`flex items-center justify-center pt-5 sm:justify-start sm:pt-0 ${className}`}>
      {data.socialLinks.links.map(({ icon, link, target = "_blank" }, idx) => {
        return (
          <a href={link} target={target} key={idx} className={idx > 0 ? "pl-4" : ""}>
            <i className={`bx ${icon} text-2xl ${colorScheme[scheme].base} ${colorScheme[scheme].hover}`}></i>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
