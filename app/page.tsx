export default function Home(){
  return (
    <main className='bg-puzzle bg-black flex justify-center h-screen'>
      <div className='inline-flex w-5/6 h-5/6 border-2 border-white
      m-2 p-2'>
        <div className='flex-col w-1/2'>
          <div className='bg-terrain bg-earth-yellow border-2 border-white h-1/2 m-1 px-2 py-1'>
            <h2>Design</h2>
          </div>
          <div className='bg-shapes bg-dark-purple border-2 border-white h-1/2 m-1 px-2 py-1'>
            <h2>Hobbies</h2>
          </div>
        </div>
        <div className='flex-col w-1/2'>
          <div className='bg-circuit bg-coral border-2 border-white h-1/2 m-1 px-2 py-1'>
            <h2>Security</h2>
          </div>
          <div className='bg-tictac bg-peach-yellow border-2 border-white h-1/2 m-1 px-2 py-1'>
            <h2>Projects</h2>
          </div>
        </div>
      </div>
    </main>
  )
}