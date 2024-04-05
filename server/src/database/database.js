import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        const connect = mongoose.connect(`${process.env.DB_CONNECT_URL}`)
        console.log(`Succesfully Connected with DB: ${(await connectStatus).connection.host}`)
    }catch(error){
        console.log(`ERROR while connection to Database: ${error}`)
        process.exit(1)
    }
}

export default connectDB