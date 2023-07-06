import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Providers from "@/app/providers";

export default function Home() {
    return (
        <Providers>
            <main className={'flex flex-col h-screen w-screen overflow-x-hidden'}>
                <div className={'flex md:hidden'}>
                    <Topbar/>
                </div>
                <div className={'flex flex-row grow'}>
                    <div className={'hidden md:flex w-72'}>
                        <Sidebar/>
                    </div>
                    <div className={'flex flex-grow'}>
                        <MainContent/>
                    </div>
                </div>
            </main>
        </Providers>
    )
}
