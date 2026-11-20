
FROM node:22-alpine

WORKDIR /app

# Install OpenSSL for Prisma compatibility
RUN apk add --no-cache openssl

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy backend source
COPY . .

# Generate Prisma Client
# A placeholder URL is sufficient; generation does not connect to the database.
RUN DIRECT_URL="postgresql://user:password@localhost:5432/parkly?schema=public" npx prisma generate

EXPOSE 5000

CMD ["npm", "start"]
