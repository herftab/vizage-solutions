# Vizage Solutions - Digital Signage Ecommerce

A modern ecommerce website for selling digital signage products, built with Next.js 14 and TypeScript.

## Features

- Product catalog with shopping cart
- Checkout flow (ready for Stripe integration)
- Responsive design with Tailwind CSS
- State management with Zustand
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js 14 app router pages
├── components/       # Reusable React components
├── lib/             # Utilities and data
└── types/           # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Future AWS Deployment

This project is designed to be deployed on AWS with:
- Frontend: S3 + CloudFront or AWS Amplify
- Backend: Lambda + API Gateway
- Database: DynamoDB
- Authentication: Cognito
- CI/CD: GitHub Actions or GitLab CI

## Tech Stack

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS
- Zustand (state management)
- Stripe (payment processing - to be integrated)

## License

Private - All rights reserved
