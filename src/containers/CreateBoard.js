import React from 'react'
import { connect } from 'react-redux'
import { CreateBoard } from 'components'
import { postBoard } from 'store/actions'

const CreateBoardContainer = props => <CreateBoard {...props} />

const mapStateToProps = (state) => {
    return {
        clubState: state.club
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostBoard: (club, name) => {
            dispatch(postBoard(club, name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardContainer)
