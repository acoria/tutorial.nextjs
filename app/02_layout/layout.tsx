import { IHaveLayout } from "../types/IHaveLayout";

export default function Layout({ children }: IHaveLayout) {
  return (
    <div>
      <div>Some header component in central layout</div>
      {children}
    </div>
  );
}
