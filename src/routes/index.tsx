import { createFileRoute } from "@tanstack/react-router";
import { GiftSite } from "@/components/gift-site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <GiftSite />;
}
