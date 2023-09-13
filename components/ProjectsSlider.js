import Image from "next/image"
import projectImg from "@public/images/Projects-2.png";
export default function ProjectsSlider(){
  return(
    <div className='projects-slider'>
      <div className="overflow">
        <div className="projects-wrapper">
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
        </div>
        <div className="projects-wrapper">
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
          <div className="projects-item">
            <Image src={projectImg} className="projects-item-img" alt="project"/>
          </div>
        </div>
      </div>
    </div>
  )
};

