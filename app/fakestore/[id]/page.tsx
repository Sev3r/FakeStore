
export default async function DetailPage({ 
    params, 
}: { 
    params: { id: string }
}) {
    type productItems = {
        id: number
        title: string
        price: number
        description: string
        image: string
    }
    const {id} = await params
    const product = await fetch('https://fakestoreapi.com/products/${id}').then(
        (response) => response.json()
    )
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <img src={product.image} alt={product.title}/>
    </div>
  )
}
