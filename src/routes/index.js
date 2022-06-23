import UserRouter from './RUser.js'

export default function RouterManagement(app){
    app.use('/CleanOps/v1.0.0/usuario',UserRouter)
}