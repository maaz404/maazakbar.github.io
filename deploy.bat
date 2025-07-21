@echo off
echo 🚀 Setting up Portfolio for GitHub Deployment
echo =============================================

REM Check if we're in a git repository
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
    git branch -M main
) else (
    echo ✅ Git repository already exists
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🔗 Adding remote origin...
    set /p repo_url="Enter your GitHub repository URL: "
    git remote add origin %repo_url%
) else (
    echo ✅ Remote origin already configured
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
) else (
    echo ✅ Dependencies already installed
)

REM Build the project
echo 🏗️  Building project...
npm run build

REM Add all files to git
echo 📝 Adding files to git...
git add .

REM Check if there are changes to commit
git diff --staged --quiet
if errorlevel 1 (
    echo 💾 Committing changes...
    git commit -m "🚀 Deploy portfolio website with GitHub Actions"
    
    echo 🚀 Pushing to GitHub...
    git push -u origin main
    
    echo.
    echo 🎉 Portfolio setup complete!
    echo 📱 Your website will be live at: https://maazakbar.tech
    echo ⏱️  Deployment usually takes 1-2 minutes
    echo 👀 Check deployment status at: https://github.com/maaz404/maazakbar.github.io/actions
    echo.
    echo ⚙️  Don't forget to:
    echo    1. Configure DNS records for maazakbar.tech
    echo    2. Enable GitHub Pages in repository settings
    echo    3. Set custom domain to maazakbar.tech in Pages settings
) else (
    echo ✅ No changes to commit
)

pause
