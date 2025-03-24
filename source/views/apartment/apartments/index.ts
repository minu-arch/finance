import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

// CORS middleware
app.use("/*", cors())

// GET /api/apartments
app.get("/api/apartments", async (c) => {
	// here you will add the logic to retrieve the data from the database
	return c.json([
		/* your data */
	])
})

// POST /api/apartments
app.post("/api/apartments", async (c) => {
	const body = await c.req.json()
	// here you will add the logic to save the data to the database
	return c.json(body)
})

// PUT /api/apartments/:id
app.put("/api/apartments/:id", async (c) => {
	const id = c.param("id")
	const body = await c.req.json()
	// here you will add the logic to update the data in the database
	return c.json({ id, ...body })
})

// DELETE /api/apartments/:id
app.delete("/api/apartments/:id", async (c) => {
	const id = c.param("id")
	// here you will add the logic to delete the data from the database
	return c.json({ success: true })
})

export default app

//this file is for the api of the apartments
//it is used to get the data from the database
//it is used to post the data to the database
//it is used to put the data to the database
//it is used to delete the data from the database
