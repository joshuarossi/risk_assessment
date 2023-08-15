function checkRisk() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const risk = document.getElementById('risk').value;
    const output = document.getElementById('output');

    // You can add your custom conditions based on age, name or risk
    // Here's a simple condition just for demonstration
    output.textContent = `Hello, ${name}! Buy BTC.`;
}
