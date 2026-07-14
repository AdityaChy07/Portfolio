import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {

    const [show,setShow]=useState(false);

    useEffect(()=>{

        const handleScroll=()=>{

            if(window.scrollY>400){

                setShow(true);

            }else{

                setShow(false);

            }

        };

        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    const scrollTop=()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    return(

        show && (

            <button

            onClick={scrollTop}

            className="fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-black p-4 rounded-full shadow-lg z-50 transition">

                <FaArrowUp/>

            </button>

        )

    )

}

export default ScrollToTop;