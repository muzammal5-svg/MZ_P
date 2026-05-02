# Admin Panel Guide

## Admin Panel Access Kaise Karein

### 1. Login Page
Admin panel access karne ke liye:
- Browser mein jaayen: `http://localhost:3000/admin` (development)
- Ya production mein: `https://yourdomain.com/admin`

### 2. Default Login Credentials
```
Username: admin
Password: admin123
```

**Important:** Production mein deploy karne se pehle ye credentials zaroor change karein!

---

## Admin Dashboard Features

### Projects Management

#### ✅ Add New Project
1. Dashboard mein "Add New Project" button click karein
2. Form mein ye details fill karein:
   - **Project Title**: Project ka naam (e.g., "Modern E-Commerce Store")
   - **Niche**: Project ki category (e.g., "E-Commerce Platform")
   - **Category**: WordPress, Shopify, Custom Web, ya eBay Templates
   - **Description**: Project ki short description
   - **Technologies**: Comma separated list (e.g., "React, TypeScript, Tailwind CSS")
   - **Image Path**: Image ka path (e.g., "/wordpress/project-name.png")
   - **Live URL**: Project ka live link (optional)
   - **Trust Score**: 0-100 ke beech number
   - **Is eBay Template**: Checkbox agar ye eBay template hai

3. "Add Project" button click karein

#### ✏️ Edit Project
1. Kisi bhi project card mein "Edit" button click karein
2. Form mein changes karein
3. "Update Project" button click karein

#### 🗑️ Delete Project
1. Project card mein "Delete" button click karein
2. Confirmation dialog mein "OK" click karein

---

## Image Upload Kaise Karein

### Step 1: Image Upload
1. Apni project ki image ko `/public` folder mein upload karein
2. Organized rakhne ke liye subfolder use karein:
   - WordPress projects: `/public/wordpress/`
   - Shopify projects: `/public/shopify/`
   - Frontend projects: `/public/frontend/`
   - eBay templates: `/public/ebay/`

### Step 2: Image Path Admin Panel Mein
Admin panel mein image path enter karte waqt:
```
/wordpress/project-name.png
/shopify/store-name.png
/frontend/app-name.png
```

**Note:** Path `/public` ke baad se start hota hai, `/public` likhne ki zarurat nahi.

---

## Data Storage

### LocalStorage
- Sare projects **browser ke localStorage** mein save hote hain
- Ye approach simple hai aur database ki zarurat nahi
- **Important**: Agar browser cache clear karenge to data delete ho jayega

### Data Backup
Apne projects ka backup lene ke liye:
1. Browser console open karein (F12)
2. Ye command run karein:
```javascript
console.log(localStorage.getItem('portfolioProjects'))
```
3. Output ko copy karke safe jagah save kar lein

### Data Restore
Backup restore karne ke liye:
1. Browser console open karein
2. Ye command run karein (apna backup data paste karein):
```javascript
localStorage.setItem('portfolioProjects', 'YOUR_BACKUP_DATA_HERE')
```

---

## Production Deployment

### Security Recommendations

#### 1. Change Default Credentials
`app/admin/page.tsx` file mein line 30-31 ko update karein:
```typescript
// Purana (default)
if (username === "admin" && password === "admin123") {

// Naya (strong password)
if (username === "yourusername" && password === "your-strong-password-123!@#") {
```

#### 2. Add Proper Authentication (Recommended)
Production ke liye proper authentication system use karein:
- NextAuth.js
- Firebase Authentication
- Auth0
- Clerk

#### 3. Use Database Instead of LocalStorage
LocalStorage sirf development/testing ke liye theek hai. Production mein:
- MongoDB
- PostgreSQL
- Firebase Firestore
- Supabase

---

## Troubleshooting

### Projects Show Nahi Ho Rahe
1. Browser console check karein (F12)
2. LocalStorage check karein:
```javascript
console.log(localStorage.getItem('portfolioProjects'))
```
3. Agar null hai to page refresh karein

### Admin Panel Access Nahi Ho Raha
1. URL check karein: `/admin` (not `/admin/`)
2. Browser cache clear karein
3. Incognito/Private window mein try karein

### Changes Reflect Nahi Ho Rahe
1. Page refresh karein (Ctrl+R ya Cmd+R)
2. Hard refresh karein (Ctrl+Shift+R ya Cmd+Shift+R)
3. Browser cache clear karein

---

## Tips & Best Practices

### 1. Image Optimization
- Images ko compress karein (TinyPNG, ImageOptim)
- Recommended size: 1200x750px
- Format: PNG ya WebP

### 2. Regular Backups
- Har hafte localStorage ka backup lein
- Important projects ka screenshot bhi save karein

### 3. Consistent Naming
- Image files ko descriptive names dein
- Spaces ki jagah hyphens use karein
- Lowercase letters use karein

### 4. Testing
- Har naya project add karne ke baad:
  - Home page check karein
  - Portfolio page check karein
  - Mobile view check karein

---

## Future Enhancements

Agar aap chahein to ye features add kar sakte hain:

1. **Image Upload UI**: Direct admin panel se images upload karein
2. **Database Integration**: MongoDB ya Firebase use karein
3. **Multi-user Support**: Multiple admins ke liye roles
4. **Analytics**: Project views aur clicks track karein
5. **Bulk Operations**: Multiple projects ek saath edit/delete
6. **Export/Import**: Projects ko JSON file mein export karein

---

## Support

Agar koi problem ho to:
1. Browser console errors check karein
2. Network tab mein API calls check karein
3. LocalStorage data verify karein

Happy Managing! 🚀
