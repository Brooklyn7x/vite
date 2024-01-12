import PostForm from "@/components/forms/PostForm";

import { PlusCircle } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14">
        <div className="flex items-center justify-start max-w-5xl gap-3 w-full">
          <PlusCircle />
          <p className="text-lg font-bold">Create Post </p>
        </div>

        <PostForm />
      </div>
    </div>
  );
};

export default CreatePost;
