import React from 'react'
import { connect } from 'react-redux'
import { CreateClub } from 'components'
import { postClub } from 'store/actions'

const CreateClubContainer = props => <CreateClub {...props} />

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostClub: (name, scope, category, introduction) => {
            dispatch(postClub(name, scope, category, introduction))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClubContainer)
