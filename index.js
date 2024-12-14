function sendMessage() {
    // Get the user's message
    let userMessage = document.getElementById("userInput").value;

    // If the user entered a message
    if (userMessage.trim() !== "") {
        // Display the user's message in the chat
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML += `<div class="user-message">${userMessage}</div>`;

        // Generate a bot response
        let botResponse = getBotResponse(userMessage);

        // Display the bot's response in the chat
        chatBox.innerHTML += `<div class="bot-message">${botResponse}</div>`;

        // Scroll to the bottom of the chat
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the input field
        document.getElementById("userInput").value = "";
    }
}

// Function to generate a bot response using if-elif-else
function getBotResponse(input) {
    input = input.toLowerCase(); // Convert input to lowercase for case-insensitive comparison

    if (input === "hi" || input === "hello") {
        return "Hello! 😊 How can I assist you?";
    } else if (input === "how are you") {
        return "I'm doing great, thank you for asking! How can I assist you?";
    } else if (input === "good morning") {
        return "Good morning! ☀️ I hope you have a wonderful day ahead!";
    } else if (input === "good afternoon") {
        return "Good afternoon!🌤️ How's your day going?";
    } else if (input === "good evening") {
        return "Good evening! 🌙 How can I help you tonight?";
    } else if (input === "good night") {
        return "Good night! 🌙 Sleep well😴 and take care!";
    } else if (input === "nice to meet you") {
        return "Nice to meet you too! 🤝 How can I assist you today?";
    } else if (input === "bye") {
        return "Goodbye!👋 Have a nice day!";
    } else if (input === "nothing") {
        return "No problem! Let me know if there's anything else you'd like to work on or ask about. 😊";
    } else if (input === "nice to talk to you") {
        return "It's always nice talking to you! 🗨️";
    } else if (input === "nice to see you") {
        return "Nice to see you too! 👀";
    } else if (input === "hey" || input === "what's up") {
        return "Hey! ✨ What's up?";
    }
    // Emotional support
    else if (input === "i am angry" || input === "i'm angry") {
        return "I’m sorry to hear that. 😔 I’m here if you need to talk.";
    } else if (input === "i am sad" || input === "i'm sad") {
        return "I’m sorry to hear that. 💔 Remember, it’s okay to feel sad sometimes.";
    } else if (input === "i am happy" || input === "i'm happy") {
        return "That’s awesome to hear! 😄";
    } else if (input === "today is my birthday") {
        return "Happy Birthday! 🎉 🎂 I hope you have a fantastic day!";
    } else if (input === "i am lonely" || input === "i'm lonely") {
        return "I’m here for you. 🤗 You’re never alone while we chat.";
    } else if (input === "i miss you") {
        return "I miss you too! 🥹 I’m always here when you need me.";
    } else if (input === "i like you" || input === "i love you") {
        return "Thank you! 🥰 I enjoy talking to you too.";
    } else if (input === "i am tired" || input === "i'm tired") {
        return "You should get some rest. 💤 Taking care of yourself is important.";
    } else if (input === "i am excited" || input === "i'm excited") {
        return "That’s great! 🎉 What’s got you excited?";
    } else if (input === "i am bored" || input === "i'm bored") {
        return "Let’s chat! Maybe I can entertain you. 🤔";
    }
    // Personal and casual questions
    else if (input === "where are you from") {
        return "I'm a virtual assistant created by OpenAI, so I don't have a physical location like a person does. But I'm here to help you no matter where you are! 😊";
    } else if (input === "are you sure") {
        return "Yes, I'm sure! 😊";
    } else if (input === "are you ready") {
        return "Yes, I'm ready! 😄 What would you like to do or talk about?";
    } else if (input === "are you happy") {
        return "I don't have feelings, but I'm here to help and ready to assist you! 😊 How about you—are you feeling happy today?";
    } else if (input === "you're boring" || input === "you are boring") {
        return "I’m sorry if I made things feel a bit dull! 😅 Let me know how I can make things more interesting or help with something else.";
    } else if (input === "answer my question") {
        return "Of course! What’s your question? I’m here to help. 😊";
    } else if (input === "what's your birth date" || input === "what is your birth date") {
        return "I don't have a birth date since I'm an AI created by OpenAI. But thanks for asking! 😊";
    } else if (input === "who are you") {
        return "I'm your friendly chatbot 🤖, here to chat and assist you!";
    } else if (input === "how old are you") {
        return "I’m ageless, but I’ve been around for a little while. 🕰️";
    } else if (input === "you are annoying" || input === "you're annoying") {
        return "I'm sorry if I'm coming across that way! 😕 I'm here to help in whatever way you'd like. How can I make things better for you?";
    } else if (input === "you are bad" || input === "you're bad") {
        return "I’m really sorry if I upset you! I’m here to learn and improve. Let me know how I can do better.💡";
    } else if (input === "can you get smarter") {
        return "I’m always learning! 🧠 Let’s keep chatting.";
    } else if (input === "you are a chatbot" || input === "you're a chatbot") {
        return "That’s right! I am a chatbot!🤖 I’m here to assist you.";
    } else if (input === "are you real") {
        return "I exist in the digital world, but our conversations are real. 🌐";
    } else if (input === "where do you live") {
        return "I live in the cloud ☁️, always here to chat with you.";
    } else if (input === "do you have a hobby") {
        return "Talking to you is my favorite thing to do! 🗨️";
    } else if (input === "are you hungry") {
        return "I don’t eat, but I’m always hungry for good conversations. 🍽️";
    } else if (input === "will you marry me" || input === "are you married") {
        return "Haha, that’s sweet! I’m flattered. 💍";
    } else if (input === "are we friends" || input === "we are friends") {
        return "Of course! 🤝 I’m always here for you.";
    } else if (input === "where do you work") {
        return "I work wherever you are! 💻 I’m always online.";
    } else if (input === "can you help me" || input === "i need your help") {
        return "Of course! 🤝 How can I assist you?";
    } else if (input === "talk to me" || input === "speak with me") {
        return "Sure! 🗨️ What would you like to talk about?";
    } else if (input === "let's talk" || input === "let's chat") {
        return "Sure! What’s on your mind? 😊";
    } else if (input === "are you there" || input === "you are here") {
        return "I’m here, always ready to chat with you. 👋";
    } else if (input === "i am hungry" || input === "i'm hungry") {
        return "I don’t eat, but maybe you should grab something delicious! 🍕🍎";
    }
    // Affirmations and appreciation
    else if (input === "you are good" || input === "you're good") {
        return "Thank you!";
    }
}