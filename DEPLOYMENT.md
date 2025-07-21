# Deployment Instructions for maazakbar.tech

## GitHub Actions Automatic Deployment

### Setup Steps:

1. **Repository Settings:**

   - Go to your GitHub repository: `https://github.com/maaz404/maazakbar.github.io`
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - The workflow will automatically deploy when you push to main branch

2. **Domain Configuration:**

   - In the same Pages settings, add custom domain: `maazakbar.tech`
   - GitHub will automatically create a CNAME file (already exists in your repo)

3. **DNS Configuration:**
   Configure these DNS records with your domain provider:

   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: maaz404.github.io
   ```

### How It Works:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Automatic Build & Deploy:**
   - GitHub Actions will automatically trigger
   - Build the React app (`npm run build`)
   - Deploy to GitHub Pages
   - Your site will be live at `https://maazakbar.tech`

### Workflow Details:

The `.github/workflows/deploy.yml` file contains:

- **Build Job:** Installs dependencies, builds the React app
- **Deploy Job:** Deploys the built files to GitHub Pages
- **Triggers:** Runs on every push to main branch (excludes README changes)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
# Opens http://localhost:3000

# Build for production (test before deploying)
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## File Structure for GitHub Pages

```
maazakbar.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── index.html              # Main HTML template
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # SEO robots file
│   └── CNAME                   # Custom domain config
├── src/
│   ├── components/             # React components
│   ├── App.js                  # Main app
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json                # Dependencies & scripts
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # Documentation
```

## Deployment Monitoring

1. **Check Build Status:**

   - Go to `Actions` tab in your GitHub repository
   - Monitor the deployment workflow
   - Check for any build errors

2. **View Live Site:**
   - Visit `https://maazakbar.tech`
   - Changes should appear within 1-2 minutes after successful deployment

## Troubleshooting

### Common Issues:

1. **DNS Not Propagating:**

   - DNS changes can take 24-48 hours to propagate globally
   - Use `nslookup maazakbar.tech` to check DNS status

2. **Build Failures:**

   - Check the Actions tab for error logs
   - Common issues: missing dependencies, syntax errors
   - Fix locally first: `npm run build`

3. **Site Not Updating:**

   - Hard refresh browser (Ctrl+F5)
   - Check if workflow completed successfully
   - Verify you pushed to the main branch

4. **Custom Domain Issues:**
   - Ensure CNAME file contains only: `maazakbar.tech`
   - Check GitHub Pages settings
   - Verify DNS configuration

### Manual Deployment (Backup Method):

If GitHub Actions fails, you can deploy manually:

```bash
# Build the project
npm run build

# Install gh-pages (if needed)
npm install -g gh-pages

# Deploy manually
gh-pages -d build -b gh-pages
```

## Performance Optimization

The build process includes:

- ✅ Code splitting and minification
- ✅ CSS optimization with Tailwind
- ✅ Image optimization
- ✅ PWA features
- ✅ SEO meta tags

## Security

- ✅ HTTPS automatically enabled
- ✅ No sensitive data in public repository
- ✅ Secure headers via GitHub Pages

Your website will be automatically deployed and live at `https://maazakbar.tech` whenever you push changes to GitHub!
