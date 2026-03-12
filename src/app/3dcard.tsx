"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <div className="flex flex-col md:flex-row justify-center space-x-8">
      <CardContainer className="w-100 h-140 p-3">
        <CardBody
          className="bg-gray-50 relative group/card  
      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
       dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
       border w-auto h-auto sm:w-[30rem] rounded-xl p-4"
        >
          <CardItem translateZ="100" className="mt-4">
            <Image
              src="/mypic01.png"
              layout="responsive"
              alt="my picture 1"
              width={50}
              height={100}
              className="rounded-xl"
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      <CardContainer className="w-100 h-140 p-3">
        <CardBody
          className="bg-gray-50 relative group/card  
dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
 dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
 border w-auto h-auto sm:w-[30rem] rounded-xl p-6"
        >
          <CardItem
            as="p"
            translateZ="60"
            className="max-w-sm mt-2 dark:text-neutral-300"
          >
            My name is Americo Gonzalez, and I am a bilingual professional
            fluent in both Spanish and English. I hold a Bachelor’s degree in
            History and Geography, which provided me with a strong foundation in
            critical thinking and the social sciences. After moving to Canada, I
            completed a Diploma in Business Administration and more recently
            began pursuing studies in web and software development. I am
            particularly interested in technology, programming, and how software
            can solve real-world problems. My academic path combines analytical
            thinking, business knowledge, and technical skills. Outside of
            programming, I enjoy sci-fi films, classic rock and pop music, video
            editing, and exploring culture and visual arts.
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
