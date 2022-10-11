
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import peepsRoutes from '../server/routes/peeps.js'


const app = express();

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started Successfully.");
  }
});

mongoose
  .connect("mongodb+srv://dafsRibeiro:8kHm5FpjAcs9gR76@cluster0.1bry0xq.mongodb.net/Chitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);
app.use("/peeps", peepsRoutes)

