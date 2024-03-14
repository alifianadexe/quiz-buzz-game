import React, { useState, useEffect } from "react";
import ProfilePhoto from "./assets/images/ProfilePhoto.jpg";
import StockCatPhoto from "./assets/images/StockCatPhoto.jpg";
import AdditionalCatPhoto from "./assets/images/AdditionalCatPhoto.jpg";
import CalmSkyPhoto from "./assets/images/CalmSkyPhoto.jpg";
import GreenEyedCat from "./assets/images/GreenEyedCat.jpg";
import FirstResultCatImage from "./assets/images/FirstResultCatImage.jpg";
import SecondResultCatImage from "./assets/images/SecondResultCatImage.jpg";
import ThirdResultCatImage from "./assets/images/ThirdResultCatImage.jpg";
import LogoSpinner from "./LogoSpinner";
import StyledInstallationInstructions from "./styled/StyledInstallationInstructions";
import StyledInstallationSeparator from "./styled/StyledInstallationSeparator";
import StyledNav from "./styled/StyledNav";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import StyledLinksContainer from "./styled/StyledLinksContainer";
import StyledLogoLetter from "./styled/StyledLogoLetter";
import StyledLogoContainer from "./styled/StyledLogoContainer";
import { FaYarn, FaNpm, FaGithub } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import "./App.css";

const Quiz = (props: any) => {
  const [fontsLoaded, changeFontsLoaded] = useState(false);

  const containerStyle = {
    backgroundImage: `url('renamed.jpg')`,
    width: '100%',
    height: '100%',
    backgroundSize: '100% auto',
    backgroundRepeat: 'repeat-y',
  };

  useEffect(() => {
    changeFontsLoaded(false);
  }, [changeFontsLoaded]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      changeFontsLoaded(true);
    });
  }, [changeFontsLoaded]);

  const renderCustomRocketGradient = () => {
    return (
      <>
        <svg width="0" height="0">
          <linearGradient
            id="rocket-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="rgb(0,80,58)" offset="0%" />
            <stop stopColor="rgb(2,207,158)" offset="100%" />
          </linearGradient>
        </svg>
        <IoRocketSharp
          style={{
            fill: "url(#rocket-gradient)",
          }}
          size={28}
        />
      </>
    );
  };


  const observerCallback: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    window.requestAnimationFrame((): void | undefined => {
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }
    });
  };
  const resizeObserver = new ResizeObserver(observerCallback);


  if (fontsLoaded) {
    return (
      <>
        <div style={containerStyle}>
          <StyledNav>
            <a href="/">
              <StyledLogoContainer>
                <StyledLogoLetter>Game</StyledLogoLetter>
                <StyledLogoLetter buzzfeed>Edukasi</StyledLogoLetter>
                <StyledLogoLetter>Anak</StyledLogoLetter>
              </StyledLogoContainer>
            </a>
            <StyledLinksContainer>
              <a
                href="https://github.com/amamenko/react-buzzfeed-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.npmjs.com/package/react-buzzfeed-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaNpm />
              </a>
              <a
                href="https://yarnpkg.com/package/react-buzzfeed-quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYarn />
              </a>
            </StyledLinksContainer>
          </StyledNav>
          <StyledInstallationSeparator first>
            <p><b>Perhatian!</b></p>
          </StyledInstallationSeparator>
          <StyledInstallationInstructions>
            <code>
              <span>Jawab semua pertanyaan yang ada dibawah!</span>
            </code>
          </StyledInstallationInstructions>

          <BuzzFeedQuiz
            title={"Permainan Edukasi : Identifikasi Ide Pokok"}
            description={"Permainan ini digunakan untuk mengevaluasi anak dalam memahami ide pokok"}
            byline={true}
            bylineAuthor={"Zirly Fiera Qonitatsani"}
            bylineAuthorLink={"https://alifianadexe.com"}
            bylineAuthorLinkOpenInNewTab={true}
            bylineAuthorTagline={"Guru SD"}
            bylineAvatarImageSrc={ProfilePhoto}
            autoScroll={true}
            onRestart={() =>
              alert("This alert was triggered by the onRestart prop!")
            }
            onResult={() => Swal.fire({
              title: "You are Done!",
              text: "That thing is still around?",
              icon: "success"
            })}
            onAnswerSelection={(questionIndex, answerIndex, resultID) =>
              console.log({
                questionIndex,
                answerIndex,
                resultID,
              })
            }
            facebookShareButton={true}
            facebookShareLink={"google.com"}
            twitterShareButton={true}
            twitterShareLink={"google.com"}
            copyShareButton={true}
            copyShareLink={"This text was copied using the copyShareLink prop."}
            questions={[
              {
                question: "Burung adalah hewan yang hidup di udara. Mereka memiliki sayap dan bulu yang membantu mereka terbang. Beberapa jenis burung bisa terbang tinggi, sementara yang lain lebih suka tinggal di tanah",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "A. Burung hidup di udara",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                      Swal.fire({
                        title: "The Internet?",
                        text: "That thing is still around?",
                        icon: "question"
                      }),
                    resultID: 0,
                  },
                  {
                    answer: "B. Sayap dan bulu membantu burung terbang.",
                    resultID: 0,
                  },
                  {
                    answer: "C. Beberapa burung bisa terbang tinggi.",
                    resultID: 0,
                  },
                  {
                    answer: "D. Ada berbagai jenis burung.",
                    resultID: 1,
                  },
                ],
              },
              {
                question: "Olahraga sangat penting bagi kesehatan tubuh kita. Dengan berolahraga secara teratur, kita bisa menjaga tubuh tetap sehat dan bugar. Berbagai jenis olahraga seperti berlari, berenang, dan bersepeda dapat kita lakukan.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "A. Olahraga penting untuk kesehatan tubuh.",
                    resultID: 0,
                    onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                      Swal.fire({
                        title: "The Internet?",
                        text: "That thing is still around?",
                        icon: "question"
                      }),
                  },
                  {
                    answer: "B. Berlari, berenang, dan bersepeda adalah olahraga yang baik.",
                    resultID: 0,
                  },
                  {
                    answer: "C. Olahraga membuat tubuh menjadi bugar.",
                    resultID: 0,
                  },
                  {
                    answer: "D. Kita harus berolahraga secara teratur.",
                    resultID: 1,
                  },
                ],
              },
              {
                question: "Tanaman sangat penting bagi kehidupan kita. Mereka menghasilkan oksigen yang kita butuhkan untuk bernafas. Selain itu, tanaman juga memberikan makanan, seperti buah dan sayuran, yang sangat baik untuk tubuh kita.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "A. Tanaman menghasilkan oksigen.",
                    resultID: 0,
                  },
                  {
                    answer: "B. Tanaman memberikan makanan.",
                    resultID: 0,
                  },
                  {
                    answer: "C. Buah dan sayuran penting untuk tubuh.",
                    resultID: 0,
                  },
                  {
                    answer: "D.  Tanaman adalah bagian penting dari kehidupan.",
                    resultID: 1,
                    onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                      Swal.fire({
                        title: "The Internet?",
                        text: "That thing is still around?",
                        icon: "question"
                      }),
                  },
                ],
              },
              {
                question: "Pantai adalah tempat yang indah untuk dikunjungi. Di pantai, kita bisa berenang, bermain pasir, dan menikmati sinar matahari. Beberapa pantai memiliki pasir putih yang halus, sementara yang lain memiliki karang yang menarik untuk dilihat",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "A. Pantai adalah tempat yang indah untuk dikunjungi.",
                    resultID: 0,
                  },
                  {
                    answer: "B. Aktivitas di pantai seperti berenang dan bermain pasir",
                    resultID: 0,
                  },
                  {
                    answer: "C. Pantai memiliki pasir putih dan karang",
                    resultID: 0,
                  },
                  {
                    answer: "D. Pantai adalah tempat yang menyenangkan untuk berlibur",
                    resultID: 1,
                    onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                      Swal.fire({
                        title: "The Internet?",
                        text: "That thing is still around?",
                        icon: "question"
                      }),
                  },
                ],
              },
              {
                question: "Buku adalah jendela dunia. Dengan membaca, kita dapat belajar banyak hal baru. Buku-buku juga bisa membawa kita ke tempat-tempat yang belum pernah kita kunjungi.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                answers: [
                  {
                    answer: "A. Buku membawa kita ke tempat-tempat baru",
                    resultID: 0,
                  },
                  {
                    answer: "B. Membaca membantu kita belajar banyak hal",
                    resultID: 0,
                  },
                  {
                    answer: "C. Buku adalah jendela dunia",
                    resultID: 0,
                  },
                  {
                    answer: "D. Buku-buku membawa keuntungan bagi kita",
                    resultID: 1,
                    onAnswerSelection: (questionIndex, answerIndex, resultID) =>
                      Swal.fire({
                        title: "The Internet?",
                        text: "That thing is still around?",
                        icon: "question"
                      }),
                  },
                ],
              },

            ]}
            results={[
              {
                title: "This is one result title",
                description:
                  "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
                resultImageSrc: FirstResultCatImage,
                imageAttribution: "Photo by Pixabay from Pexels",
                resultID: 0,
              },
              {
                title: "This is another result title",
                description:
                  "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
                resultImageSrc: SecondResultCatImage,
                imageAttribution: "Photo by Tranmautritam from Pexels",
                resultID: 1,
              },
              {
                title: "Here's yet another result title",
                description:
                  "You can customize the link URL that will be shared to Facebook and Twitter. The text copied when the 'Copy Link' (or 🔗) button is pressed can also be customized. Click the 'Retake' button to trigger the onRestart function.",
                resultImageSrc: ThirdResultCatImage,
                imageAttribution: "Photo by Pixabay from Pexels",
                resultID: 2,
              },
            ]}
          />
        </div>
      </>

    );
  } else {
    return <LogoSpinner />;
  }
};

export default Quiz;
