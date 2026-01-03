import "./globals.css"
import Sidebar from "@/app/components/Sidebar"
import Footer from "@/app/components/Footer"

export const metadata = {
  title: "Matthew Kevin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cyan-900">
        <div className="md:flex md:min-h-screen w-full">
          <Sidebar />

          <div className="flex flex-col flex-grow">
            <div className="container p-8 flex-grow">
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
