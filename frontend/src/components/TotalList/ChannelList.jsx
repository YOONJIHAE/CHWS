import React from 'react';
import ChannelItem from './ChannelItem';

const ChannelList = (props) => {
    
    const channelItem = props.channels.map((channel) => {
        return (
            <ChannelItem channel={channel} key={channel.etag} onChannelSelect={props.onChannelSelect}/>
        )
    })

    return (
        <ul className="col-md-6 list-group">
          {channelItem}
       </ul>
    );
}

export default ChannelList;