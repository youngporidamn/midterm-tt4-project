# Layer 1 - Build Frontend
FROM node:lts-alpine AS builder
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install
COPY ./app/ ./
RUN npm run build  
# The frontend build will be in /dist

# Layer 2 - Set up Backend & Nginx
FROM debian:bookworm-slim

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y \
    nginx \
    nodejs \
    npm \
    gettext \
    && apt-get clean

RUN npm install -g pm2

WORKDIR /app

## API (Backend)
COPY ./api/index.js /app/
COPY ./api/package*.json /app/
RUN npm install

# Frontend (Static Files)
COPY --from=builder /app/dist /var/www/html

# Copy Nginx Configuration
COPY ./default.conf /etc/nginx/sites-enabled/default

# Set Environment Variables
RUN echo "API_PORT=3000" >> /app/.env

# **Expose the correct ports**
EXPOSE 80 3000  # Nginx on 80, API on 3000

# Ensure entrypoint script is executable
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
