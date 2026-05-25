# NyxChat 完整可编译方案

## 已合并内容

- Android React 前端框架
- 多页面 UI
- Runtime Engine
  - Emotion Engine
  - Lorebook Engine
  - Memory Manager
  - Relation Engine
  - Group Scheduler
  - Persona Constraint
  - Prompt Pipeline

## 安装

```bash
npm install
```

## 启动开发环境

```bash
npm run dev
```

## 打包

```bash
npm run build
```

## Android 打包

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init
npx cap add android
npm run build
npx cap sync
npx cap open android
```
