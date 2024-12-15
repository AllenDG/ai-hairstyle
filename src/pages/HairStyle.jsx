import Content from "@/components/hairstyle/Content"; // Assuming Content component is used for the header
import UploadPhoto from "@/features/hairstyle-ai/components/UploadPhoto";
import GenderSelection from "@/features/hairstyle-ai/components/GenderSelection";
import HairstyleSelection from "@/features/hairstyle-ai/components/HairstyleSelection";
import HairstyleColorSelector from "@/features/hairstyle-ai/components/HairstyleColorSelector";
import GenerateButton from "@/features/hairstyle-ai/components/GenerateButton";
import GeneratedHairstyles from "@/features/hairstyle-ai/components/GeneratedHairstyles";
import ImageGenerated from "@/features/hairstyle-ai/components/ImageGenerated";

export default function HairStyle() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-300 px-4 py-10">
      {/* Header */}
      <Content />

      <div className="grid w-full grid-cols-1 md:grid-cols-2">
        <div className="w-full max-w-3xl bg-blue-500">
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

        <div className = "w-full max-w-3xl bg-red-500">
          <ImageGenerated />
        </div>
      </div>
    </div>
  );
}
