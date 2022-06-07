import UserRouter from './RUser.js'

export default function RouterManagement(app){
    app.use('/CleanOps',process.env.API_V,'/usuario',UserRouter)
}

