# QuoteStash Backend

## Overview

This is the backend server powering the [QuoteStash](https://jagdish-15.github.io/QuoteStash/index.html) web application. It displays random inspirational quotes and supports user donations via UPI. The backend stores donation data and is containerized for deployment.

## Features

- Accepts donation data from frontend
- Validates and stores donation metadata (name, email, phone, amount, UPI ID suffix)
- Sends response to confirm successful data reception
- Containerized for scalable deployment (e.g., Railway)

## Technologies Used

- Node.js
- Express.js
- CORS
- Body-parser

## Usage

This backend is designed to work with the QuoteStash frontend and is **not intended for direct access**. All necessary backend communication is triggered by frontend interactions.

## Frontend Repository

You can explore and interact with the frontend here:  
🔗 [QuoteStash Frontend](https://github.com/jagdish-15/QuoteStash)
