
import logoOrdioImage from '../assets/img/logo-ordio.png';
import logoDiligentImage from '../assets/img/logo-diligent.png';
import logoRisskovImage from '../assets/img/logo-risskov.png';
import logoWebshippyImage from '../assets/img/logo-webshippy.png';
import logoMannaImage from '../assets/img/logo-manna.png';
import { useState } from 'react';
import Image from 'next/image';
import { TextSourceType } from '@/pages';

type JobType = {
  company: string,
  dates: string,
  position: string,
  description: string,
  logo?: keyof typeof imageSet | null | undefined,
};

const imageSet = {
  ordio: logoOrdioImage,
  diligent: logoDiligentImage,
  risskov: logoRisskovImage,
  webshippy: logoWebshippyImage,
  manna: logoMannaImage,
};

const WorkExperience = ({ data }: { data: TextSourceType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); 

  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        {data.workExperience.title}
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        {data.workExperience.subTitle}
      </h3>
      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-3/4">
        <span className={`left-2/5 absolute inset-y-0 ml-10 ${isOpen ? "mb-24" : "mb-8"} hidden w-0.5 bg-grey-40 md:block`}></span>
        {(data.workExperience.jobs as unknown as Array<JobType>).map((job, idx) => (
          <div key={idx} className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen || idx < 3 ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0 whitespace-pre-wrap h-14">
                    {job.logo ? (
                      <Image src={imageSet[job.logo]} className="w-auto h-full grayscale" alt={job.company} title={job.company} />
                    ) : job.company}
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span
                    className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>
                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">{job.dates}</span>
                      <span className="block pt-2 font-header text-xl font-bold text-primary">
                        {job.position}
                      </span>
                      <div className={`pt-2 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                        <span className="block font-body text-black">
                          {job.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="text-center mt-2 text-grey-40 hover:text-primary cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="uppercase text-xl">{isOpen ? "LESS" : "MORE"}</p>
        <i className={`bx text-5xl bx-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
    </div>
  );
};

export default WorkExperience;