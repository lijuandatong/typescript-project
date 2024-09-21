// generic class
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V){}
}

let pair = new KeyValuePair<number, string>(1, 'apple')

let pair1: KeyValuePair<number, string> = new KeyValuePair(1, 'apple')

// generic function
function wrapInArray<T>(value: T) {
    return [value]
}

wrapInArray('a')

// generic interfaces
interface Result<T> {
    data: T | null
    error: string | null
}

// type mapping
interface Product {
    name: string
    price: number
}

type ReadOnly<T> = {
    // index signature
    // keyof
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]?: T[K]
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

let product: Readonly<Product> = {
    name: 'egg',
    price: 1
} 