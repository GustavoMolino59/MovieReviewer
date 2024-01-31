const knex = require("../database/knex")
const AppError = require("../utils/AppError")

class TagsController{

    async create(request, response){
        const{user_id} = request.params

        const tags = await knex("movies_tags").where({user_id})

        return response.json(tags)
    }
}

module.exports = TagsController