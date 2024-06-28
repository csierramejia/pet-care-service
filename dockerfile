# Use a Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the project's dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile the TypeScript code
RUN npm run build

# Expose the port that the application listens on
EXPOSE 9092

# Command to start the application
CMD ["node", "dist/index.js"]