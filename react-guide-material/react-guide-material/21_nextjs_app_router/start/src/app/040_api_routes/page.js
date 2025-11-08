"use client";
// POINT API Routesの使い方
import ArticleList from "../../components/articleList";
import ArticleForm from "./components/form";
import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState([]);
  const [debugInfo, setDebugInfo] = useState("");

  // Manual API route test function
  const testAPIRoute = async () => {
    console.log("=== Manual API Route Test ===");
    setDebugInfo("Testing API route...");

    try {
      const response = await fetch("/api/article");
      console.log("API Route Response status:", response.status);
      console.log("API Route Response ok:", response.ok);

      const data = await response.json();
      console.log("API Route Response data:", data);

      if (response.ok && !data.error) {
        setDebugInfo(`API Route Success: ${data.length} articles`);
        setArticles(data);
      } else {
        setDebugInfo(`API Route Error: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("API Route Test Error:", error);
      setDebugInfo(`API Route Exception: ${error.message}`);
    }
  };

  useEffect(() => {
    const getArticles = async () => {
      try {
        // Strategy 1: Direct fetch to JSON server (since this works)
        console.log("Attempting direct fetch to JSON server...");
        const directResponse = await fetch("http://localhost:4030/articles");

        if (directResponse.ok) {
          const directResult = await directResponse.json();
          setArticles(directResult);
          console.log("Direct fetch succeeded:", directResult);
          return; // Success, no need to try API route
        }
      } catch (directError) {
        console.warn("Direct fetch failed:", directError);
      }

      try {
        // Strategy 2: Use Next.js API route as fallback
        console.log("Attempting API route fetch...");
        const ENDPOINT = "/api/article";
        const response = await fetch(ENDPOINT);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.error) {
          throw new Error(result.error);
        }

        setArticles(result);
        console.log("API route fetch succeeded");
      } catch (error) {
        console.error("Both fetch strategies failed:", error);
        setArticles([]);
      }
    };
    getArticles();
  }, []);

  return (
    <>
      <h3>API Routes</h3>
      <div
        style={{ margin: "10px 0", padding: "10px", border: "1px solid #ccc" }}
      >
        <button onClick={testAPIRoute}>🔍 Test API Route</button>
        <p>Debug Info: {debugInfo}</p>
      </div>
      <ArticleForm />

      {articles.length === 0 ? (
        <div>データがありません。</div>
      ) : (
        <>
          <ArticleList basePath="/030_SG_fetch" list={articles} />
        </>
      )}
    </>
  );
}
