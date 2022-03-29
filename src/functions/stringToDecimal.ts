export const stringToDecimal = (stringNumber: string): Number => {
    try{
        const numeric = Number(Number(stringNumber).toFixed(2));
        return numeric;
    } catch (e){
        console.log('Error:')
        console.log(e);
    }
}
