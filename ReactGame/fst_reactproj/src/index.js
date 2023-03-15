import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './index.css';




function isIn(arr, item){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === item){
            return true;
        }        
    }
    return false;
}
function IsWin(list){
    let combos = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]
    for(let i=0; i<combos.length; i++){
        let a = combos[i][0];
        let b = combos[i][1];
        let c = combos[i][2];
        if(list[a] === list[b] && list[a] === list[c] && list[a]!=null && list[b] != null && list[c] != null){
            return true;
        }
    }
    return false;
}

console.log(IsWin(['X', 'X', null, 'O', null, null, 'O', 'O',  null]));

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state =
            {
                squares: Array(9).fill(null),
                xNext: true,
                clicked: [],
            };
    }
    createSquare(i){

        return <Square value={this.state.squares[i]} onClick={()=>this.handleClick(i)}/>;
    }
    handleClick(i){
        if(!isIn(this.state.clicked, i)){
            if(!IsWin(this.state.squares))
            {
                let sq = this.state.squares;
                if(this.state.xNext === true){
                    sq[i] = 'X';
                    this.setState({squares: sq,
                        xNext: false
        
                    });
                }
                if(this.state.xNext === false){
                    sq[i]  = 'O';
                    this.setState({squares: sq,
                        xNext: true
            
                    });
                }
                this.state.clicked.push(i);
                console.log(this.state.squares);
            }
            else{alert(`${!this.state.xNext? 'X' : 'O'} is a Winner!`);}
            
        }
        
    }
    reset(){
        this.setState({
            squares: this.state.squares.map(element =>  element = null),
            clicked: this.state.clicked.map(element =>  element = null),
            xNext: true
        });
    }
   
    render(){
        return(
            <div class='board'>
                <div class = "container">
                {this.createSquare(0)}
                {this.createSquare(1)}
                {this.createSquare(2)}
                {this.createSquare(3)}
                {this.createSquare(4)}
                {this.createSquare(5)}
                {this.createSquare(6)}
                {this.createSquare(7)}
                {this.createSquare(8)} 
                
                </div>
                    <div class= 'control'>
                    <h4 class= 'control-res'>Turn for: {this.state.xNext? 'X' : 'O'}</h4>
                <button class='control-resetBtn' onClick={()=>this.reset()}>Reset</button>
                </div>
            </div>
            
        );
   
    }
}


class Square extends React.Component{
   render(){
    return(
        React.createElement('button',
        {
            className: 'square',
            onClick: this.props.onClick,
            
                
            
        },
         this.props.value)
    );
   }
}

class Game extends React.Component{ 
    render(){
        return(
           
                <Board />
       
            
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("playground"));
root.render(<Game />);