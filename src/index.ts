let count = 208_899_888 // 可以推测出是number
let course: string = "typescript"
let is_pulished: boolean = true
let level //不知道啥类型

// arrays
let numbers: number[] = [1, 2, 3]
numbers.forEach(n => n.toString)

// tuple
let user: [number, string] = [1, 'lijuan']

// enum
enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium
console.log(mySize)

// function
function calculate(income: number, taxYear = 2020): number {
    if(taxYear < 2020)
        return income * 1.2
    return income * 1.3
}

calculate(10_000, 2023)

// objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'lijuan',
    retire: (date: Date) => {
        console.log(date)
    }
}

// type aliases
type Employer = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employer = {id: 1, name: 'lijuan', retire: (date: Date) => {console.log(date)}}


// union types
function kgToLbs(weight: number | string): number{
    // narrowing 
    if(typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10')

//intersection tpyes
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal types
type Quantity = 50 | 100
let Quantity: Quantity = 100


// nullable types
function greet(name: string | null | undefined) {
    if(name)
        console.log(name)
    else
        console.log('hello')
}

greet(undefined)

// optional chaining
type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)
console.log(customer?.birthday)

// nullish coaelscing operator
let speed: number | null = null
let ride = {
    // falsy(undefined, null, '', false, 0)
    // nullish coaelscing operator
    speed: speed ?? 30
}

// type assertion
// let phone = document.getElementById('phone') as HTMLInputElement
let phone = <HTMLInputElement> document.getElementById('phone')
phone.value


