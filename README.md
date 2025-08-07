# ChatU - Real-time Chat Application

A modern real-time chat application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. ChatU provides a seamless and intuitive chat experience with real-time messaging capabilities, user authentication, and media sharing features. The application is designed with a modern UI/UX approach, ensuring a responsive and engaging user experience across all devices.

Live demo: [ChatU](https://chat-u-five.vercel.app/)

## Tech Stack

### Frontend
- React.js with Vite
- Context API for state management
- Real-time communication
- Responsive design
- Modern UI/UX

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Real-time messaging
- Cloudinary for media storage

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/AnmolK08/ChatU.git
cd ChatU
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables
- Create `.env` files in both backend and frontend directories based on the provided `.env.sample` files

5. Start the Backend Server
```bash
cd backend
npm start
```

6. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

## Project Structure
```
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   └── routes/
└── frontend/
    ├── context/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── lib/
    │   └── pages/
```


