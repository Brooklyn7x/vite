import PostForm from "@/components/forms/PostForm";
import { useGetPostById } from "@/lib/react-query/queriesMutation";
import { Edit } from "lucide-react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostById(id);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14">
        <div className="flex items-center justify-start max-w-5xl gap-3 w-full">
          <Edit />
          <p className="text-lg font-bold">Edit Post </p>
        </div>

        <PostForm actions="Update" post={post} />
      </div>
    </div>
  );
};

export default EditPost;
