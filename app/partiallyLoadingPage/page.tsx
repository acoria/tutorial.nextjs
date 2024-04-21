import { LoadingComponent } from "@/components/loadingComponent/LoadingComponent";
import { Suspense } from "react";
import ComponentLoadingData from "./ComponentLoadingData";

/*
    For partial loading, use the usual "Suspense" component.
*/
export default function PartiallyLoadingPage() {
  return (
    <main>
      <div>Content on page</div>
      <Suspense fallback={<LoadingComponent />}>
        <ComponentLoadingData />
      </Suspense>
    </main>
  );
}
