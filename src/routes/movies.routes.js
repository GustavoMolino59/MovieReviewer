const{Router} = require("express")
const MoviesController = require("../controller/MoviesController")

const moviesRote = Router();
movieController = new MoviesController()

moviesRote.post("/:user_id", movieController.create)
moviesRote.get("/", movieController.index)
moviesRote.get("/:id", movieController.show)
moviesRote.delete("/:id", movieController.delete)
module.exports = moviesRote;
