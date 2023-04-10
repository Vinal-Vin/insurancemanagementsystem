import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // Make this a Landing Page
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to IMS</h1>
    </main>
    // <>
    //   <div className="flex flex-col h-screen justify-center mt-12">
    //     <div className=" container mx-auto text-center flex-1">Welcome to IMS</div>
    //   </div>
    // </>
  );
}
