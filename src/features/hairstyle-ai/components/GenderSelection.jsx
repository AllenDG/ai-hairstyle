import { Button } from "@/components/ui/button";

const GenderSelection = () => {
  return (
    <div className=" flex m-4 flex-wrap justify-center bg-yellow-200">
      <Button className="mr-4" variant="primary">
        Male
      </Button>
      <Button variant="secondary">Female</Button>
    </div>
  );
};

export default GenderSelection;
