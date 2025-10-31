import { useState,useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  return (
    <div>
      <h3>ユースケース1</h3>
      <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={()=>inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>

    </div>
  );
};

const Case2 = () => {
  const [player, setPlayer] = useState(false);
  const playRef = useRef(null);
 
  return (
    <>
      <div>
      <h3>ユースケース2</h3>
      <video  ref={playRef}  width="320" height="240" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      
      <button onClick={()=>{
        if(!player){
          playRef.current.play();
          setPlayer(true);
        }else{
          playRef.current.pause();
          setPlayer(false);
        }
      }}>
        {player ? "停止する" : "再生する"}
      </button>
    
    </div>
    </>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
      <Case2 />
    </>
  );
};

export default Example;
