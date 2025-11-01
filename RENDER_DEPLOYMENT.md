# Render Deployment Guide

This guide will help you deploy your Music Player app to Render.

## Two Deployment Options:

### **Option 1: Static Site (Recommended - Free & Simple)**

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → Select "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Name**: music-player (or any name you prefer)
   - **Branch**: main (or your deployment branch)
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 23.11.0 (or latest LTS)

5. Click "Create Static Site"

**Note**: The `_redirects` file in the `public` folder will handle React Router routing automatically.

---

### **Option 2: Web Service (More Reliable for Routing)**

If Option 1 doesn't work properly with React Router, use this option:

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → Select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: music-player
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 23.11.0

5. Click "Create Web Service"

This uses Express server (included in dependencies) to serve your app and handle routing properly.

---

## Common Issues & Solutions:

### Issue: Build fails
- **Solution**: Make sure Node version matches (23.11.0). You can also try Node 20 LTS.

### Issue: Routes return 404
- **Solution**: Use Option 2 (Web Service) instead of Static Site, or ensure `_redirects` file is in `public` folder.

### Issue: Assets not loading
- **Solution**: The `base: './'` in `vite.config.js` should fix this. Make sure it's committed.

### Issue: Port error
- **Solution**: Render automatically sets `PORT` environment variable. The server.js handles this.

---

## Testing Locally Before Deploying:

```bash
# Build the project
npm run build

# Test the production build
npm start
```

Then visit `http://localhost:3000` to test your app.

---

## After Deployment:

1. Your app will be available at: `https://your-app-name.onrender.com`
2. Render provides a free tier with automatic SSL
3. Free tier may spin down after inactivity (takes ~30 seconds to wake up)

---

**Recommended**: Start with **Option 1 (Static Site)** - it's simpler and faster. If you encounter routing issues, switch to **Option 2 (Web Service)**.

