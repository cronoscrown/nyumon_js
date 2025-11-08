import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}

export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then((res) => res.json());

  return data.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );

  return {
    title: article.title,
    description: article.text,
  };
}
