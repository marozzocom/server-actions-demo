import { getPet } from '@/app/db/utils'
import { Pet } from './_components/pet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Main } from '@/components/main'

type Props = {
  params: {
    id: string
  }
}

const Page = ({ params }: Props) => {
  const { id } = params
  const petPromise = getPet(id)

  return (
    <Main>
      <Pet petPromise={petPromise} />
      <Button asChild>
        <Link href="/pets">Back</Link>
      </Button>
    </Main>
  )
}

export default Page
