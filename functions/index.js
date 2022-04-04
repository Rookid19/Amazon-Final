const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
   "sk_test_51HxFijD844Bjnaxyr8AdaZCQ4UlsChPfyNLgB8VXrAFSCrRxLQRYvsYGrxWmtMX9YvOPCr3kDi5275uHX4gsdAQj00W1QVH7RC"
);
// const { response } = require("express");

// API

// APP CONFIG
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
   const total = request.query.total;
   console.log("Payment Request Recieved BOOM!!! for this amount >>>", total);

   const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
   });
   // OK- created
   response.status(201).send({
      clientSecret: paymentIntent.client_secret,
   });
});
// app.get("/randy", (request, response) =>
//    response.status(200).send("Am Randy Odoom")
// );

// LISTEN COMAND
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-6f9a2/us-central1/api
