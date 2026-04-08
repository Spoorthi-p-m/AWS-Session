AWS Workshop Registration & Payment System

This project is a full-stack web application designed to manage workshop registrations with a secure payment gateway. Originally based on the Kunal Verma/stripe-sample-code repository, this version has been significantly modified to support Razorpay and is optimized for AWS EC2 deployment.

🌟 Key Updates in this Fork

    Payment Migration: Replaced Stripe integration with Razorpay API for localized INR transactions.

    Cloud Infrastructure: Fully configured and deployed on an Amazon EC2 (Ubuntu) instance.

    Environment Security: Implementation of dotenv to manage sensitive API keys on the server.

    Production Ready: Set up for process management using PM2 on AWS.

🛠️ Tech Stack

    Hosting: Amazon Web Services (AWS) EC2

    Runtime: Node.js & Express.js

    Payments: Razorpay Checkout

    Frontend: HTML5, CSS3, JavaScript

    Tools: Git, GitHub, PM2

🚀 Live Deployment

The application is currently live and can be accessed via the AWS Public IP:
http://<YOUR_EC2_PUBLIC_IP>:3000
🔧 Installation & Setup

    Clone the repository:
    Bash

    git clone https://github.com/YOUR_USERNAME/AWS-Session.git
    cd AWS-Session

    Install dependencies:
    Bash

    npm install

    Configure Environment Variables:
    Create a .env file in the root directory:
    Plaintext

    RAZORPAY_KEY_ID=your_rzp_test_id
    RAZORPAY_KEY_SECRET=your_rzp_test_secret

    Run the application:
    Bash

    node server.js

☁️ AWS EC2 Deployment Steps

    Security Groups: Ensure Port 3000 is open in your AWS Inbound Rules.

    Node.js Setup: Install Node.js on your EC2 instance using NVM or APT.

    Keep-Alive: Use PM2 to ensure the server stays online:
    Bash

    sudo npm install -g pm2
    pm2 start server.js --name "workshop-app"

📜 Credits

Base project structure and frontend templates provided by Kunal Verma.

How to apply this update:

    Open the file: nano README.md

    Clear the old text: Hold Ctrl + K until the file is empty.

    Paste the new text: (Right-click to paste in the terminal).

    Save & Exit: Ctrl + O, Enter, Ctrl + X.

    Push to GitHub:
    Bash

    git add README.md
    git commit -m "Docs: Updated README with Kunal Kushwaha credit and AWS details"
    git push origin main

