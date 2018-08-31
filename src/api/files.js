import { get } from 'utils/fetch';
import endpoints from 'apiEndpoints';

export const files = ({ tagname, page }) => {
  return new Promise((resolve, reject) => {
    return get(endpoints.files(), {
      auth: false,
      query: { tagname, page },
    })
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
};

export const tags = () => {
  return new Promise((resolve, reject) => {
    return get(endpoints.tags(), {
      auth: false,
    })
      .then(response => {
        return resolve(response);
      })
      .catch(error => {
        return reject(error);
      });
  });
};
