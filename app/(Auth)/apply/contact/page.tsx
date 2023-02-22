"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png";
import InputMask from "react-input-mask";
import { useEffect } from "react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Apply() {
  const [message, setMessage] = useState("");
  const [FormTyoe, setFormType] = useState(true);
  const [Form, setForm] = useState<any>([]);
  const router = useRouter();

  const handleForm = (name: any, value: any) => {
    setForm({ ...Form, [name]: value });
  };
  const handleFormType = () => {
    setFormType(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await fetch("/api/apply/passport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Form),
    }).then((response) => response.json());
    if (data.success) {
      router.push("/apply");
    } else {
      setMessage(data.message);
    }
  };
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <Image
              src={Logo}
              alt="Picture of the author"
              width={200}
              height={92}
              unoptimized={true}
              loading="eager"
              style={{
                margin: "0 auto",
              }}
            />
            <hr
              style={{
                marginTop: "15px",
              }}
            />
            <h1 className="text-3xl font-bold text-gray-800 sm:text-2xl dark:text-white">
              <p>Contact Information</p>
            </h1>
          </div>

          <div className="mt-12">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Passport Series <span className="text-red-800">*</span> /
                      Passport Number <span className="text-red-800">*</span>
                    </label>

                    <div className="sm:flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="passportseries"
                        id="passportseries"
                        onChange={(e) =>
                          handleForm(e.target.name, e.target.value)
                        }
                        maxLength={2}
                        className="py-3 px-4 w-20	block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        required
                      />
                      <input
                        type="text"
                        name="passportnumber"
                        id="passportnumber"
                        maxLength={7}
                        onChange={(e) =>
                          handleForm(e.target.name, e.target.value)
                        }
                        className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="pinfl"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      PINFL <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="pinfl"
                      id="pinfl"
                      maxLength={14}
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="placeissue"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Place Of Issue <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="placeissue"
                      id="placeissue"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="givenby"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Given by IIB of (UZB:Kim Tomonidan Berilgan){" "}
                      <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="givenby"
                      id="givenby"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="dateissue"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Date Of Issue <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateissue"
                      id="dateissue"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateexpiration"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Date Of Expiration <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="date"
                      name="dateexpiration"
                      id="dateexpiration"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 flex">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    onChange={(e) => handleForm(e.target.name, e.target.value)}
                    className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    I agree to JIU Admission terms & conditions and Terms and
                    conditions
                  </label>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
