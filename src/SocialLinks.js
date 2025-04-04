import React from "react";
import avatarGif from "./img/avatar.gif";

const SocialLinks = () => {
  // Замените URL-адреса на свои ссылки на социальные сети
  const socialLinks = {
    mysite: "",
    steam: "https://steamcommunity.com/id/sypexoff/",
    instagram: "https://www.instagram.com/chukuruck/",
    github: "https://github.com/Sypexx",
    telegram: "https://t.me/Sypexovanniy",
    vk: "https://vk.com/sypexofficial",
  };

  return (
    <div style={styles.container}>
      <div style={styles.avatarContainer}>
        <img src={avatarGif} alt="Avatar" style={styles.avatar} />
        <h1>Sypex</h1>
        <a>Дарова заебал</a>
      </div>
      <div style={styles.socialContainer}>
        <a href={socialLinks.mysite} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" alt="Mysite" style={styles.socialIcon} />
        </a>
        <a href={socialLinks.steam} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" style={styles.socialIcon} />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" style={styles.socialIcon} />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github" style={styles.socialIcon} />
        </a>
        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Telegram_2019_simple_logo.svg" alt="Telegram" style={styles.socialIcon} />
        </a>
        <a href={socialLinks.vk} target="_blank" rel="noopener noreferrer" style={styles.socialButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Vk-messenger.svg" alt="Vk" style={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  avatarContainer: {
    marginBottom: "20px",
  },
  avatar: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  socialContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  socialButton: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s",
  },
  socialIcon: {
    width: "100%",
    height: "100%",
  },
};

export default SocialLinks;
