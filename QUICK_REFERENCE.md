# 🚀 Vizage Solutions - Quick Reference Guide

## 🌐 Live Site & Resources

### Production Website
**URL:** https://main.d3po7hvc8mubi5.amplifyapp.com/

### GitHub Repository
**URL:** https://github.com/herftab/vizage-solutions
**Visibility:** Private

### AWS Amplify Console
**URL:** https://console.aws.amazon.com/amplify/
**App ID:** d3po7hvc8mubi5

### AWS Billing Dashboard
**URL:** https://console.aws.amazon.com/billing/

---

## 💻 Daily Development Workflow

### Local Development
```bash
# Start development server
npm run dev

# Open browser
http://localhost:3000

# Make your changes and test
```

### Deploy Changes to Production
```bash
# 1. Check what changed
git status

# 2. Add and commit changes
git add .
git commit -m "Description of your changes"

# 3. Push to deploy (automatic!)
git push origin main

# 4. Monitor deployment
# Go to: https://console.aws.amazon.com/amplify/
# Build takes 3-5 minutes
# Changes appear on: https://main.d3po7hvc8mubi5.amplifyapp.com/
```

---

## 📊 Cost Monitoring

### Expected Monthly Costs
- **First 12 months:** £5-10/month (free tier)
- **After 12 months:** £10-15/month

### Set Up Cost Alerts
1. Go to: https://console.aws.amazon.com/billing/home#/budgets
2. Click "Create budget"
3. Set monthly budget: £20
4. Add email alert at 80%

### Check Current Costs
- **Bills:** https://console.aws.amazon.com/billing/home#/bills
- **Cost Explorer:** https://console.aws.amazon.com/cost-management/home#/cost-explorer

---

## 🔧 Common Commands

### Git Commands
```bash
# Check status
git status

# View recent commits
git log --oneline -10

# View remote repository
git remote -v

# Pull latest changes
git pull origin main

# Push changes
git push origin main

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature
```

### NPM Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

---

## 📁 Project Structure

```
vizage-solutions/
├── src/
│   ├── app/                    # Pages
│   │   ├── page.tsx           # Home
│   │   ├── products/          # Digital Signage
│   │   ├── digital-canvas/    # Digital Canvas
│   │   ├── services/          # Services
│   │   ├── about/             # About
│   │   ├── contact/           # Contact
│   │   ├── cart/              # Shopping Cart
│   │   └── checkout/          # Checkout
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities & data
│   └── types/                 # TypeScript types
├── terraform/                 # AWS infrastructure
├── .github/workflows/         # CI/CD pipelines
└── scripts/                   # Deployment scripts
```

---

## 🎯 Key Features

### Current Features
✅ 6 Digital Signage products
✅ Digital Canvas page
✅ Services page
✅ Shopping cart (Zustand)
✅ Product detail pages
✅ Mobile responsive design
✅ British English & GBP currency
✅ Premium animations
✅ Automatic CI/CD deployment

### Future Enhancements
- [ ] DynamoDB for products/orders
- [ ] Cognito for user authentication
- [ ] SES for email notifications
- [ ] Payment integration (Stripe)
- [ ] Admin dashboard
- [ ] Analytics tracking

---

## 🚨 Troubleshooting

### Build Fails on Amplify
1. Check Amplify Console build logs
2. Test locally: `npm run build`
3. Check for missing dependencies
4. Verify environment variables

### Changes Not Appearing
1. Verify push succeeded: `git log`
2. Check Amplify Console for build status
3. Wait for build to complete (3-5 min)
4. Hard refresh browser (Ctrl+Shift+R)

### Local Development Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📞 Important Links

### Documentation
- `README.md` - Project overview
- `AWS_AMPLIFY_SETUP.md` - Amplify deployment guide
- `LOCAL_TO_AWS_WORKFLOW.md` - Daily workflow
- `DEPLOYMENT_CHECKLIST.md` - Deployment checklist
- `GITHUB_SETUP.md` - GitHub setup guide

### AWS Services
- **Amplify:** https://console.aws.amazon.com/amplify/
- **S3:** https://console.aws.amazon.com/s3/
- **CloudFront:** https://console.aws.amazon.com/cloudfront/
- **DynamoDB:** https://console.aws.amazon.com/dynamodb/
- **Cognito:** https://console.aws.amazon.com/cognito/
- **SES:** https://console.aws.amazon.com/ses/

### Support
- **AWS Support:** https://console.aws.amazon.com/support/
- **AWS Documentation:** https://docs.aws.amazon.com/
- **Next.js Docs:** https://nextjs.org/docs
- **Amplify Docs:** https://docs.amplify.aws/

---

## 🔐 Security Checklist

- [x] Repository is private
- [x] `.env` files in `.gitignore`
- [x] HTTPS enabled (automatic)
- [x] AWS credentials not in code
- [ ] Cost alerts configured
- [ ] Regular dependency updates
- [ ] Security patches applied

---

## 📈 Performance Optimization

### Current Setup
- ✅ CloudFront CDN (global)
- ✅ Next.js optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ Caching enabled

### Future Optimizations
- [ ] Enable CloudFront compression
- [ ] Optimize images further
- [ ] Add service worker
- [ ] Implement lazy loading
- [ ] Add performance monitoring

---

## 💡 Quick Tips

### Making Quick Updates
```bash
# One-liner for quick commits
git add . && git commit -m "Quick update" && git push origin main
```

### Viewing Live Logs
1. Go to Amplify Console
2. Click on your app
3. Click "Build history"
4. Click on latest build
5. View real-time logs

### Testing Before Deploy
```bash
# Always test locally first
npm run dev
# Test thoroughly at http://localhost:3000

# Then build to catch errors
npm run build

# If build succeeds, safe to deploy
git push origin main
```

### Rollback if Needed
1. Go to Amplify Console
2. Click "Build history"
3. Find previous working version
4. Click "Redeploy this version"

---

## 📅 Maintenance Schedule

### Daily
- Monitor Amplify deployments
- Check for build failures

### Weekly
- Review AWS costs
- Check site performance
- Test all features

### Monthly
- Update dependencies: `npm update`
- Review security alerts
- Optimize costs
- Backup important data

### Quarterly
- Review and update content
- Performance audit
- Security audit
- Cost optimization review

---

## 🎉 Success Metrics

### Current Status
- ✅ Site is live
- ✅ Automatic deployments working
- ✅ HTTPS enabled
- ✅ Mobile responsive
- ✅ All pages functional

### Track These Metrics
- Page load time
- Mobile performance
- Conversion rate
- Monthly AWS costs
- Deployment frequency
- Build success rate

---

## 📝 Notes Section

Use this space for your own notes:

**Custom Domain:** _________________

**Email for Notifications:** _________________

**Team Members with Access:** _________________

**Important Dates:**
- Site launched: _________________
- Last major update: _________________
- Next review date: _________________

**Monthly Cost Tracking:**
- Month 1: £_______
- Month 2: £_______
- Month 3: £_______

---

## ✅ Quick Checklist

### Before Making Changes
- [ ] Pull latest code: `git pull origin main`
- [ ] Start dev server: `npm run dev`
- [ ] Test changes locally

### After Making Changes
- [ ] Test thoroughly
- [ ] Commit with clear message
- [ ] Push to deploy
- [ ] Monitor build in Amplify
- [ ] Verify on live site

### Weekly Review
- [ ] Check AWS costs
- [ ] Review Amplify metrics
- [ ] Test site on mobile
- [ ] Check for security updates

---

**Last Updated:** $(date)
**Version:** 1.0
**Status:** ✅ Production Live

---

## 🚀 You're All Set!

Everything you need is in this reference guide. Bookmark this file for quick access to all your important links and commands.

**Happy coding!** 🎉
