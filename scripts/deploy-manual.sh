#!/bin/bash

# Manual deployment script for AWS S3 + CloudFront
# Usage: ./scripts/deploy-manual.sh

set -e

echo "🚀 Starting deployment to AWS..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if required environment variables are set
if [ -z "$S3_BUCKET_NAME" ] || [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "❌ Required environment variables are not set."
    echo "Please set S3_BUCKET_NAME and CLOUDFRONT_DISTRIBUTION_ID"
    exit 1
fi

# Build the Next.js application
echo "📦 Building Next.js application..."
npm run build

# Export static site (if using static export)
echo "📤 Exporting static site..."
npm run export || echo "⚠️  Static export not configured, using standard build"

# Sync to S3
echo "☁️  Uploading to S3..."
aws s3 sync out/ s3://$S3_BUCKET_NAME --delete --cache-control "public, max-age=31536000, immutable"

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at your CloudFront domain in a few minutes."
