import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Multi Step Form",
  description: "A frontend Mentor Multi form challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className="md:m-8 ">
        <section className=" md:h-[600px] h-screen md:rounded-3xl max-w-5xl mx-auto flex flex-col md:flex-row shadow-lg overflow-auto">
          <Sidebar />
          <main className="flex-1 flex flex-col ">{children}</main>
        </section>
      </body>
    </html>
  );
}
