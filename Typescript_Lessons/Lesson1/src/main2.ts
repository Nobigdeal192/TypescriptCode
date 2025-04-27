//Basic Types
let myName: string = 'Nick'
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'Nick'
meaningOfLife = 42
isLoading = true
album = 1999


//Function
const sum = (a: number, b: string) => {
    return a + b
}

//Unions
let postId: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g