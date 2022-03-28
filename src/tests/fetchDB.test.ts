import axios from 'axios'
import { fetchDB } from '../functions/fetchDB';

import { mockResponse, mockResponse2, mockResultDB } from './mockData';

describe ('function: fetchDB', () => {
    describe("when API call is successful", () => {
        it('returns an array with API response', async () => {
            const axiosSpy = jest.spyOn(axios, 'get').mockImplementation(
                (URL) : any => {
                    switch (URL){
                        case `https://resttest.bench.co/transactions/1.json`:
                            return Promise.resolve(mockResponse);
                        case `https://resttest.bench.co/transactions/2.json`:
                            return Promise.resolve(mockResponse2);
                        default: 
                            return Promise.resolve('no body')
                    }
                }
            );
            const db = await fetchDB();
            expect(db).toEqual(mockResultDB);
            expect(axiosSpy).toHaveBeenCalledTimes(2);
        });
    });

    describe("when API call fails", () => {
        it("should not populate db", async () => {
            const message = "Could not fetch DB";
            const axiosSpy = jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error(message));

            const db = await fetchDB();
            expect(db).toEqual([]);
        });
    });
});