
interface BlogDetailProps {
  params: { blogId: string };
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const { blogId } = await params;

  console.log(blogId); 

  return (
    <div className="min-h-screen">
      <h1>Blog Detail</h1>
      <p>Blog ID: {blogId}</p>
    </div>
  );
};

export default BlogDetail;
