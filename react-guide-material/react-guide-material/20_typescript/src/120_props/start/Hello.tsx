

type Props = {
    text: string,
    children?: React.ReactNode
}

const Hello: React.FC<Props> = (props) =>{
    return(
        <h1>Hello {props.text}!{props.children}</h1>
    )
}

type FnProps = {
    fn: (text: string) => void,
    label: string
}
export const Btn: React.FC<FnProps> = (props) => {
    return (
    <button onClick={() => props.fn('TypeScript')}>{props.label}</button>
    );
}


export default Hello;