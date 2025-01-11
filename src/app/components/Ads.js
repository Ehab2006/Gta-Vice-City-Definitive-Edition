import { useEffect, useRef } from 'react'
export default function Ads(){
    const banner = useRef<HTMLDivElement>()

    const atOptions = {
        key: 'ce6548613fd44d06da2f2d8a83a694cf',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {},
    }
    useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.highperformancedformats.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
}, [banner])

    return <div className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center" ref={banner}></div>
}