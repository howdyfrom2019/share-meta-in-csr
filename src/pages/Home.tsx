import { Link } from "react-router-dom";

const Home = () => {
  // Example posts data
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    { id: 3, title: "Third Post" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg">
            <Link
              to={`/post/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
