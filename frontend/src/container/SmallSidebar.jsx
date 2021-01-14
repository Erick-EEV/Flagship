import React, { Component } from 'react'
import Image from '../images/boatlogo.png'


export default class SmallSidebar extends Component {
    render() {
        return (
            <div>

<div class="flex flex-row h-full">

      <nav class="bg-gray-900 w-20  justify-between flex flex-col ">

    
          <div class="mt-10">
            <ul>
              <li class="mb-6">
                <a href="#">
                  <span>
                    <svg
                      class="fill-current h-5 w-5 text-gray-300 mx-auto hover:text-green-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </li>
              
            </ul>
          {/* server-circles */}
          <div class="mt-10 mb-10">
          <a href="#">
            <img
              src= {Image}
              class="rounded-full w-10 h-10 mb-3 mx-auto"
            />
          </a>
        </div>
          </div>

      </nav>
  <div class="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen">
      </div>
    </div>
            </div>
        )
    }
}
