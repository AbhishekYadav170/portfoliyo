import "./dock.scss"


const Dock = ({windowsState, setWindowsState}) => {
  
  return (
    <footer className='dock'>
        <div
          onClick={() =>{setWindowsState(state =>({...state,github:true}))}}
          className="icon github"><img src="/doc-icons/github.png" alt="GitHub"/></div>

        <div
          onClick={() => { setWindowsState(state =>({...state,note:true}))}}
          className="icon note"><img src="/doc-icons/note.png" alt="GitHub" /></div>

        <div
          onClick={() =>{setWindowsState(state =>({...state,resume:true}))}}
          className="icon pdf"><img src="/doc-icons/pdf.png" alt="GitHub" /></div>

        <div
          onClick={()=>{window.open("http://calender.google.com","_blanck")}}
          className="icon calender"><img src="/doc-icons/calender.png" alt="GitHub"></img></div>

        <div
          onClick={() =>{setWindowsState(state =>({...state,spotify:true}))}}
          className="icon spotify"><img src="/doc-icons/spotify.png" alt="" /></div>

        <div
            onClick={()=>{window.open("mailto:setyadav169@gmail.com","_blank")}}
             className="icon mail"><img src="/doc-icons/mail.png" alt="" /></div>  
        

        <div
          onClick={() => {window.open("https://www.linkedin.com/in/abhishek-yadav-2248262b6?utm_source=share_via&utm_content=profile&utm_medium=member_android/","_blank")}}
          className="icon link"><img src="/doc-icons/link.png" alt="GitHub"></img></div>

        <div className="icon greater"><img src="/doc-icons/greater.png" alt="GitHub"></img></div>

    </footer>
  )
}

export default Dock
