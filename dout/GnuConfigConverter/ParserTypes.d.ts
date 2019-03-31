/**
 * Copyright (c) 2019 Kai Henningsen <kai.extern+mechanic@gmail.com>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
export interface Istruct {
    $type: string;
    __internal_object__: {
        $val: any;
    };
}
export interface IArithmCmd extends INode {
    Left: I_Pos;
    Right: I_Pos;
    Unsigned: boolean;
    X: IArithmExpr;
}
export interface IArithmExp extends INode {
    Left: I_Pos;
    Right: I_Pos;
    Bracket: boolean;
    Unsigned: boolean;
    X: IArithmExpr;
}
export declare type IArithmExpr = IBinaryArithm | IUnaryArithm | IParenArithm | IWord;
export interface IArrayElem extends INode {
    Index: IArithmExpr;
    Value: IWord | null;
    Comments: IComment[];
}
export interface IArrayExpr extends INode {
    Lparen: I_Pos;
    Rparen: I_Pos;
    Elems: IArrayElem[] | null;
    Last: IComment[];
}
export interface IAssign extends INode {
    Append: boolean;
    Naked: boolean;
    Name: ILit | null;
    Index: IArithmExpr;
    Value: IWord | null;
    Array: IArrayExpr | null;
}
export interface IBinaryArithm extends INode {
    OpPos: I_Pos;
    Op: BinAritOperator;
    X: IArithmExpr;
    Y: IArithmExpr;
}
export interface IBinaryCmd extends INode {
    OpPos: I_Pos;
    Op: BinCmdOperator;
    X: IStmt;
    Y: IStmt;
}
export interface IBinaryTest extends INode {
    OpPos: I_Pos;
    Op: BinTestOperator;
    X: ITestExpr;
    Y: ITestExpr;
}
export interface IBlock extends INode {
    Lbrace: I_Pos;
    Rbrace: I_Pos;
    StmtList: IStmtList | null;
    Last: IComment[];
}
export interface IBraceExp extends INode {
    Sequence: boolean;
    Chars: boolean;
    Elems: IWord[] | null;
}
export interface ICStyleLoop extends INode {
    Lparen: I_Pos;
    Rparen: I_Pos;
    Init: IArithmExpr;
    Cond: IArithmExpr;
    Post: IArithmExpr;
}
export interface ICallExpr extends INode {
    Assigns: IAssign[] | null;
    Args: IWord[] | null;
}
export interface ICaseClause extends INode {
    Case: I_Pos;
    Esac: I_Pos;
    Word: IWord | null;
    Items: ICaseItem[] | null;
    Last: IComment[];
}
export interface ICaseItem extends INode {
    Op: CaseOperator;
    OpPos: I_Pos;
    Comments: IComment[];
    Patterns: IWord[] | null;
    StmtList: IStmtList | null;
    Last: IComment[];
}
export interface ICmdSubst extends INode {
    Left: I_Pos;
    Right: I_Pos;
    StmtList: IStmtList | null;
    Last: IComment[];
    TempFile: boolean;
    ReplyVar: boolean;
}
export declare type ICommand = ICallExpr | IIfClause | IWhileClause | IForClause | ICaseClause | IBlock | ISubshell | IBinaryCmd | IFuncDecl | IArithmCmd | ITestClause | IDeclClause | ILetClause | ITimeClause | ICoprocClause;
export interface IComment extends INode {
    Hash: I_Pos;
    Text: string;
}
export interface ICoprocClause extends INode {
    Coproc: I_Pos;
    Name: IWord | null;
    Stmt: IStmt | null;
}
export interface IDblQuoted extends INode {
    Position: I_Pos;
    Dollar: boolean;
    Parts: IWordPart[];
}
export interface IDeclClause extends INode {
    Variant: ILit | null;
    Opts: IWord[] | null;
    Assigns: IAssign[] | null;
}
export interface I_Expansion extends Istruct {
    Op: ParExpOperator;
    Word: IWord | null;
}
export interface IExtGlob extends INode {
    OpPos: I_Pos;
    Op: GlobOperator;
    Pattern: ILit | null;
}
export interface IFile extends INode {
    Name: string;
    StmtList: IStmtList | null;
    Last: IComment[];
}
export interface IForClause extends INode {
    ForPos: I_Pos;
    DoPos: I_Pos;
    DonePos: I_Pos;
    Select: boolean;
    Loop: ILoop;
    Do: IStmtList | null;
    DoLast: IComment[];
}
export interface IFuncDecl extends INode {
    Position: I_Pos;
    RsrvWord: boolean;
    Name: ILit | null;
    Body: IStmt | null;
}
export interface IIfClause extends INode {
    Position: I_Pos;
    ThenPos: I_Pos;
    FiPos: I_Pos;
    Cond: IStmtList | null;
    CondLast: IComment[];
    Then: IStmtList | null;
    ThenLast: IComment[];
    Else: IIfClause | null;
    Last: IComment[];
}
export interface ILetClause extends INode {
    Let: I_Pos;
    Exprs: IArithmExpr[];
}
export interface ILit extends INode {
    ValuePos: I_Pos;
    ValueEnd: I_Pos;
    Value: string;
}
export declare type ILoop = IWordIter | ICStyleLoop;
export interface INode extends Istruct {
    Pos: () => I_Pos;
    End: () => I_Pos;
}
export interface IParamExp extends INode {
    Dollar: I_Pos;
    Rbrace: I_Pos;
    Short: boolean;
    Excl: boolean;
    Length: boolean;
    Width: boolean;
    Param: ILit | null;
    Index: IArithmExpr;
    Slice: I_Slice | null;
    Repl: I_Replace | null;
    Names: ParNamesOperator;
    Exp: I_Expansion | null;
}
export interface IParenArithm extends INode {
    Lparen: I_Pos;
    Rparen: I_Pos;
    X: IArithmExpr;
}
export interface IParenTest extends INode {
    Lparen: I_Pos;
    Rparen: I_Pos;
    X: ITestExpr;
}
export interface I_Pos extends Istruct {
    After: (p2: I_Pos) => boolean;
    Col: () => number;
    IsValid: () => boolean;
    Line: () => number;
    Offset: () => number;
    String: () => string;
}
export interface IProcSubst extends INode {
    OpPos: I_Pos;
    Rparen: I_Pos;
    Op: ProcOperator;
    Stmts: IStmt[] | null;
    Last: IComment[];
}
export interface IRedirect extends INode {
    OpPos: I_Pos;
    Op: RedirOperator;
    N: ILit | null;
    Word: IWord | null;
    Hdoc: IWord | null;
}
export interface I_Replace extends Istruct {
    All: boolean;
    Orig: IWord | null;
    With: IWord | null;
}
export interface ISglQuoted extends INode {
    Left: I_Pos;
    Right: I_Pos;
    Dollar: boolean;
    Value: string;
}
export interface I_Slice extends Istruct {
    Offset: IArithmExpr;
    Length: IArithmExpr;
}
export interface IStmt extends INode {
    Comments: IComment[];
    Cmd: ICommand;
    Position: I_Pos;
    Semicolon: I_Pos;
    Negated: boolean;
    Background: boolean;
    Coprocess: boolean;
    Redirs: IRedirect[] | null;
}
export interface IStmtList extends INode {
    Stmts: IStmt[];
    Last: IComment[];
}
export interface ISubshell extends INode {
    Lparen: I_Pos;
    Rparen: I_Pos;
    StmtList: IStmtList | null;
    Last: IComment[];
}
export interface ITestClause extends INode {
    Left: I_Pos;
    Right: I_Pos;
    X: ITestExpr;
}
export declare type ITestExpr = IBinaryTest | IUnaryTest | IParenTest | IWord;
export interface ITimeClause extends INode {
    Time: I_Pos;
    PosixFormat: boolean;
    Stmt: IStmt | null;
}
export interface IUnaryArithm extends INode {
    OpPos: I_Pos;
    Op: UnAritOperator;
    Post: boolean;
    X: IArithmExpr;
}
export interface IUnaryTest extends INode {
    OpPos: I_Pos;
    Op: UnTestOperator;
    X: ITestExpr;
}
export interface IWhileClause extends INode {
    WhilePos: I_Pos;
    DoPos: I_Pos;
    DonePos: I_Pos;
    Until: boolean;
    Cond: IStmtList | null;
    CondLast: IComment[];
    Do: IStmtList | null;
    DoLast: IComment[];
}
export interface IWord extends INode {
    Parts: IWordPart[];
    SplitBraces: () => IWord | null;
    Lit: () => string;
}
export interface IWordIter extends INode {
    Name: ILit | null;
    InPos: I_Pos;
    Items: IWord[] | null;
}
export declare type IWordPart = ILit | ISglQuoted | IDblQuoted | IParamExp | ICmdSubst | IArithmExp | IProcSubst | IExtGlob | IBraceExp;
export declare enum RedirOperator {
    RdrOut = 53,
    AppOut = 54,
    RdrIn = 55,
    RdrInOut = 56,
    DplIn = 57,
    DplOut = 58,
    ClbOut = 59,
    Hdoc = 60,
    DashHdoc = 61,
    WordHdoc = 62,
    RdrAll = 63,
    AppAll = 64
}
export declare enum ProcOperator {
    CmdIn = 65,
    CmdOut = 66
}
export declare enum GlobOperator {
    GlobZeroOrOne = 121,
    GlobZeroOrMore = 122,
    GlobOneOrMore = 123,
    GlobOne = 124,
    GlobExcept = 125
}
export declare enum BinCmdOperator {
    AndStmt = 10,
    OrStmt = 11,
    Pipe = 12,
    PipeAll = 13
}
export declare enum CaseOperator {
    Break = 30,
    Fallthrough = 31,
    Resume = 32,
    ResumeKorn = 33
}
export declare enum ParNamesOperator {
    NamesPrefix = 37,
    NamesPrefixWords = 83
}
export declare enum ParExpOperator {
    AlternateUnset = 67,
    AlternateUnsetOrNull = 68,
    DefaultUnset = 69,
    DefaultUnsetOrNull = 70,
    ErrorUnset = 71,
    ErrorUnsetOrNull = 72,
    AssignUnset = 73,
    AssignUnsetOrNull = 74,
    RemSmallSuffix = 75,
    RemLargeSuffix = 76,
    RemSmallPrefix = 77,
    RemLargePrefix = 78,
    UpperFirst = 79,
    UpperAll = 80,
    LowerFirst = 81,
    LowerAll = 82,
    OtherParamOps = 83
}
export declare enum UnAritOperator {
    Not = 34,
    BitNegation = 35,
    Inc = 36,
    Dec = 37,
    Plus = 67,
    Minus = 69
}
export declare enum BinAritOperator {
    Add = 67,
    Sub = 69,
    Mul = 37,
    Quo = 84,
    Rem = 75,
    Pow = 38,
    Eql = 39,
    Gtr = 53,
    Lss = 55,
    Neq = 40,
    Leq = 41,
    Geq = 42,
    And = 9,
    Or = 12,
    Xor = 79,
    Shr = 54,
    Shl = 60,
    AndArit = 10,
    OrArit = 11,
    Comma = 81,
    TernQuest = 71,
    TernColon = 86,
    Assgn = 73,
    AddAssgn = 43,
    SubAssgn = 44,
    MulAssgn = 45,
    QuoAssgn = 46,
    RemAssgn = 47,
    AndAssgn = 48,
    OrAssgn = 49,
    XorAssgn = 50,
    ShlAssgn = 51,
    ShrAssgn = 52
}
export declare enum UnTestOperator {
    TsExists = 87,
    TsRegFile = 88,
    TsDirect = 89,
    TsCharSp = 90,
    TsBlckSp = 91,
    TsNmPipe = 92,
    TsSocket = 93,
    TsSmbLink = 94,
    TsSticky = 95,
    TsGIDSet = 96,
    TsUIDSet = 97,
    TsGrpOwn = 98,
    TsUsrOwn = 99,
    TsModif = 100,
    TsRead = 101,
    TsWrite = 102,
    TsExec = 103,
    TsNoEmpty = 104,
    TsFdTerm = 105,
    TsEmpStr = 106,
    TsNempStr = 107,
    TsOptSet = 108,
    TsVarSet = 109,
    TsRefVar = 110,
    TsNot = 34
}
export declare enum BinTestOperator {
    TsReMatch = 111,
    TsNewer = 112,
    TsOlder = 113,
    TsDevIno = 114,
    TsEql = 115,
    TsNeq = 116,
    TsLeq = 117,
    TsGeq = 118,
    TsLss = 119,
    TsGtr = 120,
    AndTest = 10,
    OrTest = 11,
    TsMatchShort = 73,
    TsMatch = 39,
    TsNoMatch = 40,
    TsBefore = 55,
    TsAfter = 53
}
//# sourceMappingURL=ParserTypes.d.ts.map