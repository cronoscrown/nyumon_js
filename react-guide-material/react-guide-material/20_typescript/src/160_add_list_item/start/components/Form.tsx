const Form: React.FC<{
     value: string; 
     setValue: React.Dispatch<React.SetStateAction<string>>; 
     items: string[]; 
     setItems: React.Dispatch<React.SetStateAction<string[]>> }> = ({ value, setValue, items, setItems }) => {
      
      
      const Input = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); // フォーム送信を防ぐ
            setItems([...items, value]);
            setValue("");
        }}>
             <input type="text" value={value} onChange={Input} />  
            <button type="submit">追加</button>
        </form>
    );
}
export default Form;