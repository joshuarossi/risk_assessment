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
            "Ever pondered about adding Bitcoin to your assets?",
            "Ready to ride the Bitcoin rollercoaster?",
            "Bitcoin: Not just a virtual coin, but a golden ticket!",
            "Surf's up! Wanna catch the Bitcoin wave?",
            "Bit-the-coin, before it bites you back with FOMO!",
            "Join the crypto party – Bitcoin's on the guest list!",
            "Bitcoin's knocking, will you answer the door?",
            "All aboard the Bitcoin spaceship – next stop, the moon!",
            "Heard of the Bitcoin dance? Time to join in!",
            "In the crypto jungle, be a Bitcoin lion!",
            "Dive into the Bitcoin pool, the water's fine!",
            "From a financial perspective, Bitcoin is a prudent asset to consider.",
            "Given market volatility, Bitcoin might provide a diversification strategy.",
            "Analyzing the current landscape, Bitcoin is a tangible investment option.",
            "From a blockchain viewpoint, Bitcoin's decentralized ledger is revolutionary.",
            "Considering long-term prospects, Bitcoin offers a potential hedge against inflation.",
            "Given its fixed supply, Bitcoin presents a deflationary asset proposition.",
            "Strategically, integrating Bitcoin could optimize your asset allocation.",
            "Technically speaking, Bitcoin's cryptographic foundation is robust and secure.",
            "In light of economic uncertainties, Bitcoin might serve as a digital store of value.",
            "Evaluating its historical performance, Bitcoin exhibits a high-risk, high-reward profile."
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        const response = responses[randomIndex];
    // You can add your custom conditions based on age, name or risk
    // Here's a simple condition just for demonstration
    output.textContent = `Hello, ${name}! ${response}`;
}
