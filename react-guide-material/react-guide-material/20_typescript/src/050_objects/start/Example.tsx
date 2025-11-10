

const Example = () => {
  // 練習用
  
  return (
    <>
    <Arrys />
    <Objects />
    </>
  );
};

export default Example;


const Arrys = () => {
  // 練習用
  const arry1:number[] = [1, 2, 3];
  const arry2:string[] = ['a', 'b', 'c'];
  const arry3:Array<number> = [4, 5, 6];
  const arry4:(string|number)[] = [7, 'd', 8, 'e'];
  const arry5:Array<string|number> = ['f', 9, 'g', 10];
  return (
    <>
    <div>{arry1.join(', ')}</div>,
     <div>{arry1.join(', ')}</div>,
     <div>{arry2.join(', ')}</div>,
     <div>{arry3.join(', ')}</div>,
     <div>{arry4.join(', ')}</div>,
     <div>{arry5.join(', ')}</div>
    </>
  ) ;
};

const Objects = () => {
  // 練習用
  const obj1: {id: number; title: string} = {id: 1, title: 'TypeScript'};
  const obj2: {id: number; title: string; isPublished?: boolean} = {id: 2, title: 'JavaScript'};
  const obj3: Record<string, number> = {a: 1, b: 2, c: 3};

  return (
    <>
    <div>{`id: ${obj1.id}, title: ${obj1.title}`}</div>,
    <div>{`id: ${obj2.id}, title: ${obj2.title}, isPublished: ${obj2.isPublished}`}</div>,
    <div>{`a: ${obj3.a}, b: ${obj3.b}, c: ${obj3.c}`}</div>
    </>
  );
};
