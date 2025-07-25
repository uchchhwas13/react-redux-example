import Counter from './Counter';
import TotalCounter from './TotalCounter';
import { useSelector } from 'react-redux';

function App() {
  const counters = useSelector((state)=> state.counters)
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value + 1 };
      }
      return counter;
    });
    //setCounter(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return { ...counter, value: counter.value - 1 };
      }
      return counter;
    });
    //setCounter(updatedCounters);
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
      </div>
    </div>
  );
}

export default App;
