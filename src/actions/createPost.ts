'use server';

import { prisma } from '@/lib/db';
import { z } from 'zod';

const formSchema = z.object({
  title: z.string().min(1),
});

export async function createPost(formData: FormData) {
  'use server';

  const data = formSchema.parse(Object.fromEntries(formData.entries()));

  await prisma.post.create({ data });
}
