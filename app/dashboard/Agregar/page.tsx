import Form from '@/app/ui/invoices/create-form';
import { fetchProducts } from "../../lib/data";
 
export default async function Page() {
  const products = await fetchProducts();
 
  return (
    <main>
      <Form products={products} />
    </main>
  );
}