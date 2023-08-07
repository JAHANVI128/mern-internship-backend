const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
const userRoutes = require('./routes/UserRoutes');
const roleRoutes = require('./routes/RoleRoutes');

app.use('/user',userRoutes);
app.use('/role',roleRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mernintern",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

const PORT = 3000
app.listen(PORT,() => {
    console.log("server is running on port ",PORT);
})