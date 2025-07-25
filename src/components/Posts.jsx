import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

export default function Posts() {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  let content;
  if (isLoading) {
    content = <h1>Loading posts</h1>;
  } else if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  } else if (!isLoading && posts.length == 0) {
    content = <h1>No posts found</h1>;
  } else {
    content = (
      <ul>
        {posts.map((post) => (
          <li className="border border-gray-400 text-blue-400 p-2 m-2" key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return <>{content}</>;
}
