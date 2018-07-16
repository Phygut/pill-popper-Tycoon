import React, { Component } from 'react';
import './App.css';

class Cookie extends Component{
  render(){
    let cookieStyle={
      backgroundColor:'green',
      width:'250px',
      height:'250px',
      border:'4px black solid',
      display:'inline-block',
      lineHeight:'250px',
      textAlign:'center',
      color:'white',
      fontSize:24
    }
    return (
      <div style={cookieStyle} id='cookieBtn'>
        {this.props.cpc} /click
      </div>


    )
  }
}

class Counter extends Component{

  render(){
    let counterStyle={
      border:'2px black solid',
      fontSize:24,
      marginBottom:0

    }
    return   (<h1 style={counterStyle}>{this.props.text}: {this.props.currCount}</h1>)

  }
}

class ObjectCounterAndBuyButton extends Component{

  render(){

    let buttId=this.props.text+'Button'
    let buttonBuyStyle={
        backgroundColor: '#4CAF50', /* Green */
        color: 'white',
        padding:'2px',
        margin:'2px 3px 0px 3px ',
        textAlign: 'center',
        textDecoration: 'none',
        //display: "inline-block",
        border:'2px black solid',
        width:'100%',
        fontSize:24,
        height: 36

      }
    let buttonClass='ButtonDisabled'
    if(this.props.active&&buttonClass==='ButtonDisabled'){
      buttonClass='ButtonAbled'
      //console.log(`changed class of HelperButton to ButtonAbled`)
    }

    return   (
      <div>
        <button id={buttId} style={buttonBuyStyle} className={buttonClass}>
        {this.props.currCount} {this.props.text}s @{this.props.cost}/each
        </button>

      </div>
    )

  }
}

class Tier1 extends Component{

  render(){

    let autoClickerStyle={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: '#38a9e4',
      border: '3px solid red',
      display:'inline-block',
      marginBottom:'15px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'

    }

    return <div style={autoClickerStyle}>+1</div>
  }
}

class Tier2 extends Component{

  render(){
    let Tier2Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'blue',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier2Style}>+8</div>
  }
}

class Tier3 extends Component{

  render(){
    let Tier3Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'red',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier3Style}>+47</div>
  }
}

class Tier4 extends Component{

  render(){
    let Tier4Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'green',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier4Style}>+260</div>
  }
}

class Tier5 extends Component{

  render(){
    let Tier5Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'cyan',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier5Style}>+1,400</div>
  }
}

class Tier6 extends Component{

  render(){
    let Tier6Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'blue',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier6Style}>+7,800</div>
  }
}

class Tier7 extends Component{

  render(){
    let Tier7Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'blue',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier7Style}>+44,000</div>
  }
}

class Tier8 extends Component{

  render(){
    let Tier8Style={
      borderRadius: '50%',
      width: 100,
      height: 100,
      background: 'blue',
      border: '3px solid red',
      display:'inline-block',
      //margin:'2px 0px 5px 2px',
      textAlign:'center',
      lineHeight:'100px',
      color:'white'
    }

    return <div style={Tier8Style}>+260,000</div>
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currCookieCount: 0,
      currTier1: 0,
      currTier2:0,
      currTier3:0,
      currTier4:0,
      currTier5:0,
      currTier6:0,
      currTier7:0,
      currTier8:0
    };

    this.handleAddCookies = this.handleAddCookies.bind(this);
    this.getCpc=this.getCpc.bind(this);
    this.handleBuy=this.handleBuy.bind(this);
    this.autoRender=this.autoRender.bind(this);
    console.log('hi, started!');
}

  handleAddCookies(){

    let newCount=this.state.currCookieCount+this.getCpc();
    this.setState({
    currCookieCount: newCount
      })

    }
  getCpc(){
    let amt=
    1+(this.state.currTier1*1)
    +(this.state.currTier2*8)
    +(this.state.currTier3*47)
    +(this.state.currTier4*260)
    +(this.state.currTier5*1400)
    +(this.state.currTier6*7800)
    +(this.state.currTier7*44000)
    +(this.state.currTier8*260000);
    return amt;
  }


  handleBuy(tier,cost){
    let newCookieCount= this.state.currCookieCount-cost;
    let str='currTier'+tier
    let newtierCount= this.state[str]+1;
    if(newCookieCount>=0){
          this.setState(
        {
          currCookieCount: newCookieCount,
          [str]:newtierCount
        }
      )}
  }
autoRender= (tier,amount)=>{
    let arr=[];
    let elem;

    switch (tier) {
        case 1:elem=<Tier1/>;break;
        case 2:elem=<Tier2/>;break;
        case 3:elem=<Tier3/>;break;
        case 4:elem=<Tier4/>;break;
        case 5:elem=<Tier5/>;break;
        case 6:elem=<Tier6/>;break;
        case 7:elem=<Tier7/>;break;
        case 8:elem=<Tier8/>;break;
        default: console.log('switchstatement failed');break;
        }

    for (let i=0; i<amount;i++){
      arr.push(elem);
      if(arr.length>=10){break;}
    }

    return arr;
  }




  render() {
    let cc=this.state.currCookieCount;
    let tier1Render=this.autoRender(1,this.state.currTier1);
    let tier2Render=this.autoRender(2,this.state.currTier2);
    let tier3Render=this.autoRender(3,this.state.currTier3);
    let tier4Render=this.autoRender(4,this.state.currTier4);
    let tier5Render=this.autoRender(5,this.state.currTier5);
    let tier6Render=this.autoRender(6,this.state.currTier6);
    let tier7Render=this.autoRender(7,this.state.currTier7);
    let tier8Render=this.autoRender(8,this.state.currTier8);

    let aCPDStyle={
        overflow: 'hidden',
        maxHeight:'104px',
        padding:'5px',
        margin:'0px 0px 5px 0px'
      }

    let tier1Obj=<div key='1'><div style={aCPDStyle}>{tier1Render}</div>
    <a onClick={()=>this.handleBuy(1,15)}><ObjectCounterAndBuyButton  active={cc>=15} text= 'Tier1' currCount={this.state.currTier1} cost='15' />
    </a></div>
    let tier2Obj=<div key='2'><div style={aCPDStyle}>{tier2Render}</div>
    <a onClick={()=>this.handleBuy(2,100)}><ObjectCounterAndBuyButton  active={cc>=100} text= 'Tier2' currCount={this.state.currTier2} cost='100'/>
    </a></div>
    let tier3Obj=<div key='3'><div style={aCPDStyle}>{tier3Render}</div>
    <a onClick={()=>this.handleBuy(3,1100)}><ObjectCounterAndBuyButton  active={cc>=1100} text= 'Tier3' currCount={this.state.currTier3} cost='1100'/>
    </a></div>
    let tier4Obj=<div key='4'><div style={aCPDStyle}>{tier4Render}</div>
    <a onClick={()=>this.handleBuy(4,12000)}><ObjectCounterAndBuyButton  active={cc>=12000} text= 'Tier4' currCount={this.state.currTier4} cost='12000'/>
    </a></div>
    let tier5Obj=<div key='5'><div style={aCPDStyle}>{tier5Render}</div>
    <a onClick={()=>this.handleBuy(5,1400000)}><ObjectCounterAndBuyButton  active={cc>=1400000} text= 'Tier5' currCount={this.state.currTier5} cost='1400000' />
    </a></div>
    let tier6Obj=<div key='6'><div style={aCPDStyle}>{tier6Render}</div>
    <a onClick={()=>this.handleBuy(6,20000000)}><ObjectCounterAndBuyButton  active={cc>=20000000} text= 'Tier6' currCount={this.state.currTier6} cost='20000000'/>
    </a></div>
    let tier7Obj=<div key='7'><div style={aCPDStyle}>{tier7Render}</div>
    <a onClick={()=>this.handleBuy(7,330000000)}><ObjectCounterAndBuyButton  active={cc>=330000000} text= 'Tier7' currCount={this.state.currTier7} cost='330000000'/>
    </a></div>
    let tier8Obj=<div key='8'><div style={aCPDStyle}>{tier8Render}</div>
    <a onClick={()=>this.handleBuy(8,5100000000)}><ObjectCounterAndBuyButton  active={cc>=5100000000} text= 'Tier8' currCount={this.state.currTier8} cost='5100000000'/>
    </a></div>
    let cookieObj=<div><a onClick={() => this.handleAddCookies()}><Cookie cpc={this.getCpc()}/></a>
    <Counter text='Cookies' currCount={this.state.currCookieCount}/></div>

    let showTier=(num)=>{
      let str='currTier'+num
      let strP='currTier'+(num-1)

      let elemAm= this.state[str]
      let elemPr=this.state[strP]
      if(num===1){return true}
      if(elemAm>0||elemPr>0){return true}

    }
    let theToBeRendered=()=>{
      let arr=[];

        if(showTier(8)){arr.push(tier8Obj)}
        if(showTier(7)){arr.push(tier7Obj)}
        if(showTier(6)){arr.push(tier6Obj)}
        if(showTier(5)){arr.push(tier5Obj)}
        if(showTier(4)){arr.push(tier4Obj)}
        if(showTier(3)){arr.push(tier3Obj)}
        if(showTier(2)){arr.push(tier2Obj)}
        if(showTier(1)){arr.push(tier1Obj)}


      //console.log(arr);
      return arr;
      }

    return (
      <div className="App">
        {cookieObj}
        {theToBeRendered()}
        {/*{tier8Obj}
        {tier7Obj}
        {tier6Obj}
        {tier5Obj}
        {tier4Obj}
        {tier3Obj}
        {tier2Obj}
        {tier1Obj}*/}
        </div>
    );
  }
}

export default App;
