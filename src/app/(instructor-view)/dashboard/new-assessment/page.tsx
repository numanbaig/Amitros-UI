import React from "react";
import Loader from "./(componenents)/loader";
import TextEditor from "@/app/(instructor-view)/dashboard/new-assessment/(componenents)/text-editor/tiny-editor";
import { Typography } from "@/components/typography/typography";
import DashboardCheckbox from "./(componenents)/check-box";
import DashboardTextArea from "./(componenents)/textarea";
import DashboardRadioButtons from "./(componenents)/radio";

const DashbaordNewAssessmentPage = () => {
  const loader = false;
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="space-y-6">
          <div className="space-y-2">
            <Typography variant="body1" className="text-neutral-black">
              Interaction title
            </Typography>
            <div
              className="w-full border border-gray-200 h-[45px] px-4 rounded-[8px] flex items-center focus:outline-none outline-none"
              // contentEditable="true"
            >
              <Typography variant="body1" className="text-neutral-black">
                Making a Persuasive Pitch
              </Typography>
            </div>
          </div>
          <TextEditor
            title="Interaction instructions (shown to learner)"
            content=""
          />
          <DashboardCheckbox />
          <DashboardTextArea label="Openning question" />
          <DashboardTextArea label="Follow-up questions" />
          <div className="space-y-4 w-full h-full pb-">
            <Typography variant="body1" className="text-neutral-black">
              Show overall points or percentage grade on assessment
            </Typography>
            <DashboardRadioButtons />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashbaordNewAssessmentPage;
