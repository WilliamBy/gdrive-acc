# gdrive-acc

[English](README.md) | [中文](README.zh-CN.md)

## TL;DR

Accelerate your Google Drive docs or files sharing with Cloudflare CDN cache

## Deploy

1. Fork this repo
2. Go to your Cloudflare worker management page: https://dash.cloudflare.com/
3. Add new worker from Github repo
4. Choose the forked one and deploy

## Usage

1. Share your target file
2. Copy shared link
3. Substitute domain part with your worker's route
4. Now visit this new url!

## Features

- CDN caching for faster access
- Preserves all query parameters
- User-Agent spoofing for better compatibility
- Detailed error messages