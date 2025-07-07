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

  ![image](https://github.com/user-attachments/assets/507c0cd0-6912-451f-a4ba-092f805646f1)
  ![image](https://github.com/user-attachments/assets/9b0a47c3-570c-4f81-86fc-db5b90fbc95d)
  ![image](https://github.com/user-attachments/assets/0e0c108e-58a8-487f-ad49-b7ed50227929)
  ![image](https://github.com/user-attachments/assets/9019a860-1419-4887-b7aa-3fa4d83a1ed2)
