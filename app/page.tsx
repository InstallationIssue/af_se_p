export default function Home(){
  return (
    <main className='bg-puzzle bg-black flex justify-center h-screen'>
      <div className='inline-flex h-5/6 m-2 p-2 aspect-square'>
        <div className='flex flex-col w-1/2'>
          <div className='flex bg-terrain bg-earth-yellow border-2 border-white h-1/2 m-1 px-2 py-1 rounded-tl-full aspect-square items-end'>
            <h2 className="flex flex-wrap">Design</h2>
          </div>
          <div className='flex bg-shapes bg-dark-purple border-2 border-white h-1/2 m-1 px-2 py-1 rounded-bl-full aspect-square'>
            <h2>Hobbies</h2>
          </div>
        </div>
        <div className='flex flex-col w-1/2'>
          <div className='flex bg-circuit bg-coral border-2 border-white h-1/2 m-1 px-2 py-1 rounded-tr-full aspect-square items-end'>
            <h2>Security</h2>
          </div>
          <div className='flex bg-tictac bg-peach-yellow border-2 border-white h-1/2 m-1 px-2 py-1 rounded-br-full aspect-square'>
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    </main>
  )
}