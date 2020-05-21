import styled from 'styled-components'
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavStyled = styled.nav`
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      padding: 5px 0;
    }
  }
`

function Nav(){
    return (
        <NavStyled>
            <ul>
                <li>
                    <Icon name='tag'/>
                    <Link to="/tag">标签页</Link>
                </li>
                <li>
                    <Icon name='money'/>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Icon name='chart'/>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavStyled>
    )
}

export default Nav
