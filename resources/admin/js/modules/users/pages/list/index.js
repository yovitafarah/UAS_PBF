// import libs
import {connect} from 'react-redux'
import Users from "../../Users";

// import components
import Page from './Page'

const mapStateToProps = state => {
    const {data, ...meta} = state.user

    return {
        users: data?.map((user) => new Users(user)),
        meta: Object.assign({}, meta)
    }
}

export default connect(mapStateToProps)(Page)
