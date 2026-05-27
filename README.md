# 🚀 Frontend Collaboration Roadmap (React + Tailwind Team Project)

## 📌 Project Overview

You and your teammate are building a **Mini Task Manager (Frontend Only)** using:

* React (Vite)
* Tailwind CSS
* Git + GitHub collaboration

This project is NOT just about building an app — it is about learning **real-world software engineering teamwork** used in companies.

---

# 🎯 Main Goals of This Project

By the end, both of you should be able to:

* Work like a real development team
* Use GitHub professionally (branches, PRs, reviews)
* Communicate like engineers
* Break features into tasks
* Avoid conflicts and resolve them
* Build clean React components with Tailwind

---

# 🏗️ Tech Stack

* React (Vite)
* Tailwind CSS
* Git + GitHub ([https://github.com](https://github.com))

---

# 👥 Team Roles (IMPORTANT)

You will switch roles later, but start like this:

## 👨‍💻 Developer A (You)

Focus:

* Application logic
* State management (useState)
* Task operations (add, delete, toggle)
* Component logic structure

## 👨‍💻 Developer B (Friend)

Focus:

* UI design with Tailwind
* Component styling
* Layout structure
* Reusable UI components

---

# 🌿 Git Workflow (REAL COMPANY STYLE)

## Branch Strategy

We NEVER work directly on `main`.

### Main branches:

* `main` → stable production code
* `dev` → integration branch (optional but recommended)

### Feature branches:

* `feature/task-ui`
* `feature/task-logic`
* `feature/task-integration`
* `feature/styling`

---

# 🔁 Daily Workflow

## Step 1: Pull latest code

```bash
git pull origin main
```

## Step 2: Create feature branch

```bash
git checkout -b feature/task-ui
```

## Step 3: Work on your feature

## Step 4: Commit changes (small commits)

```bash
git add .
git commit -m "Add task input component UI"
```

## Step 5: Push branch

```bash
git push origin feature/task-ui
```

## Step 6: Create Pull Request (PR)

* Compare: `feature branch → dev or main`
* Request review from teammate

## Step 7: Review code

* Check logic
* Suggest improvements
* Fix issues

## Step 8: Merge

* Only after approval

---

# 📋 Task Breakdown (STEP BY STEP)

## 🔹 Phase 1: Setup Project

* Create Vite React app
* Setup Tailwind
* Setup GitHub repo
* Invite collaborator

---

## 🔹 Phase 2: UI Structure (Friend)

Branch: `feature/task-ui`

Tasks:

* Header component
* Task input box
* Task list UI
* Basic layout using Tailwind

---

## 🔹 Phase 3: Logic (You)

Branch: `feature/task-logic`

Tasks:

* useState for tasks
* Add task function
* Delete task function
* Toggle complete task

---

## 🔹 Phase 4: Integration

Branch: `feature/task-integration`

Tasks:

* Connect UI + logic
* Pass props between components
* Fix bugs

---

## 🔹 Phase 5: Styling + Polish (Friend)

Branch: `feature/styling`

Tasks:

* Improve Tailwind UI
* Responsive design
* Hover effects
* Clean layout

---

## 🔹 Phase 6: Final Review

* Clean code
* Fix bugs
* Improve structure
* Update README

---

# 🧠 Communication Rules (VERY IMPORTANT)

Before starting any task:

* Announce what file you are working on
* Ask if someone is editing the same file
* Avoid overlapping work

Example:

> "I am working on TaskList.jsx"

---

# ⚠️ Rules (REAL WORLD SOFTWARE ENGINEERING)

## ❌ Never do:

* Push directly to main
* Work without branches
* Large commits (everything at once)
* Edit same file without communication

## ✅ Always do:

* Small commits
* Pull requests
* Code reviews
* Clear commit messages
* Feature-based branches

---

# 🧪 Learning Focus Areas

## Git & Collaboration

* Branching
* Pull Requests
* Merge conflicts
* Code reviews

## React

* Components
* Props
* useState
* Event handling

## Tailwind

* Layout (flex, grid)
* Responsive design
* Styling components

---

# 💥 Merge Conflict Practice (IMPORTANT)

At least once:

* Both edit same file
* Create conflict
* Resolve together

This is REAL internship experience.

---

# 📅 Suggested Timeline (7 Days)

## Day 1

* Setup project
* Setup GitHub repo

## Day 2

* UI structure
* Task state logic

## Day 3

* Add/Delete tasks

## Day 4

* Styling

## Day 5

* Integration

## Day 6

* Bug fixing + PR review

## Day 7

* Final cleanup + README

---

###Folders Structure should exactly like this

# 🏗️ Frontend Folder Structure

```text
frontend/
│
├── public/
│   └── index.html
│
├── src/
│
│   ├── assets/              # images, icons, fonts
│   │
│   ├── components/          # reusable UI components
│   │   ├── ui/              # buttons, inputs, cards
│   │   ├── layout/          # navbar, header, footer
│   │   └── tasks/           # task-related components
│   │
│   ├── pages/               # page-level components
│   │   └── Home.jsx
│   │
│   ├── hooks/               # custom React hooks (optional)
│   │
│   ├── context/             # global state (optional later)
│   │
│   ├── services/            # API calls (future backend integration)
│   │
│   ├── utils/               # helper functions
│   │
│   ├── styles/              # global styles (if needed)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind entry file
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```


# 🧭 Final Advice

Treat this like a real company project:

* You are not students here
* You are a small engineering team
* Communication matters more than code

Consistency > Complexity

Start small. Build clean. Work like a team.
