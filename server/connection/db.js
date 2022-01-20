import  mongoose  from "mongoose";


const Connection = async () => {
    try{
            const URL = `mongodb://Inshort-clone:12345@clone-inshort-shard-00-00.rzjlv.mongodb.net:27017,clone-inshort-shard-00-01.rzjlv.mongodb.net:27017,clone-inshort-shard-00-02.rzjlv.mongodb.net:27017/INSHORT?ssl=true&replicaSet=atlas-weih9t-shard-0&authSource=admin&retryWrites=true&w=majority`;
            await mongoose.connect(URL,{ useNewUrlParser: true})
            console.log("Database connect succesfully");
    } catch (error){
        console.log('Errow while connecting with database', error);
    }
 
}
export default Connection;