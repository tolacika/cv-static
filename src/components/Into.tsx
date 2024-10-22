
import LetsConnect from "./LetsConnect";
import SkillsBar from "./SkillsBar";
import LanguageSection from "./LanguageSection";
import { TextSourceType } from "@/pages";

const Intro = ({ data }: { data: TextSourceType }) => {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container-fluid md:container">
        <div className="mx-6 md:mx-0 flex flex-col items-center py-8 md:py-12 lg:py-20 lg:flex-row">
          <div className="w-full text-center md:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              {data.intro.title}
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              {data.intro.subTitle}
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
              {data.intro.paragraph}
            </p>
            <LetsConnect data={data} className="pt-6 lg:justify-start" scheme="primary" />

            <LanguageSection data={data} />
          </div>

          <div className="w-full pl-0 pt-10 md:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <SkillsBar data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;