-- TODO: Create initial database schema
-- This is a placeholder for database migrations

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incomes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    amount DECIMAL(10,2) NOT NULL,
    source VARCHAR(255),
    date DATE NOT NULL,
    is_stable BOOLEAN DEFAULT true
);

-- TODO: Add more tables for expenses, savings_plans, alerts, emergency_funds