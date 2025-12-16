# Career Pilot (Job Portal)

Career Pilot is a university-style job portal that connects **Students** and **Recruiters** in one place, reducing the gap between job seekers and recruiters with role-based access and a simple application flow.

---

## Key Features

### Authentication + Roles
- Common **Login/Signup** flow for both users, routed by **Role (Student / Recruiter)**.
  
### Student Portal
- View **available jobs**
- **Search** jobs by company / location / job title
- **Apply** to a job by submitting a **resume link**
- View **Applied Jobs** (with resume preview button)
  
### Recruiter Portal
- **Post** new job openings
- View **posted jobs** 
- View **Applied Applicants** and open their resumes 

### Resume Link + Preview
- Resume is stored as a **URL** and recruiters can view it using a resume viewer button.

---

## Tech Stack
- **Frontend:** ReactJS + NodeJS   
- **Backend:** Go (Golang), Gorilla Mux   
- **Database:** MySQL   
- **Auth:** JWT   
- **UI:** Ant Design (frontend)   

---

## Database Schema (MySQL)

The project uses a `test` database with 3 main tables: 
- `golang_stud` → users (student/recruiter)
- `available_jobs` → jobs posted by recruiters
- `applied_jobs1` → job applications (includes `resume` link)

---

## Backend API Endpoints

Registered in the Go server router: 
- `POST /signup`
- `POST /login`
- `GET  /isAuthorized`
- `POST /addJobDetails`
- `GET  /getAllJobsList`
- `POST /applyJob`
- `GET  /getJobsAppliedByUser`
- `POST /appliedApplicants`
- `POST /getJobPostedByRecruiter`
- `GET  /hi`

> CORS allows `http://localhost:3000` for local frontend. 

---

## Run Locally

### 1) Database Setup
1. Create a database named `test`
2. Run `DB.sql` to create tables 

### 2) Start Go Backend
```bash
go mod init career-pilot
go mod tidy
go run jobHiring.go
