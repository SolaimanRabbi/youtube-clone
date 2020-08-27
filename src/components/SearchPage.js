import React from 'react';
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined';
import '../SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutLinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow 
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        channel="Cleaver Programmer"
        verified
        subs="660K"
        numberOfVideos={382}
        description="You can find awesome programming videos you cann't ever imagine."
      />
      <hr/>

      <VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour tranning"
        timestamp="59 seconds ago"
        channel = "Clever Programmer"
        title="Lets Build a Youtube Clone With React js"
        image="https://o.aolcdn.com/images/dims?crop=1890%2C897%2C0%2C129&quality=85&format=jpg&resize=1600%2C759&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2F308858a0-6c56-11e9-9eff-72a0ff15b2d1&client=a1acac3e1b3290917d92&signature=75e93549608b1b5f97d297318bddd6a5507450fe"
      />

<VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour tranning"
        timestamp="59 seconds ago"
        channel = "Clever Programmer"
        title="Lets Build a Youtube Clone With React js"
        image="https://o.aolcdn.com/images/dims?crop=1890%2C897%2C0%2C129&quality=85&format=jpg&resize=1600%2C759&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2F308858a0-6c56-11e9-9eff-72a0ff15b2d1&client=a1acac3e1b3290917d92&signature=75e93549608b1b5f97d297318bddd6a5507450fe"
      />

<VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour tranning"
        timestamp="59 seconds ago"
        channel = "Clever Programmer"
        title="Lets Build a Youtube Clone With React js"
        image="https://o.aolcdn.com/images/dims?crop=1890%2C897%2C0%2C129&quality=85&format=jpg&resize=1600%2C759&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2F308858a0-6c56-11e9-9eff-72a0ff15b2d1&client=a1acac3e1b3290917d92&signature=75e93549608b1b5f97d297318bddd6a5507450fe"
      />

<VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour tranning"
        timestamp="59 seconds ago"
        channel = "Clever Programmer"
        title="Lets Build a Youtube Clone With React js"
        image="https://o.aolcdn.com/images/dims?crop=1890%2C897%2C0%2C129&quality=85&format=jpg&resize=1600%2C759&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2F308858a0-6c56-11e9-9eff-72a0ff15b2d1&client=a1acac3e1b3290917d92&signature=75e93549608b1b5f97d297318bddd6a5507450fe"
      />

<VideoRow 
        views="1.4M"
        subs="659K"
        description="Do you want a free one hour tranning"
        timestamp="59 seconds ago"
        channel = "Clever Programmer"
        title="Lets Build a Youtube Clone With React js"
        image="https://o.aolcdn.com/images/dims?crop=1890%2C897%2C0%2C129&quality=85&format=jpg&resize=1600%2C759&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-05%2F308858a0-6c56-11e9-9eff-72a0ff15b2d1&client=a1acac3e1b3290917d92&signature=75e93549608b1b5f97d297318bddd6a5507450fe"
      />

    </div>
  )
}

export default SearchPage;
