import axios from 'axios';

const app = async (): Promise<void> => {
    const count: Number = await getTotalCount();
    var currentCount: number = 0;
    const data: Map<String, Number> = new Map();
    var page: number = 1

    while (currentCount < count){
        try{
            const response = await axios.get(`https://resttest.bench.co/transactions/${page}.json`)
            response.data.transactions.map( entry => {
                if (data.has(entry.Date)){
                    data.set(entry.Date, Number(data.get(entry.Date)) + Number(entry.Amount))
                } else {
                    data.set(entry.Date, Number(entry.Amount))
                }
                currentCount++;
            })
            page++
        } 
        catch (e){
            console.log(e)
        }
    }

    console.log(data);
}


const getTotalCount = async (): Promise<Number> => {
    try{
        const response = await axios.get('https://resttest.bench.co/transactions/1.json');
        return response.data.totalCount;
    }
    catch (e){
        console.log(e);
    }
}

app();