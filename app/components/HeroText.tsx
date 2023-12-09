import Link from "next/link";
import { Button, Typography } from "./WithMt.exports";

const HeroText = () => {
  return (
    <div>
      <Typography as={"h1"} className="font-bold text-4xl lg:text-6xl">
        Grain access, you are just a token away
      </Typography>
      <div className="flex my-4 gap-4">
        <Link href={"/purchase"}>
          <Button size="lg" className="rounded-full">
            Purchase
          </Button>
        </Link>
        <Link href={"/tokens"}>
          <Button size="lg" variant="outlined" className="rounded-full">
            Tokens
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
