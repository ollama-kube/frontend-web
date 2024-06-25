# Use an appropriate base image
#   FROM node:lts-alpine

#   WORKDIR /usr/src/app

# Copy package.json and package-lock.json
#   COPY package*.json ./

# Install dependencies
#   RUN npm install

# Copy application code
#   COPY . .

# Expose the port Next.js runs on
#   EXPOSE 3000

# Start the Next.js application
#   CMD ["npm", "run", "dev"]




#   Step 1: Create base image
FROM node:lts-alpine AS BASE
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .

#   Step 2: Create Development image
FROM BASE AS DEV
COPY --from=BASE /usr/src/app .
COPY bootstrap.sh .
RUN chmod +x bootstrap.sh
RUN ./bootstrap.sh
RUN npm run dev

#   Step 3: Staging environment
#   Is it good practice to run unit tests here?
FROM BASE AS STAGING
COPY --from=BASE /usr/src/app .
RUN npm run build

#   Step 2C: Production environment
FROM STAGING AS PROD
WORKDIR /usr/src/app
COPY --from=STAGING /usr/src/app .
RUN npm ci --only=production

#   Expose the necessary port
EXPOSE 3000

#   Start the application
CMD ["npm", "start"]