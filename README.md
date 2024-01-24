# Full Stack E-Commerce Audiophile website: Next.js 14(App Router), React, TypeScript, MongoDB

For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

## IMPROTANT !!!
Unfortunetly, resend emial doesn't work without custom domain, if you want to test website with functions like: 
reset password without been logged or verify account by email you need to setup .env file by yor own resend api key

## Test account
- Login: test@example.com
- Password: Kw1234!


## Key Features:
- Authorization using NextAuth (Google, Github, Email).
- Beautiful emails for signing up and after purchase.
- Stripe Checkout.
- Locally persisted shopping cart.
- You will be to see your orders.
- You will be able to change your password either when you are logged in or if you have forgotten it. 
- Animations using Framer motion.
- The functionality is written in TypeScript
- Responsive layoyut


## What could I do better?
- Utilizing Zod validation with server actions instead of using Tanstack Query, Formik, and Yup


## What I've learned
- In-depth exploration of Next.js functionalities.
- Implementation of authentication using NextAuth.
- Sending emails through Resend and React Email.
- Proficiency in working with MongoDB and Mongoose.
- Developing a straightforward backend using API Routes.
- Integration of Stripe with the website.


### Cloning the repository
```shell
git clone https://github.com/KornelJanczak/audiophile-website.git
```


## Setup env file
```js
# Next auth 
NEXTAUTH_SECRET=
NEXTAUTH_URL= http://localhost:3000
# Github login
GITHUB_ID=
GITHUB_SECRET=
# Google login
GOOGLE_ID=
GOOGLE_SECRET=
# Database url's
DATABASE_URL=mongodb+srv://korneljanczak10:5587@korneljanczak.j7uozhb.mongodb.net/Audiophile?retryWrites=true&w=majority
MONGO_URL=mongodb+srv://korneljanczak10:5587@cluster0.y9shkot.mongodb.net/Audiophile?retryWrites=true&w=majority
# Emailar 
DOMAIN=http://localhost:3000
VERIFY="VERIFY"
RESET="RESET"
ORDER="ORDER"
# RESEND
RESEND_API_KEY=
# STRIPE
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=
```


