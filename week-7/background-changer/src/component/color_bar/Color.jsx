import { useSetRecoilState , useRecoilValue} from 'recoil'; // Import useRecoilState hook
import { RecoilRoot } from 'recoil'; // Only import RecoilRoot once
import { colorChangerState } from "../../store/atoms/color"; // Import colorChanger atom
import "./color.css"

export default function Color(){
    
    return(
        <RecoilRoot>
            <Changer/>
        </RecoilRoot>
    )
}

function Changer(){
    const color = useRecoilValue(colorChangerState);
    return(
        <div className="body" style={{backgroundColor: color}}>
            <div className="bottomBar">
                <Button color={"Red"}/>
                <Button color={"Yellow"}/>
                <Button color={"Black"}/>
                <Button color={"Purple"}/>
                <Button color={"Green"}/>
                <Button color={"Blue"}/>
                <Button color={"Default"}/>
            </div>
        </div>
    )
}
const Button = ({ color }) => {
    const setColorChange = useSetRecoilState(colorChangerState);

    return (
        <button className={color} onClick={() => {
            if(color === 'Default'){
                setColorChange('wheat');
            }else{setColorChange(color);}
            
        }}>
            {color}
        </button>
    );
};


