import { Component } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
const { __ } = wp.i18n;

class LatestProducts extends Component {
    render() {
        const { posts, className } = this.props;
        return (
            
            <div className={className}>
                {console.log(this.props)}
                { (posts && posts.length > 0) ? 
                    <ul className="products-list">
                         {posts.map(post => (
                             <li className="products-list__item" key={post.id}>
                                  <img src={post.fimg_url}></img>
                                  <a target="_blank" href={post.link}>
                                     {post.title.rendered}
                                     <span><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.0303 17.0303L16.0607 11.9999L11.0303 6.96961L9.96968 8.03027L13.9394 11.9999L9.96968 15.9696L11.0303 17.0303Z" fill="currentColor"/></svg></span>
                                </a>
                            </li>
                        ))}
                     </ul>
                    : <div> { posts ? __('Nieznaleziono produktów, dodaj jakiś w sekcji Produkty') : __('Loading...')}</div>
                    }
            </div>
        )
    }
}

export default withSelect(
    (select, props) => {
        const { attributes } = props;
		const { numberOfPosts } = attributes;
		let query = {per_page: numberOfPosts };
        return {
            posts: select('core').getEntityRecords('postType', 'products')
        }
    }
)(LatestProducts);

