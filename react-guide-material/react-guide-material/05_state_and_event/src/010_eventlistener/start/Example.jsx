const Example = () => { 
  const clickHandler = () =>{
    alert('クリックされました！');
  }
  return (
    <>
      <button onClick={clickHandler}>
        クリックしてね
      </button>
      <button onClick>
        クリックしてね
      </button>
    </>
  );
};

export default Example;
