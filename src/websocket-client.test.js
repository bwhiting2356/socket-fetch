import { socketFetch } from "./websocket-client";

jest.mock('./websocket-client');

beforeEach(() => {
    jest.resetAllMocks();
});

describe('websocket test', () => {
    it('should return true', () => {
        expect(true).toBe(true);
    })

    it('should also return true', () => {
        expect(true).toBe(true);
    })

    it('should return mock response', done => {
        socketFetch.mockImplementation(() => {
            return Promise.resolve('hi');
        })

        socketFetch({request: 'fromOne', success: 'A', errors: ['oops!']})
            .then(response => {
                expect(response).toBe('hi');
                done();
            })
    })
})