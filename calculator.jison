/* description: 
   Translates infix expressions to postfix. 
   Implements functions, function calls and scope analysis
*/

%{

var symbolTables = [{ name: '', father: null, vars: {} }];
var scope = 0; 
var symbolTable = symbolTables[scope];

function getScope() {
  
}

function getFormerScope() {
}

function makeNewScope(id) {
}

function findSymbol(x) {
}

var myCounter = 0;
function newLabel(x) {
  return String(x)+myCounter++;
}

function translateIf(e, s) {
  var endif = newLabel('endif');
  return e+unary("jmpz "+endif, 'jump')+s+label(endif, 'jump'); 
}

function translateIfElse(e, s1, s2) {
  var lendif = newLabel('endif');
  var lelse  = newLabel('else');
  return (e+
       unary("jmpz "+lelse,'jump')+
       s1+
       unary("jmp "+lendif,'jump')+
       label(lelse, 'jump')+
       s2+
       label(lendif, 'jump')); 
}

function binary(x,y,op) {
  return x+" "+y+"\t"+op+"\n";
}

function unary(x, cl) {
  var pr = ''; 
  var po = '';
  x = x.replace(/\n+$/,'');
  if (cl) {
    pr = "<span class='"+cl+"'>";
    po = "</span>";
  }
  return "\t"+pr+x+po+"\n";
}

function label(x, cl) {
  var pr = ''; 
  var po = '';
  if (cl) {
    pr = "<span class='"+cl+"'>";
    po = "</span>";
  }
  return pr+":"+x+po+"\n"; 
}

function functionCall(name, arglist) {
}
 
function findFuncName(n) {
}

function translateFunction(name, parameters, decs, statements) {

}

function initializations(symbolTable) {
}

%}

/* operator associations and precedence */

%token IF ELSE THEN DEF PI E ID NUMBER EOF

%nonassoc ID
%nonassoc "("

%left THEN
%right ELSE

%right "="
%left "<=" ">=" "==" "!=" "<" ">" 
%left "+" "-"
%left "*" "/"
%left "^"
%left "!"
%right "%"
%left UMINUS

%start prog

%% /* language grammar */
prog
    : decs statements EOF
        { 
        }
    ;

decs
    : /* empty */ { $$ = []; }
    | decs dec    { $$ = $1; $$.push($2); }
    ;

dec 
    : DEF functionname  optparameters "{" decs statements "}" 
                  { 
                  }
    | VAR varlist ';'   { 
                        }
    ;

varlist 
    : optinitialization                    { }
    | varlist ',' optinitialization        { }
    ;

optinitialization
    : ID          {
                  }
    | ID '=' e 
                  {
                  }
    ;

functionname
    : ID 
                  {
                  }
    ;

optparameters
    : /* empty */            { $$ = []; }
    | parameters
    | "(" parameters ")"     { $$ = $parameters; }
    ;
        
parameters
    : ID                      { 
                              }
    | parameters "," ID       { 
                              }
    ;

statements
    : s  
        { $$ = $1? [ $1 ] : []; }
    | statements ";" s
        { $$ = $1;
          if ($3) $$.push($3); 
          console.log($$);
        }
    ;

s
    : /* empty */ { $$ = ''; }
    | e
    | IF e THEN s
        { $$ = translateIf($e, $s); }
    | IF e THEN s ELSE s
        { $$ = translateIfElse($e, $s1, $s2); }
    ;

e
    : ID "=" e
        { 
        }
    | PI "=" e 
        { throw new Error("Can't assign to constant 'π'"); }
    | e "<=" e
        { $$ = binary($1,$3, "<=");}
    | e ">=" e
        { $$ = binary($1,$3, ">=");}
    | e "<" e
        { $$ = binary($1,$3, "<");}
    | e ">" e
        { $$ = binary($1,$3, ">");}
    | e "==" e
        { $$ = binary($1,$3, "==");}
    | e "+" e
        { $$ = binary($1,$3, "+");}
    | e "*" e
        { $$ = binary($1,$3, "*");}
    | e "/" e
        { $$ = binary($1,$3, "/");}
    | "(" e ")"
        { $$ = $2;}
    | ID "(" optarglist ")"
        { }
    | NUMBER
        { $$ = unary($NUMBER);}
    | E
        { $$ = unary(Math.E);}
    | PI
        { $$ = unary(Math.PI);}
    | ID 
        { 
        }
    ;

optarglist 
    : /* empty */  {  $$ = []; }
    | arglist      
    ;

arglist
    : e               { $$ = [ $e ]; }
    | arglist ',' e   { $$ = $arglist; $$.push($e); }
    ;
