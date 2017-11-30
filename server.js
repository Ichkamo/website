const express		= require("express");
const morgan		= require("morgan");
const app			= express();
const port			= process.env.PORT || 4242;

app.use(morgan("dev"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.listen(port);
