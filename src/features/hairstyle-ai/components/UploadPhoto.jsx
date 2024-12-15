import { Button } from "@/components/ui/button";

const UploadPhoto = () => {
  return (
    <div className="flex  h-[250px] flex-col justify-center items-center bg-gray-500 m-4">
      <p className="text-lg text-gray-600 ">Drag or upload your own images</p>
      <Button className="mt-2">Upload photo</Button>
    </div>
  );
};

export default UploadPhoto;
