
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "welcome to my ecommerce webpage",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ShopSphere API is healthy",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/users", userRoutes);


app.use(errorHandler);

export default app;
