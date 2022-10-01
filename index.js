import express from "express";
import { router as movieRouter } from './movie/index.js';

const app = express();

app.use('/movie', movieRouter);

app.get('/', (request, response)  => {
    response.redirect('/movie');
});

app.listen(8080, () => {
    console.log("App is running...");
});