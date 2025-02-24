import { z } from "zod";

import data from '../data.json';
/**
 * From nextjs 15 params are asynchronous
 */
export async function GET(
  _: Request, 
  context: { params: Promise<{ slug: string }> }
  ) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const param = await context.params;
  const slug = z.string().parse(param.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json(product)
}