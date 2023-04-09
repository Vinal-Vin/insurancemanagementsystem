import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

    const adminRole = await prisma.role.upsert({
        where: { name: 'Admin'},
        update: {},
        create: {
            name: 'Admin',
            description: 'Administrator'
        }
    }) 

    const custRole = await prisma.role.upsert({
        where: { name: 'Customer'},
        update: {},
        create: {
            name: 'Customer',
            description: 'Customer'
        }
    }) 

    const insurerRole = await prisma.role.upsert({
        where: { name: 'Insurer'},
        update: {},
        create: {
            name: 'Insurer',
            description: 'Insurer'
        }
    })

    const admin = await prisma.user.upsert({
        where: { email: 'admin@prisma.com' },
        update: {},
        create: {
        email: 'admin@prisma.com',
        first_name: 'admin',
        last_name: 'admin',
        city: 'Suva',
        password: 'admin123',
        roleId: 1
        }
    })

    const vinal = await prisma.user.upsert({
        where: { email: 'vinal@prisma.com' },
        update: {},
        create: {
        email: 'vinal@prisma.com',
        first_name: 'Vinal',
        last_name: 'Kumar',
        city: 'Suva',
        password: 'vinalk123',
        roleId: 2
        }
    })

    const agent47 = await prisma.user.upsert({
        where: { email: 'agent47@prisma.com' },
        update: {},
        create: {
        email: 'agent47@prisma.com',
        first_name: 'Agent',
        last_name: 'Kumar',
        city: 'Suva',
        password: 'agent47',
        roleId: 3
        }
    })

  
  console.log({ admin, vinal, agent47,adminRole, custRole, insurerRole })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })