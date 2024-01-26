import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return <main className="flex flex-col gap-4 items-start">{children}</main>
}

export { Main }
