function checkRisk() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const risk = document.getElementById('risk').value;
    const output = document.getElementById('output');

    const responses = [
            "I think you should buy Bitcoin.",
            "Have you considered buying Bitcoin?",
            "Bitcoin looks like a good fit for you.",
            "Based on your preferences, Bitcoin seems promising.",
            "Investing in Bitcoin might be a wise choice for you.",
            "You might benefit from acquiring some Bitcoin.",
            "How about jumping on the Bitcoin bandwagon?",
            "It sounds like Bitcoin could be your thing.",
            "Given your risk appetite, Bitcoin seems apt.",
            "Why not give Bitcoin a shot?",
            "Bitcoin could be a good addition to your portfolio.",
            "It feels like Bitcoin aligns well with your preferences.",
            "Ever thought about getting some Bitcoin?",
            "Based on what you've shared, Bitcoin is worth considering.",
            "Maybe it's time to dive into Bitcoin.",
            "I'd suggest looking into Bitcoin for your portfolio.",
            "Bitcoin seems to resonate with your choices.",
            "The signals point towards Bitcoin for you.",
            "From my assessment, Bitcoin could be a match.",
            "Ever pondered about adding Bitcoin to your assets?"
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        const response = responses[randomIndex];
    // You can add your custom conditions based on age, name or risk
    // Here's a simple condition just for demonstration
    output.textContent = `Hello, ${name}! ${response}`;
}
