import { createIcons, icons } from "lucide";

createIcons({ icons });

export default function ImageGenerated() {
  return (
    <div className="m-4 flex h-[91vh] flex-col items-center justify-center bg-gray-200">
      <i data-lucide="image" className="mb-4 h-24 w-24 opacity-50"></i>
      <p className="text-lg text-gray-600">
        Your generated image will appear here
      </p>
    </div>
  );
}
