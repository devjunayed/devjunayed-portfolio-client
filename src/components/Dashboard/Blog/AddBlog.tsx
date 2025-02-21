import { Plus } from "lucide-react";
import Link from "next/link";

const AddBlog = () => {
 
  return (
    <>
      {/* Add Skill Modal */}
      <div className="flex justify-end">
       <Link href={"/creator/blog/create"} className="btn rounded-md bg-transparent border border-white"><Plus /> Add Blog</Link>
      </div>
    </>
  );
};

export default AddBlog;
