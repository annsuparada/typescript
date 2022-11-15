let score: number | string

score = 9
score = '10'

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let ann: User | Admin = {name: 'Ann', id: 123}
ann = {username: 'A', id: 123}

// function
function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLocaleLowerCase()
    } else {
        id + 2
    }
}

// array
const data: number[] = [1, 2, 3]
const data2: (number | string)[] = [1 , 2, "5"]

let seatAllotment: 'aisle' | 'middle' | 'windo'
seatAllotment = 'aisle'

export {}