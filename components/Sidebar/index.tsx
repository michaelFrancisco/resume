import React from "react";
import {InfoRow} from "@/components/Sidebar/InfoRow";
import {Divider} from "@/components/Sidebar/Divider";
import {Banner} from "@/components/Sidebar/Banner";

export function Sidebar() {
    return <div className={'flex flex-col gap-y-2 bg-accent'}>
        <Banner/>
        <div className={"flex flex-col gap-4 px-5 items-start self-stretch"}>

            <div id={"nameAndRole"} className={"flex flex-col gap-2 mt-2"}>
                <p className={"flex text-xl"}>Michael Francisco</p>
                <p className={"flex"}>Software Developer</p>
            </div>

            <Divider/>

            <div id={"info"} className={"flex flex-col items-start gap-3 self-stretch"}>
                <InfoRow src={"email.svg"} title={"Email"}>
                    <a className={'text-link'}
                       href={`mailto:michaelFrancisco64@gmail.com`}>michaelfrancisco64@gmail.com</a>
                </InfoRow>
                <InfoRow src={"github.svg"} title={"Github"}>
                    <a className={'text-link'} href={`https://github.com/michaelFrancisco`}>michaelFrancisco</a>
                </InfoRow>
                <InfoRow src={"linkedin.svg"} title={"LinkedIn"}>
                    <a className={'text-link'}
                       href={`https://www.linkedin.com/in/michael-francisco-bba5961b0/`}>mike-dev</a>
                </InfoRow>
                <InfoRow src={"phone.svg"} title={"Phone"}>
                    <a className={'text-link'} href={`tel:+639998933401`}>(+63) 999 8933 401</a>
                </InfoRow>
            </div>

            <Divider/>

            <div className={'flex flex-col gap-6 text-[0.75rem] text-gray-300'}>
                <p>
                    Experienced full-stack developer adept in a broad range of skills like Web
                    development, Backend services, DevOps, and Agile project management.
                </p>

                <Divider/>

                <div className={'flex flex-col gap-4'}>
                    <div className={'flex flex-row gap-2 justify-center'}>
                        <img src={'nextjs_full.png'} className={'h-auto w-24'} alt={'nextjs'}/>
                        <img src={'netlify_full.png'} className={'h-auto w-24'} alt={'netlify'}/>
                    </div>
                    <p>This online resume was built using <b>Next.js</b> and is hosted on <b>Netlify</b>.</p>
                    <p>Design inspired by Supa Resume by <a href={'https://linktr.ee/angelolibero_designs'}
                                                            className={'text-link'}>@angelolibero</a>, <a
                        href={'https://www.figma.com/community/file/1087586245868299560/Supa-Resume---Light-%26-Dark-%5BFREE-Resume%2FCover-Letter%5D'}
                        className={'text-link'}>available
                        for free on Figma</a></p>
                    <p>You can find the complete source code on my GitHub repository. <a
                        href={'https://github.com/michaelFrancisco/resume'} className={'text-link'}>Feel free to check
                        it out!</a></p>
                </div>
            </div>
        </div>
    </div>
        ;
}


export default Sidebar;