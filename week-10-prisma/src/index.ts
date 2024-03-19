import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



async function insertUser(email: string, password: string, firstName: string, lastName: string){
    const res  = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res)
}


//insertUser("nkulhari96@gmail.com", "Qwerty@123", "Niteesh", "Kulhari")

interface updateParams{
    firstName: string;
    lastName: string
}

async function updateUser(username:string, {
    firstName,
    lastName
}: updateParams) {
    const res =  await prisma.user.update({
        where: {email: username},
        data:{
            firstName,
            lastName
        }
    })

    console.log(res)
}

// updateUser("nkulhari96@gmail.com", {
//     firstName: "Niteesh1", 
//     lastName:"kulhari1"
// })


async function getUserDetails(username:string){
    const res = await prisma.user.findFirst({
        where: {email: username}
    })

    console.log(res)
}

getUserDetails("nkulhari96@gmail.com")