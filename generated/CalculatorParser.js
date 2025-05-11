// Generated from c:/Users/Tomas/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,17,40,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,1,1,1,3,1,19,8,1,1,2,1,2,1,2,1,2,5,2,25,
8,2,10,2,12,2,28,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,
2,4,6,8,0,1,1,0,2,3,37,0,13,1,0,0,0,2,18,1,0,0,0,4,20,1,0,0,0,6,31,1,0,0,
0,8,37,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,
14,1,0,0,0,14,1,1,0,0,0,15,13,1,0,0,0,16,19,3,4,2,0,17,19,3,6,3,0,18,16,
1,0,0,0,18,17,1,0,0,0,19,3,1,0,0,0,20,21,5,1,0,0,21,22,3,8,4,0,22,26,5,15,
0,0,23,25,3,2,1,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,
0,27,29,1,0,0,0,28,26,1,0,0,0,29,30,5,16,0,0,30,5,1,0,0,0,31,32,5,4,0,0,
32,33,5,13,0,0,33,34,5,12,0,0,34,35,5,14,0,0,35,36,5,5,0,0,36,7,1,0,0,0,
37,38,7,0,0,0,38,9,1,0,0,0,3,13,18,26];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'mientras'", "'verdadero'", "'falso'", 
                            "'imprimir'", "';'", "'.'", "','", "'!'", "'?'", 
                            "':'", "'\"'", null, "'('", "')'", "'{'", "'}'" ];
    static symbolicNames = [ null, "WHILE", "TRUE", "FALSE", "PRINT", "SEMICOLON", 
                             "PUNTO", "COMA", "EXCL", "QUESTION", "DOUBLE", 
                             "COMILLA", "CADENA", "LPAREN", "RPAREN", "LLLAVE", 
                             "RLLAVE", "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 10;
	            this.instruccion();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 18;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 16;
	            this.bucle();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(CalculatorParser.WHILE);
	        this.state = 21;
	        this.condicion();
	        this.state = 22;
	        this.match(CalculatorParser.LLLAVE);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===4) {
	            this.state = 23;
	            this.instruccion();
	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
	        this.match(CalculatorParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(CalculatorParser.PRINT);
	        this.state = 32;
	        this.match(CalculatorParser.LPAREN);
	        this.state = 33;
	        this.match(CalculatorParser.CADENA);
	        this.state = 34;
	        this.match(CalculatorParser.RPAREN);
	        this.state = 35;
	        this.match(CalculatorParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.WHILE = 1;
CalculatorParser.TRUE = 2;
CalculatorParser.FALSE = 3;
CalculatorParser.PRINT = 4;
CalculatorParser.SEMICOLON = 5;
CalculatorParser.PUNTO = 6;
CalculatorParser.COMA = 7;
CalculatorParser.EXCL = 8;
CalculatorParser.QUESTION = 9;
CalculatorParser.DOUBLE = 10;
CalculatorParser.COMILLA = 11;
CalculatorParser.CADENA = 12;
CalculatorParser.LPAREN = 13;
CalculatorParser.RPAREN = 14;
CalculatorParser.LLLAVE = 15;
CalculatorParser.RLLAVE = 16;
CalculatorParser.WS = 17;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instruccion = 1;
CalculatorParser.RULE_bucle = 2;
CalculatorParser.RULE_salida = 3;
CalculatorParser.RULE_condicion = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_bucle;
    }

	WHILE() {
	    return this.getToken(CalculatorParser.WHILE, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LLLAVE() {
	    return this.getToken(CalculatorParser.LLLAVE, 0);
	};

	RLLAVE() {
	    return this.getToken(CalculatorParser.RLLAVE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salida;
    }

	PRINT() {
	    return this.getToken(CalculatorParser.PRINT, 0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(CalculatorParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	SEMICOLON() {
	    return this.getToken(CalculatorParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_condicion;
    }

	TRUE() {
	    return this.getToken(CalculatorParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(CalculatorParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.BucleContext = BucleContext; 
CalculatorParser.SalidaContext = SalidaContext; 
CalculatorParser.CondicionContext = CondicionContext; 
