/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */

// import libs
import {connect} from 'react-redux'
import User from '../../Users'

// import components
import Page from './Page'

// map store state as properties of the component
const mapStateToProps = (state, router) => {
    const {params} = router.match
    let user = state.user.data;

    if (user !== undefined) {
        user = user.find(user => user.id === Number(params.id))
    }

    return {
        user: user ? new User(user) : new User({})
    }
}

// binding store with component
export default connect(mapStateToProps)(Page)
