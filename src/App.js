import React, {lazy,Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from './pages/common/Loading/Loading'
import TabBar from './components/tab-bar/tab-bar'


const Mine = lazy(()=>import('./pages/mine/Mine/Mine'));
const Exchange = lazy(()=>import('./pages/exchange/Exchange/Exchange'));
const Sell = lazy(()=>import('./pages/sell/Sell/Sell'));
const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));


const AppPanel = (props)=>{

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact render={()=>{
                        return <Redirect to="/sell" />
                    }}/>
                    <Route path="/exchange" component={Exchange}/>
                    <Route path='/sell' component={Sell}/>
                    <Route path='/mine' component={Mine}/>
                    <Route component={NotFind}/>
                </Switch>
                
                <TabBar />

            </div>
        </Router>
    )
}



const App = (props)=>{
    return (
        <Suspense fallback={<Loading/>}>
            <AppPanel/>
        </Suspense>
    )
}

const mapStateToProps = (state)=>({

});
const mapDispatchToProps = (state)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(App)