import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

export const Counter = () =>{
    const count = useSelector((state) => state.counter.value); // Доступ до стану лічильника
  const dispatch = useDispatch();
    return (
<div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
    )
}