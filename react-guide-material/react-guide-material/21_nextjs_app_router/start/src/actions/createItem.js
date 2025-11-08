"use server";
import { ENDPOINT } from "@/constants";
import { revalidatePath } from "next/cache";

export async function createItem(formData) {
  const id = formData.get("id");
  const title = formData.get("title");

  console.log("=== Server Action Called ===");
  console.log("Form data:", { id, title });
  console.log("Endpoint:", ENDPOINT);

  if (!id || !title) {
    console.log("Validation failed: ID or title missing");
    return { error: "IDとタイトルは必須です。" };
  }

  try {
    // 新しい記事オブジェクトを作成（date フィールドを追加）
    const newArticle = {
      id: id.toString(),
      title,
      text: "Server Actions で作成された記事です。",
      date: new Date().toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'short', 
        day: 'numeric'
      })
    };

    console.log("Sending POST request with:", newArticle);

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticle),
    });

    console.log("Response status:", res.status);
    console.log("Response ok:", res.ok);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("POST successful, response:", data);

    // キャッシュを更新
    revalidatePath('/050_actions');
    
    return { success: true, data };
  } catch (error) {
    console.error("=== Server Action Error ===");
    console.error("Error:", error.message);
    return { error: `登録に失敗しました: ${error.message}` };
  }
}
