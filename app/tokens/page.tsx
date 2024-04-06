import { Button, Typography } from "@/app/components/WithMt.exports";
import Meadow from "@/public/served.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DefaultTable from "../components/Table";

export const metadata: Metadata = {
  title: "Tokens",
  description: "View all your tokens.",
};

const TokenPage = () => {
  return (
    <div className="container min-h-screen">
      <div className="grid my-4 col-span-1 sm:grid-cols-2 place-items-center">
        <div className="">
          <Typography as={"h1"} className="font-bold text-4xl lg:text-6xl">
            Grain access, you are just a token away
          </Typography>

          <Link href={"/purchase"}>
            <Button size="lg" className="rounded-full my-4">
              Purchase
            </Button>
          </Link>
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
