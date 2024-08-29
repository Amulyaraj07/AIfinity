# Learn and Earn Platform

## Overview

This project is a comprehensive web platform that offers users the opportunity to learn and earn points through various educational activities. Users can engage in quizzes, educational games, and content creation (like uploading discussion sheets, audiobooks, and summarized notes). Points earned can be redeemed to purchase courses or study materials. The platform also integrates social media, offers a resource finder based on users' syllabi, and provides mentorship for guided learning.

## Features

1. *Learn and Earn*: Users earn points by participating in educational activities like watching videos, playing quizzes, and uploading learning materials. Points can be redeemed to purchase courses or study materials.

2. *Social Media Integration*: The platform integrates with users' social media accounts to suggest relevant learning content based on their current learning topics.

3. *Resource Finder*: Users can upload their syllabus to receive customized resource recommendations. This feature also provides curated content to help users find the best resources online for specific subjects like Node.js.

4. *Mentorship*: A dedicated mentorship program to guide learners toward achieving their goals. Mentors track learners' progress and provide personalized guidance.

## Tech Stack

- *Frontend*: HTML, CSS, JavaScript
- *Backend*: Node.js, Express.js
- *Database*: MongoDB
- *View Engine*: EJS (Embedded JavaScript)
- *Other Libraries*: bcrypt (for password hashing)

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js installed on your machine.
- MongoDB set up locally or use MongoDB Atlas.

### Installation

1. *Clone the repository*:

    bash
    git clone https://github.com/your-username/learn-and-earn-platform.git
    

2. *Navigate to the project directory*:

    bash
    cd learn-and-earn-platform
    

3. *Install the dependencies*:

    bash
    npm install
    

4. *Create a .env file* in the root directory and add your MongoDB connection string:

    bash
    MONGODB_URI=your_mongodb_connection_string
    

5. *Start the server*:

    bash
    npm start
    

   The application will be running on http://localhost:5000.

### Project Structure

```plaintext
learn-and-earn-platform/
├── public/                # Static files (CSS, JS, images)
├── views/                 # EJS templates
│   ├── home.ejs
│   ├── home2.ejs
│   ├── login.ejs
│   ├── signup.ejs
│   ├── mentor.ejs
│   └── res.ejs
├── config.js              # Database configuration
├── app.js                 # Main application file
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation



# Available Scripts
npm start: Starts the application.
# Usage
1. Sign Up: Go to /signup and create a new account.
2. Log In: Go to /login and enter your credentials.
3. Explore Features: Navigate through the platform to explore learning materials, play quizzes, and engage in mentorship.
# Contributing
We welcome contributions to improve this project. Please fork the repository and submit a pull request for any improvements or bug fixes.

# Steps to Contribute:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeatureName).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/YourFeatureName).
5. Open a pull request.
# License
This project is licensed under the MIT License. See the LICENSE file for details.

