import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Queries
}

async function getSkills(){
    return await prisma.skill.findMany()
}

async function createSkill(new_name: string, new_description: string) {
    const skill = await prisma.skill.create({
        data: {
          name: new_name,
          description: new_description,
        },
      })
    return skill
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