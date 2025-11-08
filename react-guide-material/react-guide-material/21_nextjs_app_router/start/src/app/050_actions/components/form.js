"use client";

import { createItem } from "@/actions/createItem";
import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState(""); // 空文字列で初期化
  const [newTitle, setNewTitle] = useState(""); // 空文字列で初期化
  const [message, setMessage] = useState(""); // フィードバックメッセージ
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("送信中...");

    try {
      const formData = new FormData();
      formData.append("id", newId);
      formData.append("title", newTitle);

      console.log("Submitting form data:", { id: newId, title: newTitle });

      // Server Action を実行
      const result = await createItem(formData);

      console.log("Form submit result:", result);

      if (result?.error) {
        setMessage(`❌ エラー: ${result.error}`);
      } else if (result?.success) {
        setMessage("✅ 記事が正常に追加されました！");
        // フォームをクリア
        setNewId("");
        setNewTitle("");
      } else {
        setMessage("⚠ 不明な結果が返されました");
        console.log("Unexpected result:", result);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage(`❌ 送信エラー: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          {" "}
          Id:
          <input
            type="number"
            name="id"
            value={newId}
            onChange={(e) => setNewId(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input
            name="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </label>
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "送信"}
      </button>
      <div
        style={{
          color: message.includes("❌")
            ? "red"
            : message.includes("✅")
            ? "green"
            : "orange",
          marginTop: "10px",
          fontWeight: "bold",
        }}
      >
        {message}
      </div>
    </form>
  );
}
