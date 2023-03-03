export interface TypedRequestBody<T> extends Express.Request {
    body: T
  }

export interface UserInfo {
    userId: string;
    firstName: string;
    lastName: string;
}

export interface Message {
    messageID: string;
    text: string;
}

export interface Req {
    messageType: string;
    userInfo: UserInfo;
    sessionID: string;
    message: Message;
}
