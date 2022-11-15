interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // stratTrial: () => string,
    stratTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken?: string
}

interface Admin extends User {
    role: 'Admin' | 'TA' | 'Leaner'
}

const ann: User = {dbId: 22, email: 'ann@google.com', userId: 123, 
stratTrial:() => {
    return 'now'
}, getCoupon(name: 'ann10', off: 10) {
    return 35
},}

ann.email = 'ann@gamil.com'

export {}