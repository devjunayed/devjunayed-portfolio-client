import { TracingBeam } from "@/components/ui/tracing-beam";
import envConfig from "@/config/envConfig";
import Parse from 'html-react-parser';
import Image from "next/image";
import ProfileImg from "@/assets/image.png";

interface BlogDetailProps {
  params: { blogId: string };
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const { blogId } = await params;

  const response = await fetch(`${envConfig.baseApi}/blog/${blogId}`);
  const { data } = await response.json();


  return (
    <div className="min-h-screen  my-10 text-white mt-20 max-w-6xl mx-auto">
      <TracingBeam>
        <h1 className="text-xl mb-2">{data.title}</h1>
        <div className="my-2 items-center  gap-2 flex">
          <Image
            src={ProfileImg}
            className="rounded-full    shadow-inner shadow-white"
            alt="image"
            height={24}
            width={24}
          />
          <p>Md Junayed</p>
        </div>
        <div>{Parse(data.description)}</div>
      </TracingBeam>  
    </div>
  );
};

export default BlogDetail;
