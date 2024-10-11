import { useState } from 'react'
// data
import { 
  newsItem,
  videoMaiDora, 
  newItemTwo,
  listSlideTopNews, 
  listSliderNews,
  listItemBreakNews,
  listItemNewsZone,
} from './data.js';
// component
import Header from './components/Header';
import ContentMain from './components/ContentMain';
import NewsTop from './components/NewsTop';
import SlideNews from './components/SlideNews'
import NewsItemHorizontal from './components/NewsItemHorizontal';
import NewsItemVideo from './components/NewsItemVideo.jsx';
import BreakNews from './components/BreakNews.jsx';

function App() {
  return (
    <>
      <Header />
      <ContentMain>
        <NewsTop/>
        <SlideNews data={listSlideTopNews} />
        <div className="horizontal-line"></div>
        {newsItem.map((item, key) => (
          <NewsItemHorizontal key={key} {...item}/>
        ))}
        <NewsItemVideo {...videoMaiDora} />
        {newItemTwo.map((item, key) => (
          <NewsItemHorizontal key={key} {...item}/>
        ))}
        <SlideNews data={listSliderNews} className="twond" />
      </ContentMain>
      <BreakNews dataBreakNews={listItemBreakNews} dataZoneNews={listItemNewsZone}/>
      <ContentMain isShowContentRight={false}>
        {newsItem.map((item, key) => (
            <NewsItemHorizontal key={key} {...item}/>
        ))}
      </ContentMain>
    </>
  )
}

export default App
