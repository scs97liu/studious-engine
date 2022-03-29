import { dailyBalanceInterface } from "./interfaces"

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

const mockDB2: dailyBalanceInterface[] = [
    {
        "Date": "2013-12-18",
        "Ledger": "Office Expense",
        "Amount": "-642.79",
        "Company": "COSTCO WHOLESALE #55 CO VANCOUVER"
    },
    {
        "Date": "2013-12-18",
        "Ledger": "Business Meals & Entertainment Expense",
        "Amount": "-1084.32",
        "Company": "BC LIQUOR #129 VANCOUVER BC"
    },
    {
        "Date": "2013-12-17",
        "Ledger": "",
        "Amount": "10000",
        "Company": "PAYMENT - THANK YOU / PAIEMENT - MERCI"
    }
]

export const mockResultDB: dailyBalanceInterface[] = [
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
    {
        "Date": "2013-12-18",
        "Ledger": "Office Expense",
        "Amount": "-642.79",
        "Company": "COSTCO WHOLESALE #55 CO VANCOUVER"
    },
    {
        "Date": "2013-12-18",
        "Ledger": "Business Meals & Entertainment Expense",
        "Amount": "-1084.32",
        "Company": "BC LIQUOR #129 VANCOUVER BC"
    },
    {
        "Date": "2013-12-17",
        "Ledger": "",
        "Amount": "10000",
        "Company": "PAYMENT - THANK YOU / PAIEMENT - MERCI"
    }
]

export const mockResponse = {
    data: {
        "totalCount": 6,
	    "page": 1,
	    "transactions": mockDB
    }
}

export const mockResponse2= {
    data: {
        "totalCount": 6,
	    "page": 2,
	    "transactions": mockDB2
    }
}