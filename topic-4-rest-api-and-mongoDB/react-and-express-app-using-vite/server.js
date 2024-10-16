const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use("/", express.static(path.join(__dirname, "public")));

// Simple API endpoint
app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

// Catch-all route for React Router (SPA)
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server listens on port 5000 or process.env.PORT
const { PORT = 5000 } = process.env;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
