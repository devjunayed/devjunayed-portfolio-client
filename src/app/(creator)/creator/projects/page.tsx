"use client";
import AddProjects from "@/components/Dashboard/Projects/AddProjects"
import Markdown from 'react-markdown'
import "@/components/ui/css/reset-tailwind.css"


const page = () => {
  const markdown = `
# Sports Facility Booking Platform

## Introduction

Sport Facility Booking Platform is a server-side project that provides various APIs for creating facilities (as an Admin) and booking facilities (as a User). Admins can manage facilities, and users can manage their bookings. The project includes error handling, authentication, and authorization systems.

🔴 **LIVE API LINK**: [Click Here](https://sports-facility-booking-platform-delta.vercel.app/)

---

## Technology Stack:

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **ODM & Validation Library**: Mongoose for MongoDB
- **Packages**:
  - bcrypt
  - cors
  - dotenv
  - express
  - http-status
  - jsonwebtoken
  - mongodb
  - mongoose
  - zod
  - prettier
  - ts-node-dev
  - eslint

---

## Installation Guidelines

Clone the repository and set up your \`.env\` file using the provided \`.env.example\`. Then run:

\`\`\`bash
npm install
npm run dev
\`\`\`

**🔍 Don't forget to check the \`package.json\` file!**

---

## API ENDPOINTS

### User Routes

1. **User Sign Up**
   \`\`\`http
   POST /api/auth/signup
   \`\`\`

2. **User Login**
   \`\`\`http
   POST /api/auth/login
   \`\`\`

3. **Create a Facility (Admin Only)**
   \`\`\`http
   POST /api/facility
   \`\`\`

4. **Update a Facility (Admin Only)**
   \`\`\`http
   PUT /api/facility/:id
   \`\`\`

5. **Delete a Facility - Soft Delete (Admin Only)**
   \`\`\`http
   DELETE /api/facility/:id
   \`\`\`

6. **Get All Facilities**
   \`\`\`http
   GET /api/facility
   \`\`\`

---

### Booking Routes

7. **Check Availability**
   \`\`\`http
   GET /api/check-availability
   \`\`\`
   **Check for a specific date:**
   \`\`\`http
   GET /api/check-availability?date=2024-06-15
   \`\`\`

8. **Create a Booking (User Only)**
   \`\`\`http
   POST /api/bookings
   \`\`\`

9. **View All Bookings (Admin Only)**
   \`\`\`http
   GET /api/bookings
   \`\`\`

10. **View Bookings by User (User Only)**
   \`\`\`http
   GET /api/bookings/user
   \`\`\`

11. **Cancel a Booking (User Only)**
   \`\`\`http
   DELETE /api/bookings/:id
   \`\`\`
`;

  return (
    <div className="overflow-y-hidden ">
      <AddProjects />
      <div className="text-white overflow-y-hidden">

      <Markdown className="overflow-y-scroll h-[84vh]">{markdown}</Markdown>
      </div>
    </div>
  )
}

export default page
