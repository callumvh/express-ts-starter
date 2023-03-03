import { createMachine } from "xstate";

export const promiseMachine = createMachine({
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