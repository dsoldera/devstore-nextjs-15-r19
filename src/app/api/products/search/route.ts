import type { NextRequest } from 'next/server'
import { z } from 'zod'

import data from '../data.json'

export async function GET(request: NextRequest) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  /**
   * The NexyRequest >> nextURl has a few paramers that we can use to get the query
   * from the URL
   */
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}