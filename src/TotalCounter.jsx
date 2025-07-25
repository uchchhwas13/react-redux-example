export default function TotalCounter({ total }) {
  return (
    <div className="bg-blue-100 text-blue-900 p-4 rounded-xl text-center w-full mt-6 shadow">
      <h2 className="text-xl font-semibold">Total Count</h2>
      <p className="text-2xl font-bold">{total}</p>
    </div>
  );
}