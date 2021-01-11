const { authJwt } = require("../middleware");
const controller = require("../controllers/restaurant.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/restaurants", controller.getAll);
  app.get("/api/v1/restaurants/:id", controller.getOne);
  app.post("/api/v1/restaurants", controller.postNew);
  app.put("/api/v1/restaurants/:id", controller.update);
  app.delete("/api/v1/restaurants/:id", controller.delete);
  app.post("/api/v1/restaurants/:id/addReview", controller.addRev);


};