const express = require("express");
const app = express();

//  req => middleware => res

const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);
	//either we send a response with this logger middleware
	//res.send('some example here')

	// OR, call next();

	//so that the next middleware, in this case the response, can function.
	next();
};

app.get("/", logger, (req, res) => {
	res.send("Home");
});
app.get("/about", logger, (req, res) => {
	res.send("About");
});

app.listen(5000, () => {
	console.log("Server is listening on port 5000....");
});
