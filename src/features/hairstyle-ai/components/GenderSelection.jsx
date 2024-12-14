import { Button } from "@/components/ui/button";

const GenderSelection = () => {
  return (
    <div className="mb-6">
      <Button className="mr-4" variant="primary">
        Male
      </Button>
      <Button variant="secondary">Female</Button>
    </div>
  );
};

export default GenderSelection;
