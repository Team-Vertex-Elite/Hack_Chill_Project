organizer-web/
│
├── public/
│
├── src/
│   │
│   ├── components/          // reusable UI
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── MapEditor.tsx
│   │   ├── CrowdControl.tsx
│   │
│   ├── pages/               // full screens
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── UploadData.tsx
│   │   ├── MapSetup.tsx
│   │
│   ├── services/            // API calls
│   │   ├── api.ts
│   │   ├── eventService.ts
│   │
│   ├── utils/               // helpers
│   │   ├── csvParser.ts
│   │
│   ├── types/               // TS types
│   │   ├── index.ts
│   │
│   ├── hooks/               // custom hooks
│   │   ├── useFetch.ts
│   │
│   ├── assets/              // images/icons
│   │
│   ├── App.tsx              // routing + layout
│   ├── main.tsx             // entry (don’t touch)
│   └── index.css
│
├── package.json
└── tsconfig.json