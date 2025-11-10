const Example = () => {
  // 練習用

  //関数の引数と戻り値に型をつける方法
  function sum1(x:number,y:number):number{
    return x + y;
  }
  const result1 = sum1(10, 20);

  //引数の個数も型も合っていなければエラーになる
  const sum2 = (x:number,y:number):number => {
    return x + y;
  }
  const result2 = sum2(10, 20);

  //引数の個数を少なくしたいときは、オプショナル引数かデフォルト引数を使う
  function sum3(x? : number ,y : number = 0):number{
    if(y === undefined){
      return x;
    }
    return x + y;
  }
  const result3 = sum3(10); 

  //事前に関数の型を定義しておくこともできる
  type SumFunction = (x:number,y:number) => number;
  const sum4: SumFunction = (x,y) => {
    return x + y;
  }

  return (
    <>
    <div>{`result1: ${result1}`}</div>
    <div>{`result2: ${result2}`}</div>
    <div>{`result3: ${result3}`}</div>
    <div>{`result4: ${sum4(10, 20)}`}</div>
    </>
  );
};

export default Example;
