import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Providers from "@/app/providers";

export default function Home() {
    return (
        <Providers>
            <div className={'flex justify-center'}>
                <div className={'flex flex-col max-w-4xl items-center h-screen w-screen overflow-x-hidden'}>
                    <div className={'flex flex-row grow'}>
                        <div className={'fixed flex md:hidden w-full'}>
                            <Topbar/>
                        </div>
                        <div className={'hidden h-screen sticky top-0 md:flex w-80'}>
                            <Sidebar/>
                        </div>
                        <main className={'flex md:pt-0 pt-6'}>
                            <MainContent/>
                        </main>
                    </div>
                </div>
            </div>
        </Providers>
    )
}
