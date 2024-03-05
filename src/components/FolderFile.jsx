import React, { useState, useEffect } from 'react';
import { CiFolderOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";

export const FolderFile = () => {
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [folderName, setFolderName] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubFolderOpen, setSubFolderOpen] = useState(true);
    const [subFolderName, setSubFolderName] = useState(""); // New state for subfolder name
    const [navList, setNavList] = useState([]);

    const handleSelectedFolder = (index) => {
        if (selectedFolder === index) {
            setSelectedFolder(null);
        } else {
            setSelectedFolder(index);
            setExpanded(!expanded);
        }
    }

    const handleInputChange = (event) => {
        setFolderName(event.target.value);
    }

    const handleSubFolderInputChange = (event) => {
        setSubFolderName(event.target.value); // Update subfolder name state
    }

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            const newFolder = {
                folderName,
                icon: <CiFolderOn />,
                folderItems: [],
            };

            setNavList([...navList, newFolder]);

            setFolderName("");
            setIsOpen(false);
        }
    }

    const handleAddSubFolder = () => {
        const newSubFolder = {
            title: subFolderName
        };

        // Update the selected folder's folderItems with the new subfolder
        setNavList(navList.map((item, index) => {
            if (index === selectedFolder) {
                return {
                    ...item,
                    folderItems: [...item.folderItems, newSubFolder],
                };
            }
            return item;
        }));

        // Clear the subfolder input
        setSubFolderName("");
    }

    console.log(navList);

    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div><p>FOLDERS</p></div>
                <div className='flex justify-center items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}><FiPlus /></div>
            </div>
            {isOpen && (
                <div>
                    <input
                        placeholder='Enter the folder name'
                        className='text-black pl-3 border border-black rounded-lg'
                        value={folderName}
                        onChange={handleInputChange}
                        onKeyDown={handleEnterKeyPress}
                    />
                </div>
            )}
            {navList?.map((item, index) => (
                <div key={index}>
                    <div className='flex flex-row justify-between cursor-pointer p-1'
                        style={{ backgroundColor: selectedFolder === index ? "lightgray" : "", borderRadius: selectedFolder === index ? "8px" : "" }}
                        onClick={() => handleSelectedFolder(index)}>
                        <div className='flex flex-row'>
                            <div className='flex justify-center items-center pr-2'>{item.icon}</div>
                            <div>{item.folderName}</div>
                        </div>
                        <div> {selectedFolder === index ? (expanded ? <MdArrowUpward /> : <MdArrowDownward />) : <MdArrowDownward />}</div>

                    </div>
                    {selectedFolder === index && (
                        <ul className='flex flex-col pl-6'>
                            {item?.folderItems?.map((folderItem, itemIndex) => (
                                <li key={itemIndex}>{folderItem.title}</li>
                            ))}
                            <div className='flex flex-row cursor-pointer' onClick={() => setSubFolderOpen(!isSubFolderOpen)}>
                                <div className='flex justify-center items-center'><CiCirclePlus /></div>
                                <div className='pl-2'><p>Add new sub</p></div>
                            </div>
                            {isSubFolderOpen && (
                                <div>
                                    <input
                                        placeholder='Enter the new sub'
                                        className='text-black pl-3 border border-black rounded-lg'
                                        value={subFolderName}
                                        onChange={handleSubFolderInputChange}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter') {
                                                handleAddSubFolder();
                                            }
                                        }}
                                    />
                                </div>
                            )}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
