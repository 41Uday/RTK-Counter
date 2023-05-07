import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,increaseByNumber,selectCount } from './counterSlice';
import './index.scss'

const Counter = () => {
    const [inputValue,setInputValue] = useState(2);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <div>
            <center>
                <h1>Counter: {count}</h1>
                <button className="button-1" onClick={() => dispatch(increment())}>Increase</button>
                <button className="button-2" onClick={() => dispatch(decrement())}>Decrease</button>
                <button className="button-3" onClick={() => dispatch(increaseByNumber(Number(inputValue)))}>Increase by {inputValue}</button>
                <input type='text' className='input' onChange={e => setInputValue(e.target.value)} placeholder='Enter a number that you want to increase' />
                <button className="button-3" onClick={() => dispatch(increaseByNumber(Number(inputValue)))}>Async </button>
            </center>
        </div>
    )
}

export default Counter