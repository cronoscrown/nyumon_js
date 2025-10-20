import Child from "./components/Child";

const Example = () => {
return (
    <>
        <Child />
        <Child color = "red" />
        <Child 
            num = {100} 
            obj = {{name: 'John', age: 30}}
        />
    </>
    );
};
export default Example;
