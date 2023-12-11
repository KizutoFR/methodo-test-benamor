enum WelcomeMessage {
    DAY = "Bonjour",
    NIGHT = "Bonsoir"
}

enum EndMessage {
    DAY = "Bonne journée",
    NIGHT = "Bonne soirée"
}

const date: Date = new Date();
const currentHour = date.getHours();

let welcomeMessage: WelcomeMessage;
let endMessage: EndMessage;

if (currentHour >= 17 || currentHour < 5) {
    welcomeMessage = WelcomeMessage.NIGHT;
    endMessage = EndMessage.NIGHT;
} else {
    welcomeMessage = WelcomeMessage.DAY;
    endMessage = EndMessage.DAY;
}

export {welcomeMessage, endMessage} 