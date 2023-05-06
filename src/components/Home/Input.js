import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Input = ({setTags, onSubmit, tags}) => {
    const [input, setInput] = useState('');
    const [start, setStart] = useState(0);
    const [check, setCheck] = useState(false); 
    const [isDisabled, setIsDisabled] = useState(false);
    var newTag = null;
    /*
    const removeTag = (tag) => {
      setTags(prevTags => prevTags.filter((t) => t !== tag))
    }
    */
    useEffect(()=>{
      //성별 감지->버튼 활성화
      if(input.includes("공용")||input.includes("남자")||input.includes("여자")){
        setCheck(true);
        setIsDisabled(true);
        console.log("감지");
      }
      /*입력 수정
      for(let tag of tags){
        if(!input.includes(tag)&&tags.length!==0){
          removeTag(tag);
          console.log("태그", tag);
          console.log("태그들", tags);
        }
      }
      */
    },[input])

    const handleOnKeyPress = async (e) => {
      if (e.key === "Enter" || e.key === " ") {
        console.log("before:" + start);
        newTag = input.substr(start, input.length).trim();
        if (newTag === "") {
          return;
        }
        await setTags([...tags, newTag]);
        setStart(input.length);
        
        /*if (callback) {
          callback();
        }*/
      }
    };
      
    const handleSubmit = async (e) => {
      await handleOnKeyPress({ key: " " });
      onSubmit();
      
    
    };
    
    return (
        <div className="textfield-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
                style={{width: '500px'}}
                id="outlined-multiline-static"
                multiline
                rows={20}
                placeholder="입력"
                onChange={(e)=>setInput(e.target.value)}
                onKeyDown={(e) => handleOnKeyPress(e, e.target.value)}
            />
                
                    <Button style={{marginLeft: 'auto'}} disabled={!isDisabled} variant="contained" onClick={handleSubmit}>
                    입력
                    </Button>
      </div>
    )
}
export default Input;