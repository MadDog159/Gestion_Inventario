import Form from '@/app/ui/invoices/edit-form';
import { fetchProductById } from '@/app/lib/data';
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [products] = await Promise.all([
        fetchProductById(id)
      ]);

  return (
    <main>
      <Form products={products} />
    </main>
  );
} 