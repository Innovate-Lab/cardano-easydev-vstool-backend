# Cardano EasyDev Backend Service

A robust backend service built with TypeScript and Express.js for Cardano EasyDev VsTool, featuring Cardano blockchain integration using Lucid.

## Prerequisites

- Node.js (v18 or higher)
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

## Available Scripts

- `pnpm start` - Start the production server
- `pnpm build` - Build the TypeScript code
- `pnpm dev` - Start development server with hot-reload
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Jest tests

## Project Structure
```
src/
├── app.ts # Express app configuration
├── server.ts # Server entry point
├── config/ # Configuration files
├── controllers/ # Request handlers
├── dto/ # Data Transfer Objects
├── middleware/ # Express middlewares
├── models/ # Database models
├── pkg/ # Shared packages
├── routes/ # API routes
├── services/ # Business logic
├── tests/ # Test files
├── types/ # TypeScript type definitions
└── utils/ # Utility functions
```

## API Features

### Wallet Management
- Generate private key
- Generate seed phrase
- Connect wallet using private key
- Connect wallet using seed phrase
- Get UTXOs (using Lucid)
- Get UTXOs by address
- Get NFTs by address
- Get transactions by address
- Get public key hash

### Smart Contract Validation
- Get contract address
- Execute transaction

### DApp Template
- Generate DApp template

## Contributing

1. Ensure you have the prerequisites installed
2. Follow the installation steps
3. Create a new branch for your feature
4. Write and test your code
5. Submit a pull request