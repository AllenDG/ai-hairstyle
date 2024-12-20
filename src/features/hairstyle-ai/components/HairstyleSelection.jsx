import { Card } from "@/components/ui/card";

const HairstyleSelection = () => {
  return (
    <div className="m-4 flex justify-center bg-purple-500 p-4">
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
