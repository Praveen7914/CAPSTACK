FROM node:18
WORKDIR /app
COPY ../backend-api/package*.json ./
RUN npm install
COPY ../backend-api/ .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]