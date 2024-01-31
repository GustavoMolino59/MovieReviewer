const{Router} = require("express")
const UserController = require("../controller/UserController")

const usersRoute = Router();
userController = new UserController()

usersRoute.post("/", userController.create)
usersRoute.put("/:id", userController.update)
module.exports = usersRoute;



