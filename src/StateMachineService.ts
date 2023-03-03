import { Message, Req, UserInfo } from "../Types/Req"
import { ButtonOption, Res } from "../Types/Res"

export const buildResponse = (botStateRequest: Req): Res => {
    return {
        message: { messageID: "123", text: "Hello" },
        userInfo: { userId: "abc", firstName: "John", lastName: "Doe" },
        options: [
            { text: "Option 1", callback_data: "callback 1", url: "google.com" },
            { text: "Option 2", callback_data: "callback 2", url: "google.com" },
        ],
    }
};