# gdrive-acc

[English](README.md) | [中文](README.zh-CN.md)

## 简介

通过 Cloudflare CDN 缓存加速您的 Google Drive 文档或文件分享

## 部署步骤

1. Fork 本仓库
2. 访问您的 Cloudflare worker 管理页面：https://dash.cloudflare.com/
3. 从 Github 仓库添加新的 worker
4. 选择您 fork 的仓库并部署

## 使用方法

1. 分享您的目标文件
2. 复制分享链接
3. 将域名部分替换为您的 worker 路由
4. 现在访问这个新链接！

## 功能特点

- CDN 缓存加速访问
- 保留所有查询参数
- 用户代理模拟以提高兼容性
- 详细的错误信息提示 