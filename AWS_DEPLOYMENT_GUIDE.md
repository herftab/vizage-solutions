# AWS Deployment Guide - Vizage Solutions

## Overview

This guide will help you deploy your Next.js e-commerce site to AWS with automatic CI/CD.

## Cost Estimate

**Monthly AWS Costs:**
- S3 Storage: £0.50-2
- CloudFront: £0-3
- DynamoDB: Free tier (25GB)
- Cognito: Free tier (50,000 users)
- Lambda: Free tier (1M requests)
- **Total: £5-15/month** for low to medium traffic

## Deployment Options

### Option 1: AWS Amplify (Easiest - Recommended)

**Pros:** Automatic CI/CD, SSL, scaling, zero config
**Cost:** £5-15/month
**Setup Time:** 15 minutes

### Option 2: GitHub Actions + S3 + CloudFront (Most Control)

**Pros:** Lowest cost, full control
**Cost:** £3-8/month
**Setup Time:** 45 minutes

### Option 3: Terraform + GitHub Actions (Infrastructure as Code)

**Pros:** Reproducible, version controlled infrastructure
**Cost:** £3-8/month
**Setup Time:** 60 minutes

---

## Quick Start: AWS Amplify (Recommended)

### Prerequisites
1. AWS Account
2. GitHub account
3. Your code pushed to GitHub

### Steps

#### 1. Push Code to GitHub

```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/vizage-solutions.git
git branch -M main
git push -u origin main
```

#### 2. Set Up AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Select "GitHub" and authorize
4. Choose your repository and branch (main)
5. Amplify will auto-detect Next.js settings
6. Click "Save and deploy"

#### 3. Configure Environment Variables (Optional)

In Amplify Console:
- Go to "Environment variables"
- Add any required variables (API keys, etc.)

#### 4. Done!

Your site will be live at: `https://[branch-name].[app-id].amplifyapp.com`

**Automatic deployments:** Every push to main will trigger a new deployment.

---

## Advanced Setup: GitHub Actions + Terraform

This approach gives you full control and lowest cost.

### Prerequisites

1. AWS Account with programmatic access
2. GitHub repository
3. Terraform installed locally
4. AWS CLI installed and configured

### Step 1: Configure AWS Credentials

```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Region: eu-west-2 (London)
# Output format: json
```

### Step 2: Create Terraform State Bucket

```bash
# Create S3 bucket for Terraform state
aws s3 mb s3://vizage-terraform-state --region eu-west-2

# Enable versioning
aws s3api put-bucket-versioning \
  --bucket vizage-terraform-state \
  --versioning-configuration Status=Enabled
```

### Step 3: Deploy Infrastructure with Terraform

```bash
# Navigate to terraform directory
cd terraform

# Copy example variables
cp terraform.tfvars.example terraform.tfvars

# Edit terraform.tfvars with your values
# (Use your preferred editor)

# Initialize Terraform
terraform init

# Review the plan
terraform plan

# Apply the infrastructure
terraform apply
```

**Save the outputs!** You'll need:
- `website_bucket_name`
- `cloudfront_distribution_id`
- `cloudfront_domain_name`
- `cognito_user_pool_id`
- `cognito_client_id`

### Step 4: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: From Terraform output
- `CLOUDFRONT_DISTRIBUTION_ID`: From Terraform output

### Step 5: Update Next.js Configuration

Update `next.config.mjs` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Add export script to `package.json`:

```json
{
  "scripts": {
    "export": "next export"
  }
}
```

### Step 6: Push to GitHub

```bash
git add .
git commit -m "Add AWS deployment configuration"
git push origin main
```

GitHub Actions will automatically:
1. Build your Next.js app
2. Upload to S3
3. Invalidate CloudFront cache
4. Your site goes live!

---

## Manual Deployment (Without CI/CD)

If you prefer to deploy manually:

```bash
# Set environment variables
export S3_BUCKET_NAME="your-bucket-name"
export CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"

# Run deployment script
chmod +x scripts/deploy-manual.sh
./scripts/deploy-manual.sh
```

---

## Post-Deployment Tasks

### 1. Set Up Custom Domain (Optional)

**Using AWS Route 53:**
1. Register domain in Route 53 (£10-15/year)
2. Create SSL certificate in ACM (free)
3. Add custom domain to Amplify or CloudFront
4. Update DNS records

### 2. Configure Email (Amazon SES)

For order confirmations and contact forms:

1. Go to [Amazon SES Console](https://console.aws.amazon.com/ses/)
2. Verify your email address
3. Request production access (if needed)
4. Update your app with SES credentials

### 3. Set Up Monitoring

**CloudWatch Alarms:**
- High error rates
- Unusual traffic patterns
- Cost alerts

### 4. Enable Backups

**DynamoDB:**
- Enable point-in-time recovery
- Set up automated backups

---

## Troubleshooting

### Build Fails in Amplify

Check build logs in Amplify Console. Common issues:
- Missing environment variables
- Node version mismatch (use Node 20)
- Build timeout (increase in settings)

### GitHub Actions Fails

Check Actions tab in GitHub. Common issues:
- Invalid AWS credentials
- Wrong S3 bucket name
- Insufficient IAM permissions

### Site Not Loading

- Check CloudFront distribution status (takes 15-20 minutes to deploy)
- Verify S3 bucket policy allows public read
- Check browser console for errors

---

## Cost Optimization Tips

1. **Enable CloudFront caching** - Reduces S3 requests
2. **Use DynamoDB on-demand pricing** - Pay only for what you use
3. **Set S3 lifecycle policies** - Archive old logs
4. **Monitor with AWS Cost Explorer** - Track spending
5. **Use CloudFront price class 100** - Only US/Europe (cheaper)

---

## Rollback Strategy

### Amplify
- Go to Amplify Console → Deployments
- Click "Redeploy" on previous version

### GitHub Actions
```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

### Manual
```bash
# Deploy previous version
git checkout <previous-commit>
./scripts/deploy-manual.sh
git checkout main
```

---

## Next Steps

1. ✅ Choose deployment method (Amplify recommended)
2. ✅ Set up AWS account
3. ✅ Push code to GitHub
4. ✅ Deploy infrastructure
5. ✅ Configure CI/CD
6. ✅ Test deployment
7. ✅ Set up custom domain (optional)
8. ✅ Configure monitoring

---

## Support

If you encounter issues:
1. Check AWS CloudWatch logs
2. Review GitHub Actions logs
3. Verify AWS credentials and permissions
4. Check this guide's troubleshooting section

## Useful Links

- [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
- [AWS S3 Console](https://console.aws.amazon.com/s3/)
- [AWS CloudFront Console](https://console.aws.amazon.com/cloudfront/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
