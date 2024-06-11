import {useState} from 'react';


export default function Counter() {
    const[count, setCount] = useState(0);

    function handleClick(){
        setCount(count +1);
    }
    return(
        <button onClick={handleClick}>
            You like me{count} time.
        </button>
    );
}