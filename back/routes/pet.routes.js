import express from "express";
import { PetModel } from "../models/pet.model.js";

const petRouter = express.Router()


// CREATE


petRouter.post("/", async (req, res) => {
    try {

        const pet = await PetModel.create(req.body)

        return res.status(201).json(pet)

    } catch (err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


export {petRouter}