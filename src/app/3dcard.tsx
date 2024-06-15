"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl dark:text-white"
        >
          Dashboard Of Invoices
        </CardItem>
        <br/>
        <CardItem
          as="p"
          translateZ="60"
          className="max-w-sm mt-2 dark:text-neutral-300"
        >
           This is a simplified version of a financial dashboard that I made following the course
            Learn Next.js in the website of Next.js.
            You can add, edit, and delete invoices in an accompanying DB provided for Vercel.
            The dashboard will update automatically. You will notice simulated slow data 
              created to apply loading skeletons.
        </CardItem>
        <br/>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/dash-pic.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://portfolio-project-lemon-two.vercel.app/dashboard"
            target="__blank"
            className="px-4 py-2 text-blue-600 rounded-xl text-xl dark:text-white"
          >
            Try now →
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
