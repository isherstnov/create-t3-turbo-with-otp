"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { authClient } from "@acme/auth/client";
import { Button } from "@acme/ui/button";

export const OtpForm = () => {
  const [otpValue, setOtpValue] = useState("");
  const router = useRouter();

  const handleOtpSubmit = async () => {
    const result = await authClient.signIn.emailOtp({
      email: "test@example.com",
      otp: otpValue,
    });

    if (result.data?.user) {
      router.push("/");
    }
  };

  return (
    <div className='inline-flex flex-col gap-2'>
      <label>Check the console log of the Next.js server to get the OTP</label>
      <input
        type="text"
        name="otp"
        required
        className="rounded-md border border-gray-300 p-2"
        value={otpValue}
        onChange={(e) => setOtpValue(e.target.value)}
      />
      <Button size="lg" onClick={handleOtpSubmit}>
        Sign in with OTP
      </Button>
    </div>
  );
};
