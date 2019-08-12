import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import './css/blog-list.css'
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title="Blog">
        <div className="blog-list-container">
			<div className="blog-list-column">
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					return (              
						<div key={node.fields.slug}>
						<h2 className="blog-list-entry-title">
							<Link to={node.fields.slug}>
							{title}
							</Link>
						</h2>
						<div className="blog-list-date">{node.frontmatter.date}</div>
						<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
						</div>              
					)
				})}
		  </div>
        </div>
        <ul className="blog-list-navigation">
          {!isFirst && (
            <Link to={`/blog/${prevPage}`} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li className="blog-list-navigation-item" key={`pagination-number${i + 1}`}>
              <Link
                to={`/blog/${i === 0 ? '' : i + 1}`}
                style={{
                  padding: "0.5em",
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#007acc' : '',
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={`/blog/${nextPage}`} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`