import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const LearnMore = () => {
	const { store, actions } = useContext(Context);
    const links=["https://www.pawlicy.com/blog/pet-care/","https://www.adoptapet.com/","https://www.gopetfriendly.com/blog/",
    "https://www.gopetfriendly.com/blog/","https://www.dogingtonpost.com/", "https://www.dogster.com/", "https://www.handicappedpets.com/blog/",
    "https://www.freshpet.com/", "https://petkeen.com/","https://ohmydogblog.com/","https://www.mypawsitivelypets.com/","https://pangopets.com/"
    ]
	console.log(store)
	return (
		<div className="mt-5 learnMoreContainer1" >
            <div className="row gap-2 d-flex justify-content-center learnMoreContainer">
            <h2 className="justify-content-center d-flex">Educational Videos</h2>
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/aZDb6HZu-Po?si=VT4JOWiuAKe-BHcq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/rMUPeTda69s?si=sl9RfNW_hquaxzS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/z0AUfyoPu64?si=808hnqIS-9AKt7yq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/peUVLEUj-AM?si=nlG_IzogtCR2eeKX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/7vOXWCewEYM?si=ORQZXIOlpaO9o8cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/Tn3lZE0rRBs?si=FSD6FP5HW6eW9B4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/ckWzAqJEhKg?si=h5_8EE2E6f54Ljn2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/hpb7-dbjVSU?si=WZozgHuMyyVzOFXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/qNtwkSVr2Pw?si=3MO1OhL-7i2DAo5q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="col-4" width="560" height="315" src="https://www.youtube.com/embed/0R-ndQN3zEk?si=7SFQUgY86XGuNkn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

            <div className="justify-content-center">
                <h3 className="justify-content-center d-flex">For More Information Here Are Some Blog Links:</h3>
                
                <ul className="blogContainer row d-flex justify-content-center">
                {links.map((link)=>{
                    return <li><a target="_blank" href={link}>{link}</a></li>
                
                })}
            
                
                </ul>
            </div>
        </div>
        


	);

	
};