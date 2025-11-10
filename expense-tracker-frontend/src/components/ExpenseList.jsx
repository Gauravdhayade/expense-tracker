import React from "react";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0)
    return <p className="text-center text-gray-500 mt-6">No expenses added yet.</p>;

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Amount (₹)</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id} className="text-center border-t">
              <td className="py-2 px-4">{exp.name}</td>
              <td className="py-2 px-4">{exp.amount}</td>
              <td className="py-2 px-4">{exp.date}</td>
              <td className="py-2 px-4">{exp.category}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => onDelete(exp.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
