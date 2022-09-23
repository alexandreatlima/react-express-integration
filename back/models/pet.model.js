import {Schema, model} from "mongoose"

const petSchema = new Schema({
    name: {type: String, required: true, default: "Totó", minLength: 3},
    specie: {type: String, enum: ["Dog", "Cat", "Bird", "Fish", "Snake", "Lizard", "Others"], default: "Others"},
    age: {type: Number, required: true},
    color: {type: String, default: "Caramelo"},
    gender: {type: String, required: true, enum: ["Male", "Female"]},
    createdAt: {type: Date, default: Date.now()}
})

export const PetModel = model("Pet", petSchema)