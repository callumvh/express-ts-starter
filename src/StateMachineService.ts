import { Message, Req, UserInfo } from "../Types/Req"
import { ButtonOption, Res, TypedResponse } from "../Types/Res"
import { promiseMachine } from '../src/Machine'
import { createMachine, interpret } from "xstate";

export const buildResponse = (botStateRequest: Req, botStateResponse: TypedResponse<Res>) => {
    // let retObject: Res;
    const promiseMachine = createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5QAcBOB7AtgS1mAdMmAHYTbFQDEASgKIDKA8gDIBqtA2gAwC6iK6WNgAu2dMX4gAHogBMARnn4AnAoAcAdgCsAGhABPRPIAsXAL5m9aLLgJFS5KowAKAFQCSjAHLc+SEMiCImIS-jIICkqq8pq6BkbKavhaFlYYOHiEJGQUlC4e3rK+koFCouKS4ZEq6tp6hghqSimWAem2WQ65dABStADCrsX+pcEVYXKKNTF18RFaSbItrcToEHAl7XglQeWhoOEAtABs9YgnqW02mfY5UDtlIZWIGknHS2cIygDMyS1p1wIADNsKhYMIHmN9tJEN9jLJkp8TFxkpdrBkCHgAMbiCCQvbPBBwhFxBryZTKNFbAjCAAWoLxI12TwmRPhiLmalkVMB+FQcHQABsAG6QfEsg6w9mkuRaDSo1rojr8gBWYCxwjFTMe40lCHhSK0CK4yzMQA */
        id: 'promise',
        initial: 'firstinit',
        states: {
            firstinit: {
                on: {
                    FIRST: { target: 'pending' }
                }
            },
            pending: {
                on: {
                    RESOLVE: { target: 'first' },
                    OPTION: { target: 'second' },
                    OPTION2: { target: 'third' },

                    REJECT: { target: 'resolved' }
                }
            },
            first: {

            },
            second: {

            },
            third: {

            },
            resolved: {
                type: 'final'
            }

        }
    });

    const promiseService = interpret(promiseMachine).onTransition((state) => {
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
            botStateResponse.json(retObject)

    }

    );
    console.log("testing4")

    promiseService.start();

    promiseService.send({ type: botStateRequest.message.text });

};