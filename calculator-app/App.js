import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Pressable, TouchableHighlight } from 'react-native';
import React, {useState, useRef, useEffect} from 'react'
import NumberPad from './comp/NumberPad';
import OperandPad from './comp/OperandPad';
import SpecOperandPad from './comp/SpecOperandPad';

// Global Attributes

export default function App() {
  // Attribute(s) || Hook(s)
  const [displayExp, setDisplayExp] = useState(['0']);    // ( Display Variable )
  const [equationExp, setEquationExp] = useState([`0`]);  // ( Display Variable )

  const opTracker = useRef([]);                           // ( Reference Variable )
  const expression = useRef(['0']);                       // ( Reference Variable )
  const equation = useRef('0');                           // ( Reference Variable )
  const padCount = useRef(0);                             // ( Reference Variable )
  const opPadCount = useRef(0);                           // ( Reference Variable )

  useEffect(() => {
    console.log(`Current PEMDAS: \t ${opTracker.current}`);
    console.log(`Current D. Expression: \t ${displayExp} \t Current Display Length: \t ${displayExp.length}`);
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }, [])

  // Function(s)
  /**  [ BASIC OPERAND(S) ] **/
  const add = () => {
    opPadCount.current++;

    // new expression
    let newExp = [expression.current, '0'];
    expression.current = newExp;

    if(opTracker.current.length === 0){
      opTracker.current[0] = "add"
    } else {
      let newArray = ["add"];
      opTracker.current = newArray;
    }

    let operation = opTracker.current[0];
    let opString = "";
    operation == 'divide' ? opString = '/' : operation == 'multiply' ? opString = 'x' : operation == 'add' ? opString = '+' : operation == 'subtract' ? opString = '-': opString = 'Nan';

    let tempEquation = `${expression.current[0]} ${opString} `;
    setEquationExp([tempEquation]);

    // If pad count > 0 (pressed /) and you havent entered the second expression (display[1] is empty) -> pause until you enter second expression

    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }
  const subtract = () => {
    // Iterate through expression
    opPadCount.current++;

    // new expression
    let newExp = [expression.current, '0']
    expression.current = newExp;

    if(opTracker.current.length === 0){
      opTracker.current[0] = "subtract"
    } else {
      let newArray = ["subtract"];
      opTracker.current = newArray;
    }
    // If pad count > 0 (pressed /) and you havent entered the second expression (display[1] is empty) -> pause until you enter second expression

    let operation = opTracker.current[0];
    let opString = "";
    operation == 'divide' ? opString = '/' : operation == 'multiply' ? opString = 'x' : operation == 'add' ? opString = '+' : operation == 'subtract' ? opString = '-': opString = 'Nan';

    let tempEquation = `${expression.current[0]} ${opString} `;
    setEquationExp([tempEquation]);

    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }
  const multiply = () => {
    // Iterate through expression
    opPadCount.current++;

    // new expression
    let newExp = [expression.current, '0']
    expression.current = newExp;

    // operation array 
    if(opTracker.current.length === 0){
      opTracker.current[0] = "multiply"
    } else {
      let newArray = ["multiply"];
      opTracker.current = newArray;
    }
    // If pad count > 0 (pressed /) and you havent entered the second expression (display[1] is empty) -> pause until you enter second expression

    let operation = opTracker.current[0];
    let opString = "";
    operation == 'divide' ? opString = '/' : operation == 'multiply' ? opString = 'x' : operation == 'add' ? opString = '+' : operation == 'subtract' ? opString = '-': opString = 'Nan';

    let tempEquation = `${expression.current[0]} ${opString} `;
    setEquationExp([tempEquation]);

    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }
  const divide = () => {
    // Iterate through expression
    opPadCount.current++;

    // new expression
    let newExp = [expression.current, '0']
    expression.current = newExp;

    if(opTracker.current.length === 0){
      opTracker.current[0] = "divide"
    } else {
      let newArray = ["divide"];
      opTracker.current = newArray;
    }
    // If pad count > 0 (pressed /) and you havent entered the second expression (display[1] is empty) -> pause until you enter second expression

    let operation = opTracker.current[0];
    let opString = "";
    operation == 'divide' ? opString = '/' : operation == 'multiply' ? opString = 'x' : operation == 'add' ? opString = '+' : operation == 'subtract' ? opString = '-': opString = 'Nan';

    equation.current = `${expression.current[0]} ${opString} `;
    setEquationExp(equation.current);

    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }
  const equals = () => {
    const num1 = parseFloat(expression.current[0], 10);
    const num2 = parseFloat(expression.current[1], 10);
    const operation = opTracker.current[0];

    let sum = 0;
    let opString = "";
    operation == 'divide' ? opString = '/' : operation == 'multiply' ? opString = 'x' : operation == 'add' ? opString = '+' : operation == 'subtract' ? opString = '-': opString = 'Nan'  
    
    switch (opString) {
      case 'x':
        sum = num1 * num2;
        expression.current[0] = [sum.toString()];
        setDisplayExp([sum.toString()]);
        expression.current = expression.current.shift();
        equation.current = `${expression.current}`
        setEquationExp(equation.current)
        opTracker.current = [''];
        opPadCount.current--;
        console.log(`Current PEMDAS: \t ${opTracker.current}`);
        break;
      case '/': 
        sum = num1 / num2;
        expression.current[0] = [sum.toString()];
        setDisplayExp([sum.toString()]);
        expression.current = expression.current.shift();
        equation.current = `${expression.current}`
        setEquationExp(equation.current)
        opTracker.current = opTracker.current.shift();
        opPadCount.current--;
        break;
      case '+':
        sum = num1 + num2;
        expression.current = [sum.toString()];
        setDisplayExp([sum.toString()]);
        expression.current = expression.current.shift();
        equation.current = `${expression.current}`
        setEquationExp(equation.current)       
        opTracker.current = opTracker.current.shift();
        opPadCount.current--;
        break;
      case '-':
        sum = num1 - num2;
        expression.current = [sum.toString()];
        setDisplayExp([sum.toString()]);
        expression.current = expression.current.shift();
        equation.current = `${expression.current}`
        setEquationExp(equation.current)
        opTracker.current = opTracker.current.shift();
        opPadCount.current--;
        break;
      default:
        sum = NaN;
        break;
    }
    
    console.log(`Current Calculation: \t ${num1} ${opString} ${num2} = ${sum}`);
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  }

  /**  [ SPECIAL OPERAND(S) ] **/
  function invert(string){  
    const num = parseFloat(string, 10);
    const result = [ `${num * (-1)}`];
    expression.current[expression.current.length - 1] = result[0].toString();
    setDisplayExp(result);
    setEquationExp(result);
    // ( Debug )
    // console.log(`Current Expression: \t ${result[0]} \t Current PadCount: \t ${padCount.current}`);
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  } // ( Complete )
  function reset(){
    expression.current = [`0`]; // get rid of this line for a potential clear
    setDisplayExp([`0`]);
    setEquationExp([`0`]);
    padCount.current = 0;
    opPadCount.current = 0;
    opTracker.current = [];
    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
  } // ( Complete )
  function clear(){
    if( expression.current[0].length <= 1 || expression.current.length === 1){
      // Just call reset() function
      reset();
    }
    setDisplayExp(prev => prev = [`0`]);
    setEquationExp(prev => prev = ['0']);     // clear current number

     // ( Debug )
     console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);

  } // ( In Progress... )
  function percentage(string){
    const num = parseFloat(string, 10);         // 1 -> 0.001
    const result = [`` + (num / 100)];
    expression.current = result[0];
    setDisplayExp(result);
    setEquationExp(result);
    // ( Debug )
    console.log(result)
  } // ( Complete )


  function updateExpression(string){
    const expLength = expression.current.length;                          // Keep
    const strNum = expression.current[0].length === 1 && expression.current[0] === '0' ? string : expression.current + string;

    const num = parseFloat(string, 10);               // Keep

    // ( Length Based ) 
    if(expression.current.length < 2 || opPadCount < 1) {                 // If length is 1 setDisplay Expression to expression.current[0]
      expression.current[0] = [ strNum ];
      equation.current = `${strNum}`;
      setDisplayExp([expression.current[0]]);
      setEquationExp([equation.current]);
      padCount.current++;
    } else {                                                              // Else setDisplay Expression to expression.current[1] 
      let tempNum = parseFloat(expression.current[expLength -1], 10);
      let newStr = tempNum.toString() + string;

      expression.current[expLength - 1] = [ newStr ];
      setDisplayExp([expression.current[expLength - 1]]);
      // let tempA = `${parseFloat(string, 10)}`
      // let tempB = equation.current;
      // equation.current += ` ${parseFloat(expression.current[expLength - 1])}`
      setEquationExp(prev => prev += `${parseFloat(string, 10)}`);
      padCount.current++;
      console.log(`Second Expression: \t ${expression.current[expLength - 1]}`)
      console.log(`Current Equation: \t ${equation.current}`)
    }

    // ( Debug )
    console.log(`Current Expression: \t ${expression.current} \t Current Expression Length: \t ${expression.current.length} \t Current Operand Pad Count: \t ${opPadCount.current} \t Current Pad Count: \t ${padCount.current}`);
    console.log(`Current PEMDAS: \t ${opTracker.current}`);
  } // ( Complete )


  // JSX
  return (
    <SafeAreaView style={styles.container}>
      {/* Module 1 : Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Calculator.dev</Text>
      </View>

      {/* Module 2 : Calculator (Input) */}
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.displayNum}>{ displayExp[0] }</Text>
        </View>
        <View style={styles.equation}>
          <Text style={styles.equationNums}>{equationExp}</Text>
        </View>
      </View>

      {/* Module 3 : Calculator (Number Pad) */}
      <View style={{padding: 30, gap: 20}}>
        <View style={{flexDirection: "row", justifyContent: "space-between",}}>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}}  onPress={() => {reset()}}>
            <SpecOperandPad>AC</SpecOperandPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}}  onPress={() => {clear()}}>
            <SpecOperandPad>C</SpecOperandPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}}  onPress={() => {percentage(displayExp[0])}}>
            <SpecOperandPad>%</SpecOperandPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}} onPress={() => {invert(displayExp[0])}}>
            <SpecOperandPad>𝐢</SpecOperandPad>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", }}>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('1') }}>
            <NumberPad>1</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('2') }}>
            <NumberPad>2</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('3') }}>
            <NumberPad>3</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}} onPress={() => {multiply()}}>
            <OperandPad>×</OperandPad>
          </TouchableHighlight>
          {/* <Button title="x" onPress={()=> {multiply()}}/> */}
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", }}>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('4') }}>
            <NumberPad>4</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('5') }}>
            <NumberPad>5</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('6') }}>
            <NumberPad>6</NumberPad>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}} onPress={() => {subtract()}}>
            <OperandPad>-</OperandPad>
          </TouchableHighlight>
          {/* <Button title="-" onPress={() => {subtract()}}/> */}
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", }}>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('7') }}>
            <NumberPad>7</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('8') }}>
            <NumberPad>8</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('9') }}>
            <NumberPad>9</NumberPad>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}} onPress={() => {add()}}>
            <OperandPad>+</OperandPad>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-between", }}>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('0') }}>
            <NumberPad>0</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { updateExpression('.') }}>
            <NumberPad>.</NumberPad>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#fff" style={{borderRadius: 20}} onPress={()=> { equals() }}>
            <NumberPad style={{ backgroundColor: "white"}}>=</NumberPad>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="#bb1e1e" style={{borderRadius: 20}} onPress={() => {divide()}}>
            <OperandPad>÷</OperandPad>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    borderColor: "#a02222",
    borderWidth: 3,
    borderRadius: 40
  },
  titleContainer: {
    padding: 25,
    alignItems: "center",
    marginBottom: 30
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: "#222222",
    color: "#a02222"
  },
  inputContainer: {
    borderColor: "#000",
    marginBottom: 30,
  },
  input: {
    width: "auto",
    height: 100,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 20
  }, 
  displayNum: {
    fontSize: 70,
    fontWeight: "normal",
    color: "white"
  },
  numberPadContainer: {
    display: "flex",
    flexDirection: "row",
    width: "auto",
    borderWidth: 2,
    alignItems: "baseline",
    // justifyContent: "space-between"
  },
  equation: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row-reverse",
    padding: 5
  },
  equationNums: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#222222",
    marginRight: 20
  }
});
