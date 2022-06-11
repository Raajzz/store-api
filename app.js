require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const app = express();
const routeNotFound = require("./middleware/routeNotFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const mongooseConnect = require("./config/database");

app.use(express.json());

// route middleware

app.get("/", (req, res) => {
	res.json({
		works: "works",
	});
});

// route-not-found middleware
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
	try {
		await mongooseConnect(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`server is listening on port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
