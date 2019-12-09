import React from 'react';
import {Select, MenuItem, InputLabel, Checkbox, FormControlLabel, Button} from '@material-ui/core';
import {observer, inject} from 'mobx-react';
@inject('propertiesStore')
@observer
export default class LeftPanel extends React.Component {


    constructor(props) {
        super(props)
        const propertiesStore = this.props.propertiesStore;

        this.state = {
            fontName: propertiesStore.fontName,
            fontSize: propertiesStore.fontSize,
            fontColor: propertiesStore.fontColor,
            lineSpace: propertiesStore.lineSpace,
            title: propertiesStore.title,
            abstract: propertiesStore.abstract,
            description: propertiesStore.description,
            claims: propertiesStore.claims
        };


        this.updateProperty = this.updateProperty.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDefaultState = this.getDefaultState.bind(this);
    }

    updateProperty(key, value) {
        const state = this.state
        state[key] = value;
        this.setState(state);
    }


    handleSubmit(e) {
        if (e) {
            e.preventDefault();
        }
        const state = this.state;
        const propertiesStore = this.props.propertiesStore;
        propertiesStore.fontName = state.fontName
        propertiesStore.fontSize = state.fontSize
        propertiesStore.fontColor = state.fontColor
        propertiesStore.lineSpace = state.lineSpace
        propertiesStore.title = state.title
        propertiesStore.abstract = state.abstract
        propertiesStore.description = state.description
        propertiesStore.claims = state.claims
    }


    getDefaultState() {
        const propertiesStore = this.props.propertiesStore;
        propertiesStore.fontName = 'Arial';
        propertiesStore.fontSize = '14px';
        propertiesStore.fontColor = 'BLACK';
        propertiesStore.lineSpace = '1';
        propertiesStore.title = true;
        propertiesStore.abstract = false;
        propertiesStore.description = true;
        propertiesStore.claims = false;

        this.setState({
            fontName: 'Arial',
            fontSize: '14px',
            fontColor: 'BLACK',
            lineSpace: '1',
            title: true,
            abstract: false,
            description: true,
            claims: false,
        });


    }
      


    render() {
        const state = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>User preferencies</h3>

                <InputLabel>Font name</InputLabel>
                <Select
                    name='name'
                    value={state.fontName}
                    onChange={(e) => this.updateProperty('fontName', e.target.value)}>
                    <MenuItem value="Arial">Arial</MenuItem>
                    <MenuItem value="Courier New">Courier New</MenuItem>
                    <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                </Select>

                <InputLabel>Font size</InputLabel>

                <Select name='size' value={state.fontSize}
                        onChange={(e) => this.updateProperty('fontSize', e.target.value)}>
                    <MenuItem value='14px'>14px</MenuItem>
                    <MenuItem value='18px'>18px</MenuItem>
                    <MenuItem value='22px'>22px</MenuItem>
                </Select>

                <br/>
                <InputLabel>Font color</InputLabel>

                <Select name='color' value={state.fontColor}
                        onChange={(e) => this.updateProperty('fontColor', e.target.value)}>
                    <MenuItem value='BLACK'>BLACK</MenuItem>
                    <MenuItem value='RED'>RED</MenuItem>
                    <MenuItem value='GREEN'>GREEN</MenuItem>
                    <MenuItem value='BLUE'>BLUE</MenuItem>
                </Select>

                <InputLabel>Line space</InputLabel>

                <Select name='lineSpace' value={state.lineSpace}
                        onChange={(e) => this.updateProperty('lineSpace', e.target.value)}>
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='1.5'>1.5</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                </Select>

                <h3>Layout</h3>
                <ul style={{listStyleType: "none",
                            paddingInlineStart: "0px"}}>
                    <li>
                        <FormControlLabel
                            control={<Checkbox checked={state.title} name="title" color="primary" />}
                            label="Title"
                            onChange={(e) => this.updateProperty('title', e.target.checked)}
                        /></li>
                    <li>
                        <FormControlLabel
                            control={<Checkbox checked={state.abstract} name="abstract" color="primary" />}
                            label="Abstract"
                            onChange={(e) => this.updateProperty('abstract', e.target.checked)}
                        /></li>
                    <li>
                        <FormControlLabel
                            control={<Checkbox checked={state.description} name="description" color="primary" />}
                            label="Description"
                            onChange={(e) => this.updateProperty('description', e.target.checked)}
                        /></li>
                    <li>
                        <FormControlLabel
                            control={<Checkbox checked={state.claims} name="claims" color="primary" />}
                            label="Claims"
                            onChange={(e) => this.updateProperty('claims', e.target.checked)}
                        /></li>
                </ul>
                <Button variant="contained" name="apply" type="submit" value="Apply">Apply</Button>
                <Button variant="contained" name="reset" value="Reset"
                        onClick={this.getDefaultState}>Reset</Button>
            </form>
        );
    }
}

