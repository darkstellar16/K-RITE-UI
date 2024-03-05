import React from 'react'
import { FiPlus } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";


export const TableLayout = () => {
    return (

        <table className="w-full text-sm text-left rtl:text-right cursor-pointer">
            <thead className="w-full border-r border-b border-black ">
                <tr>
                    <th scope="col" className="p-2">
                        <div className="flex items-center ">
                            <input id="checkbox-all-search" type="checkbox" className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="checkbox-all-search" className="sr-only cursor-pointer">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black">
                        <div className="flex items-center justify-between">
                            <p>Brand</p>
                            <div className='pr-3'><FiPlus /></div>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black ">
                        <div className="flex items-center justify-center">
                            <p>Description</p>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black">
                        <div className="flex items-center justify-center">
                            <p>Members</p>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black">
                        <div className="flex items-center justify-center">
                            <p>Categories</p>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black">
                        <div className="flex items-center justify-center">
                            <p>Tags</p>
                        </div>
                    </th>
                    <th scope="col" className="p-2 border-r border-b border-black">
                        <div className="flex items-center justify-center">
                            <p>Next Meeting</p>
                        </div>
                    </th>
                    <th scope="col" className="p-2">
                        <div className="flex items-center justify-center">
                            <FiPlus />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4, 5, 1, 1, 1,].map((item) => {
                    return (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className=" p-2 border-t border-b border-black">
                                <div className="flex items-center ">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="border-r border-t border-b border-black p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className=' p-1 flex items-center justify-center gap-2'>
                                    <div><FcGoogle /></div>
                                    <div className='flex items-center justify-center gap-2'>Google</div>
                                </div>
                            </th>
                            <td className="p-2 border border-black align-middle max-w-[200px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                                Develop a personalized fitness plan tailored to your goals and preferences. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </td>
                            <td className="p-2 border border-black">
                                <div className="flex -space-x-4 rtl:space-x-reverse">
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/avatar.png" alt="" />
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/avatar.png" alt="" />
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/avatar.png" alt="" />
                                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/avatar.png" alt="" />
                                </div>
                            </td>
                            <td className="p-2 border border-black">

                                <div className='flex '>
                                    <div className='bg-green-400/40 border text-sm  py-1 rounded-xl border-green-600 w-fit px-2 text-green-700 ml-1'>Automation</div>

                                    <div className=' border bg-violet-400/40 py-1 rounded-xl border-violet-950 w-fit px-2 text-violet-900 ml-1'>B2B</div>

                                    <div className=' border bg-red-300 py-1 rounded-xl border-red-800 w-fit px-2 text-red-800 ml-1'>Finance</div>
                                </div>
                            </td>
                            <td className="p-2 border border-black">


                                <div className='flex '>
                                    <div className=' bg-slate-300/45 text-sm  py-1 rounded-xl border-slate-950 w-fit px-2 text-slate-800 ml-1'>#Automation</div>

                                    <div className=' bg-slate-300/45 text-sm  py-1 rounded-xl border-slate-950 w-fit px-2 text-slate-800 ml-1'>#LDC</div>

                                </div>

                            </td>
                            <td className="p-2 border border-black">
                                <div className=' border bg-blue-300 py-1 rounded-xl border-blue-950 w-fit px-2 text-blue-900 ml-1'>in 1 hour</div>

                            </td>
                            <td className="p-2 border-t border-b border-l border-black">
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th className=' border-t border-b border-black'></th>
                    <th scope="row" className="text-right border-r border-t border-b border-black p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        10 count
                    </th>
                    {[1, 2, 3, 4].map((item) => {
                        return (
                            <td className="p-2 border border-black">
                                <div className='p-1 flex items-center justify-end gap-2'>
                                    <FiPlus />
                                    <p>Add Calculation</p>
                                </div>
                            </td>
                        )
                    })}
                    <td className="p-2 border-t border-b border-l border-black">
                    </td>
                    <td className="p-2 border-t border-b border-l border-black">
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}
