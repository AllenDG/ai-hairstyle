import Content from "@/components/hairstyle/Content"; // Assuming Content component is used for the header
import UploadPhoto from "@/features/hairstyle-ai/components/UploadPhoto";
import GenderSelection from "@/features/hairstyle-ai/components/GenderSelection";
import HairstyleSelection from "@/features/hairstyle-ai/components/HairstyleSelection";
import HairstyleColorSelector from "@/features/hairstyle-ai/components/HairstyleColorSelector";
import GenerateButton from "@/features/hairstyle-ai/components/GenerateButton";
import GeneratedHairstyles from "@/features/hairstyle-ai/components/GeneratedHairstyles";

export default function HairStyle() {
  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-10">
      {/* Header */}
      <Content />

      {/* Upload Photo Section */}
      <UploadPhoto />

      {/* Gender Selection */}
      <GenderSelection />

      {/* Hairstyle Selection */}
      <HairstyleSelection />

      {/* Hairstyle Color Selector */}
      <HairstyleColorSelector />

      {/* Generate Button */}
      <GenerateButton />

      {/* Display Generated Hairstyles */}
      <GeneratedHairstyles />
    </div>
  );
}
