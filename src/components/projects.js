import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"


const Projects = props => {
    const data = useStaticQuery(graphql`
        query ProjectImageQuery {
            reach: file(absolutePath: { regex: "/reach.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)


    const projectData = [
        {
            name: 'Reach Mobile',
            screenshot: 'https://www.hellomagazine.com/imagenes//healthandbeauty/health-and-fitness/2019072575722/beyonce-weight-loss-new-details-revealed/0-367-633/beyonce-weight-loss-revealed-t.jpg',
            overview: `Reach Mobile is a Progressive Web Application currently being used to connect low income patients with local life enhancing resources.`,
            contributions: [`Built new features such as the Reach for Providers feature that expanded the use of the patient app to include the scenario where a patient navigator uses the app on behalf of the patient and therefore included added in case management abilities such as find and selecting a patient, adding resources to a particular patient's case, updating a patient's demographic data and searching for resources by keywords. To build this feature, I collaborated with members from the Product Design Team to land on a UX that matched the pre-existing app as well the provider's unique needs.`,
                            `Created multiple iterations of the resource cards that displays different information depending on if the card is in the search results, detail or preview modes`,
                            `Conducted multiple user testing interviews at a clinic in California, engaged with over 100 patients, asked questions from a survey that I helped create and recorded their responses.`,
                            `Created Redux actions and React components that are shared and used in multiple places throughout the app.`],
            github: 'https://github.com/pearl1991/reach',
            tech: 'React, ES6, Redux, ImmutableJS, and Webpack'
        }, {
            name: 'DC Weather App',
            screenshot: 'https://www.hellomagazine.com/imagenes/healthandbeauty/mother-and-baby/2019081276411/beyonce-twins-rare-appearance-with-jay-z/0-370-489/beyonce-twins-rare-appearance-t.jpg',
            overview: 'This is a sample app that uses React, Redux and the DarkSky API. It can be used to determine if someone should take the metro or bike to work given their own weather parameters.',
            contributions: ['I both designed and implemented this app.'],
            github: 'https://github.com/pearl1991/gigantum-weather-app',
            demo: 'https://safe-dawn-74726.herokuapp.com/',
            tech: 'React, ES6, Redux, and DarkSky API'
        }
    ]
    const projects = projectData.map(project => {
        return <Project project={project} key={project.name} />
    })
    

    return (
        <div>{projects}</div>
    )
  }


export default Projects

