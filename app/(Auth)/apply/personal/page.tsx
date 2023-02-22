"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png";
import InputMask from "react-input-mask";
import { useEffect } from "react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@/components/alert";

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
    const data = await fetch("/api/apply/personal", {
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
              <p>Personal Information</p>
            </h1>
          </div>

          <div className="mt-12">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
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
                      htmlFor="middlename"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Middle Name <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="middlename"
                      id="middlename"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Gender <span className="text-red-800">*</span>
                    </label>
                    <select
                      className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      name="gender"
                      id="gender"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      required
                    >
                      <option selected>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="datebirth"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Date of birth <span className="text-red-800">*</span>
                    </label>
                    <input
                      type="date"
                      name="datebirth"
                      id="datebirth"
                      onChange={(e) =>
                        handleForm(e.target.name, e.target.value)
                      }
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-company-website-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone number <span className="text-red-800">*</span>
                    </label>
                    <div className="relative">
                      <InputMask
                        mask="(99) 999 99 99"
                        maskChar={null}
                        id={"phoneNumber"}
                        name={"phoneNumber"}
                        onChange={(e) =>
                          handleForm(e.target.name, e.target.value)
                        }
                        className="py-3 px-4 pl-20 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder={"Telefon raqamingiz"}
                      />
                      {/* <input type="text" id="hs-inline-leading-select-label" name="inline-add-on" className="py-3 px-4 pl-20 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="33 726 66 06 " /> */}
                      <div className="absolute inset-y-0 left-0 flex items-center text-gray-500 pl-px">
                        <label
                          htmlFor="hs-inline-leading-select-country"
                          className="sr-only"
                        >
                          Country <span className="text-red-800">*</span>
                        </label>
                        <select
                          id="hs-inline-leading-select-country"
                          name="hs-inline-leading-select-country"
                          className="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800"
                        >
                          <option value="uz" selected>
                            UZ
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Address <span className="text-red-800">*</span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="address"
                        name="address"
                        onChange={(e) =>
                          handleForm(e.target.name, e.target.value)
                        }
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        placeholder="12 Istiqbol Str., M.Ulugbek dist., Tashkent, Uzbekistan, 100047"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {message ?? <Alert status="bg-red-500" message={message} />}

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
