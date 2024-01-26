'use client'

import { addPetAction } from '@/app/add-new/action'
import { Main } from '@/components/main'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from 'react-dom'

const Page = () => {
  const [state, formAction] = useFormState(addPetAction, '')

  return (
    <Main>
      <form action={formAction}>
        <div className="flex flex-col gap-4">
          <label>
            Name
            <Input name="name" />
          </label>
          <label>
            Breed
            <Input name="breed" />
          </label>
          <Button type="submit">Add pet</Button>
        </div>
      </form>
      <p>{state}</p>
    </Main>
  )
}

export default Page
