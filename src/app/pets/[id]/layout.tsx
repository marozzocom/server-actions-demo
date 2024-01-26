import { Loading } from '@/components/loading'
import Link from 'next/link'
import { PropsWithChildren, Suspense } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Link href="/pets">
        <h1>Pets</h1>
      </Link>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}

export default Layout
