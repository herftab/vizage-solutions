# ✅ AWS Deployment Checklist

Use this checklist to ensure a smooth deployment to AWS.

---

## 📋 Pre-Deployment Checklist

### Local Setup
- [x] Next.js site running locally at http://localhost:3000
- [x] All features tested and working
- [x] Git repository initialized
- [x] All changes committed
- [x] No errors in console
- [x] Mobile responsive design verified

### AWS Account Setup
- [ ] AWS account created
- [ ] Billing information added
- [ ] IAM user created (if using Terraform)
- [ ] AWS CLI installed (if using Terraform)
- [ ] AWS CLI configured with credentials

### GitHub Setup
- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Local code pushed to GitHub
- [ ] Repository is private/public as desired

---

## 🚀 Deployment Method Selection

Choose ONE method:

### Option A: AWS Amplify (Recommended)
- [ ] Read `DEPLOYMENT_QUICKSTART.md` Option 1
- [ ] AWS account ready
- [ ] GitHub repository ready
- [ ] Ready to connect Amplify to GitHub

### Option B: Terraform + GitHub Actions
- [ ] Read `DEPLOYMENT_QUICKSTART.md` Option 2
- [ ] Terraform installed
- [ ] AWS CLI configured
- [ ] Ready to deploy infrastructure

---

## 🌟 AWS Amplify Deployment Steps

### Step 1: Push to GitHub
- [ ] Code pushed to GitHub main branch
- [ ] Repository accessible
- [ ] All files committed

### Step 2: Connect AWS Amplify
- [ ] Opened [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
- [ ] Clicked "New app" → "Host web app"
- [ ] Selected GitHub as source
- [ ] Authorized AWS Amplify to access GitHub
- [ ] Selected vizage-solutions repository
- [ ] Selected main branch

### Step 3: Configure Build Settings
- [ ] Amplify auto-detected Next.js
- [ ] Build settings look correct
- [ ] Clicked "Save and deploy"

### Step 4: Wait for Deployment
- [ ] Build started (check progress)
- [ ] Build completed successfully
- [ ] Deployment completed
- [ ] Site is live!

### Step 5: Verify Deployment
- [ ] Visited Amplify URL
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Products page displays correctly
- [ ] Digital Canvas page works
- [ ] Services page works
- [ ] Mobile view tested
- [ ] Shopping cart functions

### Step 6: Save Important Info
- [ ] Saved Amplify app URL
- [ ] Saved Amplify app ID
- [ ] Bookmarked Amplify Console

---

## 🔧 Terraform Deployment Steps

### Step 1: Install Prerequisites
- [ ] Terraform installed
- [ ] AWS CLI installed
- [ ] AWS credentials configured

### Step 2: Create Terraform State Bucket
```bash
aws s3 mb s3://vizage-terraform-state --region eu-west-2
aws s3api put-bucket-versioning --bucket vizage-terraform-state --versioning-configuration Status=Enabled
```
- [ ] State bucket created
- [ ] Versioning enabled

### Step 3: Configure Terraform
- [ ] Copied `terraform.tfvars.example` to `terraform.tfvars`
- [ ] Updated variables in `terraform.tfvars`
- [ ] Reviewed `terraform/main.tf`

### Step 4: Deploy Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```
- [ ] Terraform initialized
- [ ] Plan reviewed
- [ ] Infrastructure deployed
- [ ] Outputs saved

### Step 5: Configure GitHub Secrets
- [ ] Opened GitHub repo → Settings → Secrets
- [ ] Added `AWS_ACCESS_KEY_ID`
- [ ] Added `AWS_SECRET_ACCESS_KEY`
- [ ] Added `S3_BUCKET_NAME`
- [ ] Added `CLOUDFRONT_DISTRIBUTION_ID`

### Step 6: Enable Static Export
- [ ] Updated `next.config.mjs` with `output: 'export'`
- [ ] Committed changes
- [ ] Pushed to GitHub

### Step 7: Verify Deployment
- [ ] GitHub Actions workflow ran
- [ ] Build completed successfully
- [ ] Files uploaded to S3
- [ ] CloudFront cache invalidated
- [ ] Site is live!

### Step 8: Test Live Site
- [ ] Visited CloudFront URL
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors

---

## 🔐 Security Checklist

- [ ] `.env` file NOT committed to Git
- [ ] `.env.example` committed (without secrets)
- [ ] AWS credentials stored securely
- [ ] GitHub secrets configured
- [ ] S3 bucket policy reviewed
- [ ] CloudFront HTTPS enabled
- [ ] No hardcoded secrets in code

---

## 📊 Post-Deployment Tasks

### Immediate (Today)
- [ ] Test all pages on live site
- [ ] Test on mobile device
- [ ] Test shopping cart functionality
- [ ] Verify all images load
- [ ] Check all navigation links
- [ ] Test contact form (if implemented)

### This Week
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate (if custom domain)
- [ ] Set up email notifications (SES)
- [ ] Configure environment variables
- [ ] Test checkout flow thoroughly
- [ ] Share site with stakeholders

### This Month
- [ ] Enable CloudWatch monitoring
- [ ] Set up cost alerts in AWS
- [ ] Configure automated backups
- [ ] Set up DynamoDB tables (when ready)
- [ ] Configure Cognito (when ready)
- [ ] Optimize CloudFront caching
- [ ] Review and optimize costs

---

## 🎯 Custom Domain Setup (Optional)

### If You Have a Domain
- [ ] Domain registered (Route 53 or external)
- [ ] SSL certificate requested in ACM
- [ ] Certificate validated
- [ ] Domain added to Amplify/CloudFront
- [ ] DNS records updated
- [ ] HTTPS working
- [ ] Redirects configured (www → non-www)

---

## 📈 Monitoring Setup

### CloudWatch
- [ ] Opened [CloudWatch Console](https://console.aws.amazon.com/cloudwatch/)
- [ ] Reviewed logs
- [ ] Set up alarms for errors
- [ ] Set up alarms for high costs

### Cost Management
- [ ] Opened [Cost Explorer](https://console.aws.amazon.com/cost-management/)
- [ ] Reviewed current costs
- [ ] Set up budget alerts
- [ ] Configured spending limits

---

## 🔄 CI/CD Verification

### Test Automatic Deployment
- [ ] Made a small change locally
- [ ] Committed change
- [ ] Pushed to GitHub
- [ ] Deployment triggered automatically
- [ ] Build completed successfully
- [ ] Changes visible on live site
- [ ] Deployment time noted (should be 2-5 minutes)

---

## 🆘 Troubleshooting Checklist

### If Build Fails
- [ ] Checked build logs
- [ ] Verified Node version (should be 20.x)
- [ ] Checked for missing dependencies
- [ ] Verified environment variables
- [ ] Tested build locally: `npm run build`

### If Site Not Loading
- [ ] Waited 15-20 minutes for CloudFront
- [ ] Checked CloudFront distribution status
- [ ] Verified S3 bucket policy
- [ ] Cleared browser cache
- [ ] Checked browser console for errors

### If Changes Not Appearing
- [ ] Verified push succeeded
- [ ] Checked build completed
- [ ] Invalidated CloudFront cache
- [ ] Hard refreshed browser (Ctrl+Shift+R)
- [ ] Waited a few minutes

---

## 📞 Support Resources

### Documentation
- [ ] Bookmarked `DEPLOYMENT_QUICKSTART.md`
- [ ] Bookmarked `AWS_DEPLOYMENT_GUIDE.md`
- [ ] Bookmarked `LOCAL_TO_AWS_WORKFLOW.md`

### AWS Consoles
- [ ] Bookmarked [Amplify Console](https://console.aws.amazon.com/amplify/)
- [ ] Bookmarked [S3 Console](https://console.aws.amazon.com/s3/)
- [ ] Bookmarked [CloudFront Console](https://console.aws.amazon.com/cloudfront/)
- [ ] Bookmarked [CloudWatch Console](https://console.aws.amazon.com/cloudwatch/)

### GitHub
- [ ] Bookmarked repository
- [ ] Bookmarked Actions tab
- [ ] Bookmarked Settings → Secrets

---

## ✅ Deployment Complete!

Once all items are checked, your deployment is complete!

### Final Verification
- [ ] Site is live and accessible
- [ ] All features working
- [ ] Mobile responsive
- [ ] Automatic deployments working
- [ ] Monitoring configured
- [ ] Costs within budget
- [ ] Team has access to site
- [ ] Documentation reviewed

---

## 🎉 Next Steps

1. **Share your site** - Send the URL to stakeholders
2. **Monitor costs** - Check AWS billing daily for first week
3. **Gather feedback** - Test with real users
4. **Iterate** - Make improvements based on feedback
5. **Scale** - Add features as needed

---

## 📝 Notes

Use this space to track your deployment:

**Deployment Date:** _______________

**Deployment Method:** [ ] Amplify  [ ] Terraform

**Live URL:** _______________

**Amplify App ID:** _______________

**CloudFront Distribution ID:** _______________

**S3 Bucket Name:** _______________

**Issues Encountered:**
- 
- 
- 

**Resolution:**
- 
- 
- 

**Monthly Cost (First Month):** £_______________

---

## 🚀 You're Ready!

Follow this checklist step by step, and you'll have a successful deployment.

**Recommended:** Start with AWS Amplify for the easiest experience.

**Good luck!** 🎉
