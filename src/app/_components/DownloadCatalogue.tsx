import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadCatalogue() {
  return (
    <Button
      className="font-bold bg-blue-600 hover:bg-blue-700"
      size={"lg"}
      asChild
    >
      <a href="assets/catalogue.pdf" download>
        <Download className="mr-2 h-4 w-4" />
        Download Catalogue
      </a>
    </Button>
  );
}
