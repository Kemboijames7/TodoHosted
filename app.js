const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todos');
const indexRoutes = require('./routes/index'); // Assuming there's an index route handler

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo_express');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);   // Use index routes for root-related paths
app.use('/todos', todoRoutes); // Prefix todo routes with /todos for clarity

// Start server
app.listen(7000, () => console.log('Server started listening on port: 7000'));
