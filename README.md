# Fábula Última App

## Description
**Fábula Última App** is an application designed to assist players and game masters in **Fábula Última**, a tabletop role-playing game. Its goal is to simplify the management of skills, rules, health points or any other aspect of the game, while providing a record of the adventures and encounters.

### **Why this application?**
I play **Fábula Última** with my friends, and we often run into the same issues:
- Forgetting how some abilities work.
- Manually tracking stats like health or mana, which takes time and can lead to errors.
- Losing track of enemies, items, and key interactions.

This app aims to solve these problems by:
- Automating calculations for attributes and skills.
- Organizing notes and records of encounters.
- Syncing data between devices via cloud storage.
- Offering a mobile-friendly interface through a PWA.

---

## Tech Stack

### **Frontend**
- **Vite + React** for the interface.
- **Tailwind CSS** for styling.
- **Redux Toolkit** for state management.

### **Backend**
- **Supabase** for database and authentication.
- **PostgreSQL** for data storage.
- **Supabase Storage** for images.

### **Extras**
- **Vitest and React Testing Library** for unit and integration testing.

---

## How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/user/fabula-ultima-app.git
   cd fabula-ultima-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file and add Supabase credentials.

4. Run the development server:
   ```sh
   npm run dev
   ```

5. Run tests:
   ```sh
   npm run test
   ```

---

## Key Features


