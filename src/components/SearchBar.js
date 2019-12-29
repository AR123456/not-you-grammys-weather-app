import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { FormWrapper } from "../styles";

const SearchBar = props => {
    return (
        <FormWrapper inline onSubmit={props.handleFormSubmit}>
            <FormGroup>
                <Label for="search" hidden>Search by Location</Label>
                <Input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Search by address, city/state, or zip code" 
                    value={props.searchTerm}
                    onChange={props.handleInputChange}
                />
            </FormGroup>
            <Button color="info" onClick={props.handleFormSubmit}>Search</Button>
        </FormWrapper>
    )
}

export default SearchBar;