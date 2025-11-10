import Hello from './Hello';
import { Btn } from './Hello';

const Example: React.FC = () => {
    return (
      <>
      <Hello text="TypeScript" >child</Hello>
      <Btn fn={(text) => alert(text)} label="Click me" />
      </>

    );
};

export default Example;
