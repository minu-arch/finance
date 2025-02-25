import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Middleware pentru CORS
app.use('/*', cors());

// GET /api/apartments
app.get('/api/apartments', async (c) => {
  // Aici vei adăuga logica pentru a prelua datele din baza de date
  return c.json([/* datele tale */]);
});

// POST /api/apartments
app.post('/api/apartments', async (c) => {
  const body = await c.req.json();
  // Aici vei adăuga logica pentru a salva în baza de date
  return c.json(body);
});

// PUT /api/apartments/:id
app.put('/api/apartments/:id', async (c) => {
  const id = c.param('id');
  const body = await c.req.json();
  // Aici vei adăuga logica pentru a actualiza în baza de date
  return c.json({ id, ...body });
});

// DELETE /api/apartments/:id
app.delete('/api/apartments/:id', async (c) => {
  const id = c.param('id');
  // Aici vei adăuga logica pentru a șterge din baza de date
  return c.json({ success: true });
});

export default app;