// "use client";

// import React, { useState } from "react";
// import { Typography } from "../../typography/typography";
// import { Button } from "../../ui/button";
// import { cn } from "@/lib/utils";
// import Search from "../search/search";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ListFilter } from "lucide-react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import AssessmentsDraftsTab from "../assessments-tabs/drafts";
// import ChangeViewTabs from "../change-view-tabs/change-view-tabs";
// import AssessmentPublishedtab from "../assessments-tabs/published";
// import AssessmentHistoricalTab from "../assessments-tabs/historical";
// import AssessmentOverviewtab from "../assessments-tabs/overview";
// import AssessmentRubricTab from "../assessments-tabs/rubric";
// import AssessmentNarrativewtab from "../assessments-tabs/narrative";
// import AssessmentTestTab from "../assessments-tabs/test";

// type Tab = {
//   name: string;
//   component: React.ReactNode;
// };

// const DashbaordFilterTabs: React.FC<{ isNewAssessmentPage?: boolean }> = ({
//   isNewAssessmentPage = false,
// }) => {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   const [tabsDropdownOpen, setTabsDropdownOpen] = useState<boolean>(false);

//   const commonTabs: Tab[] = [
//     { name: "Drafts", component: <AssessmentsDraftsTab /> },
//     { name: "Published", component: <AssessmentPublishedtab /> },
//     { name: "Historical", component: <AssessmentHistoricalTab /> },
//   ];

//   const newAssessmentTabs: Tab[] = [
//     { name: "Overview", component: <AssessmentOverviewtab /> },
//     { name: "Narrative", component: <AssessmentNarrativewtab /> },
//     { name: "Rubric", component: <AssessmentRubricTab /> },
//     { name: "Test", component: <AssessmentTestTab /> },
//   ];

//   const tabsData = isNewAssessmentPage ? newAssessmentTabs : commonTabs;

//   return (
//     <div className="flex sm:justify-start justify-between items-center w-full">
//       {/* Desktop View */}
//       <Tabs
//         value={tabsData[activeTabIndex]?.name.toLowerCase()}
//         onValueChange={(value) =>
//           setActiveTabIndex(
//             tabsData.findIndex((tab) => tab.name.toLowerCase() === value)
//           )
//         }
//         className="w-full p-0 space-y-6 sm:block hidden"
//       >
//         <div className="flex justify-between items-center w-full gap-x-6">
//           <div className="flex items-center gap-x-2 w-full">
//             <TabsList className="sm:flex hidden gap-x-2 bg-transparent">
//               {tabsData.map((tab, index) => (
//                 <TabsTrigger
//                   key={index}
//                   value={tab.name.toLowerCase()}
//                   className={cn(
//                     "px-4 py-2 rounded-[8px] text-[#1D818C]",
//                     activeTabIndex === index
//                       ? "!bg-primary-100"
//                       : "border border-customGray-300 bg-transparent"
//                   )}
//                 >
//                   <Typography variant="body3" className="text-[14px]">
//                     {tab.name}
//                   </Typography>
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//             {!isNewAssessmentPage && <Search />}
//           </div>
//           {!isNewAssessmentPage && <ChangeViewTabs />}
//         </div>
//         {tabsData.map((tab, index) => (
//           <TabsContent key={index} value={tab.name.toLowerCase()}>
//             {tab.component}
//           </TabsContent>
//         ))}
//       </Tabs>

//       {/* Mobile View */}
//       <Tabs className="sm:hidden block w-full space-y-6">
//         <div className="flex justify-between items-center w-full">
//           <DropdownMenu
//             open={tabsDropdownOpen}
//             onOpenChange={setTabsDropdownOpen}
//           >
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="size-10 bg-primary-100 rounded-[8px] border-none"
//               >
//                 <ListFilter className="text-primary-800" size={20} />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-40 ml-8 flex flex-col items-start gap-y-4 p-4">
//               <TabsList className="flex sm:flex-row flex-col justify-start items-center gap-y-2 !p-0 bg-transparent !h-auto w-full">
//                 {tabsData.map((tab, index) => (
//                   <TabsTrigger
//                     key={index}
//                     value={tab.name.toLowerCase()}
//                     className={cn(
//                       "px-4 py-2 rounded-[8px] text-[#1D818C] sm:w-auto w-full",
//                       activeTabIndex === index
//                         ? "!bg-primary-100 "
//                         : "border border-customGray-300 bg-transparent"
//                     )}
//                     onClick={() => {
//                       setActiveTabIndex(index);
//                       setTabsDropdownOpen(false);
//                     }}
//                   >
//                     <Typography variant="body3" className={cn("text-[14px]")}>
//                       {tab.name}
//                     </Typography>
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </DropdownMenuContent>
//           </DropdownMenu>
//           <div className="flex justify-center items-center gap-x-2">
//             {!isNewAssessmentPage && <Search />}
//             {!isNewAssessmentPage && <ChangeViewTabs />}
//           </div>
//         </div>
//         {tabsData[activeTabIndex]?.component}
//       </Tabs>
//     </div>
//   );
// };

// export default DashbaordFilterTabs;
