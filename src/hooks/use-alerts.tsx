import { useToast } from "./use-toast";

interface handleApiResponseMessagesParams {
  status: number;
  message: string;
}

export const useApiResponseMessages = () => {
  const { toast } = useToast();

  const handleApiResponseMessages = ({
    status,
    message,
  }: handleApiResponseMessagesParams) => {
    console.log(status, message);
    if (!status || !message) return;
    switch (status) {
      case 409:
      case 404:
      case 500:
      case 400:
        toast({
          variant: "destructive",
          title: "Error",
          description: `${
            message ? message : "Something went wrong. Please try again"
          }`,
        });
        break;
      case 200:
      case 202:
        toast({
          variant: "success",
          title: "Success",
          description: `${
            message ? message : "Something went wrong. Please try again"
          }`,
        });
        break;
      default:
        break;
    }
  };

  return { handleApiResponseMessages };
};
