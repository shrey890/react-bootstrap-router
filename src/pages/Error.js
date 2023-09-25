import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <div className="alert text-white text-center bg-danger alert-primary" role="alert">
                <h1>Error - Page not found</h1>
            </div>
            <img
                className='rounded mx-auto d-block position-absolute top-50 start-50 translate-middle'
                src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1700697600&v=beta&t=UPXfmmbGah2vLxxWG6dBr5p9hqpBZW_wa_FbHdAiNys" alt="404" width='900' />
            <div className='"d-grid gap-2'>

                <button className=' position-absolute btn btn-primary top-100 start-50 translate-middle'>
                    <Link className='text-light' to='/'>Back to Home</Link>
                </button>
            </div>
        </div>
    )
}
export default Error