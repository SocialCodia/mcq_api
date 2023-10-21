module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Oops..! Something went wrong.';
    res.status(err.statusCode).json({ success: false, message: err.message });
}