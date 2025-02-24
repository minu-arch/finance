import { CardContent, CardHeader, CardTitle } from "@ui/card";
import { Card } from "@ui/card";
import { GridLayout } from "@/views/dashboard/components/grid-layout";

export default function ApartmentDescription() {
  return (
    <GridLayout columns={4} className="my-2">
    <Card className="pb-2">
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="text-sm font-medium">
          Total Apartamente
        </CardTitle>
      </CardHeader>
      <CardContent >
        <div className="text-2xl font-bold"> 
         1
        </div>
      </CardContent>
    </Card>
    <Card >
      <CardHeader className="flex flex-row items-center ">
        <CardTitle className="text-sm font-medium">
          Apartamente Ocupate
        </CardTitle>
      </CardHeader>
      <CardContent >
        <div className="text-2xl font-bold">0</div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center">
        <CardTitle className="text-sm font-medium">
          Apartamente Libere
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold"> 1 </div>
      </CardContent>
    </Card>
    <Card>
      <CardHeader className="flex flex-row items-center ">
        <CardTitle className="text-sm font-medium">
          Venituri Totale
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold"> 1000 RON</div>
      </CardContent>
    </Card>
  </GridLayout> 
  );
}
