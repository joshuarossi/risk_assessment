function checkRisk() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const risk = document.getElementById('risk').value;
    const output = document.getElementById('output');
    var response = "";
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

        const youthResponses = [
            "Did you know Bitcoin is a digital currency, unlike any other?",
            "Ever heard of Satoshi Nakamoto? That's the mysterious creator of Bitcoin!",
            "Dive into the world of blockchain, and you'll find Bitcoin at its heart.",
            "Imagine a world without banks - that's what Bitcoin envisions!",
            "Curious about cryptography? Bitcoin's a great place to start exploring.",
            "Bitcoin's not just coins, but a tech revolution!",
            "In the digital realm, Bitcoin is like the king of the castle.",
            "Ever dreamt of being a miner, but with computers? That's Bitcoin mining!",
            "If the internet had its currency, it would probably be Bitcoin.",
            "From gaming to global finance, Bitcoin's making waves.",
            "Have a knack for tech? You might enjoy understanding how Bitcoin works!",
            "At the intersection of finance and technology, there lies Bitcoin.",
            "For the geeks and the curious, Bitcoin offers a world of intrigue.",
            "Want to solve complex puzzles? Bitcoin miners do that every day!",
            "If coins could talk, Bitcoin would have some wild stories.",
            "In the vast ocean of digital currencies, Bitcoin was the first drop.",
            "Bitcoin: where mathematics meets money!",
            "Ever wondered what money could look like in 2050? Some say it might resemble Bitcoin.",
            "Curiosity didn't just kill the cat; it led some to discover Bitcoin.",
            "Dive into the Bitcoin rabbit hole, and you'll find a universe of wonders."
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    if ( age < 18) {
        response = youthResponses[Math.floor(Math.random() * youthResponses.length)];
    } else {
        response = responses[randomIndex];
    }
    const message = `Hello, ${name}! ${response}`;
    output.textContent = message
}
