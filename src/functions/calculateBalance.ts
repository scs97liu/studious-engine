import { dailyBalanceInterface } from '../interfaces';
import { stringToDecimal } from './stringToDecimal';

export const calculateBalance = (db: dailyBalanceInterface[]): Map<String, Number> => {
    const dataMap = new Map();
    db.map(entry => {
        if (dataMap.has(entry.Date)){
            dataMap.set(entry.Date, stringToDecimal(dataMap.get(entry.Date) + Number(entry.Amount)))
        } else {
            dataMap.set(entry.Date, stringToDecimal(entry.Amount))
        }
    })
    return dataMap;
}
