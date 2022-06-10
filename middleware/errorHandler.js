const errorHandlerMiddleware = (error, req, res, next) => {
	return res.status(500).json({
		success: false,
		message: error,
	});
};

module.exports = errorHandlerMiddleware;
