require("express-async-errors")
const express = require("express")
const AppError = require("./utils/AppError")
const routes = require("./routes")
const database = require("./database")


const appError = new AppError;
const app = express()


database()
app.use(express.json())

//Realiza tentativa de Rotas
app.use(routes)


//tratamento de erro - Caso volte um erro
app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            message: "error",
            status: error.message
        })
    }
    console.log(error)
    return response.status(500).json({
        message: "error",
        status: "internal server error"
    })
})





const PORT = 3334
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))