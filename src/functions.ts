import axios from 'axios';
import { dailyBalanceInterface } from './interfaces';

export const fetchDB = async (): Promise<dailyBalanceInterface[]> => {
    const db = [];
    const totalCount = await getTotalCount();
    var page = 1;
    
    while (db.length < totalCount){
        try{
            const response = await axios.get(`https://resttest.bench.co/transactions/${page}.json`)
            
            response.data.transactions.map( entry => {
                db.push(entry);
            })
        }
        catch (e){
            console.log(e);
        }
        page++
    }
    return db;
}

export const calculateBalance = (db: dailyBalanceInterface[]): Map<String, Number> => {
    const dataMap = new Map();
    db.map(entry => {
        if (dataMap.has(entry.Date)){
            dataMap.set(entry.Date, Number(dataMap.get(entry.Date)) + Number(entry.Amount))
        } else {
            dataMap.set(entry.Date, Number(entry.Amount))
        }
    })
    return dataMap;
}

export const getTotalCount = async (): Promise<Number> => {
    try{
        const response = await axios.get('https://resttest.bench.co/transactions/1.json');
        return response.data.totalCount;
    }
    catch (e){
        console.log(e);
    }
}
