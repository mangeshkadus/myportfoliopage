# Use the official Node image as the base image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a smaller image as the base image for the final image
FROM nginx:alpine

# Copy the built app from the build image to the nginx public directory
COPY --from=build /app/dist/angularpro /usr/share/nginx/html

# Expose the default port for Nginx
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
