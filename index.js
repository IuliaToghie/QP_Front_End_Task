// IFEE
(function() {
    const questionsWrapper = document.querySelector('.questions-wrapper');
    let html = "";

    const data = [
        {
            "q": "How do I change my details?",
            "a": "Details..."
        },
        {
            "q": "What platforms will I be able to use?",
            "a": "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!"
        },
        {
            "q": "How do I change my details?",
            "a": "Details..."    
        },
        {
            "q": "How do I change my details?",
            "a": "Details..."    
        },
        {
            "q": "How do I change my details?",
            "a": "Details..."    
        },
        {
            "q": "How do I change my details?",
            "a": "Details..."    
        },
        {
            "q": "How do I change my details?",
            "a": "Details..."    
        }
    ];

     // Dynamically populate UI
    data.forEach((item) => {
        html += `
            <div class="qa-section">
                <div class="d-flex align-items-center justify-content-between">
                    <p class="question d-flex">${item.q}</p>

                    <button class="show-more d-flex">+</button>
                    <button class="show-less d-none">x</button>
                </div>

                <p class="answer d-none">${item.a}</p>
            </div>
        `;
    });

    if(questionsWrapper) {
        questionsWrapper.innerHTML = html;
    }
})();