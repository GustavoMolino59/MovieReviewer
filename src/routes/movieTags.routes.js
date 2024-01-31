const{Router} = require("express")
const TagsController = require("../controller/TagsController")

const tagsRoutes = Router();
tagsController = new TagsController()

tagsRoutes.get("/:user_id", tagsController.create)
module.exports = tagsRoutes;