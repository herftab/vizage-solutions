# 🔄 Local Development to AWS Deployment Workflow

## Your Complete Development & Deployment Process

---

## 📍 Current State

✅ Local Next.js site running at http://localhost:3000
✅ Git repository initialized with all changes committed
✅ AWS deployment infrastructure configured
✅ CI/CD pipeline ready to activate

---

## 🎯 The Workflow You'll Use Daily

### 1️⃣ Local Development (Your Desktop)

```bash
# Start development server
npm run dev

# Make your changes in VS Code or your preferred editor
# Test locally at http://localhost:3000
# Everything works? Great! Move to step 2
```

**What you're doing:**
- Editing pages, components, styles
- Testing features locally
- Seeing changes instantly with hot reload

---

### 2️⃣ Commit Your Changes

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add new product page for interactive displays"

# Or commit specific files
git add src/app/products/new-product.tsx
git commit -m "Add new product page"
```

**What you're doing:**
- Saving your work to Git
- Creating a checkpoint you can return to
- Preparing changes for deployment

---

### 3️⃣ Push to GitHub (Triggers Deployment)

```bash
# Push to GitHub
git push origin main
```

**What happens automatically:**
1. Code uploads to GitHub
2. AWS Amplify (or GitHub Actions) detects the push
3. Builds your Next.js site
4. Runs tests (if configured)
5. Deploys to AWS
6. Invalidates CDN cache
7. Site goes live in 2-5 minutes

**You don't do anything else!** Just push and wait.

---

### 4️⃣ Verify Deployment

```bash
# Check deployment status
# - Amplify: https://console.aws.amazon.com/amplify/
# - GitHub Actions: https://github.com/YOUR_USERNAME/vizage-solutions/actions

# Visit your live site
# - Amplify: https://main.[app-id].amplifyapp.com
# - CloudFront: https://[distribution-id].cloudfront.net
```

---

## 🔄 Complete Example Workflow

### Scenario: Adding a New Product

```bash
# 1. Start local development
npm run dev

# 2. Create new product in src/lib/products.ts
# Add product details, pricing, images

# 3. Test locally
# Visit http://localhost:3000/products
# Verify new product appears correctly

# 4. Commit changes
git add src/lib/products.ts
git commit -m "Add new 75-inch interactive display product"

# 5. Push to deploy
git push origin main

# 6. Wait 2-5 minutes
# Check Amplify Console or GitHub Actions for build status

# 7. Verify on live site
# Visit your production URL
# New product is live!
```

---

## 🌿 Branch Strategy (Optional but Recommended)

### For Testing Before Production

```bash
# Create a feature branch
git checkout -b feature/new-checkout-flow

# Make your changes
# Edit files, test locally

# Commit to feature branch
git add .
git commit -m "Improve checkout flow with validation"

# Push feature branch
git push origin feature/new-checkout-flow

# AWS Amplify creates a preview deployment!
# Test at: https://feature-new-checkout-flow.[app-id].amplifyapp.com

# Happy with changes? Merge to main
git checkout main
git merge feature/new-checkout-flow
git push origin main

# Now it deploys to production!
```

---

## 🚨 Rollback Strategy

### If Something Goes Wrong

#### Option 1: Revert Last Commit
```bash
# Undo last commit but keep changes
git reset --soft HEAD~1

# Or undo last commit and discard changes
git reset --hard HEAD~1

# Push the revert
git push origin main --force
```

#### Option 2: Revert to Specific Commit
```bash
# Find the commit you want to return to
git log --oneline

# Revert to that commit
git revert <commit-hash>
git push origin main
```

#### Option 3: Use Amplify Console
1. Go to Amplify Console
2. Click "Deployments"
3. Find previous successful deployment
4. Click "Redeploy this version"

---

## 📊 Monitoring Your Deployments

### Check Build Status

**AWS Amplify:**
```
https://console.aws.amazon.com/amplify/
→ Select your app
→ View build logs
→ See deployment history
```

**GitHub Actions:**
```
https://github.com/YOUR_USERNAME/vizage-solutions/actions
→ Click on latest workflow run
→ View build logs
→ See success/failure status
```

### Check Live Site
```bash
# Your production URL (save this!)
# Amplify: https://main.[app-id].amplifyapp.com
# CloudFront: https://[distribution-id].cloudfront.net

# Check if changes are live
curl -I https://your-site-url.com
```

---

## 🔧 Environment Variables

### Local Development (.env.local)
```bash
# Create .env.local (never commit this!)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Production (AWS)

**Amplify Console:**
1. Go to Amplify Console
2. Click "Environment variables"
3. Add variables:
   - `NEXT_PUBLIC_API_URL`
   - `DATABASE_URL`
   - etc.

**GitHub Secrets (for GitHub Actions):**
1. Go to GitHub repo → Settings → Secrets
2. Add secrets:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - etc.

---

## 🎨 Typical Development Day

### Morning: New Feature
```bash
# Pull latest changes
git pull origin main

# Start dev server
npm run dev

# Create feature branch
git checkout -b feature/customer-reviews

# Code for 2 hours
# Add customer review component
# Test locally

# Commit and push
git add .
git commit -m "Add customer review component"
git push origin feature/customer-reviews

# Preview deployment created automatically!
# Share preview URL with team for feedback
```

### Afternoon: Bug Fix
```bash
# Switch to main
git checkout main

# Create hotfix branch
git checkout -b hotfix/cart-calculation

# Fix the bug
# Test locally

# Commit and push to main (urgent fix)
git add .
git commit -m "Fix cart total calculation bug"
git checkout main
git merge hotfix/cart-calculation
git push origin main

# Live in 3 minutes!
```

### Evening: Merge Feature
```bash
# Feature approved, merge to production
git checkout main
git merge feature/customer-reviews
git push origin main

# New feature goes live!
```

---

## 📈 Scaling Your Workflow

### As Your Team Grows

**1 Developer (You):**
- Work directly on main branch
- Push to deploy
- Simple and fast

**2-3 Developers:**
- Use feature branches
- Create pull requests
- Review before merging
- Amplify creates preview for each PR

**4+ Developers:**
- Add staging environment
- Require code reviews
- Automated testing
- Scheduled deployments

---

## 🎯 Best Practices

### ✅ Do This
- Commit often with clear messages
- Test locally before pushing
- Use feature branches for big changes
- Keep main branch always deployable
- Monitor deployment status
- Set up cost alerts in AWS

### ❌ Avoid This
- Don't commit `.env` files
- Don't push broken code to main
- Don't skip local testing
- Don't ignore build failures
- Don't commit large files (>100MB)
- Don't hardcode secrets in code

---

## 🚀 Quick Reference Commands

### Daily Commands
```bash
# Start development
npm run dev

# Check status
git status

# Commit changes
git add .
git commit -m "Your message"

# Deploy to production
git push origin main

# View logs
git log --oneline
```

### Branch Commands
```bash
# Create branch
git checkout -b feature/name

# Switch branch
git checkout main

# Merge branch
git merge feature/name

# Delete branch
git branch -d feature/name
```

### Emergency Commands
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Revert to specific commit
git revert <commit-hash>

# Force push (careful!)
git push origin main --force
```

---

## 📞 When Things Go Wrong

### Build Fails
1. Check build logs in Amplify/GitHub Actions
2. Look for error messages
3. Test locally: `npm run build`
4. Fix errors and push again

### Site Not Loading
1. Wait 5 minutes (CloudFront takes time)
2. Check CloudFront distribution status
3. Clear browser cache
4. Check AWS Console for errors

### Changes Not Appearing
1. Verify push succeeded: `git log`
2. Check build completed successfully
3. Invalidate CloudFront cache
4. Hard refresh browser (Ctrl+Shift+R)

---

## 🎉 You're All Set!

This is your complete workflow from local development to production deployment. 

**Remember:**
1. Develop locally
2. Test thoroughly
3. Commit changes
4. Push to GitHub
5. Automatic deployment!

**Next Step:** Follow `DEPLOYMENT_QUICKSTART.md` to set up your AWS deployment, then start using this workflow!
