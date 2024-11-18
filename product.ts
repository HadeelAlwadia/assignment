/*The browser (or Google Chrome engine) cannot directly run TypeScript files (.ts), so you must compile the TypeScript code into JavaScript (.js) first.
 Once you have the JavaScript file, you can include it in an HTML page.*/
interface Iproduct{
    name: string
    price: number
}

const getTotalPrice=(products:Iproduct[]):number=>products.reduce((total, product) => total + product.price, 0);

//The function takes string and returns a boolean to specific email valid or no
const isValidEmail=(email: string): boolean =>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage:
console.log(isValidEmail("hadeel@example.com")); // true
console.log(isValidEmail("invalid email"));    // false