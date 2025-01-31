const person:{name:string,age:number,email:string}={
    name: "deepak",
    age: 20,
    email: "deepaktogloor@gmail.com"
}

console.warn(person.email)
console.warn(person.name)
console.warn(person.age)


const user:{name:string,age:number,email:string}={
    name: "deepak",
    age: 20,
    email: "deepaktogloor@gmail.com"
}

console.warn(user.email)
console.warn(user.name)
console.warn(user.age)

// to avoid duplication of code we use interface

type interface_User={
    name:string,
    age:number,
    email:string
}

const new_user:interface_User={
    name: "advik",
    age: 10,
    email: "dt@gmail.com"
}

console.warn(new_user.email)
console.warn(new_user.name)
console.warn(new_user.age)