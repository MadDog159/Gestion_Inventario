import { fetchProducts } from "../lib/data";
import { Card } from "../ui/dashboard/cards";
import { UpdateProduct } from '@/app/ui/invoices/buttons';
import PrintButton from './print-button';

export default async function Page(){
  const products = await fetchProducts()
  console.log(products)
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id}>
            <UpdateProduct id={product.id} />
            <Card
              title={product.name}
              category={product.category}
              stock={product.stock}
            />
          </div>
        ))}
        <PrintButton products={products} />
      </div>
    );
}

