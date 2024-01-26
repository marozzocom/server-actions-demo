import { getPets } from '@/app/db/utils'
import { Main } from '@/components/main'
import { PetCount } from '@/components/pet-count'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

const Page = async () => {
  const pets = await getPets()

  return (
    <Main>
      <Card>
        <CardHeader>Pets</CardHeader>
        <CardContent className="flex flex-col gap-4">
          {pets.map((pet) => {
            return (
              <Card key={pet.id}>
                <CardHeader>
                  <Link href={`/pets/${pet.id}`}>{pet.name}</Link>
                </CardHeader>
              </Card>
            )
          })}
        </CardContent>
        <CardFooter>
          <PetCount />
        </CardFooter>
      </Card>
      <Button asChild>
        <Link href="/add-new">Add new</Link>
      </Button>
    </Main>
  )
}

export default Page
