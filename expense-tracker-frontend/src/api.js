import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // 👈 फक्त base URL ठेव
});

// ✅ Correct endpoints
export const getExpenses = () => API.get("/api/expenses");
export const addExpense = (expense) => API.post("/api/expenses", expense);
export const deleteExpense = (id) => API.delete(`/api/expenses/${id}`);
