import Child from "./components/Child";

const Example = () => {
    const o = {
        color: 'green',
        num: 20,
        obj: {name: 'Alice', age: 25}

    }
return (
    <>
        <Child 
            {...o}
        />
        <Child color = "red" />
        <Child 
            num = {100} 
            obj = {{name: 'John', age: 30}}
        />
    </>
    );
};
export default Example;
