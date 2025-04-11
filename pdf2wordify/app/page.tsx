import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-50 p-8">
        <h1>Hello</h1>
        <h1 className="text-2xl font-bold text-gray-800">
          Shadcn Button Variants
        </h1>

        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="mt-8 flex gap-4">
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </main>
    </>
  );
}
