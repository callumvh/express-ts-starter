import { Message, Req, UserInfo } from "../Types/Req"
import { ButtonOption, Res, TypedResponse } from "../Types/Res"
import { createMachine, interpret } from "xstate";
import { promiseMachine as stateMachine } from "./Machine";

export const buildResponse = (botStateRequest: Req): Promise<Res> => {
    return new Promise<Res>((resolve, reject) => {

        // let retObject: Res;

        const promiseService = interpret(stateMachine).onTransition((state) => {
            console.log(state.nextEvents)
            const opts: ButtonOption[] = state.nextEvents.map((event) => {
                const button: ButtonOption = { text: event, callback_data: event }
                return button
            })

            const retObject: Res = {
                message: { messageID: "123", text: state.value.toString() },
                userInfo: { userId: "abc", firstName: "John", lastName: "Doe" },
                options: opts
            }
            if (state.event.type !== "xstate.init")
                // botStateResponse.json(retObject)
                resolve(retObject);
        }

        );
        console.log("testing4")

        promiseService.start();

        promiseService.send({ type: botStateRequest.message.text });

    });
};