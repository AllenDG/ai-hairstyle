import { Card } from "@/components/ui/card";

const GeneratedHairstyles = () => {
  return (
    <div className="flex flex-col items-center">
      <Card className="mb-4 p-4 shadow-md">
        <img
          src="https://via.placeholder.com/200x300"
          alt="Generated Hairstyle"
          className="w-full"
        />
      </Card>
      <div className="flex justify-between">
        <Card className="p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Generated Style 1"
            className="rounded-full"
          />
        </Card>
        <Card className="p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Generated Style 2"
            className="rounded-full"
          />
        </Card>
        <Card className="p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Generated Style 3"
            className="rounded-full"
          />
        </Card>
      </div>
    </div>
  );
};

export default GeneratedHairstyles;
