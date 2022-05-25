// This is your test secret API key.
const stripe = require('stripe')('sk_test_51Kvw3oESVA12bh5iQ9O6PUdhEnPZhkgFZoOPfFD2AjfJlfFZ9KkluaIk5s59hUTPnstGzTUVNOtM3U4t52yd5RRa00iLdRxO1F');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1Kvw7GESVA12bh5iE29lfCoB',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));