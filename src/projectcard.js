const ProjectCard = (project) => {

    // object that ocntains all of our project data
    const projectData = project;


    // format each point described in project by bullest point list
    const pointMap = projectData.project.info.map(
        function(dataPoint){
            return(<><div>● {dataPoint} </div></>)
        }
    )


    // return formatted Project
    return(<>

        <div className="project reveal">
            <div className="skillLabel">{projectData.project.name}</div>
            <div className="skillInfo1">{projectData.project.desc}</div>
            <div className="skillInfo2">{projectData.project.tech}</div>
            <div>{pointMap}</div>
        </div>

    </>);
}

export default ProjectCard;