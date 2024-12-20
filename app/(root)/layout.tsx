import MobileNavbar from "@/components/ui/mobile-navbar";
import Sidebar from "@/components/ui/sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const loggedIn = await getLoggedInUser();

  return (
    <main className="relative flex h-screen w-full overflow-auto">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNavbar user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
