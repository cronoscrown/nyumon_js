"use client";

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [state, setState] = useState();

  useEffect(() => {
    setState("ロード");
  }, []);

  return <div>クライアントサイドの状態: {state}</div>;
}