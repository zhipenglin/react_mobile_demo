import fetch from 'isomorphic-fetch';
import query from 'query-string';
import firstOfAll from './firstOfAll';

const newFetch = function(url, options) {
  if (process.env.NODE_ENV === 'development') {
    let urlArgs = url.split('?');
    url = `${process.env.PUBLIC_URL}/mock_data${urlArgs[0]}.json${urlArgs[1]
      ? '?' + urlArgs[1]
      : ''}`;
  }
  return firstOfAll([
    fetch(
      url,
      Object.assign(
        {
          credentials: 'include',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        },
        options
      )
    )
      .then(
        response => response.json(),
        err => {
          return {
            err_no: '510',
            err_msg: '接口数据获取失败'
          };
        }
      )
      .then(
        res => {
          return res;
        },
        err => {
          return {
            err_no: '520',
            err_msg: '接口数据格式不正确'
          };
        }
      ),
    new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove({
          err_no: '404',
          err_msg: '请求超时'
        });
      }, 10000);
    })
  ]);
};
Object.assign(newFetch, query);

export default newFetch;
