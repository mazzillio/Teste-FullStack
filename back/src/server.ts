import express from "express";
import { routes } from "./routes";
import cors from 'cors'

const app=express()
    
    app.use(cors())
    app.use(express.json())
    app.use(routes)


app.listen(3500,()=>console.log('Server rodando na 3500'))