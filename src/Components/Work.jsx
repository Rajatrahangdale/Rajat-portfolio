/* eslint-disable react/prop-types */

import ProjectCard from "./ProjectCard";

/**
 * @copyright 2024 Rajatrahangdale
 * @license Apache-2.0
 */
const works = [
  {
    imgSrc: "/images/project-3.png",
    title: "Jobby app",
    tags: ["React", "API", "Development"],
    projectLink: "https://jobby-bice-one.vercel.app/",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "IMDB Clone",
    tags: ["Web-Dev", "API", "React"],
    projectLink: "https://imdb-clone-three-teal.vercel.app/",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "eCommerce website",
    tags: ["eCommerce", "Development", "React", "API"],
    projectLink: "https://ecommerce-project-livid-iota.vercel.app/",
  },
  {
    imgSrc: "/images/project-1.jpg",
    title: "Saas UI Landing Page",
    tags: ["React", "Tailwind"],
    projectLink: "https://saas-ui-kit.vercel.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Rework AI Landing Page",
    tags: ["React", "Tailwind"],
    projectLink: "https://rework-ai-project-eight.vercel.app/",
  },
  {
    imgSrc: "/images/project-6.png",
    title: "Personal portfolio",
    tags: ["React", "Framer Motion"],
    projectLink: "https://rajat-rahangdale.vercel.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-4">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
