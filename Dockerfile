# ---------- Stage 1: Build the React app ----------
FROM node:18-alpine AS build

# Assignment requirement: working dir name
WORKDIR /kaur_ravneet_final_site

# Install deps (use lockfile when present)
COPY package*.json ./
RUN npm ci --legacy-peer-deps || npm install

# Copy source and build (CI is unset so warnings don't fail build)
COPY . .
RUN CI= npm run build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:1.25-alpine

# SPA routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the production build from the builder stage
COPY --from=build /kaur_ravneet_final_site/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
