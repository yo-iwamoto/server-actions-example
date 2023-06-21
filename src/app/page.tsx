import { styles } from './page.css';
import { prisma } from '@/lib/db';

async function getAllPosts() {
  return prisma.post.findMany();
}

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <main className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>posts</h1>
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id}>
              <article>
                <h2>{post.title}</h2>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
