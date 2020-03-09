import React from 'react'
import VideoViewportContainer from './video_viewport_container'
import VideoBottomContainer from './video_bottom_container'

class VideoPage extends React.Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const { postId, entities } = this.props
        console.log(this.props)
        return (
            <div className="showpage-video-container">
                <VideoViewportContainer videoUrl={entities.posts[postId].videoUrl}/>
                <VideoBottomContainer />
            </div>
        )
    }
}

export default VideoPage;