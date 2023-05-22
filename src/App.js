import styled from "styled-components";
import mark from "./assets/images/avatar-mark-webber.webp";
import angela from "./assets/images/avatar-angela-gray.webp";
import jacob from "./assets/images/avatar-jacob-thompson.webp";
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberly from "./assets/images/avatar-kimberly-smith.webp";
import nathan from "./assets/images/avatar-nathan-peterson.webp";
import anna from "./assets/images/avatar-anna-kim.webp";
import chess from "./assets/images/image-chess.webp";
import { useState } from "react";
function App() {
  const [unread, setUnread] = useState(true);
  return (
    <Wrapper>
      <div className="heading">
        <div className="notify">
          <h3>Notifications</h3>
          <span className="num">{unread ? 3 : 0}</span>
        </div>
        <button onClick={() => setUnread(false)}>Mark all as read</button>
      </div>
      <article className={unread ? "comment active" : "comment"}>
        <div className="img-container">
          <img className="img" src={mark} alt="mark" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Mark Webber </p>
            <p className="action">reacted to your recent post </p>
            <p className="post">My first tournament today!</p>
            {unread && <p className="dot"></p>}
          </div>
          <p className="time">1m ago</p>
        </div>
      </article>
      <article className={unread ? "comment active" : "comment"}>
        <div className="img-container">
          <img className="img" src={angela} alt="angela" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Angela Gray &nbsp;</p>
            <p className="action">followed you &nbsp;</p>
            {unread && <p className="dot"></p>}
          </div>
          <p className="time">5m ago</p>
        </div>
      </article>
      <article className={unread ? "comment active" : "comment"}>
        <div className="img-container">
          <img className="img" src={jacob} alt="jacob" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Jacob Thompson &nbsp;</p>
            <p className="action">has joined your group &nbsp;</p>
            <p className="group">Chess Club</p>
            {unread && <p className="dot"></p>}
          </div>
          <p className="time">1 day ago</p>
        </div>
      </article>
      <article className="comment rizky">
        <div className="img-container">
          <img className="img" src={rizky} alt="rizky" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Rizky Hasanuddin &nbsp;</p>
            <p className="action">sent you a private message &nbsp;</p>
          </div>
          <p className="time">5 days ago</p>
          <div className="textarea">
            Hello,thanks for setting up the Chess Club,I've been a member for a
            few weeks new and I'm already having lots of fun and improving my
            game
          </div>
        </div>
      </article>
      <article className="comment kimberly">
        <div className="img-container">
          <img className="img" src={kimberly} alt="kimberly" />
          <div className="content">
            <div className="name-line">
              <p className="name">Kimberly Smith &nbsp;</p>
              <p className="action">commented on your picture &nbsp;</p>
            </div>
            <p className="time">1 week ago</p>
          </div>
        </div>
        <img src={chess} alt="chess" />
      </article>
      <article className="comment">
        <div className="img-container">
          <img className="img" src={nathan} alt="nathan" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Nathan Peterson &nbsp;</p>
            <p className="action">reacted to your recent post &nbsp;</p>
            <p className="post">
              5 end-game strategies to increase your win rate &nbsp;
            </p>
          </div>
          <p className="time">2 weeks ago</p>
        </div>
      </article>
      <article className="comment">
        <div className="img-container">
          <img className="img" src={anna} alt="anna" />
        </div>
        <div className="content">
          <div className="name-line">
            <p className="name">Anna Kim &nbsp;</p>
            <p className="action">left the group &nbsp;</p>
            <p className="group">Chess Club</p>
          </div>
          <p className="time">2 weeks ago</p>
        </div>
      </article>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  width: 90vw;
  max-width: 768px;
  background-color: #fff;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  .heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .notify {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .num {
      padding: 0.2rem 0.6rem;
      background: #1864ab;
      border-radius: 0.25rem;
      color: white;
      font-size: 12px;
    }
    button {
      border: none;
      background: transparent;
      color: rgb(150, 150, 150);
      font-weight: 800;
    }
    button:hover {
      color: #1971c2;
      cursor: pointer;
    }
  }
  .img {
    height: 4rem;
  }
  .comment {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
  .name-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .name {
    color: hsl(224, 21%, 14%);
    font-weight: 800;
  }
  .name:hover {
    color: #1971c2;
    cursor: pointer;
  }
  .action {
    color: hsl(219, 12%, 42%);
  }
  .post {
    color: hsl(219, 12%, 42%);
    font-weight: 800;
  }
  .post:hover {
    color: #1971c2;
    cursor: pointer;
  }
  .time {
    color: hsl(219, 14%, 63%);
  }
  .group {
    color: hsl(219, 14%, 63%);
    font-weight: 800;
  }
  .group:hover {
    color: #1971c2;
    cursor: pointer;
  }
  .textarea {
    padding: 1rem;
    border: solid 1px hsl(219, 14%, 63%);
    border-radius: 0.25rem;
    color: hsl(219, 12%, 42%);
  }
  .textarea:hover {
    background: #1971c2;
    cursor: pointer;
    color: #fff;
  }
  .rizky {
    align-items: start;
  }
  .kimberly {
    justify-content: space-between;
    .img-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    img {
      height: 4rem;
    }
    img:hover {
      cursor: pointer;
    }
  }
  .active {
    background: #e9e7f5;
  }
  .dot {
    height: 0.5rem;
    width: 0.5rem;
    background: hsl(1, 90%, 64%);
    border-radius: 50%;
  }
`;
export default App;
