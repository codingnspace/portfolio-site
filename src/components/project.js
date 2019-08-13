import React from "react"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const Project = (props) => {
console.log(props)
    const contributions = props.project.contributions.map((contribution, idx) => {
        return <li key={idx+contribution}>{contribution}</li>
    })
    return (
        <div>
            <Image
                alt={`Screenshot of ${props.project.name}`}
                style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                }}
                fixed={props.project.screenshot}
                imgStyle={{
                    borderRadius: `50%`,
                }}
            />
            <h3>{props.project.name}</h3>
            <p>{props.project.overview}</p>
            <ul>{contributions}</ul>
            <h4>{`Tech used: ${props.project.tech}`}</h4>
            <a href={props.project.github}>View on Github</a>
            {props.project.demo && <div><a href={props.project.demo}>Demo</a></div>}
        </div>
    )
}

export default Project
