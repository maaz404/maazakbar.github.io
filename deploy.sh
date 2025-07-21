#!/bin/bash

echo "🚀 Setting up Portfolio for GitHub Deployment"
echo "============================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already exists"
fi

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding remote origin..."
    read -p "Enter your GitHub repository URL: " repo_url
    git remote add origin $repo_url
else
    echo "✅ Remote origin already configured"
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Build the project
echo "🏗️  Building project..."
npm run build

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Commit if there are changes
if ! git diff --staged --quiet; then
    echo "💾 Committing changes..."
    git commit -m "🚀 Deploy portfolio website with GitHub Actions"
    
    echo "🚀 Pushing to GitHub..."
    git push -u origin main
    
    echo ""
    echo "🎉 Portfolio setup complete!"
    echo "📱 Your website will be live at: https://maazakbar.tech"
    echo "⏱️  Deployment usually takes 1-2 minutes"
    echo "👀 Check deployment status at: https://github.com/maaz404/maazakbar.github.io/actions"
    echo ""
    echo "⚙️  Don't forget to:"
    echo "   1. Configure DNS records for maazakbar.tech"
    echo "   2. Enable GitHub Pages in repository settings"
    echo "   3. Set custom domain to maazakbar.tech in Pages settings"
else
    echo "✅ No changes to commit"
fi
