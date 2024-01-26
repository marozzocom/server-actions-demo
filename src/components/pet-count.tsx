import { getPets } from '@/app/db/utils'
import { Main } from '@/components/main'

const PetCount = async () => {
  const pets = await getPets()
  const petCount = pets.length

  return (
    <Main>
      <p>You have {Array.from({ length: petCount }).map(() => '🐶')} pets</p>
    </Main>
  )
}

export { PetCount }
