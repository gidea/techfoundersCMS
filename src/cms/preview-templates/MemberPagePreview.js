import React from 'react'
import PropTypes from 'prop-types'
import { MemberPageTemplate } from '../../templates/member-page'

const MemberPagePreview = ({ entry, widgetFor }) => (
  <MemberPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(data.image)}
    heading={data.heading}
    subheading={data.subheading}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MemberPagePreview
