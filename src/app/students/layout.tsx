import type { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/header/header";
import DashboardChat from "@/components/assistant/chat-box";
import { ViewProvider } from "@/context/view-context";

import "../globals.css";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import DashbaordAssessmentHeader from "@/components/assessment/assessment-header/assessment-header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-poppins",
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Dashbaord",
  description: "Generated by create next app",
};

type Tab = {
  name: string;
  href: string;
};

export default function StudentViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Tabs: Tab[] = [
    { name: "All Interactions", href: "/students/dashboard" },
    { name: "In Progress", href: "/students/dashboard/in-progress" },
    { name: "Not Started", href: "/students/dashboard/not-started" },
    { name: "Archived", href: "/students/dashboard/archived" },
  ];

  return (
    <html lang="en">
      <body
        className={cn(
          `font-[family-name:var(--font-lato)] antialiased`,
          poppins.variable
        )}
      >
        <main>
          <DashboardChat />
          <SidebarProvider>
            <SidebarInset>
              <div className="flex h-screen flex-col">
                <DashboardHeader />
                <section className="relative xxxl:w-[1320px] xxl:w-[85%] w-[90%] mx-auto pt-10 sm:pt-20 pb-10">
                  <div className="space-y-7 w-full">
                    <ViewProvider>
                      <DashbaordAssessmentHeader filterTabs={Tabs} />
                      {children}
                    </ViewProvider>
                  </div>
                </section>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
