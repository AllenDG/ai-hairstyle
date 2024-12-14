import { Button } from "@/components/ui/button";

const UploadPhoto = () => {
  return (
    <div className="mb-6 flex flex-col items-center">
      <p className="text-lg text-gray-600">Drag or upload your own images</p>
      <Button className="mt-2">Upload photo</Button>
    </div>
  );
};

export default UploadPhoto;
