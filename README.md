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


