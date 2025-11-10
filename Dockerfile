# Use OpenJDK base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy everything to container
COPY . .

# Build application using Maven Wrapper
RUN ./mvnw clean package -DskipTests

# Run the Spring Boot JAR
CMD ["java", "-jar", "target/expensetracker-0.0.1-SNAPSHOT.jar"]
