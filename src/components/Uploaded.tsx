import React from "react";
import check from '../assets/svgs/check_circle_FILL0_wght400_GRAD0_opsz48.svg'
interface appProps{
  link:string,
}
const Uploaded = ({link}:appProps) => {
  return (
    <div className="w-[400.36px] h-[454.96px] pt-10 px-8 rounded-lg shadow-lg">
      <div className="flex justify-center">
        {/* <span className="h-9 w-9 material-icons">{check}</span> */}
        <span className="material-symbols-outlined">
check_circle
</span>
      </div>
      <h4 className="mt-4 text-center text-lg font-medium">
        Uploaded succesfully
      </h4>
      <div className="w-[338px] h-[224px] mt-6 rounded-lg">
        {/* <!--insert image here --> */}
        <img
          src={link}
          alt="uploaded image"
          className="w-[338px] h-[224px] rounded-lg object-cover"
        />
      </div>

      <div className="flex mt-6 h-[34px] rounded ">
        <div className="bg-[#f6f8fb] border border-[#e0e0e0] px-3 py-2 basis-3/4 overflow-hidden">
          <p className="text-xs text[#f4f4f4] overflow-hidden">{link}</p>
        </div>
        <button className="bg-blue-500 px-2 basis-1/4 -ml-3 rounded-lg text-xs text-white" onClick={()=>{
          navigator.clipboard.writeText(link);
          alert('Image link copied to clipboard');
        }}>
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default Uploaded;
