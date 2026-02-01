# SAI Intelligence Tech Group — Landing Page

High-end, futuristic landing page for **SAI Intelligence Tech Group** (www.sai-technology.com).

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** icons

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Если не запускается:**

- **Ошибка `caniuse-lite/dist/unpacker/agents`** — переустановите зависимости:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run dev
  ```
- **Ошибка `EPERM` или порт занят** — используйте альтернативный порт:
  ```bash
  npm run dev:alt
  ```
  Затем откройте [http://127.0.0.1:3002](http://127.0.0.1:3002).

## Build

```bash
npm run build
npm start
```

## Деплой на Vercel и домен www.sai-technology.com

Пошаговая инструкция: **[DEPLOY.md](./DEPLOY.md)**.

## Features

- **Header**: Logo with wide letter spacing, minimal nav, mobile menu
- **Hero**: Headline “Redefining Intelligence through Ecosystems” with subtext
- **Product Showcase**: Three interactive glowing cards (Talaix, AICV, Sarkhan.dev) with hover-to-glow
- **Expertise**: Enterprise Architecture, AI Integration, Digital Transformation
- **Design**: Deep dark mode, Electric Blue & Cyber Lime accents, glassmorphism, grid background

## Responsive

Layout and interactions are responsive for mobile and desktop.
