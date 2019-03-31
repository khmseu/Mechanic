import { logg } from "./logg";

// from https://github.com/mvdan/sh/blob/master/syntax/tokens.go
// The list of all possible tokens.
export enum Token {
  illegalTok,
  _EOF,
  _Newl,
  _Lit,
  _LitWord,
  _LitRedir,
  sglQuote,
  dblQuote,
  bckQuote,
  and,
  andAnd,
  orOr,
  or,
  orAnd,
  dollar,
  dollSglQuote,
  dollDblQuote,
  dollBrace,
  dollBrack,
  dollParen,
  dollDblParen,
  leftBrack,
  dblLeftBrack,
  leftParen,
  dblLeftParen,
  rightBrace,
  rightBrack,
  rightParen,
  dblRightParen,
  semicolon,
  dblSemicolon,
  semiAnd,
  dblSemiAnd,
  semiOr,
  exclMark,
  addAdd,
  subSub,
  star,
  power,
  equal,
  nequal,
  lequal,
  gequal,
  addAssgn,
  subAssgn,
  mulAssgn,
  quoAssgn,
  remAssgn,
  andAssgn,
  orAssgn,
  xorAssgn,
  shlAssgn,
  shrAssgn,
  rdrOut,
  appOut,
  rdrIn,
  rdrInOut,
  dplIn,
  dplOut,
  clbOut,
  hdoc,
  dashHdoc,
  wordHdoc,
  rdrAll,
  appAll,
  cmdIn,
  cmdOut,
  plus,
  colPlus,
  minus,
  colMinus,
  quest,
  colQuest,
  assgn,
  colAssgn,
  perc,
  dblPerc,
  hash,
  dblHash,
  caret,
  dblCaret,
  comma,
  dblComma,
  at,
  slash,
  dblSlash,
  colon,
  tsExists,
  tsRegFile,
  tsDirect,
  tsCharSp,
  tsBlckSp,
  tsNmPipe,
  tsSocket,
  tsSmbLink,
  tsSticky,
  tsGIDSet,
  tsUIDSet,
  tsGrpOwn,
  tsUsrOwn,
  tsModif,
  tsRead,
  tsWrite,
  tsExec,
  tsNoEmpty,
  tsFdTerm,
  tsEmpStr,
  tsNempStr,
  tsOptSet,
  tsVarSet,
  tsRefVar,
  tsReMatch,
  tsNewer,
  tsOlder,
  tsDevIno,
  tsEql,
  tsNeq,
  tsLeq,
  tsGeq,
  tsLss,
  tsGtr,
  globQuest,
  globStar,
  globPlus,
  globAt,
  globExcl,
}
const opcode: string[] = [];

opcode[Token.illegalTok] = " :illegalTok: ";

opcode[Token._EOF] = " :_EOF: ";
opcode[Token._Newl] = " :_Newl: ";
opcode[Token._Lit] = " :_Lit: ";
opcode[Token._LitWord] = " :_LitWord: ";
opcode[Token._LitRedir] = " :_LitRedir: ";

opcode[Token.sglQuote] = " ' ";
opcode[Token.dblQuote] = ' " ';
opcode[Token.bckQuote] = " ` ";

opcode[Token.and] = " & ";
opcode[Token.andAnd] = " && ";
opcode[Token.orOr] = " || ";
opcode[Token.or] = " | ";
opcode[Token.orAnd] = " |& ";

opcode[Token.dollar] = " $ ";
opcode[Token.dollSglQuote] = " $' ";
opcode[Token.dollDblQuote] = ' $" ';
opcode[Token.dollBrace] = " ${ ";
opcode[Token.dollBrack] = " $[ ";
opcode[Token.dollParen] = " $( ";
opcode[Token.dollDblParen] = " $(( ";
opcode[Token.leftBrack] = " [ ";
opcode[Token.dblLeftBrack] = " [[ ";
opcode[Token.leftParen] = " ( ";
opcode[Token.dblLeftParen] = " (( ";

opcode[Token.rightBrace] = " } ";
opcode[Token.rightBrack] = " ] ";
opcode[Token.rightParen] = " ) ";
opcode[Token.dblRightParen] = " )) ";
opcode[Token.semicolon] = " ;\n";

opcode[Token.dblSemicolon] = " ;;\n";
opcode[Token.semiAnd] = " ;& ";
opcode[Token.dblSemiAnd] = " ;;& ";
opcode[Token.semiOr] = " ;| ";

opcode[Token.exclMark] = " ! ";
opcode[Token.addAdd] = " ++ ";
opcode[Token.subSub] = " -- ";
opcode[Token.star] = " * ";
opcode[Token.power] = " ** ";
opcode[Token.equal] = " == ";
opcode[Token.nequal] = " != ";
opcode[Token.lequal] = " <= ";
opcode[Token.gequal] = " >= ";

opcode[Token.addAssgn] = " += ";
opcode[Token.subAssgn] = " -= ";
opcode[Token.mulAssgn] = " *= ";
opcode[Token.quoAssgn] = " /= ";
opcode[Token.remAssgn] = " %= ";
opcode[Token.andAssgn] = " &= ";
opcode[Token.orAssgn] = " |= ";
opcode[Token.xorAssgn] = " ^= ";
opcode[Token.shlAssgn] = " <<= ";
opcode[Token.shrAssgn] = " >>= ";

opcode[Token.rdrOut] = " > ";
opcode[Token.appOut] = " >> ";
opcode[Token.rdrIn] = " < ";
opcode[Token.rdrInOut] = " <> ";
opcode[Token.dplIn] = " <& ";
opcode[Token.dplOut] = " >& ";
opcode[Token.clbOut] = " >| ";
opcode[Token.hdoc] = " << ";
opcode[Token.dashHdoc] = " <<- ";
opcode[Token.wordHdoc] = " <<< ";
opcode[Token.rdrAll] = " &> ";
opcode[Token.appAll] = " &>> ";

opcode[Token.cmdIn] = " <( ";
opcode[Token.cmdOut] = " >( ";

opcode[Token.plus] = " + /*1*/";
opcode[Token.colPlus] = " :+ ";
opcode[Token.minus] = " - ";
opcode[Token.colMinus] = " :- ";
opcode[Token.quest] = " ? ";
opcode[Token.colQuest] = " :? ";
opcode[Token.assgn] = " = ";
opcode[Token.colAssgn] = " := ";
opcode[Token.perc] = " % ";
opcode[Token.dblPerc] = " %% ";
opcode[Token.hash] = " # ";
opcode[Token.dblHash] = " ## ";
opcode[Token.caret] = " ^ ";
opcode[Token.dblCaret] = " ^^ ";
opcode[Token.comma] = " , ";
opcode[Token.dblComma] = " ,, ";
opcode[Token.at] = " @ ";
opcode[Token.slash] = " / ";
opcode[Token.dblSlash] = " // ";
opcode[Token.colon] = " : ";

opcode[Token.tsExists] = " -e ";
opcode[Token.tsRegFile] = " -f ";
opcode[Token.tsDirect] = " -d ";
opcode[Token.tsCharSp] = " -c ";
opcode[Token.tsBlckSp] = " -b ";
opcode[Token.tsNmPipe] = " -p ";
opcode[Token.tsSocket] = " -S ";
opcode[Token.tsSmbLink] = " -L ";
opcode[Token.tsSticky] = " -k ";
opcode[Token.tsGIDSet] = " -g ";
opcode[Token.tsUIDSet] = " -u ";
opcode[Token.tsGrpOwn] = " -G ";
opcode[Token.tsUsrOwn] = " -O ";
opcode[Token.tsModif] = " -N ";
opcode[Token.tsRead] = " -r ";
opcode[Token.tsWrite] = " -w ";
opcode[Token.tsExec] = " -x ";
opcode[Token.tsNoEmpty] = " -s ";
opcode[Token.tsFdTerm] = " -t ";
opcode[Token.tsEmpStr] = " -z ";
opcode[Token.tsNempStr] = " -n ";
opcode[Token.tsOptSet] = " -o ";
opcode[Token.tsVarSet] = " -v ";
opcode[Token.tsRefVar] = " -R ";

opcode[Token.tsReMatch] = " =~ ";
opcode[Token.tsNewer] = " -nt ";
opcode[Token.tsOlder] = " -ot ";
opcode[Token.tsDevIno] = " -ef ";
opcode[Token.tsEql] = " -eq ";
opcode[Token.tsNeq] = " -ne ";
opcode[Token.tsLeq] = " -le ";
opcode[Token.tsGeq] = " -ge ";
opcode[Token.tsLss] = " -lt ";
opcode[Token.tsGtr] = " -gt ";

opcode[Token.globQuest] = " ?( ";
opcode[Token.globStar] = " *( ";
opcode[Token.globPlus] = " +( ";
opcode[Token.globAt] = " @( ";
opcode[Token.globExcl] = " !( ";

export function op(o: Token) {
  logg("op");
  return opcode[o] || "Op=" + o;
}
