import { dailyBalanceInterface } from './interfaces';
import { fetchDB, calculateBalance } from './functions';

const printDailyBalance = async (): Promise<Map<String, Number>> => {
    const db: dailyBalanceInterface[] = await fetchDB();
    const dailyBalanceSheet: Map<String, Number> = calculateBalance(db);
    console.log(dailyBalanceSheet);
    return dailyBalanceSheet;
}

printDailyBalance();