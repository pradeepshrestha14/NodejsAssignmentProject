import express from 'express';
import morgan from 'morgan';
import router from './routes/index';

let app = express();
let port = 8080;   

app.use(morgan('dev'));
app.use('/', router);


app.listen(port, function () {
console.log('Example app listening on port 8080! and accepts only JPG file!');
});