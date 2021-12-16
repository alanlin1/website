import React from "react"
import styled from "styled-components"
import { theme, S } from "styles"

import { Button } from "components"

const Calculator = ({ ...props }) => {
  // console.log("calc", props)
  return (
    <StyledCalculator>
      <Title>{props.data.title}</Title>
      <Selected className="selected">£100 000</Selected>
      <div className="range">
        <div className="top">
          <div>{props.data.min}</div>
          <div>{props.data.max}</div>
        </div>

        <input className="slider" type="range" min="1" max="100" step="1" />
      </div>

      <div className="select">
        <label className="label" htmlFor="reasons">
          {props.data.select.title}
        </label>
        <div className="dropdown">
          <select name="reasons" id="reasons">
            {props.data.select.dropdown.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BtnWrapper>
        <Button btnUrl="/" variant="primary" size="large">
          Check eligibility
        </Button>
      </BtnWrapper>
    </StyledCalculator>
  )
}

export default Calculator

const Title = styled(S.H6)`
  font-size: 18px;
  font-weight: 400;
`
const Selected = styled(S.H5)`
  /* font-size: 24px; */
  /* font-weight: 400; */
  margin-top: 8px;
  margin-bottom: 24px;
`
const BtnWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  text-align: center;
  a {
    width: 100%;
  }
`

const StyledCalculator = styled.div`
  background-color: #fff;
  box-shadow: ${theme.shadows.boxShadow};
  border-radius: 10px;
  /*padding: 32px 24px;*/
  padding: 64px 70px;
  /* margin: 24px -16px; */
  .slider {
    width: 100%;
    height: 20px;

    &:hover {
    }
    &::-webkit-slider-runnable-track {
    }
    &::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }

  .range {
    width: 100%;
    margin-bottom: 24px;
    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 4px;
    }
  }
  .select {
    .label {
      display: inline-block;
      margin-bottom: 8px;
    }
    .dropdown {
      width: 100%;
      select {
        width: 100%;
        /* padding: 12px 16px; */
        padding-top: 12px;
        padding-bottom: 12px;
        padding-left: 16px;
        color: inherit;
        background-color: #fff;
        border: 1px solid #bbc7d6;
        border-radius: 4px;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
      }
    }
  }
`
