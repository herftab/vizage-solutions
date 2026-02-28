# 🚀 Quick Start Deployment Guide

## Choose Your Deployment Method

### 🌟 Option 1: AWS Amplify (RECOMMENDED)
**Best for:** Quick setup, automatic CI/CD, minimal configuration
**Cost:** £5-15/month
**Time:** 15 minutes

### 🔧 Option 2: GitHub Actions + Terraform
**Best for:** Full control, lowest cost, infrastructure as code
**Cost:** £3-8/month
**Time:** 45 minutes

---

## 🌟 OPTION 1: AWS Amplify (Easiest)

### What You Need
- AWS account ([Sign up here](https://aws.amazon.com/))
- GitHub account
- 15 minutes

### Steps

#### 1️⃣ Push Your Code to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/vizage-solutions.git
git branch -M main
git push -u origin main
```

#### 2️⃣ Deploy to AWS Amplify

1. Open [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select **"GitHub"** and authorize AWS Amplify
4. Choose your **vizage-solutions** repository
5. Select **main** branch
6. Amplify auto-detects Next.js - click **"Next"**
7. Review settings and click **"Save and deploy"**

#### 3️⃣ Wait for Deployment (5-10 minutes)

Watch the build progress in the Amplify Console.

#### 4️⃣ Done! 🎉

Your site is live at: `https://main.[app-id].amplifyapp.com`

### Automatic Updates

Every time you push to GitHub, Amplify automatically:
- Builds your site
- Runs tests
- Deploys to production
- No manual steps needed!

### Add Custom Domain (Optional)

1. In Amplify Console, go to **"Domain management"**
2. Click **"Add domain"**
3. Follow the wizard to connect your domain
4. AWS provides free SSL certificate

---

## 🔧 OPTION 2: GitHub Actions + Terraform

### What You Need
- AWS account with programmatic access
- GitHub account
- AWS CLI installed
- Terraform installed
- 45 minutes

### Steps

#### 1️⃣ Install Required Tools

**AWS CLI:**
```bash
# Windows (using Chocolatey)
choco install awscli

# Or download from: https://aws.amazon.com/cli/
```

**Terraform:**
```bash
# Windows (using Chocolatey)
choco install terraform

# Or download from: https://www.terraform.io/downloads
```

#### 2️⃣ Configure AWS Credentials

```bash
aws configure
```

Enter:
- AWS Access Key ID: (from AWS IAM)
- AWS Secret Access Key: (from AWS IAM)
- Region: `eu-west-2` (London)
- Output format: `json`

#### 3️⃣ Create Terraform State Bucket

```bash
aws s3 mb s3://vizage-terraform-state --region eu-west-2
aws s3api put-bucket-versioning --bucket vizage-terraform-state --versioning-configuration Status=Enabled
```

#### 4️⃣ Deploy Infrastructure

```bash
cd terraform
cp terraform.tfvars.example terraform.tfvars

# Edit terraform.tfvars with your preferred editor
# Then:

terraform init
terraform plan
terraform apply
```

**Save these outputs:**
- `website_bucket_name`
- `cloudfront_distribution_id`
- `cloudfront_domain_name`

#### 5️⃣ Configure GitHub Secrets

1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"** and add:

| Name | Value |
|------|-------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key |
| `S3_BUCKET_NAME` | From Terraform output |
| `CLOUDFRONT_DISTRIBUTION_ID` | From Terraform output |

#### 6️⃣ Enable Static Export

Update `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
};

export default nextConfig;
```

#### 7️⃣ Push to GitHub

```bash
git add .
git commit -m "Add AWS deployment configuration"
git push origin main
```

GitHub Actions will automatically deploy your site!

#### 8️⃣ Done! 🎉

Your site is live at the CloudFront domain from Terraform output.

---

## 📊 What Gets Deployed

### Infrastructure
- ✅ S3 bucket for website hosting
- ✅ CloudFront CDN for fast global delivery
- ✅ DynamoDB tables for products and orders
- ✅ Cognito for user authentication
- ✅ SSL certificate (free)

### CI/CD Pipeline
- ✅ Automatic builds on every push
- ✅ Automatic deployment to production
- ✅ CloudFront cache invalidation
- ✅ Build status notifications

---

## 💰 Cost Breakdown

### AWS Amplify Method
- Amplify hosting: £0-5/month
- Build minutes: Free tier (1000 min/month)
- Data transfer: £0-3/month
- **Total: £5-15/month**

### GitHub Actions + Terraform Method
- S3 storage: £0.50-2/month
- CloudFront: £0-3/month
- DynamoDB: Free tier
- Lambda: Free tier
- **Total: £3-8/month**

---

## 🔄 Making Updates

### Local Development
```bash
npm run dev
# Make your changes
# Test locally at http://localhost:3000
```

### Deploy Changes
```bash
git add .
git commit -m "Your change description"
git push origin main
```

That's it! Your changes will automatically deploy.

---

## 🛠️ Troubleshooting

### Build Fails
- Check build logs in Amplify Console or GitHub Actions
- Verify Node version is 20.x
- Check for missing environment variables

### Site Not Loading
- Wait 15-20 minutes for CloudFront to fully deploy
- Check CloudFront distribution status in AWS Console
- Clear your browser cache

### GitHub Actions Fails
- Verify AWS credentials in GitHub Secrets
- Check IAM permissions for your AWS user
- Review error logs in Actions tab

---

## 📚 Next Steps

1. ✅ Deploy your site (choose Option 1 or 2)
2. ✅ Test the live site
3. ✅ Set up custom domain (optional)
4. ✅ Configure email notifications (SES)
5. ✅ Set up monitoring and alerts
6. ✅ Enable backups for DynamoDB

---

## 🆘 Need Help?

- **AWS Amplify Issues:** Check [Amplify Console](https://console.aws.amazon.com/amplify/) logs
- **GitHub Actions Issues:** Check Actions tab in your repository
- **Terraform Issues:** Run `terraform plan` to see what's wrong
- **General AWS Issues:** Check [AWS CloudWatch](https://console.aws.amazon.com/cloudwatch/) logs

---

## 📖 Full Documentation

For detailed information, see:
- `AWS_DEPLOYMENT_GUIDE.md` - Complete deployment guide
- `aws-setup.md` - Architecture overview
- `terraform/` - Infrastructure as code
- `.github/workflows/` - CI/CD configuration

---

## ✅ Recommended: AWS Amplify

For your use case, I recommend **AWS Amplify** because:
- ✅ Fastest setup (15 minutes)
- ✅ Automatic CI/CD out of the box
- ✅ Free SSL certificates
- ✅ Automatic scaling
- ✅ Preview deployments for testing
- ✅ Easy rollbacks
- ✅ Built-in monitoring

You can always migrate to the Terraform approach later if you need more control.
