const express		= require("express");
const morgan		= require("morgan");
const app			= express();
const port			= 5000;

app.use(morgan("dev"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.listen(port, () => {
	console.log("[LOG] express server started");
});
