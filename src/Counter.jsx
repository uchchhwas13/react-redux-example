// src/components/Counter.jsx
import { useState } from "react";

export default function Counter({ count, label, onIncrement, onDecrement }) {

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-64 text-center">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <p className="text-3xl font-bold mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
