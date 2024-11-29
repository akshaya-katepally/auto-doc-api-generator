const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a greeting message.
 *     responses:
 *       200:
 *         description: A successful response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, world!"
 */
router.get('/hello', (req, res) => {
    res.json({ message: 'Hello, world!' });
});


/**
 * @swagger
 * /api/goodbye:
 *   get:
 *     summary: Returns a farewell message.
 *     responses:
 *       200:
 *         description: A successful response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Goodbye, world!"
 */
router.get('/goodbye', (req, res) => {
    res.json({ message: 'Goodbye, world!' });
});


module.exports = router;
