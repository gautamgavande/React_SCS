import React from 'react'

function Card1() {
    let data = [
        { name: "Mahiya ve", description: "this is ne song for all the new user" },
        { name: "Mahiya ve", description: "this is ne song for all the new user" }
    ]
    return (
        <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center items-center'>
            {
                data.map((e) => {
                    return (
                        <div className='w-60 px-3 py-2 bg-zinc-100 rounded'>
                            <h3 className='font-semibold text-xl'>{e.name}</h3>
                            <p className='text-xs mt-2'>{e.description}</p>
                            <button onClick={() => { alert("chal raha hai") }} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Card1