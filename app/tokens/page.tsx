"use client";

import { Button, Typography } from "@/app/components/WithMt.exports";
import Meadow from "@/public/meadow.jpg";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import DefaultTable from "../components/Table";

const TokenPage = () => {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");
  const trxref = searchParams.get("trxref");

  useEffect(() => {
    async function verify() {
      const data = await axios.post("/api/paystack/verify", { reference });
      console.log(data);
    }
  }, [reference]);
  return (
    <div className="container min-h-screen">
      <div className="grid my-4 col-span-1 sm:grid-cols-2 place-items-center">
        <div className="">
          <Typography as={"h1"} className="font-bold text-4xl lg:text-6xl">
            Grain access, you are just a token away
          </Typography>

          <Button size="lg" className="rounded-full my-4">
            Purchase
          </Button>
        </div>
        <div className="mx-auto">
          <Image
            className="object-cover rounded"
            src={Meadow}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
      <DefaultTable />
    </div>
  );
};

export default TokenPage;
