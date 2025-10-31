import { useState, useRef, forwardRef, useImperativeHandle } from "react";

const Video = forwardRef(({ path }, ref) => {
  
  const subref = useRef();

  useImperativeHandle(ref, () => ({
    play(){
      subref.current.play();
    },
    stop(){
      subref.current.pause();
    }
    
  }));

  return (
    <video style={{ maxWidth: "100%" }} ref={subref}>
      <source src={path}></source>
    </video>
  );
});

const Example = () => {
  const [playing, setPlaying] = useState(false);

  const ref = useRef();

  return (
    <div>
      

      <Video ref={ref} path="./sample.mp4" />
      <button
        onClick={() => {
          setPlaying((prev) => !prev);
          if(!playing){
            ref.current.play();
          }else{
            ref.current.stop();
          }
        }}
      >
        {playing ? "Stop" : "Play"}
      </button>
    </div>
  );
};

export default Example;
