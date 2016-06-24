export const SWAPI_ROOT = 'http://swapi.co/api/';

export function getResourcesId(resourceType, url) {
  var resourceId = url.replace(SWAPI_ROOT+resourceType, '');
  resourceId = resourceId.replace(/\//g, '')
	return resourceId;
}

export function showLoading(show) {
    const loading = document.getElementById('loading');
    if (show) {
      if (loading.classList.contains('hide')) {
        loading.classList.remove('hide');
      }
    } else {
      if (!loading.classList.contains('hide')) {
        loading.classList.add('hide');
      }
    }
  }