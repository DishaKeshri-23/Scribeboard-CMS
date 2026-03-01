const express = require('express');
const path = require('path');
const app = express();

// ----------- Middleware -------------
app.use(express.json());

// ----------- Backend API routes -------------
app.post('/api/v1/auth/register', (req, res) => {
    res.json({ message: "Register endpoint hit!", data: req.body });
});

app.post('/api/v1/auth/login', (req, res) => {
    res.json({ accessToken: "FAKE_TOKEN_FOR_TEST", data: req.body });
});

app.post('/api/v1/auth/logout', (req, res) => {
    res.json({ message: "Logout successful" });
});

app.get('/api/v1/auth/profile', (req, res) => {
    res.json({ name: "Disha", email: "disha@example.com" });
});

app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});
// ----------- Start Server -------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});



