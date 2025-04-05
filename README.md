Job Tracker Pro
A feature-rich job application tracker built with React, Redux, Vite, and Tailwind CSS. This project helps users manage their job hunt by organizing job applications, uploading resumes, and tracking status efficiently.

🚀 Features

🔐 Login Page – Simple user login (expandable to real auth).

🏠 Dashboard – View all job applications at a glance.

➕ Add/Edit Job – Submit new job applications and edit them.

📋 Job List – All jobs listed with company, role, status, etc.

📄 Resume Uploader – Upload resumes per job.

🌙 Dark Mode – Tailwind-enabled theming (optional)

🔄 Redux State Management – Centralized and scalable.

🛠️ Tech Stack

Frontend: React, Vite

Styling: Tailwind CSS

State Management: Redux Toolkit

Icons: Heroicons / Custom SVGs

📂 Project Structure
📁 job-tracker-pro/
├── 📁 src/
│ ├── 📁 components/
│ │ ├── Navbar.jsx
│ │ ├── JobCard.jsx
│ │ ├── JobForm.jsx
│ │ ├── JobList.jsx
│ │ └── ResumeUploader.jsx
│ ├── 📁 pages/
│ │ ├── Dashboard.jsx
│ │ ├── Login.jsx
│ │ └── NotFound.jsx
│ ├── 📁 redux/
│ │ ├── store.js
│ │ └── jobSlice.js
│ ├── 📁 assets/ (images, icons)
│ ├── App.js
│ ├── main.jsx
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md

📸 Screenshots

You can add screenshots to showcase your UI. Suggested:

Dashboard view

Add job form

Job listing with uploaded resume

Mobile responsive version (if styled)

🧠 Future Enhancements

🔥 Add Firebase/Auth for real user accounts.

📊 Add charts for job application stats.

🤖 Resume parsing using AI to auto-fill job forms.

☁️ Connect to MongoDB or Supabase for backend data persistence.

📱 Convert to PWA for mobile access.

🧪 Setup Instructions:

# 1. Clone the repo

https://github.com/your-username/job-tracker-pro.git

# 2. Navigate to project

cd job-tracker-pro

# 3. Install dependencies

npm install

# 4. Start dev server

npm run dev

# App runs on:

http://localhost:5173/

🤝 Contributing

Feel free to fork this repo, submit pull requests, or open issues for suggestions.

📧 Contact

Created with ❤️ by [Your Name] – [s.vargago11l@gmail.com]LinkedIn: [Your LinkedIn]Portfolio: [your-portfolio.com]

📄 License

MIT