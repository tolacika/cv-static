
import { LangType } from "@/i18n/en";
import { TextSourceType } from "@/pages";

type LangItemProps = {
  lang: LangType,
};


const LangItem = ({ lang }: LangItemProps) => {
  const extra = lang.extra && parseInt(lang.level) < 80;
  const extraWidth = 80 - parseInt(lang.level)
  return (
    <>
      <div className="flex items-end justify-between">
        <h4 className="font-body font-semibold text-lg md:text-xl text-black whitespace-pre-wrap">
          <span className={`fi fi-${lang.icon} mr-2`}></span>
          {lang.message}
        </h4>
        <h3 className="font-body text-lg md:text-2xl font-bold text-primary">{lang.level}%</h3>
      </div>
      <div className="flex mt-2 h-3 w-full rounded-full bg-lila">
        <div
          className={`h-3 rounded-full bg-primary`}
          style={{ width: `${lang.level}%` }}
        ></div>
        {extra && (
          <div className="h-3 rounded-r bg-striped bg-2828 animate-move-stripe" style={{ width: `${extraWidth}%` }}></div>
        )}
      </div>
    </>
  );
};

const LanguageSection = ({ data }: { data: TextSourceType }) => {

  return (
    <div>
      <h3 className="text-left font-header text-2xl font-semibold uppercase mb-4 text-primary pt-10 sm:text-3xl lg:text-4xl">
        {data.langs.title}
      </h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 ">
        {data.langs.items.map((lang, idx) => (
          <div key={idx} className="mb-2">
            <LangItem lang={lang} />
          </div>
        ))}

      </div>
    </div>
  );
};

export default LanguageSection;