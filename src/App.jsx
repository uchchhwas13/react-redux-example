import Counter from "./Counter";
import TotalCounter from "./TotalCounter"
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="flex gap-8 flex-wrap justify-center">
        <Counter label="Counter One" />
        <Counter label="Counter Two" />
        <TotalCounter total={10} />
      </div>
    </div>
  );
}

export default App;