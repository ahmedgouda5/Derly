import BoxModels from "@/components/Featuers/Homepage/BoxModels";
import { ChartAreaGradient } from "@/components/Featuers/Homepage/chart";

export default function Home() {
 
  return (
    <div className=" pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <BoxModels/>
      </div>
      <div className=" mt-4 " >
        <ChartAreaGradient/>
      </div>
      
    </div>
  );
}
