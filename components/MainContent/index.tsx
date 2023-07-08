import React from 'react';
import generateLoremIpsum from "@/utils/generateLoremIpsum";

function Timeline() {
    return <div className="flex flex-col items-center justify-start self-stretch pt-0.5">
        <div className="h-6 w-6 bg-accent shadow rounded-full">
            <div className={'rounded-full h-2 w-2 bg-[#C696FC] m-[8px]'}/>
        </div>
        <div className="border-[1px] border-[#2E2E48] h-full"/>
    </div>;
}

function Experience() {
    return <div className="flex grow gap-1 self-stretch">
        <div className="flex flex-col gap-1 rounded pr-2">
            <div className="text-xs"> 2020 - 2023</div>
            <div className="flex gap-2 self-stretch items-center">
                <img className={'h-8 w-8 rounded shadow'} src={'ov.png'} alt={'ov'}/>
                <div className="flex flex-col">
                    <div className="text-sm">Senior Software Engineer</div>
                    <div className="text-sm">Oost & Voort Inc.</div>
                </div>
            </div>
            <div className="grow text-gray-400 text-xs">
                <ul>
                    <li>&#8226; Led development of a learning management system with 500+ users across 7+ branches,
                        handling fullstack programming, server deployment, CI/CD, and client coordination.
                    </li>
                    <li>&#8226; Created an internal web-based video conferencing solution used by the company as an
                        alternative to Google Meet and Zoom.
                    </li>
                    <li>&#8226; Worked as tech lead and project manager for multiple blockchain projects with the most
                        successful one reaching a TVL of over $100M.
                    </li>
                    <li>&#8226; Headed Agile Project Management operations, setting standards, mentoring teams, and
                        collaborating with management to establish company-wide policies and structures.
                    </li>
                    <li>&#8226; Led the development of an online 3D marketplace, coordinating components, negotiating
                        with the client, and spearheading research and implementation of new technologies.
                    </li>
                    <li>&#8226; Led research and development projects focused on Rust as a backend solution, creating an
                        integrated time tracking and task management system, an improved video conferencing solution,
                        and a blazingly fast blockchain tool for dApp development.
                    </li>
                </ul>
            </div>
        </div>
    </div>
}

function SkillCard(props: {
    src: string,
    title: string
}) {
    return <div
        className="flex flex-col items-center justify-center gap-2 rounded-md bg-accent p-2">
        <img alt={props.src} className="h-16 w-16 rounded" src={props.src ?? "https://via.placeholder.com/24x24"}/>
        <div className="flex flex-col items-center justify-center gap-[1px]">
            <div className="text-xs">{props.title ?? "Title"}</div>
        </div>
    </div>;
}

function SkillCategory(props: {
    title: string,
    children: React.ReactNode
}) {
    return <div className={"flex flex-col gap-4 pb-4"}>
        <div className={"text-sm"}>{props.title}</div>
        <div className={"flex flex-row flex-wrap gap-1"}>
            {props.children}
        </div>
    </div>;
}

function Skills() {
    return <>
        <SkillCategory title={"Programming Languages"}>
            <SkillCard src={"javascript.png"} title={"Javascript"}/>
            <SkillCard src={"typescript.png"} title={"Typescript"}/>
            <SkillCard src={"rust.png"} title={"Rust"}/>
            <SkillCard src={"dart.png"} title={"Dart"}/>
            <SkillCard src={"solidity.png"} title={"Solidity"}/>
        </SkillCategory>
        <SkillCategory title={"Frontend Frameworks"}>
            <SkillCard src={"react.png"} title={"React"}/>
            <SkillCard src={"nextjs.png"} title={"Next.js"}/>
            <SkillCard src={"vite.png"} title={"Vite"}/>
            <SkillCard src={"flutter.png"} title={"Flutter"}/>
            <SkillCard src={"vue.png"} title={"Vue"}/>
        </SkillCategory>
        <SkillCategory title={"Backend Solutions"}>
            <SkillCard src={"aws.png"} title={"AWS"}/>
            <SkillCard src={"serverless.png"} title={"Serverless"}/>
            <SkillCard src={"traefik.png"} title={"Traefik"}/>
            <SkillCard src={"docker.png"} title={"Docker"}/>
        </SkillCategory>
        <SkillCategory title={"Project Management"}>
            <SkillCard src={"agile.png"} title={"Agile"}/>
            <SkillCard src={"scrum.png"} title={"Scrum"}/>
            <SkillCard src={"jira.png"} title={"Jira"}/>
            <SkillCard src={"confluence.png"} title={"Confluence"}/>
        </SkillCategory>
    </>;
}

function Content(props: {
    title: string,
    children: React.ReactNode
}) {
    return <div className="flex flex-row gap-4">
        <Timeline/>
        <div className="flex grow flex-col gap-2">
            <div className="text-lg">{props.title}</div>
            {props.children}
        </div>
    </div>;
}

function Tool(props: {
    src: string,
    title:string,
    children: React.ReactNode
}) {
    return <div className="flex flex-row gap-2 rounded-md bg-accent p-3 items-center">
        <img className="h-24 w-24 rounded" src={props.src} alt={"pc"}/>
        <div
            className="flex flex-col gap-0.5">
            <div
                className="text-base">{props.title}
            </div>
            <div className="text-[0.6rem]">
                {props.children}
            </div>
        </div>
    </div>;
}

function Tools() {
    return <div className="flex grow w-full flex-col gap-1">
        <Tool title={'High-end Development PC'} src={'pc.png'}>
            <ul>
                <li>&#8226; CPU: AMD Ryzen 5 5600X</li>
                <li>&#8226; Memory: 16GB 3200MHz RAM</li>
                <li>&#8226; GPU: NVIDIA GeForce RTX 3060</li>
                <li>&#8226; Storage: 250GB M.2 SSD</li>
                <li>&#8226; OS: Dual-boot Windows 10 / Pop_OS!</li>
            </ul>
        </Tool>
        <Tool title={'Webstorm'} src={'webstorm.png'}>
            <ul>
                <li>&#8226; Fully licensed</li>
                <li>&#8226; Excellent proficiency</li>
                <li>&#8226; Considerably improves productivity when developing Javascript based projects</li>
            </ul>
        </Tool>
        <Tool title={'Fast Internet Connection'} src={'internet.png'}>
            <ul>
                <li>&#8226; Up to 100Mbps</li>
                <li>&#8226; 80% minimum guaranteed speed</li>
                <li>&#8226; No monthly data cap</li>
                <li>&#8226; 99% Uptime with multiple backups and redundancies</li>
            </ul>
        </Tool>
    </div>;
}

function MainContent() {
    return (
        <div className="flex h-full p-8 bg-main flex-col gap-4">
            <Content title={'Experience'}>
                <Experience/>
            </Content>

            <Content title={'Skills'}>
                <Skills/>
            </Content>

            <Content title={'Tools'}>
                <Tools/>
            </Content>


            {/*<div className="flex items-start justify-center gap-4 self-stretch">*/}
            {/*    <div className="flex flex-col items-center justify-start self-stretch">*/}
            {/*        <div className="relative h-4 w-4 bg-slate-800 shadow shadow-inner rounded-[100px]">*/}
            {/*            <div className="absolute top-0 left-0 h-4 w-4 bg-slate-800"/>*/}
            {/*            <div className="absolute w-2.5 h-2.5 left-[3px] top-[3px]"/>*/}
            {/*        </div>*/}
            {/*        <div className="relative w-[0.50px] h-[101px]">*/}
            {/*            <div*/}
            {/*                className="absolute top-0 left-0 border border-slate-800 w-[0.50px] h-[101px]"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-4 pb-6">*/}
            {/*        <div*/}
            {/*            className="text-center font-medium leading-none tracking-wide text-slate-200 text-[12px]">Education*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-start justify-start gap-1 self-stretch h-[61px]">*/}
            {/*            <div className="flex items-start justify-start gap-1 self-stretch">*/}
            {/*                <div*/}
            {/*                    className="flex shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-tl rounded-bl bg-slate-800 p-2">*/}
            {/*                    <div className="flex items-center justify-start gap-2 self-stretch">*/}
            {/*                        <img className="h-6 w-6 rounded" src="https://via.placeholder.com/24x24"/>*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[6px]">Memorisely*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className="flex flex-col items-start justify-center self-stretch h-[17px] gap-[1px]">*/}
            {/*                        <div*/}
            {/*                            className="self-stretch font-medium leading-3 text-slate-200 text-[7px]">Build*/}
            {/*                            a design system*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="text-center font-normal tracking-wide text-gray-400 text-[5px]">Oct*/}
            {/*                            2021*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <div className="flex items-center justify-start gap-2 self-stretch">*/}
            {/*                        <img className="h-6 w-6 rounded" src="https://via.placeholder.com/24x24"/>*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[6px]">UX acadamy*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className="flex flex-col items-start justify-center self-stretch h-[17px] gap-[1px]">*/}
            {/*                        <div className="self-stretch font-medium leading-3 text-slate-200 text-[7px]">UX*/}
            {/*                            Design certificate*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="text-center font-normal tracking-wide text-gray-400 text-[5px]">Feb*/}
            {/*                            2020*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-tr rounded-br bg-slate-800 p-2">*/}
            {/*                    <div className="flex items-center justify-start gap-2 self-stretch">*/}
            {/*                        <img className="h-6 w-6 rounded" src="https://via.placeholder.com/24x24"/>*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[6px]">Coursera</div>*/}
            {/*                    </div>*/}
            {/*                    <div*/}
            {/*                        className="flex flex-col items-start justify-center self-stretch h-[17px] gap-[1px]">*/}
            {/*                        <div*/}
            {/*                            className="self-stretch font-medium leading-3 text-slate-200 text-[7px]">Usera*/}
            {/*                            research course*/}
            {/*                        </div>*/}
            {/*                        <div*/}
            {/*                            className="text-center font-normal tracking-wide text-gray-400 text-[5px]">Dec*/}
            {/*                            2019*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="flex items-start justify-center gap-4 self-stretch">*/}
            {/*    <div className="flex flex-col items-center justify-start self-stretch">*/}
            {/*        <div className="relative h-4 w-4 bg-slate-800 shadow shadow-inner rounded-[100px]">*/}
            {/*            <div className="absolute top-0 left-0 h-4 w-4 bg-slate-800"/>*/}
            {/*            <div className="absolute w-2.5 h-2.5 left-[3px] top-[3px]"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-4 pb-6">*/}
            {/*        <div*/}
            {/*            className="text-center font-medium leading-none tracking-wide text-slate-200 text-[12px]">Tools*/}
            {/*        </div>*/}
            {/*        <div className="flex flex-col items-start justify-start gap-1 self-stretch h-[124px]">*/}
            {/*            <div className="flex items-start justify-start gap-1 self-stretch">*/}
            {/*                <div*/}
            {/*                    className="flex h-16 shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-tl bg-slate-800 p-2">*/}
            {/*                    <img className="h-6 w-6 rounded" src="https://via.placeholder.com/24x24"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Figma</div>*/}
            {/*                        <div*/}
            {/*                            className="text-center font-normal tracking-wide text-gray-400 text-[5px]"> UI*/}
            {/*                            Design, prototyping*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-16 shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <img className="h-6 w-6 rounded" src="https://via.placeholder.com/24x24"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Maze</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">Product*/}
            {/*                            research*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-16 shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <img*/}
            {/*                        className="h-6 w-6 border border-slate-600 rounded-[100px]"*/}
            {/*                        src="https://via.placeholder.com/24x24"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Spline</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">3D design*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-16 shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-tr bg-slate-800 p-2">*/}
            {/*                    <img className="h-6 w-6" src="https://via.placeholder.com/24x24"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Zeplin</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">Design*/}
            {/*                            workspace*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-start justify-start gap-1 self-stretch">*/}
            {/*                <div*/}
            {/*                    className="flex h-14 shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-bl bg-slate-800 p-2">*/}
            {/*                    <img className="h-4 w-4 rounded-[100px]" src="https://via.placeholder.com/16x16"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Vectornator*/}
            {/*                        </div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">Graphic*/}
            {/*                            design*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-14 shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <img className="h-4 w-4 rounded-[100px]" src="https://via.placeholder.com/16x16"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Rotato</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">Mockups*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-14 shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <img className="h-4 w-4 rounded-[100px]" src="https://via.placeholder.com/16x16"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-0.5">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">VS Code</div>*/}
            {/*                        <div*/}
            {/*                            className="font-normal leading-3 tracking-wide text-gray-400 text-[6px]">Code*/}
            {/*                            editor*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-14 shrink grow basis-0 flex-col items-center justify-center gap-1 bg-slate-800 p-2">*/}
            {/*                    <img className="h-4 w-4 rounded-[100px]" src="https://via.placeholder.com/16x16"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Xcode</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">iOS*/}
            {/*                            development*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div*/}
            {/*                    className="flex h-14 shrink grow basis-0 flex-col items-center justify-center gap-1 rounded-br bg-slate-800 p-2">*/}
            {/*                    <img className="h-4 w-4 rounded-[100px]" src="https://via.placeholder.com/16x16"/>*/}
            {/*                    <div className="flex flex-col items-center justify-center gap-[1px]">*/}
            {/*                        <div className="font-medium leading-3 text-slate-200 text-[7px]">Notion</div>*/}
            {/*                        <div className="font-normal tracking-wide text-gray-400 text-[5px]">Project*/}
            {/*                            managment*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default MainContent;