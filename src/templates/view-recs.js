const viewRecommendations = (user, description) => {
  return /*HTML*/ `
  <div>
    <li>
      <h2> ${user} recommends {description.title} </h2>
      <p> ${description.extra}</p>
    </li>
  </div>
  `;
};

module.exports = viewRecommendations;
