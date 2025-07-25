import { useState } from 'react';
import Counter from './Counter';
import TotalCounter from './TotalCounter';

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
function App() {
  const [counters, setCounter] = useState(initialCounters);

  const handleIncrement = (counterId) => {
  const updatedCounters = counters.map((counter) => {
    if (counter.id === counterId) {
      return { ...counter, value: counter.value + 1 };
    }
    return counter; // return unchanged counter
  });
  setCounter(updatedCounters);
};

const handleDecrement = (counterId) => {
  const updatedCounters = counters.map((counter) => {
    if (counter.id === counterId) {
      return { ...counter, value: counter.value - 1 };
    }
    return counter; // return unchanged counter
  });
  setCounter(updatedCounters);
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

        <TotalCounter total={10} />
      </div>
    </div>
  );
}

export default App;
