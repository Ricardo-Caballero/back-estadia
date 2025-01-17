import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Ricardo_Gonzalez:777.ricardo@ricardo.wtnhehl.mongodb.net/estadias?retryWrites=true&w=majority&appName=Ricardo")
//mongoose.connect("mongodb://localhost:27017/schoolcontroldbutxj")
//mongoose.connect("mongodb://localhost:27017/estadias")
//aquí pega el link de tu base de datos para que funviones tu programa    
.then(() => console.log('Connected to MongoDB'))
.catch(e => console.error(e));
export default mongoose;