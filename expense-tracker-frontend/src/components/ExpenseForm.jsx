import React, { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.amount) return;
    onAdd(form);
    setForm({ name: "", amount: "", date: "", category: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Add New Expense
      </h2>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Expense name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-indigo-500"
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-indigo-500"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-indigo-500"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="border p-2 rounded focus:outline-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        ➕ Add Expense
      </button>
    </form>
  );
}
