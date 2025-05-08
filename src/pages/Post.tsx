import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { slug } = useParams();

  // Example post data (in a real app, this would come from an API)
  const post = {
    id: slug,
    title: `Post ${slug}`,
    content: `This is the content for post ${slug}.`,
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Home
      </Link>
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </article>
    </div>
  );
};

export default Post;
