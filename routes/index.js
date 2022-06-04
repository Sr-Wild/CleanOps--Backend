import UserRouter from './RUser.js'

export default function RouterManagement(app){
    app.use("/usuario",UserRouter)
}

