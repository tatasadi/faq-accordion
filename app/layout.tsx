import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"
import Reference from "./components/Reference"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "FAQ Accordion",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} flex min-h-screen flex-col items-center justify-center`}
      >
        {children}
        <Reference />
      </body>
    </html>
  )
}
