"use client";

import { Typography } from "@/app/components/WithMt.exports";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const VerifyToken = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const trxref = searchParams.get("trxref");

  const { data, error, isLoading } = useQuery({
    queryKey: ["token"],
    queryFn: () =>
      axios.post("/api/paystack/verify", { reference }).then((res) => res.data),
  });
  return (
    <div className="cotainer h-screen grid place-items-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Typography variant="h1">Token: {data?.amount}</Typography>
        <Typography variant="small">Amount: {data?.amount}</Typography>
      </div>
    </div>
  );
};

export default VerifyToken;
