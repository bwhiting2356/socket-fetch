export const socketFetch = ({ request, success, errors = [], timeOut = 1000 }) => {
    return new Promise((resolve, reject) => {
        let socket;
        setTimeout(() => {
            reject(new Error("websocket request failed"))
            socket && socket.close();
        }, timeOut)
        
        try {
            socket = new WebSocket("ws://localhost:8080/","echo-protocol");
            socket.addEventListener('open', () => {
                socket.send(request);
            });
            
            socket.addEventListener('message', e => {
                if (e.data == success) {
                    resolve(e.data);
                    socket.close();
                } else if (errors.includes(e.data)) {
                    reject(new Error(e.data));
                    socket.close();
                }
            })
        } catch (err) {
            reject(new Error(err))
        }
    })
}