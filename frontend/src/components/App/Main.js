import React, { Fragment } from 'react';

import store from '../../store/configureStore';
import MainContainer from './styles';

import Routes from '../../routes'
import { loadUser } from '../../actions/auth'


export const Main = props => {

    // componentDidMount(){
    //     store.dispatch(loadUser())        
    // }
    const { main, sidebar } = props;

    return (
        <MainContainer>
            <div>
                {main}   
                ghgfhghcgjhgjfjgjf     
            </div>
            <div>
                {sidebar}
                MainContainer23434546566564646466363363
            </div>
        </MainContainer>
    );
}

export default Main;
