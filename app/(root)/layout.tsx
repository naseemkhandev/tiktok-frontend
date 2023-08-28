import BottomBar from "@/components/BottomBar";
import Categories from "@/components/Topics";
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
            <div className="my-8 mt-20 px-5 sm:ml-60 2xl:pr-20 w-full sm:w-[70%] md:w-[80%] lg:w-[85%] xl:w-[90%] 2xl:w-full relative">
              <Categories />
              {children}
            </div>
            <div className="sm:hidden block">
              <BottomBar />
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
