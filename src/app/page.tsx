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

export default async function HomePage() {



  return (
   <div className="text-center">

      <NavLink /> 
    
      <div className="flex justify-center">
        
        <div className="border-grey my-8 border-2 flex justify-center space-x-2 rounded-bl-3xl rounded-tr-3xl shadow-xl shadow-grey-200/40">
        
          <div className="rounded-full border-2 borde-grey overflow-hidden w-52 h-52 mr-5 ml-5 mt-5 mb-5 bg-white shadow-xl outline-solid">
          <Image
           
            src="/mypic00.png"
            layout="intrinsic"
            alt="my picture 1"
            width={300}
            height={400}
          /> 
          </div>
        
          <div className="flex flex-col items-center justify-center pl-1 pr-8 mr-10 words">
          
          <div><p className="text-xl">Hello I am</p></div>
          <TextGenerateEffectDemo />
          <div><p className="text-xl">Junior Web Developer</p></div>
          </div>  
         
        </div>
        
      </div>
        
        
        
        
      <Link href="/contact/contact-me">
        <Button className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300* mt-6 mb-6 text-xl border-red-400 border-2
           text-red-600 bg-white shadow-xl rounded hover:bg-gray-200`}>Contact me</Button>
           {/*transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300*/}
      </Link> 
        

      <div className="wrapper mt-5 border-t-2 border-b-2 border-red-600 flex items-center justify-center">
          <div className="item item1 flex items-center justify-center"><p className="pr-2">React</p><FaReact size={25} title="React" /></div>
          <div className="item item2 flex items-center justify-center"><p className="pr-2">Next.js</p><TbBrandNextjs size={25} title="Nextjs" /></div>  
          <div className="item item3 flex items-center justify-center"><p className="pr-2">TypeScript</p><SiTypescript size={20} title="typescript" /></div>
          <div className="item item4 flex items-center justify-center"><p className="pr-2">TailWind</p><SiTailwindcss size={25} title="Tailwind CSS" /></div>
          <div className="item item5 flex items-center justify-center"><p className="pr-2">Vercel</p><SiVercel size={20} title="Vercel" /></div>
          <div className="item item6 flex items-center justify-center"><p>This app was built with:</p></div>
      </div>

      <h2 className="text-2xl mt-10 mb-5 pt-3">Projects</h2>
    
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

      <h2 id="About" className="text-2xl mt-10 mb-2 pt-3">About</h2>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8">
        
        <div className="w-80 h-80 mx-4 mb-14 p-2">
          <Image
            src="/mypic01.png"
            layout="responsive"
            alt="my picture 1"
            width={50}
            height={100}
            className="rounded-xl"
          />
        </div>


        <div className="w-120 h-120 mx-4 mt-4 p-4 text-left">
          
        
          <p>My name is Americo Gonzalez, a web developer with a passion for creating visually appealing, user-friendly, and responsive apps.</p>
          <p>I&rsquo;m a Chilean-Canadian fluent in both Spanish and English.</p>
          <p>My academic journey began with a Bachelor&rsquo;s degree in History and Geography, providing me with a well-rounded foundation in the social sciences.</p>
          <p>My subsequent academic journey led me to Canada, where I pursued studies in business administration. Recently, I&rsquo;ve embarked on web development studies, which I&rsquo;ve just completed.</p>
          <p>I have a keen interest in exploring diverse cultures through travel, although my opportunities for globe-trotting have been somewhat limited thus far, with visits to only five countries.</p>
          <p>When it comes to leisure, I&rsquo;m drawn to sci-fi films, classic rock-pop music, and video editing. I&rsquo;m passionate about culture, cutting-edge technology, and the visual arts in general.</p>
        </div>
      </div>

      <h2 id="Skills" className="text-2xl mt-10 mb-2 pt-3">Skills</h2>
      <br/>


      <div className="flex flex-col md:flex-row justify-center">
      
      <div className="flex items-center justify-center mb-6">

          <div className="w-100 h-140 mx-4 p-4 border-2 border-grey rounded-xl text-justify">
            
            <h3>Technical</h3>
            <br/>
            
            <p>Recently I completed a program at BCIT 
              that included the following courses:</p>
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
            
            
          </div>
        </div>
      
        <div className="flex flex-col items-center justify-center mb-6">

          <div className="w-100 h-140 mx-4 p-4 border-2 border-grey rounded-xl text-justify">

            <h3>Soft</h3>
            <br/>
            
            <p>My managers have described me as a flexible and reliable employee. 
              I adapt well to changing circumstances, readily shift priorities, 
              and embrace new challenges with a positive attitude. I consistently meet deadlines, 
              deliver high-quality work, 
              and maintain dependability, ensuring tasks are completed as promised. </p>
            
           
            
             
               
        </div>
      </div>
      </div>

      <ThreeDCardDemo /> 

 </div>       
     

  );
}

