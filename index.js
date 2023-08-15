<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Risk Preference Guide</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Risk Preference Guide</h1>
        <label for="name">What's your name?</label>
        <input type="text" id="name" placeholder="Enter your name">
        
        <label for="age">How old are you?</label>
        <input type="number" id="age" placeholder="Enter your age">
        
        <label for="risk">Select your risk preference:</label>
        <select id="risk">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        
        <button onclick="checkRisk()">Submit</button>
        
        <p id="output"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
