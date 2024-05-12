"use client";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
//icon
import { LocateFixed } from "lucide-react";
//component
import { ThemeToggle } from "./ThemeToggle";
//UI
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
//utils
import { handleDateFormat, handleTimeFormat } from "@/lib/utils";
import { getGeoCode } from "@/actions/getGeoCode";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const initialDate = new Date();

  const formattedTime = handleTimeFormat(initialDate);
  const formattedDate = handleDateFormat(initialDate);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { lat, lon } = await getGeoCode(location);
      router.push(`/search?lat=${lat.toString()}&lon=${lon.toString()}`);
      setLocation("");
    } catch (error) {
      console.log("Somthining went wrong", error);
    }
  };

  return (
    <header>
      <Card className="flex flex-col lg:flex-row justify-between items-center p-3 gap-3 rounded-xl">
        <div className="w-full flex gap-x-2">
          <ThemeToggle />
          <div className="flex items-center ml-auto lg:ml-0">
            <p className="text-xs md:text-base font-semibold">
              {formattedTime}
            </p>
            <Separator className="w-10 mx-2 " />
            <p className="text-xs md:text-base font-semibold">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex w-full gap-x-2">
            <Input
              className="w-full"
              type="text"
              placeholder="Search location..."
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
            <Button type="submit">
              <span className="hidden md:block">Search location</span>
              <LocateFixed />
            </Button>
          </form>
        </div>
      </Card>
    </header>
  );
};

export default Header;
