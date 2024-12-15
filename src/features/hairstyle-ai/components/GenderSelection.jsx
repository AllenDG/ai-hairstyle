import { useState } from "react";
import { Button } from "@/components/ui/button";
import MaleHairstyle from "@/features/hairstyle-ai/components/MaleHairstyle"; // Adjust the path if necessary
import FemaleHairstyle from "@/features/hairstyle-ai/components/FemaleHairstyle"; // Adjust the path if necessary

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="m-4">
      {/* Gender Selection Buttons */}
      <div className="mb-4 flex flex-wrap justify-start">
        <Button
          className={`mr-4 ${
            selectedGender === "Male"
              ? "bg-purple-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleSelection("Male")}
        >
          Male
        </Button>
        <Button
          className={`${
            selectedGender === "Female"
              ? "bg-purple-800 text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleSelection("Female")}
        >
          Female
        </Button>
      </div>

      {/* Conditionally Render Hairstyles */}
      <div>
        {selectedGender === "Male" && <MaleHairstyle />}
        {selectedGender === "Female" && <FemaleHairstyle />}
      </div>
    </div>
  );
};

export default GenderSelection;
