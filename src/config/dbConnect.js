import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://leo_tofel:<password>@cluster1.mxpd0fr.mongodb.net/?retryWrites=true&w=majority`);

let db = mongoose.connection;

export default db;




