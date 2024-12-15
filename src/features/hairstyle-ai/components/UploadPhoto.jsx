import { Button } from "@/components/ui/button";
import { FaCloudUploadAlt } from "react-icons/fa"; // Ensure you have react-icons installed

const UploadPhoto = () => {
  return (
    <div className="m-4 flex h-[250px] flex-col items-center justify-center rounded-lg bg-white">
      <FaCloudUploadAlt className="mb-2 text-4xl text-purple-400" />{" "}
      {/* Icon added */}
      <p className="text-lg text-purple-400">Drag or upload your own images</p>
      <Button className="mt-2 bg-purple-800 hover:bg-purple-900">Upload photo</Button>
    </div>
  );
};

export default UploadPhoto;
