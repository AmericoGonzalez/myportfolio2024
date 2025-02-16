import Image from "next/image";

import NavLink from "@/components/ui/nav-links";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

import { TextGenerateEffectDemo } from "@/app/textgen";
import { ThreeDCardDemo } from "@/app/3dcard";
import ContactForm from "@/app/contactform";

import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";




export default async function HomePage() {
  return (
   <div className="text-center">

      <NavLink /> 
    
      <div className="flex justify-center">
        
        {/* <div className="border-grey my-8 border-2 flex justify-center space-x-2 rounded-bl-3xl rounded-tr-3xl shadow-xl shadow-grey-200/40">*/}
          {/*<div className="w-52 h-52 mr-5 ml-5 mt-5 mb-5 bg-white ">*/}

          <div className="flex flex-col items-center md:flex-row justify-center my-8 border-2 border-grey rounded-bl-3xl rounded-tr-3xl shadow-xl shadow-grey-200/40">
          <div className="w-32 h-32 md:w-52 md:h-52 bg-white m-4">
          <Image
           
            src="/mypic00.png"
            layout="intrinsic"
            alt="my picture 1"
            width={300}
            height={400}
          /> 
          </div>
        
          {/*<div className="flex flex-col items-center justify-center pl-1 pr-8 mr-10 words">*/}

          <div className="flex flex-col items-center justify-center text-center p-4 md:pl-1 md:pr-8">
          <div><p className="text-xl">Hello I am</p></div>
          <TextGenerateEffectDemo />
          <div><p className="text-xl">Web Developer</p></div>
          </div>  
         
        </div>
        
      </div>
        
        

      <div className="wrapper mt-5 border-t-2 border-b-2 border-red-600 flex items-center justify-center">
          <div className="item item1 flex items-center justify-center"><p className="pr-2">React</p><FaReact size={25} title="React" /></div>
          <div className="item item2 flex items-center justify-center"><p className="pr-2">Next.js</p><TbBrandNextjs size={25} title="Nextjs" /></div>  
          <div className="item item3 flex items-center justify-center"><p className="pr-2">TypeScript</p><SiTypescript size={20} title="typescript" /></div>
          <div className="item item4 flex items-center justify-center"><p className="pr-2">TailWind</p><SiTailwindcss size={25} title="Tailwind CSS" /></div>
          <div className="item item5 flex items-center justify-center"><p className="pr-2">Vercel</p><SiVercel size={20} title="Vercel" /></div>
          <div className="item item6 flex items-center justify-center"><p>This app was built with:</p></div>
      </div>

      <h2 id="Projects" className="text-2xl mt-10 mb-5 pt-3">Projects</h2>
    
    <div className="flex flex-col md:flex-row justify-center">
      
      <div className="flex items-center justify-center mb-6">

          <div className="w-100 h-140 mx-4 p-4 border-2 border-grey rounded-xl">
            
            <h1>Dashboard of invoices</h1>
            <br/>
            
            <p>This is a simplified version of a financial dashboard that I made following the course
              Learn Next.js in the website of Next.js.
            </p>
            <p>You can add, edit, and delete invoices in an accompanying DB provided for Vercel.</p>
            <p>The dashboard will update automatically. You will notice simulated slow data 
              created to apply loading skeletons.</p>
            
              <Link href="https://portfolio-project-lemon-two.vercel.app/dashboard">
              <div className="text-blue-600 hover:text-blue-800">
                <p>Click here to see the app.</p>
              </div>
              </Link>

            <br />

            <Image
            src="/dash-pic.png"
            layout="responsive"
            alt="dashboard"
            width={30}
            height={80}
            className="object-contain w-auto h-full"
             />
          
          </div>
      </div>
      
      
        <div className="flex flex-col items-center justify-center mb-6">

          <div className="w-100 h-140 mx-4 p-4 border-2 border-grey rounded-xl">

            <h1>BC PNP Calculator</h1>
            <br/>
            
            <p>This is a form that calculates the score that inmigrants can obtain to 
              apply for the BC Provincial Nominee Program.</p>
            
            <p>It was built with simple HTML CSS and Javascript</p>
            
              <Link href="https://bc-pnp-calculator.onrender.com">
              <div className="text-blue-600 hover:text-blue-800">
                <p>Click here to see the app.</p>
              </div>
              </Link>

              <br />

              <Image
              src="/pnpform.png"
              layout="responsive"
              alt="dashboard"
              width={30}
              height={80}
              className="object-contain w-auto h-full"
              
              
              
               />
               
        </div>
      </div>
      </div>

  <div className="flex items-center justify-center mb-6">

   <div className="w-100 h-140 mx-4 p-4 border-2 border-grey rounded-xl">
  
   <h1>My Chat</h1>
   <br/>
  
   <p>This is a simple chat app that I made with Node.js, Bootstrap, Socket.io, and a MongoDB Atlas.

    </p>
   
   <br/>

    <Link href="https://mychat-tl2z.onrender.com/">
    <div className="text-blue-600 hover:text-blue-800">
      <p>Click here to see the app.</p>
    </div>
    </Link>

   <br />

   <Image
  src="/mychat.png"
  layout="responsive"
  alt="dashboard"
  width={30}
  height={80}
  className="object-contain w-auto h-full"
   />

  </div>
 </div>



      <h2 id="About" className="text-2xl mt-10 pt-3">About</h2>

         <ThreeDCardDemo /> 

      <h2 id="Skills" className="text-2xl mt-10 mb-2 pt-3">Skills</h2>
      <br/>


      <div className="flex flex-col md:flex-row justify-center">
      
      <div className="flex items-center justify-center mb-6">

          <div className="w-100 h-120 mx-4 p-4 border-2 border-grey rounded-xl text-justify">
            
            <h3 className="font-bold">Technical</h3>
            <br/>

            <Link href="https://www.bcit.ca/programs/applied-web-development-associate-certificate-part-time-6957acert/#courses">
              <div className="text-blue-600 hover:text-blue-800">
              <p>Recently I completed a program at BCIT 
              that included the following courses:</p>
              </div>
              </Link>

            <br/>
            <ul className="list-disc pl-5">
              <li>HTML and CSS</li>
              <li>Javascript</li>
              <li>Business Analysis and System Design</li>
              <li>Relational Database and SQL</li>
              <li>UX/UI Development</li>
              <li>Node.js and Express</li>
              <li>React and Next.js</li>
            </ul>
            <br/>
            <Link href="https://www.bcit.ca/programs/applied-software-development-asd-associate-certificate-part-time-6958acert/#courses">
              <div className="text-blue-600 hover:text-blue-800">
              <p className="font-bold">I am currently pursuing a software development certificate at BCIT. 
              I completed the first programing course in Python and now 
              I am taking the second course of programing based on Java</p>
              </div>
              </Link>
            
            
            
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center mb-6">

          <div className="w-100 h-120 mx-4 p-4 border-2 border-grey rounded-xl text-justify">

            <h3 className="font-bold">Soft</h3>
            <br/>
            
            <p>My managers have described me as a flexible and reliable employee. 
              I adapt well to changing circumstances, readily shift priorities, 
              and embrace new challenges with a positive attitude.</p>
              <br/>
              <p> 
              I consistently meet deadlines, deliver high-quality work, 
              and maintain dependability, ensuring tasks are completed as promised. </p>
               
               
        </div>
      </div>
      </div>

      <h2 id="Contact" className="text-2xl mt-10 mb-2 pt-3">Contact me</h2>
      <br/>

      <ContactForm />

      
      

      <footer className="flex justify-center space-x-8 text-center mt-14 border-2 border-gray-100 py-10">
        <div><p>&copy; 2024 - 2025 Americo Gonzalez</p></div>
        <br/>
        <Link href="https://www.linkedin.com/in/americo-gonzalez-82702630/">
        <div className=""><SlSocialLinkedin size={25} title="LinkedIn" /></div>
        </Link>
        <Link href="https://github.com/AmericoGonzalez">
        <div className=""><BsGithub size={25} title="github" /></div>
        </Link>
        <Link href="https://www.instagram.com/developer_agonzalez/">
        <div className=""><FaInstagram size={25} title="instagram" /></div>   
        </Link> 

        {/*<a href="https://lordicon.com/">Animated icons by Lordicon.com</a>*/}         

      </footer>
     
 </div>       
     

  );
}


