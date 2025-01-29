import { Typography } from "@/components/typography/typography";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DashboardRadioButtons = () => {
  return (
    <RadioGroup defaultValue="Do not show anything">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="size-6"
          value="Do not show anything"
          id="r1"
        />
        <Label htmlFor="r1">
          <Typography variant="body1" className="text-neutral-black">
            Do not show anything
          </Typography>
        </Label>
      </div>
      <div className="flex items-center space-x-2 ">
        <RadioGroupItem className="size-6" value="Show grade" id="r2" />
        <Label htmlFor="r2">
          <Typography variant="body1" className="text-neutral-black">
            Show grade
          </Typography>
        </Label>
      </div>
    </RadioGroup>
  );
};

export default DashboardRadioButtons;
