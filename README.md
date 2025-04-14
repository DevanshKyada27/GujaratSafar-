# 🐫GujaratSafar - Unveiling the Best of Gujarat with AI Ease🌞
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/) [![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
 [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
 [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

GujaratSafar is an intelligent travel planning application that leverages AI to create personalized trip itineraries for exploring Gujarat, India. The application combines modern web technologies with artificial intelligence to deliver customized travel experiences based on user preferences.


## 📋 Table of Contents
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🤖 AI Integration](#-ai-integration)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [🙏 Acknowledgements](#-acknowledgements)

## ✨ Features

- **🧠 AI-Generated Travel Itineraries**: Create personalized trip plans with detailed daily activities
- **🗺️ Destination Exploration**: Discover popular destinations across Gujarat
- **⚙️ Customizable Preferences**: Tailor your trip based on budget, duration, and travel group
- **🏨 Hotel Recommendations**: Get suggestions for accommodations that match your preferences
- **🖥️ Interactive Trip Viewing**: Explore your generated trips with detailed information
- **🔐 User Authentication**: Secure Google authentication for personalized experiences
- **📁 Trip Management**: Save and access your trips anytime

## 🛠️ Technologies Used

### Frontend
- **⚛️ React 19**: Modern UI library for building interactive interfaces
- **🧭 React Router DOM**: For application routing and navigation
- **💅 Tailwind CSS**: Utility-first CSS framework for styling
- **🧩 Radix UI**: Accessible component library

### Backend & Services
- **🔥 Firebase**: Cloud-based backend services
  - Firestore: NoSQL database for storing trip data
  - Authentication: User management and security
- **🔑 Google OAuth**: Secure authentication system
- **🤖 Google Generative AI**: Gemini 2.0 for AI-powered trip recommendations

### Development Tools
- **⚡ Vite**: Next-generation frontend build tool

## 🤖 AI Integration
GujaratSafar leverages Google's Generative AI capabilities for:

### Trip Planning Features
- **Itinerary Generation**: Creates detailed day-by-day plans based on user preferences
- **Hotel Recommendations**: Suggests accommodations that match budget and group size
- **Activity Scheduling**: Plans morning, afternoon, and evening activities
- **Travel Time Estimation**: Provides travel time between locations

### AI Model Details
- Uses Google's Gemini 2.0 Flash model

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **A modern web browser**

You'll also need:
- **Firebase account**
- **Google OAuth credentials**
- **Google Generative AI API key**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GujaratSafar_Project.git
   cd GujaratSafar_Project
   ```

2. **Set up environment variables**
   
   Create a `.env` file in the `main_page` directory with the following variables:
   ```
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_ai_api_key
   ```

3. **Install dependencies for the main React application**
   ```bash
   cd main_page
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   - **Landing page**: Open `frontPage.html` directly in your browser
   - **Main application**: Visit `http://localhost:5173` (or the port shown in your terminal)
  
## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Firestore database
3. Set up Authentication with Google provider
4. Copy your Firebase configuration to `main_page/src/service/firebaseConfig.jsx`

### Google OAuth Setup

1. Create OAuth credentials in the Google Cloud Console
2. Configure the authorized JavaScript origins and redirect URIs
3. Add your client ID to the environment variables

### Google Generative AI Setup

1. Get an API key for Google's Generative AI (Gemini)
2. Add the API key to your environment variables

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request and provide your valuable contribution to the project.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- [Google Generative AI](https://ai.google.dev/) for powering the trip recommendations
- [Firebase](https://firebase.google.com/) for backend services
- [React](https://react.dev/) and [Vite](https://vitejs.dev/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Special Thanks to @chinmayYpatil for his heartly contribution to this project.

---

<div align="center">
  
Made with ❤️ by Team GujaratSafar

</div>                                                                                           
