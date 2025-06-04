import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectsGrid from '@/components/projects/projects-grid';

export default function ProjectsPage() {
  return (
    <div className=" flex flex-col   pt-10 ">
    
      
      <main className="flex-1">
        {/* Projects Hero */}
        <div className="md:max-w-2xl mx-auto text-center ">
              <div className='flex justify-center'>
                <h3 className="text-sm md:text-5xl  text-[#7412FF] text-center font-semibold px-6 py-2 bg-[#7412FF1A] rounded-full">
                  Our Work Speaks for Itself
                </h3>
              </div>
        </div> 
        {/* Projects Content */}
        <ProjectsGrid />
      </main>
      
     
    </div>
  );
}