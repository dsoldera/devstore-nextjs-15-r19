import data from './data.json'

// an function with the method that I want to expor
// router handler
// used to auth also because its possible to use sensible data
export async function GET() {
  return Response.json(data.products)
}