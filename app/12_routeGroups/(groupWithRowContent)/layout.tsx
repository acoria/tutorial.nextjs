import { IHaveLayout } from "@/app/types/IHaveLayout";

export default function GroupWithRightContentLayout({ children }: IHaveLayout) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          height: "50rem",
          width: "20rem",
          backgroundColor: "purple",
        }}
      >
        Sidebar
      </div>
      <div>{children}</div>
    </div>
  );
}
