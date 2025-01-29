import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IconType } from "react-icons";

interface navMainTypes {
  id?: number;
  title?: string;
  url?: string;
  icon?: IconType;
  seperator?: boolean;
}

export const sidebarData: navMainTypes[] = [
  {
    id: 1,
    title: "Dashbaord",
    url: "/",
    icon: AiOutlineHome,
  },
  {
    seperator: true,
  },
  {
    id: 2,
    title: "Assessments",
    url: "/dashboard/new-assessment",
    icon: BsClipboardCheck,
  },
  {
    id: 3,
    title: "Courses",
    url: "/courses",
    icon: IoSchoolOutline,
  },
  {
    id: 4,
    title: "Sections",
    url: "/sections",
    icon: HiOutlineBookOpen,
  },
];

// Types for the assessment data
interface Assessment {
  id: string;
  title: string;
  type: "Full Assessment" | "Quick Assessment";
  details: {
    title: string;
    value: string;
  }[];
}

// Assessment data array
export enum AssessmentType {
  Full = "Full Assessment",
  Quick = "Quick Assessment",
}

export const assessmentData: Assessment[] = [
  {
    id: "1",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Full,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
  {
    id: "2",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Quick,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
  {
    id: "3",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Full,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
  {
    id: "4",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Full,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
  {
    id: "5",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Full,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
  {
    id: "6",
    title: "Accounting: Calculating Ratios",
    type: AssessmentType.Full,
    details: [
      {
        title: "Version",
        value: "0.2",
      },
      {
        title: "Created",
        value: "Oct 18, 2023",
      },
      {
        title: "Updated",
        value: "Jan 8, 2024",
      },
      {
        title: "Type",
        value: "Lorem ipsum",
      },
    ],
  },
];

// text editor
