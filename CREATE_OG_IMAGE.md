# How to Create Your Open Graph (OG) Image

## What is an OG Image?
An Open Graph image is the preview image that appears when your website is shared on social media platforms (Facebook, Twitter, LinkedIn, WhatsApp, etc.).

## Required Specifications

### Dimensions:
- **Width**: 1200px
- **Height**: 630px
- **Aspect Ratio**: 1.91:1
- **Format**: JPG or PNG (JPG recommended for smaller file size)
- **File Size**: Under 1MB (ideally under 300KB)

### File Location:
Save as: `public/og-image.jpg`

---

## Design Recommendations

### Content to Include:
1. **Your Name**: "Muzammal" or "Muhammad Muzammal"
2. **Title**: "Full-Stack Web Developer"
3. **Specializations**: "WordPress | Shopify | React | Next.js"
4. **Key Stats**: "100+ Projects | 5.0 Rating | 5+ Years"
5. **Your Photo**: Professional headshot (optional but recommended)
6. **Background**: Clean gradient (emerald to cyan: #10b981 to #06b6d4)

### Design Elements:
- Use Poppins font family (matches your site)
- Keep text large and readable (minimum 40px for body text)
- Use high contrast for readability
- Include your logo/brand mark
- Add subtle geometric shapes or patterns
- Ensure important content is in the "safe zone" (center 80%)

---

## Design Tools

### Option 1: Canva (Easiest)
1. Go to [Canva.com](https://canva.com)
2. Create custom size: 1200 x 630 px
3. Use template or start from scratch
4. Add your content following recommendations above
5. Download as JPG

### Option 2: Figma (Professional)
1. Create new frame: 1200 x 630 px
2. Design your OG image
3. Export as JPG (quality: 80-90%)

### Option 3: Photoshop
1. New document: 1200 x 630 px, 72 DPI
2. Design your image
3. Save for Web (JPG, quality: 80)

### Option 4: Online Tools
- [OG Image Generator](https://og-image.vercel.app/)
- [Social Image Generator](https://www.bannerbear.com/tools/social-image-generator/)
- [Placid.app](https://placid.app/)

---

## Quick Template Design

### Layout Structure:
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Logo/Badge]                                   │
│                                                 │
│         MUZAMMAL                                │
│         Full-Stack Web Developer                │
│                                                 │
│    WordPress | Shopify | React | Next.js       │
│                                                 │
│  100+ Projects    5.0 Rating    5+ Years        │
│                                                 │
│                              [Your Photo]       │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Color Scheme:
- **Background**: Linear gradient from #10b981 (top-left) to #06b6d4 (bottom-right)
- **Text**: White (#ffffff) for main text
- **Accent**: Light cyan (#e0f2fe) for secondary text
- **Overlay**: Semi-transparent white shapes for depth

---

## Example Text Content

### Main Heading:
```
MUZAMMAL
Full-Stack Web Developer
```

### Subheading:
```
WordPress • Shopify • React • Next.js • Laravel
```

### Stats Row:
```
100+ Projects Delivered  |  5.0 ⭐ Rating  |  5+ Years Experience
```

### Call to Action (Optional):
```
muzammal.dev
```

---

## Testing Your OG Image

### After creating and saving to `public/og-image.jpg`:

1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Check**: https://www.opengraph.xyz/

### What to Check:
- Image displays correctly
- No text is cut off
- Colors look good
- File loads quickly
- Dimensions are correct

---

## Alternative: Generate Programmatically

If you want to generate OG images dynamically for different pages, consider:

### Next.js OG Image Generation:
```typescript
// app/api/og/route.tsx
import { ImageResponse } from 'next/og'

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
        }}
      >
        <h1 style={{ fontSize: 80, color: 'white' }}>MUZAMMAL</h1>
        <p style={{ fontSize: 40, color: '#e0f2fe' }}>Full-Stack Web Developer</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
```

---

## Quick Checklist

- [ ] Image is 1200x630 pixels
- [ ] File size is under 1MB
- [ ] Saved as `public/og-image.jpg`
- [ ] Text is readable and not cut off
- [ ] Brand colors match website
- [ ] Tested on Facebook Debugger
- [ ] Tested on Twitter Card Validator
- [ ] Image looks good on mobile preview

---

## Need Help?

If you need assistance creating your OG image:
1. Hire a designer on Fiverr (search "OG image design")
2. Use Canva templates (search "Open Graph image")
3. Contact a graphic designer

**Estimated Time**: 30-60 minutes
**Estimated Cost**: Free (DIY) or $5-20 (designer)

---

**Note**: Once you create the image, the website will automatically use it for social media sharing. No code changes needed!
