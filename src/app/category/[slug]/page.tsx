import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>Page Category:  {params.slug}</div>
  )
}
