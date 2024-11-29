const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger-config');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// API Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Swagger Documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API docs available at http://localhost:${PORT}/docs`);
});
