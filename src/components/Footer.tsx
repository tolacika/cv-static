
import { TextSourceType } from "@/pages";
import SocialLinks from "./SocialLinks";

const Footer = ({ data }: { data: TextSourceType }) => {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2024. All right reserved.
        </p>
        <SocialLinks data={data} />
      </div>
    </div>
  );
};

export default Footer;