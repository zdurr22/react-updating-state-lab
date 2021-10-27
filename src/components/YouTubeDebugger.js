import React from "react";

// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
               bitrate: 12 
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
               video: {
                   ...this.state.settings.video,
                    resolution: '720p'
               } 
            }
        });
    };

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Change Bitrate to 12</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Change Resolution to 720p</button>
            </div>
        )
    }
}