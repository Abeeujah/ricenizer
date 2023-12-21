import { Typography } from "@/app/components/WithMt.exports";
import PaymentForm from "./_components/PaymentForm";
import HeroBg from "@/public/herobg.jpg";

const PurchasePage = () => {
  return (
    <div className="h-screen">
      <div
        className="h-3/6 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('/herobg.jpg')`,
        }}
      >
        <div
          className="h-full w-full grid place-items-center"
          style={{ backgroundColor: "hsla(360, 100%, 100%, 0.2)" }}
        >
          <Typography
            as={"h1"}
            className="font-bold text-4xl lg:text-6xl text-center"
          >
            One click away from a perfect plate.
          </Typography>
        </div>
      </div>
      <PaymentForm />
    </div>
  );
};

export default PurchasePage;
