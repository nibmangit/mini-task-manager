# 🚀 Team Collaboration Workflow (React + Tailwind + GitHub)

This document explains the exact workflow we followed while building this project collaboratively.

The goal was not only to build a frontend project, but also to learn how real developers work together using Git and GitHub.

---

# 🧠 Core Workflow Philosophy

We NEVER work directly on `main`.

We always use:

```text
feature branch → Pull Request → dev → main
```

---

# 🌿 Branch Structure

```text
main      → stable final version
dev       → shared integration branch
feature/* → temporary feature branches
```

Examples:

```text
feature/ui-skeleton
feature/task-logic
feature/edit-task
feature/task-filter
```

---

# 🏗️ Project Folder Structure

```text
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── tasks/
│   │   │   ├── TaskInput.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskFilter.jsx
│   │
│   ├── pages/
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
└── README.md
```

---

# 👥 Team Responsibility Split

## 👨‍💻 Developer A
Focused on:
- React logic
- useState
- props
- task functionality
- filtering logic

---

## 👨‍💻 Developer B
Focused on:
- UI components
- Tailwind styling
- layouts
- buttons and visual structure

---

# 🔁 STANDARD DEVELOPMENT FLOW

This is the workflow we MUST always follow.

---

# ✅ STEP 1 — Sync Latest Code

Before starting ANY feature:

```bash
git checkout dev
git pull origin dev
```

This ensures:
- latest team code
- no outdated branches
- fewer merge conflicts

---

# ✅ STEP 2 — Create Feature Branch

Each feature gets its OWN branch.

Example:

```bash
git checkout -b feature/edit-task
```

Rule:

```text
ONE FEATURE = ONE BRANCH
```

---

# ✅ STEP 3 — Implement Feature

Work ONLY on:
- your assigned responsibility
- your feature scope

Avoid editing unrelated files.

---

# ✅ STEP 4 — Commit Changes

Use small clear commits.

Good example:

```bash
git commit -m "Add task filtering functionality"
```

Bad example:

```bash
git commit -m "update"
```

---

# ✅ STEP 5 — Push Branch

```bash
git push origin feature/edit-task
```

---

# ✅ STEP 6 — Create Pull Request

Correct PR flow:

```text
feature/edit-task → dev
```

NEVER:

```text
feature/edit-task → main ❌
```

---

# ✅ STEP 7 — Code Review

Teammate reviews:
- functionality
- code quality
- UI behavior
- possible bugs

Reviewer either:
- approves
- requests changes

---

# ✅ STEP 8 — Merge Into Dev

After approval:
- merge PR into `dev`

This creates updated shared team code.

---

# ✅ STEP 9 — Sync Again

After EVERY merge:

Both developers MUST run:

```bash
git checkout dev
git pull origin dev
```

This keeps both computers synchronized.

---

# ✅ STEP 10 — Delete Old Feature Branch

Feature branches are temporary.

After merge:
- delete branch locally
- delete branch on GitHub

Example:

```bash
git branch -d feature/edit-task
```

---

# 🧠 Important Git Rules We Learned

## ❌ NEVER:
- work directly on `main`
- skip Pull Requests
- continue working on old feature branches
- push huge unrelated changes
- work without syncing `dev`

---

## ✅ ALWAYS:
- pull latest `dev`
- create fresh feature branch
- use PR workflow
- review teammate code
- merge carefully
- delete old feature branches

---

# 🚀 Features We Built

```text
✔ Add Task
✔ Delete Task
✔ Toggle Complete
✔ Edit Task
✔ Filter Tasks
```

---

# 🧠 React Concepts We Practiced

```text
✔ useState
✔ props
✔ component communication
✔ conditional rendering
✔ controlled inputs
✔ derived state
✔ array updates
✔ filtering logic
```

---

# 🧠 Git & GitHub Concepts We Practiced

```text
✔ cloning repository
✔ branch creation
✔ feature branches
✔ pull requests
✔ code reviews
✔ merging
✔ syncing branches
✔ branch deletion
✔ collaboration workflow
✔ merge conflict awareness
```

---

# 🚀 Final Release Flow

When project becomes stable:

```text
feature/* → dev → main
```

Final release PR:

```text
dev → main
```

This means:
> "Project is stable and production-ready."

---

# 🌍 Deployment

Recommended deployment platform:

- Vercel

After deployment:
- project becomes live
- portfolio-ready
- shareable with others

---

# 🧠 Biggest Lesson From This Project

The biggest achievement was not the task app itself.

The biggest achievement was learning:

```text
How real developers collaborate professionally.
```

We practiced:
- teamwork
- communication
- Git workflow
- code reviews
- feature-based development
- frontend architecture thinking

This workflow can now be reused in ALL future projects.
