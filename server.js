const stripe = require('stripe')('sk_test_*********************');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: [
      'card'
    ],
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        // price: '{{PRICE_ID}}',
        price: 'price_**********',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url)
});

app.listen(5000, () => console.log('Running on port 5000'));