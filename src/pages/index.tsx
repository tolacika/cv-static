import { GetStaticProps } from "next";
import data from "@/data.json"

export type HomeProps = {
  title: string;
  description: string;
  items: { name: string; price: number }[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ...data
    }
  }
}

export default function Home(data: HomeProps) {
  console.log({data});
  return (
    <div>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <ul>
      {data.items?.map((item) => (
        <li key={item.name}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  </div>
  );
}
