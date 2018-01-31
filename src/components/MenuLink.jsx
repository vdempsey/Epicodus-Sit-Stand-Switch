import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class MenuLink extends React.Component {
  render() {
    const renderClass = this.props.brand
      ? 'menu-link menu-brand'
      : 'menu-link';

    const renderActiveClass = this.props.brand
      ? '' : renderClass + ' active';

    return (
      <div className="menu-item-container">
        {
          this.props.to
            ? <Link
              {...this.props}
              className={renderClass}
              activeClassName={renderActiveClass}
            />
            : <a {...this.props} className="menu-link" />
        }
      </div>
    );
  }
}

MenuLink.propTypes = {
  brand: PropTypes.bool
};

MenuLink.defaultProps = {
  brand: false
};

export default MenuLink;
