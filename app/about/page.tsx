import Image from 'next/image'

export default function About(){
  return (
    <main className='bg-puzzle bg-black flex justify-center h-screen'>
      <div className='flex flex-col w-5/6 bg-slate-700 rounded-lg m-2 bg-opacity-80'>
        <div id="top" className="flex flex-row w-full">
          <div id="pic" className='rounded-full w-1/2 aspect-square border-2 border-white m-2'>

          </div>
          <div id="about section" className='flex flex-col w-1/2 m-2'>
            <h1>Angus Frost</h1>
            <p>
              Newly graduated university student with a passion for ux/ui design and a 
              great amount of security experience
            </p>
          </div>
        </div>
        <h2>Skills</h2>
        <p>skills stuff</p>
      </div>
    </main>
  )
}