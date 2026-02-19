# Dokumentasi Belajar BE

Dokumentasi ini digunakan untuk ketika aku kembali lagi kesini gak bingung harus apa yang dilakukan.

## Prerequisite

- NodeJS
- PostgreSQL
- REST Clinet (Extenstion VSCode)

## Notes

Pada belajar ini, menggunakan bahasa javascript, dan ORM Prismanya itu versi 6. Karena versi 7 sangan susah ditembus karena menggunakan typescript dan cukup repot juga buat menginstallnya (yang saya coba ini).

## Studi Kasus

Membuat login dan register standar yang terkoneksi dengan PostgreSQL dan sudah ter bycrypt untuk passwordnya

## Langkah-langkahnya

1. Setup projek BE nya `npm init -y`
2. Lalu install express dan bcryptjs `npm i express bcryptjs`
3. Lalu install prisma versi 6 `npm i prisma@6 @prisma/client@6`
4. Lalu install nodemon `npm i -D nodemon`
5. Lalu buat prisma schema `npx prisma init`
6. Lalu kalo ada `prisma.config.ts` kita hapus aja
7. Lalu pada path `prisma/schema.prisma` ubah seperti sekarang
8. Lalu `.env` ubah sesuai settingan databasenya
9. Lalu generate prismanya `npx prisma generate`
10. Lalu migrate prisma `npx prisma migrate dev --bame init`
11. Lalu run BE nya `npm run dev` ini udah dibuat dulu di `package.json`
12. Terus baru test API nya bisa lewat test.rest atau pake postman

## Lanjutannya
Terus disini aku masukin ke docker untuk mencoba saja.
1. Buat `.dockerignore` = biar settingan gak di upload ke docker semua
2. Buat `Dockerfile` = langkah yang dilakukan di docker
3. Buat `docker-compose.yaml` = untuk menjalankan container dockernya
4. Lalu run `docker-compose up --build` = Menjalankan dockernya

## Lanjtuan lagi
Lalu dibuat biar bisa hot reload ketika ada perubahan dengan menambahkan
```
volumes:
      - .:/app            # Petakan folder saat ini ke folder /app di container
      - /app/node_modules # "Anonymous Volume" agar node_modules di container tidak tertimpa laptop
```
Pada `docker-compose.yaml` nya

## Lanjutan lagi


