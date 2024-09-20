// import {
//   CardContent,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Card,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Stack,
//   IconButton,
// } from "@mui/material";
// import Chip from "@mui/material/Chip";
// import DeleteIcon from "@mui/icons-material/Delete";

// import { useState } from "react";
// import { toast } from "react-toastify";
// import { QUESTIONS } from "../../assets/QUESTIONS/QUESTIONS";
// import { getColor } from "./../../assets/ChangeColor/changeColor";
// import SendIcon from "@mui/icons-material/Send";
// import "./index.css";

// function Home() {
//   const [easy, setEasy] = useState(0);
//   const [medium, setMedium] = useState(0);
//   const [hard, setHard] = useState(0);
//   const [validate, setValidate] = useState(false);
//   const [question, setCardQuestion] = useState([]);
//   const [isVisible, setVisible] = useState(true);

//   const getTotalQuest = () => {
//     //checking validate or not input
//     let ezQuest = parseInt(easy);
//     let medQuest = parseInt(medium);
//     let HardQuest = parseInt(hard);
//     if (ezQuest <= 0 || medQuest <= 0 || HardQuest <= 0) {
//       toast.error("Invalid number of questions");
//       setValidate(true);
//     } else {
//       const totalQuest = ezQuest + medQuest + HardQuest;
//       if (totalQuest > 50) {
//         setValidate(true);
//         return;
//       } else {
//         setValidate(false);
//         handleQuestion();
//         setVisible(true);
//       }
//     }
//   };

//   const handleQuestion = () => {
//     //get array of question base on type
//     let easyList = filterQuest("easy");
//     let mediumList = filterQuest("medium");
//     let hardList = filterQuest("hard");

//     //re-arrange question
//     let eList = getRandomQuest(easyList, easy);
//     let mList = getRandomQuest(mediumList, medium);
//     let hList = getRandomQuest(hardList, hard);

//     let totalQuest = [...eList, ...mList, ...hList];

//     let total = parseInt(easy) + parseInt(medium) + parseInt(hard);
//     let mixedQuest = getRandomQuest(totalQuest, total);

//     setCardQuestion(mixedQuest);
//   };
//   const filterQuest = (type) => {
//     const QuestionList = QUESTIONS.filter((question) => {
//       if (question.difficulty === type) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     return QuestionList;
//   };
//   const getRandomQuest = (list, size) => {
//     let length = parseInt(size);
//     const originalList = [...list];

//     let randomList = [];
//     for (let i = 0; i < length; i++) {
//       let randIndex = Math.floor(Math.random() * originalList.length);
//       const randQuest = originalList[randIndex];
//       randomList.push(randQuest);
//       originalList.splice(randIndex, 1);
//     }
//     return randomList;
//   };

//   const deletedAllChoice = () => {
//     setVisible(false);
//     setEasy(0);
//     setMedium(0);
//     setHard(0);
//     toast.error("DELETED ALL QUESTION");
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#eee",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <Card
//           sx={{
//             position: "absolute",
//             width: "540px",
//             height: "240px",
//             padding: "20px",
//             gap: "20px",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "center",
//             alignItems: "center",
//             top: "20px",
//             borderRadius: "20px",
//           }}
//         >
//           <CardContent
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <Typography
//               variant="h4"
//               textAlign={"center"}
//               marginBottom={2}
//               fontWeight={600}
//               fontFamily={"Poppins"}
//             >
//               Multiple choice
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 gap: "20px",
//               }}
//             >
//               <TextField
//                 error={validate}
//                 id="outlined-basic"
//                 label="Easy"
//                 variant="outlined"
//                 value={easy}
//                 size="normal"
//                 type="number"
//                 onChange={(e) => setEasy(e.target.value)}
//               />
//               <TextField
//                 error={validate}
//                 id="outlined-basic"
//                 label="Medium"
//                 variant="outlined"
//                 value={medium}
//                 size="normal"
//                 type="number"
//                 onChange={(e) => setMedium(e.target.value)}
//               />
//               <TextField
//                 error={validate}
//                 id="outlined-basic"
//                 label="Hard"
//                 variant="outlined"
//                 value={hard}
//                 size="normal"
//                 type="number"
//                 onChange={(e) => setHard(e.target.value)}
//               />
//             </Box>

//             <Button
//               variant="contained"
//               fullWidth
//               sx={{
//                 marginTop: "30px",
//                 width: "100px",
//               }}
//               onClick={() => getTotalQuest()}
//             >
//               GENERATE
//             </Button>
//           </CardContent>
//         </Card>
//       </Box>
//       {question.map((question, index) =>
//         isVisible === true ? (
//           <>
//             <Box
//               sx={{
//                 width: "100%",
//                 position: "relative",
//                 top: "300px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Card
//                 key={index}
//                 sx={{
//                   margin: 2,
//                   boxShadow: "0px 2px #DAD9D8",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   boxSizing: "border-box",
//                   width: "80%",
//                   height: "240px",
//                   padding: 0,
//                 }}
//                 className="CardQuestion"
//               >
//                 <Chip
//                   sx={{
//                     width: 8,
//                     height: "100%",
//                   }}
//                   color={getColor(question.difficulty)}
//                 ></Chip>
//                 <CardContent
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     width: "100%",
//                     height: "100%",
//                     fontFamily: "Poppins",
//                     boxSizing: "border-box",
//                   }}
//                 >
//                   <Typography
//                     gutterBottom
//                     variant="h7"
//                     component="div"
//                     marginBottom={0}
//                   >
//                     {index + 1}. {question.question.text}
//                   </Typography>

//                   <FormControl sx={{ marginLeft: "20px" }}>
//                     <RadioGroup
//                       column
//                       aria-labelledby="demo-column-radio-buttons-group-label"
//                       name="column-radio-buttons-group"
//                       sx={{ padding: "0" }}
//                     >
//                       <FormControlLabel
//                         value={question.correctAnswer}
//                         control={<Radio />}
//                         label={question.correctAnswer}
//                       />
//                       <FormControlLabel
//                         value={question.incorrectAnswers[0]}
//                         control={<Radio />}
//                         label={question.incorrectAnswers[0]}
//                       />
//                       <FormControlLabel
//                         value={question.incorrectAnswers[1]}
//                         control={<Radio />}
//                         label={question.incorrectAnswers[1]}
//                       />
//                       <FormControlLabel
//                         value={question.incorrectAnswers[2]}
//                         control={<Radio />}
//                         label={question.incorrectAnswers[2]}
//                       />
//                     </RadioGroup>
//                   </FormControl>
//                   <Button>dont know?</Button>
//                 </CardContent>
//               </Card>
//             </Box>
//             {/* kiểm tra xem đã đến cuối mảng chưa */}
//             {index === question.length && (
//               <Stack
//                 spacing={6}
//                 direction="row"
//                 position={"absolute"}
//                 bottom={0}
//                 left={0}
//                 right={0}
//                 paddingBottom={"30px"}
//                 width={"400px"}
//                 boxSizing={"border-box"}
//                 justifyContent="center"
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "550",
//                     fontFamily: "revert-layer",
//                     flex: 1,
//                     justifyContent: "space-evenly",
//                     boxSizing: "border-box",
//                   }}
//                   onClick={() => deletedAllChoice()}
//                 >
//                   deleted all
//                   <IconButton aria-label="delete" size="normal">
//                     <DeleteIcon fontSize="inherit" sx={{ color: "white" }} />
//                   </IconButton>
//                 </Button>

//                 <Button
//                   variant="contained"
//                   color="success"
//                   sx={{
//                     fontSize: "14px",
//                     fontWeight: "550",
//                     fontFamily: "revert-layer",
//                     flex: 1,
//                     justifyContent: "space-evenly",
//                     boxSizing: "border-box",
//                   }}
//                 >
//                   submit
//                   <IconButton aria-label="send" size="normal">
//                     <SendIcon
//                       fontSize="inherit"
//                       sx={{ color: "white ", gap: "5px" }}
//                     />
//                   </IconButton>
//                 </Button>
//               </Stack>
//             )}
//           </>
//         ) : (
//           <></>
//         )
//       )}
//     </>
//   );
// }

// export default Home;
