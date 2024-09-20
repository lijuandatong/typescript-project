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
