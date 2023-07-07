import React from "react";

function Banner() {
    return <img className={"flex"} src={"headerBanner.jpg"} alt={"headerBanner"}/>;
}

function Divider() {
    return <div>
        <img src={"divider.svg"} className={"h-1 self-stretch"} alt={"divider"}/>
    </div>;
}

function InfoRow(props: {
    src: string,
    title: string,
    children: React.ReactNode
}) {
    return <div className={'flex items-center gap-2 self-stretch'}>
        <div className={'w-8 h-8 shrink-0 rounded-full bg-[#2E2E48]'}>
            <img className={'h-6 w-6 m-[4px] shrink-0 '} src={props.src} alt={'email'}/>
        </div>
        <div className={"flex flex-col items-start gap-[2px]"}>
            <p className={"flex flex-col self-stretch text-[8px] font-[400] text-[#ACB1C3]"}>
                {props.title}
            </p>
            <div className={"flex flex-col self-stretch text-[#D9DFE8] text-[10px] hover:text-purple-500"}>
                {props.children}
            </div>
        </div>
    </div>;
}

export function Sidebar() {
    return <div className={'flex flex-col gap-y-2 bg-sidebar'}>
        <Banner/>
        <div className={"flex flex-col gap-4 px-6 items-start self-stretch"}>

            <div id={"nameAndRole"} className={"flex flex-col gap-2"}>
                <p className={"flex text-xl"}>Michael Francisco</p>
                <p className={"flex text-lg"}>Software Developer</p>
            </div>

            <Divider/>

            <div id={"info"} className={"flex flex-col items-start gap-3 self-stretch"}>
                <InfoRow src={"email.svg"} title={"Email"}>
                    <a href={`mailto:michaelFrancisco64@gmail.com`}>michaelfrancisco64@gmail.com</a>
                </InfoRow>
                <InfoRow src={"github.svg"} title={"Github"}>
                    <a href={`https://github.com/michaelFrancisco`}>michaelFrancisco</a>
                </InfoRow>
                <InfoRow src={"linkedin.svg"} title={"LinkedIn"}>
                    <a href={`https://www.linkedin.com/in/michael-francisco-bba5961b0/`}>mike-dev</a>
                </InfoRow>
                <InfoRow src={"phone.svg"} title={"Phone"}>
                    <a href={`tel:+639998933401`}>(+63) 999 8933 401</a>
                </InfoRow>
                <InfoRow src={"address.svg"} title={"Address"}>
                    Cavite, Philippines
                </InfoRow>
            </div>

            <Divider/>
        </div>
    </div>;
}



export default Sidebar;