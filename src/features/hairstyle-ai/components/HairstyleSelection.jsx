import { Card } from "@/components/ui/card";

const HairstyleSelection = () => {
  return (
    <div className="mb-6 flex justify-between">
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="rounded-full"
          />
        </Card>
        <p>Style 1</p>
      </div>
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="rounded-full"
          />
        </Card>
        <p>Style 2</p>
      </div>
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="rounded-full"
          />
        </Card>
        <p>Style 3</p>
      </div>
    </div>
  );
};

export default HairstyleSelection;
