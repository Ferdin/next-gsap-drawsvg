import PaperMario from "@/components/PaperMario";
import Blob from "@/components/Blob";
import Wave from "@/components/Wave";
PaperMario;

export default function Home() {
  return (
    <div className="main-component w-full h-full">
      <PaperMario />
      <Blob />
      <Wave />
    </div>
  );
}
