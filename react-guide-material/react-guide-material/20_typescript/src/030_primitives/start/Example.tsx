const Example = () => {
  // 練習用
  const str:string = 'hello typescript';
  
  const num : number = 42;

  const bignum: bigint = 9007199254741991n;

  const bool : boolean = true;

  const nullValue: null = null;

  const undefValue: undefined = undefined;
  


  return {
    str: <div>{str}</div>,
    num: <div>{num}</div>,
    bignum: <div>{bignum.toString()}</div>,
    bool: <div>{bool ? 'true' : 'false'}</div>,
    nullValue: <div>{String(nullValue)}</div>,
    undefValue: <div>{String(undefValue)}</div>,
};
};

export default Example;
