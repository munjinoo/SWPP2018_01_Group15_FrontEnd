import React from 'react'
import { connect } from 'react-redux'
import { deleteClub } from 'store/actions'
import { DeleteClub } from 'components'

const DeleteClubContainer = props => <DeleteClub {...props} />

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (clubid) => {
            dispatch(deleteClub(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteClubContainer)
