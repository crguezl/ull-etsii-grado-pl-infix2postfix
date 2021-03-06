/* parser generated by jison 0.4.2 */
var calculator = (function() {
    var parser = {
        trace: function trace() {},
        yy: {},
        symbols_: {
            "error": 2,
            "prog": 3,
            "decs": 4,
            "statements": 5,
            "EOF": 6,
            "dec": 7,
            "DEF": 8,
            "functionname": 9,
            "optparameters": 10,
            "{": 11,
            "}": 12,
            "VAR": 13,
            "varlist": 14,
            ";": 15,
            "optinitialization": 16,
            ",": 17,
            "ID": 18,
            "=": 19,
            "e": 20,
            "parameters": 21,
            "(": 22,
            ")": 23,
            "s": 24,
            "IF": 25,
            "THEN": 26,
            "ELSE": 27,
            "PI": 28,
            "<=": 29,
            ">=": 30,
            "<": 31,
            ">": 32,
            "==": 33,
            "+": 34,
            "*": 35,
            "/": 36,
            "optarglist": 37,
            "NUMBER": 38,
            "E": 39,
            "arglist": 40,
            "$accept": 0,
            "$end": 1
        },
        terminals_: {
            2: "error",
            6: "EOF",
            8: "DEF",
            11: "{",
            12: "}",
            13: "VAR",
            15: ";",
            17: ",",
            18: "ID",
            19: "=",
            22: "(",
            23: ")",
            25: "IF",
            26: "THEN",
            27: "ELSE",
            28: "PI",
            29: "<=",
            30: ">=",
            31: "<",
            32: ">",
            33: "==",
            34: "+",
            35: "*",
            36: "/",
            38: "NUMBER",
            39: "E"
        },
        productions_: [0, [3, 3],
            [4, 0],
            [4, 2],
            [7, 7],
            [7, 3],
            [14, 1],
            [14, 3],
            [16, 1],
            [16, 3],
            [9, 1],
            [10, 0],
            [10, 1],
            [10, 3],
            [21, 1],
            [21, 3],
            [5, 1],
            [5, 3],
            [24, 0],
            [24, 1],
            [24, 4],
            [24, 6],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 3],
            [20, 4],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [37, 0],
            [37, 1],
            [40, 1],
            [40, 3]
        ],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
        /**/
        ) {

            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 2].join(',');

                    break;
                case 2:
                    this.$ = [];
                    break;
                case 3:
                    this.$ = $$[$0 - 1];
                    this.$.push($$[$0]);
                    break;
                case 4:

                    break;
                case 5:
                    this.$ = $$[$0 - 1].join(',');

                    break;
                case 6:
                    this.$ = [$$[$0]];
                    break;
                case 7:
                    this.$ = $$[$0 - 2];
                    this.$.push($$[$0]);
                    break;
                case 8:
                    symbolTable.vars[$$[$0]] = {
                        type: "VAR",
                        initial_value: null
                    };
                    this.$ = $$[$0];

                    break;
                case 9:
                    symbolTable.vars[$$[$0 - 2]] = {
                        type: "VAR",
                        initial_value: $$[$0]
                    };
                    this.$ = $$[$0 - 2];

                    break;
                case 10:

                    break;
                case 11:
                    this.$ = [];
                    break;
                case 13:
                    this.$ = $$[$0 - 1];
                    break;
                case 14:

                    break;
                case 15:

                    break;
                case 16:
                    this.$ = $$[$0] ? [$$[$0]] : [];
                    break;
                case 17:
                    this.$ = $$[$0 - 2];
                    if ($$[$0]) this.$.push($$[$0]);
                    console.log(this.$);

                    break;
                case 18:
                    this.$ = '';
                    break;
                case 20:
                    this.$ = translateIf($$[$0 - 2], $$[$0]);
                    break;
                case 21:
                    this.$ = translateIfElse($$[$0 - 4], $$[$0 - 2], $$[$0]);
                    break;
                case 22:

                    break;
                case 23:
                    throw new Error("Can't assign to constant 'π'");
                    break;
                case 24:
                    this.$ = binary($$[$0 - 2], $$[$0], "<=");
                    break;
                case 25:
                    this.$ = binary($$[$0 - 2], $$[$0], ">=");
                    break;
                case 26:
                    this.$ = binary($$[$0 - 2], $$[$0], "<");
                    break;
                case 27:
                    this.$ = binary($$[$0 - 2], $$[$0], ">");
                    break;
                case 28:
                    this.$ = binary($$[$0 - 2], $$[$0], "==");
                    break;
                case 29:
                    this.$ = binary($$[$0 - 2], $$[$0], "+");
                    break;
                case 30:
                    this.$ = binary($$[$0 - 2], $$[$0], "*");
                    break;
                case 31:
                    this.$ = binary($$[$0 - 2], $$[$0], "/");
                    break;
                case 32:
                    this.$ = $$[$0 - 1];
                    break;
                case 33:
                    break;
                case 34:
                    this.$ = unary($$[$0]);
                    break;
                case 35:
                    this.$ = unary(Math.E);
                    break;
                case 36:
                    this.$ = unary(Math.PI);
                    break;
                case 37:

                    break;
                case 38:
                    this.$ = [];
                    break;
                case 40:
                    this.$ = [$$[$0]];
                    break;
                case 41:
                    this.$ = $$[$0 - 2];
                    this.$.push($$[$0]);
                    break;
            }
        },
        table: [{
            3: 1,
            4: 2,
            6: [2, 2],
            8: [2, 2],
            13: [2, 2],
            15: [2, 2],
            18: [2, 2],
            22: [2, 2],
            25: [2, 2],
            28: [2, 2],
            38: [2, 2],
            39: [2, 2]
        }, {
            1: [3]
        }, {
            5: 3,
            6: [2, 18],
            7: 4,
            8: [1, 6],
            13: [1, 7],
            15: [2, 18],
            18: [1, 10],
            20: 8,
            22: [1, 12],
            24: 5,
            25: [1, 9],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            6: [1, 15],
            15: [1, 16]
        }, {
            6: [2, 3],
            8: [2, 3],
            12: [2, 3],
            13: [2, 3],
            15: [2, 3],
            18: [2, 3],
            22: [2, 3],
            25: [2, 3],
            28: [2, 3],
            38: [2, 3],
            39: [2, 3]
        }, {
            6: [2, 16],
            12: [2, 16],
            15: [2, 16]
        }, {
            9: 17,
            18: [1, 18]
        }, {
            14: 19,
            16: 20,
            18: [1, 21]
        }, {
            6: [2, 19],
            12: [2, 19],
            15: [2, 19],
            27: [2, 19],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            18: [1, 10],
            20: 30,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            6: [2, 37],
            12: [2, 37],
            15: [2, 37],
            17: [2, 37],
            19: [1, 31],
            22: [1, 32],
            23: [2, 37],
            26: [2, 37],
            27: [2, 37],
            29: [2, 37],
            30: [2, 37],
            31: [2, 37],
            32: [2, 37],
            33: [2, 37],
            34: [2, 37],
            35: [2, 37],
            36: [2, 37]
        }, {
            6: [2, 36],
            12: [2, 36],
            15: [2, 36],
            17: [2, 36],
            19: [1, 33],
            23: [2, 36],
            26: [2, 36],
            27: [2, 36],
            29: [2, 36],
            30: [2, 36],
            31: [2, 36],
            32: [2, 36],
            33: [2, 36],
            34: [2, 36],
            35: [2, 36],
            36: [2, 36]
        }, {
            18: [1, 10],
            20: 34,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            6: [2, 34],
            12: [2, 34],
            15: [2, 34],
            17: [2, 34],
            23: [2, 34],
            26: [2, 34],
            27: [2, 34],
            29: [2, 34],
            30: [2, 34],
            31: [2, 34],
            32: [2, 34],
            33: [2, 34],
            34: [2, 34],
            35: [2, 34],
            36: [2, 34]
        }, {
            6: [2, 35],
            12: [2, 35],
            15: [2, 35],
            17: [2, 35],
            23: [2, 35],
            26: [2, 35],
            27: [2, 35],
            29: [2, 35],
            30: [2, 35],
            31: [2, 35],
            32: [2, 35],
            33: [2, 35],
            34: [2, 35],
            35: [2, 35],
            36: [2, 35]
        }, {
            1: [2, 1]
        }, {
            6: [2, 18],
            12: [2, 18],
            15: [2, 18],
            18: [1, 10],
            20: 8,
            22: [1, 12],
            24: 35,
            25: [1, 9],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            10: 36,
            11: [2, 11],
            18: [1, 39],
            21: 37,
            22: [1, 38]
        }, {
            11: [2, 10],
            18: [2, 10],
            22: [2, 10]
        }, {
            15: [1, 40],
            17: [1, 41]
        }, {
            15: [2, 6],
            17: [2, 6]
        }, {
            15: [2, 8],
            17: [2, 8],
            19: [1, 42]
        }, {
            18: [1, 10],
            20: 43,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 44,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 45,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 46,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 47,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 48,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 49,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 50,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            26: [1, 51],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            18: [1, 10],
            20: 52,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            18: [1, 10],
            20: 55,
            22: [1, 12],
            23: [2, 38],
            28: [1, 11],
            37: 53,
            38: [1, 13],
            39: [1, 14],
            40: 54
        }, {
            18: [1, 10],
            20: 56,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            23: [1, 57],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 17],
            12: [2, 17],
            15: [2, 17]
        }, {
            11: [1, 58]
        }, {
            11: [2, 12],
            17: [1, 59]
        }, {
            18: [1, 39],
            21: 60
        }, {
            11: [2, 14],
            17: [2, 14],
            23: [2, 14]
        }, {
            6: [2, 5],
            8: [2, 5],
            12: [2, 5],
            13: [2, 5],
            15: [2, 5],
            18: [2, 5],
            22: [2, 5],
            25: [2, 5],
            28: [2, 5],
            38: [2, 5],
            39: [2, 5]
        }, {
            16: 61,
            18: [1, 21]
        }, {
            18: [1, 10],
            20: 62,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            6: [2, 24],
            12: [2, 24],
            15: [2, 24],
            17: [2, 24],
            23: [2, 24],
            26: [2, 24],
            27: [2, 24],
            29: [2, 24],
            30: [2, 24],
            31: [2, 24],
            32: [2, 24],
            33: [2, 24],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 25],
            12: [2, 25],
            15: [2, 25],
            17: [2, 25],
            23: [2, 25],
            26: [2, 25],
            27: [2, 25],
            29: [2, 25],
            30: [2, 25],
            31: [2, 25],
            32: [2, 25],
            33: [2, 25],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 26],
            12: [2, 26],
            15: [2, 26],
            17: [2, 26],
            23: [2, 26],
            26: [2, 26],
            27: [2, 26],
            29: [2, 26],
            30: [2, 26],
            31: [2, 26],
            32: [2, 26],
            33: [2, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 27],
            12: [2, 27],
            15: [2, 27],
            17: [2, 27],
            23: [2, 27],
            26: [2, 27],
            27: [2, 27],
            29: [2, 27],
            30: [2, 27],
            31: [2, 27],
            32: [2, 27],
            33: [2, 27],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 28],
            12: [2, 28],
            15: [2, 28],
            17: [2, 28],
            23: [2, 28],
            26: [2, 28],
            27: [2, 28],
            29: [2, 28],
            30: [2, 28],
            31: [2, 28],
            32: [2, 28],
            33: [2, 28],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 29],
            12: [2, 29],
            15: [2, 29],
            17: [2, 29],
            23: [2, 29],
            26: [2, 29],
            27: [2, 29],
            29: [2, 29],
            30: [2, 29],
            31: [2, 29],
            32: [2, 29],
            33: [2, 29],
            34: [2, 29],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 30],
            12: [2, 30],
            15: [2, 30],
            17: [2, 30],
            23: [2, 30],
            26: [2, 30],
            27: [2, 30],
            29: [2, 30],
            30: [2, 30],
            31: [2, 30],
            32: [2, 30],
            33: [2, 30],
            34: [2, 30],
            35: [2, 30],
            36: [2, 30]
        }, {
            6: [2, 31],
            12: [2, 31],
            15: [2, 31],
            17: [2, 31],
            23: [2, 31],
            26: [2, 31],
            27: [2, 31],
            29: [2, 31],
            30: [2, 31],
            31: [2, 31],
            32: [2, 31],
            33: [2, 31],
            34: [2, 31],
            35: [2, 31],
            36: [2, 31]
        }, {
            6: [2, 18],
            12: [2, 18],
            15: [2, 18],
            18: [1, 10],
            20: 8,
            22: [1, 12],
            24: 63,
            25: [1, 9],
            27: [2, 18],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            6: [2, 22],
            12: [2, 22],
            15: [2, 22],
            17: [2, 22],
            23: [2, 22],
            26: [2, 22],
            27: [2, 22],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            23: [1, 64]
        }, {
            17: [1, 65],
            23: [2, 39]
        }, {
            17: [2, 40],
            23: [2, 40],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 23],
            12: [2, 23],
            15: [2, 23],
            17: [2, 23],
            23: [2, 23],
            26: [2, 23],
            27: [2, 23],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 32],
            12: [2, 32],
            15: [2, 32],
            17: [2, 32],
            23: [2, 32],
            26: [2, 32],
            27: [2, 32],
            29: [2, 32],
            30: [2, 32],
            31: [2, 32],
            32: [2, 32],
            33: [2, 32],
            34: [2, 32],
            35: [2, 32],
            36: [2, 32]
        }, {
            4: 66,
            8: [2, 2],
            12: [2, 2],
            13: [2, 2],
            15: [2, 2],
            18: [2, 2],
            22: [2, 2],
            25: [2, 2],
            28: [2, 2],
            38: [2, 2],
            39: [2, 2]
        }, {
            18: [1, 67]
        }, {
            17: [1, 59],
            23: [1, 68]
        }, {
            15: [2, 7],
            17: [2, 7]
        }, {
            15: [2, 9],
            17: [2, 9],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            6: [2, 20],
            12: [2, 20],
            15: [2, 20],
            27: [1, 69]
        }, {
            6: [2, 33],
            12: [2, 33],
            15: [2, 33],
            17: [2, 33],
            23: [2, 33],
            26: [2, 33],
            27: [2, 33],
            29: [2, 33],
            30: [2, 33],
            31: [2, 33],
            32: [2, 33],
            33: [2, 33],
            34: [2, 33],
            35: [2, 33],
            36: [2, 33]
        }, {
            18: [1, 10],
            20: 70,
            22: [1, 12],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            5: 71,
            7: 4,
            8: [1, 6],
            12: [2, 18],
            13: [1, 7],
            15: [2, 18],
            18: [1, 10],
            20: 8,
            22: [1, 12],
            24: 5,
            25: [1, 9],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            11: [2, 15],
            17: [2, 15],
            23: [2, 15]
        }, {
            11: [2, 13]
        }, {
            6: [2, 18],
            12: [2, 18],
            15: [2, 18],
            18: [1, 10],
            20: 8,
            22: [1, 12],
            24: 72,
            25: [1, 9],
            27: [2, 18],
            28: [1, 11],
            38: [1, 13],
            39: [1, 14]
        }, {
            17: [2, 41],
            23: [2, 41],
            29: [1, 22],
            30: [1, 23],
            31: [1, 24],
            32: [1, 25],
            33: [1, 26],
            34: [1, 27],
            35: [1, 28],
            36: [1, 29]
        }, {
            12: [1, 73],
            15: [1, 16]
        }, {
            6: [2, 21],
            12: [2, 21],
            15: [2, 21],
            27: [2, 21]
        }, {
            6: [2, 4],
            8: [2, 4],
            12: [2, 4],
            13: [2, 4],
            15: [2, 4],
            18: [2, 4],
            22: [2, 4],
            25: [2, 4],
            28: [2, 4],
            38: [2, 4],
            39: [2, 4]
        }],
        defaultActions: {
            15: [2, 1],
            68: [2, 13]
        },
        parseError: function parseError(str, hash) {
            throw new Error(str);
        },
        parse: function parse(input) {
            var self = this,
                stack = [0],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = "",
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
            this.lexer.setInput(input);
            this.lexer.yy = this.yy;
            this.yy.lexer = this.lexer;
            this.yy.parser = this;
            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
            var yyloc = this.lexer.yylloc;
            lstack.push(yyloc);
            var ranges = this.lexer.options && this.lexer.options.ranges;
            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;

            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }

            function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") {
                    token = self.symbols_[token] || token;
                }
                return token;
            }
            var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
            while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                } else {
                    if (symbol === null || typeof symbol == "undefined") {
                        symbol = lex();
                    }
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                    var errStr = "";
                    if (!recovering) {
                        expected = [];
                        for (p in table[state])
                        if (this.terminals_[p] && p > 2) {
                            expected.push("'" + this.terminals_[p] + "'");
                        }
                        if (this.lexer.showPosition) {
                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                        } else {
                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                        }
                        this.parseError(errStr, {
                            text: this.lexer.match,
                            token: this.terminals_[symbol] || symbol,
                            line: this.lexer.yylineno,
                            loc: yyloc,
                            expected: expected
                        });
                    }
                }
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                }
                switch (action[0]) {
                    case 1:
                        stack.push(symbol);
                        vstack.push(this.lexer.yytext);
                        lstack.push(this.lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = this.lexer.yyleng;
                            yytext = this.lexer.yytext;
                            yylineno = this.lexer.yylineno;
                            yyloc = this.lexer.yylloc;
                            if (recovering > 0) recovering--;
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                        if (typeof r !== "undefined") {
                            return r;
                        }
                        if (len) {
                            stack = stack.slice(0, - 1 * len * 2);
                            vstack = vstack.slice(0, - 1 * len);
                            lstack = lstack.slice(0, - 1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        }
    };


    var symbolTables = [{
        name: '',
        father: null,
        vars: {}
    }];
    var scope = 0;
    var symbolTable = symbolTables[scope];

    function getScope() {

    }

    function getFormerScope() {}

    function makeNewScope(id) {}

    function findSymbol(x) {}

    var myCounter = 0;

    function newLabel(x) {
        return String(x) + myCounter++;
    }

    function translateIf(e, s) {
        var endif = newLabel('endif');
        return e + unary("jmpz " + endif, 'jump') + s + label(endif, 'jump');
    }

    function translateIfElse(e, s1, s2) {
        var lendif = newLabel('endif');
        var lelse = newLabel('else');
        return (e + unary("jmpz " + lelse, 'jump') + s1 + unary("jmp " + lendif, 'jump') + label(lelse, 'jump') + s2 + label(lendif, 'jump'));
    }

    function binary(x, y, op) {
        return x + " " + y + "\t" + op + "\n";
    }

    function unary(x, cl) {
        var pr = '';
        var po = '';
        x = x.replace(/\n+$/, '');
        if (cl) {
            pr = "<span class='" + cl + "'>";
            po = "</span>";
        }
        return "\t" + pr + x + po + "\n";
    }

    function label(x, cl) {
        var pr = '';
        var po = '';
        if (cl) {
            pr = "<span class='" + cl + "'>";
            po = "</span>";
        }
        return pr + ":" + x + po + "\n";
    }

    function functionCall(name, arglist) {}

    function findFuncName(n) {}

    function translateFunction(name, parameters, decs, statements) {

    }

    function initializations(symbolTable) {}

    /* generated by jison-lex 0.1.0 */
    var lexer = (function() {
        var lexer = {
            EOF: 1,
            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                } else {
                    throw new Error(str);
                }
            },
            setInput: function(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
            },
            input: function() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) this.yylloc.range[1]++;

                this._input = this._input.slice(1);
                return ch;
            },
            unput: function(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);

                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);

                if (lines.length - 1) this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;

                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };

                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                return this;
            },
            more: function() {
                this._more = true;
                return this;
            },
            less: function(n) {
                this.unput(this.match.slice(n));
            },
            pastInput: function() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },
            upcomingInput: function() {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },
            showPosition: function() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },
            next: function() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) this.done = true;

                var token,
                match,
                tempMatch,
                index,
                col,
                lines;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (!this.options.flex) break;
                    }
                }
                if (match) {
                    lines = match[0].match(/(?:\r\n?|\n).*/g);
                    if (lines) this.yylineno += lines.length;
                    this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                    };
                    this.yytext += match[0];
                    this.match += match[0];
                    this.matches = match;
                    this.yyleng = this.yytext.length;
                    if (this.options.ranges) {
                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
                    }
                    this._more = false;
                    this._input = this._input.slice(match[0].length);
                    this.matched += match[0];
                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                    if (this.done && this._input) this.done = false;
                    if (token) return token;
                    else return;
                }
                if (this._input === "") {
                    return this.EOF;
                } else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },
            lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') {
                    return r;
                } else {
                    return this.lex();
                }
            },
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },
            popState: function popState() {
                return this.conditionStack.pop();
            },
            _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
            },
            topState: function() {
                return this.conditionStack[this.conditionStack.length - 2];
            },
            pushState: function begin(condition) {
                this.begin(condition);
            },
            options: {},
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
            /**/
            ) {

                var reserved_words = {
                    VAR: 'VAR',
                    DEF: 'DEF',
                    IF: 'IF',
                    THEN: 'THEN',
                    ELSE: 'ELSE',
                    PI: 'PI'
                }

                    function idORrw(x) {
                        return (x.toUpperCase() in reserved_words) ? x.toUpperCase() : 'ID'
                    }


                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        /* skip whitespace and comments */
                        break;
                    case 1:
                        return 38
                        break;
                    case 2:
                        return idORrw(yy_.yytext)
                        break;
                    case 3:
                        return yy_.yytext;
                        /* exact string patterns must be placed in quotes
   http://zaach.github.com/jison/docs/#lexical-analysis
*/

                        break;
                    case 4:
                        return yy_.yytext;
                        break;
                    case 5:
                        return 6
                        break;
                    case 6:
                        return 'INVALID'
                        break;
                }
            },
            rules: [/^(?:\s+|#.*)/, /^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/, /^(?:\b[A-Za-z_]\w*\b)/, /^(?:[<>=!][=])/, /^(?:[-*+/^!%=(),;<>{}])/, /^(?:$)/, /^(?:.)/],
            conditions: {
                "INITIAL": {
                    "rules": [0, 1, 2, 3, 4, 5, 6],
                    "inclusive": true
                }
            }
        };
        return lexer;
    })();
    parser.lexer = lexer;

    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
    exports.parser = calculator;
    exports.Parser = calculator.Parser;
    exports.parse = function() {
        return calculator.parse.apply(calculator, arguments);
    };
    exports.main = function commonjsMain(args) {
        if (!args[1]) {
            console.log('Usage: ' + args[0] + ' FILE');
            process.exit(1);
        }
        var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
        return exports.parser.parse(source);
    };
    if (typeof module !== 'undefined' && require.main === module) {
        exports.main(process.argv.slice(1));
    }
}
