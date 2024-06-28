import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";

import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Real Estate Price Prediction System",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
    },
    {
        id: 2,
        name: "Student's Dashboard",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
    },
    {
        id: 3,
        name: "password manager",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
        },
    },
    {
        id: 4,
        name: "Analog Clock",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
];

const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                <Showcase
                    data={projects}
                    transition={transition}
                />
            </div>
        </Section>
    );
};

export default Portfolio;
