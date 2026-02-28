# 🚀 AWS Amplify Setup - Step by Step

## Your Repository
**GitHub URL:** https://github.com/herftab/vizage-solutions

---

## 📋 Prerequisites Checklist

- [x] Code pushed to GitHub
- [x] Repository is private
- [ ] AWS account created
- [ ] AWS account billing information added

---

## 🌟 AWS Amplify Deployment Steps

### Step 1: Create AWS Account (if needed)

1. Go to https://aws.amazon.com/
2. Click "Create an AWS Account"
3. Follow the signup process:
   - Email address
   - Password
   - Account name: "Vizage Solutions"
   - Contact information
   - Payment method (credit/debit card)
   - Identity verification (phone)
   - Select "Basic Support - Free"

**Note:** AWS requires a payment method but you'll stay within free tier limits initially.

---

### Step 2: Access AWS Amplify Console

1. Sign in to AWS Console: https://console.aws.amazon.com/
2. In the search bar at top, type: **"Amplify"**
3. Click on **"AWS Amplify"** service
4. You'll see the Amplify welcome page

**Direct link:** https://console.aws.amazon.com/amplify/

---

### Step 3: Create New Amplify App

1. Click the orange **"New app"** button (top right)
2. Select **"Host web app"** from dropdown
3. You'll see "Get started with Amplify Hosting"

---

### Step 4: Connect to GitHub

1. Under "From your existing code", select **"GitHub"**
2. Click **"Continue"**
3. A popup will appear asking to authorize AWS Amplify
4. Click **"Authorize aws-amplify-console"**
5. You may need to enter your GitHub password
6. Grant access to your repositories (select "All repositories" or just "vizage-solutions")

---

### Step 5: Select Repository and Branch

1. **Repository:** Select `herftab/vizage-solutions` from dropdown
2. **Branch:** Select `main` (or `master` if that's your branch name)
3. Check the box: **"Connecting a monorepo? Pick a folder"** - Leave unchecked
4. Click **"Next"**

---

### Step 6: Configure Build Settings

Amplify will auto-detect Next.js. You should see:

**App name:** `vizage-solutions` (you can change this if you want)

**Build and test settings:** Should show something like:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Important Settings:**
- **Environment:** Leave as default
- **Service role:** Select "Create new role" (Amplify will create it automatically)

Click **"Next"**

---

### Step 7: Review and Deploy

1. Review all settings:
   - Repository: herftab/vizage-solutions
   - Branch: main
   - Build settings: Auto-detected Next.js
2. Click **"Save and deploy"**

---

### Step 8: Wait for Deployment (5-10 minutes)

You'll see 4 stages:
1. **Provision** - Setting up build environment (1-2 min)
2. **Build** - Installing dependencies and building (3-5 min)
3. **Deploy** - Uploading to hosting (1-2 min)
4. **Verify** - Final checks (30 sec)

Watch the progress in real-time. You can click on each stage to see detailed logs.

---

### Step 9: Access Your Live Site! 🎉

Once deployment completes:

1. You'll see a green checkmark ✅
2. Your site URL will be displayed: `https://main.xxxxxx.amplifyapp.com`
3. Click the URL to view your live site!

**Save this URL** - this is your production website.

---

## 🔧 Post-Deployment Configuration

### Enable Automatic Deployments

Already enabled! Every time you push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Amplify will automatically:
- Detect the push
- Build your site
- Deploy updates
- Usually takes 3-5 minutes

---

### Add Custom Domain (Optional)

1. In Amplify Console, click **"Domain management"** (left sidebar)
2. Click **"Add domain"**
3. Enter your domain name
4. Follow the wizard to configure DNS
5. AWS provides free SSL certificate

**Cost:** Domain registration ~£10-15/year (if you don't have one)

---

### Configure Environment Variables (When Needed)

1. In Amplify Console, click **"Environment variables"** (left sidebar)
2. Click **"Manage variables"**
3. Add variables like:
   - `NEXT_PUBLIC_API_URL`
   - `DATABASE_URL`
   - etc.

**Note:** You don't need any environment variables yet for the current site.

---

## 📊 Monitoring Your Site

### View Deployments

1. Go to Amplify Console
2. Click on your app
3. See all deployments with timestamps
4. Click any deployment to see logs

### View Metrics

1. Click **"Monitoring"** in left sidebar
2. See:
   - Requests per minute
   - Data transfer
   - Errors
   - Response times

---

## 💰 Cost Tracking

### View Current Costs

1. Go to AWS Billing Dashboard: https://console.aws.amazon.com/billing/
2. Click **"Bills"** to see current month
3. Click **"Cost Explorer"** for detailed breakdown

### Set Up Cost Alerts

1. Go to AWS Budgets: https://console.aws.amazon.com/billing/home#/budgets
2. Click **"Create budget"**
3. Select **"Cost budget"**
4. Set monthly budget: £20
5. Add email alert at 80% threshold

**Expected costs:**
- First 12 months: £5-10/month (mostly free tier)
- After 12 months: £10-15/month

---

## 🔄 Making Updates

### Your Daily Workflow

```bash
# 1. Make changes locally
npm run dev
# Test at http://localhost:3000

# 2. Commit changes
git add .
git commit -m "Updated product pricing"

# 3. Push to deploy
git push origin main

# 4. Wait 3-5 minutes
# Check Amplify Console for build status

# 5. Verify changes on live site
```

---

## 🚨 Troubleshooting

### Build Fails

**Check build logs:**
1. Go to Amplify Console
2. Click on failed build
3. Expand "Build" section
4. Look for error messages

**Common issues:**
- Missing dependencies: Check `package.json`
- Build timeout: Increase timeout in settings
- Environment variables: Add required variables

**Test locally:**
```bash
npm run build
```
If it works locally, it should work on Amplify.

### Site Not Loading

1. Wait 5 minutes after deployment completes
2. Clear browser cache (Ctrl+Shift+R)
3. Check Amplify Console for deployment status
4. Try incognito/private browsing mode

### Changes Not Appearing

1. Verify push succeeded: `git log`
2. Check Amplify Console for new build
3. Wait for build to complete
4. Hard refresh browser

---

## 🎯 Next Steps After Deployment

### Immediate
- [ ] Test all pages on live site
- [ ] Test on mobile device
- [ ] Share URL with stakeholders
- [ ] Bookmark Amplify Console

### This Week
- [ ] Set up cost alerts
- [ ] Configure custom domain (optional)
- [ ] Test automatic deployments
- [ ] Review monitoring metrics

### This Month
- [ ] Set up DynamoDB for products
- [ ] Configure Cognito for users
- [ ] Set up SES for emails
- [ ] Optimize performance

---

## 📞 Support Resources

### AWS Amplify Console
https://console.aws.amazon.com/amplify/

### AWS Support
- Documentation: https://docs.amplify.aws/
- Forums: https://forums.aws.amazon.com/
- Support: https://console.aws.amazon.com/support/

### Your Repository
https://github.com/herftab/vizage-solutions

---

## ✅ Deployment Checklist

- [ ] AWS account created
- [ ] Signed in to AWS Console
- [ ] Opened Amplify Console
- [ ] Created new app
- [ ] Connected to GitHub
- [ ] Selected herftab/vizage-solutions repository
- [ ] Selected main branch
- [ ] Reviewed build settings
- [ ] Clicked "Save and deploy"
- [ ] Waited for deployment to complete
- [ ] Accessed live site URL
- [ ] Verified site works correctly
- [ ] Saved production URL
- [ ] Set up cost alerts
- [ ] Bookmarked Amplify Console

---

## 🎉 You're Live!

Once deployment completes, your Vizage Solutions website will be:
- ✅ Live on the internet
- ✅ Secured with HTTPS
- ✅ Globally distributed via CDN
- ✅ Automatically deploying on every push
- ✅ Monitored and scalable

**Your production URL will be:**
`https://main.[unique-id].amplifyapp.com`

Share it with the world! 🚀
