import { Send } from "express-serve-static-core";


export interface TypedResponse<ResBody> extends Express.Response {
    json: Send<ResBody, this>;
  }

export interface Message {
    messageID: string;
    text: string;
}

export interface UserInfo {
    userId: string;
    firstName: string;
    lastName: string;
}

export interface ButtonOption {
    text: String;
    callback_data: String;
    url?: String;
}

export interface Res extends Express.Response {
    message: Message;
    options: ButtonOption[];
    userInfo: UserInfo;
}