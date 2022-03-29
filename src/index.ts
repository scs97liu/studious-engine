import { dailyBalanceInterface } from './interfaces';
import { fetchDB } from './functions/fetchDB';
import { calculateBalance } from './functions/calculateBalance';

const printDailyBalance = async (): Promise<Map<String, Number>> => {
    const db: dailyBalanceInterface[] = await fetchDB();
    const dailyBalanceSheet: Map<String, Number> = calculateBalance(db);
    dailyBalanceSheet.forEach( (value, key) => {
        console.log(`${key} ${value}`)
    })
    return dailyBalanceSheet;
}

printDailyBalance();