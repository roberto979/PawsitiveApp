
All notable changes to the **Pawsitive Pet Academy Mobile Application (`PawsitiveApp`)** are documented in this file.

## - 2026-10-03 (Task 3 Final Submission & Web Parity)

### Added
- **Centralized Course Catalogue (`src/constants/coursesData.ts`):** Created a single source of truth containing all 7 official institutional courses, durations, syllabi, and pricing (**R1,500** for 12-week Professional Programmes and **R750** for 6-week Practical Short Courses).
- **Interactive Fee Estimator (`src/app/programs.tsx`):** Implemented a real-time quotation calculator supporting multi-course selection, automated tiered discounts (**0%** for 1 course, **5%** for 2 courses, **10%** for 3 courses, **15%** for 4+ courses), and **15% South African VAT** calculation.
- **Phone Number Normalization & Regex Validation (`src/app/contact.tsx`):** Added a telephone input field with input sanitization (stripping spaces, dashes, brackets, and `+27` prefixes) alongside email regex validation and inline error feedback banners.

### Changed
- **Course Details Synchronization (`src/app/course.tsx`):** Updated individual syllabus screens to fetch dynamic data from `COURSES_DATA`, resolving duration mismatches and displaying official course fees.
- **Brand Identity & UI Consistency:** Aligned the mobile colour palette across screens with official brand guidelines (**Terracotta `#DA6F43`**, **Teal `#268D81`**, **Navy `#285062`**, and **Cream `#f8f9fa`**).
- **Contact Information (`src/app/contact.tsx`):** Replaced placeholder demo details with official Durban, KwaZulu-Natal campus contact details.

### Fixed
- **Navigation Route Consistency:** Resolved broken route references pointing to `/courses` instead of `/programs` and standardized bottom navigation triggers.

---

## - 2026-09-28 (Task 2 Initial Prototype)
- Initial Expo / React Native mobile application build with basic navigation (`Header` and `BottomNav`), placeholder course listings, Animal Care Diary (`diary.tsx`), and static inquiry forms.
