import express from "express";
import { router as movieRouter } from './movie/index.js';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
const app = express();

const accessLogStream = createWriteStream('access.log', {flags: 'a'});
app.use(morgan('comon', { immediate: true, stream: accessLogStream}));
app.use('/movie', movieRouter);

app.get('/', (request, response)  => {
    response.redirect('/movie');
});

app.listen(8080, () => {
    console.log("App is running...");
});
