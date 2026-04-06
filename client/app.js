// 1. Set the URL to your current domain (works for both Local and EC2)
const URL = window.location.origin;

// 2. Identify your buttons from the HTML
const btnWorkshop1 = document.getElementById("work-1");
const btnWorkshop2 = document.getElementById("work-2");
const btnWorkshop3 = document.getElementById("work-3");

// 3. The Core Razorpay Function
const startPayment = (workshopId) => {
    // Call your server.js route to create an Order ID
    fetch(`${URL}/create-checkout-session/${workshopId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(data => {
        // Configure the Razorpay Popup
        const options = {
            "key": data.key_id, // Your Razorpay Key ID sent from server.js
            "amount": data.amount,
            "currency": "INR",
            "name": "AWS Workshop Project",
            "description": "Payment for " + workshopId,
            "order_id": data.id, // The ID created by Razorpay on the backend
            "handler": function (response) {
                // If payment succeeds, redirect to success page
                window.location.href = "/success";
            },
            "prefill": {
                "name": "Student Name",
                "email": "test@example.com"
            },
            "theme": { "color": "#3399cc" }
        };

        // Open the Razorpay Window
        const rzp = new Razorpay(options);
        
        rzp.on('payment.failed', function (response) {
            window.location.href = "/cancel";
        });

        rzp.open();
    })
    .catch(err => console.error("Payment Error:", err));
};

// 4. Update your Event Listeners to trigger the payment
btnWorkshop1.addEventListener("click", (e) => {
    e.preventDefault();
    startPayment("workshop_1");
});

btnWorkshop2.addEventListener("click", (e) => {
    e.preventDefault();
    startPayment("workshop_2");
});

btnWorkshop3.addEventListener("click", (e) => {
    e.preventDefault();
    startPayment("workshop_3");
});

