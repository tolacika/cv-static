import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import jsPDF from 'jspdf';

const Generate: NextPage = () => {
  const [formData, setFormData] = useState({
    title: 'Dear Mrs or Mr,',
    position: 'Software Engineer',
    company: ' GmbH'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const generateCoverLetter = () => {
    const doc = new jsPDF();
    doc.text(`Title: ${formData.title}`, 10, 10);
    doc.text(`Position: ${formData.position}`, 10, 20);
    doc.text(`Company: ${formData.company}`, 10, 30);
    doc.text("This is the content of the cover letter.", 10, 40);
    doc.save('cover_letter.pdf');
  };

  const generateCV = () => {
    const doc = new jsPDF();
    doc.text(`Position: ${formData.position}`, 10, 10);
    doc.text("This is the content of the CV.", 10, 20);
    doc.save('cv.pdf');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateCoverLetter();
    generateCV();
  };

  return (
    <>
      <Head>
        <title>Generate Page</title>
        <meta name="description" content="This is the generate page" />
      </Head>
      <div>
        <h1>Generate Page</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Generate;