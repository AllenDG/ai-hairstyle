import { Button } from "@/components/ui/button";

const GenerateButton = () => {
  return (
    <div className="m-4 rounded-lg bg-purple-800 hover:bg-purple-900">
      <Button className="h-10 w-full rounded-lg text-white" variant="primary">
        Generate
      </Button>
    </div>
  );
};

export default GenerateButton;
