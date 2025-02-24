# Cardano EasyDev Backend Service

A robust backend service built with TypeScript and Express.js for Cardano EasyDev VsTool.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Redis
- pnpm (recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cardano-easydev-vs-tool-be
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`


## Project Structure
```
src/
├── app.ts # Express app configuration
├── server.ts # Server entry point
├── config/ # Configuration files
├── controllers/ # Request handlers
├── db/ # Database connections
├── jobs/ # Cron jobs
├── middlewares/ # Express middlewares
├── models/ # Database models
├── pkg/ # Shared packages
├── repository/ # Data access layer
├── routes/ # API routes
├── services/ # Business logic
├── types/ # TypeScript type definitions
└── utils/ # Utility functions
```
