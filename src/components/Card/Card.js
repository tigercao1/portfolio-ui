import React, { Component } from 'react';
import './Card.scss';

class ExperienceCard extends Component {
    render() {
        return (
            <div className="card experience">
                <div className="left">
                    <div className="text">
                        <div className="main">{this.props.title}</div>
                        <div className="secondary">{this.props.company}</div>
                    </div>
                    <div className="content">
                        {this.props.content}
                    </div>
                </div>
                <div className="right">
                    <img src={this.props.companyLogo} alt="company-logo"></img>
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
                    <img src={this.props.img} alt="logo"/>
                </div>
            </div>
        )
    }
}

export { ExperienceCard, EducationCard };