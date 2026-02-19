# Gunakan node versi terbaru yang stabil
FROM node:20-alpine

# Set folder kerja di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies (termasuk Prisma)
RUN npm install

# Copy semua file project (termasuk folder prisma)
COPY . .

# Generate Prisma Client (PENTING!)
RUN npx prisma generate

# Expose port aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "dev"]