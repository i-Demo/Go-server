const sneakerRouter = require("./sneaker.js");

function route(app) {
    app.use("/api/v1/products", sneakerRouter);
    app.get("/api", (req, res, next) => {
        res.status(200).json("Server Live");
    });
}

module.exports = route;
