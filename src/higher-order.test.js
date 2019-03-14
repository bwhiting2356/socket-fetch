import { higherOrder } from "./higher-order";
import { socketFetch } from './websocket-client';

jest.mock('./websocket-client');



describe('test if I can mock from a different function', () => {
    it('should still mock the response', async done => {
        socketFetch.mockImplementation(() => {
            return Promise.resolve('hi');
        })

        higherOrder().then(response => {
            expect(response).toBe('hi');
            done();
        })
    })

    it('should still mock the response with something else', async done => {
        socketFetch.mockImplementation(() => {
            return Promise.resolve('something else');
        })

        higherOrder().then(response => {
            expect(response).toBe('something else');
            done();
        })
    })
})