import axios from 'axios';
import { dailyBalanceInterface } from '../interfaces';

export const fetchDB = async (): Promise<dailyBalanceInterface[]> => {
    const db = [];
    var totalCount;
    var page = 1;
    do {
        try{
            const response = await axios.get(`https://resttest.bench.co/transactions/${page}.json`)
            totalCount = response.data.totalCount
            response.data.transactions.map( entry => {
                db.push(entry);
            })
        }
        catch (e){
            console.log(e);
        }
        page++
    }
    while (db.length < totalCount)
    return db;
}