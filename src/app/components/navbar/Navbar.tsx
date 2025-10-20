import { oswald } from "@/fonts/oswald";
import { cn } from "@/lib/utils";

// Navbar
export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 w-full px-4 py-8 text-white flex items-center justify-between
         md:px-5 xl:px-10">
      <div className={cn(oswald.className)}>
        <h1 className="text-2xl font-bold">PickandPay</h1>
      </div>

      <div className="flex gap-12 items-center font-medium">
        <p>Home</p>
        <p>About us</p>
        <p>Branches</p>
        <p>Contact</p>
      </div>

      {/* <div className="">
        <h1 className="font-medium">+7511234523</h1>
      </div> */}
    </div>
  )
}
