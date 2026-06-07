<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Doubt Solver</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        #chatbox { border: 1px solid #ccc; height: 300px; padding: 10px; overflow-y: scroll; margin-bottom: 10px; }
        input { width: 80%; padding: 10px; }
        button { padding: 10px; }
    </style>
</head>
<body>
    <h3>Ask Your Tutor</h3>
    <div id="chatbox"></div>
    <input type="text" id="doubtInput" placeholder="Type your doubt here...">
    <button onclick="askTutor()">Ask</button>

    <script>
        const BACKEND_URL = "https://onrender.com"; // Replace with your Render URL

        async function askTutor() {
            const input = document.getElementById('doubtInput');
            const chatbox = document.getElementById('chatbox');
            
            chatbox.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
            
            const response = await fetch(`${BACKEND_URL}/api/ask`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: input.value })
            });

            const data = await response.json();
            chatbox.innerHTML += `<p><b>Tutor:</b> ${data.answer}</p>`;
            input.value = '';
            chatbox.scrollTop = chatbox.scrollHeight;
        }
    </script>
</body>
</html>
