import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const ExampleForm = () => {
  return (
    <div className="p-4">
      <form>
        <div className="mb-4">
          <Label htmlFor="color">Hairstyle Color</Label>
          <Select>
            <SelectTrigger>
              <span>Select a color</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="black">Black</SelectItem>
              <SelectItem value="blonde">Blonde</SelectItem>
              <SelectItem value="brown">Brown</SelectItem>
              <SelectItem value="red">Red</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Other form fields */}
      </form>
    </div>
  );
};

export default ExampleForm;
