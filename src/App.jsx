import Posts from './components/Posts';
import Counter from './Counter';
import { decrement, increment } from './features/counters/countersSlice';
import TotalCounter from './TotalCounter';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counters = useSelector((state)=> state.counters)
  const dispatch = useDispatch();
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="flex gap-8 flex-wrap justify-center">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            label={'Counter ' + counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}

        <TotalCounter total={totalCount} />

        <Posts />
      </div>
    </div>
  );
}

export default App;
