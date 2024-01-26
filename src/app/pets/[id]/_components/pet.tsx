'use client'

import { Pet as TPet } from '@/app/db/utils'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { use } from 'react'

type Props = {
  petPromise: Promise<TPet | undefined>
}

const Pet = ({ petPromise }: Props) => {
  const pet = use(petPromise)

  if (!pet) {
    return <div>Pet not not found</div>
  }

  return (
    <Card>
      <CardHeader>
        <h1>{pet.name}</h1>
      </CardHeader>
      <CardContent>
        Breed: <p>{pet.breed}</p>
      </CardContent>
    </Card>
  )
}

export { Pet }
