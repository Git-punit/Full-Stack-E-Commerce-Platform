# FyndClone - Full Stack E-Commerce Platform

A production-ready E-commerce application built with the "Fynd" tech stack.

## Tech Stack

*   **Frontend**: React.js, Next.js, Tailwind CSS, Redux Toolkit
*   **Backend**: Node.js, Express.js, PostgreSQL, Sequelize
*   **Auth**: JWT, bcryptjs

## Prerequisites

1.  **Node.js**: Installed.
2.  **PostgreSQL**: Installed and running locally.
    *   Create a database named `ecommerce_db`.
    *   Update `backend/.env` with your Postgres credentials (default: `postgres`/`password`).

## How to Run

### Backend

1.  Navigate to `backend`:
    ```bash
    cd backend
    ```
2.  Install dependencies (if not done):
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
    *   Server runs on `http://localhost:5000`.
    *   It will automatically create tables in your database.

### Frontend

1.  Navigate to `frontend`:
    ```bash
    cd frontend
    ```
2.  Install dependencies (if not done):
    ```bash
    npm install
    ```
3.  Start the dev server:
    ```bash
    npm run dev
    ```
    *   App runs on `http://localhost:3000`.

## Features Implemented

1.  **User Authentication**: Sign Up & Login (JWT).
2.  **Product Management**: Browse products, view details, search.
3.  **Admin Dashboard**: Create and Delete products (Access via `/admin/dashboard` or link in Navbar if Admin).
    *   *Note*: To make a user an admin, manually update the `role` column in the `Users` table to `admin` using a DB tool like pgAdmin or DBeaver.
4.  **Cart & Checkout**: Add to cart, update quantity, remove items, simple checkout flow.
5.  **Order History**: View past orders in Profile.


## Project Overview (Resume Ready)

> Full-Stack E-Commerce Platform | React, Next.js, Node.js, PostgreSQL

*   **Built a production-style e-commerce web application** using React, Next.js, and Node.js
*   **Designed RESTful APIs** for product, cart, and order management
*   **Implemented secure JWT-based authentication** and role-based access control
*   **Developed responsive UI** using Tailwind CSS for mobile and desktop users
*   **Integrated PostgreSQL** for structured data storage and efficient querying
*   **Deployed the application** with cloud hosting and version control using Git

## Project Structure

*   **/backend**: API services, Database models, Controllers, Middlewares.
*   **/frontend**: Next.js Pages, Components, Redux storage, Tailwind configuration.
