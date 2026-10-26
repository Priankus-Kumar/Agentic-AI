import express from "express"
import { modelai } from "./ai.controller.js"
const router=express.Router()

router.post("/",modelai)

export default router