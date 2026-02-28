# Vizage Solutions - Digital Signage E-Commerce Platform

A premium Next.js e-commerce website for digital signage and canvas solutions, built with TypeScript, Tailwind CSS, and designed for AWS deployment.

## 🌟 Features

- **Premium Design** - Modern, professional UI with animations and glassmorphism effects
- **Responsive** - Fully optimised for mobile, tablet, and desktop
- **E-Commerce** - Shopping cart, product pages, checkout flow
- **Digital Signage** - 6 professional products with detailed pages
- **Digital Canvas** - Art display solutions for businesses
- **Services** - Complete installation and support offerings
- **British Localisation** - GBP currency, British English

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
vizage-solutions/
├── src/
│   ├── app/                    # Next.js 15 app directory
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Digital signage products
│   │   ├── digital-canvas/    # Digital canvas page
│   │   ├── services/          # Services page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── cart/              # Shopping cart
│   │   └── checkout/          # Checkout flow
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation with dropdown
│   │   ├── Footer.tsx         # Footer with links
│   │   └── ProductCard.tsx    # Product display card
│   ├── lib/                   # Utilities and data
│   │   ├── products.ts        # Product data
│   │   ├── store.ts           # Zustand state management
│   │   └── currency.ts        # GBP formatting
│   └── types/                 # TypeScript types
├── terraform/                 # AWS infrastructure as code
├── .github/workflows/         # CI/CD pipelines
├── scripts/                   # Deployment scripts
└── docs/                      # Documentation

```

## 🎨 Tech Stack

- **Framework:** Next.js 15.5.12
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Deployment:** AWS (Amplify or S3+CloudFront)
- **CI/CD:** GitHub Actions or AWS Amplify
- **Infrastructure:** Terraform

## 📦 Products

### Digital Signage
1. Single-Sided Display (43"-55") - £899-1,299
2. Double-Sided Display (43"-55") - £1,799-2,499
3. Slim Wall Mounted Display (32"-65") - £699-1,899
4. Interactive Touch Screen (32"-65") - £1,499-3,499
5. External Mounted Display (43"-75") - £1,999-4,999
6. Premium Interactive Kiosk (43"-55") - £3,499-4,999

### Digital Canvas
- Textura Home & PRO Canvas
- 4K/8K hyper-realistic displays
- Non-reflective technology
- Curated content library

### Services
- Professional installation
- Power and network setup
- Lifetime technical support
- Content management
- Analytics and insights
- Art curation

## 🚀 Deployment

### Option 1: AWS Amplify (Recommended)

**Easiest setup with automatic CI/CD**

1. Push code to GitHub
2. Connect to AWS Amplify
3. Automatic deployments on every push

**Cost:** £5-15/month

📖 **Guide:** See `DEPLOYMENT_QUICKSTART.md`

### Option 2: Terraform + GitHub Actions

**Full control with infrastructure as code**

1. Deploy infrastructure with Terraform
2. Configure GitHub Actions
3. Automatic deployments via CI/CD

**Cost:** £3-8/month

📖 **Guide:** See `AWS_DEPLOYMENT_GUIDE.md`

## 📚 Documentation

- **[DEPLOYMENT_QUICKSTART.md](DEPLOYMENT_QUICKSTART.md)** - Start here for deployment
- **[LOCAL_TO_AWS_WORKFLOW.md](LOCAL_TO_AWS_WORKFLOW.md)** - Daily development workflow
- **[AWS_DEPLOYMENT_GUIDE.md](AWS_DEPLOYMENT_GUIDE.md)** - Complete AWS setup guide
- **[DEPLOYMENT_SUMMARY.md](DEPLOYMENT_SUMMARY.md)** - Overview of deployment options
- **[aws-setup.md](aws-setup.md)** - Architecture and cost breakdown

## 🔄 Development Workflow

```bash
# 1. Make changes locally
npm run dev

# 2. Test at http://localhost:3000

# 3. Commit changes
git add .
git commit -m "Your changes"

# 4. Push to deploy
git push origin main

# 5. Automatic deployment to AWS!
```

## 🏗️ AWS Architecture

```
Users → CloudFront CDN → S3 Static Site
                       ↓
                   DynamoDB (Products/Orders)
                       ↓
                   Cognito (Authentication)
                       ↓
                   SES (Email Notifications)
```

## 💰 Cost Estimate

### Low Traffic (< 1,000 visitors/month)
- **AWS Amplify:** £5-15/month
- **Terraform Setup:** £3-8/month

### Medium Traffic (1,000-10,000 visitors/month)
- **AWS Amplify:** £15-40/month
- **Terraform Setup:** £8-25/month

## 🔐 Environment Variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Required variables:
- `AWS_REGION` - AWS region (eu-west-2)
- `S3_BUCKET_NAME` - S3 bucket for hosting
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution
- `NEXT_PUBLIC_COGNITO_USER_POOL_ID` - Cognito user pool
- `NEXT_PUBLIC_COGNITO_CLIENT_ID` - Cognito client ID

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build test
npm run build

# Type checking
npx tsc --noEmit
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features

### User Experience
✅ Premium animations and transitions
✅ Mobile-first responsive design
✅ Fast page loads with CDN
✅ Smooth navigation with dropdown menus
✅ Interactive product cards

### E-Commerce
✅ Shopping cart with Zustand
✅ Product detail pages
✅ Checkout flow
✅ GBP currency formatting
✅ Inventory management ready

### Content
✅ 6 digital signage products
✅ Digital canvas solutions
✅ Complete services page
✅ About and contact pages
✅ British English localisation

### Technical
✅ Next.js 15 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ AWS-ready architecture
✅ CI/CD pipeline configured

## 🚦 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Git
- AWS account (for deployment)
- GitHub account (for CI/CD)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/vizage-solutions.git

# Navigate to directory
cd vizage-solutions

# Install dependencies
npm install

# Start development server
npm run dev
```

### First Deployment

1. Read `DEPLOYMENT_QUICKSTART.md`
2. Choose deployment method (Amplify recommended)
3. Follow the guide
4. Your site goes live!

## 📞 Support

For deployment help:
- Check `DEPLOYMENT_QUICKSTART.md` for quick start
- Review `AWS_DEPLOYMENT_GUIDE.md` for detailed info
- See `LOCAL_TO_AWS_WORKFLOW.md` for daily workflow

## 📄 License

This project is private and proprietary.

## 🎉 Ready to Deploy?

Start with `DEPLOYMENT_QUICKSTART.md` and choose your deployment method!

---

**Built with ❤️ for Vizage Solutions**
