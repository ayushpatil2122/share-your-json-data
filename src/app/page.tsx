import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-2 mt-10">
      <h1 className="text-3xl font-bold sm:text-5xl">Share Your data</h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Our app make easy to share your json data with others, Simply authentication
        and upload your data 
      </p>
    </div>
  );
}
