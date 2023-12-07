import React from "react";
import FormInput from "./FormInput";
import { Button } from "@/app/components/WithMt.exports";

const PaymentForm = () => {
  return (
    <div className="my-8">
      <form action="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <FormInput type="email" label="Email" />
          <FormInput type="amount" label="Amount" />
        </div>
        <Button className="rounded-full" size="lg">Purchase</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
