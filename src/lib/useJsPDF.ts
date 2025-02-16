import JsPDF, {jsPDFOptions} from 'jspdf';
import {authorImage} from "@/lib/blog-author";

export type GenerateFormData = {
  title: string;
  position: string;
  company: string;
};

const pdfOptions: jsPDFOptions = {
  orientation: 'p',
  unit: 'pt',
  format: 'a4',
  compress: true,
  putOnlyUsedFonts: true,
}

const margin = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 20,
};

const imageWidth = 120;

const createPdf = () => {
  const doc = new JsPDF(pdfOptions);

  doc.setFillColor(229, 227, 243)
  doc.rect(0, 0, doc.internal.pageSize.width, margin.top * 2 + imageWidth, 'F');

  doc.addImage(authorImage, 'PNG', margin.left, margin.top, imageWidth, imageWidth);

  return doc;
}

const useJsPDF = () => {
  const generateCoverLetter = (formData: GenerateFormData) => {
    const doc = createPdf();
    doc.text(`Title: ${formData.title}`, 10, 110);
    doc.text(`Position: ${formData.position}`, 10, 120);
    doc.text(`Company: ${formData.company}`, 10, 130);
    doc.text("This is the content of the cover letter.", 10, 140);
    doc.save('cover_letter.pdf');
  };

  const generateCV = (formData: GenerateFormData) => {
    const doc = createPdf();
    doc.text(`Position: ${formData.position}`, 10, 10);
    doc.text("This is the content of the CV.", 10, 20);
    doc.save('cv.pdf');
  };

  return {
    generateCV,
    generateCoverLetter,
  };
}

export default useJsPDF;