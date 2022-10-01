import express from 'express';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/moviedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Movie = mongoose.model('Movie', {
    id: Number,
    title: String,
    year: Number,
});

export async function getAll(){
    return Movie.find({});
};

export async function remove(id){
    const movie = await get(id);
    return movie.remove();
};

export async function get(id){
    return Movie.find({id});
};

export async function insert(movie){
    return movie;
}

export async function save(movie){
    if(!movie.id){
        const newMovie = new Movie(movie);
        newMovie.id = Data.now();
        return newMovie.save();
    } else {
        const existingMovie = await get(parseInt(movie.id, 10));
        existingMovie.title = movie.title;
        existingMovie.year = movie.year;
        return existingMovie.save();
    }
}

export async function update(movie){

}