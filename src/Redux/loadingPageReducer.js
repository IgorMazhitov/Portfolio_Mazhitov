import { LOADING_A_SURNAME_END, LOADING_A_SURNAME_START, LOADING_CLOSE_BLOCK_1, LOADING_CLOSE_BLOCK_2, LOADING_G_NAME_END, LOADING_G_NAME_START, LOADING_H_SURNAME_END, LOADING_H_SURNAME_START, LOADING_I_NAME_END, LOADING_I_NAME_START, LOADING_I_SURNAME_END, LOADING_I_SURNAME_START, LOADING_M_SURNAME_END, LOADING_M_SURNAME_START, LOADING_O_NAME_END, LOADING_O_NAME_START, LOADING_O_SURNAME_END, LOADING_O_SURNAME_START, LOADING_R_NAME_END, LOADING_R_NAME_START, LOADING_T_SURNAME_END, LOADING_T_SURNAME_START, LOADING_V_SURNAME_END, LOADING_V_SURNAME_START, LOADING_Z_SURNAME_END, LOADING_Z_SURNAME_START } from "./types";

    


    const initialState = {
        iNameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        gNameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",
        oNameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        rNameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",
        mSurnameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        aSurnameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",
        zSurnameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        hSurnameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",
        iSurnameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        tSurnameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",
        oSurnameBlock: "absolute top-0 left-1/2 -translate-x-1/2 translate-y-full w-full h-screen bg-black duration-300",
        vSurnameBlock: "absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-full w-full h-screen bg-black duration-300",

        block1Close: "h-[10%] w-screen -translate-x-full duration-1000 bg-black",
        block2Close: "h-[10%] w-screen translate-x-full duration-1000 bg-black",
        
    }

    export const loadingPageReducer = (state = initialState, action) => {

        switch (action.type) {
            case LOADING_I_NAME_START:
                return {
                    ...state,
                    iNameBlock: state.iNameBlock.replace(' translate-y-full', '')
                }
            
            case LOADING_I_NAME_END:
                return {
                    ...state,
                    iNameBlock: state.iNameBlock + ' translate-y-full'
                }

            case LOADING_G_NAME_START:
                return {
                    ...state,
                    gNameBlock: state.gNameBlock.replace('-translate-y-full', '')
                }

            case LOADING_G_NAME_END:
                return {
                    ...state,
                    gNameBlock: state.gNameBlock + ' -translate-y-full'
                }

            case LOADING_O_NAME_START:
                return {
                    ...state,
                    oNameBlock: state.oNameBlock.replace(' translate-y-full', '')
                }

            case LOADING_O_NAME_END:
                return {
                    ...state,
                    oNameBlock: state.oNameBlock + ' translate-y-full'
                }

            case LOADING_R_NAME_START:
                return {
                    ...state,
                    rNameBlock: state.rNameBlock.replace('-translate-y-full', '')
                }
    
            case LOADING_R_NAME_END:
                return {
                    ...state,
                    rNameBlock: state.rNameBlock + ' -translate-y-full'
                }

            case LOADING_M_SURNAME_START:
                return {
                    ...state,
                    mSurnameBlock: state.mSurnameBlock.replace(' translate-y-full', '')
                }
    
            case LOADING_M_SURNAME_END:
                return {
                    ...state,
                    mSurnameBlock: state.mSurnameBlock + ' translate-y-full'
                }

            case LOADING_A_SURNAME_START:
                return {
                    ...state,
                    aSurnameBlock: state.aSurnameBlock.replace(' -translate-y-full', '')
                }
        
            case LOADING_A_SURNAME_END:
                return {
                    ...state,
                    aSurnameBlock: state.aSurnameBlock + ' -translate-y-full'
                }

            case LOADING_Z_SURNAME_START:
                return {
                    ...state,
                    zSurnameBlock: state.zSurnameBlock.replace(' translate-y-full', '')
                }
        
            case LOADING_Z_SURNAME_END:
                return {
                    ...state,
                    zSurnameBlock: state.zSurnameBlock + ' translate-y-full'
                }
    
            case LOADING_H_SURNAME_START:
                return {
                    ...state,
                    hSurnameBlock: state.hSurnameBlock.replace(' -translate-y-full', '')
                }
            
            case LOADING_H_SURNAME_END:
                return {
                    ...state,
                    hSurnameBlock: state.hSurnameBlock + ' -translate-y-full'
                }

            case LOADING_I_SURNAME_START:
                return {
                    ...state,
                    iSurnameBlock: state.iSurnameBlock.replace(' translate-y-full', '')
                }
            
            case LOADING_I_SURNAME_END:
                return {
                    ...state,
                    iSurnameBlock: state.iSurnameBlock + ' translate-y-full'
                }
        
            case LOADING_T_SURNAME_START:
                return {
                    ...state,
                    tSurnameBlock: state.tSurnameBlock.replace(' -translate-y-full', '')
                }
                
            case LOADING_T_SURNAME_END:
                return {
                    ...state,
                    tSurnameBlock: state.tSurnameBlock + ' -translate-y-full'
                }

            case LOADING_O_SURNAME_START:
                return {
                    ...state,
                    oSurnameBlock: state.oSurnameBlock.replace(' translate-y-full', '')
                }
                
            case LOADING_O_SURNAME_END:
                return {
                    ...state,
                    oSurnameBlock: state.oSurnameBlock + ' translate-y-full'
                }
            
            case LOADING_V_SURNAME_START:
                return {
                    ...state,
                    vSurnameBlock: state.vSurnameBlock.replace(' -translate-y-full', '')
                }
                    
            case LOADING_V_SURNAME_END:
                return {
                    ...state,
                    vSurnameBlock: state.vSurnameBlock + ' -translate-y-full'
                }

            case LOADING_CLOSE_BLOCK_1:
                return {
                    ...state,
                    block1Close: state.block1Close.replace(' -translate-x-full', ' translate-x-full')
                }

            case LOADING_CLOSE_BLOCK_2:
                return {
                    ...state,
                    block2Close: state.block2Close.replace(' translate-x-full', ' -translate-x-full')
                }
            
        
            default:
                return state
        }

    }