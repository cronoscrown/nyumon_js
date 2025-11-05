import { useEffect, useState, useLayoutEffect } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer/>}
      <button onClick={() => setIsDisp(prev => !prev)}>非表示</button>
    </>
  )
}

const Timer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(( ) => {
    console.log('init');
    let intervalId = null;
    intervalId = window.setInterval(() => {
      // console.log('interval running');
      if (running) {
        setTime(prev => prev + 1);
      }

    }, 1000);
    return () => {
      window.clearInterval(intervalId)
      console.log('end');
    }
  }, [running])
  
  useEffect(() => {
    console.log('updated');

    if (running) {
      document.title = 'counter:' + time;
      window.localStorage.setItem('time-key', time);
    }

    return () => {
      // debugger
      console.log('updated end');
    }
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if(!isNaN(_time) ) {
      setTime(_time);
    }
  }, [])

  return (
    <>
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
    <div>
      <button onClick={
        ()=>{
          setRunning(prev => !prev);
        }
      }>{running?'一時停止':'スタート'}</button>
      <button onClick={() => {
        setTime(0);
        setRunning(false);
      }}>リセット</button>
    </div>
    </>
    );
};

export default Example;
