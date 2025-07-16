FROM oven/bun:alpine AS base
WORKDIR /app

# Step 1: Install deps 
FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install 

# Step 2: Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Step 3: Run
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["bun", "next", "start"]