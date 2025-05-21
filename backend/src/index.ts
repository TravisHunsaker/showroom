import express from 'express'
import cors from 'cors'
import reviewsRouter from './routes/reviews'
import watchlistRouter from './routes/watchlist'
import moviesRouter from './routes/movies'
import { InitDB } from './db/initDb'

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

InitDB();

app.use('/reviews', reviewsRouter)
app.use('/watchlist', watchlistRouter)
app.use('/movies', moviesRouter)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
