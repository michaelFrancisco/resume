import React from "react";

export function InfoRow(props: {
    src: string,
    title: string,
    children: React.ReactNode
}) {
    return <div className={'flex items-center gap-2 self-stretch'}>
        <div className={'w-8 h-8 shrink-0 rounded-full bg-[#232339]'}>
            <img className={'h-6 w-6 m-[4px] shrink-0 '} src={props.src} alt={'email'}/>
        </div>
        <div className={"flex flex-col items-start gap-[2px]"}>
            <p className={"flex flex-col self-stretch text-xs font-[400] text-[#ACB1C3]"}>
                {props.title}
            </p>
            <div className={"flex flex-col self-stretch text-[#D9DFE8] text-[0.75rem] hover:text-purple-500"}>
                {props.children}
            </div>
        </div>
    </div>;
}