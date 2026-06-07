import CreatePostHeader from "@/components/app/post/CreatePostHeader";
import PostForm from "@/components/app/post/PostForm";

export default function CreatePostPage() {
  return (
    <div className="flex flex-col min-h-screen w-full pb-24 lg:pb-0">
      <CreatePostHeader/>
      <PostForm/>
    </div>
  );
}
