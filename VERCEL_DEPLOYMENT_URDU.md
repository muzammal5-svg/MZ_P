# 🚀 Vercel Par Website Upload Karne Ka Tareeqa

## آسان اردو گائیڈ - قدم بہ قدم

---

## 📋 شروع کرنے سے پہلے

آپ کو یہ چیزیں چاہیے:
- ✅ آپ کا پروجیکٹ کوڈ تیار ہو
- ✅ انٹرنیٹ کنکشن
- ✅ 15-20 منٹ کا وقت

---

## قدم 1: Git Install کریں (اگر نہیں ہے)

### چیک کریں Git موجود ہے یا نہیں:
PowerShell یا Terminal کھولیں اور لکھیں:
```bash
git --version
```

**اگر version نمبر آئے** → Git موجود ہے ✅
**اگر error آئے** → Git install کریں:

1. یہ لنک کھولیں: https://git-scm.com/download/win
2. Download کریں
3. Install کریں (سب Next پر کلک کریں)
4. Finish کریں

---

## قدم 2: Git شروع کریں اپنے Project میں

### Terminal کھولیں:
1. VS Code میں اپنا پروجیکٹ کھولیں
2. Terminal کھولیں (View → Terminal)
3. یہ commands لکھیں ایک ایک کر کے:

```bash
# Git شروع کریں
git init

# سب files add کریں
git add .

# پہلا commit بنائیں
git commit -m "Initial commit"
```

**نتیجہ**: آپ کو "XX files changed" کا message نظر آئے گا ✅

---

## قدم 3: GitHub Account بنائیں

### اگر آپ کے پاس پہلے سے GitHub account ہے → قدم 4 پر جائیں

### نیا Account بنانے کے لیے:
1. یہ لنک کھولیں: https://github.com
2. "Sign up" پر کلک کریں
3. اپنا email لکھیں
4. Password بنائیں (مضبوط password)
5. Username چنیں (مثال: muzammal-dev)
6. Puzzle حل کریں
7. "Create account" پر کلک کریں
8. اپنی email check کریں اور verify کریں

---

## قدم 4: GitHub پر Repository بنائیں

### نیا Repository بنانے کے لیے:
1. GitHub پر login کریں
2. اوپر دائیں طرف "+" پر کلک کریں
3. "New repository" پر کلک کریں
4. یہ معلومات بھریں:
   - **Repository name**: `portfolio-website`
   - **Description**: "My portfolio website"
   - **Public** چنیں (مفت ہے)
   - "Initialize with README" کو **چیک نہ کریں**
5. "Create repository" پر کلک کریں

### Repository URL کاپی کریں:
آپ کو ایک URL نظر آئے گا جیسے:
```
https://github.com/YOUR-USERNAME/portfolio-website.git
```
اس کو کاپی کر لیں! 📋

---

## قدم 5: Code GitHub پر Upload کریں

### Terminal میں یہ commands لکھیں:
**نوٹ**: `YOUR-USERNAME` کی جگہ اپنا GitHub username لکھیں

```bash
# GitHub سے connect کریں
git remote add origin https://github.com/YOUR-USERNAME/portfolio-website.git

# Branch کا نام main رکھیں
git branch -M main

# Code upload کریں
git push -u origin main
```

### اگر Password مانگے:
- **Username**: آپ کا GitHub username
- **Password**: Personal Access Token استعمال کریں (نیچے دیکھیں)

### Personal Access Token کیسے بنائیں:
1. یہ لنک کھولیں: https://github.com/settings/tokens
2. "Generate new token" پر کلک کریں
3. "Generate new token (classic)" چنیں
4. Name لکھیں: "Vercel Deploy"
5. "repo" کو چیک کریں ✅
6. نیچے "Generate token" پر کلک کریں
7. **Token کو کاپی کر لیں** (دوبارہ نہیں ملے گا!)
8. یہ token password کی جگہ استعمال کریں

### چیک کریں:
1. اپنی GitHub repository کھولیں
2. Page refresh کریں
3. آپ کو اپنی سب files نظر آنی چاہیے ✅

---

## قدم 6: Vercel Account بنائیں

### Sign Up کریں:
1. یہ لنک کھولیں: https://vercel.com
2. "Sign Up" پر کلک کریں
3. "Continue with GitHub" پر کلک کریں
4. GitHub میں login کریں (اگر پوچھے)
5. "Authorize Vercel" پر کلک کریں

**مبارک ہو! آپ کا Vercel account بن گیا** ✅

---

## قدم 7: Website Deploy کریں

### Project Import کریں:
1. Vercel dashboard میں "Add New..." پر کلک کریں
2. "Project" پر کلک کریں
3. اپنی `portfolio-website` repository تلاش کریں
4. "Import" پر کلک کریں

### Settings:
- **Project Name**: جو مرضی رکھیں (مثال: muzammal-portfolio)
- **Framework**: Next.js (خود آ جائے گا)
- **باقی سب settings**: کچھ نہ بدلیں ✅

### Deploy کریں:
1. بڑے "Deploy" button پر کلک کریں
2. 2-3 منٹ انتظار کریں ⏳
3. آپ کو building کا process نظر آئے گا

---

## 🎉 قدم 8: آپ کی Website LIVE ہے!

### جب deployment مکمل ہو:
- آپ کو confetti نظر آئے گی 🎊
- آپ کا URL: `https://your-project.vercel.app`
- URL پر کلک کریں اور اپنی website دیکھیں!

### اپنی Website Share کریں:
- LinkedIn پر
- Upwork/Fiverr profile میں
- Social media پر
- Email signature میں

---

## 🔄 Website Update کیسے کریں (مستقبل میں)

### جب بھی آپ code میں تبدیلی کریں:

```bash
# تبدیلیاں add کریں
git add .

# Commit بنائیں
git commit -m "Website updated"

# GitHub پر push کریں
git push origin main
```

**خودکار Deployment**: Vercel خود ہی آپ کی website update کر دے گا! ✅

---

## 🎯 Custom Domain لگانا (اختیاری)

### اگر آپ کے پاس domain ہے (مثال: muzammal.dev):

1. Vercel dashboard میں اپنا project کھولیں
2. "Settings" tab پر کلک کریں
3. "Domains" پر کلک کریں
4. "Add" پر کلک کریں
5. اپنا domain لکھیں: `muzammal.dev`
6. "Add" پر کلک کریں

### DNS Settings:
Vercel آپ کو DNS records دے گا:
- اپنے domain provider میں login کریں
- DNS settings میں جائیں
- Vercel کے دیے ہوئے records add کریں
- 24-48 گھنٹے انتظار کریں

---

## ❓ مسائل اور حل

### مسئلہ 1: Git install نہیں ہو رہا
**حل**: https://git-scm.com/download/win سے دوبارہ download کریں

### مسئلہ 2: GitHub password غلط ہے
**حل**: Password کی جگہ Personal Access Token استعمال کریں

### مسئلہ 3: Build failed
**حل**: 
```bash
# پہلے locally test کریں
npm run build
```
اگر یہ کام کرے تو Vercel پر دوبارہ deploy کریں

### مسئلہ 4: Images نہیں آ رہیں
**حل**: 
- Image paths check کریں
- Images `public/` folder میں ہونی چاہیے
- Git میں images commit ہونی چاہیے

---

## 📊 Vercel Free Plan

### آپ کو مفت میں ملتا ہے:
- ✅ لامحدود deployments
- ✅ 100 GB bandwidth ہر مہینے
- ✅ خودکار HTTPS/SSL
- ✅ دنیا بھر میں تیز loading
- ✅ Custom domains (لامحدود)
- ✅ خودکار Git integration

**Portfolio website کے لیے بالکل کافی ہے!** 🎉

---

## 📱 Vercel Mobile App (اختیاری)

### App Download کریں:
- **Android**: Play Store سے "Vercel" تلاش کریں
- **iOS**: App Store سے "Vercel" تلاش کریں

### فوائد:
- Deployments دیکھیں
- Analytics دیکھیں
- Notifications ملیں
- Mobile سے manage کریں

---

## ✅ Deployment Checklist

Deploy کرنے کے بعد چیک کریں:
- [ ] Website صحیح load ہو رہی ہے
- [ ] سب pages کام کر رہے ہیں
- [ ] Images آ رہی ہیں
- [ ] Contact form کام کر رہا ہے
- [ ] Mobile پر صحیح نظر آ رہی ہے
- [ ] کوئی error نہیں ہے
- [ ] HTTPS (تالا 🔒) نظر آ رہا ہے

---

## 🎓 اہم Commands یاد رکھیں

### Git Commands:
```bash
# Status دیکھیں
git status

# تبدیلیاں add کریں
git add .

# Commit بنائیں
git commit -m "آپ کا message"

# GitHub پر push کریں
git push origin main
```

### NPM Commands:
```bash
# Dependencies install کریں
npm install

# Development server چلائیں
npm run dev

# Production build بنائیں
npm run build
```

---

## 📞 مدد چاہیے؟

### رابطہ:
- **Email**: muzammalzaheer571@gmail.com
- **WhatsApp**: +92-341-735-9571

### مفید Links:
- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 مبارک ہو!

آپ کی website اب:
- ✅ انٹرنیٹ پر live ہے
- ✅ دنیا بھر میں accessible ہے
- ✅ خودکار deploy ہوتی ہے
- ✅ تیز اور محفوظ ہے
- ✅ مفت میں hosted ہے

**اپنی website دنیا کے ساتھ share کریں!** 🚀

---

## 📚 اگلے قدم

1. **Website Share کریں**
   - LinkedIn profile میں add کریں
   - Social media پر share کریں
   - Upwork/Fiverr profiles میں add کریں

2. **Performance Monitor کریں**
   - Vercel Analytics دیکھیں
   - Google Analytics لگائیں
   - Search Console check کریں

3. **بہتری جاری رکھیں**
   - Blog posts لکھیں
   - Portfolio projects update کریں
   - SEO improve کریں

---

**آپ کی Website**: `https://your-project.vercel.app`

**تاریخ**: 2 مئی 2026

**حالت**: 🟢 LIVE

---

**کامیابی کی دعائیں!** 🎊
