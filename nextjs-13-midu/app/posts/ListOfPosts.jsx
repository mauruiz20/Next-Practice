import { LikeButton } from './LikeButton'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(response => response.json())
}
export async function ListOfPosts () {
  const posts = await fetchPosts()

  return (
    posts.slice(0, 5).map(post => (
      <article key={post.id}>
        <h2 style={{ color: '#09f' }}>
          {post.title}
        </h2>
        <p>
          {post.body}
        </p>
        <LikeButton id={post.id} />
      </article>
    ))
  )
}
