import { useState } from "react";
import Editor from "@monaco-editor/react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

console.log("Editor:", Editor);
console.log("Markdown:", Markdown);
console.log("rehypeHighlight:", rehypeHighlight);

function App() {
  
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState("");

  // useEffect(() => {
  //   prism.highlightAll()
  // }, [])

  async function reviewCode() {
  try {
    const response = axios.post(
  `${import.meta.env.VITE_API_URL}/ai/get-review`,
  { code }
);

    setReview(response.data);
  } catch (err) {
    console.error(err);
    setReview("❌ Unable to review code.");
  }
}

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
           <Editor
    height="100%"
    defaultLanguage="javascript"
    theme="vs-dark"
    value={code}
    onChange={(value) => setCode(value || "")}
    options={{
      minimap: {
        enabled: false,
      },
      fontSize: 16,
      automaticLayout: true,
      scrollBeyondLastLine: false,
    }}
  />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
