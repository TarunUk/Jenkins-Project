# 🚀 Jenkins CI/CD Pipeline Project (Node.js + Docker)

## 📌 Overview
This project demonstrates a complete CI/CD pipeline using Jenkins to automate the build, containerization, and deployment of a Node.js application using Docker.

The application includes a simple interactive frontend built using HTML, CSS, and JavaScript, served through Node.js.

Whenever code is pushed to GitHub, Jenkins automatically builds the Docker image, pushes it to Docker Hub, and deploys the updated container.

## 🛠️ Tech Stack
- Jenkins  
- GitHub  
- Node.js (Express)  
- HTML, CSS, JavaScript  
- Docker  
- Docker Hub  

## 📁 Project Structure
public/
- index.html
- style.css
- script.js

app.js
Dockerfile
Jenkinsfile

## 🔄 CI/CD Pipeline Flow
GitHub → Jenkins → Docker Build → Docker Hub → Deployment

## 📊 Pipeline Stages
- Clone code from GitHub  
- Build Docker image  
- Push image to Docker Hub  
- Stop and remove old container  
- Deploy new container using latest image  

## 🐳 Docker Run Command
docker run -d --name myapp -p 3000:3000 tarunrajput12/jenkins-demo:latest

## 🌐 Access Application
Jenkins: http://localhost:8080  
Application: http://localhost:3000  

## 🎨 Frontend Features
- Interactive UI using HTML  
- Styling using CSS  
- Button interaction using JavaScript  
- API call to backend (Node.js)

## 🔐 Credentials Used
- GitHub credentials for repo access  
- Docker Hub credentials for image push  
(Managed securely using Jenkins Credentials Manager)

## 🧠 Key Learnings
- CI/CD pipeline automation using Jenkins  
- Docker image creation and deployment  
- Jenkins pipeline as code  
- Frontend + backend integration  
- Secure DevOps practices  

## 🎯 Result
Fully automated CI/CD pipeline where code push triggers build → Docker image → push → deployment, along with a simple interactive web UI 🚀
