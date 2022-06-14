import React from "react";
import { useDropzone } from "react-dropzone";
import mountain from '../assets/svgs/mountain-svgrepo-com.svg'


interface appProps{
  get: Function,
}


const Before = ({get}:appProps) => {

  const { getRootProps, getInputProps} = useDropzone({
    onDrop: (file)=>{
      get()
    }

  })

  return (
    <div className="w-[402px] h-[469px] pt-9 px-8 rounded-lg shadow-lg">
      <h1 className="text-center font-medium text-lg text-[#4f4f4f] leading-[18px]">
        Load your image
      </h1>
      <p className="mt-4 text-center text-[10px] font-medium leading-[15px] text-[#828282]">
        file should Jpeg, Png,...
      </p>
      <div {...getRootProps()} className="w-[338px] h-[218px] mt-7 pb-10 flex flex-col items-center pt-9 bg-[#f6f8fb] border border-dashed rounded-lg">
        <div className="w-[114.3px] h-[88.24px] relative">
          <div className="h-[60.19px] mt-3 object-cover">
            <img
              src={mountain}
              className="w-[114.3px] h-[88.24px]"
              alt=""
            />
          </div>
        </div>
        <p className="mt-11 text-xs font-medium text-[#bdbdbd]">
          Drag and drop your image here
        </p>
      </div>
      <p className="mt-5 text-center text-[#bdbdbd] font-medium text-xs leading-[18px]">
        Or
      </p>

      <div className="flex justify-center mt-5">
       
        <label htmlFor="file-input" className="px-5 py-2 rounded-lg text-white bg-blue-500 font-medium">
          <input {...getInputProps()}type="file" name="" id="file-input" onInput={(e:any)=>get(e)} className="w-0 h-0" accept=".jpg, .png, .jpeg" />
          
            Choose a file
          
        </label>
      </div>
    </div>
  );
};

export default Before;
