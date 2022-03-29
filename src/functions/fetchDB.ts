import axios from 'axios';
import { dailyBalanceInterface } from '../interfaces';

export const fetchDB = async (): Promise<dailyBalanceInterface[]> => {
    const URL = `https://resttest.bench.co/transactions/`
    const db: dailyBalanceInterface[] = [];
    var totalCount;
    var page = 1;
    do {
        try{
            const response = await axios.get(URL + `${page}.json`)
            totalCount = response.data.totalCount
            response.data.transactions.map( entry => {
                db.push(entry);
            })
        }
        catch (err){
            console.log('Could not fetch DB:');
            console.log(err);
        }
        page++
    }
    while (db.length < totalCount)
    return db;
}