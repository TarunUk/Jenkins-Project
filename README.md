# 🚀 Jenkins CI/CD Pipeline Project

## 📌 Overview
This project demonstrates a complete **CI/CD pipeline using Jenkins** to automate the build, containerization, and deployment of a Node.js application using Docker.

Whenever code is pushed to GitHub, Jenkins automatically triggers the pipeline and performs the full workflow without manual intervention.

---

## 🛠️ Tech Stack
- ⚙️ Jenkins  
- 🐙 GitHub  
- 🟢 Node.js  
- 🐳 Docker  
- ☁️ Docker Hub  

---

## 🔄 CI/CD Pipeline Flow
GitHub → Jenkins → Docker Build → Docker Hub → Deployment  

---

## 📊 Pipeline Stages
- 🔹 Clone source code from GitHub  
- 🔹 Build Docker image using Dockerfile  
- 🔹 Push image to Docker Hub  
- 🔹 Stop & remove old container (if running)  
- 🔹 Deploy new container with latest image  

---

## 🐳 Docker Run Command
docker run -d --name myapp -p 3000:3000 tarunrajput12/jenkins-demo:latest

---

## 🌐 Access Application
- 🧩 Jenkins: http://localhost:8080  
- 🌍 Application: http://localhost:3000  

---

## 🔐 Credentials Used
- 🔑 GitHub credentials → repository access  
- 🔑 Docker Hub credentials → image push  
- 🛡️ Managed securely using Jenkins Credentials Manager  

---

## 🧠 Key Learnings
- 🔄 CI/CD automation using Jenkins  
- 🐳 Docker image creation & deployment  
- 🧾 Jenkinsfile (Pipeline as Code)  
- 🔐 Secure credential handling in DevOps  

---

## 🎯 Result
A fully automated CI/CD pipeline where code push triggers:
👉 Build → Docker Image → Push → Deployment automatically 🚀
