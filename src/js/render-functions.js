export function createCard({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) {
  return `
    <li class="card">
      <a href="${largeImageURL}" data-caption="${tags}">
        <img class="card-image" src="${webformatURL}" alt="${tags}" title="${tags}"/>
        <ul class="discription-list">
          <li>
            <h3 class="disc-name">Likes</h3>
            <p class="disc-value">${likes}</p>
          </li>
          <li>
            <h3 class="disc-name">Views</h3>
            <p class="disc-value">${views}</p>
          </li>
          <li>
            <h3 class="disc-name">Comments</h3>
            <p class="disc-value">${comments}</p>
          </li>
          <li>
            <h3 class="disc-name">Downloads</h3>
            <p class="disc-value">${downloads}</p>
          </li>
        </ul>
      </a>
    </li>`;
}

