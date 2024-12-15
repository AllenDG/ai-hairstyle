import { FaRegImage } from "react-icons/fa6";

export default function ImageGenerated() {
  return (
    <div className="m-4 flex h-[91vh] flex-col items-center justify-center rounded-lg bg-white">
      <FaRegImage className="mb-4 h-24 w-24 text-purple-400 " />
      <p className="text-lg text-purple-400">
        Your generated image will appear here
      </p>
    </div>
  );
}
