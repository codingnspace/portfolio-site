import React from "react"
import { rhythm } from "../utils/typography"
import styles from './project.module.css'

class Project extends React.Component {
    constructor() {
        super()
        this.state = {
            isExpanded: false
        }
    }

    handleClick = () => {
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {
        const contributions = this.props.project.contributions.map((contribution, idx) => {
            return <li key={idx+contribution}>{contribution}</li>
        })
        return (
            <div className={`${styles.project} ${this.state.isExpanded && styles.isExpanded}`} onClick={this.handleClick}>
                <div className={styles.projectContentContainer}>
                    <img src={this.props.project.screenshot} />
                    <div className={styles.projectContent}>
                        <h3>{this.props.project.name}</h3>
                        <h4>{`Tech used: ${this.props.project.tech}`}</h4>
                    </div>
                </div>
                <div className={styles.btnRow}>
                    <a href={this.props.project.github} className={styles.github}>View on Github</a>
                    <a className={styles.demo} href={this.props.project.demo}>Demo</a>
                </div>
            </div>
        )
   }
}

export default Project
