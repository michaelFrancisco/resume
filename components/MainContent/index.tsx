import React from 'react';
import {Divider} from "@/components/Sidebar/Divider";

function Timeline() {
    return <div className="flex flex-col items-center justify-start self-stretch pt-0.5">
        <div className="h-6 w-6 bg-accent shadow rounded-full">
            <div className={'rounded-full h-2 w-2 bg-[#C696FC] m-[9.5px]'}/>
        </div>
        <div className="border-[1px] border-[#2E2E48] h-full"/>
    </div>;
}

function Experience() {
    return <div className="flex grow gap-1 self-stretch">
        <div className="flex flex-col gap-2 rounded pr-2">
            <div className="text-xs"> 2020 - 2023</div>
            <div className="flex gap-2 self-stretch items-center pb-2">
                <img className={'h-8 w-8 rounded shadow'} src={'ov.png'} alt={'ov'}/>
                <div className="flex flex-col">
                    <div className="text-xs">Senior Software Engineer</div>
                    <a href={'https://oostvoort.com/'} className="text-sm text-link">Oost & Voort Inc.</a>
                </div>
            </div>
            <div className="grow text-gray-400 text-xs">
                <div className={'flex flex-col gap-y-2'}>
                    <p>&#8226; Led development of a learning management system with <b>500+ users</b> across <b>7+
                        branches</b>,
                        handling <b>fullstack programming</b>, <b>server deployment</b>, <b>CI/CD</b>, and <b>client
                            coordination</b>.
                    </p>
                    <p>&#8226; Created an <b>internal web-based video conferencing solution</b> used by the company as
                        an
                        alternative to Google Meet and Zoom.
                    </p>
                    <p>&#8226; Worked as <b>tech lead</b> and <b>project manager</b> for multiple blockchain projects
                        with the most
                        successful one reaching a <b>TVL of over $100M</b>.
                    </p>
                    <p>&#8226; Headed <b>Agile Project Management operations</b>, setting standards, mentoring teams,
                        and
                        collaborating with management to establish company-wide policies and structures.
                    </p>
                    <p>&#8226; Led the development of an online 3D marketplace, <b>coordinating components</b>, <b>negotiating
                        with the client</b>, and <b>spearheading research and implementation</b> of new technologies.
                    </p>
                    <p>&#8226; Led research and development projects focused on <b>Rust as a backend solution</b>,
                        creating an
                        <b>integrated time tracking and task management system</b>, an <b>improved video conferencing
                            solution</b>,
                        and a <b>blazingly fast blockchain tool for dApp development</b>.
                    </p>
                </div>
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
        <img alt={props.src} className="h-14 w-14 md:h-16 md:w-16 rounded" src={props.src ?? "https://via.placeholder.com/24x24"}/>
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
    title?: string,
    children: React.ReactNode
}) {
    return <div className="flex flex-row gap-4">
        <Timeline/>
        <div className="flex grow flex-col gap-2 gap-x-10">
            <div className="text-lg">{props.title}</div>
            {props.children}
        </div>
    </div>;
}

function Tool(props: {
    src: string,
    title: string,
    children: React.ReactNode
}) {
    return <div className="flex flex-row gap-2 rounded-md bg-accent p-3 items-center">
        <img className="h-16 w-16 md:h-24 md:w-24 rounded" src={props.src} alt={"pc"}/>
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
                <li>&#8226; Considerably improves productivity when developing web based projects</li>
            </ul>
        </Tool>
        <Tool title={'Fast Internet Connection'} src={'internet.png'}>
            <ul>
                <li>&#8226; Up to and usually 100Mbps</li>
                <li>&#8226; 80% minimum guaranteed speed</li>
                <li>&#8226; No monthly data cap</li>
                <li>&#8226; 99% Uptime with multiple backups and redundancies</li>
            </ul>
        </Tool>
    </div>;
}

function MainContent() {
    return (
        <div className="flex h-full p-8 bg-main flex-col gap-8">
            <Content title={'Michael Francisco'}>
                <div className={'flex flex-col gap-6 text-[0.75rem] text-gray-300'}>
                    <p>
                        Experienced full-stack developer adept in a broad range of skills like Web
                        development, Backend services, DevOps, and Agile project management.
                    </p>
                </div>
            </Content>

            <Content title={'Experience'}>
                <Experience/>
            </Content>

            <Content title={'Skills'}>
                <Skills/>
            </Content>

            <Content title={'Tools'}>
                <Tools/>
            </Content>

                <div className={'flex flex-col gap-4 text-xs'}>
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
    );
}

export default MainContent;