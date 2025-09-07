import DashCard from "@/components/DashCard";
import Image from "next/image";

export default function Home() {




  return (
    <div>

   <div className=" w-[calc(100%-24rem)] ml-auto h-screen gap-x-6 px-10 items-center py-20  grid grid-cols-2 ">
    <DashCard title={'Students : '} apiEndPoint={'/api/students'} header_1={'Name'} header_2={'Email'}/>
    <DashCard title={'Teachers : '} apiEndPoint={'/api/teachers'} header_1={'Name'} header_2={'Email'}/>
    <DashCard title={'Courses : '} apiEndPoint={'/api/courses'} header_1={'Name'} header_2={'Description'}/>
    <DashCard title={'Not alloted yet'} apiEndPoint={'/api/students'}/>

             
   

   </div>
   
    </div>
  );
}
