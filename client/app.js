// 1. Get the current URL (Works for localhost and EC2)
const URL = window.location.origin;

const startPayment = (workshopId) => {
    console.log(`Initiating payment for: ${workshopId}`);

    // 2. Call your server.js route
    fetch(`${URL}/create-checkout-session/${workshopId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        // --- DEBUGGING LOGS (Check these in your Browser F12 Console) ---
        console.log("Data received from Server:", data);
        
        // If data.id or data.key_id is undefined here, the payment WILL fail.
        if (!data.id || !data.key_id) {
            alert("Error: Server did not return a valid Order ID or Key ID. Check server.js logs.");
            return;
        }

        // 3. Configure Razorpay Popup
        const options = {
            "key": data.key_id,      // Must match exactly what server.js sends
            "amount": data.amount,   // Must be in Paise (e.g., 50000 for ₹500)
            "currency": "INR",
            "name": "AWS Workshop Project",
            "description": `Registration for ${workshopId}`,
            "order_id": data.id,     // This is the Razorpay Order ID (starts with 'order_')
            "handler": function (response) {
                console.log("Payment Successful:", response);
                window.location.href = "/success";
            },
            "prefill": {
                "name": "Test User",
                "email": "test@example.com",
                "contact": "9999999999"
            },
            "theme": { "color": "#3399cc" },
            "modal": {
                "ondismiss": function() {
                    console.log("Checkout modal closed by user");
                }
            }
        };

        const rzp = new Razorpay(options);

        rzp.on('payment.failed', function (response) {
            console.error("Payment Failed:", response.error);
            alert("Payment Failed: " + response.error.description);
            window.location.href = "/cancel";
        });

        rzp.open();
    })
    .catch(err => {
        console.error("Fetch Error:", err);
        alert("Could not connect to server. Is node server.js running?");
    });
};

// 4. Event Listeners (Safe-check if buttons exist)
["work-1", "work-2", "work-3"].forEach((id, index) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            startPayment(`workshop_${index + 1}`);
        });
    }
});
