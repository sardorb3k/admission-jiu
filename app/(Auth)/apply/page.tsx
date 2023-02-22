"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Apply() {
  const router = useRouter();

  const handleSubmit = async () => {
    const response = await fetch("/api/apply/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const pages: any = {
      personalinformation: "/apply/personal",
      passportinformation: "/apply/passport",
      contactinformation: "/apply/contact",
    };
    if (data.success) {
      router.push("/home");
    } else {
      router.push(pages[data.data]);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={200}
            height={92}
            unoptimized={true}
            loading="eager"
          />
          <div
            className="mt-6	animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
}
