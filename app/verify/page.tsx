import { Metadata } from "next";
import VerifyToken from "./_components/Verify";

export const metadata: Metadata = {
  title: "Verify",
  description: "Verify purchase transaction.",
};

const VerifyTokenPage = () => {
  return <VerifyToken />;
};

export default VerifyTokenPage;
