import { GetStaticProps } from "next";
import { data as source } from "@/i18n/en"
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export type HomeProps = typeof source;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...source
    }
  }
}

export default function Home(data: HomeProps) {
  return (
    <>
      <Navbar data={data} />

      <Content data={data} />

      <Footer data={data} />
    </>
  );
}
