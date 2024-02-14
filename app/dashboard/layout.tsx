import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
     <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
       <div className="w-full flex-none md:w-64">
         <SideNav/>
       </div>
       <div className='flex-1 p-4'>{children}</div>
     </div>
  )
}