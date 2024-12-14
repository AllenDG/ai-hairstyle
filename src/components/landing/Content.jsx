import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

// Import JSON data
import hairstyles from "@/data/hairstyle.json"; // assuming you stored the JSON file in /data folder

export default function Content() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set the data from JSON file
    setData(hairstyles);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* AI Hairstyle Changer Text */}
      <div className="mb-4 mt-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          AI Hairstyle Changer Online Free
        </h1>
      </div>

      {/* Short Description */}
      <div className="mb-6 text-center">
        <p className="text-lg text-gray-600">
          Transform your look instantly with our AI-powered hairstyle changer.
          Try a variety of styles to find the perfect one for you, all for free!
        </p>
      </div>

      {/* Card Section with Hairstyle Images */}
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {data.map((hairstyle) => (
          <Card key={hairstyle.id} className="max-w-sm">
            <CardHeader className="p-0">
              <img
                src={hairstyle.image}
                alt={hairstyle.title}
                className="h-[200px] rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold">
                {hairstyle.title}
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Section with Image on Left, Text on Right, and Button */}
      <div className="mt-20 flex items-center space-x-6">
        {/* Image on the left */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/500x200"
            alt="Sample Hairstyle"
            className="h-[300px] w-full rounded-lg object-cover"
          />
        </div>

        {/* Text and Button on the right */}
        <div className="w-2/3 pl-8">
          {/* Added left padding */}
          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Try on Short, Long, or Fringe Haircut with Hairstyle AI
          </h2>
          <p className="mb-4 text-md text-gray-600">
            See how this hairstyle can complement your features. This AI-powered
            tool lets you visualize how you would look with this style before
            committing to it. Whether you&apos;re planning a new look for an upcoming
            event or simply exploring fresh ideas, this tool gives you the
            perfect way to experiment with hairstyles and find the best fit for
            your face shape and personality.
          </p>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Try It Now
          </button>
        </div>
      </div>
    </div>
  );
}
