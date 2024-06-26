'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  id: z.string(),
  name: z.string(),
  stock: z.coerce.number(),
  category: z.string(),
});
 
const CreateProduct = FormSchema.omit({ id: true});
const UpdateProduct = FormSchema.omit({ id: true});

export async function createProduct(formData: FormData) {
  const { name, stock, category } = CreateProduct.parse({
    name: formData.get('productName'),
    stock: formData.get('stock'),
    category: formData.get('category'),
  });

  await sql`
  INSERT INTO products (name, stock, category)
  VALUES (${name}, ${stock}, ${category})
`;

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function updateProduct(id: string, formData: FormData) {
  const { name, stock, category } = UpdateProduct.parse({
    name: formData.get('productName'),
    stock: formData.get('stock'),
    category: formData.get('category'),
  });
 
  await sql`
    UPDATE products
    SET name = ${name}, stock = ${stock}, category = ${category}
    WHERE id = ${id}
  `;
 
  revalidatePath('/dashboard');
  redirect('/dashboard');
}