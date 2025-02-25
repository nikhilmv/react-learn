 
import {useDispatch, useSelector} from 'react-redux';
import {increment,decrement } from '../store/slices/counter';

const CounterListPage = () => {

    const dispatch = useDispatch(); 
    const count = useSelector((state) => state.counter.counterVal);
 
    const handleIncrease = () => { 
        dispatch(increment());
    }
    const handleDecrease = () => {
        dispatch(decrement());
    }
    return (
        <div>
   
            <button onClick={handleDecrease}>Decrease</button>  
            <button onClick={handleIncrease}>Increase</button>  
            <h1>Count: {count}</h1>
        </div>
    )

}

export default CounterListPage;