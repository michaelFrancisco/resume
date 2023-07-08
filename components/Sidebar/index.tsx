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
        </div>
    </div>
        ;
}


export default Sidebar;