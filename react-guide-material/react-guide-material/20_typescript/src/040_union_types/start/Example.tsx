const Example = () => {
  // 練習用
  let srtOrNum: string|number = 'hello typescript';
  srtOrNum = 42;

  return {
    srtOrNum: <div>{srtOrNum}</div>,
  };
};

export default Example;
