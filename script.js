function searchAction(search) {
    const searchTerm = search.toLowerCase();
    const filteredProjects = projects.filter(project => {
        const { title, description, tags } = project;
        const projectText = `${title.toLowerCase()} ${description.toLowerCase()} ${tags.join(' ').toLowerCase()}`;
        return projectText.includes(searchTerm);
    });
    setProjectList(filteredProjects);
}

const toggleMenu = () => {
    document.body.classList.toggle("open");
  };



