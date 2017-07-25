import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import classnames from 'classnames';
import action from '../actions/pageAction';
import fetch from '../util/fetch';
import setTittle from '../util/setTittle';

export default function(Component, options) {
  options = Object.assign(
    {
      loading: () => null,
      url: '',
      name: '',
      data: {},
      title: ''
    },
    options
  );
  const LoadableComponent = Loadable({
    loading: options.loading,
    loader: Component,
    timeout: 10000
  });

  return connect((state = {}) => {
    const { page } = state;
    return { page };
  })(
    class Page extends PureComponent {
      componentWillMount() {
        const { dispatch, location } = this.props;
        options.title && setTittle(options.title);
        let search = fetch.stringify(
          Object.assign({}, fetch.parse(location.search), options.data)
        );
        options.url &&
          dispatch(
            action.fetchData(`${options.url}${search ? '?' + search : ''}`)
          );
      }

      render() {
        return (
          <div className={classnames('app__page', options.name)}>
            <LoadableComponent {...this.props} />
          </div>
        );
      }
    }
  );
}
