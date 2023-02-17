// IIFE
(function () {

  //QA container
  const defaultMenuState = "disabled";
  const container = document.querySelector(".questions-wrapper");

  const data = [
    {
      q: "How do I change my details?",
      a: "Details...",
    },
    {
      q: "What platforms will I be able to use?",
      a: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!",
    },
    {
      q: "How do I change my details?",
      a: "Details...",
    },
    {
      q: "How do I change my details?",
      a: "Details...",
    },
    {
      q: "How do I change my details?",
      a: "Details...",
    },
    {
      q: "How do I change my details?",
      a: "Details...",
    },
    {
      q: "How do I change my details?",
      a: "Details...",
    },
  ];

  // Dynamically populate UI
  const PopulateUI = () => {
    const questionsWrapper = document.querySelector(".questions-wrapper");
    let html = "";

    data.forEach((item) => {
      html += `
            <div class="qa-section">
                <div class="d-flex align-items-center justify-content-between">
                    <p class="question">${item.q}</p>

                    <button data-button-state="${defaultMenuState}" class="toggle-button">+</button>
                </div>

                <p data-menu-state="${defaultMenuState}" class="answer">${item.a}</p>
            </div>
        `;
    });

    if (questionsWrapper) {
      questionsWrapper.innerHTML = html;
    }
  };

  const hideAnswers = () => {
    const answerElements = document.querySelectorAll(".answer");
    const buttonElements = document.querySelectorAll(".toggle-button");

    // Hiding the answers
    answerElements.forEach((item) => {
      item.setAttribute("data-menu-state", defaultMenuState);
    });

    buttonElements.forEach((item) => {
      item.setAttribute("data-button-state", defaultMenuState);
      item.textContent = "+";
    });
  };

  PopulateUI();

  container.addEventListener("click", (event) => {
    const { target } = event;
    const isButton = target.dataset.buttonState;

    if (isButton) {
      const isEnabled = target.dataset.buttonState === "enabled";
      const siblingContainer = target.parentElement.nextElementSibling;
      let currentState = "";

      hideAnswers();

      if (isEnabled) {
        currentState = "disabled";
      } else {
        currentState = "enabled";
      }

      currentState = isEnabled ? "disabled" : "enabled";

      // Change button state
      target.setAttribute("data-button-state", currentState);

      // Change the button icon
      target.textContent = isEnabled ? "+" : "x";

      // Change menu state
      siblingContainer.setAttribute("data-menu-state", currentState);
    }
  });
})();