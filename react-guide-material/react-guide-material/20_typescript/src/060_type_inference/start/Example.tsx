const Example = () => {
  // 練習用
  let str = 'hello typescript';
  str =  123 // TypeScriptの型推論により、strはstring型として扱われるため、numberを代入するとエラーになります。

  let obj = {id: 1, title: 'TypeScript'};

  const bye = 'goodbye';

  return (
    <>
    <div>{str}</div>
    </>
  );
};

export default Example;
