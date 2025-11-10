package com.abc.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abc.expensetracker.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
