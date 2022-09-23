import mongoose from "mongoose"

export async function dbConnect() {
    try {

        const conect = await mongoose.connect(process.env.MONGODB_URI)

        console.log(`Conected to db: ${conect.connection.name}`)

    } catch (err) {
        console.log(err)
    }
}