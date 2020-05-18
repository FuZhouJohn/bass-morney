import styled from 'styled-components'
import {Link} from "react-router-dom";
import React from "react";

const NavStyled = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      flex-grow: 1;
      text-align: center;
      padding: 16px;
    }
  }
`

function Nav(){
    return (
        <NavStyled>
            <ul>
                <li>
                    <Link to="/tag">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavStyled>
    )
}

export default Nav
