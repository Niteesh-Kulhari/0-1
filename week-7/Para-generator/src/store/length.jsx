import {atom, selector} from "recoil"

export const lengthAtom = atom({
    key: "lengthAtom",
    default: 0,
})

export const wordAtom = atom({
    key: "wordAtom",
    default: "",
})

export const wordGenerator = selector({
    key: "wordGenerator",
    get :({get})=>{
        const length = get(lengthAtom);
        const word = get(wordAtom);

        
    }
},[lengthAtom, wordAtom])

