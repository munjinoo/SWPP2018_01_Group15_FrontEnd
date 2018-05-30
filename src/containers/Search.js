import React from 'react'
import { connect } from 'react-redux'
import { Search } from 'components'
import { search } from 'store/actions'

const SearchContainer = props => <Search {...props} />

const mapStateToProps = (state) => {
    return {
        search_result: state.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (query) => {
            dispatch(search(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
