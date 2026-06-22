# PopX – Frontend Qualifier Task

A pixel-perfect React implementation of the PopX mobile app UI (Adobe XD design), built with React + Vite + React Router.

## Screens

1. **Welcome** (`/`) – Landing screen with Create Account / Login options
2. **Create Account** (`/create-account`) – Signup form (Full Name, Phone, Email, Password, Company, Agency radio)
3. **Login** (`/login`) – Sign-in form, Login button enables only when both fields are filled
4. **Account Settings** (`/account-settings`) – Profile screen shown after signup/login

## Tech Stack

- React 19 + Vite
- React Router DOM (client-side navigation)
- Plain CSS (no framework) for full pixel control

## Project Structure

```
src/
  components/      # Reusable UI: MobileFrame, BottomNav, FormInput
  pages/           # One file pair (jsx + css) per screen
  App.jsx          # Route definitions
  main.jsx         # App entry point
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project includes config for both:
- **Netlify**: `public/_redirects` handles SPA routing
- **Vercel**: `vercel.json` handles SPA routing

Build command: `npm run build`
Output directory: `dist`

## Notes

- The mobile UI is centered in a fixed-width frame (max 414px) so it renders like a phone screen on any browser size, matching the design.
- Form state is handled with local component state (no external state library needed for this scope).
