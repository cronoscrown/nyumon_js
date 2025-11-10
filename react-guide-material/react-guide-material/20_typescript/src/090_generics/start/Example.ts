const Example = () => {
  const repeatStr = (value: string, times: number):string[] => {
    return Array(times).fill(value);
  }
  const repeatNum = (value: number, times: number):number[] => {
    return Array(times).fill(value);
  }
  const strings = repeatStr('hello', 3);
  const numbers = repeatNum(42, 3);

  //型が違うけど同じような関数を何度も書くのは面倒
  // ジェネリクスを使って、型を一般化
  const repeat = <T>(value: T, times: number): T[] => {
    return Array(times).fill(value);
  }
  // Tは型引数と呼ばれ、関数を呼び出すときに具体的な型に置き換えられる
  //<T,U>のように複数の型引数を指定することもできる

  const strings = repeat<string>('hello', 3);
  const numbers = repeat(42, 3);// 型推論により、<number>と指定しなくてもOK

 
};

export default Example;
