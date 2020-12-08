import React, { Component } from 'react';
import './Card.scss';

class ExperienceCard extends Component {
    render() {
        return (
            <div className="card experience">
                <div className="left">
                    <div className="text">
                        <div className="main">{this.props.title}</div>
                    </div>
                    <ul className="content">
                        {this.props.content.map((e, idx) => {
                            return <li key={idx}>{e}</li>
                        })}
                    </ul>
                </div>
                <div className="right">
                    <a href={this.props.link}><img src={this.props.companyLogo} alt="company-logo"></img></a>
                </div>
            </div>
        )
    }
}

class EducationCard extends Component {
    render() {
        return (
            <div className="card education">
                <div className="left">
                    <p>{this.props.children}</p>
                </div>
                <div className="right">
                    <a href={this.props.link}><img src={this.props.img} alt="logo"/></a>
                </div>
            </div>
        )
    }
}

export { ExperienceCard, EducationCard };