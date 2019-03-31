
// @fields = (
//             "    Left: I_Pos;",
//             "    Right: I_Pos;",
//             "    Unsigned: boolean;",
//             "    X: IArithmExpr;"
//           );


// $name1 = "Left";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Right";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Unsigned";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "IArithmCmd";
// %fdef = (
//           "Left" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Right" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Unsigned" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  }
//         );
// @fdef = (
//           "Left",
//           "Right",
//           "Unsigned",
//           "X"
//         );

function prepArithmCmd(arithmcmd: IArithmCmd | null): string[] {
  logg("prepArithmCmd");
  if (!arithmcmd) {
    return [comm({ empty_arithmcmd: arithmcmd }, '{"empty_arithmcmd":null}')];
  }
  const { Left, Right, Unsigned, X, ...rest_arithmcmd } = arithmcmd;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmCmd(rLeft, rRight, rUnsigned, rX), comm({ rest_arithmcmd }, '{"rest_arithmcmd":{}}')];
}

// @fields = (
//             "    Left: I_Pos;",
//             "    Right: I_Pos;",
//             "    Bracket: boolean;",
//             "    Unsigned: boolean;",
//             "    X: IArithmExpr;"
//           );


// $name1 = "Left";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Right";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Bracket";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Unsigned";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "IArithmExp";
// %fdef = (
//           "Bracket" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 0,
//                          "t" => "boolean"
//                        },
//           "Left" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Right" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Unsigned" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  }
//         );
// @fdef = (
//           "Left",
//           "Right",
//           "Bracket",
//           "Unsigned",
//           "X"
//         );

function prepArithmExp(arithmexp: IArithmExp | null): string[] {
  logg("prepArithmExp");
  if (!arithmexp) {
    return [comm({ empty_arithmexp: arithmexp }, '{"empty_arithmexp":null}')];
  }
  const { Left, Right, Bracket, Unsigned, X, ...rest_arithmexp } = arithmexp;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rBracket = prepboolean(Bracket);
  const rUnsigned = prepboolean(Unsigned);
  const rX = prepArithmExpr(X);
  return [...doArithmExp(rLeft, rRight, rBracket, rUnsigned, rX), comm({ rest_arithmexp }, '{"rest_arithmexp":{}}')];
}

// $what = "type";
// $name = "IArithmExpr";
// $body = "= IBinaryArithm | IUnaryArithm | IParenArithm | IWord;";


// @alts = (
//           "IBinaryArithm",
//           "IUnaryArithm",
//           "IParenArithm",
//           "IWord"
//         );

function prepArithmExpr(arithmexpr: IArithmExpr | null): string[] {
  logg("prepArithmExpr");
  if (!arithmexpr) {
    return [comm({ empty_arithmexpr: arithmexpr }, '{"empty_arithmexpr":null}')];
  }
  switch (syntax.NodeType(arithmexpr)) {
    case "BinaryArithm":
      return prepBinaryArithm(arithmexpr as IBinaryArithm);
    case "UnaryArithm":
      return prepUnaryArithm(arithmexpr as IUnaryArithm);
    case "ParenArithm":
      return prepParenArithm(arithmexpr as IParenArithm);
    case "Word":
      return prepWord(arithmexpr as IWord);
    default:
      return [comm({ unknown_arithmexpr: arithmexpr })];
  }
}

// @fields = (
//             "    Index: IArithmExpr;",
//             "    Value: IWord | null;",
//             "    Comments: IComment[];"
//           );


// $name1 = "Index";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Value";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name1 = "Comments";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IArrayElem";
// %fdef = (
//           "Comments" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "Index" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IArithmExpr"
//                      },
//           "Value" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IWord"
//                      }
//         );
// @fdef = (
//           "Index",
//           "Value",
//           "Comments"
//         );

function prepArrayElem(arrayelem: IArrayElem | null): string[] {
  logg("prepArrayElem");
  if (!arrayelem) {
    return [comm({ empty_arrayelem: arrayelem }, '{"empty_arrayelem":null}')];
  }
  const { Index, Value, Comments, ...rest_arrayelem } = arrayelem;
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rComments = prepComments(Comments);
  return [...doArrayElem(rIndex, rValue, rComments), comm({ rest_arrayelem }, '{"rest_arrayelem":{}}')];
}

// @fields = (
//             "    Lparen: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    Elems: IArrayElem[] | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Lparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Elems";
// $def = "IArrayElem";
// $func = "";
// $kind = "[] | null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IArrayExpr";
// %fdef = (
//           "Elems" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IArrayElem"
//                      },
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Lparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       }
//         );
// @fdef = (
//           "Lparen",
//           "Rparen",
//           "Elems",
//           "Last"
//         );

function prepArrayExpr(arrayexpr: IArrayExpr | null): string[] {
  logg("prepArrayExpr");
  if (!arrayexpr) {
    return [comm({ empty_arrayexpr: arrayexpr }, '{"empty_arrayexpr":null}')];
  }
  const { Lparen, Rparen, Elems, Last, ...rest_arrayexpr } = arrayexpr;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rElems = prepArrayElems(Elems);
  const rLast = prepComments(Last);
  return [...doArrayExpr(rLparen, rRparen, rElems, rLast), comm({ rest_arrayexpr }, '{"rest_arrayexpr":{}}')];
}

// @fields = (
//             "    Append: boolean;",
//             "    Naked: boolean;",
//             "    Name: ILit | null;",
//             "    Index: IArithmExpr;",
//             "    Value: IWord | null;",
//             "    Array: IArrayExpr | null;"
//           );


// $name1 = "Append";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Naked";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Name";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "Index";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Value";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name1 = "Array";
// $def = "IArrayExpr";
// $func = "";
// $kind = "| null";


// $name = "IAssign";
// %fdef = (
//           "Append" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "boolean"
//                       },
//           "Array" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IArrayExpr"
//                      },
//           "Index" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IArithmExpr"
//                      },
//           "Naked" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "boolean"
//                      },
//           "Name" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "ILit"
//                     },
//           "Value" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IWord"
//                      }
//         );
// @fdef = (
//           "Append",
//           "Naked",
//           "Name",
//           "Index",
//           "Value",
//           "Array"
//         );

function prepAssign(assign: IAssign | null): string[] {
  logg("prepAssign");
  if (!assign) {
    return [comm({ empty_assign: assign }, '{"empty_assign":null}')];
  }
  const { Append, Naked, Name, Index, Value, Array, ...rest_assign } = assign;
  const rAppend = prepboolean(Append);
  const rNaked = prepboolean(Naked);
  const rName = prepLit(Name);
  const rIndex = prepArithmExpr(Index);
  const rValue = prepWord(Value);
  const rArray = prepArrayExpr(Array);
  return [...doAssign(rAppend, rNaked, rName, rIndex, rValue, rArray), comm({ rest_assign }, '{"rest_assign":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: BinAritOperator;",
//             "    X: IArithmExpr;",
//             "    Y: IArithmExpr;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "BinAritOperator";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Y";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "IBinaryArithm";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "BinAritOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  },
//           "Y" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "X",
//           "Y"
//         );

function prepBinaryArithm(binaryarithm: IBinaryArithm | null): string[] {
  logg("prepBinaryArithm");
  if (!binaryarithm) {
    return [comm({ empty_binaryarithm: binaryarithm }, '{"empty_binaryarithm":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binaryarithm } = binaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinAritOperator(Op);
  const rX = prepArithmExpr(X);
  const rY = prepArithmExpr(Y);
  return [...doBinaryArithm(rOpPos, rOp, rX, rY), comm({ rest_binaryarithm }, '{"rest_binaryarithm":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: BinCmdOperator;",
//             "    X: IStmt;",
//             "    Y: IStmt;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "BinCmdOperator";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IStmt";
// $func = "";
// $kind = "";


// $name1 = "Y";
// $def = "IStmt";
// $func = "";
// $kind = "";


// $name = "IBinaryCmd";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "BinCmdOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IStmt"
//                  },
//           "Y" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IStmt"
//                  }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "X",
//           "Y"
//         );

function prepBinaryCmd(binarycmd: IBinaryCmd | null): string[] {
  logg("prepBinaryCmd");
  if (!binarycmd) {
    return [comm({ empty_binarycmd: binarycmd }, '{"empty_binarycmd":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarycmd } = binarycmd;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinCmdOperator(Op);
  const rX = prepStmt(X);
  const rY = prepStmt(Y);
  return [...doBinaryCmd(rOpPos, rOp, rX, rY), comm({ rest_binarycmd }, '{"rest_binarycmd":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: BinTestOperator;",
//             "    X: ITestExpr;",
//             "    Y: ITestExpr;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "BinTestOperator";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "ITestExpr";
// $func = "";
// $kind = "";


// $name1 = "Y";
// $def = "ITestExpr";
// $func = "";
// $kind = "";


// $name = "IBinaryTest";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "BinTestOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "ITestExpr"
//                  },
//           "Y" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "ITestExpr"
//                  }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "X",
//           "Y"
//         );

function prepBinaryTest(binarytest: IBinaryTest | null): string[] {
  logg("prepBinaryTest");
  if (!binarytest) {
    return [comm({ empty_binarytest: binarytest }, '{"empty_binarytest":null}')];
  }
  const { OpPos, Op, X, Y, ...rest_binarytest } = binarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepBinTestOperator(Op);
  const rX = prepTestExpr(X);
  const rY = prepTestExpr(Y);
  return [...doBinaryTest(rOpPos, rOp, rX, rY), comm({ rest_binarytest }, '{"rest_binarytest":{}}')];
}

// @fields = (
//             "    Lbrace: I_Pos;",
//             "    Rbrace: I_Pos;",
//             "    StmtList: IStmtList | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Lbrace";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rbrace";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "StmtList";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IBlock";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Lbrace" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Rbrace" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "StmtList" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IStmtList"
//                         }
//         );
// @fdef = (
//           "Lbrace",
//           "Rbrace",
//           "StmtList",
//           "Last"
//         );

function prepBlock(block: IBlock | null): string[] {
  logg("prepBlock");
  if (!block) {
    return [comm({ empty_block: block }, '{"empty_block":null}')];
  }
  const { Lbrace, Rbrace, StmtList, Last, ...rest_block } = block;
  const rLbrace = prepPos(Lbrace);
  const rRbrace = prepPos(Rbrace);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doBlock(rLbrace, rRbrace, rStmtList, rLast), comm({ rest_block }, '{"rest_block":{}}')];
}

// @fields = (
//             "    Sequence: boolean;",
//             "    Chars: boolean;",
//             "    Elems: IWord[] | null;"
//           );


// $name1 = "Sequence";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Chars";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Elems";
// $def = "IWord";
// $func = "";
// $kind = "[] | null";


// $name = "IBraceExp";
// %fdef = (
//           "Chars" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "boolean"
//                      },
//           "Elems" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IWord"
//                      },
//           "Sequence" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         }
//         );
// @fdef = (
//           "Sequence",
//           "Chars",
//           "Elems"
//         );

function prepBraceExp(braceexp: IBraceExp | null): string[] {
  logg("prepBraceExp");
  if (!braceexp) {
    return [comm({ empty_braceexp: braceexp }, '{"empty_braceexp":null}')];
  }
  const { Sequence, Chars, Elems, ...rest_braceexp } = braceexp;
  const rSequence = prepboolean(Sequence);
  const rChars = prepboolean(Chars);
  const rElems = prepWords(Elems);
  return [...doBraceExp(rSequence, rChars, rElems), comm({ rest_braceexp }, '{"rest_braceexp":{}}')];
}

// @fields = (
//             "    Lparen: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    Init: IArithmExpr;",
//             "    Cond: IArithmExpr;",
//             "    Post: IArithmExpr;"
//           );


// $name1 = "Lparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Init";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Cond";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Post";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "ICStyleLoop";
// %fdef = (
//           "Cond" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IArithmExpr"
//                     },
//           "Init" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IArithmExpr"
//                     },
//           "Lparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Post" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IArithmExpr"
//                     },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       }
//         );
// @fdef = (
//           "Lparen",
//           "Rparen",
//           "Init",
//           "Cond",
//           "Post"
//         );

function prepCStyleLoop(cstyleloop: ICStyleLoop | null): string[] {
  logg("prepCStyleLoop");
  if (!cstyleloop) {
    return [comm({ empty_cstyleloop: cstyleloop }, '{"empty_cstyleloop":null}')];
  }
  const { Lparen, Rparen, Init, Cond, Post, ...rest_cstyleloop } = cstyleloop;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rInit = prepArithmExpr(Init);
  const rCond = prepArithmExpr(Cond);
  const rPost = prepArithmExpr(Post);
  return [...doCStyleLoop(rLparen, rRparen, rInit, rCond, rPost), comm({ rest_cstyleloop }, '{"rest_cstyleloop":{}}')];
}

// @fields = (
//             "    Assigns: IAssign[] | null;",
//             "    Args: IWord[] | null;"
//           );


// $name1 = "Assigns";
// $def = "IAssign";
// $func = "";
// $kind = "[] | null";


// $name1 = "Args";
// $def = "IWord";
// $func = "";
// $kind = "[] | null";


// $name = "ICallExpr";
// %fdef = (
//           "Args" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     },
//           "Assigns" => {
//                          "a" => 1,
//                          "f" => 0,
//                          "n" => 1,
//                          "t" => "IAssign"
//                        }
//         );
// @fdef = (
//           "Assigns",
//           "Args"
//         );

function prepCallExpr(callexpr: ICallExpr | null): string[] {
  logg("prepCallExpr");
  if (!callexpr) {
    return [comm({ empty_callexpr: callexpr }, '{"empty_callexpr":null}')];
  }
  const { Assigns, Args, ...rest_callexpr } = callexpr;
  const rAssigns = prepAssigns(Assigns);
  const rArgs = prepWords(Args);
  return [...doCallExpr(rAssigns, rArgs), comm({ rest_callexpr }, '{"rest_callexpr":{}}')];
}

// @fields = (
//             "    Case: I_Pos;",
//             "    Esac: I_Pos;",
//             "    Word: IWord | null;",
//             "    Items: ICaseItem[] | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Case";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Esac";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Word";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name1 = "Items";
// $def = "ICaseItem";
// $func = "";
// $kind = "[] | null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "ICaseClause";
// %fdef = (
//           "Case" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Esac" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Items" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "ICaseItem"
//                      },
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Word" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     }
//         );
// @fdef = (
//           "Case",
//           "Esac",
//           "Word",
//           "Items",
//           "Last"
//         );

function prepCaseClause(caseclause: ICaseClause | null): string[] {
  logg("prepCaseClause");
  if (!caseclause) {
    return [comm({ empty_caseclause: caseclause }, '{"empty_caseclause":null}')];
  }
  const { Case, Esac, Word, Items, Last, ...rest_caseclause } = caseclause;
  const rCase = prepPos(Case);
  const rEsac = prepPos(Esac);
  const rWord = prepWord(Word);
  const rItems = prepCaseItems(Items);
  const rLast = prepComments(Last);
  return [...doCaseClause(rCase, rEsac, rWord, rItems, rLast), comm({ rest_caseclause }, '{"rest_caseclause":{}}')];
}

// @fields = (
//             "    Op: CaseOperator;",
//             "    OpPos: I_Pos;",
//             "    Comments: IComment[];",
//             "    Patterns: IWord[] | null;",
//             "    StmtList: IStmtList | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Op";
// $def = "CaseOperator";
// $func = "";
// $kind = "";


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Comments";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "Patterns";
// $def = "IWord";
// $func = "";
// $kind = "[] | null";


// $name1 = "StmtList";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "ICaseItem";
// %fdef = (
//           "Comments" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "CaseOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Patterns" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IWord"
//                         },
//           "StmtList" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IStmtList"
//                         }
//         );
// @fdef = (
//           "Op",
//           "OpPos",
//           "Comments",
//           "Patterns",
//           "StmtList",
//           "Last"
//         );

function prepCaseItem(caseitem: ICaseItem | null): string[] {
  logg("prepCaseItem");
  if (!caseitem) {
    return [comm({ empty_caseitem: caseitem }, '{"empty_caseitem":null}')];
  }
  const { Op, OpPos, Comments, Patterns, StmtList, Last, ...rest_caseitem } = caseitem;
  const rOp = prepCaseOperator(Op);
  const rOpPos = prepPos(OpPos);
  const rComments = prepComments(Comments);
  const rPatterns = prepWords(Patterns);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doCaseItem(rOp, rOpPos, rComments, rPatterns, rStmtList, rLast), comm({ rest_caseitem }, '{"rest_caseitem":{}}')];
}

// @fields = (
//             "    Left: I_Pos;",
//             "    Right: I_Pos;",
//             "    StmtList: IStmtList | null;",
//             "    Last: IComment[];",
//             "    TempFile: boolean;",
//             "    ReplyVar: boolean;"
//           );


// $name1 = "Left";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Right";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "StmtList";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "TempFile";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "ReplyVar";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name = "ICmdSubst";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Left" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "ReplyVar" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         },
//           "Right" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "StmtList" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IStmtList"
//                         },
//           "TempFile" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         }
//         );
// @fdef = (
//           "Left",
//           "Right",
//           "StmtList",
//           "Last",
//           "TempFile",
//           "ReplyVar"
//         );

function prepCmdSubst(cmdsubst: ICmdSubst | null): string[] {
  logg("prepCmdSubst");
  if (!cmdsubst) {
    return [comm({ empty_cmdsubst: cmdsubst }, '{"empty_cmdsubst":null}')];
  }
  const { Left, Right, StmtList, Last, TempFile, ReplyVar, ...rest_cmdsubst } = cmdsubst;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  const rTempFile = prepboolean(TempFile);
  const rReplyVar = prepboolean(ReplyVar);
  return [...doCmdSubst(rLeft, rRight, rStmtList, rLast, rTempFile, rReplyVar), comm({ rest_cmdsubst }, '{"rest_cmdsubst":{}}')];
}

// $what = "type";
// $name = "ICommand";
// $body = "= ICallExpr | IIfClause | IWhileClause | IForClause | ICaseClause | IBlock | ISubshell | IBinaryCmd | IFuncDecl | IArithmCmd | ITestClause | IDeclClause | ILetClause | ITimeClause | ICoprocClause;";


// @alts = (
//           "ICallExpr",
//           "IIfClause",
//           "IWhileClause",
//           "IForClause",
//           "ICaseClause",
//           "IBlock",
//           "ISubshell",
//           "IBinaryCmd",
//           "IFuncDecl",
//           "IArithmCmd",
//           "ITestClause",
//           "IDeclClause",
//           "ILetClause",
//           "ITimeClause",
//           "ICoprocClause"
//         );

function prepCommand(command: ICommand | null): string[] {
  logg("prepCommand");
  if (!command) {
    return [comm({ empty_command: command }, '{"empty_command":null}')];
  }
  switch (syntax.NodeType(command)) {
    case "CallExpr":
      return prepCallExpr(command as ICallExpr);
    case "IfClause":
      return prepIfClause(command as IIfClause);
    case "WhileClause":
      return prepWhileClause(command as IWhileClause);
    case "ForClause":
      return prepForClause(command as IForClause);
    case "CaseClause":
      return prepCaseClause(command as ICaseClause);
    case "Block":
      return prepBlock(command as IBlock);
    case "Subshell":
      return prepSubshell(command as ISubshell);
    case "BinaryCmd":
      return prepBinaryCmd(command as IBinaryCmd);
    case "FuncDecl":
      return prepFuncDecl(command as IFuncDecl);
    case "ArithmCmd":
      return prepArithmCmd(command as IArithmCmd);
    case "TestClause":
      return prepTestClause(command as ITestClause);
    case "DeclClause":
      return prepDeclClause(command as IDeclClause);
    case "LetClause":
      return prepLetClause(command as ILetClause);
    case "TimeClause":
      return prepTimeClause(command as ITimeClause);
    case "CoprocClause":
      return prepCoprocClause(command as ICoprocClause);
    default:
      return [comm({ unknown_command: command })];
  }
}

// @fields = (
//             "    Hash: I_Pos;",
//             "    Text: string;"
//           );


// $name1 = "Hash";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Text";
// $def = "string";
// $func = "";
// $kind = "";


// $name = "IComment";
// %fdef = (
//           "Hash" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Text" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "string"
//                     }
//         );
// @fdef = (
//           "Hash",
//           "Text"
//         );

function prepComment(comment: IComment | null): string[] {
  logg("prepComment");
  if (!comment) {
    return [comm({ empty_comment: comment }, '{"empty_comment":null}')];
  }
  const { Hash, Text, ...rest_comment } = comment;
  const rHash = prepPos(Hash);
  const rText = prepstring(Text);
  return [...doComment(rHash, rText), comm({ rest_comment }, '{"rest_comment":{}}')];
}

// @fields = (
//             "    Coproc: I_Pos;",
//             "    Name: IWord | null;",
//             "    Stmt: IStmt | null;"
//           );


// $name1 = "Coproc";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Name";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name1 = "Stmt";
// $def = "IStmt";
// $func = "";
// $kind = "| null";


// $name = "ICoprocClause";
// %fdef = (
//           "Coproc" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Name" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     },
//           "Stmt" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmt"
//                     }
//         );
// @fdef = (
//           "Coproc",
//           "Name",
//           "Stmt"
//         );

function prepCoprocClause(coprocclause: ICoprocClause | null): string[] {
  logg("prepCoprocClause");
  if (!coprocclause) {
    return [comm({ empty_coprocclause: coprocclause }, '{"empty_coprocclause":null}')];
  }
  const { Coproc, Name, Stmt, ...rest_coprocclause } = coprocclause;
  const rCoproc = prepPos(Coproc);
  const rName = prepWord(Name);
  const rStmt = prepStmt(Stmt);
  return [...doCoprocClause(rCoproc, rName, rStmt), comm({ rest_coprocclause }, '{"rest_coprocclause":{}}')];
}

// @fields = (
//             "    Position: I_Pos;",
//             "    Dollar: boolean;",
//             "    Parts: IWordPart[];"
//           );


// $name1 = "Position";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Dollar";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Parts";
// $def = "IWordPart";
// $func = "";
// $kind = "[]";


// $name = "IDblQuoted";
// %fdef = (
//           "Dollar" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "boolean"
//                       },
//           "Parts" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IWordPart"
//                      },
//           "Position" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         }
//         );
// @fdef = (
//           "Position",
//           "Dollar",
//           "Parts"
//         );

function prepDblQuoted(dblquoted: IDblQuoted | null): string[] {
  logg("prepDblQuoted");
  if (!dblquoted) {
    return [comm({ empty_dblquoted: dblquoted }, '{"empty_dblquoted":null}')];
  }
  const { Position, Dollar, Parts, ...rest_dblquoted } = dblquoted;
  const rPosition = prepPos(Position);
  const rDollar = prepboolean(Dollar);
  const rParts = prepWordParts(Parts);
  return [...doDblQuoted(rPosition, rDollar, rParts), comm({ rest_dblquoted }, '{"rest_dblquoted":{}}')];
}

// @fields = (
//             "    Variant: ILit | null;",
//             "    Opts: IWord[] | null;",
//             "    Assigns: IAssign[] | null;"
//           );


// $name1 = "Variant";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "Opts";
// $def = "IWord";
// $func = "";
// $kind = "[] | null";


// $name1 = "Assigns";
// $def = "IAssign";
// $func = "";
// $kind = "[] | null";


// $name = "IDeclClause";
// %fdef = (
//           "Assigns" => {
//                          "a" => 1,
//                          "f" => 0,
//                          "n" => 1,
//                          "t" => "IAssign"
//                        },
//           "Opts" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     },
//           "Variant" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 1,
//                          "t" => "ILit"
//                        }
//         );
// @fdef = (
//           "Variant",
//           "Opts",
//           "Assigns"
//         );

function prepDeclClause(declclause: IDeclClause | null): string[] {
  logg("prepDeclClause");
  if (!declclause) {
    return [comm({ empty_declclause: declclause }, '{"empty_declclause":null}')];
  }
  const { Variant, Opts, Assigns, ...rest_declclause } = declclause;
  const rVariant = prepLit(Variant);
  const rOpts = prepWords(Opts);
  const rAssigns = prepAssigns(Assigns);
  return [...doDeclClause(rVariant, rOpts, rAssigns), comm({ rest_declclause }, '{"rest_declclause":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: GlobOperator;",
//             "    Pattern: ILit | null;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "GlobOperator";
// $func = "";
// $kind = "";


// $name1 = "Pattern";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name = "IExtGlob";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "GlobOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Pattern" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 1,
//                          "t" => "ILit"
//                        }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "Pattern"
//         );

function prepExtGlob(extglob: IExtGlob | null): string[] {
  logg("prepExtGlob");
  if (!extglob) {
    return [comm({ empty_extglob: extglob }, '{"empty_extglob":null}')];
  }
  const { OpPos, Op, Pattern, ...rest_extglob } = extglob;
  const rOpPos = prepPos(OpPos);
  const rOp = prepGlobOperator(Op);
  const rPattern = prepLit(Pattern);
  return [...doExtGlob(rOpPos, rOp, rPattern), comm({ rest_extglob }, '{"rest_extglob":{}}')];
}

// @fields = (
//             "    Name: string;",
//             "    StmtList: IStmtList | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Name";
// $def = "string";
// $func = "";
// $kind = "";


// $name1 = "StmtList";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IFile";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Name" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "string"
//                     },
//           "StmtList" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IStmtList"
//                         }
//         );
// @fdef = (
//           "Name",
//           "StmtList",
//           "Last"
//         );

function prepFile(file: IFile | null): string[] {
  logg("prepFile");
  if (!file) {
    return [comm({ empty_file: file }, '{"empty_file":null}')];
  }
  const { Name, StmtList, Last, ...rest_file } = file;
  const rName = prepstring(Name);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doFile(rName, rStmtList, rLast), comm({ rest_file }, '{"rest_file":{}}')];
}

// @fields = (
//             "    ForPos: I_Pos;",
//             "    DoPos: I_Pos;",
//             "    DonePos: I_Pos;",
//             "    Select: boolean;",
//             "    Loop: ILoop;",
//             "    Do: IStmtList | null;",
//             "    DoLast: IComment[];"
//           );


// $name1 = "ForPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "DoPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "DonePos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Select";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Loop";
// $def = "ILoop";
// $func = "";
// $kind = "";


// $name1 = "Do";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "DoLast";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IForClause";
// %fdef = (
//           "Do" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 1,
//                     "t" => "IStmtList"
//                   },
//           "DoLast" => {
//                         "a" => 1,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "IComment"
//                       },
//           "DoPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "DonePos" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 0,
//                          "t" => "I_Pos"
//                        },
//           "ForPos" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Loop" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "ILoop"
//                     },
//           "Select" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "boolean"
//                       }
//         );
// @fdef = (
//           "ForPos",
//           "DoPos",
//           "DonePos",
//           "Select",
//           "Loop",
//           "Do",
//           "DoLast"
//         );

function prepForClause(forclause: IForClause | null): string[] {
  logg("prepForClause");
  if (!forclause) {
    return [comm({ empty_forclause: forclause }, '{"empty_forclause":null}')];
  }
  const { ForPos, DoPos, DonePos, Select, Loop, Do, DoLast, ...rest_forclause } = forclause;
  const rForPos = prepPos(ForPos);
  const rDoPos = prepPos(DoPos);
  const rDonePos = prepPos(DonePos);
  const rSelect = prepboolean(Select);
  const rLoop = prepLoop(Loop);
  const rDo = prepStmtList(Do);
  const rDoLast = prepComments(DoLast);
  return [...doForClause(rForPos, rDoPos, rDonePos, rSelect, rLoop, rDo, rDoLast), comm({ rest_forclause }, '{"rest_forclause":{}}')];
}

// @fields = (
//             "    Position: I_Pos;",
//             "    RsrvWord: boolean;",
//             "    Name: ILit | null;",
//             "    Body: IStmt | null;"
//           );


// $name1 = "Position";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "RsrvWord";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Name";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "Body";
// $def = "IStmt";
// $func = "";
// $kind = "| null";


// $name = "IFuncDecl";
// %fdef = (
//           "Body" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmt"
//                     },
//           "Name" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "ILit"
//                     },
//           "Position" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         },
//           "RsrvWord" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "boolean"
//                         }
//         );
// @fdef = (
//           "Position",
//           "RsrvWord",
//           "Name",
//           "Body"
//         );

function prepFuncDecl(funcdecl: IFuncDecl | null): string[] {
  logg("prepFuncDecl");
  if (!funcdecl) {
    return [comm({ empty_funcdecl: funcdecl }, '{"empty_funcdecl":null}')];
  }
  const { Position, RsrvWord, Name, Body, ...rest_funcdecl } = funcdecl;
  const rPosition = prepPos(Position);
  const rRsrvWord = prepboolean(RsrvWord);
  const rName = prepLit(Name);
  const rBody = prepStmt(Body);
  return [...doFuncDecl(rPosition, rRsrvWord, rName, rBody), comm({ rest_funcdecl }, '{"rest_funcdecl":{}}')];
}

// @fields = (
//             "    Position: I_Pos;",
//             "    ThenPos: I_Pos;",
//             "    FiPos: I_Pos;",
//             "    Cond: IStmtList | null;",
//             "    CondLast: IComment[];",
//             "    Then: IStmtList | null;",
//             "    ThenLast: IComment[];",
//             "    Else: IIfClause | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Position";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "ThenPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "FiPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Cond";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "CondLast";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "Then";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "ThenLast";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "Else";
// $def = "IIfClause";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IIfClause";
// %fdef = (
//           "Cond" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmtList"
//                     },
//           "CondLast" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "Else" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IIfClause"
//                     },
//           "FiPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Position" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         },
//           "Then" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmtList"
//                     },
//           "ThenLast" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "ThenPos" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 0,
//                          "t" => "I_Pos"
//                        }
//         );
// @fdef = (
//           "Position",
//           "ThenPos",
//           "FiPos",
//           "Cond",
//           "CondLast",
//           "Then",
//           "ThenLast",
//           "Else",
//           "Last"
//         );

function prepIfClause(ifclause: IIfClause | null): string[] {
  logg("prepIfClause");
  if (!ifclause) {
    return [comm({ empty_ifclause: ifclause }, '{"empty_ifclause":null}')];
  }
  const { Position, ThenPos, FiPos, Cond, CondLast, Then, ThenLast, Else, Last, ...rest_ifclause } = ifclause;
  const rPosition = prepPos(Position);
  const rThenPos = prepPos(ThenPos);
  const rFiPos = prepPos(FiPos);
  const rCond = prepStmtList(Cond);
  const rCondLast = prepComments(CondLast);
  const rThen = prepStmtList(Then);
  const rThenLast = prepComments(ThenLast);
  const rElse = prepIfClause(Else);
  const rLast = prepComments(Last);
  return [...doIfClause(rPosition, rThenPos, rFiPos, rCond, rCondLast, rThen, rThenLast, rElse, rLast), comm({ rest_ifclause }, '{"rest_ifclause":{}}')];
}

// @fields = (
//             "    Let: I_Pos;",
//             "    Exprs: IArithmExpr[];"
//           );


// $name1 = "Let";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Exprs";
// $def = "IArithmExpr";
// $func = "";
// $kind = "[]";


// $name = "ILetClause";
// %fdef = (
//           "Exprs" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IArithmExpr"
//                      },
//           "Let" => {
//                      "a" => 0,
//                      "f" => 0,
//                      "n" => 0,
//                      "t" => "I_Pos"
//                    }
//         );
// @fdef = (
//           "Let",
//           "Exprs"
//         );

function prepLetClause(letclause: ILetClause | null): string[] {
  logg("prepLetClause");
  if (!letclause) {
    return [comm({ empty_letclause: letclause }, '{"empty_letclause":null}')];
  }
  const { Let, Exprs, ...rest_letclause } = letclause;
  const rLet = prepPos(Let);
  const rExprs = prepArithmExprs(Exprs);
  return [...doLetClause(rLet, rExprs), comm({ rest_letclause }, '{"rest_letclause":{}}')];
}

// @fields = (
//             "    ValuePos: I_Pos;",
//             "    ValueEnd: I_Pos;",
//             "    Value: string;"
//           );


// $name1 = "ValuePos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "ValueEnd";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Value";
// $def = "string";
// $func = "";
// $kind = "";


// $name = "ILit";
// %fdef = (
//           "Value" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "string"
//                      },
//           "ValueEnd" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         },
//           "ValuePos" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         }
//         );
// @fdef = (
//           "ValuePos",
//           "ValueEnd",
//           "Value"
//         );

function prepLit(lit: ILit | null): string[] {
  logg("prepLit");
  if (!lit) {
    return [comm({ empty_lit: lit }, '{"empty_lit":null}')];
  }
  const { ValuePos, ValueEnd, Value, ...rest_lit } = lit;
  const rValuePos = prepPos(ValuePos);
  const rValueEnd = prepPos(ValueEnd);
  const rValue = prepstring(Value);
  return [...doLit(rValuePos, rValueEnd, rValue), comm({ rest_lit }, '{"rest_lit":{}}')];
}

// $what = "type";
// $name = "ILoop";
// $body = "= IWordIter | ICStyleLoop;";


// @alts = (
//           "IWordIter",
//           "ICStyleLoop"
//         );

function prepLoop(loop: ILoop | null): string[] {
  logg("prepLoop");
  if (!loop) {
    return [comm({ empty_loop: loop }, '{"empty_loop":null}')];
  }
  switch (syntax.NodeType(loop)) {
    case "WordIter":
      return prepWordIter(loop as IWordIter);
    case "CStyleLoop":
      return prepCStyleLoop(loop as ICStyleLoop);
    default:
      return [comm({ unknown_loop: loop })];
  }
}

// @fields = (
//             "    Dollar: I_Pos;",
//             "    Rbrace: I_Pos;",
//             "    Short: boolean;",
//             "    Excl: boolean;",
//             "    Length: boolean;",
//             "    Width: boolean;",
//             "    Param: ILit | null;",
//             "    Index: IArithmExpr;",
//             "    Slice: ISlice | null;",
//             "    Repl: IReplace | null;",
//             "    Names: ParNamesOperator;",
//             "    Exp: I_Expansion | null;"
//           );


// $name1 = "Dollar";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rbrace";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Short";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Excl";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Length";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Width";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Param";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "Index";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name1 = "Slice";
// $def = "ISlice";
// $func = "";
// $kind = "| null";


// $name1 = "Repl";
// $def = "IReplace";
// $func = "";
// $kind = "| null";


// $name1 = "Names";
// $def = "ParNamesOperator";
// $func = "";
// $kind = "";


// $name1 = "Exp";
// $def = "I_Expansion";
// $func = "";
// $kind = "| null";


// $name = "IParamExp";
// %fdef = (
//           "Dollar" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Excl" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "boolean"
//                     },
//           "Exp" => {
//                      "a" => 0,
//                      "f" => 0,
//                      "n" => 1,
//                      "t" => "I_Expansion"
//                    },
//           "Index" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IArithmExpr"
//                      },
//           "Length" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "boolean"
//                       },
//           "Names" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "ParNamesOperator"
//                      },
//           "Param" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "ILit"
//                      },
//           "Rbrace" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Repl" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IReplace"
//                     },
//           "Short" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "boolean"
//                      },
//           "Slice" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "ISlice"
//                      },
//           "Width" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "boolean"
//                      }
//         );
// @fdef = (
//           "Dollar",
//           "Rbrace",
//           "Short",
//           "Excl",
//           "Length",
//           "Width",
//           "Param",
//           "Index",
//           "Slice",
//           "Repl",
//           "Names",
//           "Exp"
//         );

function prepParamExp(paramexp: IParamExp | null): string[] {
  logg("prepParamExp");
  if (!paramexp) {
    return [comm({ empty_paramexp: paramexp }, '{"empty_paramexp":null}')];
  }
  const { Dollar, Rbrace, Short, Excl, Length, Width, Param, Index, Slice, Repl, Names, Exp, ...rest_paramexp } = paramexp;
  const rDollar = prepPos(Dollar);
  const rRbrace = prepPos(Rbrace);
  const rShort = prepboolean(Short);
  const rExcl = prepboolean(Excl);
  const rLength = prepboolean(Length);
  const rWidth = prepboolean(Width);
  const rParam = prepLit(Param);
  const rIndex = prepArithmExpr(Index);
  const rSlice = prepSlice(Slice);
  const rRepl = prepReplace(Repl);
  const rNames = prepParNamesOperator(Names);
  const rExp = prepExpansion(Exp);
  return [...doParamExp(rDollar, rRbrace, rShort, rExcl, rLength, rWidth, rParam, rIndex, rSlice, rRepl, rNames, rExp), comm({ rest_paramexp }, '{"rest_paramexp":{}}')];
}

// @fields = (
//             "    Lparen: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    X: IArithmExpr;"
//           );


// $name1 = "Lparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "IParenArithm";
// %fdef = (
//           "Lparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  }
//         );
// @fdef = (
//           "Lparen",
//           "Rparen",
//           "X"
//         );

function prepParenArithm(parenarithm: IParenArithm | null): string[] {
  logg("prepParenArithm");
  if (!parenarithm) {
    return [comm({ empty_parenarithm: parenarithm }, '{"empty_parenarithm":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parenarithm } = parenarithm;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepArithmExpr(X);
  return [...doParenArithm(rLparen, rRparen, rX), comm({ rest_parenarithm }, '{"rest_parenarithm":{}}')];
}

// @fields = (
//             "    Lparen: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    X: ITestExpr;"
//           );


// $name1 = "Lparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "ITestExpr";
// $func = "";
// $kind = "";


// $name = "IParenTest";
// %fdef = (
//           "Lparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "ITestExpr"
//                  }
//         );
// @fdef = (
//           "Lparen",
//           "Rparen",
//           "X"
//         );

function prepParenTest(parentest: IParenTest | null): string[] {
  logg("prepParenTest");
  if (!parentest) {
    return [comm({ empty_parentest: parentest }, '{"empty_parentest":null}')];
  }
  const { Lparen, Rparen, X, ...rest_parentest } = parentest;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rX = prepTestExpr(X);
  return [...doParenTest(rLparen, rRparen, rX), comm({ rest_parentest }, '{"rest_parentest":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    Op: ProcOperator;",
//             "    Stmts: IStmt[] | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "ProcOperator";
// $func = "";
// $kind = "";


// $name1 = "Stmts";
// $def = "IStmt";
// $func = "";
// $kind = "[] | null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IProcSubst";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "ProcOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Stmts" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IStmt"
//                      }
//         );
// @fdef = (
//           "OpPos",
//           "Rparen",
//           "Op",
//           "Stmts",
//           "Last"
//         );

function prepProcSubst(procsubst: IProcSubst | null): string[] {
  logg("prepProcSubst");
  if (!procsubst) {
    return [comm({ empty_procsubst: procsubst }, '{"empty_procsubst":null}')];
  }
  const { OpPos, Rparen, Op, Stmts, Last, ...rest_procsubst } = procsubst;
  const rOpPos = prepPos(OpPos);
  const rRparen = prepPos(Rparen);
  const rOp = prepProcOperator(Op);
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doProcSubst(rOpPos, rRparen, rOp, rStmts, rLast), comm({ rest_procsubst }, '{"rest_procsubst":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: RedirOperator;",
//             "    N: ILit | null;",
//             "    Word: IWord | null;",
//             "    Hdoc: IWord | null;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "RedirOperator";
// $func = "";
// $kind = "";


// $name1 = "N";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "Word";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name1 = "Hdoc";
// $def = "IWord";
// $func = "";
// $kind = "| null";


// $name = "IRedirect";
// %fdef = (
//           "Hdoc" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     },
//           "N" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 1,
//                    "t" => "ILit"
//                  },
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "RedirOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Word" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IWord"
//                     }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "N",
//           "Word",
//           "Hdoc"
//         );

function prepRedirect(redirect: IRedirect | null): string[] {
  logg("prepRedirect");
  if (!redirect) {
    return [comm({ empty_redirect: redirect }, '{"empty_redirect":null}')];
  }
  const { OpPos, Op, N, Word, Hdoc, ...rest_redirect } = redirect;
  const rOpPos = prepPos(OpPos);
  const rOp = prepRedirOperator(Op);
  const rN = prepLit(N);
  const rWord = prepWord(Word);
  const rHdoc = prepWord(Hdoc);
  return [...doRedirect(rOpPos, rOp, rN, rWord, rHdoc), comm({ rest_redirect }, '{"rest_redirect":{}}')];
}

// @fields = (
//             "    Left: I_Pos;",
//             "    Right: I_Pos;",
//             "    Dollar: boolean;",
//             "    Value: string;"
//           );


// $name1 = "Left";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Right";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Dollar";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Value";
// $def = "string";
// $func = "";
// $kind = "";


// $name = "ISglQuoted";
// %fdef = (
//           "Dollar" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "boolean"
//                       },
//           "Left" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Right" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Value" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "string"
//                      }
//         );
// @fdef = (
//           "Left",
//           "Right",
//           "Dollar",
//           "Value"
//         );

function prepSglQuoted(sglquoted: ISglQuoted | null): string[] {
  logg("prepSglQuoted");
  if (!sglquoted) {
    return [comm({ empty_sglquoted: sglquoted }, '{"empty_sglquoted":null}')];
  }
  const { Left, Right, Dollar, Value, ...rest_sglquoted } = sglquoted;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rDollar = prepboolean(Dollar);
  const rValue = prepstring(Value);
  return [...doSglQuoted(rLeft, rRight, rDollar, rValue), comm({ rest_sglquoted }, '{"rest_sglquoted":{}}')];
}

// @fields = (
//             "    Comments: IComment[];",
//             "    Cmd: ICommand;",
//             "    Position: I_Pos;",
//             "    Semicolon: I_Pos;",
//             "    Negated: boolean;",
//             "    Background: boolean;",
//             "    Coprocess: boolean;",
//             "    Redirs: IRedirect[] | null;"
//           );


// $name1 = "Comments";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "Cmd";
// $def = "ICommand";
// $func = "";
// $kind = "";


// $name1 = "Position";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Semicolon";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Negated";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Background";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Coprocess";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Redirs";
// $def = "IRedirect";
// $func = "";
// $kind = "[] | null";


// $name = "IStmt";
// %fdef = (
//           "Background" => {
//                             "a" => 0,
//                             "f" => 0,
//                             "n" => 0,
//                             "t" => "boolean"
//                           },
//           "Cmd" => {
//                      "a" => 0,
//                      "f" => 0,
//                      "n" => 0,
//                      "t" => "ICommand"
//                    },
//           "Comments" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "Coprocess" => {
//                            "a" => 0,
//                            "f" => 0,
//                            "n" => 0,
//                            "t" => "boolean"
//                          },
//           "Negated" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 0,
//                          "t" => "boolean"
//                        },
//           "Position" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         },
//           "Redirs" => {
//                         "a" => 1,
//                         "f" => 0,
//                         "n" => 1,
//                         "t" => "IRedirect"
//                       },
//           "Semicolon" => {
//                            "a" => 0,
//                            "f" => 0,
//                            "n" => 0,
//                            "t" => "I_Pos"
//                          }
//         );
// @fdef = (
//           "Comments",
//           "Cmd",
//           "Position",
//           "Semicolon",
//           "Negated",
//           "Background",
//           "Coprocess",
//           "Redirs"
//         );

function prepStmt(stmt: IStmt | null): string[] {
  logg("prepStmt");
  if (!stmt) {
    return [comm({ empty_stmt: stmt }, '{"empty_stmt":null}')];
  }
  const { Comments, Cmd, Position, Semicolon, Negated, Background, Coprocess, Redirs, ...rest_stmt } = stmt;
  const rComments = prepComments(Comments);
  const rCmd = prepCommand(Cmd);
  const rPosition = prepPos(Position);
  const rSemicolon = prepPos(Semicolon);
  const rNegated = prepboolean(Negated);
  const rBackground = prepboolean(Background);
  const rCoprocess = prepboolean(Coprocess);
  const rRedirs = prepRedirects(Redirs);
  return [...doStmt(rComments, rCmd, rPosition, rSemicolon, rNegated, rBackground, rCoprocess, rRedirs), comm({ rest_stmt }, '{"rest_stmt":{}}')];
}

// @fields = (
//             "    Stmts: IStmt[];",
//             "    Last: IComment[];"
//           );


// $name1 = "Stmts";
// $def = "IStmt";
// $func = "";
// $kind = "[]";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IStmtList";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Stmts" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IStmt"
//                      }
//         );
// @fdef = (
//           "Stmts",
//           "Last"
//         );

function prepStmtList(stmtlist: IStmtList | null): string[] {
  logg("prepStmtList");
  if (!stmtlist) {
    return [comm({ empty_stmtlist: stmtlist }, '{"empty_stmtlist":null}')];
  }
  const { Stmts, Last, ...rest_stmtlist } = stmtlist;
  const rStmts = prepStmts(Stmts);
  const rLast = prepComments(Last);
  return [...doStmtList(rStmts, rLast), comm({ rest_stmtlist }, '{"rest_stmtlist":{}}')];
}

// @fields = (
//             "    Lparen: I_Pos;",
//             "    Rparen: I_Pos;",
//             "    StmtList: IStmtList | null;",
//             "    Last: IComment[];"
//           );


// $name1 = "Lparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Rparen";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "StmtList";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "Last";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "ISubshell";
// %fdef = (
//           "Last" => {
//                       "a" => 1,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "IComment"
//                     },
//           "Lparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "Rparen" => {
//                         "a" => 0,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "I_Pos"
//                       },
//           "StmtList" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 1,
//                           "t" => "IStmtList"
//                         }
//         );
// @fdef = (
//           "Lparen",
//           "Rparen",
//           "StmtList",
//           "Last"
//         );

function prepSubshell(subshell: ISubshell | null): string[] {
  logg("prepSubshell");
  if (!subshell) {
    return [comm({ empty_subshell: subshell }, '{"empty_subshell":null}')];
  }
  const { Lparen, Rparen, StmtList, Last, ...rest_subshell } = subshell;
  const rLparen = prepPos(Lparen);
  const rRparen = prepPos(Rparen);
  const rStmtList = prepStmtList(StmtList);
  const rLast = prepComments(Last);
  return [...doSubshell(rLparen, rRparen, rStmtList, rLast), comm({ rest_subshell }, '{"rest_subshell":{}}')];
}

// @fields = (
//             "    Left: I_Pos;",
//             "    Right: I_Pos;",
//             "    X: ITestExpr;"
//           );


// $name1 = "Left";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Right";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "ITestExpr";
// $func = "";
// $kind = "";


// $name = "ITestClause";
// %fdef = (
//           "Left" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     },
//           "Right" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "ITestExpr"
//                  }
//         );
// @fdef = (
//           "Left",
//           "Right",
//           "X"
//         );

function prepTestClause(testclause: ITestClause | null): string[] {
  logg("prepTestClause");
  if (!testclause) {
    return [comm({ empty_testclause: testclause }, '{"empty_testclause":null}')];
  }
  const { Left, Right, X, ...rest_testclause } = testclause;
  const rLeft = prepPos(Left);
  const rRight = prepPos(Right);
  const rX = prepTestExpr(X);
  return [...doTestClause(rLeft, rRight, rX), comm({ rest_testclause }, '{"rest_testclause":{}}')];
}

// $what = "type";
// $name = "ITestExpr";
// $body = "= IBinaryTest | IUnaryTest | IParenTest | IWord;";


// @alts = (
//           "IBinaryTest",
//           "IUnaryTest",
//           "IParenTest",
//           "IWord"
//         );

function prepTestExpr(testexpr: ITestExpr | null): string[] {
  logg("prepTestExpr");
  if (!testexpr) {
    return [comm({ empty_testexpr: testexpr }, '{"empty_testexpr":null}')];
  }
  switch (syntax.NodeType(testexpr)) {
    case "BinaryTest":
      return prepBinaryTest(testexpr as IBinaryTest);
    case "UnaryTest":
      return prepUnaryTest(testexpr as IUnaryTest);
    case "ParenTest":
      return prepParenTest(testexpr as IParenTest);
    case "Word":
      return prepWord(testexpr as IWord);
    default:
      return [comm({ unknown_testexpr: testexpr })];
  }
}

// @fields = (
//             "    Time: I_Pos;",
//             "    PosixFormat: boolean;",
//             "    Stmt: IStmt | null;"
//           );


// $name1 = "Time";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "PosixFormat";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Stmt";
// $def = "IStmt";
// $func = "";
// $kind = "| null";


// $name = "ITimeClause";
// %fdef = (
//           "PosixFormat" => {
//                              "a" => 0,
//                              "f" => 0,
//                              "n" => 0,
//                              "t" => "boolean"
//                            },
//           "Stmt" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmt"
//                     },
//           "Time" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "I_Pos"
//                     }
//         );
// @fdef = (
//           "Time",
//           "PosixFormat",
//           "Stmt"
//         );

function prepTimeClause(timeclause: ITimeClause | null): string[] {
  logg("prepTimeClause");
  if (!timeclause) {
    return [comm({ empty_timeclause: timeclause }, '{"empty_timeclause":null}')];
  }
  const { Time, PosixFormat, Stmt, ...rest_timeclause } = timeclause;
  const rTime = prepPos(Time);
  const rPosixFormat = prepboolean(PosixFormat);
  const rStmt = prepStmt(Stmt);
  return [...doTimeClause(rTime, rPosixFormat, rStmt), comm({ rest_timeclause }, '{"rest_timeclause":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: UnAritOperator;",
//             "    Post: boolean;",
//             "    X: IArithmExpr;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "UnAritOperator";
// $func = "";
// $kind = "";


// $name1 = "Post";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "IArithmExpr";
// $func = "";
// $kind = "";


// $name = "IUnaryArithm";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "UnAritOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Post" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 0,
//                       "t" => "boolean"
//                     },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "IArithmExpr"
//                  }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "Post",
//           "X"
//         );

function prepUnaryArithm(unaryarithm: IUnaryArithm | null): string[] {
  logg("prepUnaryArithm");
  if (!unaryarithm) {
    return [comm({ empty_unaryarithm: unaryarithm }, '{"empty_unaryarithm":null}')];
  }
  const { OpPos, Op, Post, X, ...rest_unaryarithm } = unaryarithm;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnAritOperator(Op);
  const rPost = prepboolean(Post);
  const rX = prepArithmExpr(X);
  return [...doUnaryArithm(rOpPos, rOp, rPost, rX), comm({ rest_unaryarithm }, '{"rest_unaryarithm":{}}')];
}

// @fields = (
//             "    OpPos: I_Pos;",
//             "    Op: UnTestOperator;",
//             "    X: ITestExpr;"
//           );


// $name1 = "OpPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Op";
// $def = "UnTestOperator";
// $func = "";
// $kind = "";


// $name1 = "X";
// $def = "ITestExpr";
// $func = "";
// $kind = "";


// $name = "IUnaryTest";
// %fdef = (
//           "Op" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 0,
//                     "t" => "UnTestOperator"
//                   },
//           "OpPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "X" => {
//                    "a" => 0,
//                    "f" => 0,
//                    "n" => 0,
//                    "t" => "ITestExpr"
//                  }
//         );
// @fdef = (
//           "OpPos",
//           "Op",
//           "X"
//         );

function prepUnaryTest(unarytest: IUnaryTest | null): string[] {
  logg("prepUnaryTest");
  if (!unarytest) {
    return [comm({ empty_unarytest: unarytest }, '{"empty_unarytest":null}')];
  }
  const { OpPos, Op, X, ...rest_unarytest } = unarytest;
  const rOpPos = prepPos(OpPos);
  const rOp = prepUnTestOperator(Op);
  const rX = prepTestExpr(X);
  return [...doUnaryTest(rOpPos, rOp, rX), comm({ rest_unarytest }, '{"rest_unarytest":{}}')];
}

// @fields = (
//             "    WhilePos: I_Pos;",
//             "    DoPos: I_Pos;",
//             "    DonePos: I_Pos;",
//             "    Until: boolean;",
//             "    Cond: IStmtList | null;",
//             "    CondLast: IComment[];",
//             "    Do: IStmtList | null;",
//             "    DoLast: IComment[];"
//           );


// $name1 = "WhilePos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "DoPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "DonePos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Until";
// $def = "boolean";
// $func = "";
// $kind = "";


// $name1 = "Cond";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "CondLast";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name1 = "Do";
// $def = "IStmtList";
// $func = "";
// $kind = "| null";


// $name1 = "DoLast";
// $def = "IComment";
// $func = "";
// $kind = "[]";


// $name = "IWhileClause";
// %fdef = (
//           "Cond" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "IStmtList"
//                     },
//           "CondLast" => {
//                           "a" => 1,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "IComment"
//                         },
//           "Do" => {
//                     "a" => 0,
//                     "f" => 0,
//                     "n" => 1,
//                     "t" => "IStmtList"
//                   },
//           "DoLast" => {
//                         "a" => 1,
//                         "f" => 0,
//                         "n" => 0,
//                         "t" => "IComment"
//                       },
//           "DoPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "DonePos" => {
//                          "a" => 0,
//                          "f" => 0,
//                          "n" => 0,
//                          "t" => "I_Pos"
//                        },
//           "Until" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "boolean"
//                      },
//           "WhilePos" => {
//                           "a" => 0,
//                           "f" => 0,
//                           "n" => 0,
//                           "t" => "I_Pos"
//                         }
//         );
// @fdef = (
//           "WhilePos",
//           "DoPos",
//           "DonePos",
//           "Until",
//           "Cond",
//           "CondLast",
//           "Do",
//           "DoLast"
//         );

function prepWhileClause(whileclause: IWhileClause | null): string[] {
  logg("prepWhileClause");
  if (!whileclause) {
    return [comm({ empty_whileclause: whileclause }, '{"empty_whileclause":null}')];
  }
  const { WhilePos, DoPos, DonePos, Until, Cond, CondLast, Do, DoLast, ...rest_whileclause } = whileclause;
  const rWhilePos = prepPos(WhilePos);
  const rDoPos = prepPos(DoPos);
  const rDonePos = prepPos(DonePos);
  const rUntil = prepboolean(Until);
  const rCond = prepStmtList(Cond);
  const rCondLast = prepComments(CondLast);
  const rDo = prepStmtList(Do);
  const rDoLast = prepComments(DoLast);
  return [...doWhileClause(rWhilePos, rDoPos, rDonePos, rUntil, rCond, rCondLast, rDo, rDoLast), comm({ rest_whileclause }, '{"rest_whileclause":{}}')];
}

// @fields = (
//             "    Parts: IWordPart[];",
//             "    SplitBraces: () => IWord | null;",
//             "    Lit: () => string;"
//           );


// $name1 = "Parts";
// $def = "IWordPart";
// $func = "";
// $kind = "[]";


// $name1 = "SplitBraces";
// $def = "IWord";
// $func = "() => ";
// $kind = "| null";


// $name1 = "Lit";
// $def = "string";
// $func = "() => ";
// $kind = "";


// $name = "IWord";
// %fdef = (
//           "Lit" => {
//                      "a" => 0,
//                      "f" => 1,
//                      "n" => 0,
//                      "t" => "string"
//                    },
//           "Parts" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "IWordPart"
//                      },
//           "SplitBraces" => {
//                              "a" => 0,
//                              "f" => 1,
//                              "n" => 1,
//                              "t" => "IWord"
//                            }
//         );
// @fdef = (
//           "Parts",
//           "SplitBraces",
//           "Lit"
//         );

function prepWord(word: IWord | null): string[] {
  logg("prepWord");
  if (!word) {
    return [comm({ empty_word: word }, '{"empty_word":null}')];
  }
  const { Parts, SplitBraces, Lit, ...rest_word } = word;
  const rParts = prepWordParts(Parts);
  const rSplitBraces = prepWord(SplitBraces);
  const rLit = prepstring(Lit);
  return [...doWord(rParts, rSplitBraces, rLit), comm({ rest_word }, '{"rest_word":{}}')];
}

// @fields = (
//             "    Name: ILit | null;",
//             "    InPos: I_Pos;",
//             "    Items: IWord[] | null;"
//           );


// $name1 = "Name";
// $def = "ILit";
// $func = "";
// $kind = "| null";


// $name1 = "InPos";
// $def = "I_Pos";
// $func = "";
// $kind = "";


// $name1 = "Items";
// $def = "IWord";
// $func = "";
// $kind = "[] | null";


// $name = "IWordIter";
// %fdef = (
//           "InPos" => {
//                        "a" => 0,
//                        "f" => 0,
//                        "n" => 0,
//                        "t" => "I_Pos"
//                      },
//           "Items" => {
//                        "a" => 1,
//                        "f" => 0,
//                        "n" => 1,
//                        "t" => "IWord"
//                      },
//           "Name" => {
//                       "a" => 0,
//                       "f" => 0,
//                       "n" => 1,
//                       "t" => "ILit"
//                     }
//         );
// @fdef = (
//           "Name",
//           "InPos",
//           "Items"
//         );

function prepWordIter(worditer: IWordIter | null): string[] {
  logg("prepWordIter");
  if (!worditer) {
    return [comm({ empty_worditer: worditer }, '{"empty_worditer":null}')];
  }
  const { Name, InPos, Items, ...rest_worditer } = worditer;
  const rName = prepLit(Name);
  const rInPos = prepPos(InPos);
  const rItems = prepWords(Items);
  return [...doWordIter(rName, rInPos, rItems), comm({ rest_worditer }, '{"rest_worditer":{}}')];
}

// $what = "type";
// $name = "IWordPart";
// $body = "= ILit | ISglQuoted | IDblQuoted | IParamExp | ICmdSubst | IArithmExp | IProcSubst | IExtGlob | IBraceExp;";


// @alts = (
//           "ILit",
//           "ISglQuoted",
//           "IDblQuoted",
//           "IParamExp",
//           "ICmdSubst",
//           "IArithmExp",
//           "IProcSubst",
//           "IExtGlob",
//           "IBraceExp"
//         );

function prepWordPart(wordpart: IWordPart | null): string[] {
  logg("prepWordPart");
  if (!wordpart) {
    return [comm({ empty_wordpart: wordpart }, '{"empty_wordpart":null}')];
  }
  switch (syntax.NodeType(wordpart)) {
    case "Lit":
      return prepLit(wordpart as ILit);
    case "SglQuoted":
      return prepSglQuoted(wordpart as ISglQuoted);
    case "DblQuoted":
      return prepDblQuoted(wordpart as IDblQuoted);
    case "ParamExp":
      return prepParamExp(wordpart as IParamExp);
    case "CmdSubst":
      return prepCmdSubst(wordpart as ICmdSubst);
    case "ArithmExp":
      return prepArithmExp(wordpart as IArithmExp);
    case "ProcSubst":
      return prepProcSubst(wordpart as IProcSubst);
    case "ExtGlob":
      return prepExtGlob(wordpart as IExtGlob);
    case "BraceExp":
      return prepBraceExp(wordpart as IBraceExp);
    default:
      return [comm({ unknown_wordpart: wordpart })];
  }
}
function prepArithmExprs(arithmexprs: IArithmExpr[] | null): string[] {
  logg("prepArithmExprs");
  if (!arithmexprs) {
    return [comm({ empty_arithmexprs: arithmexprs }, '{"empty_arithmexprs":null}')];
  }
  const res: string[] = [];
  arithmexprs.forEach((arithmexpr) => {
    res.push(...prepArithmExpr(arithmexpr));
  });
  return res;
}
function prepArrayElems(arrayelems: IArrayElem[] | null): string[] {
  logg("prepArrayElems");
  if (!arrayelems) {
    return [comm({ empty_arrayelems: arrayelems }, '{"empty_arrayelems":null}')];
  }
  const res: string[] = [];
  arrayelems.forEach((arrayelem) => {
    res.push(...prepArrayElem(arrayelem));
  });
  return res;
}
function prepAssigns(assigns: IAssign[] | null): string[] {
  logg("prepAssigns");
  if (!assigns) {
    return [comm({ empty_assigns: assigns }, '{"empty_assigns":null}')];
  }
  const res: string[] = [];
  assigns.forEach((assign) => {
    res.push(...prepAssign(assign));
  });
  return res;
}
function prepCaseItems(caseitems: ICaseItem[] | null): string[] {
  logg("prepCaseItems");
  if (!caseitems) {
    return [comm({ empty_caseitems: caseitems }, '{"empty_caseitems":null}')];
  }
  const res: string[] = [];
  caseitems.forEach((caseitem) => {
    res.push(...prepCaseItem(caseitem));
  });
  return res;
}
function prepComments(comments: IComment[] | null): string[] {
  logg("prepComments");
  if (!comments) {
    return [comm({ empty_comments: comments }, '{"empty_comments":null}')];
  }
  const res: string[] = [];
  comments.forEach((comment) => {
    res.push(...prepComment(comment));
  });
  return res;
}
function prepRedirects(redirects: IRedirect[] | null): string[] {
  logg("prepRedirects");
  if (!redirects) {
    return [comm({ empty_redirects: redirects }, '{"empty_redirects":null}')];
  }
  const res: string[] = [];
  redirects.forEach((redirect) => {
    res.push(...prepRedirect(redirect));
  });
  return res;
}
function prepStmts(stmts: IStmt[] | null): string[] {
  logg("prepStmts");
  if (!stmts) {
    return [comm({ empty_stmts: stmts }, '{"empty_stmts":null}')];
  }
  const res: string[] = [];
  stmts.forEach((stmt) => {
    res.push(...prepStmt(stmt));
  });
  return res;
}
function prepWords(words: IWord[] | null): string[] {
  logg("prepWords");
  if (!words) {
    return [comm({ empty_words: words }, '{"empty_words":null}')];
  }
  const res: string[] = [];
  words.forEach((word) => {
    res.push(...prepWord(word));
  });
  return res;
}
function prepWordParts(wordparts: IWordPart[] | null): string[] {
  logg("prepWordParts");
  if (!wordparts) {
    return [comm({ empty_wordparts: wordparts }, '{"empty_wordparts":null}')];
  }
  const res: string[] = [];
  wordparts.forEach((wordpart) => {
    res.push(...prepWordPart(wordpart));
  });
  return res;
}
function prepBinAritOperator(binaritoperator: BinAritOperator | null): BinAritOperator | null {
  return binaritoperator;
}
function prepBinCmdOperator(bincmdoperator: BinCmdOperator | null): BinCmdOperator | null {
  return bincmdoperator;
}
function prepBinTestOperator(bintestoperator: BinTestOperator | null): BinTestOperator | null {
  return bintestoperator;
}
function prepCaseOperator(caseoperator: CaseOperator | null): CaseOperator | null {
  return caseoperator;
}
function prepGlobOperator(globoperator: GlobOperator | null): GlobOperator | null {
  return globoperator;
}
function prepExpansion(expansion: I_Expansion | null): I_Expansion | null {
  return expansion;
}
function prepPos(pos: I_Pos | null): I_Pos | null {
  return pos;
}
function prepParNamesOperator(parnamesoperator: ParNamesOperator | null): ParNamesOperator | null {
  return parnamesoperator;
}
function prepProcOperator(procoperator: ProcOperator | null): ProcOperator | null {
  return procoperator;
}
function prepRedirOperator(rediroperator: RedirOperator | null): RedirOperator | null {
  return rediroperator;
}
function prepUnAritOperator(unaritoperator: UnAritOperator | null): UnAritOperator | null {
  return unaritoperator;
}
function prepUnTestOperator(untestoperator: UnTestOperator | null): UnTestOperator | null {
  return untestoperator;
}
function prepboolean(boolean: boolean | null): boolean | null {
  return boolean;
}
function prepstring(string: string | null): string | null {
  return string;
}
