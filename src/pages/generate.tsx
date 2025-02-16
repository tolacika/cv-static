import {NextPage} from 'next';
import Head from 'next/head';
import {useState} from 'react';
import useJsPDF, {GenerateFormData} from "@/lib/useJsPDF";

const Generate: NextPage = () => {
  const [formData, setFormData] = useState<GenerateFormData>({
    title: 'Dear Sir or Madam,',
    position: 'Software Engineer',
    company: ' GmbH'
  });

  const {generateCV, generateCoverLetter} = useJsPDF();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const handleCoverLetterClick = () => {
    generateCoverLetter(formData);
  };

  const handleCVClick = () => {
    generateCV(formData);
  }

  return (
    <>
      <Head>
        <title>Generate Page</title>
        <meta name="description" content="This is the generate page"/>
      </Head>
      <div className="bg-grey-50 py-8" id="about">
        <div className="container-fluid md:container">
          <h1 className="text-2xl mb-4">
            Generate CV and Cover letter
          </h1>
          <div>
            <div>
              <label htmlFor="title" className="block">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-96 mb-4"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <label htmlFor="position" className="block">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-96 mb-4"
                />
              </div>
              <div>
                <label htmlFor="company" className="block">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-96 mb-4"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleCoverLetterClick}
                type="button"
                className="bg-primary text-white px-4 py-2 font-bold w-96"
              >Generate Cover Letter (PDF)
              </button>
              <button
                onClick={handleCVClick}
                type="button"
                className="bg-primary text-white px-4 py-2 font-bold w-96"
              >Generate CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generate;