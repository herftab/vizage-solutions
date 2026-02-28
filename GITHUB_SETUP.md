# 🐙 GitHub Setup Guide - Private Repository

## Step-by-Step Guide to Push Your Code to GitHub

---

## Option 1: Using GitHub Website (Easiest)

### 1️⃣ Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in (or create account)
2. Click the **"+"** icon in top right → **"New repository"**
3. Fill in the details:
   - **Repository name:** `vizage-solutions`
   - **Description:** "Digital signage e-commerce platform"
   - **Visibility:** Select **"Private"** ✅
   - **DO NOT** initialize with README, .gitignore, or license (you already have these)
4. Click **"Create repository"**

### 2️⃣ Push Your Code

GitHub will show you commands. Use these in your terminal:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/vizage-solutions.git

# Verify remote was added
git remote -v

# Push your code
git branch -M main
git push -u origin main
```

**Enter your GitHub credentials when prompted.**

### 3️⃣ Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files
3. Check that it shows "Private" badge

---

## Option 2: Using GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
# Login to GitHub
gh auth login

# Create private repository and push
gh repo create vizage-solutions --private --source=. --push
```

---

## 🔐 Authentication Options

### Option A: HTTPS with Personal Access Token (Recommended)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "Vizage Solutions Deployment"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)
7. When pushing, use token as password:
   - Username: your GitHub username
   - Password: paste the token

### Option B: SSH Keys (More Secure)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub:
# Settings → SSH and GPG keys → New SSH key → Paste key

# Use SSH remote instead
git remote add origin git@github.com:YOUR_USERNAME/vizage-solutions.git
```

---

## 📋 Complete Commands

Here's the exact sequence to run:

```bash
# 1. Check current status
git status
git log --oneline -5

# 2. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vizage-solutions.git

# 3. Verify remote
git remote -v

# 4. Rename branch to main (if needed)
git branch -M main

# 5. Push to GitHub
git push -u origin main
```

---

## ✅ Verification Checklist

After pushing, verify:
- [ ] Repository shows "Private" badge
- [ ] All files are visible on GitHub
- [ ] Commit history is preserved
- [ ] `.env` file is NOT visible (should be in .gitignore)
- [ ] Repository URL saved for later

---

## 🚨 Troubleshooting

### "Remote origin already exists"
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/vizage-solutions.git
```

### Authentication Failed
- Use Personal Access Token instead of password
- Or set up SSH keys

### Large Files Warning
- GitHub has 100MB file limit
- Check for large files: `git ls-files -s | sort -k 5 -n -r | head -10`

---

## 🎯 Next Steps After Push

1. ✅ Verify repository is private
2. ✅ Confirm all files uploaded
3. ✅ Save repository URL
4. ✅ Move to AWS Amplify setup

**Repository URL format:**
`https://github.com/YOUR_USERNAME/vizage-solutions`

---

## 🔒 Keeping It Private

Your repository is private, which means:
- ✅ Only you can see it
- ✅ You control who has access
- ✅ Code is not publicly visible
- ✅ Free for private repos on GitHub

To add collaborators later:
1. Go to repository → Settings → Collaborators
2. Click "Add people"
3. Enter their GitHub username

---

## 📞 Need Help?

If you encounter issues:
1. Check GitHub status: https://www.githubstatus.com/
2. Verify Git is installed: `git --version`
3. Check remote: `git remote -v`
4. Try SSH instead of HTTPS (or vice versa)

---

## ✨ Ready for AWS Amplify!

Once your code is on GitHub (private repo), you can:
1. Connect AWS Amplify to your private GitHub repo
2. AWS Amplify will ask for permission to access private repos
3. Select your vizage-solutions repository
4. Deploy!

AWS Amplify works perfectly with private repositories.
