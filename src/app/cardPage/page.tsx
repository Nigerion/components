import { Card } from "@/ui/card/Card";
import { CardContent } from "@/ui/card/ui/CardContent/CardContent";
import { CardFooter } from "@/ui/card/ui/CardFooter/CardFooter";
import { CardHeader } from "@/ui/card/ui/CardHeader/CardHeader";

export default function CardPage() {
  return (
    <div style={{ display: "flex" }}>
      <Card>
        <CardHeader title="Title" subheader="subheader"></CardHeader>
        <CardContent>Здесь контен</CardContent>
        <CardFooter>Здесь футер</CardFooter>
      </Card>
      <Card>
        <CardHeader title="Бобо" subheader="Длдд"></CardHeader>
        <CardContent>Здесь контен</CardContent>
        <CardFooter>Здесь футер</CardFooter>
      </Card>
    </div>
  );
}
