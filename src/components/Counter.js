import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counteractions } from "../Store";
const Counter = () => {


  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show =useSelector((state)=>state.counter.showCounter)
  const toggleCounterHandler = () => {dispatch(counteractions.toggleCounter());};
  const incrementhandler = () => {
    dispatch(counteractions.increment());
  };
  const increasehandler=()=>{
    dispatch(counteractions.increase(10))
  }
  const decrementhandler = () => {
    dispatch(counteractions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1> Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}>increment BY 5</button>
        <button onClick={decrementhandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
