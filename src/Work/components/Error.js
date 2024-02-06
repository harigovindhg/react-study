import { useRouteError } from 'react-router-dom';

const Error = () => {
    const routeError = useRouteError();
    return (
        <>
            <div className='route-error'>
                <div className='body'>
                    <h1><strong>404</strong></h1>
                    <p><strong>Page not found!</strong></p>
                    <p>Something went wrong🤔</p>
                    <hr />
                    <h2>Error Message</h2>
                    <p style={{ color: 'red' }}>{routeError?.error?.message}</p>
                </div>
            </div>
        </>
    )
}

export default Error;