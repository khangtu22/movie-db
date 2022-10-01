import express from "express";
import { router as movieRouter } from './movie/index.js';
import morgan from 'morgan';

const app = express();


app.use(morgan('common', {immediate: true}));
app.use(express.json({extended: false}));
app.use('/movie', movieRouter);

app.get('/', (request, response)  => {
    response.redirect('/movie');
});

app.listen(8080, () => {
    console.log("App is running...");
});
