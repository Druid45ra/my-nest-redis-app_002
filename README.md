# 🚀 my-nest-redis-app_002
Microserviciu Node.js robust, construit cu NestJS, PostgreSQL, Redis și orchestrare Docker — ideal ca punct de plecare pentru API-uri REST scalabile.

**Aplicatie demonstrativă NestJS + PostgreSQL + Redis + Docker**

[![Node.js](https://img.shields.io/badge/node-%3E%3D16.x-green)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/nestjs-10.x-red)](https://nestjs.com/)
[![PostgreSQL](https://img.shields.io/badge/postgres-13-blue)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/redis-alpine-orange)](https://redis.io/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](#)

---

## 📌 Descriere

`my-nest-redis-app` este un proiect demonstrativ care combină un server **NestJS** cu o bază de date **PostgreSQL**, cache **Redis** și un mediu de dezvoltare rapid cu **Docker Compose**.  
Este un punct de pornire excelent pentru orice aplicație **API REST** modernă care necesită **persistență** și **stocare temporară rapidă**.

---

## ⚙️ Stack tehnologic

- **NestJS** — Framework progresiv Node.js pentru aplicații server-side scalabile
- **PostgreSQL** — Bază de date relațională robustă
- **Redis** — Stocare cache in-memory pentru date temporare
- **TypeORM** — ORM modern pentru TypeScript
- **Docker Compose** — Orchestrare containere DB & Redis
- **pgAdmin** — UI web pentru gestionarea PostgreSQL

---

## 🚀 Cum rulezi aplicația local

1️⃣ Clonează acest repository:
```bash
git clone https://github.com/<user>/my-nest-redis-app.git
cd my-nest-redis-app

2️⃣ Instalează dependințele:
npm install

3️⃣ Pornește containerele PostgreSQL + Redis + pgAdmin:
docker compose up -d

4️⃣ Rulează aplicația în mod dezvoltare:
npm run start:dev

🌐 URL-uri utile

    API: http://localhost:3000/users

    pgAdmin: http://localhost:5050

        Email: admin@admin.com

        Parolă: admin

📁 Structura principală

my-nest-redis-app/
│
├── src/
│   ├── app.module.ts      # Modulul principal
│   ├── main.ts            # Bootstrap aplicație
│   ├── users/             # Modul users (TypeORM)
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── user.entity.ts
│   ├── redis/             # Modul Redis (ioredis)
│       ├── redis.module.ts
│       ├── redis.service.ts
│
├── docker-compose.yml     # Containere Postgres, Redis, pgAdmin
├── ormconfig.js           # Config DB TypeORM
├── tsconfig.json          # Config TypeScript
├── .env.example           # Config variabile mediu
├── .gitignore             # Fișiere de exclus din Git
├── README.md              # Documentație

✅ Funcționalități de bază

    CRUD simplu Users — stocat în PostgreSQL prin TypeORM

    Conexiune Redis — stocare/retrieval chei key/value

    Docker Compose — instant DB, Redis, pgAdmin în containere separate

    Scripturi npm — start & start:dev

🧩 Cum extinzi

✔️ Adaugă noi entități (ex. Posts, Tasks)
✔️ Folosește Redis ca cache layer pentru rezultate DB
✔️ Adaugă autentificare JWT/OAuth2
✔️ Implementează GraphQL, dacă vrei
📚 Resurse utile

    NestJS Docs

    TypeORM Docs

    Redis Docs

    Docker Compose Docs

🤝 Contribuții

Pull requests & Issues sunt binevenite!
Clonează, testează, contribuie și îmbunătățește!


📜 Licență

Proiect distribuit sub licență MIT.


