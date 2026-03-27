require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./Movies');

mongoose.connect(process.env.DB)
  .then(async () => {
    console.log('Connected to MongoDB');

    await Movie.deleteMany({});

    await Movie.insertMany([
      {
        title: 'Inception',
        releaseDate: 2010,
        genre: 'Science Fiction',
        actors: [
          { actorName: 'Leonardo DiCaprio', characterName: 'Cobb' },
          { actorName: 'Joseph Gordon-Levitt', characterName: 'Arthur' }
        ]
      },
      {
        title: 'The Dark Knight',
        releaseDate: 2008,
        genre: 'Action',
        actors: [
          { actorName: 'Christian Bale', characterName: 'Bruce Wayne' },
          { actorName: 'Heath Ledger', characterName: 'Joker' }
        ]
      },
      {
        title: 'Interstellar',
        releaseDate: 2014,
        genre: 'Science Fiction',
        actors: [
          { actorName: 'Matthew McConaughey', characterName: 'Cooper' },
          { actorName: 'Anne Hathaway', characterName: 'Brand' }
        ]
      },
      {
        title: 'Titanic',
        releaseDate: 1997,
        genre: 'Drama',
        actors: [
          { actorName: 'Leonardo DiCaprio', characterName: 'Jack' },
          { actorName: 'Kate Winslet', characterName: 'Rose' }
        ]
      },
      {
        title: 'The Conjuring',
        releaseDate: 2013,
        genre: 'Horror',
        actors: [
          { actorName: 'Vera Farmiga', characterName: 'Lorraine Warren' },
          { actorName: 'Patrick Wilson', characterName: 'Ed Warren' }
        ]
      }
    ]);

    console.log('5 movies inserted');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });