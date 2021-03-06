import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Project.css'

const Projects = () => {


   const [projects, setProject] = useState([])
   useEffect(() => {
      fetch('./projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
   }, [])


   return (
      <>
      <Header></Header>
      <div id="projects" className="
         container 
         px-4
         lg:px-14
         mx-auto 
         pt-16
         pb-24
      ">
         <div className="flex justify-center pb-16">
            <div className="projects-dash mx-auto inline-block relative">
               <p className="text-lg font-extrabold about-h2 inline-block rounded badge-bg py-1.5 px-4">PROJECTS</p>
            </div>
         </div>
         <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
            { projects.map(project =>(
            <div className="rounded-lg " style={{backgroundColor: "#1d293a"}}>
               <div>
                  <img className="rounded-t-lg" src={project.image} alt="" />
               </div>
               <div className="p-6">
                  <div>
                     <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                     <p className="mb-4">{project.desc}</p>
                  </div>
                  <div className="mb-4">
                     {project.clientSideRepo && 
                     <a className="text-sm font-bold py-1 px-2 rounded theme-bg dark-color mr-2" href={project.clientSideRepo}  target="_blank" rel="noreferrer noopener">
                        UI 
                        <span className="ml-2">
                           <FontAwesomeIcon className="text-base" icon={faGithub}/>
                        </span>
                     </a>}
                     {project.serverSideRepo && 
                        <a className="text-sm font-bold py-1 px-2 rounded theme-bg dark-color mr-2 mr-2" href={project.serverSideRepo} target="_blank" rel="noreferrer noopener">
                           Server 
                           <span className="ml-2">
                           <FontAwesomeIcon className="text-base" icon={faGithub}/>
                           </span>
                        </a>}
                     {project.liveSite && 
                     <a className="text-sm font-bold py-1 px-2 rounded theme-bg dark-color mr-2" href={project.liveSite} target="_blank" rel="noreferrer noopener">
                        Live 
                        <span className="ml-2">
                           <FontAwesomeIcon className="text-base" icon={faExternalLinkAlt}/>
                        </span>
                     </a>}
                  </div>
                  <div className="flex flex-wrap mr-4">
                     {project.technology.map(tech => <span className="px-2 py-1 mr-2 mb-2 rounded text-xs" style={{backgroundColor: "#111a28"}}>{tech}</span>)}
                  </div>
               </div>
            </div>
            ))}
         </div>
      </div>
      <Footer></Footer>
      </>
   );
};

export default Projects;