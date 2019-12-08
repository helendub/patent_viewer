import React, {Component} from 'react'
import Header from "./header";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import Content from "./content";
import Box from '@material-ui/core/Box';

export default class App extends Component {

    render () {
        return ( <>
                <Header />
                <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ display: 'block', position: 'absolute', width: '25%' }}><LeftPanel   /></div>
                    <div style={{ display: 'block', position: 'absolute', left: '25%', width: '50%'}}><Content /></div>
                    <div style={{ display: 'block', position: 'absolute', right: 0, width: '25%'}}><RightPanel /></div>
                </div>
            </>


        )
    }
}