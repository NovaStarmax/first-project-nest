# ✅ Projet NestJS + Prisma (SQLite)

Ce projet utilise NestJS avec Prisma comme ORM et une base SQLite locale.

---

## 📦 Installation (première fois)

1. **Cloner le projet**
```bash
git clone <repo-url>
cd <nom-du-projet>
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Générer le client Prisma**
```bash
npx prisma generate
```

4. **Créer la base de données et appliquer les migrations**
```bash
npx prisma migrate dev --name init
```

---

## ▶️ Lancer le serveur NestJS

```bash
npm run start:dev
```

> L’API est maintenant disponible sur `http://localhost:3000`

---

## 🧪 Accéder à Prisma Studio

Prisma Studio est une interface graphique pour voir et modifier les données.

```bash
npx prisma studio
```

> Cela ouvre `http://localhost:5555` dans ton navigateur.

---

## ⚙️ Configuration Prisma

### `.env`

```env
DATABASE_URL="file:./dev.db"
```

### `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/prisma"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Todo {
  id        Int      @id @default(autoincrement())
  task      String
  stateTodo String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 🧠 Résumé pour reprendre le projet sur un autre PC

```bash
git pull
npm install
npx prisma generate
npx prisma migrate dev
npm run start:dev
npx prisma studio
```

---

## 📁 Structure du projet

```
.
├── prisma/
│   └── schema.prisma
├── generated/prisma/
├── src/
│   └── prisma/prisma.service.ts
├── dev.db
├── .env
└── ...
```

---

Tu peux maintenant lancer le projet et utiliser Prisma en local sans configuration supplémentaire.
