import { notFound } from "next/navigation"
import { getProductById, products } from "@/lib/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product-gallery"
import { ProductPageClient } from "@/components/product-page-client"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <ProductPageClient product={product} />
      
      <ProductGallery productImage={product.image} productName={product.name} />

      <Footer />
    </main>
  )
}
