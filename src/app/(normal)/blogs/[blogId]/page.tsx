import { TracingBeam } from "@/components/ui/tracing-beam";
import envConfig from "@/config/envConfig";
import Parse from "html-react-parser";
import Image from "next/image";
import ProfileImg from "@/assets/image.png";

interface BlogDetailProps {
  params: Promise<{ blogId: string }>;
}

const BlogDetail = async (props: BlogDetailProps) => {
  const params = await props.params;
  const { blogId } = params;

  let data = null;
  try {
    const response = await fetch(`${envConfig.baseApi}/blog/${blogId}`, {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to fetch blog data");

    const json = await response.json();
    data = json.data;
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (!data) {
    return (
      <div className="text-white text-center mt-20">
        <p className="text-xl">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen my-10 text-white mt-20 px-6 max-w-6xl mx-auto">
      <TracingBeam>
        <h1 className="text-xl mb-2">{data.title}</h1>

        <div className="my-2 items-center gap-2 flex">
          <Image
            src={ProfileImg}
            className="rounded-full shadow-inner shadow-white"
            alt="Author profile image"
            height={24}
            width={24}
          />
          <p>Md Junayed</p>
        </div>

        <div className="aspect-[16/9] mx-auto max-h-[400px] my-10  relative">
          <Image
            src={data.thumbnail}
            alt={data.title || "Blog Thumbnail"}
            className="object-cover rounded-md"
            fill
            priority
          />
        </div>

        <div>{Parse(data.description)}</div>
      </TracingBeam>
    </div>
  );
};

export default BlogDetail;
