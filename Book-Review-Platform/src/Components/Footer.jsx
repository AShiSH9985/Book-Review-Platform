import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    
        <div className='w-full'>
            <div className='h-64 w-full bg-zinc-200 flex justify-between p-4'> 
                <div className='w-1/2 h-full ml-8'>
                    <h1 className='text-green-400 font-semibold'>GET MORE INFO</h1> 
                        <li><Link>Help Centre </Link></li>
                        <li><Link> About us</Link></li>
                        <li><Link>Write a Review </Link></li>
                        <li><Link>Posting Guidelines </Link></li>
                        <li><Link>Trust Centre </Link></li>
                        <li><Link>Terms of use </Link></li>
                        <li><Link>Privacy Policy </Link></li>
                        <li><Link>Contact us </Link></li>
                    </div>
                    
                <div className='w-1/2 h-full ml-8 mb-2'>
                    <h1 className='text-green-400 font-semibold'>FOR BUSINESS</h1>
                    <li><Link to="">Overview</Link></li>
                    <li><Link to="">Brand Management</Link></li>
                    <li><Link to="">Advertising</Link></li>
                    <li><Link to="">Ambassador Program</Link></li>
                </div>
            </div>

            
        </div>
      <div className="bg-zinc-100 w-full text-center">
                  <p>© 2025 Book_review.com Pty. Ltd. All Rights Reserved.
                      General disclaimer: All third party trademarks, images and 
                      copyrights on this page are used for the purpose of comparative 
                      advertising, criticism or review. This is a public forum 
                      presenting user opinions on selected products and businesses, 
                      and as such the views expressed do not reflect the opinion
                        of Book_review.com </p>
              </div>
    </>
  )
}

export default Footer