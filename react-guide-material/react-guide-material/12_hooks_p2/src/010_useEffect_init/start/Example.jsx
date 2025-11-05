import { useEffect, useState } from "react";



const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // クリーンアップ関数：コンポーネントのアンマウント時や依存配列変更時に実行
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>
  <h3>
    <time>{time}</time>
    <span>秒経過 </span>
  </h3>
  </>;
};

export default Example;
