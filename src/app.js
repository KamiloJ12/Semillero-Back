const express = require('express');
const ApiRoutes = require('./routes');
const cors = require('cors');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
ApiRoutes(app);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).json(err);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});