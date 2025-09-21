

# SkinVision AI Psoriasis Detector

An AI-powered web application for detecting psoriasis from skin images. Built with React, TypeScript, and Vite, this project enables users to upload skin images and receive AI-based predictions, with dashboards for both patients and doctors.

## Features

- Upload skin images for AI-based psoriasis detection
- Patient and doctor dashboards
- Result display and history
- Responsive UI with reusable components
- Gemini API integration for predictions


## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akshayaa-sj/SkinVision.git
   cd SkinVision
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set your Gemini API key in `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

```
├── App.tsx
├── constants.ts
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── tsconfig.json
├── types.ts
├── vite.config.ts
├── components/
│   ├── DoctorDashboard.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ImageUploader.tsx
│   ├── ResultDisplay.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Spinner.tsx
├── hooks/
│   └── useTheme.tsx
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── DoctorPage.tsx
│   ├── HomePage.tsx
│   └── PatientPage.tsx
├── services/
│   └── predictionService.ts
```

## Usage

1. Upload a skin image using the Patient Dashboard.
2. View prediction results and history.
3. Doctors can review patient submissions and access analytics.
