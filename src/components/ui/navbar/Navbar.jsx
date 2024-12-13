import { useState } from "react";
import NavbarList from "./NavbarList";
import { Button } from "@/components/ui/button"; // Adjust this import based on your ShadCN setup
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"; // Add the Drawer component

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-3 shadow-md">
      <div className="mx-4 flex items-center justify-between lg:mx-9">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Hairstyle.AI</div>

        {/* Mobile Drawer Button */}
        <div className="lg:hidden">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger>
              <Button variant="outline" className="text-gray-800">
                Menu
              </Button>
            </DrawerTrigger>
            <DrawerContent side="right"> {/* Added side="right" here */}
              <div className="space-y-4 p-4">
                <NavbarList /> {/* Add your Navbar List here */}
                <div className="space-y-4">
                  <Button
                    variant="default"
                    className="w-full bg-blue-600 hover:bg-blue-500"
                  >
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Register
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop View - Navigation Links */}
        <div className="hidden items-center space-x-6 lg:flex">
          <NavbarList />
        </div>

        {/* Action Buttons for Desktop */}
        <div className="hidden space-x-4 lg:flex">
          <Button variant="default" className="bg-blue-600 hover:bg-blue-500">
            Login
          </Button>
          <Button variant="outline">Register</Button>
        </div>
      </div>
    </nav>
  );
}
