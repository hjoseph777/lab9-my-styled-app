#!/bin/bash

# Script to fix conflicting files between pages/ and app/ directories
# This will remove the pages files that conflict with app router files

echo "🔍 Looking for conflicting files..."

# Create a backup directory if it doesn't exist
mkdir -p ./pages-backup

# Handle index.js conflict
if [ -f "./pages/index.js" ]; then
    echo "📋 Found conflicting file: pages/index.js"
    echo "💾 Creating backup in pages-backup/index.js.bak"
    cp "./pages/index.js" "./pages-backup/index.js.bak"
    echo "🗑️  Removing pages/index.js"
    rm "./pages/index.js"
    echo "✅ Removed pages/index.js successfully"
else
    echo "ℹ️  pages/index.js not found, skipping"
fi

# Handle styled.js conflict
if [ -f "./pages/styled.js" ]; then
    echo "📋 Found conflicting file: pages/styled.js"
    echo "💾 Creating backup in pages-backup/styled.js.bak"
    cp "./pages/styled.js" "./pages-backup/styled.js.bak"
    echo "🗑️  Removing pages/styled.js"
    rm "./pages/styled.js"
    echo "✅ Removed pages/styled.js successfully"
else
    echo "ℹ️  pages/styled.js not found, skipping"
fi

# Handle _app.js (not directly conflicting but no longer needed)
if [ -f "./pages/_app.js" ]; then
    echo "📋 Found obsolete file: pages/_app.js"
    echo "💾 Creating backup in pages-backup/_app.js.bak"
    cp "./pages/_app.js" "./pages-backup/_app.js.bak"
    echo "🗑️  Removing pages/_app.js"
    rm "./pages/_app.js"
    echo "✅ Removed pages/_app.js successfully"
else
    echo "ℹ️  pages/_app.js not found, skipping"
fi

# Check if pages directory is empty and remove it if it is
if [ -d "./pages" ] && [ -z "$(ls -A ./pages)" ]; then
    echo "📂 pages directory is empty, removing it"
    rmdir "./pages"
    echo "✅ Removed empty pages directory"
fi

echo "🎉 Cleanup complete! You can now run 'npm run build' again."
