import { useState } from "react";
import "./style2.css";
import Before from "./components/Before";
import Loading from "./components/Loading";
import Uploaded from "./components/Uploaded";

import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../firebase.config";
import { Routes, Route, useNavigate } from "react-router-dom";



function App() {
  const [url,setUrl]= useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  async function getFile(e:any){
    const image = e.target.files[0];
    console.log(e.target.files)
    const imageRef =  ref(storage, image.name);

    await uploadBytes(imageRef, image);
    
    navigate('/uploaded');
    const temp = await getDownloadURL(imageRef)
    if (temp){
      console.log(temp)
      setUrl(temp);
      
      setLoading(false)
    }
    
  }
  return (
    
      <>
      <main className="flex justify-center items-center h-screen">
        <Routes>
        <Route path="/" element={<Before get={getFile}/>}/>

        <Route path="/uploaded" element={ loading ?<Loading/> :<Uploaded link={url}/> }/>
        </Routes>
        

        
      </main>
      <footer className="flex justify-center mt-20">
        <p>
          Created by <strong>Rich0tcom</strong>
          <a href="https://devchallenges.io">devchallenges.io</a>
        </p>
      </footer>
      </>
    
    
  );
}

export default App;
