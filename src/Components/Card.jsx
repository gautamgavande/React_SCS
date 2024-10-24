import React from 'react'
let data=[
    {image:"https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",heading:"Amazon Basics.",descrip:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda place.",instock:true},
    {image:"https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",heading:"Amazon Strong.",descrip:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda place.",instock:false},
    {image:"https://images.unsplash.com/photo-1725610588150-c4cd8b88affd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",heading:"Amazon Owesome.",descrip:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda place.",instock:false}
]

function Card() {
    return (
        <div className='w-full min-h-screen bg-zinc-200 flex flex-wrap justify-center items-center gap-10'>
            {
                data.map((e,i)=>(
                    <div className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
                    <div className=' w-full h-32 bg-zinc-300'>
                        <img className='w-full h-full object-cover' src={e.image}></img>
                    </div>
                    <div className='w-full px-3 py-4'>
                        <h2 className='font-semibold'>{e.heading}</h2>
                        <p className='text-xs mt-4'>{e.descrip}</p>
                    </div> 
                    <button className={`px-4 py-1 ${ e.instock?"bg-sky-300":"bg-red-400"} text-xs rounded text-zinc-100 m-3`}>{e.instock?"available":"not available"}</button>
                </div>
                ))
            }
           
        </div>
    )
}

export default Card