import BottomBar from "@/components/BottomBar";
import Topics from "@/components/Topics";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#121212] relative min-h-screen">
        <main className="overflow-x-hidden">
          <Navbar />
          <section className="flex items-start relative">
            <div className="hidden sm:block">
              <Sidebar />
            </div>
            <div className="w-full sm:pl-24 md:pl-72 pb-8 pt-16 sm:pt-20 px-5 md:px-10 relative">
              <Topics />
              {children}
            </div>
            <div className="sm:hidden block relative">
              <BottomBar />
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
