// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Chip,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   IconButton,
//   Radio,
//   RadioGroup,
//   Stack,
//   Typography,
// } from "@mui/material";
// import { DeleteIcon } from "@mui/icons-material/Delete";
// import { getColor } from "../../assets/ChangeColor/changeColor";
// import SendIcon from "@mui/icons-material/Send";

// export const QuestionList = (question, isVisible, handleDeleteAll) => {
//   return (
//     <>
//       <Box
//         sx={{
//           width: "100vw",
//           height: "100%",
//           backgroundColor: "#eee",
//           padding: 0,
//           gap: "30px",
//           marginTop: "0px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {question.map((Quest, index) =>
//           isVisible === true ? (
//             <>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   width: "100%",
//                   position: "relative",
//                   top: "20px",
//                   left: "0%",
//                   margin: "0 auto",
//                   alignItems: "center",
//                 }}
//               >
//                 {/* {console.log(cardQuestion, index)} */}

//                 <Card
//                   key={index}
//                   sx={{
//                     margin: 1,
//                     boxShadow: "0px 2px #DAD9D8",
//                     display: "flex",
//                     flexDirection: "row",
//                     boxSizing: "border-box",
//                     width: "70%",
//                     height: "30%",
//                   }}
//                 >
//                   <Chip
//                     sx={{
//                       width: 8,
//                       height: "auto",
//                     }}
//                     color={getColor(Quest.difficulty)}
//                   ></Chip>
//                   <CardContent
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                     }}
//                   >
//                     <Box>
//                       <Typography
//                         gutterBottom
//                         variant="h6"
//                         component="div"
//                         marginBottom={0}
//                       >
//                         {index + 1}. {Quest.question.text}
//                       </Typography>
//                       <FormControl
//                         sx={{
//                           paddingTop: "30px",
//                         }}
//                       >
//                         <FormLabel id="demo-column-radio-buttons-group-label">
//                           Your answer
//                         </FormLabel>
//                         <RadioGroup
//                           column
//                           aria-labelledby="demo-column-radio-buttons-group-label"
//                           name="column-radio-buttons-group"
//                         >
//                           <FormControlLabel
//                             value={Quest.correctAnswer}
//                             control={<Radio />}
//                             label={Quest.correctAnswer}
//                           />
//                           <FormControlLabel
//                             value={Quest.incorrectAnswers[0]}
//                             control={<Radio />}
//                             label={Quest.incorrectAnswers[0]}
//                           />
//                           <FormControlLabel
//                             value={Quest.incorrectAnswers[1]}
//                             control={<Radio />}
//                             label={Quest.incorrectAnswers[1]}
//                           />
//                           <FormControlLabel
//                             value={Quest.incorrectAnswers[2]}
//                             control={<Radio />}
//                             label={Quest.incorrectAnswers[2]}
//                           />
//                         </RadioGroup>
//                       </FormControl>
//                     </Box>
//                   </CardContent>
//                 </Card>

//                 {/* kiểm tra xem đã đến cuối mảng chưa */}
//                 {index === cardQuestion.length - 1 && (
//                   <Stack
//                     spacing={6}
//                     direction="row"
//                     position={"relative"}
//                     marginTop={"50px"}
//                     paddingBottom={"30px"}
//                     width={"400px"}
//                     boxSizing={"border-box"}
//                   >
//                     <Button
//                       variant="contained"
//                       sx={{
//                         fontSize: "14px",
//                         fontWeight: "550",
//                         fontFamily: "revert-layer",
//                         flex: 1,
//                         justifyContent: "space-evenly",
//                         boxSizing: "border-box",
//                       }}
//                       onClick={() => handleDeleteAll()}
//                     >
//                       deleted all
//                       <IconButton aria-label="delete" size="normal">
//                         <DeleteIcon
//                           fontSize="inherit"
//                           sx={{ color: "white" }}
//                         />
//                       </IconButton>
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       sx={{
//                         fontSize: "14px",
//                         fontWeight: "550",
//                         fontFamily: "revert-layer",
//                         flex: 1,
//                         justifyContent: "space-evenly",
//                         boxSizing: "border-box",
//                       }}
//                     >
//                       submit
//                       <IconButton aria-label="submit" size="normal">
//                         <SendIcon
//                           fontSize="inherit"
//                           sx={{ color: "#CECECC" }}
//                         />
//                       </IconButton>
//                     </Button>
//                   </Stack>
//                 )}
//               </Box>
//             </>
//           ) : (
//             <></>
//           )
//         )}
//       </Box>
//     </>
//   );
// };
