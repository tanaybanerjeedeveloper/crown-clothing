import React from 'react'
import './directory.styles.scss'
//importing components
import MenuItem from '../menu-item/menu-item.js'
//connecting to redux
import { connect } from 'react-redux'
//importing selectors
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        )
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps, null)(Directory)
