import express from 'express';
import 'dotenv/config'
import mongoose from 'mongoose';
import router from './routes/userRoutes';
import postRouter from './routes/postRoutes';

const app = express();
const databaseString = process.env.DATABASE_URL;
mongoose.connect(databaseString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database connected successfully');
});


app.use(express.json());
app.use('/users', router);
app.use('/posts', postRouter);

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
