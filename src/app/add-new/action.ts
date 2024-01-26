'use server'

import { addPet } from '@/app/db/utils'
import { revalidatePath } from 'next/cache'

const addPetAction = async (_: string, formData: FormData) => {
  const name = formData.get('name') as string
  const breed = formData.get('breed') as string

  if (!name || !breed) {
    return 'Invalid data'
    // throw new Error('Invalid data')
  }

  addPet({ name, breed })

  revalidatePath('/pets')

  return 'New pet added successfully'
}

export { addPetAction }
