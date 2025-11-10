 const Todo: React.FC<{ items: string[] }> = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
);

export default Todo;