<!--
 * @Author: wangtao
 * @Date: 2021-11-14 11:25:16
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-02 20:50:19
 * @Description: file content
-->
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

开发
```
npm run dev
```


pm2部署
```
配置package.json   
"start": "next build && next start",
执行
pm2 start npm -- run start
```