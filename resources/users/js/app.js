import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'

// Layouts
import Beauty from './components/layouts/main';

//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'

// Theme Element

class Root extends React.Component {

    render() {
        store.dispatch(getAllProducts());

        return(<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>

                            <Route exact path={`/users/home`} component={Beauty}/>

                            <Layout>
								<Route path={`/users/collection`} component={CollectionLeftSidebar}/>
								<Route path={`/users/product/:id`} component={LeftSideBar}/>
								<Route path={`/users/cart`} component={Cart}/>
								<Route path={`/users/wishlist`} component={wishList}/>
								<Route path={`/users/compare`} component={Compare}/>
								<Route path={`/users/checkout`} component={checkOut}/>
								<Route path={`/users/order-success`} component={orderSuccess}/>
								<Route path={`/users/sales/orders`} component={aboutUs}/>
                                <Route path={`/users/about-us`} component={aboutUs}/>

                                {/* <Route exact path="*" component={PageNotFound} /> */}
                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>);
    }
}

ReactDOM.render(<Root />, document.getElementById('app'));


