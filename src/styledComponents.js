import styled from 'styled-components'

export const MainCon=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-left:60px;
    min-height: 100vh;
`

export const Heading=styled.h1`
  font-weight: 500;
`

export const Form=styled.form`
  display:flex;
  flex-direction: row;
  align-items: center;
`

export const Text=styled.input`
  padding:15px;
  outline:none;
  border:1px solid #d7dfe9;
  background-color: transparent;
  margin:10px;
  width:30%;
`

export const MobileNo=styled.input`
  padding:15px;
  outline:none;
  border:1px solid #d7dfe9;
  background-color: transparent;
  margin:10px;
  width:40%;
`

export const Button=styled.button`
  background-color:#0ea5e9;
  color:white;
  padding:17px;
  border:none;
  border-radius: 10px;
  cursor: pointer;
`

export const Ul=styled.ul`
  display:flex;
  flex-direction: column;
  border:1px solid #d7dfe9;
  width:90%;
  padding-left:0px;
`

export const Li=styled.li`
  display:flex;
  flex-direction: row;
  background-color: #f1f5f9;
  width:100%;
`

export const Name=styled.p`
  width:20vw;
  font-weight: bold;
  margin:20px;
`

export const Mobile=styled.p`
  width: 30vw;
  font-weight: bold;
  margin:20px;
`

export const Hr=styled.hr`
  border:1px solid #d7dfe9;
  margin:0px;
`
