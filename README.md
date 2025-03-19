# CyberVault - Secure Digital File Storage

A modern, secure personal website that functions as a digital vault for storing and organizing files. Built with React, TypeScript, and a futuristic cyberpunk design.

## Features

- 🎨 Futuristic UI with cyberpunk/neon aesthetic
- 🔒 Secure file storage with encryption
- 📱 Responsive design for all devices
- 🎮 Interactive 3D file visualization
- 🔐 Biometric authentication
- 🔍 Advanced file search and filtering
- 📊 Real-time storage analytics
- 🎯 Drag-and-drop file upload

## Tech Stack

- **Frontend:**
  - React.js
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Three.js
  - React Three Fiber

- **Backend:**
  - Supabase (Authentication & Storage)
  - Firebase (Real-time Database)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cyber-vault.git
   cd cyber-vault
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_FIREBASE_CONFIG=your_firebase_config
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── styles/        # Global styles
└── types/         # TypeScript type definitions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by Tron: Legacy and modern cyberpunk aesthetics
- Icons from Heroicons
- 3D effects powered by Three.js
- Animations by Framer Motion 