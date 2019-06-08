import React from 'react';

const ChannelItem = (props, onChannelSelect) => {
    return (
        
        <li key={props.channel.etag} className="list-group-item mr-5" >
              <div className="channel-list media mr-5">
                <div className="media-left">
                  {/* <img
                    className="media-object"
                    src={props.video.snippet.thumbnails.default.url}
                  /> */}
                </div>
                <div className="media-body">
                    {/* 2019-06-09 API type channel로 안바뀜 */}
                <div className="mdial-heading"> {props.channel.snippet.videoCount /*statistics.subscriberCount*/} </div>
                </div>
              </div>
        </li>
    );
 };

export default ChannelItem;