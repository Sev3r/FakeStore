import Image from 'next/image'
import Link from 'next/link'

export default async function FakeStore() {
    const products = await fetch("https://fakestoreapi.com/products").then(
        (response) => response.json()
    )

  return (
    <>
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white"
      ></div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Contact</h1>
          <p className="mt-2 text-gray-600 max-w-prose">
            Fill in the form and we’ll get back to you within one business day.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product: any) => (
          <article 
          key={product.id} 
          className="rounded-2xl bg-white border border-gray-300 shadow-sm overflow-hidden flex flex-col">

            <div className="h-40 w-full flex items-center justify-center p-4">
            <Image
              className="object-contain h-40"
              src={product.image}
              alt={product.title}
              width={80}
              height={80}
              />
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <p className="text-sm text-gray-600">
                {product.description}
              </p>
              <div className="mt-1 text-sm">
                € {product.price}
              </div>
              <Link
                href={'/fakestore/${product.id}'}
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700"
              >
                View
              </Link>
            </div>
          </article>
          ))}
        </div>
      </main>
    </section>
      
        {/* {products.map((product: any) => (
            <div key={product.id} className="mb-4">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="text-gray-600">Price: {product.price}</p>
                <hr className="my-4" />
            </div>
        ))} */}
    </>
  )
}
