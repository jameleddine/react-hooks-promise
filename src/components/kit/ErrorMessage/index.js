import React from "react"
import styled from "styled-components"
import ErrorIcon from '@material-ui/icons/Error';

export default function ErrorMessage({children}) {
    return <Container><ErrorIcon color="secondary"/>{children}</Container>
}

const Container = styled.div`
background-color: #ffe7e9;
color : #fd3a4a;
display: flex;
padding: 20px;
`