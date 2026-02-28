#!/bin/bash

# AWS Infrastructure Setup Script
# This script helps you set up the AWS infrastructure using Terraform

set -e

echo "🏗️  Vizage Solutions - AWS Infrastructure Setup"
echo "================================================"
echo ""

# Check if Terraform is installed
if ! command -v terraform &> /dev/null; then
    echo "❌ Terraform is not installed."
    echo "Please install Terraform from: https://www.terraform.io/downloads"
    exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed."
    echo "Please install AWS CLI from: https://aws.amazon.com/cli/"
    exit 1
fi

# Check AWS credentials
echo "🔐 Checking AWS credentials..."
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials are not configured."
    echo "Please run: aws configure"
    exit 1
fi

echo "✅ AWS credentials verified"
echo ""

# Navigate to terraform directory
cd terraform

# Initialize Terraform
echo "🔧 Initializing Terraform..."
terraform init

# Validate configuration
echo "✅ Validating Terraform configuration..."
terraform validate

# Plan infrastructure
echo "📋 Planning infrastructure changes..."
terraform plan -out=tfplan

echo ""
echo "Review the plan above. To apply these changes, run:"
echo "  cd terraform && terraform apply tfplan"
echo ""
echo "After applying, you'll receive:"
echo "  - S3 bucket name"
echo "  - CloudFront distribution ID"
echo "  - CloudFront domain name"
echo "  - Cognito user pool details"
