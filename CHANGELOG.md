# 📑 CHANGELOG

Toate modificările importante ale proiectului **my-nest-redis-app** vor fi documentate aici.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
Proiectul folosește [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2025-07-08

### Adăugat
- Inițializat proiect NestJS cu TypeORM, PostgreSQL și Redis.
- Adăugat structură Users (entitate, controller, service).
- Configurat Docker Compose pentru PostgreSQL, Redis, pgAdmin.
- Adăugat modul Redis cu `ioredis`.
- Creat scripturi de rulare: `start`, `start:dev`.
- Creat `README.md` profesionist.

---

## [Unreleased]

### În plan
- Adăugare autentificare JWT.
- Implementare Redis cache layer pentru Users.
- Adăugare testare unitară.
- Integrare CI/CD (GitHub Actions).
