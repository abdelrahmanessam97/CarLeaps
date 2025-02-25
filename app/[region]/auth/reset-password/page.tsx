import MainAuthFormLayout from "@/components/Auth/MainAuthFormLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarLeaps - Reset Password",
  description: "Reset Your Password",
};
export default function ResetPasswordPage() {
  return <MainAuthFormLayout currPage="resetPassword" />;
}
