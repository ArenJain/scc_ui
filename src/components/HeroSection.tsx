import { HeroButton } from "./HeroButton"

export const HeroSection = () => {
    return <div className=" bg-Standard-bg-color">
        <div className="w-screen  flex flex-col p-12 content-centre ">
            <div className="text-white text-center font-bold font-sans text-6xl p-4 leading-relaxed">Get to work, with a lot less work </div>
            <div className="text-gray-400 text-center px-3 text-xl flex  justify-center"> <div className="max-w-4xl">Dropbox delivers tools that help you move your work forward faster, keep it safe, and <span>
            let you collaborate with ease.</span></div></div>
            <div className="flex justify-center my-4"><div className="h-4 w-40"><HeroButton/></div></div>
            
        </div>
        <div className="flex felx-col h-hero-2  items-center justify-between my-10 ">
        <div className="flex justify-start  z-1 h-2/4 -m-6" ><img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop-en_GB.png?id=e6b22640-bccc-4e88-a817-c28e0c80b615&width=1024&output_type=webp" alt=""  /></div>
        <div className="flex justify-center shadow-xl z-10 h-3/5   " ><img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop-en_GB.png?id=e6b22640-bccc-4e88-a817-c28e0c80b615&width=1024&output_type=webp" alt=""  /></div>
        <div className="flex justify-end  z-2 h-2/4 -m-6" ><img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop-en_GB.png?id=e6b22640-bccc-4e88-a817-c28e0c80b615&width=1024&output_type=webp" alt=""  /></div>
        </div>
    </div>
}