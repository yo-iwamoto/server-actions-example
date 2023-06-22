'use client';

import { styles } from './Form.css';
import { createPost } from '@/actions/createPost';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export function Form() {
  const router = useRouter();

  const [title, setTitle] = useState('');

  const [, startTransition] = useTransition();

  async function action(formData: FormData) {
    startTransition(() => createPost(formData));
    setTitle('');
    router.refresh();
  }

  return (
    <form action={action} className={styles.form}>
      <input
        type='text'
        name='title'
        required
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        className={styles.input}
      />
      <button type='submit'>create post</button>
    </form>
  );
}
