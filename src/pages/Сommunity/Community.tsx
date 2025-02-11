import { useEffect, useState } from "react";
import Footer from "../../Companent/Footer/Footer";
import Header from "../../Companent/Header/Header";
import useFetch from "../../hooks/useFetch";
import "../Сommunity/Community.css";
import { TeleChatList } from "../../Companent/TelegramChat/teleChatList";
import { TelegrammList } from "../../Companent/Telegramm/telegrammList";
import { TeleChannelsList } from "../../Companent/TeleChannels/teleChanelsList";
import { WebsiteList } from "../../Companent/WebsiteList/websiteList";
import { FacebookList } from "../../Companent/Facebook/facebookList";
import { YouTubeList } from "../../Companent/YouTubeList/youtubeList";
import { GithubList } from "../../Companent/GIthubList/githubList";

function Community() {

  const { data, isLoading } = useFetch({
    url: "http://3.38.98.134/community",
  });

  const [telegramChat, setTelegramChat] = useState([]);
  const [telegramm, setTelegramm] = useState([]);
  const [telegramChannels, setTelegramChannels] = useState([]);
  const [website, setWebsite] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [github, setGitHub] = useState([]);
  
  
  
  useEffect(() => {
    
    if(isLoading === false) {
    console.log("data: ", data);
    setTelegramChat(data[0]?.telegram_chats)
    setTelegramm(data[0]?.devkg)
    setTelegramChannels(data[0]?.telegram_channels)
    setWebsite(data[0]?.websites)
    setFacebook(data[0]?.facebook)
    setYoutube(data[0]?.youtube)
    setGitHub(data[0]?.github)
  };
}, [isLoading]);

  console.log('telegram', telegramChat);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div id="community">
        <Header />
        <div id="community">
          <div className="container">
            <div className="community">
              <div data-v-a2ede7f6 className="community-main content">
                <div data-v-a2ede7f6 className="heading">
                  <div data-v-a2ede7f6 className="description">
                    Если хотите добавить что либо или удалить, отправьте Pull
                    Request или создайте Issue в репозитории.
                  </div>
                  <button data-v-a2ede7f6 className="button green">
                    Перейти
                  </button>
                </div>
                <aside data-v-a2ede7f6 className="share-box"></aside>
                  <TelegrammList data = {telegramm}/>
                  <TeleChatList data = {telegramChat}/>
                  <TeleChannelsList data = {telegramChannels} />
                  <WebsiteList data = {website}/>
                  <FacebookList data = {facebook}/>
                  <YouTubeList data = {youtube}/>
                  <GithubList data = {github}/>

                <div data-v-a2ede7f6 className="padding-top"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Community;
