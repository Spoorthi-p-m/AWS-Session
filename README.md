AWS Workshop Registration & Payment System

A full-stack web application designed to manage workshop registrations with a secure payment gateway integration. This project is hosted on Amazon EC2 and uses Node.js for the backend.
🚀 Live Demo

Access the live application here:
http://<YOUR_EC2_PUBLIC_IP>:3000

🛠️ Tech Stack

    Cloud Hosting: Amazon Web Services (AWS) EC2

    Runtime: Node.js

    Backend Framework: Express.js

    Payment Gateway: Razorpay API (Test Mode)

    Frontend: HTML5, CSS3, JavaScript (Vanilla)

    Version Control: Git & GitHub

📦 Features

    Cloud Deployment: Fully functional Ubuntu-based server on AWS.

    Secure Payments: Integrated Razorpay checkout for seamless INR transactions.

    Dynamic Routing: Custom Express routes for payment initialization and status handling.

    Environment Safety: Uses dotenv to protect sensitive API keys.

🔧 Installation & Local Setup

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
    PORT=3000

    Start the server:
    Bash

    node server.js

☁️ Deployment on AWS EC2

    Launch an EC2 Ubuntu Instance.

    Allow Inbound Traffic on Port 3000 via AWS Security Groups.

    Install Node.js and NPM on the instance.

    Clone this repository and run npm install.

    (Optional) Use PM2 to keep the server running:
    Bash

    sudo npm install -g pm2
    pm2 start server.js

How to update this on your GitHub:

    Inside your local repo, run nano README.md.

    Delete the old content and paste the text above (make sure to replace <YOUR_EC2_PUBLIC_IP> with your actual AWS IP).

    Save and exit (Ctrl+O, Enter, Ctrl+X).

    Run the Git commands:
    Bash

    git add README.md
    git commit -m "Docs: Update README with Razorpay and AWS setup"
    git push origin main

