import { ENDPOINT } from "@/constants.js";
import Client from "./components/ClientPage.jsx";
import ArticleList from "@/components/articleList";

//http://localhost:4020/010_SSR/1
 async function SSR() {
  const article = await fetch(ENDPOINT, { next: { revalidate: 10 } }).then((res) => res.json());
  return (
    <>
      
      <Client />
      <div>SSRのページです</div>
      <ArticleList list={article} basePath={'/010_SSR'} />
    </>
  );
}
export default SSR;
