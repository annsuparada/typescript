let greetings: string = "Hello Ann!"
console.log(greetings)

// number
let userId: number = 334466

// boolean
let isLoggedIn: boolean = false

// function

//takes number and returns number
function addTwo(num: number): number {
    return num + 2
}

function getUpperCase(val: string) {
    return val.toUpperCase()
}
function signUpUser(name: string, email: string, isPaid: boolean){}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {}

const getHello = (s: string): string => {
    return `Hello ${s}`
}

addTwo(4)
getUpperCase('test')
loginUser('ann', 'a@a.com')
getHello('Kitty')

const heros = ['Thor', 'Spiderman', 'Ironman']
heros.map((hero): string => {
    return `Hero is ${hero}`
})

// return nothing
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

// throws an exception or terminates execution
function handdleError(errmsg: string): never {
    throw new Error(errmsg)
}

export {}