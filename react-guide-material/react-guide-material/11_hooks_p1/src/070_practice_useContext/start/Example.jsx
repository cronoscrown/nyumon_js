import { CalcProvider } from "./context/calcProvider";
import Input from "./components/Input";
import Select from "./components/Select";
import Result from "./components/Result";





const Example = () => {
 return (
     <CalcProvider>
       <Input name="a"/>      
       <Input name="b" />      
       <Select />
       <Result />      
    </CalcProvider>
  );
};

export default Example;

