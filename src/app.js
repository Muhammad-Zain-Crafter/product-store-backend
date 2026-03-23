import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const app = express()

app.use(express.json({
    limit: "100mb"
}));
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.CORS_ORIGIN, 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman, server requests

      if (!allowedOrigins.includes(origin)) {
        return callback(new Error('Not allowed by CORS'));
      }

      callback(null, true);
    },
    credentials: true,
  })
);
// used to parse cookies from incoming requests
app.use(cookieParser())
// used to set various HTTP headers for security purposes
app.use(helmet())

app.get('/', (req, res) => {
    res.send('Welcome to the Product Store API');
})

import productRouter from "./routes/product.route.js";
app.use('/api/v1', productRouter)

export default app