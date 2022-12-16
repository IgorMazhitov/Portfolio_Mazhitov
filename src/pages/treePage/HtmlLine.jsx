
    import { useSelector } from "react-redux";
    import { useState } from "react";

    import React from "react"

        const HtmlLine = (props) => {

            const [firstHTML, setFirstHTML] = useState('duration-300 absolute -top-2 -translate-y-full text-xl font-bold bg-black text-slate-200 overflow-hidden h-0')
            const [secondHTML, setSecondHTML] = useState('duration-300 absolute -top-2 -translate-y-full overflow-hidden h-0 flex flex-col justify-start items-start font-bold gap-1')
            const [thirdHTML, setThirdHTML] = useState('duration-300 absolute -top-2 -translate-y-full overflow-hidden h-0 flex flex-row justify-center items-center font-bold gap-1')
            const [fourthHTML, setFourthHTML] = useState('duration-300 absolute -right-2 translate-x-full -translate-y-1/3 overflow-hidden h-[88px] w-0 flex flex-row flex-wrap justify-center items-center font-bold gap-1')

            const { 
                startHTMLDot, firstMiddleLine, 
                secondDot, secondLine, thirdHTMLDot, thirdHTMLLine, fourthHTMLDot, 
            } = useSelector(state => state.tree)

            const firstHTMLClick = () => {
                if (firstHTML.match('h-0')) {
                    setTimeout(() => {
                        setFirstHTML(prev => prev.replace('h-0', 'h-auto') + ' py-2 px-4')
                    }, 300) 
                    setSecondHTML(prev => prev.replace('h-56', 'h-0'))
                    setThirdHTML(prev => prev.replace('h-11', 'h-0'))
                    setFourthHTML(prev => prev.replace('w-80', 'w-0'))


                } else {
                    setFirstHTML(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                }
            }

            const secondHTMLClick = () => {
                if (secondHTML.match('h-0')) {
                    setTimeout(() => {
                        setSecondHTML(prev => prev.replace('h-0', 'h-56'))
                    }, 300)
                    setFirstHTML(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setThirdHTML(prev => prev.replace('h-11', 'h-0'))
                    setFourthHTML(prev => prev.replace('w-80', 'w-0'))


                } else {
                    setSecondHTML(prev => prev.replace('h-56', 'h-0'))
                }
            }

            const thirdHTMLClick = () => {
                if (thirdHTML.match('h-0')) {
                    setTimeout(() => {
                        setThirdHTML(prev => prev.replace('h-0', 'h-11'))
                    }, 300)
                    setFirstHTML(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                    setSecondHTML(prev => prev.replace('h-56', 'h-0'))
                    setFourthHTML(prev => prev.replace('w-80', 'w-0'))

                } else {
                    setThirdHTML(prev => prev.replace('h-11', 'h-0'))
                }
            }

            const fourthHTMLClick = () => {
                if (fourthHTML.match('w-0')) {
                    setTimeout(() => {
                        setFourthHTML(prev => prev.replace('w-0', 'w-80'))
                    }, 300)
                    setThirdHTML(prev => prev.replace('h-11', 'h-0'))
                    setSecondHTML(prev => prev.replace('h-56', 'h-0'))
                    setFirstHTML(prev => prev.replace('h-auto', 'h-0').replace(' py-2 px-4', ''))
                } else {
                    setFourthHTML(prev => prev.replace('w-80', 'w-0'))
                }
            }

            return (

                <>

                    <div 
                    id="start_point"
                    className={startHTMLDot + ' hover:scale-125 z-[11] cursor-pointer'} 
                    onClick={() => firstHTMLClick()}></div>

                    <div className={startHTMLDot + ' z-10'}>
                        <p className={firstHTML}>HTML</p>

                        <div className={firstMiddleLine}>

                            <div 
                            className={secondDot + ' hover:scale-125 z-[11] cursor-pointer'}
                            onClick={() => secondHTMLClick()}></div>
                            <div className={secondDot}>
                                <div className={secondHTML}>
                                    <p className='duration-300 uppercase py-2 px-4 text-md text-black border-2'>Basics</p>
                                    <p className='duration-300 uppercase py-2 px-4 text-md bg-black text-slate-200'>MEDIA</p>
                                    <p className='duration-300 uppercase py-2 px-4 text-md bg-black text-slate-200'>FORMS</p>
                                    <p className='duration-300 uppercase py-2 px-4 text-md bg-black text-slate-200'>API</p>
                                    <p className='duration-300 uppercase py-2 px-4 text-md bg-black text-slate-200'>GRAPHICS</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdHTMLDot + ' hover:scale-125 z-[11] cursor-pointer'}
                                    onClick={() => thirdHTMLClick()}></div>
                                    <div className={thirdHTMLDot}>

                                        <div className={thirdHTML}>
                                            <p className='duration-300 uppercase py-2 px-4 text-md text-black border-2 box-border'> SEO </p>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200'> SEO basics </p>
                                            <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200'> SEO tags </p>
                                        </div>

                                        <div className={thirdHTMLLine}>

                                            <div 
                                            className={fourthHTMLDot + ' hover:scale-125 z-[11] cursor-pointer'}
                                            onClick={() => fourthHTMLClick()}></div>
                                            <div className={fourthHTMLDot}>

                                                <div className={fourthHTML + ' z-[11'}>

                                                    <p className='duration-300 uppercase py-2 px-4 text-md text-black border-2 box-border'> Basics </p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200'> ELEMENTS </p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200'> ATTRIBUTES </p>
                                                    <p className='duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-slate-200'> LAYOUT </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </>

                

            )

        }
    
    export default HtmlLine