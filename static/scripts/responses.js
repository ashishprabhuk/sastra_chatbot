 function getBotResponse(userText) {
    try {
        // Load the FAQ JSON file
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'responses.json', false);
        xhr.send();

        // Parse the JSON file
        const faqData = JSON.parse(xhr.responseText);

        // Find the matching question in the JSON
        const matchingQuestion = faqData.responses.find(response => {
            return userText.toLowerCase().includes(response.Question.toLowerCase());
        });

        // Return the corresponding answer from the JSON
        if (matchingQuestion) {
            return matchingQuestion.Answer;
        } else {
            return "I'm sorry, I don't understand. Can you try again?";
        }
    } catch (error) {
        console.error(error);
        return "An error occurred while processing your request. Please try again later.";
    }
}