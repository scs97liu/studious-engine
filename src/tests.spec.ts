import { getTotalCount, fetchDB, calculateBalance, stringToDecimal } from "./functions";
import { dailyBalanceInterface } from "./interfaces";

const mockDB: dailyBalanceInterface[] = [
    {
        "Date": "2013-12-19",
        "Ledger": "Travel Expense, Nonlocal",
        "Amount": "-200",
        "Company": "YELLOW CAB COMPANY LTD VANCOUVER"
    },
    {
        "Date": "2013-12-18",
        "Ledger": "Business Meals & Entertainment Expense",
        "Amount": "-8.94",
        "Company": "NESTERS MARKET #x0064 VANCOUVER BC"
    },
    {
        "Date": "2013-12-18",
        "Ledger": "Travel Expense, Nonlocal",
        "Amount": "-9.55",
        "Company": "VANCOUVER TAXI VANCOUVER BC"
    },
]

const mockMap = new Map([
    ['2013-12-19', -200],
    ['2013-12-18', -18.49]
])

describe ('function: calculateBalance', () => {
    it('returns a map with correct Balances', () => {
        expect(calculateBalance(mockDB)).toEqual(mockMap);
    })
})

describe ('function: stringToDecimal', () => {
    it('returns a number that rounds to nearest two decimals', () => {
        expect(stringToDecimal("22.92500002")).toBe(22.93)
    })
})