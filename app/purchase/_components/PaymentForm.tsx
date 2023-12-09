"use client";
import { Button, Input, Typography } from "@/app/components/WithMt.exports";
import { paymentSchema } from "@/app/utils/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

type Payment = z.infer<typeof paymentSchema>;

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Payment>({
    resolver: zodResolver(paymentSchema),
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const initiateTransactionUrl = "/api/paystack/initialize";
  const verifyTransactionUrl = "/api/paystack/verify";

  const submitHandler: SubmitHandler<Payment> = (data) => {
    setIsLoading(true);
    axios
      .post(initiateTransactionUrl, data)
      .then((response) => {
        const paystack_authorzation_url = response.data.data.authorization_url;
        router.push(paystack_authorzation_url);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="my-8">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="w-full">
            <Input
              label="Email"
              type="email"
              {...register("email")}
              crossOrigin={""}
            />
            {errors.email?.message && (
              <Typography color="red" as={"h6"} className="my-2">
                {errors.email.message}
              </Typography>
            )}
          </div>
          <div className="w-full">
            <Input
              label="Amount"
              type="amount"
              {...register("amount")}
              crossOrigin={""}
            />
            {errors.amount?.message && (
              <Typography color="red" as={"h6"} className="my-2">
                {errors.amount.message}
              </Typography>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="rounded-full"
          size="lg"
          disabled={isLoading}
        >
          Purchase
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
