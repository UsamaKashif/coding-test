import React from 'react'

const Loading = () => {
    return (
        <div className='w-full h-32 flex items-center justify-center'>
            <div className='w-4 h-4 rounded-full border border-black border-dashed animate-spin'></div>
        </div>
    )
}

export default Loading