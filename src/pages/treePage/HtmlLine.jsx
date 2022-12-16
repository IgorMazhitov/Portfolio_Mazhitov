
    import { useDispatch, useSelector } from "react-redux";
    import { HTML_ANIM_6, HTML_ANIM_7 } from "../../Redux/types";


    import React from "react"

        const HtmlLine = (props) => {

            const dispatch = useDispatch()

            const textStyle = 'duration-300 whitespace-nowrap uppercase py-2 px-4 text-md bg-black text-yellow-400'

            const { 
                startHTMLDot, firstMiddleLine, 
                secondDot, secondLine, thirdHTMLDot, thirdHTMLLine, fourthHTMLDot, 
            } = useSelector(state => state.tree)

            const {
                firstHTML, secondHTML, thirdHTML, fourthHTML,
                setFirstHTML, setSecondHTML, setThirdHTML, setFourthHTML
            } = props.value

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
                dispatch({type: HTML_ANIM_6})
                setTimeout(() => {
                    dispatch({type: HTML_ANIM_7})
                }, 300)
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
                                    <p className={textStyle}>BASICS</p>
                                    <p className={textStyle}>MEDIA</p>
                                    <p className={textStyle}>FORMS</p>
                                    <p className={textStyle}>API</p>
                                    <p className={textStyle}>GRAPHICS</p>
                                </div>

                                <div className={secondLine}>

                                    <div 
                                    className={thirdHTMLDot + ' hover:scale-125 z-[11] cursor-pointer'}
                                    onClick={() => thirdHTMLClick()}></div>
                                    <div className={thirdHTMLDot}>

                                        <div className={thirdHTML}>
                                            <p className={textStyle}>SEO</p>
                                            <p className={textStyle}> SEO basics </p>
                                            <p className={textStyle}> SEO tags </p>
                                        </div>

                                        <div className={thirdHTMLLine}>

                                            <div 
                                            className={fourthHTMLDot + ' hover:scale-125 z-[11] cursor-pointer'}
                                            onClick={() => fourthHTMLClick()}></div>
                                            <div className={fourthHTMLDot}>

                                                <div className={fourthHTML + ' z-[11'}>

                                                    <p className={textStyle}>BASICS</p>
                                                    <p className={textStyle}> ELEMENTS </p>
                                                    <p className={textStyle}> ATTRIBUTES </p>
                                                    <p className={textStyle}> LAYOUT </p>

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