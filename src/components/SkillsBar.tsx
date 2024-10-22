
import { TextSourceType } from "@/pages";

type SkillType = {
  name: string,
  level: string,
  extra?: boolean,
};

const SkillsBar = ({ data }: { data: TextSourceType }) => {
  return (
    <>
      {(data.intro.skills as unknown as Array<SkillType>).map((skill, idx) => {
        const extra = skill.extra && parseInt(skill.level) < 80;
        const extraWidth = 80 - parseInt(skill.level)
        return (
        <div key={idx} className={idx > 0 ? "pt-6" : ""}>
          <div className="flex items-end justify-between">
            <h4 className="font-body font-semibold uppercase text-black whitespace-pre-wrap">
              {skill.name}
            </h4>
            <h3 className="font-body text-3xl font-bold text-primary">{skill.level}%</h3>
          </div>
          <div className="flex mt-2 h-3 w-full rounded-full bg-lila">
            <div
              className={`h-3 ${extra ? "rounded-l" : "rounded-full"}  bg-primary`}
              style={{ width: `${skill.level}%` }}
            ></div>
            {extra && (
              <div className="h-3 rounded-r bg-striped bg-2828" style={{ width: `${extraWidth}%` }}></div>
            )}
          </div>
        </div>
      )})}
    </>
  );
};

export default SkillsBar;