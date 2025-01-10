import HomeComponent from "@/components/HomeComponent";
import MasterLayout from "@/layout/MasterLayout";

export default function Home() {
  return (
    <main>
      <MasterLayout>
        <HomeComponent />
      </MasterLayout>
    </main>
  );
}
