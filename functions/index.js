const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const stripe = require('stripe') ('sk_test_51HmI24HQoja8xMaGjjLVEMWbsqb74OdVF2jR1Ihq1M6oPWXaCunroq7tsn4Qg0c7ithADQ43kO74l8k3pWohfeqZ00LSXPXjgH')

//API

//app config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send('Hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved  BOOM!!!  for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'EUR',
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//  http://localhost:5001/clone-c712a/us-central1/api