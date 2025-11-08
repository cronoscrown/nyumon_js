// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route

import { ENDPOINT } from "@/constants";

// Simple API Route for testing
export async function GET() {
  console.log("Simple API Route called");

  return new Response(
    JSON.stringify([
      {
        id: "1",
        title: "Test Article",
        text: "Test content",
        date: "2025-11-08",
      },
    ]),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request) {
  console.log("=== API Route POST called ===");

  try {
    const formData = await request.formData();
    const id = formData.get("id");
    const title = formData.get("title");

    if (!id || !title) {
      throw new Error("IDとタイトルは必須です。");
    }

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title }),
    });

    const data = await res.json();

    console.log("POST data:", { id, title });

    // Return success response
    return Response.json(data);
  } catch (error) {
    console.error("POST Error:", error);
    return Response.json({ error: "登録に失敗しました。" }, { status: 500 });
  }
}
