const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/resource:
 *   get:
 *     summary: Retrieve all resources.
 *     responses:
 *       200:
 *         description: List of all resources.
 */
router.get('/resource', (req, res) => {
    res.json({ message: 'All resources retrieved successfully.' });
});

/**
 * @swagger
 * /api/resource:
 *   post:
 *     summary: Create a new resource.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Sample Resource
 *     responses:
 *       201:
 *         description: Resource created successfully.
 */
router.post('/resource', (req, res) => {
    const { name } = req.body;
    res.status(201).json({ message: 'Resource created successfully.', resource: { name } });
});

/**
 * @swagger
 * /api/resource/{id}:
 *   put:
 *     summary: Update an existing resource by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The resource ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Resource Name
 *     responses:
 *       200:
 *         description: Resource updated successfully.
 */
router.put('/resource/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    res.json({ message: `Resource with ID ${id} updated successfully.`, updatedResource: { name } });
});

/**
 * @swagger
 * /api/resource/{id}:
 *   delete:
 *     summary: Delete a resource by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The resource ID.
 *     responses:
 *       200:
 *         description: Resource deleted successfully.
 */
router.delete('/resource/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Resource with ID ${id} deleted successfully.` });
});

module.exports = router;
