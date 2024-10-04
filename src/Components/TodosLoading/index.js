import React from 'react';

function TodosLoading(){

  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white border border-gray-300 w-[450px] rounded-lg shadow-lg px-4 py-6 flex flex-col items-center gap-6
      sm:min-w-96
    '>
          <div className='w-full flex flex-col gap-2 justify-center items-center'>
            <div className='bg-slate-200 h-6 w-2/3 rounded-lg animate-pulse'></div>
            <div className='bg-slate-200 h-5 w-1/5 rounded-lg animate-pulse'></div>
          </div>
          <div className='bg-slate-200 h-6 w-full rounded-lg animate-pulse'></div>
          <div className='flex flex-col gap-2 w-full'>
              <div className='bg-slate-200 h-11 w-full rounded-lg animate-pulse'></div>
              <div className='bg-slate-200 h-11 w-full rounded-lg animate-pulse'></div>
              <div className='bg-slate-200 h-11 w-full rounded-lg animate-pulse'></div>
          </div>
      </div>
    </div>
  ) 
}

export { TodosLoading };