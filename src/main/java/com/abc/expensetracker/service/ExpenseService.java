package com.abc.expensetracker.service;

import org.springframework.stereotype.Service;

import com.abc.expensetracker.model.Expense;
import com.abc.expensetracker.repository.ExpenseRepository;

import java.util.List;

@Service
public class ExpenseService {

	 private final ExpenseRepository repository;

	    public ExpenseService(ExpenseRepository repository) {
	        this.repository = repository;
	    }

	    public List<Expense> getAllExpenses() {
	        return repository.findAll();
	    }

	    public Expense saveExpense(Expense expense) {
	        return repository.save(expense);
	    }

	    public void deleteExpense(Long id) {
	        repository.deleteById(id);
	    }
	}