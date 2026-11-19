# --- Build Stage ---
FROM oven/bun:1.4.5-alpine as build

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# --- Production Stage ---
FROM caddy:latest AS production

WORKDIR /app

# Copy the built application from the build stage to Caddy's default static root
# Ensure this path matches the 'root' directive in your Caddyfile
COPY --from=build /app/dist /usr/share/caddy

# Copy your Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose the port Caddy will listen on
EXPOSE 80

# Command to run Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]