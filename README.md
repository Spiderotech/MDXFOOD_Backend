# MDXFOOD Backend

Node.js and Express API for the MDXFOOD platform.

## Features

- User signup, login, Google login, phone/email verification, password reset.
- Restaurant registration, OTP verification, login, profile management.
- Food item add, edit, delete, list, detail, and search APIs.
- Order creation, confirmation, cancellation, completion, and order history APIs.
- Dashboard analytics for order counts and revenue.
- Nodemailer email service.
- AWS S3 pre-signed upload URL service.
- MongoDB persistence with Mongoose models.

## Folder Structure

```text
src/
├── adapters/controllers/          # HTTP controllers
├── application/
│   ├── repositories/              # Repository interfaces
│   ├── services/                  # Service interfaces
│   └── useCase/                   # Business rules
├── config/                        # Env config
├── entities/                      # Domain entities
├── firebase/                      # Firebase Admin setup
└── framework/
    ├── database/                  # MongoDB connection, models, repositories
    ├── services/                  # Concrete services
    └── webserver/                 # Express config, routes, server
```

## API Route Groups

```text
/api/v1/user
/api/v1/restaurant
/api/v1/order
/api/v1/service
```

## Environment Variables

Create `BACKEND/.env`:

```env
PORT=3000
MONGODB_HOST=
ACESS_TOKEN_SCERET=
EMAIL_NODEMAILER=
PASSWORD_NODEMAILER=
S3_ACESS_KEY=
S3_SECRET_KEY=
```

## Run Locally

```bash
npm install
npm start
```

The current start script runs:

```bash
nodemon app.js
```
# MDXFOOD Restaurant Web App

React + Vite dashboard for restaurant owners/admins.

## Features

- Restaurant login and registration.
- Dashboard cards and charts for order/revenue analytics.
- Restaurant profile/account management.
- Food item creation, editing, deletion, and listing.
- New, ongoing, and completed order management.
- Firebase web notification support.

## Routes

```text
/                              Login
/register                      Register
/dashbord                      Dashboard
/accounts                      Account/profile
/accounts/foods                Food list
/accounts/foods-form           Add food
/accounts/foods-edit/:Id       Edit food
/orders                        New orders
/orders/ongoing-orders         Ongoing orders
/orders/completed-orders       Completed orders
```

## Folder Structure

```text
src/
├── App.tsx
├── components/
│   ├── Account/
│   ├── Dashboard/
│   └── Orders/
├── pages/
├── redux/
└── utils/
```

## API Configuration

Current API constants are hardcoded in:

```text
src/utils/restaurant/constants.ts
src/utils/orders/constants.ts
```

Move these values to Vite environment variables before hosting.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```




