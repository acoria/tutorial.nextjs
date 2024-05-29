import { IHaveLayout } from "@/app/types/IHaveLayout";

export default function GroupWithColumnLayout({ children }: IHaveLayout) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "10rem",
          backgroundColor: "purple",
        }}
      >
        Some header component or navbar
      </div>
      <div>{children}</div>
    </div>
  );
}
