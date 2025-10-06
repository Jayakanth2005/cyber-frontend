# -------- Build Stage --------
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=production
RUN npm run build

# -------- Production Stage --------
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
# Important: Next.js must listen on 0.0.0.0, not localhost
CMD ["npx", "next", "start", "-H", "0.0.0.0", "-p", "3000"]
