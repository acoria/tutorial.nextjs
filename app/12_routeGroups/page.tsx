import Link from "next/link";

export default function RouteGroups() {
  return (
    <>
      <div>
        <Link href="12_routeGroups/rowContent">Group with row layout</Link>
      </div>
      <div>
        <Link href="12_routeGroups/columnContent">
          Group with column layout
        </Link>
      </div>
    </>
  );
}
