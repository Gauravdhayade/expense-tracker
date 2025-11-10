import React, { useEffect, useState } from "react";
import { getExpenses, addExpense, deleteExpense } from "../api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const loadExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAdd = async (expense) => {
    await addExpense(expense);
    loadExpenses();
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    loadExpenses();
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  // Group expenses by category for Pie Chart
  const categoryData = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { name: curr.category, value: 0 };
      }
      acc[curr.category].value += curr.amount;
      return acc;
    }, {})
  );

  // Group expenses by month for Bar Chart
  const monthlyData = Object.values(
    expenses.reduce((acc, curr) => {
      const month = new Date(curr.date).toLocaleString("default", { month: "short" });
      if (!acc[month]) {
        acc[month] = { month, total: 0 };
      }
      acc[month].total += curr.amount;
      return acc;
    }, {})
  );

  const COLORS = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Expense Form */}
      <ExpenseForm onAdd={handleAdd} />

      {/* Total */}
      <h2 className="text-lg font-semibold mt-8 mb-3 text-gray-700 text-center">
        All Expenses (Total: ₹{total.toFixed(2)})
      </h2>

      {/* Expense Table */}
      <ExpenseList expenses={expenses} onDelete={handleDelete} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-center text-lg font-semibold text-indigo-600 mb-4">
            Category-wise Expense
          </h3>
          {categoryData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">No data to show</p>
          )}
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-center text-lg font-semibold text-indigo-600 mb-4">
            Monthly Expense
          </h3>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500">No data to show</p>
          )}
        </div>
      </div>
    </div>
  );
}
