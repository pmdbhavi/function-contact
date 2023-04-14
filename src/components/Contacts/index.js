import {List,Naming,Hr,Number,Button,Img,Container} from './styledComponents'

const Contacts=(props)=>{
    const {details,getToggle}=props
    const {id,name,mobileNo,isFavorite}=details

    const isToggle=()=>{
        getToggle(id)
    }

    return(
        <List>
            <Naming>{name}</Naming>
            <Hr/>
            <Container>
                <Number>{mobileNo}</Number>
                <Button type="button" onClick={isToggle}>
                    <Img src={isFavorite ? "https://assets.ccbp.in/frontend/react-js/star-filled-img.png":"https://assets.ccbp.in/frontend/react-js/star-outline-img.png"}/>
                </Button>
            </Container>
        </List>
    )
}

export default Contacts