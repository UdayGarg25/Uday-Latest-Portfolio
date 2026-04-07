# Vercel Deployment Guide - Portfolio

## ⚠️ CRITICAL PRE-DEPLOYMENT STEPS (DO THESE IN ORDER)

### Step 1: Clean Install (FIX Node 18 → 20 mismatch)
```bash
# Delete the old package-lock.json (has Node 18.x)
rm package-lock.json

# Clean npm cache
npm cache clean --force

# Fresh install with Node 20.x
npm install
```

**Why:** The old package-lock.json was locked to Node 18.x. This will regenerate it for Node 20.x.

---

### Step 2: Set Up Environment Variables on Vercel

Go to: **Vercel Dashboard → Project Settings → Environment Variables**

Add these variables (from your EmailJS account):
```
VITE_EMAILJS_SERVICE_ID = service_mwwjmgy
VITE_EMAILJS_TEMPLATE_ID = template_5orvugc
VITE_EMAILJS_PUBLIC_KEY = XSerwwXd6jHNWtFu4
```

**Why:** This secures your API keys instead of hardcoding them in source.

---

### Step 3: Local Build Test (BEFORE pushing)
```bash
npm run build
```

**Expected output:**
```
dist/index.html          0.00 kB
dist/assets/main-xxx.js  150.00 kB
✓ built in 2.34s
```

**If you get permission errors:**
```bash
# Run this to fix binary permissions
npm run build -- --force
```

---

### Step 4: Git Commit & Push
```bash
# Stage all changes
git add .

# Commit with meaningful message
git commit -m "Fix Vercel deployment: Node 20.x, proper build config, env vars"

# Push to repository
git push origin main
```

---

### Step 5: Deploy on Vercel
1. Go to https://vercel.com
2. Select your portfolio project
3. Click "Deploy" 
4. Wait for build to complete
5. Check build logs if any errors occur

---

## 📋 CONFIGURATION FILES REFERENCE

### package.json
- ✅ Node: 20.x (NOT 24.x - Vercel doesn't support 24.x yet)
- ✅ Build command: `npm run build`
- ✅ Output: `dist/` (Vite default)

### vercel.json
- ✅ buildCommand: `npm run build`
- ✅ outputDirectory: `dist`
- ✅ nodejs: `20.x`

### vite.config.js
- ✅ outDir: dist
- ✅ minify: terser
- ✅ sourcemap: false (for production)
- ✅ Manual chunks for better caching

### .gitignore
- ✅ Excludes node_modules
- ✅ Excludes dist/
- ✅ Excludes .env files

### .env.example
- ✅ Template for environment variables
- ✅ EmailJS configuration

---

## 🔧 TROUBLESHOOTING

### Issue: "Permission denied vite"
**Solution:** You already fixed this by switching from pnpm to npm. Don't use pnpm.

### Issue: "Cannot find module"
**Solution:** Run `npm install` again. Check case sensitivity in imports.

### Issue: "Build fails with ERR_INVALID_THIS"
**Solution:** Already fixed. You're using npm (not pnpm). Do not revert to pnpm.

### Issue: "Dependency fetch error"
**Solution:** Run `npm cache clean --force && npm install`

### Issue: "EmailJS not working"
**Solution:** Check Vercel Environment Variables are set. Verify Service ID, Template ID, and Public Key match your EmailJS account.

---

## 📊 PRE-FLIGHT CHECKLIST

- [ ] package-lock.json regenerated (shows Node 20.x)
- [ ] npm install completes without errors
- [ ] Local build succeeds: `npm run build`
- [ ] dist/ folder created with files
- [ ] .gitignore file created
- [ ] Environment variables set on Vercel
- [ ] Git pushed with all changes
- [ ] Vercel deployment successful

---

## ✅ YOU ARE READY TO DEPLOY!

No more "permission denied" errors.
No more pnpm dependency failures.
No more Node version mismatches.
