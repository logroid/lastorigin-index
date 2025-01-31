import React from 'react';
import Tooltip from './Tooltip.js';

class Info extends React.Component
{
  state = {
    "isStatExpanded": false
  }

  toggleExpandStat = () =>
  {
    this.setState((prevstate) => ({ ...prevstate, "isStatExpanded": prevstate.isStatExpanded ^ true }));
  };

  calcLvlValue = (data, lvl) =>
  {
    return Math.floor(data.base + data.increment * (lvl - 1));
  };

  handleLvlPlus = () =>
  {
    this.props.onLvlChange('+');
  };

  handleLvlMinus = () =>
  {
    this.props.onLvlChange('-');
  };

  handleLvlChange = (e) =>
  {
    this.props.onLvlChange(e.target.value);
  };

  render()
  {
    const data = this.props.data;
    const enemyData = data.enemyData;
    const lvl = data.lvl;
    return (
      <div className="info-container">
        <div className="image"><img src={"images/profile/" + enemyData.img + ".png"} alt={enemyData.img} /></div>
        <div className="type">
          <h4 id="type">{enemyData.type}</h4>
        </div>
        <div className="name">
          <h2 id="name">{enemyData.name}</h2>
        </div>
        <div className="LVL">
          <button className="lvl-change lvl-minus" onClick={this.handleLvlMinus}><i className="material-icons">remove</i></button>
          <div>
            <input className="lvl-header" type="text" value="Lv." readOnly></input>
            <div className="tooltip">
              <input className="lvl-input" type="text" value={lvl} onChange={this.handleLvlChange}></input>
              <div className="tooltip-innertext tooltip-innertext-bottom">값을 직접 입력할 수 있습니다</div>
            </div>
          </div>
          <button className="lvl-change lvl-plus" onClick={this.handleLvlPlus}><i className="material-icons">add</i></button>
        </div>
        <div className="spec-wrap">
          <div className="spec-item spec-item-header" id="HP"><img src="images/icon_HP2.png" alt="HP Icon" /><div>HP</div></div><div className="spec-item" id="HP"><Tooltip lvlpool={data.lvlpool} tooltipdata={{...enemyData.HP, "increment":Math.floor(enemyData.HP.increment)}} isStatExpanded={this.state.isStatExpanded}><span className="tooltip-text" onClick={this.toggleExpandStat}>{this.calcLvlValue({...enemyData.HP, "increment":Math.floor(enemyData.HP.increment)}, lvl)}</span></Tooltip></div>
          <div className="spec-item spec-item-header"></div><div className="spec-item" ></div>
          <div className="spec-item spec-item-header"><img src="images/icon_ATK2.png" alt="ATK Icon" /><div>攻撃力</div></div><div className="spec-item" id="ATK"><Tooltip lvlpool={data.lvlpool} tooltipdata={enemyData.ATK} isStatExpanded={this.state.isStatExpanded}><span className="tooltip-text" onClick={this.toggleExpandStat}>{this.calcLvlValue(enemyData.ATK, lvl)}</span></Tooltip></div>
          <div className="spec-item spec-item-header"><img src="images/icon_HIT2.png" alt="HIT Icon" /><div>命中率</div></div><div className="spec-item" id="HIT">{enemyData.HIT} %</div>
          <div className="spec-item spec-item-header"><img src="images/icon_CRT2.png" alt="CRT Icon" /><div>クリティカル</div></div><div className="spec-item" id="CRT">{enemyData.CRT} %</div>
          <div className="spec-item spec-item-header"><img src="images/icon_DEF2.png" alt="DEF Icon" /><div>防御力</div></div><div className="spec-item" id="DEF"><Tooltip lvlpool={data.lvlpool} tooltipdata={enemyData.DEF} isStatExpanded={this.state.isStatExpanded}><span className="tooltip-text" onClick={this.toggleExpandStat}>{this.calcLvlValue(enemyData.DEF, lvl)}</span></Tooltip></div>
          <div className="spec-item spec-item-header"><img src="images/icon_DOD2.png" alt="DOD Icon" /><div>回避率</div></div><div className="spec-item" id="DOD">{enemyData.DOD} %</div>
          <div className="spec-item spec-item-header"><img src="images/icon_AGI.png" alt="AGI Icon" /><div>行動力</div></div><div className="spec-item" id="AGI">{enemyData.AGI}</div>
          <div className="spec-item resist-wrap">
            <div className="spec-item resist resist-header">属性抵抗</div>
            <div className="spec-item resist" id="fire"><img className="icon-attr" src="images/fire.png" alt="fireicon" /> {enemyData.resist[0]} %</div>
            <div className="spec-item resist" id="ice"><img className="icon-attr" src="images/ice.png" alt="iceicon" /> {enemyData.resist[1]} %</div>
            <div className="spec-item resist" id="electric"><img className="icon-attr" src="images/electric.png" alt="electricicon" /> {enemyData.resist[2]} %</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;