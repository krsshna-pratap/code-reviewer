import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "prismjs/themes/prism-tomorrow.css"
// import "prismjs/components/prism-jsx" 
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`function sum() { return 1+1 }`)

  useEffect(()=>{
    prism.highlightAll()
  })

  const [review, setReview] = useState(``)

  async function reviewCode(){
    const response = await axios.post('http://localhost:3000/ai/get-review', {code})
    setReview(response.data)
  }

  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
          value={code}
          onValueChange={code=>setCode(code)}
          highlight={code=>prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily: '"fira code", "fira mono", monospace',
            fontSize: 20, 
            // backgroundColor: "#f5f5f5", 
            border: "1px solid #ddd", 
            borderRadius: "5px",
            height: "100%",
            width: "100%" 
          }}
          />
        </div>
        <div onClick={reviewCode} 
        className="review">Review</div>
      </div>
      <div className="right">
        {review}
      </div>
    </main>
    </>
  )
}

function sum() {
  return 1+1;
}

export default App