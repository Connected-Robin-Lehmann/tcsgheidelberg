import { Studio } from "sanity";
import config from "@/sanity/sanity.config";

export default function AdminStudio() {
  return (
    <div style={{ height: "100vh", maxHeight: "100dvh", overscrollBehavior: "none" }}>
      <Studio config={config} />
    </div>
  );
}
