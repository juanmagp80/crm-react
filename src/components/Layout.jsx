import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'

import React from 'react'



const Layout = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className='md:w-1/4 px-5 py-10 bg-blue-900'>
                <h2 className='text-4xl font-black text-center text-white'>CRM Clientes</h2>
                <nav className='mt-10'>
                    <Link
                        to='/'
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text white'} block text-white my-5 hover:text-blue-300'`}>Clientes</Link>
                    <Link
                        to='/clientes/nuevo'
                        className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text white'} block text-white my-5 hover:text-blue-300'`}>Nuevo Cliente</Link>

                </nav>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>


        </div>


    )
}

export default Layout


