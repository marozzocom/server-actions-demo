'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode, type FC } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

type Props = {
  children: ReactNode
  fallback?: FC
}

const DefaultError = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Error</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Something went south</p>
      </CardContent>
    </Card>
  )
}

const ErrorBoundary = ({ children, fallback }: Props) => {
  return <ReactErrorBoundary FallbackComponent={fallback ?? DefaultError}>{children}</ReactErrorBoundary>
}

export default ErrorBoundary
