# Peerly

This guide will help you set up and run the Peerly project from scratch, even if you have never installed Node.js before. Follow each step carefully.

---

## 1. Prerequisites

### Install Node.js

Node.js is required to run this project. If you don't have Node.js:

1. Go to the [Node.js download page](https://nodejs.org/).
2. Download the **LTS** version for your operating system (Windows, macOS, or Linux).
3. Run the installer and follow the instructions (keep all default settings).
4. After installation, open a terminal (Command Prompt or PowerShell on Windows) and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers for both. If not, restart your computer and try again.

---

## 2. Clone the Repository

If you haven't already, download the project code:

1. Install [Git](https://git-scm.com/downloads) if you don't have it.
2. Open a terminal and run:
   ```bash
   git clone https://github.com/firzanruzain/Peerly.git
   cd Peerly
   ```

---

## 3. Install Dependencies

In the project folder, run:

```bash
npm install
```

This will download all the packages the project needs.

---

## 4. Install and Use shadcn/ui (Component Library)

This project uses [shadcn/ui](https://ui.shadcn.com/) for building beautiful UI components.

### If you want to add new UI components:

1. Make sure you are in the project folder.
2. If you haven't already, install the shadcn/ui CLI:
   ```bash
   npx shadcn-ui@latest init
   ```
   Follow the prompts to set up shadcn/ui for your project.
3. To add a new component (for example, a button):
   ```bash
   npx shadcn-ui@latest add button
   ```
   This will add the component to the `components/ui/` folder.

For more components and usage, see the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).

---

## 5. Start the Development Server

---

Run:

```bash
npm run dev
```

- If successful, you will see a message like:
  ```
  Local: http://localhost:3000
  ```
- Open your browser and go to [http://localhost:3000](http://localhost:3000)

---

## 5. Project Structure

- `app/` - Main application code (pages, layouts)
- `components/` - Reusable UI components
- `lib/` - Utility functions
- `public/` - Static files (images, icons)
- `package.json` - Project configuration and dependencies

---

## 6. Editing the Project

- Edit `app/page.tsx` to change the main page.
- The app will auto-update as you save changes.

---

## 7. Troubleshooting

- If you see errors, make sure Node.js and npm are installed correctly.
- Try deleting the `node_modules` folder and running `npm install` again.
- If you need help, search for the error message online or ask for help in the [Next.js Discord](https://discord.gg/nextjs).

---

## 8. Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Node.js Documentation](https://nodejs.org/en/docs)
- [GitHub: Peerly](https://github.com/firzanruzain/Peerly)

---

## 9. Deploying

To deploy your app for production, see the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).

---

**You're ready to start developing with Peerly!**
