package com.abc.expensetracker.controller;

import org.springframework.web.bind.annotation.*;

import com.abc.expensetracker.model.Expense;
import com.abc.expensetracker.service.ExpenseService;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:5173")

public class ExpenseController {

	private final ExpenseService service;

	public ExpenseController(ExpenseService service) {
		this.service = service;
	}

	@GetMapping
	public List<Expense> getExpenses() {
		return service.getAllExpenses();
	}

	@PostMapping
	public Expense addExpense(@RequestBody Expense expense) {
		return service.saveExpense(expense);
	}

	@DeleteMapping("/{id}")
	public void deleteExpense(@PathVariable Long id) {
		service.deleteExpense(id);
	}
}
