# ---------- Stage 1 : build de l'application React ----------
FROM node:20-alpine AS build

WORKDIR /app

# On copie d'abord les fichiers de dépendances pour profiter du cache Docker
COPY package.json package-lock.json ./
RUN npm ci

# On copie le reste du code source et on build
COPY . .
RUN npm run build

# ---------- Stage 2 : image finale servie par Nginx ----------
FROM nginx:1.27-alpine AS production

# Configuration Nginx personnalisée (SPA + gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# On copie uniquement le build (dist/) produit au stage précédent
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]