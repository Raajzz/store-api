const routeNotFound = (req, res) => {
	return res.status(404).json({
		success: false,
		message: "Route does not exist",
	});
};

module.exports = routeNotFound;
