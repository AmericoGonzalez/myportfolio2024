"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";


export function ThreeDCardDemo() {
  return (
<div className="flex flex-col md:flex-row justify-center space-x-8">
    <CardContainer className="w-100 h-140 p-3">

      <CardBody className="bg-gray-50 relative group/card  
      dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
       dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
       border w-auto h-auto sm:w-[30rem] rounded-xl p-4">
     
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

<CardBody className="bg-gray-50 relative group/card  
dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
 dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
 border w-auto h-auto sm:w-[30rem] rounded-xl p-6">

  

  <CardItem
as="p"
translateZ="60"
className="max-w-sm mt-2 dark:text-neutral-300"
>
My name is Americo Gonzalez.
    I&rsquo;m fluent in both Spanish and English.
    I have a Bachelor&rsquo;s degree in History and Geography that provided me a well-rounded foundation in the social sciences.
    My subsequent academic journey brought me to Canada, where I got a Diploma in business administration. Recently, I&rsquo;ve embarked on web and software development studies.
  I have a keen interest in exploring diverse cultures through travel, although my opportunities for globe-trotting have been somewhat limited thus far.
    When it comes to leisure, I&rsquo;m drawn to sci-fi films, classic rock-pop music, and video editing. I&rsquo;m passionate about culture, cutting-edge technology, and the visual arts in general.
</CardItem>

 
</CardBody>
</CardContainer>



</div>

  );
}
