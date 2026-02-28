# AWS Infrastructure Setup Guide

## Architecture Overview

Your Next.js e-commerce site will use the following AWS services for minimal cost:

### Core Services
1. **AWS Amplify** - Hosting & CI/CD (£0-5/month for low traffic)
2. **Amazon S3** - Static asset storage (£0.50-2/month)
3. **Amazon CloudFront** - CDN (£0-3/month)
4. **AWS Lambda** - Serverless API functions (Free tier: 1M requests/month)
5. **Amazon DynamoDB** - Database for products/orders (Free tier: 25GB)
6. **Amazon Cognito** - User authentication (Free tier: 50,000 MAU)
7. **Amazon SES** - Email notifications (Free tier: 62,000 emails/month)

### Estimated Monthly Cost
- **Low Traffic (< 1,000 visitors/month)**: £5-15/month
- **Medium Traffic (1,000-10,000 visitors/month)**: £15-40/month

## Deployment Strategy

### Option 1: AWS Amplify (Recommended - Easiest)
**Pros:**
- Automatic CI/CD from Git
- Built-in SSL certificates
- Automatic scaling
- Preview deployments for branches
- Zero configuration for Next.js

**Cons:**
- Slightly more expensive than manual setup
- Less control over infrastructure

### Option 2: S3 + CloudFront + GitHub Actions
**Pros:**
- Lowest cost option
- Full control over deployment
- Can optimize caching strategies

**Cons:**
- More setup required
- Manual SSL certificate management
- Need to configure GitHub Actions

## Recommended Approach: AWS Amplify

We'll use AWS Amplify because it:
- Handles CI/CD automatically
- Provides free SSL certificates
- Scales automatically
- Supports Next.js out of the box
- Costs less than £10/month for your traffic level

## Prerequisites

1. AWS Account with billing enabled
2. GitHub/GitLab repository (you already have Git initialized)
3. AWS CLI installed and configured
4. Domain name (optional, can use Amplify subdomain)

## Setup Steps

### Step 1: Prepare Your Repository
- Push your code to GitHub/GitLab
- Ensure `.env.example` is in repo (not `.env` with secrets)

### Step 2: Configure Next.js for AWS Amplify
- Update `next.config.mjs` for static export or SSR
- Add build specifications

### Step 3: Create AWS Resources
- Set up Amplify app
- Configure environment variables
- Connect to Git repository

### Step 4: Set Up Database (DynamoDB)
- Create tables for products, orders, users
- Configure API endpoints

### Step 5: Configure CI/CD Pipeline
- Automatic deployments on push to main
- Preview deployments for pull requests
- Build and test automation

## Next Steps

1. Choose your Git hosting (GitHub recommended)
2. Create AWS account if you don't have one
3. I'll help you create the configuration files
4. Deploy to AWS Amplify

## Alternative: GitHub Actions + S3 (Manual CI/CD)

If you prefer more control and potentially lower costs, we can set up:
- GitHub Actions for CI/CD
- S3 for static hosting
- CloudFront for CDN
- Route 53 for DNS (if you have a domain)

This approach costs £3-8/month but requires more configuration.

## Which Option Would You Like?

1. **AWS Amplify** (Recommended) - Easiest, automatic CI/CD, £5-15/month
2. **GitHub Actions + S3** - More control, lowest cost, £3-8/month

Let me know your preference and I'll create all the necessary configuration files!
