import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'
import { cache } from 'react'

type Pet = {
  name: string
  breed: string
  id: number
}

type PetWithoutId = Omit<Pet, 'id'>

let db: Database
;(async () => {
  db = await open({
    filename: process.env.DB_PATH || '',
    driver: sqlite3.Database,
  })
})()

const getPets = cache(async () => {
  return db.all<Array<Pet>>('SELECT "name", "id" FROM pets')
})

const getPet = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return db.get<Pet>('SELECT "id", "name", "breed" FROM pets WHERE id = ?', id)
}

const addPet = async (pet: PetWithoutId) => {
  return db.run('INSERT INTO pets (name, breed) VALUES (?, ?)', pet.name, pet.breed)
}

export { getPets, getPet, addPet }
export type { Pet, PetWithoutId }
