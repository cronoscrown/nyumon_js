import { ENDPOINT } from "@/constants.js";
import Client from "../components/ClientPage.jsx";
import Article from "@/components/article";

export async function generateStaticParams() {
  try {
    const articles = await fetch(ENDPOINT).then((res) => res.json());
    
    return articles.map((article) => ({
      id: article.id.toString(),
    }));
  } catch (error) {
    // 開発時やfetchエラーの場合は、デフォルトのパラメータを返す
    console.warn('Failed to fetch articles for generateStaticParams:', error);
    return [
      { id: '1' },
      { id: '2' },
      { id: '3' },
    ];
  }
}

//http://localhost:4020/010_SSR/1
 async function SSR({params}) {
  console.log('Params:', params);
  
  try {
    const article = await fetch(`${ENDPOINT}/${params.id}`, { 
      next: { revalidate: 10 } 
    }).then((res) => res.json());
    
    console.log('Fetched article:', article);
    
    return (
      <>
        <div>SSRのページです</div>
        {/* <Client /> */}
        <Article data={article} />
      </>
    );
  } catch (error) {
    console.error('Failed to fetch article:', error);
    return (
      <>
        <div>SSRのページです</div>
        <div>記事の取得に失敗しました。</div>
      </>
    );
  }
}
export default SSR;
