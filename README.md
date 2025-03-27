## fishing-nuxt-front

fishing を Nuxt.js で作成したフロントリポジトリです。

## 環境

- フレームワーク：Nuxt.js 3.16.1
- ライブラリ：Vue.js 3.5.13
- 言語：TypeScript 5.8.2
- 非同期ライブラリ：axios 1.8.4
- Form ライブラリ：VeeValidate
- バリデーションライブラリ：zod
- 状態管理ライブラリ：Pinia
- UI ライブラリ：NuxtUi 3.0.1
- UI ライブラリ：tailwindcss 4.0.17
- アイコン：NuxtIcon 1.11.0

## 環境構築

下記の流れに従って、環境構築を行なってください。

#### clone

```
git clone git@github.com:NarumiNaito/fishing-nuxt-front.git
```

#### build

```
docker compose build
```

#### コンテナ作成

```
docker compose up -d
```

#### コンテナへの接続

```
docker compose exec nuxt /bin/sh
```
