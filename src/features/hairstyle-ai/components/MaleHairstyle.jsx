import { Card } from "@/components/ui/card";

const MaleHairstyle = () => {
  return (
    <div className="flex justify-center gap-2">
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="h-auto w-full" // Updated to full width, no rounding
          />
        </Card>
        <p>Male 1</p>
      </div>
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="h-auto w-full" // Updated to full width, no rounding
          />
        </Card>
        <p>Male 2</p>
      </div>
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="h-auto w-full" // Updated to full width, no rounding
          />
        </Card>
        <p>Male 3</p>
      </div>

      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="h-auto w-full" // Updated to full width, no rounding
          />
        </Card>
        <p>Male 3</p>
      </div>
      <div className="flex flex-col items-center">
        <Card className="mb-2 p-4 shadow-md">
          <img
            src="https://via.placeholder.com/80x80"
            alt="Hairstyle"
            className="h-auto w-full" // Updated to full width, no rounding
          />
        </Card>
        <p>Male 3</p>
      </div>
    </div>
  );
};

export default MaleHairstyle;
