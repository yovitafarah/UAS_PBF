import {
    Home,
    Box,
    UserPlus,
} from 'react-feather';
import PropTypes from 'prop-types'

const contextTypes = {
    router: PropTypes.object,
}

export const Menu = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [

            {path: '/categories', title: 'Category', type: 'link'},
            {path: '/products', title: 'Products Item', type: 'link'},

        ]
    },

    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            {path: '/users', title: 'User List', type: 'link'},
        ]
    },

]

Menu.contextTypes = contextTypes

export default Menu