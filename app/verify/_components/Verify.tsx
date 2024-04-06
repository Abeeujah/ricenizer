"use client";

import {
  Card,
  CardBody,
  Spinner,
  Typography,
} from "@/app/components/WithMt.exports";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const VerifyToken = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const { data, error, isPending } = useQuery({
    queryKey: ["token"],
    queryFn: () =>
      axios.post("/api/paystack/verify", { reference }).then((res) => res.data),
  });

  if (isPending)
    return (
      <div className="container h-screen grid place-items-center">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="container h-screen grid place-items-center">
        <Card className="mt-6 max-w-2xl bg-gray-50">
          <CardBody>
            <Typography variant="small">
              Error retrieving token details
            </Typography>
          </CardBody>
        </Card>
      </div>
    );

  return (
    <div className="cotainer h-screen grid place-items-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Card className="mt-6 max-w-2xl bg-gray-50">
          <CardBody>
            <Typography variant="h1">Token: {data?.data?.token}</Typography>
            <Typography variant="small">
              Amount: {data?.data?.amount}
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default VerifyToken;
