'use client'
import React from 'react'

const FooterComponent = () => {
    return (
        <footer className='h-24 w-full mt-20 '>
            <div className='h-32' style={{
                backgroundColor: 'rgb(236, 236, 236)'
            }}>
                <img className='mx-auto pt-4' src="https://lh6.googleusercontent.com/Pd_Hi-6fufioRXENm83IcTpGp119Uzw2vMpecbno_t16WlqPMTOcNA0n5P4ZFm-5GaCtbb2bNXlWyRN2c4cf8W4=w1280" alt="" />
            </div>
            <div className='h-full flex flex-col items-center justify-center' style={{ background: 'rgba(110, 33, 109, 1)' }}
            >
                <div className='font-semibold text-white text-sm'>© 2024-2025 Awake Therapy</div>
                <div className=' text-white text-sm'>
                    <a href='#'>Term</a> |
                    <a href='#'> Career</a> |
                    <a href='#'> Site Map</a>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
