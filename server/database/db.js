import mongoose from 'mongoose';



const Connection = async (username,password) => {
    const URL =`mongodb://${username}:${password}@ac-eqj67bn-shard-00-00.75rybfe.mongodb.net:27017,ac-eqj67bn-shard-00-01.75rybfe.mongodb.net:27017,ac-eqj67bn-shard-00-02.75rybfe.mongodb.net:27017/?ssl=true&replicaSet=atlas-26wta6-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;