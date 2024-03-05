import React from 'react'
import { SearchField } from '../components/SearchField'
import { IoSettingsOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";
import { DropDown } from '../components/DropDown';
import { PiSortAscendingLight } from "react-icons/pi";
import { MdOutlineFilterListOff } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { TbDatabaseExport } from "react-icons/tb";
import { RiDeleteBin3Line } from "react-icons/ri";
import { HiOutlineArchiveBoxArrowDown } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { TableLayout } from '../components/TableLayout';
import { FolderFile } from '../components/FolderFile';
import { TbSpeakerphone } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { CiPen } from "react-icons/ci";
import { CgUserAdd } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";

export const HomePage = () => {

    const TitleTag = [{
        id: "1",
        title: "All brands"
    }, {
        id: "2",
        title: "Desk"
    }, {
        id: "3",
        title: "Tag"
    },]




    return (
        <div className='h-full flex flex-row gap-2 p-3 '>
            <div className='flex flex-col w-[20%] border border-emerald-900 rounded-lg'>
                <div className='p-2'>
                    <div className='flex flex-row justify-between '>
                        <div className='flex flex-row'>
                            <div className='flex items-center justify-center'>
                                <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/logo.png" alt="logo" />
                            </div>
                            <div className='pl-2'>
                                <p>INC</p>
                                <p className='text-md font-bold'>Innovated Hub</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="/avatar.png" alt="avatar" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col p-2 cursor-pointer mt-4'>
                    <div className='flex flex-col  border border-black p-2 rounded-lg shadow-lg'>
                        <div >
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row'>
                                    <div className='flex items-center justify-center'><CiPen /></div>
                                    <div className='pl-2'><p>Design Team</p></div>
                                </div>
                                <button className='border rounded-lg h-6 w-10 p-0.5 flex items-center justify-center '>
                                    <p>x+1</p>
                                </button>
                            </div>
                            <div className='flex flex-row justify-between mt-3'>
                                <div className='flex flex-row'>
                                    <div className='flex items-center justify-center'><TbSpeakerphone /></div>
                                    <div className='pl-2'><p>Marketing Team</p></div>
                                </div>
                                <button className='border rounded-lg h-6 w-10 p-0.5 flex items-center justify-center '>
                                    <p>x+2</p>
                                </button>
                            </div>
                            <div className='flex flex-row justify-between mt-3'>
                                <div className='flex flex-row'>
                                    <div className='flex items-center justify-center'><FaCode /></div>
                                    <div className='pl-2'><p>Development Team</p></div>
                                </div>
                                <button className='border rounded-lg h-6 w-10 p-0.5 flex items-center justify-center '>
                                    <p>x+3</p>
                                </button>
                            </div>
                        </div>
                        <div className='border-t border-black mt-2'>
                            <div className='flex justify-start'>
                                <div className='p-1 flex flex-row justify-center items-center'>
                                    <div> <CiSquarePlus /></div>
                                    <div className='pl-2'> Create a team</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='p-3 mt-4'><FolderFile /></div>
                <div className='flex flex-col justify-between p-4 mt-36'>
                    <div className='flex flex-row'>
                        <div className='flex items-center justify-center'><CgUserAdd /></div>
                        <div className='pl-2'><p>Invite teammates</p></div>
                    </div>
                    <div className='flex flex-row justify-between mt-2'>
                        <div className='flex flex-row'>
                            <div className='flex items-center justify-center'><IoIosHelpCircleOutline /></div>
                            <div className='pl-2'><p>Help and first steps</p></div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mt-2 p-1 rounded-lg bg-gray-100'>
                        <div className='flex flex-row'>
                            <p className='bg-white p-0.5'>7</p>
                            <p className='pl-2'>days left on trial</p>
                        </div>
                        <div><button className='bg-black text-white p-0.5 rounded-lg'>Add billing</button></div>
                    </div>
                </div>

            </div>
            <div className='flex flex-col w-[80%] border border-gray-950 rounded-lg'>
                <div className='border border-b-gray-950 rounded-t-lg p-1'>
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center text-lg '><p>Products</p></div>
                        <div className='flex items-center justify-center flex-row gap-4 '>
                            <div>
                                <SearchField />
                            </div>
                            <button className='border rounded-lg p-1'>
                                <CiFolderOn />
                            </button >
                            <button className='border rounded-lg p-1'><IoSettingsOutline /></button>
                        </div>
                    </div>
                </div>
                <div className='border border-b-gray-950 p-5'>
                    <div className='flex justify-between'>
                        <div className='flex items-center justify-center flex-row gap-4'>
                            {TitleTag.map((item) => {
                                return (
                                    <DropDown title={item?.title} key={item?.id} />
                                )
                            })}
                            <button className='border rounded-lg p-1 flex items-center justify-center gap-2'>
                                <PiSortAscendingLight />
                                <p>Sort</p>
                            </button>
                            <button className='border rounded-lg p-1 flex items-center justify-center gap-2'>
                                <MdOutlineFilterListOff />
                                <p>Filter</p>
                            </button>
                        </div>
                        <div className='flex items-center justify-center flex-row gap-4 '>
                            <button className='border rounded-lg p-1 flex items-center justify-center gap-2'>
                                <CiSquarePlus />
                                <p>Meeting</p>
                            </button>
                            <button className='border rounded-lg p-1 flex items-center justify-center gap-2'>
                                <TbDatabaseExport />
                                <p>Import/Export</p>
                            </button>
                        </div>
                    </div>
                </div>
                <TableLayout />
                <div className='flex items-center justify-center mt-10 p-2'>
                    <div className='flex items-center justify-between gap-3 p-2 border border-gray-600 shadow-md rounded-2xl'>
                        <button className='flex items-center justify-between border border-gray-500 rounded-lg p-1 shadow-md'>
                            <div className='pr-1 flex items-center justify-center'>
                                <RiDeleteBin3Line />
                            </div>
                            <div className='flex items-center justify-center'><p>selected</p></div>
                        </button>
                        <button className='flex items-center justify-between border border-gray-500 rounded-lg p-1 shadow-md'>
                            <div className='pr-1 flex items-center justify-center'>
                                <HiOutlineArchiveBoxArrowDown />
                            </div>
                            <div className='flex items-center justify-center'><p>Archive</p></div>
                        </button>
                        <button className='flex items-center justify-between border border-gray-500 rounded-lg p-1 shadow-md'>
                            <div className='pr-1 flex items-center justify-center'>
                                <RiDeleteBin3Line />
                            </div>
                            <div className='flex items-center justify-center text-red-800 '><p>Delete</p></div>
                        </button>
                        <div className='flex items-center justify-between shadow-md'>
                            <DropDown title={"More"} />
                        </div>
                        <button><RxCross1 /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
