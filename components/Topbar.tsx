"use client"
import React from "react";
import Sidebar from "@/components/Sidebar";
import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure} from "@chakra-ui/react";

export default function Topbar() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef(null)

    return <div className={'flex flex-row bg-accent p-2 grow'}>
        <button
            className="block md:hidden"
            ref={btnRef}
            onClick={onOpen}
        >
            <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
        <div className={'grow text-center'}>
            <div className={'flex flex-col'}>
                <div className={'text-xs'}>Michael Francisco</div>
                <div className={'text-[0.5rem]'}>Software Developer</div>
            </div>
        </div>
        <Drawer
            isOpen={isOpen}
            placement={'left'}
            finalFocusRef={btnRef}
            onClose={onClose}
            size={'xs'}
        >
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton/>
                <DrawerBody p={0}>
                    <div className={'flex h-full'}>
                        <Sidebar/>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
}