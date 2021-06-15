// import libs
import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title';
import {categoryFetchRequest} from '../../../../category/service'
import {APP_TITLE} from '../../../../../values'

export default function Page({match, category, dispatch}) {

  const loadArticle = () => {
    if (!category.slug) {
      dispatch(categoryFetchRequest(match.params.slug))
    }
  }

  useEffect(() => {
    loadArticle()
  })

  const renderPublishedDate = () => {
    const {publishedAt} = category

    if (publishedAt) {
      return `at ${publishedAt.format('MMMM d, YYYY')}`
    }
  }

  const renderAuthor = () => {
    const {user} = category

    if (user) {
      return `by ${user.name}`
    }
  }

  const renderArticle = () => {
    return (<div className="col-12 col-sm-9 mb-5 mx-auto">
      <h2>{category.title}</h2>
      <small className="text-muted mb-5">{renderPublishedDate()} {renderAuthor()}</small>
      <p className="text-muted mb-5">{category.description}</p>
      <p>{category.content}</p>
    </div>)
  }

  return (
    <DocumentTitle title={`${category.title} - ${APP_TITLE}`}>
      <section id="components-categories">
        <div className="container">
          <div className="row">
            {renderArticle()}
          </div>
        </div>
      </section>
    </DocumentTitle>
  )

}

Page.displayName = 'ArticleShowPage'
Page.propTypes = {
  match: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}
