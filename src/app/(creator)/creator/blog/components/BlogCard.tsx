"use client";
import { useDeleteBlog } from "@/hooks/blog.hook";
import { TBlogData } from "@/types";
import { cn } from "@/utils/utils";
import { DeleteIcon, Edit } from "lucide-react";
import Swal from "sweetalert2";

export function BlogCard({ blog }: { key: number; blog: TBlogData }) {
  const { mutate: handleDelete } = useDeleteBlog();

  const handleDeleteBlog = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
         handleDelete(blog?._id as string);
      }
    });
   
  };

  return (
    <div className="max-w-xs w-full group/card">
      {/* utility */}

      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "backgroundImage bg-cover group"
        )}
        style={{
          backgroundImage: `url(${blog?.thumbnail})`,
        }}
      >
        <div className="group-hover:flex z-30 hidden text-white absolute right-2 top-2 gap-2 ">
          <button>
            <Edit />
          </button>
          <button onClick={handleDeleteBlog}>
            <DeleteIcon />
          </button>
        </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10"></div>
        <div className="text content">
          <h1 className="font-bold text-lg md:text-xl text-gray-50 relative z-10">
            {blog?.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {blog?.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
