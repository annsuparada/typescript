type User = {
    readonly _id: string
    name: string
    email: string
    isPaid: boolean
    creditCardDetail?: number //optional
}

type Course = {
    name: string
    price: number
}

// combine multiple types
type CardNumber = {
    cardnumber: number
}

type CardDate = {
    cardDate: string
}

type CardDeteils = CardNumber & CardDate & { cvv: number }

// function takes object
function createUser(user: User) {}

createUser({_id: '1234', name: 'Ann', email: 'ann@gmail.com', isPaid: false})

// return an object
function createCourse(): Course {
    return {name: "reactjs", price: 399}
}

export {}