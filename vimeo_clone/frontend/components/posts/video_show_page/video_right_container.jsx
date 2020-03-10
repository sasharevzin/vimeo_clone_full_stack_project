import React from 'react'
import VideoShowItem from './video_show_item'

class VideoRightContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 7
        }

        this.handleClick= this.handleClick.bind(this)    
    }

    handleClick(e) {
        e.preventDefault()
        this.setState(prevState => ({
            index: prevState.index + 5
        }))
    }

    render() {
        const { postId, entities } = this.props
        const userId = Object.keys(entities.users)[0]
        const uploaderState = entities.posts[postId].uploaderPosts

        //Conditional to check if the props has been full updated or not
        if (uploaderState === undefined) {
            return null
        }

        //This is to map out the uploads of the users current show page so that 
        //they can see all the related videos on the side bar.
        const keys = Object.keys(uploaderState)
        const collectionOfPosts = keys.map(key => uploaderState[key])
        const uploaderSliceOfState = collectionOfPosts.slice(0, this.state.index)


        return (
            <div className="video-right-top-container">
                <div className="video-right-inner-container">
                <div className="more-from-this-user">More from this user</div>
                    <div className="video-right-thumbnail-title-container">
                        {
                            
                            uploaderSliceOfState.map((post, i) => {
                                return <VideoShowItem 
                                key={`post-show-${i}`}
                                user={entities.users[userId]}
                                post={post}/>
                            })
                        }
                    </div>
                </div>
                <div className="show-more-videos-container-outer">
                    <div className="show-more-space-holder">
                        {' '}
                    </div>

                    {
                        this.state.index <= keys.length
                        ?
                        (
                            <div className=".show-more-videos-container-inner">
                                <button
                                    onClick={this.handleClick}
                                    className="show-more-videos">
                                    Show more...
                                </button>
                            </div>
                        ) : (
                            null
                        )
                    }
                    
                </div>
            </div>
        )
    }
}

export default VideoRightContainer;