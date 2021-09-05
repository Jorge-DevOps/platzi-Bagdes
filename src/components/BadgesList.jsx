import React from "react";
import {Link} from "react-router-dom";
import "../styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun Badge</h3>
          <Link className="btn btn-primary" to="/badges/new">
            create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li className="badges_item" key={badge.id}>
              <img src={badge.avatarUrl} alt="" />
              <div className="badges__info">
                <p>
                  {badge.firstName} {badge.lastName}
                </p>
                <p className="badges__twitter">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/twitter-6.svg"
                    alt=""
                  />
                  {badge.twitter}
                </p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default BadgesList;
