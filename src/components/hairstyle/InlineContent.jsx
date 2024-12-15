"use client";
import BoxReveal from "@/components/ui/box-reveal"; // Assuming BoxReveal is in the same directory

export default function InlineContent() {
  return (
    <section>
      <div className="mt-20 flex flex-col gap-4 md:grid md:grid-cols-2">
        {/* Left side text */}
        <div className="w-full max-w-3xl rounded-lg p-4">
          <BoxReveal boxColor="#750e8a" duration={0.75}>
            <h2 className="text-4xl font-semibold text-gray-800">
              Discover Your Perfect Hairstyle!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Transform your look with just a photo! Upload and try on different
              hairstyles to see which one fits you best. Experience the future
              of virtual makeovers!
            </p>
          </BoxReveal>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 md:grid md:grid-cols-2">
        {/* Left side text */}
        <div className="ml-auto w-full max-w-3xl rounded-lg p-4">{""}</div>
        <div className="ml-auto w-full max-w-3xl rounded-lg p-4">
          <BoxReveal boxColor="#750e8a" duration={0.75}>
            <h2 className="text-right text-4xl font-semibold text-gray-800">
              Discover Your Perfect Hairstyle!
            </h2>
            <p className="mt-4 text-right text-lg text-gray-600">
              Transform your look with just a photo! Upload and try on different
              hairstyles to see which one fits you best. Experience the future
              of virtual makeovers!
            </p>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
