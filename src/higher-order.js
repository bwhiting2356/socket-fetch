import { socketFetch } from "./websocket-client";

export const higherOrder = () => {
    return socketFetch({request: 'fromOne', success: 'A', errors: ['oops!']});
}