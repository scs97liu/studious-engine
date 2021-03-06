# Bench Coding Assessment
Pre-requisites:
[NodeJS](https://nodejs.org/en/download/)

## To run locally:
After cloning the repo, in the root directory of the repo follow the commands below:
1. `npm install`
2. `npm run start`
3. Daily balance data should appear on console

## To run tests:
In the root directory run:
`npm run test`

## Description:
- Coding assessment written in NodeJS (Typescript)]
- `index.ts` is the entry point of the app and is run when we execute `npm run start`
- `src/functions` folder consists of the functions developed for the assessment
- `src/tests` folder consists of the unit tests for the assessment
- `mockData.ts` consists of mock information used for unit tests
- `interfaces.ts` defines the expected interface for the transaction object

### Functions:
- `fetchDB.ts`: **Returns**: dailyBalanceInterface[]
 This function fetches transaction entries from given API endpoint and inserts them into an array.
- `calculateBalance.ts`: **Parameters**: db: An array of type dailyBalanceInterface; **Returns**: Map\<\String, Number>. 
This functions takes in the transactions fetched and adds the daily balances in map using lookup. 
- `stringToDecimal.ts`: **Parameters**: stringNumber: string; **Returns**: Number.
This functions takes in a numeric string and returns it with type number rounded to the nearest 2 decimal places.

### What could be better:
- Could cover more test cases for unit tests
