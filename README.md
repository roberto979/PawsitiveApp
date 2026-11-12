
# Pawsitive Pet Academy – Mobile Application 🐾🎓

**Tagline:** *Caring for pets. Building confident owners.*  
**Location:** Durban, KwaZulu-Natal, South Africa  
**Module:** Work-Integrated Learning (WIL) – XHAW5112 (Task 3)  
**Group:** 3 Peas In a Pod

---

## 📱 Project Overview

The **Pawsitive Pet Academy Mobile Application** is a cross-platform React Native (Expo) application built to provide omnichannel parity with the Pawsitive Pet Academy website. Designed for pet owners, kennel staff, veterinary assistants, and aspiring pet entrepreneurs, the app enables seamless course discovery, automated multi-course fee estimation with South African VAT (15%), daily pet care tracking, and validated student inquiries.

---

## ✨ Key Features

- **Official 7-Course Institutional Catalogue:**
  - **Professional Development Programmes (12 Weeks – R1,500 each):** Canine Obedience Training, Pet Grooming, Animal Behaviour, and Pet Business Management.
  - **Practical Short Courses (6 Weeks – R750 each):** Puppy Care, Pet First Aid, and Basic Dog Walking.
- **Automated Fee Estimator & Discount Engine:**
  - Real-time subtotal calculation using array reduction.
  - Tiered volume discounts: **0%** (1 course), **5%** (2 courses), **10%** (3 courses), and **15%** (4+ courses).
  - Automatic **15% VAT** breakdown and instant quotation summary handoff to registration.
- **Validated Inquiry Form:** Client-side error handling with regex validation for email addresses and South African phone numbers (`+27` normalization).
- **Animal Care Diary:** Interactive daily log for tracking feeding, exercise, grooming, and health observations.
- **Brand Identity Compliance:** Styled with official brand colours — **Terracotta (`#DA6F43`)**, **Teal (`#268D81`)**, **Navy (`#285062`)**, and **Cream (`#f8f9fa`)**.

---

## 📂 Project Structure

```text
PawsitiveApp-master/
├── assets/                     # App icons, splash screens, and imagery
├── src/
│   ├── app/                    # Expo Router screens
│   │   ├── index.tsx           # Home screen
│   │   ├── programs.tsx        # Master course catalogue & Fee Calculator
│   │   ├── course.tsx          # Dynamic course syllabus & fee details
│   │   ├── registration.tsx    # Quotation & enrollment confirmation
│   │   ├── contact.tsx         # Validated inquiry form & Durban campus info
│   │   ├── diary.tsx           # Animal Care Diary tool
│   │   ├── EducationBenefits.tsx
│   │   ├── experience.tsx
│   │   └── journey.tsx
│   ├── components/             # Reusable UI components (Header, BottomNav, PrimaryButton)
│   └── constants/
│       └── coursesData.ts      # Centralized 7-course dataset & pricing
├── CHANGELOG.md                # Version history and Task 3 updates
├── package.json                # Dependencies and Expo scripts
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v18 or newer)
- [Expo Go](https://expo.dev) app on your iOS/Android device, or an Android/iOS emulator

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone <your-mobile-repo-url>
   cd PawsitiveApp-master
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

4. **Preview the app:**
   - Scan the QR code displayed in the terminal using **Expo Go** (Android) or the **Camera app** (iOS).
   - Press `w` in the terminal to run the web preview, or `a` / `i` for Android/iOS emulators.

---

## 👥 Team Members (3 Peas In a Pod)

- **Israa Williams (`ST10501763`)** – Team Leader (Research, Documentation & Requirements Coordination)
- **Shaun Stroebel (`ST10507489`)** – Team Secretary & Lead Frontend Developer (Website Architecture, Styling & Calculation Logic)
- **Reginaldo Muriame Gime (`ST10535021`)** – Application Developer (Mobile Application Build & Figma Prototyping)

---

## 📄 License

This project was developed for academic assessment purposes under The Independent Institute of Education (IIE) – Module XHAW5112.
