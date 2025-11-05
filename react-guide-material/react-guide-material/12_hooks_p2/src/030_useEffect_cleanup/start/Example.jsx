import { useEffect, useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    const intervalId = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    
    // ✅ クリーンアップ関数を追加
    return () => {
      console.log('タイマーをクリーンアップします');
      clearInterval(intervalId);
    };
  }, [])
  
  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time)
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    );
};

export default Example;
