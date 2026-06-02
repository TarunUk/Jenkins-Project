🚀 Jenkins CI/CD Pipeline Project
📌 Overview

This project demonstrates a complete CI/CD pipeline using Jenkins and Docker to automate the build, image creation, and deployment of a Node.js application.

Whenever code is pushed to GitHub, Jenkins automatically builds the application, creates a Docker image, pushes it to Docker Hub, and deploys it as a running container.

⚙️ Tech Stack
Jenkins
GitHub
Node.js
Docker
Docker Hub
🔄 CI/CD Workflow
GitHub → Jenkins → Docker Build → Docker Hub → Deployment
Pipeline Steps:
Checkout code from GitHub
Build Docker image
Push image to Docker Hub
Stop old container (if running)
Run new container with updated image
🐳 Docker Run Command
docker run -d --name myapp -p 3000:3000 tarunrajput12/jenkins-demo:latest
🌐 Access Application
Jenkins: http://localhost:8080
Application: http://localhost:3000
🔐 Credentials Used
GitHub credentials for repository access
Docker Hub credentials for image push
(All managed securely in Jenkins Credentials Manager)
🧠 Key Learnings
CI/CD pipeline automation
Jenkins pipeline as code (Jenkinsfile)
Docker image creation and deployment
Secure credential handling in Jenkins
🎯 Result

A fully automated pipeline where:
👉 Code push triggers build → Docker image → deployment without manual effort
