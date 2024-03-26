interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type users = Pick<User, "name"|"age">

function sumOfAge(user1: users, user2: users){
    return user1.age + user2.age;
}


console.log(sumOfAge({name: "Niteesh", age:22}, {name:"Unknown", age:25 }))

