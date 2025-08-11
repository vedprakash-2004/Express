const express = require("express"); // spelling dhyan se
const app = express();
let port = 5000; // 8080 ki jagah


app.get("/", (req, res) => {
    res.send("Hello from Express server!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
