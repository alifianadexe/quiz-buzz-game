import React, { useState, useEffect } from "react";
import ProfilePhoto from "./assets/images/ProfilePhoto.jpg";
import StockCatPhoto from "./assets/images/StockCatPhoto.jpg";
import AdditionalCatPhoto from "./assets/images/AdditionalCatPhoto.jpg";
import BoardBackground from "./assets/images/board1.jpg";
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
import useSound from 'use-sound';


const Quiz = (props: any) => {
  const [fontsLoaded, changeFontsLoaded] = useState(false);

  const [correctSound] = useSound('correct.mp3');
  const [failSound] = useSound('fail.mp3');

  const [score, changeScore] = useState(0);

  const containerStyle = {
    backgroundImage: `url('background2.gif')`,
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
              <p className="score">Score : {score}</p>
            </StyledLinksContainer>
          </StyledNav>
          <StyledInstallationSeparator first>
            <p><b>Perhatian!</b></p>
          </StyledInstallationSeparator>
          <StyledInstallationInstructions>
            <code>
              <span>Kamu Hanya Memiliki Satu Kesempatan Menjawab</span>
            </code>
          </StyledInstallationInstructions>

          <BuzzFeedQuiz
            title={"Quiz Game Edukasi"}
            description={"Temukan Kalimat Utama Ataupun Ide Pokoknya!"}
            byline={true}
            bylineAuthor={"Zirly Fiera Qonitatsani"}
            bylineAuthorLink={"https://alifianadexe.com"}
            bylineAuthorLinkOpenInNewTab={true}
            bylineAuthorTagline={"Guru SD"}
            bylineAvatarImageSrc={ProfilePhoto}
            autoScroll={true}
            onRestart={() =>
              Swal.fire({
                title: "Ayo Kita Ulang!!",
                text: "Kamu mengulang quiz ini",
                icon: "question"
              })
            }
            onResult={() => Swal.fire({
              title: "Selamat!!",
              text: "Kamu sudah selesai menyelesaikan game quiz ini",
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
                question: "1) Bencana banjir lumpur akibat jebolnya tanggul Situ Gintung di Tangerang Selatan menimbulkan berbagai macam penyakit. 2) Beberapa penyakit yang akan timbul sesudah bencana adalah diare, tifus, leptospirosis dan demam berdarah. 3) Masalah kesehatan pada korban dan masyarakat di sekitar lokasi lokasi bencana harus segera diantisipasi. 4) Beberapa penyakit itu muncul karena lingkungan kotor dan sumber air bersih yang tercemar lumpur.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#ffffff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Bahan bakar minyak memiliki berbagai kegunaan. Sepeda motor menggunakan bahan bakar pertalite. 2) Kendaraan bermesin diesel menggunakan bahan bakar solar. 3) Pesawat terbang menggunakan avtur sebagai bahan bakar. 4) Ibu rumah tangga menggunakan minyak tanah sebagai bahan bakar kompor minyak.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://katadata.co.id/lifestyle/varia/6572bdee7834c/10-contoh-soal-ide-pokok-paragraf-beserta-kunci-jawaban/",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Cara mendaur ulang koran bekas cukup mudah, yaitu dengan merendam kertas koran yang sudah disobek ke dalam ember berisi air selama sehari semalam. 2) Kemudian, koran tersebut diblender dan diaduk dengan lem. 3) Hasil daur ulang koran tersebut dapat dibentuk menjadi berbagai kreasi.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://katadata.co.id/lifestyle/varia/6572bdee7834c/10-contoh-soal-ide-pokok-paragraf-beserta-kunci-jawaban/",
                answers: [
                  {
                    answer: "A. Manfaat daur ulang koran bekas ",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "B. Manfaat daur ulang kain perca .",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Cara daur ulang barang bekas.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      })
                    },
                    resultID: 1,
                  },
                  {
                    answer: "D. Mengumpulkan kain perca.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Korban virus Covid 19 di Indonesia terus bertambah seiring dengan meningkatnya mobilitas masyarakat saat hari raya Idul Fitri dan Idul Adha. 2) Pemerintah terus berupaya menekan laju mobilitas masyarakat dengan melakukan banyak pembatasan dan penyekatan.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://katadata.co.id/lifestyle/varia/6572bdee7834c/10-contoh-soal-ide-pokok-paragraf-beserta-kunci-jawaban/",
                answers: [
                  {
                    answer: "A. Meningkatnya virus Covid 19 saat hari raya Idul Fitri dan Idul Adha ",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "B. Pencegahan penyebaran virus Covid 19 saat hari raya Idul Fitri dan Idul Adha.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Bertambahnya korban virus Covid 19 di Indonesia akibat peningkatan mobilitas penduduk.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      })
                    },
                    resultID: 1,
                  },
                  {
                    answer: "D. Usaha pemerintah untuk mencegah penyebaran virus Covid 19 dengan membuat berbagai pembatasan.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Adanya mata pelajaran Teknologi Informasi dan Komunikasi (TIK) di sekolah sangat membantu masyarakat melek teknologi. 2) Terbukti anak-anak usia sekolah dasar sudah banyak yang mampu mengoperasikan komputer. 3) Sayangnya, mata pelajaran ini dianggap tidak penting oleh sebagian besar orang tua murid. 4) Akibatnya, anak-anak tidak memahami penjelasan guru di sekolah dan selalu mendapat nilai rendah.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",

                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Kucing termasuk salah satu hewan karnivora yang bisa dipelihara. 2) Demikian juga dengan beberapa jenis anjing. 3) Meski keduanya memakan daging dan memiliki taring serta kuku yang tajam, karakter dua hewan ini bisa dijinakkan. 4) Ini membuktikan bahwa tidak semua hewan karnivora itu buas dan berbahaya bagi kehidupan manusia.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Kecelakaan yang melibatkan bus dan truk di Jalan Negara-Gilimanuk menimbulkan kemacetan panjang sejauh 1 kilometer. 2) Kecelakaan ini terjadi karena sopir truk sedang mabuk akibat mengonsumsi minuman keras sebelum berkendara. 3) Ketika berada di Jalan Negara-Gilimanuk kilometer 20, bus melaju dari arah yang berlawanan. 4) Sementara truk justru berpindah haluan di jalur kanan dan seketika kecelakaan hebat terjadi. 5) Posisi bus mengguling ke tengah jalan sehingga tidak bisa dilewati kendaraan yang melintas.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [
                  {
                    answer: "A. Kecelakaan bus dan truk terjadi akibat sopir truk sedang mabuk.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "B. Kecelakaan  di Jalan Negara-Gilimanuk menyebabkan kemacetan panjang",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      })
                    },
                    resultID: 1,
                  },
                  {
                    answer: "C. Kecelakaan di Jalan Negara-Gilimanuk terjadi di kilometer 20.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D.Truk berpindah haluan ke kanan pada saat ada bus yang melaju dari arah yang berlawanan",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Lidah buaya adalah salah satu tanaman hias yang bisa dipelihara pada ruangan tertutup. 2) Ada juga tanaman Monstera dan Anthurium yang tetap indah meski dibudidayakan dalam ruangan. 3) Meski mendapatkan sedikit cahaya matahari, tanaman-tanaman hias ini tetap bisa tumbuh subur tanpa mengurangi keindahan tampilannya. 4) Ini menjadi bukti bahwa tidak semua tanaman hias yang indah dan kaya manfaat sulit dibudidayakan di dalam ruangan.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                ],
              },
              {
                question: "1) Mendengarkan musik termasuk salah satu kegiatan yang bisa mengalirkan energi positif bagi yang melakukannya. 2) Orang yang malas atau sedih seketika bersemangat ketika mendengar musik. 3) Bahkan beberapa studi ilmiah sudah membuktikan adanya dampak positif dari musik sehingga sebagian menjadikan musik sebagai media terapi. 4) Meski begitu, jenis musik sebenarnya juga mempengaruhi dampak yang diberikan. 5) Kalau musiknya mengandung ajakan negatif bisa saja dampak yang ditimbulkan juga negatif.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Selat Bali menjadi salah satu area lautan yang dianggap keramat oleh masyarakat Indonesia. 2) Pasalnya, sudah banyak kapal laut dan kapal selam yang tenggelam tepat di selat ini. 3) Anehnya, sebagian besar kecelakaan yang terjadi di selat ini selalu memakan korban yang meninggal dan hilang. 4) Bahkan tenggelamnya kapal selam Nanggala yang menyisakan duka juga terjadi di titik selat Bali yang sama.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://mamikos.com/info/contoh-soal-ide-pokok-paragraf-pljr/",
                answers: [

                  {
                    answer: "A. Banyak kapal laut yang tenggelam di selat Bali.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "B. Kapal selam Nanggala tenggelam di selat Bali dan menyisakan duka.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Selat Bali adalah lautan yang dianggap keramat oleh masyarakat Indonesia",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      })
                    },
                    resultID: 1,
                  },
                  {
                    answer: "D.  Kecelakaan yang terjadi di selat Bali sebagian besar memakan korban meninggal.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Pasokan listrik pada musim penghujan sering terganggu. 2) Hujan lebat dan angin ribut dapat menyebabkan pohon-pohon di beberapa ruas jalan tumbang dan menimpa kabel listrik. 3) Untuk mempercepat perbaikan jaringan listrik. 4) PLN melakukan pemadaman listrik sementara.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://katadata.co.id/lifestyle/varia/6572bdee7834c/10-contoh-soal-ide-pokok-paragraf-beserta-kunci-jawaban",
                answers: [
                  {
                    answer: "A. Pengaruh hujan terhadap pasokan listrik",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      })
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Pemadaman listrik sementara oleh PLN.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Rusaknya alat listrik karena hujan dan angin.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Gangguan pasokan listrik pada musim penghujan.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                ],
              },
              {
                question: "1) Penyemenan dan pengaspalan jalan dapat menghambat peresapan air hujan. 2) Pembangunan perumahan di lahan produktif juga dapat menimbulkan masalah serupa. 3) Air tanah akan semakin berkurang dengan adanya penebangan hutan secara liar. 4) Semua itu merupakan perilaku manusia yang memengaruhi siklus air.",
                answerArrangement: "row",
                backgroundColor:
                  "linear-gradient(180deg, rgba(153,52,170,1) 0%, rgba(193,51,131,1) 100%)",
                fontColor: "#fff",
                backgroundImageSrc: BoardBackground,
                imageAttribution: "Sumber : https://katadata.co.id/lifestyle/varia/6572bdee7834c/10-contoh-soal-ide-pokok-paragraf-beserta-kunci-jawaban",
                answers: [
                  {
                    answer: "A. Kalimat Pertama",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 1,
                  },
                  {
                    answer: "B. Kalimat Kedua.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "C. Kalimat Ketiga.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      Swal.fire({
                        title: "Salah!",
                        text: "Maaf, Jawaban Kamu Salah",
                        icon: "error"
                      })
                      failSound()
                    },
                    resultID: 0,
                  },
                  {
                    answer: "D. Kalimat Keempat.",
                    onAnswerSelection: (questionIndex, answerIndex, resultID) => {
                      changeScore(score + 10)
                      correctSound()
                      Swal.fire({
                        title: "Benar!",
                        text: "Kamu Menjawab Dengan Benar! Score +10",
                        icon: "success"
                      }
                      )
                    },
                    resultID: 1,
                  },
                ],
              }

            ]}
            results={[
              {
                title: "Kamu Mendapatkan Kucing Usaha!",
                description:
                  "Kamu telah menyelesaikan semua rangkaian game edukasi tentang 'Ide Pokok Paragraf'. Kamu dapat mengulang atau memberikan hasil terbaik kedepannya, Semoga kamu selalu sukses ya!",
                resultImageSrc: FirstResultCatImage,
                imageAttribution: "Photo by Pixabay from Pexels",
                resultID: 0,
              },
              {
                title: "Kamu Mendapatkan Kucing Kebenaran!",
                description:
                  "Kamu telah menyelesaikan semua rangkaian game edukasi tentang 'Ide Pokok Paragraf'. Kamu dapat mengulang atau memberikan hasil terbaik kedepannya, Semoga kamu selalu sukses ya!",
                resultImageSrc: SecondResultCatImage,
                imageAttribution: "Photo by Pixabay from Pexels",
                resultID: 1,
              }
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
